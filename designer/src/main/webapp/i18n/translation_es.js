/**
 * @author Anna Luebbe
 *
 * Contains all strings for Spanish language.
 * Version 1 - 12/01/08
 */
if(!WAPAMA) var WAPAMA = {};

if(!WAPAMA.I18N) WAPAMA.I18N = {};

WAPAMA.I18N.Language = "es"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!WAPAMA.I18N.Wapama) WAPAMA.I18N.Wapama = {};

WAPAMA.I18N.Wapama.pleaseWait = "Wapama está cargando ... Espere por favor.";
WAPAMA.I18N.Wapama.notLoggedOn = "No conectado";

if(!WAPAMA.I18N.AddDocker) WAPAMA.I18N.AddDocker = {};

WAPAMA.I18N.AddDocker.group = "Docker";
WAPAMA.I18N.AddDocker.add = "Añadir Docker";
WAPAMA.I18N.AddDocker.addDesc = "Añade un Docker haziendo cliq sobre la linea";
WAPAMA.I18N.AddDocker.del = "Borrar el Docker";
WAPAMA.I18N.AddDocker.delDesc = "Borre el Docker haciendo cliq sobre él";

if(!WAPAMA.I18N.SSExtensionLoader) WAPAMA.I18N.SSExtensionLoader = {};

WAPAMA.I18N.SSExtensionLoader.group = "Juego de plantillas";
WAPAMA.I18N.SSExtensionLoader.add = "Añadir ampliaciones al juego de plantillas";
WAPAMA.I18N.SSExtensionLoader.addDesc = "Añadir ampliaciones al juego de plantillas";
WAPAMA.I18N.SSExtensionLoader.loading = "Esta cargando ampliaciones al juego de plantillas"
WAPAMA.I18N.SSExtensionLoader.noExt = "No hay mas ampliaciones a disposición"
WAPAMA.I18N.SSExtensionLoader.failed1 = "Ocurrió un error cargando el archivo de configuracion. La respuesta del servidor no contiene un archivo de configuración válido.";
WAPAMA.I18N.SSExtensionLoader.failed2 = "Ocurrió un error cargando el archivo de configuracion. El servidor responde un mensaje de error.";
WAPAMA.I18N.SSExtensionLoader.panelTitle = "Ampliaciónes al juego de plantillas";
WAPAMA.I18N.SSExtensionLoader.panelText = "Seleccione ampliaciones a añadir";

if(!WAPAMA.I18N.AdHocCC) WAPAMA.I18N.AdHocCC = {};

WAPAMA.I18N.AdHocCC.group = "Ad Hoc";
WAPAMA.I18N.AdHocCC.compl = "Editar condición final";
WAPAMA.I18N.AdHocCC.complDesc = "Editar condición final de una actividad Ad Hoc";
WAPAMA.I18N.AdHocCC.notOne = "No ha seleccionado justo un elemento.";
WAPAMA.I18N.AdHocCC.nodAdHocCC = "El elemento seleccionado no tiene una condición final Ad Hoc"
WAPAMA.I18N.AdHocCC.selectTask = "seleccionar actividad";
WAPAMA.I18N.AdHocCC.selectState = "seleccionar estado";
WAPAMA.I18N.AdHocCC.addExp = "Añadir expresión";
WAPAMA.I18N.AdHocCC.selectDataField = "Seleccionar campo de datos";
WAPAMA.I18N.AdHocCC.enterEqual = "Agregar valor de comparación";
WAPAMA.I18N.AdHocCC.and = "y";
WAPAMA.I18N.AdHocCC.or = "o";
WAPAMA.I18N.AdHocCC.not = "no";
WAPAMA.I18N.AdHocCC.clearCC = "Borrar condición final";
WAPAMA.I18N.AdHocCC.editCC = "Editar condición final ad hoc";
WAPAMA.I18N.AdHocCC.addExecState = "Añadir expresión de estado de ejecución";
WAPAMA.I18N.AdHocCC.addDataExp = "Añadir expresión de datos";
WAPAMA.I18N.AdHocCC.addLogOp = "Añadir operadores logicos";
WAPAMA.I18N.AdHocCC.curCond = "Condición final actual";

if(!WAPAMA.I18N.AMLSupport) WAPAMA.I18N.AMLSupport = {};

