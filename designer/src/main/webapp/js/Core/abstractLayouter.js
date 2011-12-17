/**
 * Copyright (c) 2009
 * Willi Tscheschner
 * Copyright (c) 2010-2011 Intalio, Inc.
 *
 **/

if(!WAPAMA){ var WAPAMA = {} }
if(!WAPAMA.Plugins){ WAPAMA.Plugins = {} }

/**
   This abstract plugin implements the core behaviour of layout

   @class WAPAMA.Plugins.AbstractLayouter
   @constructor Creates a new instance
   @author Willi Tscheschner
*/
WAPAMA.Plugins.AbstractLayouter = WAPAMA.Plugins.AbstractPlugin.extend({

	/**
	 * 'layouted' defined all types of shapes which will be layouted.
	 * It can be one value or an array of values. The value
	 * can be a Stencil ID (as String) or an class type of either
	 * a WAPAMA.Core.Node or WAPAMA.Core.Edge
     * @type Array|String|Object
     * @memberOf WAPAMA.Plugins.AbstractLayouter.prototype
	 */
	layouted : [],

	/**
	 * Constructor
	 * @param {Object} facade
	 * @memberOf WAPAMA.Plugins.AbstractLayouter.prototype
	 */
	construct: function( facade ){
		arguments.callee.$.construct.apply(this, arguments);

		this.facade.registerOnEvent(WAPAMA.CONFIG.EVENT_LAYOUT, this._initLayout.bind(this));
	},

	/**
	 * Proofs if this shape should be layouted or not
	 * @param {Object} shape
     * @memberOf WAPAMA.Plugins.AbstractLayouter.prototype
	 */
	isIncludedInLayout: function(shape){
		if (!(this.layouted instanceof Array)){
			this.layouted = [this.layouted].compact();
		}

		// If there are no elements
		if (this.layouted.length <= 0) {
			// Return TRUE
			return true;
		}

		// Return TRUE if there is any correlation between
		// the 'layouted' attribute and the shape themselve.
		return this.layouted.any(function(s){
			if (typeof s == "string") {
				return shape.getStencil().id().include(s);
			} else {
				return shape instanceof s;
			}
		})
	},

	/**
	 * Callback to start the layouting
	 * @param {Object} event Layout event
	 * @param {Object} shapes Given shapes
     * @memberOf WAPAMA.Plugins.AbstractLayouter.prototype
	 */
	_initLayout: function(event){

		// Get the shapes
		var shapes = [event.shapes].flatten().compact();

		// Find all shapes which should be layouted
		var toLayout = shapes.findAll(function(shape){
			return this.isIncludedInLayout(shape)
		}.bind(this))

		// If there are shapes left
		if (toLayout.length > 0){
			// Do layout
			this.layout(toLayout);
		}
	},

	/**
	 * Implementation of layouting a set on shapes
	 * @param {Object} shapes Given shapes
     * @memberOf WAPAMA.Plugins.AbstractLayouter.prototype
	 */
	layout: function(shapes){
		throw new Error("Layouter has to implement the layout function.")
	},

	/**
	 * Returns the direct child shapes that are not on the ignore list.
	 */
	getChildShapesWithout: function(shape, ignoreList) {
		var childs = shape.getChildShapes(false);
		return childs.findAll(function(child) {
			return !ignoreList.member(child.getStencil().id());
		});
	}
});