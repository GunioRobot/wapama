/**
 * Copyright (c) 2010-2011
 * Intalio, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
*/

if (!WAPAMA.Plugins) {
	WAPAMA.Plugins = {};
}

if (!WAPAMA.Config) {
	WAPAMA.Config = {};
}

WAPAMA.UI.overrideButton();

WAPAMA.Plugins.UUIDRepositorySave = WAPAMA.Plugins.AbstractPlugin.extend({

    facade: undefined,
    // true to enable the "Autosave" button, disable while autosaving
    autosaveEnabled : true,
    // true to enable the "Autosave" button, disable while autosaving
    saveModal : undefined,

    construct: function(facade){
		this.facade = facade;

		//capability to set autosave on or off
		if (WAPAMA.CONFIG.UUID_AUTOSAVE_DEFAULT === undefined) {
			WAPAMA.CONFIG.UUID_AUTOSAVE_DEFAULT = true;
		}
		autosaveicon = WAPAMA.PATH + "images/disk_multiple_disabled.png";
		autosavetip = WAPAMA.I18N.Save.autosaveDesc_off;

		if (WAPAMA.CONFIG.UUID_AUTOSAVE_DEFAULT) {
			autosaveicon = WAPAMA.PATH + "images/disk_multiple.png";
			autosavetip = WAPAMA.I18N.Save.autosaveDesc_on;
		}

		autosavecfg = {
			'name': WAPAMA.I18N.Save.autosave,
			'group': WAPAMA.I18N.Save.group,
			'functionality': function(context) {
			   this.setautosave(WAPAMA.CONFIG.UUID_AUTOSAVE_INTERVAL);
			   if (this.autosaving) {
				   context.setIcon(WAPAMA.PATH + "images/disk_multiple.png", context);
				   context.setTooltip(WAPAMA.I18N.Save.autosaveDesc_on, context);
			   } else {
				   context.setIcon(WAPAMA.PATH + "images/disk_multiple_disabled.png", context);
				   context.setTooltip(WAPAMA.I18N.Save.autosaveDesc_off, context);
			   }
			   context.hide();
			   context.show();
		    }.bind(this),
			'icon': autosaveicon,
			'description': autosavetip,
			'isEnabled': function(){ return this.autosaveEnabled }.bind(this),
			'index': 2,
			'minShape': 0,
			'maxShape': 0
		};
		this.facade.offer(autosavecfg);

		// let's set autosave on.
		this.autosaveFunction = function() { if (/*savePlugin.changeDifference != 0*/true) { this._save(true, false); }}.bind(this, autosavecfg);
		this.setautosave(WAPAMA.CONFIG.UUID_AUTOSAVE_INTERVAL);

		this.facade.registerOnEvent(WAPAMA.CONFIG.SAVE_EVENT, function(event){ this._save(false, event.onClose); }.bind(this));
	},

	/**
	 * Switches autosave on or off.
	 * @param savePlugin the button.
	 */
	setautosave: function(interval) {
		if (this.autosaving === undefined) {
			this.autosaving = !WAPAMA.CONFIG.UUID_AUTOSAVE_DEFAULT;
		}

		value = !this.autosaving;
		if (value) {
			this.autosaveInternalId = self.setInterval(this.autosaveFunction, interval);
		} else {
			self.clearInterval(this.autosaveInternalId);
		}

		this.autosaving = value;
	},

	/**
	 * Saves data by calling the backend.
	 * @param asave determine whether the function is invoked by autosave
	 *              True: by autosave | False: by save
	 * @param onClose true if it needs to close the window after save success
	 */
	_save: function(asave, onClose) {
		// show saving status, display a "loading" icon in "Autosave" button.
		this.showSaveStatus(asave);
		var svgDOM = DataManager.serialize(this.facade.getCanvas().getSVGRepresentation(true));
		// get the json and add properties label into
		var json=this.facade.getJSON();
		if(json.childShapes.length>0 && json.stencil && json.stencil.id == "PipeDiagram"){
			var namespace=json.stencilset.namespace;
			var stencils=this.facade.getStencilSets()[namespace]._stencils;
			//json.stencil.name=stencils[json.stencilset.namespace+json.stencil.id]._jsonStencil.title
			json.childShapes.each(function(shape){
				var stencil=stencils[namespace+shape.stencil.id];
				if(shape.stencil)
					shape.stencil.name= stencil._jsonStencil.title;
				shape.propertyNames=new Object();
				stencil._properties.each(function(property){
					property=property[1];
					shape.propertyNames[property._jsonProp.id]=property._jsonProp.title
				});

				for (var property in shape.properties) {
					shape.properties[property] = String(shape.properties[property]).gsub("<", "&lt;");
					shape.properties[property] = String(shape.properties[property]).gsub(">", "&gt;");
					shape.properties[property] = String(shape.properties[property]).gsub("\"", "&quot;");
					shape.properties[property] = String(shape.properties[property]).gsub("'", "&apos;");
					shape.properties[property] = String(shape.properties[property]).gsub("%", "&#37;");
				}
			});
		}
		var serializedDOM = WAPAMA.UI.encode(json);
		//var rdf = this.getRDFFromDOM();

		// Send the request to the server.
		new Ajax.Request(WAPAMA.CONFIG.UUID_URL(), {
                method: 'POST',
                asynchronous: true,
                contentType: "text/json; charset=UTF-8",
                postBody: WAPAMA.UI.encode({data: serializedDOM, svg : svgDOM, uuid: WAPAMA.UUID, //rdf: rdf,
                    profile: WAPAMA.PROFILE, savetype: asave}),
				onSuccess : (function(transport) {
					// end saving, the "loading" icon return to normal
					this.hideSaveStatus(asave);
					response = transport.responseText;
					if (response.length != 0) {
						try {
							var jsonObj = response.evalJSON();
							var errorMsgs = jsonObj.errorMsgs;
							if (errorMsgs != undefined) {
								// raise loading disable event.
								this.facade.raiseEvent({
									type : WAPAMA.CONFIG.EVENT_LOADING_DISABLE
								});
								WAPAMA.UI.showValidateResult(jsonObj);
								return;
							}
						} catch (err) {
							WAPAMA.Log.error(err);
						}
					} else {
						// show saved status
						this.facade.raiseEvent({
							type : WAPAMA.CONFIG.EVENT_LOADING_STATUS,
							text : WAPAMA.I18N.Save.saved
						});
					}
					if (!asave && WAPAMA.UI.prompt) {
						WAPAMA.UI.prompt.msg(WAPAMA.I18N.Save.successTitle, WAPAMA.I18N.Save.successMsg);
					}
					// if the save function is invoked by "Save_n_Close" or "Window Close"
					if (onClose) {
						// close the window after saving succeed
						WAPAMA.UI.closeInstanceWindow(WAPAMA.UUID + "_win");
					}
				}).bind(this),
			onFailure: (function(transport) {
				// end saving, the "loading" icon return to normal
				this.hideSaveStatus(asave);
				// raise loading disable event.
                this.facade.raiseEvent({
                    type: WAPAMA.CONFIG.EVENT_LOADING_DISABLE
                });
                // if it's autosaving, ignore errors
                if (asave) {
                    return;
                }
                var responseText = transport.responseText
                // show the error message box while "save"
                WAPAMA.UI.showFailedWin(responseText);
                WAPAMA.Log.warn("Saving failed: " + responseText);
            }).bind(this),
			on403: (function(transport) {
				// end saving, the "loading" icon return to normal
				this.hideSaveStatus(asave);
				// raise loading disable event.
                this.facade.raiseEvent({
                    type: WAPAMA.CONFIG.EVENT_LOADING_DISABLE
                });

				WAPAMA.UI.alert(WAPAMA.I18N.Wapama.title, WAPAMA.I18N.Save.noRights);

				WAPAMA.log.warn("Saving failed (403): " + transport.responseText);
			}).bind(this)
		});
		return true;
	},

    /**
     * Shows the saving status
     * @param asave True: autosave | False: save
     */
    showSaveStatus: function(asave) {
        if (asave) {
            // disable the "Autoave" button.
            this.autosaveEnabled = false;
            //show an icon and a message in the toolbar
            var btn = autosavecfg.buttonInstance
            btn.setIcon(WAPAMA.PATH + "images/ajax-loader.gif", btn);
            // raise event, make toolbar refresh.
            this.facade.raiseEvent({type : WAPAMA.CONFIG.EVENT_TOOLBAR_REFRESH});
        } else {
            this.saveModal = WAPAMA.UI.showSavingMask();
        }
    },

	/**
	 * Shows the saving status
	 * @param asave True: autosave | False: save
	 */
    hideSaveStatus: function(asave) {
        if (asave) {
            if (this.autosaving) {
                // disable the "Autoave" button.
                this.autosaveEnabled = true;
                // show an icon and a message in the toolbar
                var btn = autosavecfg.buttonInstance
                btn.setIcon(WAPAMA.PATH + "images/disk_multiple.png", btn);
            } else {
                // disable the "Autoave" button.
                this.autosaveEnabled = true;
                // show an icon and a message in the toolbar
                var btn = autosavecfg.buttonInstance
                btn.setIcon(WAPAMA.PATH + "images/disk_multiple_disabled.png", btn);
            }
            // raise event, make toolbar refresh.
            this.facade.raiseEvent({
                type : WAPAMA.CONFIG.EVENT_TOOLBAR_REFRESH
            });
        } else {
            // remove the saving mask
            if (this.saveModal) {
                this.saveModal.hide();
            }
        }
    }
});