WAPAMA.I18N.AMLSupport.group = "EPC";
WAPAMA.I18N.AMLSupport.imp = "Importar archivo AML";
WAPAMA.I18N.AMLSupport.impDesc = "Importar archivo Aris 7 AML";
WAPAMA.I18N.AMLSupport.failed = "Falló importar el archivo AML. Por favor compruebe que el archivo seleccionado es un archivo AML válido. Mensaje de error: ";
WAPAMA.I18N.AMLSupport.failed2 = "Falló importar el archivo AML: ";
WAPAMA.I18N.AMLSupport.noRights = "No tiene derecho suficente para el importe de varios diagramas. (Requerido iniciar sesión).";
WAPAMA.I18N.AMLSupport.panelText = "Seleccione un archivo AML (.xml) que quiere importar";
WAPAMA.I18N.AMLSupport.file = "Archivo";
WAPAMA.I18N.AMLSupport.importBtn = "Importar archivo AML";
WAPAMA.I18N.AMLSupport.get = "Está cargando diagramas...";
WAPAMA.I18N.AMLSupport.close = "Cerrar";
WAPAMA.I18N.AMLSupport.title = "Título";
WAPAMA.I18N.AMLSupport.selectDiagrams = "Seleccione diagramas que quiere importar. <br/> Un diagrama seleccionado está importado al editor abierto. Si selecciona mas que un diagrama, ellos seran guardados directamente.";
WAPAMA.I18N.AMLSupport.impText = "Importar";
WAPAMA.I18N.AMLSupport.impProgress = "Realizando importe...";
WAPAMA.I18N.AMLSupport.cancel = "Cancelar";
WAPAMA.I18N.AMLSupport.name = "Nombre";
WAPAMA.I18N.AMLSupport.allImported = "Todos diagramas importados";
WAPAMA.I18N.AMLSupport.ok = "OK";

if(!WAPAMA.I18N.Arrangement) WAPAMA.I18N.Arrangement = {};

WAPAMA.I18N.Arrangement.groupZ = "Z-Order";
WAPAMA.I18N.Arrangement.btf = "En primer plano";
WAPAMA.I18N.Arrangement.btfDesc = "En primer plano";
WAPAMA.I18N.Arrangement.btb = "Al fondo";
WAPAMA.I18N.Arrangement.btbDesc = "Al fondo";
WAPAMA.I18N.Arrangement.bf = "Un nivél mas adelante";
WAPAMA.I18N.Arrangement.bfDesc = "Un nivél mas adelante";
WAPAMA.I18N.Arrangement.bb = "Un nivél atras";
WAPAMA.I18N.Arrangement.bbDesc = "Un nivél atras";
WAPAMA.I18N.Arrangement.groupA = "Alineado";
WAPAMA.I18N.Arrangement.ab = "Alinear abajo";
WAPAMA.I18N.Arrangement.abDesc = "Alinear abajo";
WAPAMA.I18N.Arrangement.am = "Alinear centrado en el eje horizontal";
WAPAMA.I18N.Arrangement.amDesc = "Alinear centrado en el eje horizontal";
WAPAMA.I18N.Arrangement.at = "Alinear arriba";
WAPAMA.I18N.Arrangement.atDesc = "Alinear arriba";
WAPAMA.I18N.Arrangement.al = "Alinear a la izqierda";
WAPAMA.I18N.Arrangement.alDesc = "Alinear a la izqierda";
WAPAMA.I18N.Arrangement.ac = "Alinear centrado en el eje vertical";
WAPAMA.I18N.Arrangement.acDesc = "Alinear centrado en el eje vertical";
WAPAMA.I18N.Arrangement.ar = "Alinear a la derecha";
WAPAMA.I18N.Arrangement.arDesc = "Alinear a la derecha";

if(!WAPAMA.I18N.BPELSupport) WAPAMA.I18N.BPELSupport = {};

