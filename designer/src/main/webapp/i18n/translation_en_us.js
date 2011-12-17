/**
 * @author nicolas.peters
 *
 * Contains all strings for the default language (en-us).
 * Version 1 - 08/29/08
 */
if(!WAPAMA) var WAPAMA = {};

if(!WAPAMA.I18N) WAPAMA.I18N = {};

WAPAMA.I18N.Language = "en_us"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!WAPAMA.I18N.Wapama) WAPAMA.I18N.Wapama = {};

WAPAMA.I18N.Wapama.title		= WAPAMA.TITLE;
WAPAMA.I18N.Wapama.noBackendDefined	= "Caution! \nNo backend defined.\n The requested model cannot be loaded. Try to load a configuration with a save plugin.";
WAPAMA.I18N.Wapama.pleaseWait 	= "Please wait while loading...";
WAPAMA.I18N.Wapama.notLoggedOn = "Not logged on";
WAPAMA.I18N.Wapama.editorOpenTimeout = "The editor does not seem to be started yet. Please check, whether you have a popup blocker enabled and disable it or allow popups for this site. We will never display any commercials on this site.";

if(!WAPAMA.I18N.AddDocker) WAPAMA.I18N.AddDocker = {};

WAPAMA.I18N.AddDocker.group = "Docker";
WAPAMA.I18N.AddDocker.add = "Add Docker";
WAPAMA.I18N.AddDocker.addDesc = "Add a Docker to an edge, by clicking on it";
WAPAMA.I18N.AddDocker.del = "Delete Docker";
WAPAMA.I18N.AddDocker.delDesc = "Delete a Docker";

if(!WAPAMA.I18N.ShapeConnector) WAPAMA.I18N.ShapeConnector = {};

WAPAMA.I18N.ShapeConnector.group = "Connector";
WAPAMA.I18N.ShapeConnector.add = "Connect Shapes";
WAPAMA.I18N.ShapeConnector.addDesc = "Connect several nodes by marking them in the desired order";

if(!WAPAMA.I18N.SSExtensionLoader) WAPAMA.I18N.SSExtensionLoader = {};

WAPAMA.I18N.SSExtensionLoader.group = "Stencil Set";
WAPAMA.I18N.SSExtensionLoader.add = "Add Stencil Set Extension";
WAPAMA.I18N.SSExtensionLoader.addDesc = "Add a stencil set extension";
WAPAMA.I18N.SSExtensionLoader.loading = "Loading Stencil Set Extension";
WAPAMA.I18N.SSExtensionLoader.noExt = "There are no extensions available or all available extensions are already loaded.";
WAPAMA.I18N.SSExtensionLoader.failed1 = "Loading stencil set extensions configuration failed. The response is not a valid configuration file.";
WAPAMA.I18N.SSExtensionLoader.failed2 = "Loading stencil set extension configuration file failed. The request returned an error.";
WAPAMA.I18N.SSExtensionLoader.panelTitle = "Stencil Set Extensions";
WAPAMA.I18N.SSExtensionLoader.panelText = "Select the stencil set extensions you want to load.";

if(!WAPAMA.I18N.AdHocCC) WAPAMA.I18N.AdHocCC = {};

WAPAMA.I18N.AdHocCC.group = "Ad Hoc";
WAPAMA.I18N.AdHocCC.compl = "Edit Completion Condition";
WAPAMA.I18N.AdHocCC.complDesc = "Edit an Ad Hoc Activity's Completion Condition";
WAPAMA.I18N.AdHocCC.notOne = "Not exactly one element selected!";
WAPAMA.I18N.AdHocCC.nodAdHocCC = "Selected element has no ad hoc completion condition!";
WAPAMA.I18N.AdHocCC.selectTask = "Select a task...";
WAPAMA.I18N.AdHocCC.selectState = "Select a state...";
WAPAMA.I18N.AdHocCC.addExp = "Add Expression";
WAPAMA.I18N.AdHocCC.selectDataField = "Select a data field...";
WAPAMA.I18N.AdHocCC.enterEqual = "Enter a value that must equal...";
WAPAMA.I18N.AdHocCC.and = "and";
WAPAMA.I18N.AdHocCC.or = "or";
WAPAMA.I18N.AdHocCC.not = "not";
WAPAMA.I18N.AdHocCC.clearCC = "Clear Completion Condition";
WAPAMA.I18N.AdHocCC.editCC = "Edit Ad Hoc Completion Conditions";
WAPAMA.I18N.AdHocCC.addExecState = "Add Execution State Expression: ";
WAPAMA.I18N.AdHocCC.addDataExp = "Add Data Expression: ";
WAPAMA.I18N.AdHocCC.addLogOp = "Add Logical Operators: ";
WAPAMA.I18N.AdHocCC.curCond = "Current Completion Condition: ";

if(!WAPAMA.I18N.AMLSupport) WAPAMA.I18N.AMLSupport = {};

WAPAMA.I18N.AMLSupport.group = "EPC";
WAPAMA.I18N.AMLSupport.imp = "Import AML file";
WAPAMA.I18N.AMLSupport.impDesc = "Import an Aris 7 AML file";
WAPAMA.I18N.AMLSupport.failed = "Importing AML file failed. Please check, if the selected file is a valid AML file. Error message: ";
WAPAMA.I18N.AMLSupport.failed2 = "Importing AML file failed: ";
WAPAMA.I18N.AMLSupport.noRights = "You have no rights to import multiple EPC-Diagrams (Login required).";
WAPAMA.I18N.AMLSupport.panelText = "Select an AML (.xml) file to import.";
WAPAMA.I18N.AMLSupport.file = "File";
WAPAMA.I18N.AMLSupport.importBtn = "Import AML-File";
WAPAMA.I18N.AMLSupport.get = "Get diagrams...";
WAPAMA.I18N.AMLSupport.close = "Close";
WAPAMA.I18N.AMLSupport.title = "Title";
WAPAMA.I18N.AMLSupport.selectDiagrams = "Select the diagram(s) you want to import. <br/> If one model is selected, it will be imported in the current editor, if more than one is selected, those models will directly be stored in the repository.";
WAPAMA.I18N.AMLSupport.impText = "Import";
WAPAMA.I18N.AMLSupport.impProgress = "Importing...";
WAPAMA.I18N.AMLSupport.cancel = "Cancel";
WAPAMA.I18N.AMLSupport.name = "Name";
WAPAMA.I18N.AMLSupport.allImported = "All imported diagrams.";
WAPAMA.I18N.AMLSupport.ok = "OK";

if(!WAPAMA.I18N.Arrangement) WAPAMA.I18N.Arrangement = {};

