/**
 * Copyright (c) 2009-2011 Intalio, Inc.
 * @namespace Wapama name space for different utility methods
 * @name WAPAMA.Utils
*/

WAPAMA.Utils = {
    /**
     * General helper method for parsing a param out of current location url
     * @example
     * // Current url in Browser => "http://wapama.org?param=value"
     * WAPAMA.Utils.getParamFromUrl("param") // => "value"
     * @param {Object} name
     */
    getParamFromUrl: function(name){
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1];
        }
    },

	adjustGradient: function(gradient, reference){

		if (WAPAMA.CONFIG.DISABLE_GRADIENT && gradient){

			var col = reference.getAttributeNS(null, "stop-color") || "#ffffff";

			$A(gradient.getElementsByTagName("stop")).each(function(stop){
				if (stop == reference){ return; }
				stop.setAttributeNS(null, "stop-color", col);
			})
		}
	}
}