WAPAMA.I18N.BPELSupport.group = "BPEL";
WAPAMA.I18N.BPELSupport.exp = "Exportación BPEL";
WAPAMA.I18N.BPELSupport.expDesc = "Exportar a BPEL";
WAPAMA.I18N.BPELSupport.imp = "Importar BPEL";
WAPAMA.I18N.BPELSupport.impDesc = "Importar un archivor BPEL";
WAPAMA.I18N.BPELSupport.selectFile = "Seleccione un archivo BPEL que quiere importar";
WAPAMA.I18N.BPELSupport.file = "Archivo";
WAPAMA.I18N.BPELSupport.impPanel = "Importar archivo BPEL";
WAPAMA.I18N.BPELSupport.impBtn = "Importar";
WAPAMA.I18N.BPELSupport.content = "Contenido";
WAPAMA.I18N.BPELSupport.close = "Cerrar";
WAPAMA.I18N.BPELSupport.error = "Error";
WAPAMA.I18N.BPELSupport.progressImp = "Importa... ";
WAPAMA.I18N.BPELSupport.progressExp = "Exporta...";
WAPAMA.I18N.BPELSupport.impFailed = "Se produjo un error al importar. <br/>mensaje de error: <br/><br/>";

if(!WAPAMA.I18N.Bpel4ChorTransformation) WAPAMA.I18N.Bpel4ChorTransformation = {};

WAPAMA.I18N.Bpel4ChorTransformation.group = "BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPEL = "BPEL4Chor exportación";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPELDesc = "Exportar a BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDL = "XPDL4Chor exportación";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDLDesc = "Exportar a XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.warning = "Alerta";
WAPAMA.I18N.Bpel4ChorTransformation.wrongValue = 'El nombre modificado tiene que tener el calor "1" para evitar errores al transformar a BPEL4Chor.';
WAPAMA.I18N.Bpel4ChorTransformation.loopNone = 'La Tarea recipiente para estar transformado a BPEL4Chor tiene que tener el tipo de circulo "none"';
WAPAMA.I18N.Bpel4ChorTransformation.error = "Error";
WAPAMA.I18N.Bpel4ChorTransformation.noSource = "1 con la ID 2 no tiene objeto de fuente";
WAPAMA.I18N.Bpel4ChorTransformation.noTarget = "1 con la ID 2 no tiene objeto de destinación ";
WAPAMA.I18N.Bpel4ChorTransformation.transCall = "Se produjo un error al transformar. 1:2";
WAPAMA.I18N.Bpel4ChorTransformation.noResult = "El servicio web de transformación no ha suministrado un resultado.";
WAPAMA.I18N.Bpel4ChorTransformation.errorParsing = "Al analizar el diagrama se produjo un error.";
WAPAMA.I18N.Bpel4ChorTransformation.transResult = "Resultados de transformación";
WAPAMA.I18N.Bpel4ChorTransformation.showFile = "Mostrar archivo de resultado";
WAPAMA.I18N.Bpel4ChorTransformation.downloadFile = "Descargar archivo de resultado";
WAPAMA.I18N.Bpel4ChorTransformation.downloadAll = "Descargar todos los archivos de resultado";
WAPAMA.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "Exporta a XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "Exporta a BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.noGen = "No se ha podido crear datos de input para la transformación: 1\n2\n"

if(!WAPAMA.I18N.DesynchronizabilityOverlay) WAPAMA.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
WAPAMA.I18N.DesynchronizabilityOverlay.group = "Overlay";
WAPAMA.I18N.DesynchronizabilityOverlay.name = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.desc = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.sync = "The net is desynchronizable.";
WAPAMA.I18N.DesynchronizabilityOverlay.error = "The net has 1 syntax errors.";
WAPAMA.I18N.DesynchronizabilityOverlay.invalid = "Invalid answer from server.";

if(!WAPAMA.I18N.Edit) WAPAMA.I18N.Edit = {};

WAPAMA.I18N.Edit.group = "Editar";
WAPAMA.I18N.Edit.cut = "Cortar";
WAPAMA.I18N.Edit.cutDesc = "Cortar los elementos seleccionados";
WAPAMA.I18N.Edit.copy = "Copiar";
WAPAMA.I18N.Edit.copyDesc = "Copiar los elementos seleccionados";
WAPAMA.I18N.Edit.paste = "Pegar";
WAPAMA.I18N.Edit.pasteDesc = "Pegar los elementos copiados/seleccionados";
WAPAMA.I18N.Edit.del = "Borrar";
WAPAMA.I18N.Edit.delDesc = "Borrar los elementos seleccionados";

if(!WAPAMA.I18N.EPCSupport) WAPAMA.I18N.EPCSupport = {};

