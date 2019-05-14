sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"com/json/model/JSONModel/model/models"
], function (UIComponent, Device,JSONModel, models) {
	"use strict";

	return UIComponent.extend("com.json.model.JSONModel.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();
			var oModel = new JSONModel("model/singlecategory5.json");
			this.setModel(oModel,'categoryComp');
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});