WAPAMA.I18N.Arrangement.groupZ = "Z-Order";
WAPAMA.I18N.Arrangement.btf = "Bring To Front";
WAPAMA.I18N.Arrangement.btfDesc = "Bring to Front";
WAPAMA.I18N.Arrangement.btb = "Bring To Back";
WAPAMA.I18N.Arrangement.btbDesc = "Bring To Back";
WAPAMA.I18N.Arrangement.bf = "Bring Forward";
WAPAMA.I18N.Arrangement.bfDesc = "Bring Forward";
WAPAMA.I18N.Arrangement.bb = "Bring Backward";
WAPAMA.I18N.Arrangement.bbDesc = "Bring Backward";
WAPAMA.I18N.Arrangement.groupA = "Alignment";
WAPAMA.I18N.Arrangement.ab = "Alignment Bottom";
WAPAMA.I18N.Arrangement.abDesc = "Bottom";
WAPAMA.I18N.Arrangement.am = "Alignment Middle";
WAPAMA.I18N.Arrangement.amDesc = "Middle";
WAPAMA.I18N.Arrangement.at = "Alignment Top";
WAPAMA.I18N.Arrangement.atDesc = "Top";
WAPAMA.I18N.Arrangement.al = "Alignment Left";
WAPAMA.I18N.Arrangement.alDesc = "Left";
WAPAMA.I18N.Arrangement.ac = "Alignment Center";
WAPAMA.I18N.Arrangement.acDesc = "Center";
WAPAMA.I18N.Arrangement.ar = "Alignment Right";
WAPAMA.I18N.Arrangement.arDesc = "Right";
WAPAMA.I18N.Arrangement.as = "Alignment Same Size";
WAPAMA.I18N.Arrangement.asDesc = "Same Size";

if(!WAPAMA.I18N.BPELSupport) WAPAMA.I18N.BPELSupport = {};

WAPAMA.I18N.BPELSupport.group = "BPEL";
WAPAMA.I18N.BPELSupport.exp = "Export BPEL";
WAPAMA.I18N.BPELSupport.expDesc = "Export diagram to BPEL";
WAPAMA.I18N.BPELSupport.imp = "Import BPEL";
WAPAMA.I18N.BPELSupport.impDesc = "Import a BPEL file";
WAPAMA.I18N.BPELSupport.selectFile = "Select a BPEL file to import";
WAPAMA.I18N.BPELSupport.file = "file";
WAPAMA.I18N.BPELSupport.impPanel = "Import BPEL file";
WAPAMA.I18N.BPELSupport.impBtn = "Import";
WAPAMA.I18N.BPELSupport.content = "content";
WAPAMA.I18N.BPELSupport.close = "Close";
WAPAMA.I18N.BPELSupport.error = "Error";
WAPAMA.I18N.BPELSupport.progressImp = "Import...";
WAPAMA.I18N.BPELSupport.progressExp = "Export...";
WAPAMA.I18N.BPELSupport.impFailed = "An error while importing occurs! <br/>Please check error message: <br/><br/>";

if(!WAPAMA.I18N.BPELLayout) WAPAMA.I18N.BPELLayout = {};

WAPAMA.I18N.BPELLayout.group = "BPELLayout";
WAPAMA.I18N.BPELLayout.disable = "disable layout";
WAPAMA.I18N.BPELLayout.disDesc = "disable auto layout plug-in";
WAPAMA.I18N.BPELLayout.enable = "enable layout";
WAPAMA.I18N.BPELLayout.enDesc = "enable auto layout plug-in";

if(!WAPAMA.I18N.BPEL4Chor2BPELSupport) WAPAMA.I18N.BPEL4Chor2BPELSupport = {};

WAPAMA.I18N.BPEL4Chor2BPELSupport.group = "BPEL4Chor";
WAPAMA.I18N.BPEL4Chor2BPELSupport.exp = "Export to BPEL";
WAPAMA.I18N.BPEL4Chor2BPELSupport.expDesc = "Export diagram to BPEL";

if(!WAPAMA.I18N.BPEL4ChorSupport) WAPAMA.I18N.BPEL4ChorSupport = {};

WAPAMA.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.exp = "Export BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.expDesc = "Export diagram to BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.imp = "Import BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.impDesc = "Import a BPEL4Chor file";
WAPAMA.I18N.BPEL4ChorSupport.gen = "BPEL4Chor generator";
WAPAMA.I18N.BPEL4ChorSupport.genDesc = "generate values of some BPEL4Chor properties if they are already known(e.g. sender of messageLink)";
WAPAMA.I18N.BPEL4ChorSupport.selectFile = "Select a BPEL4Chor file to import";
WAPAMA.I18N.BPEL4ChorSupport.file = "file";
WAPAMA.I18N.BPEL4ChorSupport.impPanel = "Import BPEL4Chor file";
WAPAMA.I18N.BPEL4ChorSupport.impBtn = "Import";
WAPAMA.I18N.BPEL4ChorSupport.content = "content";
WAPAMA.I18N.BPEL4ChorSupport.close = "Close";
WAPAMA.I18N.BPEL4ChorSupport.error = "Error";
WAPAMA.I18N.BPEL4ChorSupport.progressImp = "Import...";
WAPAMA.I18N.BPEL4ChorSupport.progressExp = "Export...";
WAPAMA.I18N.BPEL4ChorSupport.impFailed = "An error while importing occurs! <br/>Please check error message: <br/><br/>";

if(!WAPAMA.I18N.Bpel4ChorTransformation) WAPAMA.I18N.Bpel4ChorTransformation = {};

WAPAMA.I18N.Bpel4ChorTransformation.group = "Export";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPEL = "Export BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPELDesc = "Export diagram to BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDL = "Export XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDLDesc = "Export diagram to XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.warning = "Warning";
WAPAMA.I18N.Bpel4ChorTransformation.wrongValue = 'The changed name must have the value "1" to avoid errors during the transformation to BPEL4Chor';
WAPAMA.I18N.Bpel4ChorTransformation.loopNone = 'The loop type of the receive task must be "None" to be transformable to BPEL4Chor';
WAPAMA.I18N.Bpel4ChorTransformation.error = "Error";
WAPAMA.I18N.Bpel4ChorTransformation.noSource = "1 with ID 2 has no source object.";
WAPAMA.I18N.Bpel4ChorTransformation.noTarget = "1 with ID 2 has no target object.";
WAPAMA.I18N.Bpel4ChorTransformation.transCall = "An error occurred during the transformation call. 1:2";
WAPAMA.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "Export to XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "Export to BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.noGen = "The transformation input could not be generated: 1\n2\n";

WAPAMA.I18N.BPMN2PNConverter = {
  name: "Convert to Petri net",
  desc: "Converts BPMN diagrams to Petri nets",
  group: "Export",
  error: "Error",
  errors: {
    server: "Couldn't import BPNM diagram.",
    noRights: "Don't you have read permissions on given model?",
    notSaved: "Model must be saved and reopened for using Petri net exporter!"
  },
  progress: {
      status: "Status",
      importingModel: "Importing BPMN Model",
      fetchingModel: "Fetching",
      convertingModel: "Converting",
      renderingModel: "Rendering"
  }
}

if(!WAPAMA.I18N.TransformationDownloadDialog) WAPAMA.I18N.TransformationDownloadDialog = {};

WAPAMA.I18N.TransformationDownloadDialog.error = "Error";
WAPAMA.I18N.TransformationDownloadDialog.noResult = "The transformation service did not return a result.";
WAPAMA.I18N.TransformationDownloadDialog.errorParsing = "Error During the Parsing of the Diagram.";
WAPAMA.I18N.TransformationDownloadDialog.transResult = "Transformation Results";
WAPAMA.I18N.TransformationDownloadDialog.showFile = "Show the result file";
WAPAMA.I18N.TransformationDownloadDialog.downloadFile = "Download the result file";
WAPAMA.I18N.TransformationDownloadDialog.downloadAll = "Download all result files";