WAPAMA.I18N.EPCSupport.group = "EPC";
WAPAMA.I18N.EPCSupport.exp = "Exportación EPML";
WAPAMA.I18N.EPCSupport.expDesc = "Exportar a EPML";
WAPAMA.I18N.EPCSupport.imp = "Importación EPML";
WAPAMA.I18N.EPCSupport.impDesc = "Importar un archivo EPML";
WAPAMA.I18N.EPCSupport.progressExp = "Exporta modelo";
WAPAMA.I18N.EPCSupport.selectFile = "Seleccione un archivo EPML que quiere importar.";
WAPAMA.I18N.EPCSupport.file = "Archivo";
WAPAMA.I18N.EPCSupport.impPanel = "Importar archivo EPML";
WAPAMA.I18N.EPCSupport.impBtn = "Importar";
WAPAMA.I18N.EPCSupport.close = "Cerrar";
WAPAMA.I18N.EPCSupport.error = "Error";
WAPAMA.I18N.EPCSupport.progressImp = "Está importando...";

if(!WAPAMA.I18N.ERDFSupport) WAPAMA.I18N.ERDFSupport = {};

WAPAMA.I18N.ERDFSupport.group = "ERDF";
WAPAMA.I18N.ERDFSupport.exp = "Exportación ERDF";
WAPAMA.I18N.ERDFSupport.expDesc = "Exportar a ERDF";
WAPAMA.I18N.ERDFSupport.imp = "Importación ERDF";
WAPAMA.I18N.ERDFSupport.impDesc = "Importar archivo ERDF";
WAPAMA.I18N.ERDFSupport.impFailed = "Falló la pregunta por la importación del archivo ERDF.";
WAPAMA.I18N.ERDFSupport.impFailed2 = "Al importar se produjo un error. <br/>mensaje de error: <br/><br/>";
WAPAMA.I18N.ERDFSupport.error = "Error";
WAPAMA.I18N.ERDFSupport.noCanvas = "El documento XML no contiene un nudo Wapama Canvas.";
WAPAMA.I18N.ERDFSupport.noSS = "El documento XML no tiene referencia al juego de plantillas.";
WAPAMA.I18N.ERDFSupport.wrongSS = "El juego de plantillas referenciado no Das im XML Dokument referenzierte Stencil Set passt nicht zu dem im Editor geladenen Stencil Set.";
WAPAMA.I18N.ERDFSupport.selectFile = "Seleccione un archivo ERDF (.xml) o ingrese el codigo ERDF en el campo de texto.";
WAPAMA.I18N.ERDFSupport.file = "Archivo";
WAPAMA.I18N.ERDFSupport.impERDF = "Importar ERDF";
WAPAMA.I18N.ERDFSupport.impBtn = "Importar";
WAPAMA.I18N.ERDFSupport.impProgress = "Esta importando...";
WAPAMA.I18N.ERDFSupport.close = "Cerrar";

if(!WAPAMA.I18N.Save) WAPAMA.I18N.Save = {};

WAPAMA.I18N.Save.group = "Archivo";
WAPAMA.I18N.Save.save = "Guardar";
WAPAMA.I18N.Save.saveDesc = "Guardar";
WAPAMA.I18N.Save.saveAs = "Guardar como...";
WAPAMA.I18N.Save.saveAsDesc = "Guardar como...";
WAPAMA.I18N.Save.unsavedData = "El diagrama contiene datos no guardados. ¿Esta seguro que quiere cerrar el editor?";
WAPAMA.I18N.Save.newProcess = "Proceso nuevo";
WAPAMA.I18N.Save.saveAsTitle = "Guardar como...";
WAPAMA.I18N.Save.saveBtn = "Guardar";
WAPAMA.I18N.Save.close = "Cerrar";
WAPAMA.I18N.Save.savedAs = "Guardado como";
WAPAMA.I18N.Save.saved = "Guardado";
WAPAMA.I18N.Save.failed = "Falló guardar.";
WAPAMA.I18N.Save.noRights = "No tiene derecho suficiente para guardar modificaciones.";
WAPAMA.I18N.Save.saving = "Guardar";

if(!WAPAMA.I18N.cpntoolsSupport) WAPAMA.I18N.cpntoolsSupport = {};