/**
 * Method to load model or create new one
 * (moved from editor handler)
 */
window.onWapamaResourcesLoaded = function() {
	var stencilset = WAPAMA.Utils.getParamFromUrl('stencilset') || WAPAMA.CONFIG.SSET;
	var editor_parameters = {
		id: WAPAMA.UUID,
		stencilset: {
			url: stencilset
		}
	};
	if(!(WAPAMA.UUID === undefined)) {
		editor_parameters.contentLoadedCallback = function(editorCallback) {
	 		//load the model from the repository from its uuid
			new Ajax.Request(WAPAMA.CONFIG.UUID_URL() + "&time=" +(new Date()).getTime(), {
				asynchronous: true,
				method: 'get',
				onSuccess: function(transport) {
					response = transport.responseText;

					var model = null;
					if (response.length != 0) {
						try {
							model = response.evalJSON();
							editor_parameters.model = model;
						} catch(err) {
							WAPAMA.Log.error(err);
						}
					}
					editorCallback(model);
					// make the save button enabled after load finished
					WAPAMA.UI.enableSaveButton();
				},
				onFailure: function(transport) {
					WAPAMA.Log.error("Could not load the model for uuid " + WAPAMA.UUID);
					editorCallback(null);
					// make the save button enabled after load finished
					WAPAMA.UI.enableSaveButton();
				}
	        });
		};
	}
	// finally open the editor:
	new WAPAMA.Editor(editor_parameters);
};