if(!WAPAMA.I18N.DesynchronizabilityOverlay) WAPAMA.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
WAPAMA.I18N.DesynchronizabilityOverlay.group = "Overlay";
WAPAMA.I18N.DesynchronizabilityOverlay.name = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.desc = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.sync = "The net is desynchronizable.";
WAPAMA.I18N.DesynchronizabilityOverlay.error = "The net has 1 syntax error.";
WAPAMA.I18N.DesynchronizabilityOverlay.invalid = "Invalid answer from server.";

if(!WAPAMA.I18N.Edit) WAPAMA.I18N.Edit = {};

WAPAMA.I18N.Edit.group = "Edit";
WAPAMA.I18N.Edit.cut = "Cut";
WAPAMA.I18N.Edit.cutDesc = "Cuts the selection into the clipboard";
WAPAMA.I18N.Edit.copy = "Copy";
WAPAMA.I18N.Edit.copyDesc = "Copies the selection into the clipboard";
WAPAMA.I18N.Edit.paste = "Paste";
WAPAMA.I18N.Edit.pasteDesc = "Pastes the clipboard to the canvas";
WAPAMA.I18N.Edit.del = "Delete";
WAPAMA.I18N.Edit.delDesc = "Deletes all selected shapes";

if(!WAPAMA.I18N.EPCSupport) WAPAMA.I18N.EPCSupport = {};

WAPAMA.I18N.EPCSupport.group = "EPC";
WAPAMA.I18N.EPCSupport.exp = "Export EPC";
WAPAMA.I18N.EPCSupport.expDesc = "Export diagram to EPML";
WAPAMA.I18N.EPCSupport.imp = "Import EPC";
WAPAMA.I18N.EPCSupport.impDesc = "Import an EPML file";
WAPAMA.I18N.EPCSupport.progressExp = "Exporting model";
WAPAMA.I18N.EPCSupport.selectFile = "Select an EPML (.empl) file to import.";
WAPAMA.I18N.EPCSupport.file = "File";
WAPAMA.I18N.EPCSupport.impPanel = "Import EPML File";
WAPAMA.I18N.EPCSupport.impBtn = "Import";
WAPAMA.I18N.EPCSupport.close = "Close";
WAPAMA.I18N.EPCSupport.error = "Error";
WAPAMA.I18N.EPCSupport.progressImp = "Import...";

if(!WAPAMA.I18N.ERDFSupport) WAPAMA.I18N.ERDFSupport = {};

WAPAMA.I18N.ERDFSupport.exp = "Export to ERDF";
WAPAMA.I18N.ERDFSupport.expDesc = "Export to ERDF";
WAPAMA.I18N.ERDFSupport.imp = "Import from ERDF";
WAPAMA.I18N.ERDFSupport.impDesc = "Import from ERDF";
WAPAMA.I18N.ERDFSupport.impFailed = "Request for import of ERDF failed.";
WAPAMA.I18N.ERDFSupport.impFailed2 = "An error while importing occurs! <br/>Please check error message: <br/><br/>";
WAPAMA.I18N.ERDFSupport.error = "Error";
WAPAMA.I18N.ERDFSupport.noCanvas = "The xml document has no Wapama canvas node included!";
WAPAMA.I18N.ERDFSupport.noSS = "The Wapama canvas node has no stencil set definition included!";
WAPAMA.I18N.ERDFSupport.wrongSS = "The given stencil set does not fit to the current editor!";
WAPAMA.I18N.ERDFSupport.selectFile = "Select an ERDF (.xml) file or type in the ERDF to import it!";
WAPAMA.I18N.ERDFSupport.file = "File";
WAPAMA.I18N.ERDFSupport.impERDF = "Import ERDF";
WAPAMA.I18N.ERDFSupport.impBtn = "Import";
WAPAMA.I18N.ERDFSupport.impProgress = "Importing...";
WAPAMA.I18N.ERDFSupport.close = "Close";
WAPAMA.I18N.ERDFSupport.deprTitle = "Really export to eRDF?";
WAPAMA.I18N.ERDFSupport.deprText = "Exporting to eRDF is not recommended anymore because the support will be stopped in future versions of the Wapama editor. If possible, export the model to JSON. Do you want to export anyway?";

if(!WAPAMA.I18N.jPDLSupport) WAPAMA.I18N.jPDLSupport = {};

WAPAMA.I18N.jPDLSupport.group = "Export";
WAPAMA.I18N.jPDLSupport.exp = "Export to jPDL";
WAPAMA.I18N.jPDLSupport.expDesc = "Export to jPDL";
WAPAMA.I18N.jPDLSupport.imp = "Import from jPDL";
WAPAMA.I18N.jPDLSupport.impDesc = "Import jPDL File";
WAPAMA.I18N.jPDLSupport.impFailedReq = "Request for import of jPDL failed.";
//WAPAMA.I18N.jPDLSupport.impFailedJson = "Transformation of jPDL failed.";
WAPAMA.I18N.jPDLSupport.impFailedJsonAbort = "Import aborted.";
WAPAMA.I18N.jPDLSupport.loadSseQuestionTitle = "jBPM stencil set extension needs to be loaded";
WAPAMA.I18N.jPDLSupport.loadSseQuestionBody = "In order to import jPDL, the stencil set extension has to be loaded. Do you want to proceed?";
WAPAMA.I18N.jPDLSupport.expFailedReq = "Request for export of model failed.";
WAPAMA.I18N.jPDLSupport.expFailedXml = "Export to jPDL failed. Exporter reported: ";
WAPAMA.I18N.jPDLSupport.error = "Error";
WAPAMA.I18N.jPDLSupport.selectFile = "Select an jPDL (.xml) file or type in the jPDL to import it!";
WAPAMA.I18N.jPDLSupport.file = "File";
WAPAMA.I18N.jPDLSupport.impJPDL = "Import jPDL";
WAPAMA.I18N.jPDLSupport.impBtn = "Import";
WAPAMA.I18N.jPDLSupport.impProgress = "Importing...";
WAPAMA.I18N.jPDLSupport.close = "Close";

if(!WAPAMA.I18N.Bpmn2Bpel) WAPAMA.I18N.Bpmn2Bpel = {};

WAPAMA.I18N.Bpmn2Bpel.group = "ExecBPMN";
WAPAMA.I18N.Bpmn2Bpel.show = "Show transformed BPEL";
WAPAMA.I18N.Bpmn2Bpel.download = "Download transformed BPEL";
WAPAMA.I18N.Bpmn2Bpel.deploy = "Deploy transformed BPEL";
WAPAMA.I18N.Bpmn2Bpel.showDesc = "Transforms BPMN to BPEL and shows the result in a new window.";
WAPAMA.I18N.Bpmn2Bpel.downloadDesc = "Transforms BPMN to BPEL and offers to download the result.";
WAPAMA.I18N.Bpmn2Bpel.deployDesc = "Transforms BPMN to BPEL and deploys the business process on the BPEL-Engine Apache ODE";
WAPAMA.I18N.Bpmn2Bpel.transfFailed = "Request for transformation to BPEL failed.";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputTitle = "Apache ODE URL";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelDeploy = "Deploy Process";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelCancel = "Cancel";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputPanelText = "Please type-in the URL to the Apache ODE BPEL-Engine. E.g.: http://myserver:8080/ode";