WAPAMA.I18N.cpntoolsSupport.serverConnectionFailed = "El contacto al server no se pudo abrir.";
WAPAMA.I18N.cpntoolsSupport.importTask = "Escoje un CPN archivo (.cpn) o escribe la estructura del CPN XML para importarlo.";
WAPAMA.I18N.cpntoolsSupport.File = "Archivo:";
WAPAMA.I18N.cpntoolsSupport.cpn = "CPN";
WAPAMA.I18N.cpntoolsSupport.title = "CPN Wapama";
WAPAMA.I18N.cpntoolsSupport.importLable = "Importar";
WAPAMA.I18N.cpntoolsSupport.close = "Cerrar";
WAPAMA.I18N.cpntoolsSupport.wrongCPNFile = "No escojiste un CPN - archivo correcto.";
WAPAMA.I18N.cpntoolsSupport.noPageSelection = "No page has been selected.";
WAPAMA.I18N.cpntoolsSupport.importProgress = "Importando ...";
WAPAMA.I18N.cpntoolsSupport.exportProgress = "Exportando ...";
WAPAMA.I18N.cpntoolsSupport.exportDescription = "Exportar a CPN Tools";
WAPAMA.I18N.cpntoolsSupport.importDescription = "Importar de CPN Tools";

if(!WAPAMA.I18N.File) WAPAMA.I18N.File = {};

WAPAMA.I18N.File.group = "Archivo";
WAPAMA.I18N.File.print = "Imprimir";
WAPAMA.I18N.File.printDesc = "Imprimir";
WAPAMA.I18N.File.pdf = "Exportación de PDF";
WAPAMA.I18N.File.pdfDesc = "Exportación a PDF";
WAPAMA.I18N.File.info = "sobre";
WAPAMA.I18N.File.infoDesc = "sobre";
WAPAMA.I18N.File.genPDF = "Está creando PDF...";
WAPAMA.I18N.File.genPDFFailed = "Falló la creación del archivo PDF.";
WAPAMA.I18N.File.printTitle = "Imprimir";
WAPAMA.I18N.File.printMsg = 'Sentimos que por el momento la función "imprimir" no trabaja siempre correcto. Por favor, utilice la exportación al PDF y imprime el documento PDF. ¿Quiere seguir imprimiendo?';

if(!WAPAMA.I18N.Grouping) WAPAMA.I18N.Grouping = {};

WAPAMA.I18N.Grouping.grouping = "Agrupar";
WAPAMA.I18N.Grouping.group = "Agrupar";
WAPAMA.I18N.Grouping.groupDesc = "Agrupar elementos seleccionados";
WAPAMA.I18N.Grouping.ungroup = "Borrar agrupación";
WAPAMA.I18N.Grouping.ungroupDesc = "Borrar todas las agrupaciones de los elementos seleccionados";

if(!WAPAMA.I18N.IBPMN2BPMN) WAPAMA.I18N.IBPMN2BPMN = {};

WAPAMA.I18N.IBPMN2BPMN.group ="Exportación";
WAPAMA.I18N.IBPMN2BPMN.name ="IBPMN 2 BPMN Mapping";
WAPAMA.I18N.IBPMN2BPMN.desc ="convertir IBPMN a BPMN";

if(!WAPAMA.I18N.Loading) WAPAMA.I18N.Loading = {};

WAPAMA.I18N.Loading.waiting ="Espere por favor...";

if(!WAPAMA.I18N.Pnmlexport) WAPAMA.I18N.Pnmlexport = {};

WAPAMA.I18N.Pnmlexport.group ="Exportación";
WAPAMA.I18N.Pnmlexport.name ="Exportación PNML";
WAPAMA.I18N.Pnmlexport.desc ="Exportar a PNML ejecutable y deploy";

if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};

WAPAMA.I18N.PropertyWindow.name = "Nombre";
WAPAMA.I18N.PropertyWindow.value = "Valor";
WAPAMA.I18N.PropertyWindow.clickIcon = "Hacer cliq en el símbolo";
WAPAMA.I18N.PropertyWindow.add = "Añadir";
WAPAMA.I18N.PropertyWindow.rem = "Borrar";
WAPAMA.I18N.PropertyWindow.complex = "Editor para propriedad compleja";
WAPAMA.I18N.PropertyWindow.text = "Editor para propriedad texto";
WAPAMA.I18N.PropertyWindow.ok = "OK";
WAPAMA.I18N.PropertyWindow.cancel = "Cancelar";
WAPAMA.I18N.PropertyWindow.dateFormat = "dia/mes/año";

if(!WAPAMA.I18N.ShapeMenuPlugin) WAPAMA.I18N.ShapeMenuPlugin = {};