if(!WAPAMA.I18N.Save) WAPAMA.I18N.Save = {};

WAPAMA.I18N.Save.group = "File";
WAPAMA.I18N.Save.save = "Save";
WAPAMA.I18N.Save.autosave = "Autosave";
WAPAMA.I18N.Save.saveDesc = "Save";
WAPAMA.I18N.Save.autosaveDesc = "Autosave";
WAPAMA.I18N.Save.autosaveDesc_on = "Autosave (on)";
WAPAMA.I18N.Save.autosaveDesc_off = "Autosave (off)";
WAPAMA.I18N.Save.saveAs = "Save As...";
WAPAMA.I18N.Save.saveAsDesc = "Save As...";
WAPAMA.I18N.Save.unsavedData = "There are unsaved data, please save before you leave, otherwise your changes get lost!";
WAPAMA.I18N.Save.newProcess = "New Process";
WAPAMA.I18N.Save.saveAsTitle = "Save as...";
WAPAMA.I18N.Save.saveBtn = "Save";
WAPAMA.I18N.Save.close = "Close";
WAPAMA.I18N.Save.savedAs = "Saved As";
WAPAMA.I18N.Save.saved = "Saved!";
WAPAMA.I18N.Save.failed = "Saving failed.";
WAPAMA.I18N.Save.failedTitle = "Internal Error";
WAPAMA.I18N.Save.failedMsg = "An error occurred during save.";
WAPAMA.I18N.Save.failedOKBtn = "OK";
WAPAMA.I18N.Save.failedDetailsBtn = "Details";
WAPAMA.I18N.Save.failedThereWas = "There was a problem processing your request:";
WAPAMA.I18N.Save.noRights = "You have no rights to save changes.";
WAPAMA.I18N.Save.saving = "Saving";
WAPAMA.I18N.Save.saveAsHint = "The process diagram is stored under:";
WAPAMA.I18N.Save.successTitle = "Status";
WAPAMA.I18N.Save.successMsg = "Save operation completed successfully.";
WAPAMA.I18N.Save.savingMsg = "Please wait while saving...";

if(!WAPAMA.I18N.File) WAPAMA.I18N.File = {};

WAPAMA.I18N.File.group = "File";
WAPAMA.I18N.File.print = "Print";
WAPAMA.I18N.File.printDesc = "Print current model";
WAPAMA.I18N.File.pdf = "Export as PDF";
WAPAMA.I18N.File.pdfDesc = "Export as PDF";
WAPAMA.I18N.File.info = "Info";
WAPAMA.I18N.File.infoDesc = "Info";
WAPAMA.I18N.File.genPDF = "Generating PDF";
WAPAMA.I18N.File.genPDFFailed = "Generating PDF failed.";
WAPAMA.I18N.File.printTitle = "Print";
WAPAMA.I18N.File.printMsg = "We are currently experiencing problems with the printing function. We recommend using the PDF Export to print the diagram. Do you really want to continue printing?";

if(!WAPAMA.I18N.Grouping) WAPAMA.I18N.Grouping = {};

WAPAMA.I18N.Grouping.grouping = "Grouping";
WAPAMA.I18N.Grouping.group = "Group";
WAPAMA.I18N.Grouping.groupDesc = "Groups all selected shapes";
WAPAMA.I18N.Grouping.ungroup = "Ungroup";
WAPAMA.I18N.Grouping.ungroupDesc = "Deletes the group of all selected Shapes";

if(!WAPAMA.I18N.IBPMN2BPMN) WAPAMA.I18N.IBPMN2BPMN = {};

WAPAMA.I18N.IBPMN2BPMN.group ="Export";
WAPAMA.I18N.IBPMN2BPMN.name ="IBPMN 2 BPMN Mapping";
WAPAMA.I18N.IBPMN2BPMN.desc ="Convert IBPMN to BPMN";

if(!WAPAMA.I18N.Loading) WAPAMA.I18N.Loading = {};

WAPAMA.I18N.Loading.waiting ="Please wait...";

if(!WAPAMA.I18N.Pnmlexport) WAPAMA.I18N.Pnmlexport = {};

WAPAMA.I18N.Pnmlexport.group ="Export";
WAPAMA.I18N.Pnmlexport.name ="BPMN to PNML";
WAPAMA.I18N.Pnmlexport.desc ="Export as executable PNML and deploy";

if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};

WAPAMA.I18N.PropertyWindow.name = "Name";
WAPAMA.I18N.PropertyWindow.value = "Value";
WAPAMA.I18N.PropertyWindow.selected = "selected";
WAPAMA.I18N.PropertyWindow.clickIcon = "Click Icon";
WAPAMA.I18N.PropertyWindow.add = "Add";
WAPAMA.I18N.PropertyWindow.rem = "Remove";
WAPAMA.I18N.PropertyWindow.complex = "Editor for a Complex Type";
WAPAMA.I18N.PropertyWindow.text = "Editor for a Text Type";
WAPAMA.I18N.PropertyWindow.ok = "OK";
WAPAMA.I18N.PropertyWindow.cancel = "Cancel";
WAPAMA.I18N.PropertyWindow.dateFormat = "m/d/y";
WAPAMA.I18N.PropertyWindow.mappingeditor = "Mapping Editor";
WAPAMA.I18N.PropertyWindow.expression = "Expression Editor";
WAPAMA.I18N.PropertyWindow.xpathTextarea = "Insert xpath expression";
WAPAMA.I18N.PropertyWindow.True = "true";
WAPAMA.I18N.PropertyWindow.False = "false";

if(!WAPAMA.I18N.ShapeMenuPlugin) WAPAMA.I18N.ShapeMenuPlugin = {};

WAPAMA.I18N.ShapeMenuPlugin.drag = "Drag";
WAPAMA.I18N.ShapeMenuPlugin.clickDrag = "Click or drag";
WAPAMA.I18N.ShapeMenuPlugin.morphMsg = "Morph shape";

if(!WAPAMA.I18N.SimplePnmlexport) WAPAMA.I18N.SimplePnmlexport = {};

WAPAMA.I18N.SimplePnmlexport.group = "Export";
WAPAMA.I18N.SimplePnmlexport.name = "Export to PNML";
WAPAMA.I18N.SimplePnmlexport.desc = "Export to PNML";

if(!WAPAMA.I18N.StepThroughPlugin) WAPAMA.I18N.StepThroughPlugin = {};

WAPAMA.I18N.StepThroughPlugin.group = "Step Through";
WAPAMA.I18N.StepThroughPlugin.stepThrough = "Step Through";
WAPAMA.I18N.StepThroughPlugin.stepThroughDesc = "Step through your model";
WAPAMA.I18N.StepThroughPlugin.undo = "Undo";
WAPAMA.I18N.StepThroughPlugin.undoDesc = "Undo one Step";
WAPAMA.I18N.StepThroughPlugin.error = "Can't step through this diagram.";
WAPAMA.I18N.StepThroughPlugin.executing = "Executing";

if(!WAPAMA.I18N.SyntaxChecker) WAPAMA.I18N.SyntaxChecker = {};

WAPAMA.I18N.SyntaxChecker.group = "Verification";
WAPAMA.I18N.SyntaxChecker.name = "Syntax Checker";
WAPAMA.I18N.SyntaxChecker.desc = "Check Syntax";
WAPAMA.I18N.SyntaxChecker.noErrors = "There are no syntax errors.";
WAPAMA.I18N.SyntaxChecker.invalid = "Invalid answer from server.";
WAPAMA.I18N.SyntaxChecker.checkingMessage = "Checking ...";

if(!WAPAMA.I18N.Undo) WAPAMA.I18N.Undo = {};

WAPAMA.I18N.Undo.group = "Undo";
WAPAMA.I18N.Undo.undo = "Undo";
WAPAMA.I18N.Undo.undoDesc = "Undo the last action";
WAPAMA.I18N.Undo.redo = "Redo";
WAPAMA.I18N.Undo.redoDesc = "Redo the last undone action";

if(!WAPAMA.I18N.Validator) WAPAMA.I18N.Validator = {};
WAPAMA.I18N.Validator.checking = "Checking";

if(!WAPAMA.I18N.View) WAPAMA.I18N.View = {};

WAPAMA.I18N.View.group = "Zoom";
WAPAMA.I18N.View.zoomIn = "Zoom In";
WAPAMA.I18N.View.zoomInDesc = "Zoom into the model";
WAPAMA.I18N.View.zoomOut = "Zoom Out";
WAPAMA.I18N.View.zoomOutDesc = "Zoom out of the model";
WAPAMA.I18N.View.zoomStandard = "Zoom Standard";
WAPAMA.I18N.View.zoomStandardDesc = "Zoom to the standard level";
WAPAMA.I18N.View.zoomFitToModel = "Zoom fit to model";
WAPAMA.I18N.View.zoomFitToModelDesc = "Zoom to fit the model size";

if(!WAPAMA.I18N.XFormsSerialization) WAPAMA.I18N.XFormsSerialization = {};

WAPAMA.I18N.XFormsSerialization.group = "XForms Serialization";
WAPAMA.I18N.XFormsSerialization.exportXForms = "XForms Export";
WAPAMA.I18N.XFormsSerialization.exportXFormsDesc = "Export XForms+XHTML markup";
WAPAMA.I18N.XFormsSerialization.importXForms = "XForms Import";
WAPAMA.I18N.XFormsSerialization.importXFormsDesc = "Import XForms+XHTML markup";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupport = "No XForms support";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupportDesc = "<h2>Your browser does not support XForms. Please install the <a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> for Firefox.</h2>";
WAPAMA.I18N.XFormsSerialization.ok = "OK";
WAPAMA.I18N.XFormsSerialization.selectFile = "Select a XHTML (.xhtml) file or type in the XForms+XHTML markup to import it!";
WAPAMA.I18N.XFormsSerialization.selectCss = "Please insert url of css file";
WAPAMA.I18N.XFormsSerialization.file = "File";
WAPAMA.I18N.XFormsSerialization.impFailed = "Request for import of document failed.";
WAPAMA.I18N.XFormsSerialization.impTitle = "Import XForms+XHTML document";
WAPAMA.I18N.XFormsSerialization.expTitle = "Export XForms+XHTML document";
WAPAMA.I18N.XFormsSerialization.impButton = "Import";
WAPAMA.I18N.XFormsSerialization.impProgress = "Importing...";
WAPAMA.I18N.XFormsSerialization.close = "Close";


if(!WAPAMA.I18N.TreeGraphSupport) WAPAMA.I18N.TreeGraphSupport = {};

WAPAMA.I18N.TreeGraphSupport.syntaxCheckName = "Syntax Check";
WAPAMA.I18N.TreeGraphSupport.group = "Tree Graph Support";
WAPAMA.I18N.TreeGraphSupport.syntaxCheckDesc = "Check the syntax of an tree graph structure";

if(!WAPAMA.I18N.QueryEvaluator) WAPAMA.I18N.QueryEvaluator = {};

WAPAMA.I18N.QueryEvaluator.name = "Query Evaluator";
WAPAMA.I18N.QueryEvaluator.group = "Verification";
WAPAMA.I18N.QueryEvaluator.desc = "Evaluate query";
WAPAMA.I18N.QueryEvaluator.noResult = "Query resulted in no match.";
WAPAMA.I18N.QueryEvaluator.invalidResponse = "Invalid answer from server.";

// if(!WAPAMA.I18N.QueryResultHighlighter) WAPAMA.I18N.QueryResultHighlighter = {};
//
// WAPAMA.I18N.QueryResultHighlighter.name = "Query Result Highlighter";

/** New Language Properties: 08.12.2008 */

WAPAMA.I18N.PropertyWindow.title = "Properties";

if(!WAPAMA.I18N.ShapeRepository) WAPAMA.I18N.ShapeRepository = {};
WAPAMA.I18N.ShapeRepository.title = "Shape Repository";

WAPAMA.I18N.Save.dialogDesciption = "Please enter a name, a description and a comment.";
WAPAMA.I18N.Save.dialogLabelTitle = "Title";
WAPAMA.I18N.Save.dialogLabelDesc = "Description";
WAPAMA.I18N.Save.dialogLabelType = "Type";
WAPAMA.I18N.Save.dialogLabelComment = "Revision comment";

WAPAMA.I18N.Validator.name = "BPMN Validator";
WAPAMA.I18N.Validator.description = "Validation for BPMN";

WAPAMA.I18N.SSExtensionLoader.labelImport = "Import";
WAPAMA.I18N.SSExtensionLoader.labelCancel = "Cancel";

Ext.MessageBox.buttonText.yes = "Yes";
Ext.MessageBox.buttonText.no = "No";
Ext.MessageBox.buttonText.cancel = "Cancel";
Ext.MessageBox.buttonText.ok = "OK";


/** New Language Properties: 28.01.2009 */
if(!WAPAMA.I18N.BPMN2XPDL) WAPAMA.I18N.BPMN2XPDL = {};
WAPAMA.I18N.BPMN2XPDL.group = "Export";
WAPAMA.I18N.BPMN2XPDL.xpdlExport = "Export to XPDL";
WAPAMA.I18N.BPMN2XPDL.xpdlImport = "Import from XPDL";
WAPAMA.I18N.BPMN2XPDL.importGroup = "Import";
WAPAMA.I18N.BPMN2XPDL.selectFile = "Select a XPDL (.xml) file or type in the XPDL to import it!";
WAPAMA.I18N.BPMN2XPDL.file = "File";
WAPAMA.I18N.BPMN2XPDL.impXPDL = "Import XPDL";
WAPAMA.I18N.BPMN2XPDL.impBtn = "Import";
WAPAMA.I18N.BPMN2XPDL.impProgress = "Importing...";
WAPAMA.I18N.BPMN2XPDL.close = "Close";