WAPAMA.I18N.ShapeMenuPlugin.drag = "Tirar";
WAPAMA.I18N.ShapeMenuPlugin.clickDrag = "Hacer cliq o tirar";

if(!WAPAMA.I18N.SimplePnmlexport) WAPAMA.I18N.SimplePnmlexport = {};

WAPAMA.I18N.SimplePnmlexport.group = "Exportación";
WAPAMA.I18N.SimplePnmlexport.name = "Exportación PNML simple";
WAPAMA.I18N.SimplePnmlexport.desc = "Exportar a PNML";

if(!WAPAMA.I18N.StepThroughPlugin) WAPAMA.I18N.StepThroughPlugin = {};

WAPAMA.I18N.StepThroughPlugin.group = "Step Through";
WAPAMA.I18N.StepThroughPlugin.stepThrough = "Ejecución paso a paso";
WAPAMA.I18N.StepThroughPlugin.stepThroughDesc = "Ejecución paso a paso del modelo BPMN";
WAPAMA.I18N.StepThroughPlugin.undo = "Anular";
WAPAMA.I18N.StepThroughPlugin.undoDesc = "Anular";
WAPAMA.I18N.StepThroughPlugin.error = "La ejecución del modelo no está posible.";

if(!WAPAMA.I18N.SyntaxChecker) WAPAMA.I18N.SyntaxChecker = {};

WAPAMA.I18N.SyntaxChecker.group = "Verificación";
WAPAMA.I18N.SyntaxChecker.name = "Compruebe síntaxis";
WAPAMA.I18N.SyntaxChecker.desc = "Comprobando síntaxis";
WAPAMA.I18N.SyntaxChecker.noErrors = "No se ha encontrado errores de síntaxis.";
WAPAMA.I18N.SyntaxChecker.invalid = "Respuesta invalida del servidor.";

if(!WAPAMA.I18N.Undo) WAPAMA.I18N.Undo = {};

WAPAMA.I18N.Undo.group = "Anular";
WAPAMA.I18N.Undo.undo = "Anular";
WAPAMA.I18N.Undo.undoDesc = "Anular";
WAPAMA.I18N.Undo.redo = "Restablecer";
WAPAMA.I18N.Undo.redoDesc = "Restablecer";

if(!WAPAMA.I18N.View) WAPAMA.I18N.View = {};

WAPAMA.I18N.View.group = "Zoom";
WAPAMA.I18N.View.zoomIn = "Engrandecer";
WAPAMA.I18N.View.zoomInDesc = "Engrandecer";
WAPAMA.I18N.View.zoomOut = "Reducir";
WAPAMA.I18N.View.zoomOutDesc = "Reducir";


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


/** New Language Properties: 08.12.2008 **/

WAPAMA.I18N.PropertyWindow.title = "Propriedades";

if(!WAPAMA.I18N.ShapeRepository) WAPAMA.I18N.ShapeRepository = {};

WAPAMA.I18N.ShapeRepository.title = "Shape Repository";

WAPAMA.I18N.Save.dialogDesciption = "Por favor, agrege nombre y descripción";
WAPAMA.I18N.Save.dialogLabelTitle = "Título";
WAPAMA.I18N.Save.dialogLabelDesc = "Descripción";
WAPAMA.I18N.Save.dialogLabelType = "Típo";

WAPAMA.I18N.Validator.name = "BPMN Validator";
WAPAMA.I18N.Validator.description = "Validación para BPMN";

WAPAMA.I18N.SSExtensionLoader.labelImport = "Importación";
WAPAMA.I18N.SSExtensionLoader.labelCancel = "Cancelar";

Ext.MessageBox.buttonText.yes = "Sí";
Ext.MessageBox.buttonText.no = "No";
Ext.MessageBox.buttonText.cancel = "Cancelar";
Ext.MessageBox.buttonText.ok = "OK";


/** New Language Properties: 28.01.2009 */
//WAPAMA.I18N.BPMN2XPDL.group = "Export";
//WAPAMA.I18N.BPMN2XPDL.xpdlExport = "Export to XPDL";

/*WAPAMA.I18N.BPMN2PNConverter = {
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
}*/

/** New Language Properties: 08.05.2009 */
//if(!WAPAMA.I18N.BPMN2XHTML) WAPAMA.I18N.BPMN2XHTML = {};
//WAPAMA.I18N.BPMN2XHTML.group = "Export";
//WAPAMA.I18N.BPMN2XHTML.XHTMLExport = "Export XHTML Documentation";