/** Resource Perspective Additions: 24 March 2009 */
if(!WAPAMA.I18N.ResourcesSoDAdd) WAPAMA.I18N.ResourcesSoDAdd = {};

WAPAMA.I18N.ResourcesSoDAdd.name = "Define Separation of Duties Constraint";
WAPAMA.I18N.ResourcesSoDAdd.group = "Resource Perspective";
WAPAMA.I18N.ResourcesSoDAdd.desc = "Define a Separation of Duties constraint for the selected tasks";

if(!WAPAMA.I18N.ResourcesSoDShow) WAPAMA.I18N.ResourcesSoDShow = {};

WAPAMA.I18N.ResourcesSoDShow.name = "Show Separation of Duties Constraints";
WAPAMA.I18N.ResourcesSoDShow.group = "Resource Perspective";
WAPAMA.I18N.ResourcesSoDShow.desc = "Show Separation of Duties constraints of the selected task";

if(!WAPAMA.I18N.ResourcesBoDAdd) WAPAMA.I18N.ResourcesBoDAdd = {};

WAPAMA.I18N.ResourcesBoDAdd.name = "Define Binding of Duties Constraint";
WAPAMA.I18N.ResourcesBoDAdd.group = "Resource Perspective";
WAPAMA.I18N.ResourcesBoDAdd.desc = "Define a Binding of Duties Constraint for the selected tasks";

if(!WAPAMA.I18N.ResourcesBoDShow) WAPAMA.I18N.ResourcesBoDShow = {};

WAPAMA.I18N.ResourcesBoDShow.name = "Show Binding of Duties Constraints";
WAPAMA.I18N.ResourcesBoDShow.group = "Resource Perspective";
WAPAMA.I18N.ResourcesBoDShow.desc = "Show Binding of Duties constraints of the selected task";

if(!WAPAMA.I18N.ResourceAssignment) WAPAMA.I18N.ResourceAssignment = {};

WAPAMA.I18N.ResourceAssignment.name = "Resource Assignment";
WAPAMA.I18N.ResourceAssignment.group = "Resource Perspective";
WAPAMA.I18N.ResourceAssignment.desc = "Assign resources to the selected task(s)";

if(!WAPAMA.I18N.ClearSodBodHighlights) WAPAMA.I18N.ClearSodBodHighlights = {};

WAPAMA.I18N.ClearSodBodHighlights.name = "Clear Highlights and Overlays";
WAPAMA.I18N.ClearSodBodHighlights.group = "Resource Perspective";
WAPAMA.I18N.ClearSodBodHighlights.desc = "Remove all Separation and Binding of Duties Highlights/ Overlays";


if(!WAPAMA.I18N.Perspective) WAPAMA.I18N.Perspective = {};
WAPAMA.I18N.Perspective.no = "No Perspective"
WAPAMA.I18N.Perspective.noTip = "Unload the current perspective"


/** New Language Properties: 21.04.2009 */
WAPAMA.I18N.JSONSupport = {
    imp: {
        name: "Import from JSON",
        desc: "Imports a model from JSON",
        group: "Export",
        selectFile: "Select an JSON (.json) file or type in JSON to import it!",
        file: "File",
        btnImp: "Import",
        btnClose: "Close",
        progress: "Importing ...",
        syntaxError: "Syntax error"
    },
    exp: {
        name: "Export to JSON",
        desc: "Exports current model to JSON",
        group: "Export"
    }
};

WAPAMA.I18N.TBPMSupport = {
		imp: {
        name: "Import from PNG/JPEG",
        desc: "Imports a model from a TPBM photo",
        group: "Export",
        selectFile: "Select an image (.png/.jpeg) file!",
        file: "File",
        btnImp: "Import",
        btnClose: "Close",
        progress: "Importing ...",
        syntaxError: "Syntax error",
        impFailed: "Request for import of document failed.",
        confirm: "Confirm import of highlighted shapes!",
    }
};

/** New Language Properties: 08.05.2009 */
if(!WAPAMA.I18N.BPMN2XHTML) WAPAMA.I18N.BPMN2XHTML = {};
WAPAMA.I18N.BPMN2XHTML.group = "Export";
WAPAMA.I18N.BPMN2XHTML.XHTMLExport = "Export XHTML Documentation";

/** New Language Properties: 09.05.2009 */
if(!WAPAMA.I18N.JSONImport) WAPAMA.I18N.JSONImport = {};

WAPAMA.I18N.JSONImport.title = "JSON Import";
WAPAMA.I18N.JSONImport.wrongSS = "The stencil set of the imported file ({0}) does not match to the loaded stencil set ({1}).";
WAPAMA.I18N.JSONImport.invalidJSON = "The JSON to import is invalid.";

/** New Language Properties: 11.05.2009 */
if(!WAPAMA.I18N.BPMN2DTRPXMI) WAPAMA.I18N.BPMN2DTRPXMI = {};
WAPAMA.I18N.BPMN2DTRPXMI.group = "Export";
WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExport = "Export to XMI (Design Thinking)";
WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "Exports current model to XMI (requires stencil set extension 'BPMN Subset for Design Thinking')";

/** New Language Properties: 14.05.2009 */
if(!WAPAMA.I18N.RDFExport) WAPAMA.I18N.RDFExport = {};
WAPAMA.I18N.RDFExport.group = "Export";
WAPAMA.I18N.RDFExport.rdfExport = "Export to RDF";
WAPAMA.I18N.RDFExport.rdfExportDescription = "Exports current model to the XML serialization defined for the Resource Description Framework (RDF)";

/** New Language Properties: 15.05.2009*/
if(!WAPAMA.I18N.SyntaxChecker.BPMN) WAPAMA.I18N.SyntaxChecker.BPMN={};
WAPAMA.I18N.SyntaxChecker.BPMN_NO_SOURCE = "An edge must have a source.";
WAPAMA.I18N.SyntaxChecker.BPMN_NO_TARGET = "An edge must have a target.";
WAPAMA.I18N.SyntaxChecker.BPMN_DIFFERENT_PROCESS = "Source and target node must be contained in the same process.";
WAPAMA.I18N.SyntaxChecker.BPMN_SAME_PROCESS = "Source and target node must be contained in different pools.";
WAPAMA.I18N.SyntaxChecker.BPMN_FLOWOBJECT_NOT_CONTAINED_IN_PROCESS = "A flow object must be contained in a process.";
WAPAMA.I18N.SyntaxChecker.BPMN_ENDEVENT_WITHOUT_INCOMING_CONTROL_FLOW = "An end event must have an incoming sequence flow.";
WAPAMA.I18N.SyntaxChecker.BPMN_STARTEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "A start event must have an outgoing sequence flow.";
WAPAMA.I18N.SyntaxChecker.BPMN_STARTEVENT_WITH_INCOMING_CONTROL_FLOW = "Start events must not have incoming sequence flows.";
WAPAMA.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITH_INCOMING_CONTROL_FLOW = "Attached intermediate events must not have incoming sequence flows.";
WAPAMA.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "Attached intermediate events must have exactly one outgoing sequence flow.";
WAPAMA.I18N.SyntaxChecker.BPMN_ENDEVENT_WITH_OUTGOING_CONTROL_FLOW = "End events must not have outgoing sequence flows.";
WAPAMA.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "Event-based gateways must not be followed by gateways or subprocesses.";
WAPAMA.I18N.SyntaxChecker.BPMN_NODE_NOT_ALLOWED = "Node type is not allowed.";

if(!WAPAMA.I18N.SyntaxChecker.IBPMN) WAPAMA.I18N.SyntaxChecker.IBPMN={};
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_ROLE_SET = "Interactions must have a sender and a receiver role set";
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_INCOMING_SEQFLOW = "This node must have incoming sequence flow.";
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_OUTGOING_SEQFLOW = "This node must have outgoing sequence flow.";

if(!WAPAMA.I18N.SyntaxChecker.InteractionNet) WAPAMA.I18N.SyntaxChecker.InteractionNet={};
WAPAMA.I18N.SyntaxChecker.InteractionNet_SENDER_NOT_SET = "Sender not set";
WAPAMA.I18N.SyntaxChecker.InteractionNet_RECEIVER_NOT_SET = "Receiver not set";
WAPAMA.I18N.SyntaxChecker.InteractionNet_MESSAGETYPE_NOT_SET = "Message type not set";
WAPAMA.I18N.SyntaxChecker.InteractionNet_ROLE_NOT_SET = "Role not set";

if(!WAPAMA.I18N.SyntaxChecker.EPC) WAPAMA.I18N.SyntaxChecker.EPC={};
WAPAMA.I18N.SyntaxChecker.EPC_NO_SOURCE = "Each edge must have a source.";
WAPAMA.I18N.SyntaxChecker.EPC_NO_TARGET = "Each edge must have a target.";
WAPAMA.I18N.SyntaxChecker.EPC_NOT_CONNECTED = "Node must be connected with edges.";
WAPAMA.I18N.SyntaxChecker.EPC_NOT_CONNECTED_2 = "Node must be connected with more edges.";
WAPAMA.I18N.SyntaxChecker.EPC_TOO_MANY_EDGES = "Node has too many connected edges.";
WAPAMA.I18N.SyntaxChecker.EPC_NO_CORRECT_CONNECTOR = "Node is no correct connector.";
WAPAMA.I18N.SyntaxChecker.EPC_MANY_STARTS = "There must be only one start event.";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_OR = "There must be no functions after a splitting OR/XOR.";
WAPAMA.I18N.SyntaxChecker.EPC_PI_AFTER_OR = "There must be no process interface after a splitting OR/XOR.";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_FUNCTION =  "There must be no function after a function.";
WAPAMA.I18N.SyntaxChecker.EPC_EVENT_AFTER_EVENT =  "There must be no event after an event.";
WAPAMA.I18N.SyntaxChecker.EPC_PI_AFTER_FUNCTION =  "There must be no process interface after a function.";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_PI =  "There must be no function after a process interface.";

if(!WAPAMA.I18N.SyntaxChecker.PetriNet) WAPAMA.I18N.SyntaxChecker.PetriNet={};
WAPAMA.I18N.SyntaxChecker.PetriNet_NOT_BIPARTITE = "The graph is not bipartite";
WAPAMA.I18N.SyntaxChecker.PetriNet_NO_LABEL = "Label not set for a labeled transition";
WAPAMA.I18N.SyntaxChecker.PetriNet_NO_ID = "There is a node without ID";
WAPAMA.I18N.SyntaxChecker.PetriNet_SAME_SOURCE_AND_TARGET = "Two flow relationships have the same source and target";
WAPAMA.I18N.SyntaxChecker.PetriNet_NODE_NOT_SET = "A node is not set for a flow relationship";

/** New Language Properties: 02.06.2009*/
WAPAMA.I18N.Edge = "Edge";
WAPAMA.I18N.Node = "Node";

/** New Language Properties: 03.06.2009*/
WAPAMA.I18N.SyntaxChecker.notice = "Move the mouse over a red cross icon to see the error message.";

WAPAMA.I18N.Validator.result = "Validation Result";
WAPAMA.I18N.Validator.noErrors = "No validation errors found.";
WAPAMA.I18N.Validator.bpmnDeadlockTitle = "Deadlock";
WAPAMA.I18N.Validator.bpmnDeadlock = "This node results in a deadlock. There are situations where not all incoming branches are activated.";
WAPAMA.I18N.Validator.bpmnUnsafeTitle = "Lack of synchronization";
WAPAMA.I18N.Validator.bpmnUnsafe = "This model suffers from lack of synchronization. The marked element is activated from multiple incoming branches.";
WAPAMA.I18N.Validator.bpmnLeadsToNoEndTitle = "Validation Result";
WAPAMA.I18N.Validator.bpmnLeadsToNoEnd = "The process will never reach a final state.";

WAPAMA.I18N.Validator.syntaxErrorsTitle = "Syntax Error";
WAPAMA.I18N.Validator.syntaxErrorsMsg = "The process cannot be validated because it contains syntax errors.";

WAPAMA.I18N.Validator.error = "Validation failed";
WAPAMA.I18N.Validator.errorDesc = 'We are sorry, but the validation of your process failed. It would help us identifying the problem, if you sent us your process model via the "Send Feedback" function.';

WAPAMA.I18N.Validator.epcIsSound = "<p><b>The EPC is sound, no problems found!</b></p>";
WAPAMA.I18N.Validator.epcNotSound = "<p><b>The EPC is <i>NOT</i> sound!</b></p>";

/** New Language Properties: 05.06.2009*/
if(!WAPAMA.I18N.RESIZE) WAPAMA.I18N.RESIZE = {};
WAPAMA.I18N.RESIZE.tipGrow = "Increase canvas size:";
WAPAMA.I18N.RESIZE.tipShrink = "Decrease canvas size:";
WAPAMA.I18N.RESIZE.N = "Top";
WAPAMA.I18N.RESIZE.W = "Left";
WAPAMA.I18N.RESIZE.S ="Down";
WAPAMA.I18N.RESIZE.E ="Right";
/** New Language Properties: 14.08.2009*/
if(!WAPAMA.I18N.PluginLoad) WAPAMA.I18N.PluginLoad = {};
WAPAMA.I18N.PluginLoad.AddPluginButtonName = "Add Plugins";
WAPAMA.I18N.PluginLoad.AddPluginButtonDesc = "Add additional Plugins dynamically";
WAPAMA.I18N.PluginLoad.loadErrorTitle="Loading Error";
WAPAMA.I18N.PluginLoad.loadErrorDesc = "Unable to load Plugin. \n Error:\n";
WAPAMA.I18N.PluginLoad.WindowTitle ="Add additional Plugins";

WAPAMA.I18N.PluginLoad.NOTUSEINSTENCILSET = "Not allowed in this stencil set!";
WAPAMA.I18N.PluginLoad.REQUIRESTENCILSET = "Require another stencil set!";
WAPAMA.I18N.PluginLoad.NOTFOUND = "Pluginname not found!"
WAPAMA.I18N.PluginLoad.YETACTIVATED = "Plugin is yet activated!"