/** New Language Properties: 09.05.2009 */
//if(!WAPAMA.I18N.JSONImport) WAPAMA.I18N.JSONImport = {};
//
//WAPAMA.I18N.JSONImport.title = "JSON Import";
//WAPAMA.I18N.JSONImport.wrongSS = "The stencil set of the imported file ({0}) does not match to the loaded stencil set ({1})."
//WAPAMA.I18N.JSONImport.invalidJSON = "The JSON to import is invalid.";

/** New Language Properties: 11.05.2009 */
//if(!WAPAMA.I18N.BPMN2DTRPXMI) WAPAMA.I18N.BPMN2DTRPXMI = {};
//WAPAMA.I18N.BPMN2DTRPXMI.group = "Export";
//WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExport = "Export to XMI (Design Thinking)";
//WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "Exports current model to XMI (requires stencil set extension 'BPMN Subset for Design Thinking')";

/** New Language Properties: 14.05.2009 */
//if(!WAPAMA.I18N.RDFExport) WAPAMA.I18N.RDFExport = {};
//WAPAMA.I18N.RDFExport.group = "Export";
//WAPAMA.I18N.RDFExport.rdfExport = "Export to RDF";

//WAPAMA.I18N.RDFExport.rdfExportDescription = "Exports current model to the XML serialization defined for the Resource Description Framework (RDF)";

/** New Language Properties: 08.09.2009*/
//if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};
//WAPAMA.I18N.PropertyWindow.oftenUsed = "Often used";
//WAPAMA.I18N.PropertyWindow.moreProps = "More Properties";

/** New Language Properties 01.10.2009 */
//if(!WAPAMA.I18N.SyntaxChecker.BPMN2) WAPAMA.I18N.SyntaxChecker.BPMN2 = {};
//
//WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "A Data Input must not have any incoming Data Associations.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "A Data Output must not have any outgoing Data Associations.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "Targets of Eventbased Gateways may only have one incoming Sequence Flow.";

/** New Language Properties 02.10.2009 */
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "An Event Gateway must have two or more outgoing Sequence Flows.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "If Message Intermediate Events are used in the configuration, then Receive Tasks must not be used and vice versa.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "Only the following Intermediate Event triggers are valid: Message, Signal, Timer, Conditional and Multiple.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "The outgoing Sequence Flows of the Event Gateway must not have a condition Expression.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "The Gateway does not meet the conditions to instantiate the Process. Please referr to the manual.";

/** New Language Properties 05.10.2009 */
//WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "The Gateway must have both multiple incoming and outgoing Sequence Flows.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "The Gateway must have multiple incoming but most NOT have multiple outgoing Sequence Flows.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "The Gateway must NOT have multiple incoming but must have multiple outgoing Sequence Flows.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "A Gateway must have a minimum of one outgoing Sequence Flow.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "Receive Tasks used in Event Gateway configurations must not have any attached Intermediate Events.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "An Event Sub-Process must not have any incoming or outgoing Sequence Flow.";

/** New Language Properties 13.10.2009 */
//WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "At least on side of the Message Flow has to be connected.";

/** New Language Properties 05.11.2009 */
//if(!WAPAMA.I18N.RESIZE) WAPAMA.I18N.RESIZE = {};
//WAPAMA.I18N.RESIZE.tipGrow = "Increase canvas size:";
//WAPAMA.I18N.RESIZE.tipShrink = "Decrease canvas size:";
//WAPAMA.I18N.RESIZE.N = "Top";
//WAPAMA.I18N.RESIZE.W = "Left";
//WAPAMA.I18N.RESIZE.S ="Down";
//WAPAMA.I18N.RESIZE.E ="Right";

/** New Language Properties 24.11.2009 */
//WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "A Choreography Acitivty may only have one initiating Message.";
//WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "A Message Flow is not allowed here.";


/** New Language Properties 27.11.2009 */
//WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "An Eventbased Gateway that is not instantiating must have a minimum of one incoming Sequence Flow.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "A Choreography Activity must have one initiating Participant.";
//WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "A Choreography Acitivity must not have more than one initiating Participant."

//WAPAMA.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "The communication must be connected to at least two participants.";
//WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "The message flow's source must be a participant.";
//WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "The message flow's target must be a participant.";
//WAPAMA.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "The conversation link must connect a communication or sub conversation node with a participant.";