/** New Language Properties: 15.07.2009*/
if(!WAPAMA.I18N.Layouting) WAPAMA.I18N.Layouting ={};
WAPAMA.I18N.Layouting.doing = "Layouting...";

/** New Language Properties: 18.08.2009*/
WAPAMA.I18N.SyntaxChecker.MULT_ERRORS = "Multiple Errors";

/** New Language Properties: 08.09.2009*/
if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};
WAPAMA.I18N.PropertyWindow.oftenUsed = "Often Used";
WAPAMA.I18N.PropertyWindow.moreProps = "More Properties";

/** New Language Properties: 17.09.2009*/
if(!WAPAMA.I18N.Bpmn2_0Serialization) WAPAMA.I18N.Bpmn2_0Serialization = {};
WAPAMA.I18N.Bpmn2_0Serialization.show = "Show BPMN 2.0 DI XML";
WAPAMA.I18N.Bpmn2_0Serialization.showDesc = "Show BPMN 2.0 DI XML of the current BPMN 2.0 model";
WAPAMA.I18N.Bpmn2_0Serialization.download = "Download BPMN 2.0 DI XML";
WAPAMA.I18N.Bpmn2_0Serialization.downloadDesc = "Download BPMN 2.0 DI XML of the current BPMN 2.0 model";
WAPAMA.I18N.Bpmn2_0Serialization.serialFailed = "An error occurred while generating the BPMN 2.0 DI XML Serialization.";
WAPAMA.I18N.Bpmn2_0Serialization.group = "BPMN 2.0";

/** New Language Properties 01.10.2009 */
if(!WAPAMA.I18N.SyntaxChecker.BPMN2) WAPAMA.I18N.SyntaxChecker.BPMN2 = {};

WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "A Data Input must not have any incoming Data Associations.";
WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "A Data Output must not have any outgoing Data Associations.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "Targets of Event-based Gateways may only have one incoming Sequence Flow.";

/** New Language Properties 02.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "An Event-based Gateway must have two or more outgoing Sequence Flows.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "If Message Intermediate Events are used in the configuration, then Receive Tasks must not be used and vice versa.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "Only the following Intermediate Event triggers are valid: Message, Signal, Timer, Conditional and Multiple.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "The outgoing Sequence Flows of the Event Gateway must not have a condition expression.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "The Gateway does not meet the conditions to instantiate the process. Please use a start event or an instantiating attribute for the gateway.";

/** New Language Properties 05.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "The Gateway must have both multiple incoming and outgoing Sequence Flows.";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "The Gateway must have multiple incoming but most NOT have multiple outgoing Sequence Flows.";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "The Gateway must NOT have multiple incoming but must have multiple outgoing Sequence Flows.";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "A Gateway must have a minimum of one outgoing Sequence Flow.";
WAPAMA.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "Receive Tasks used in Event Gateway configurations must not have any attached Intermediate Events.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "An Event Subprocess must not have any incoming or outgoing Sequence Flow.";

/** New Language Properties 13.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "At least one side of the Message Flow has to be connected.";

/** New Language Properties 19.10.2009 */
WAPAMA.I18N.Bpmn2_0Serialization['import'] = "Import from BPMN 2.0 DI XML";
WAPAMA.I18N.Bpmn2_0Serialization.importDesc = "Import a BPMN 2.0 model from a file or XML String";
WAPAMA.I18N.Bpmn2_0Serialization.selectFile = "Select a (*.bpmn) file or type in BPMN 2.0 DI XML to import it!";
WAPAMA.I18N.Bpmn2_0Serialization.file = "File:";
WAPAMA.I18N.Bpmn2_0Serialization.name = "Import from BPMN 2.0 DI XML";
WAPAMA.I18N.Bpmn2_0Serialization.btnImp = "Import";
WAPAMA.I18N.Bpmn2_0Serialization.progress = "Importing BPMN 2.0 DI XML ...";
WAPAMA.I18N.Bpmn2_0Serialization.btnClose = "Close";
WAPAMA.I18N.Bpmn2_0Serialization.error = "An error occurred while importing BPMN 2.0 DI XML";

/** New Language Properties 24.11.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "A Choreography Activity may only have one initiating message.";
WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "A Message Flow is not allowed here.";

/** New Language Properties 27.11.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "An Event-based Gateway that is not instantiating must have a minimum of one incoming Sequence Flow.";
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "A Choreography Activity must have one initiating Participant (white).";
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "A Choreography Activity must not have more than one initiating Participant (white)."

WAPAMA.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "The communication must be connected to at least two participants.";
WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "The message flow's source must be a participant.";
WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "The message flow's target must be a participant.";
WAPAMA.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "The conversation link must connect a communication or sub conversation node with a participant.";

/** New Language Properties 30.12.2009 */
WAPAMA.I18N.Bpmn2_0Serialization.xpdlShow = "Show XPDL 2.2";
WAPAMA.I18N.Bpmn2_0Serialization.xpdlShowDesc = "Shows the XPDL 2.2 based on BPMN 2.0 XML (by XSLT)";
WAPAMA.I18N.Bpmn2_0Serialization.xpdlDownload = "Download as XPDL 2.2";
WAPAMA.I18N.Bpmn2_0Serialization.xpdlDownloadDesc = "Download the XPDL 2.2 based on BPMN 2.0 XML (by XSLT)";


if(!WAPAMA.I18N.cpntoolsSupport) WAPAMA.I18N.cpntoolsSupport = {};

WAPAMA.I18N.cpntoolsSupport.serverConnectionFailed = "Connection to server failed.";
WAPAMA.I18N.cpntoolsSupport.importTask = "Select an CPN file (.cpn) or type in the CPN XML structure in order to import it!";
WAPAMA.I18N.cpntoolsSupport.File = "File:";
WAPAMA.I18N.cpntoolsSupport.cpn = "CPN";
WAPAMA.I18N.cpntoolsSupport.title = "CPN Wapama";
WAPAMA.I18N.cpntoolsSupport.importLable = "Import";
WAPAMA.I18N.cpntoolsSupport.close = "Close";
WAPAMA.I18N.cpntoolsSupport.wrongCPNFile = "Not chosen correct CPN - File.";
WAPAMA.I18N.cpntoolsSupport.noPageSelection = "No page has been selected.";
WAPAMA.I18N.cpntoolsSupport.group = "Export";
WAPAMA.I18N.cpntoolsSupport.importProgress = "Importing ...";
WAPAMA.I18N.cpntoolsSupport.exportProgress = "Exporting ...";
WAPAMA.I18N.cpntoolsSupport.exportDescription = "Export to CPN Tools";
WAPAMA.I18N.cpntoolsSupport.importDescription = "Import from CPN Tools";

if(!WAPAMA.I18N.BPMN2YAWLMapper) WAPAMA.I18N.BPMN2YAWLMapper = {};

WAPAMA.I18N.BPMN2YAWLMapper.group = "Export";
WAPAMA.I18N.BPMN2YAWLMapper.name = 'YAWL Export';
WAPAMA.I18N.BPMN2YAWLMapper.desc = 'Map this diagram to YAWL and export it, please ensure "BPMN Subset for mapping to YAWL" is loaded';
