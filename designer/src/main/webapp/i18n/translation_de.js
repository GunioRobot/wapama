/**
 * @author nicolas.peters
 *
 * Contains all strings for German language.
 * Version 1 - 08/29/08
 */
if(!WAPAMA) var WAPAMA = {};

if(!WAPAMA.I18N) WAPAMA.I18N = {};

WAPAMA.I18N.Language = "de_DE"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!WAPAMA.I18N.Wapama) WAPAMA.I18N.Wapama = {};

WAPAMA.I18N.Wapama.pleaseWait = "Editor wird geladen. Bitte warten...";
WAPAMA.I18N.Wapama.notLoggedOn = "Nicht angemeldet";
WAPAMA.I18N.Wapama.noBackendDefined	= "Achtung! \n Es wurde kein Repository definiert.\n Ihr Model kann nicht geladen werden. Bitte nutzen sie eine Editor Konfiguration mit einem Speicher Plugin.";

if(!WAPAMA.I18N.AddDocker) WAPAMA.I18N.AddDocker = {};

WAPAMA.I18N.AddDocker.group = "Docker";
WAPAMA.I18N.AddDocker.add = "Docker Hinzufügen";
WAPAMA.I18N.AddDocker.addDesc = "Fügen Sie einer Kante einen Docker hinzu, indem Sie auf die Kante klicken";
WAPAMA.I18N.AddDocker.del = "Docker Löschen";
WAPAMA.I18N.AddDocker.delDesc = "Löscht einen Docker durch Klicken auf den zu löschenden Docker";

if(!WAPAMA.I18N.SSExtensionLoader) WAPAMA.I18N.SSExtensionLoader = {};

WAPAMA.I18N.SSExtensionLoader.group = "Stencil Set";
WAPAMA.I18N.SSExtensionLoader.add = "Stencil Set Erweiterungen hinzufügen";
WAPAMA.I18N.SSExtensionLoader.addDesc = "Stencil Set Erweiterungen hinzufügen";
WAPAMA.I18N.SSExtensionLoader.loading = "Stencil Set Erweiterungen wird geladen";
WAPAMA.I18N.SSExtensionLoader.noExt = "Es sind keine Erweiterungen verfügbar oder alle verfügbaren Erweiterungen wurden bereits geladen.";
WAPAMA.I18N.SSExtensionLoader.failed1 = "Das Laden der Konfigurationsdatei ist fehlgeschlagen. Die Antwort des Servers ist keine gültige Konfigurationsdatei.";
WAPAMA.I18N.SSExtensionLoader.failed2 = "Das Laden der Konfigurationsdatei ist fehlgeschlagen. Der Server hat mit einer Fehlermeldung geantwortet.";
WAPAMA.I18N.SSExtensionLoader.panelTitle = "Stencil Set Erweiterungen";
WAPAMA.I18N.SSExtensionLoader.panelText = "Wählen Sie die zu ladenden Stencil Set Erweiterungen aus.";

if(!WAPAMA.I18N.AdHocCC) WAPAMA.I18N.AdHocCC = {};

WAPAMA.I18N.AdHocCC.group = "Ad Hoc";
WAPAMA.I18N.AdHocCC.compl = "Endbedingung bearbeiten";
WAPAMA.I18N.AdHocCC.complDesc = "Endbedingung einer Ad Hoc Aktivität bearbeiten";
WAPAMA.I18N.AdHocCC.notOne = "Es ist nicht genau ein Element ausgewählt!";
WAPAMA.I18N.AdHocCC.nodAdHocCC = "Das ausgewählte Element hat keine Ad Hoc Endbedingung!";
WAPAMA.I18N.AdHocCC.selectTask = "Aktivität auswählen...";
WAPAMA.I18N.AdHocCC.selectState = "Zustand auswählen...";
WAPAMA.I18N.AdHocCC.addExp = "Ausdruck hinzufügen";
WAPAMA.I18N.AdHocCC.selectDataField = "Datenfeld auswählen...";
WAPAMA.I18N.AdHocCC.enterEqual = "Vergleichswert eingeben...";
WAPAMA.I18N.AdHocCC.and = "und";
WAPAMA.I18N.AdHocCC.or = "oder";
WAPAMA.I18N.AdHocCC.not = "nicht";
WAPAMA.I18N.AdHocCC.clearCC = "Endbedingung löschen";
WAPAMA.I18N.AdHocCC.editCC = "Ad Hoc Endbedingungen bearbeiten";
WAPAMA.I18N.AdHocCC.addExecState = "Ausführungszustandsausdruck hinzufügen: ";
WAPAMA.I18N.AdHocCC.addDataExp = "Datenausdruck hinzufügen: ";
WAPAMA.I18N.AdHocCC.addLogOp = "Logische Operatoren hinzufügen: ";
WAPAMA.I18N.AdHocCC.curCond = "Aktuelle Endbedingung: ";

if(!WAPAMA.I18N.AMLSupport) WAPAMA.I18N.AMLSupport = {};

WAPAMA.I18N.AMLSupport.group = "EPC";
WAPAMA.I18N.AMLSupport.imp = "AML Datei importieren";
WAPAMA.I18N.AMLSupport.impDesc = "Aris 7 AML Datei importieren";
WAPAMA.I18N.AMLSupport.failed = "Importieren der AML Datei ist fehlgeschlagen. Bitte vergewissern Sie sich, daß die ausgewählte Datei eine gültige AML Datei ist. Fehlermeldung: ";
WAPAMA.I18N.AMLSupport.failed2 = "Importieren der AML Datei ist fehlgeschlagen: ";
WAPAMA.I18N.AMLSupport.noRights = "Sie haben nicht die erforderlichen Rechte, um mehrere Diagramme zu importieren (Login erforderlich).";
WAPAMA.I18N.AMLSupport.panelText = "Wählen Sie eine AML Datei (.xml) aus, die Sie importieren möchten.";
WAPAMA.I18N.AMLSupport.file = "Datei";
WAPAMA.I18N.AMLSupport.importBtn = "AML Datei importieren";
WAPAMA.I18N.AMLSupport.get = "Lade Diagramme...";
WAPAMA.I18N.AMLSupport.close = "Schließen";
WAPAMA.I18N.AMLSupport.title = "Titel";
WAPAMA.I18N.AMLSupport.selectDiagrams = "Wählen Sie die Diagramme aus, die Sie importieren möchten. <br/> Wenn Sie nur ein Diagramm auswählen, wird dieses im geöffneten Editor importiert. Bei der Auswahl von mehreren Diagrammen werden diese direkt gespeichert.";
WAPAMA.I18N.AMLSupport.impText = "Importieren";
WAPAMA.I18N.AMLSupport.impProgress = "Importierung wird ausgeführt...";
WAPAMA.I18N.AMLSupport.cancel = "Abbrechen";
WAPAMA.I18N.AMLSupport.name = "Name";
WAPAMA.I18N.AMLSupport.allImported = "Alle importierten Diagramme.";
WAPAMA.I18N.AMLSupport.ok = "OK";

if(!WAPAMA.I18N.Arrangement) WAPAMA.I18N.Arrangement = {};

WAPAMA.I18N.Arrangement.groupZ = "Z-Order";
WAPAMA.I18N.Arrangement.btf = "In den Vordergrund";
WAPAMA.I18N.Arrangement.btfDesc = "In den Vordergrund";
WAPAMA.I18N.Arrangement.btb = "In den Hintergrund";
WAPAMA.I18N.Arrangement.btbDesc = "In den Hintergrund";
WAPAMA.I18N.Arrangement.bf = "Eine Ebene nach Vorne";
WAPAMA.I18N.Arrangement.bfDesc = "Eine Ebene nach Vorne";
WAPAMA.I18N.Arrangement.bb = "Eine Ebene nach Hinten";
WAPAMA.I18N.Arrangement.bbDesc = "Eine Ebene nach Hinten";
WAPAMA.I18N.Arrangement.groupA = "Alignment";
WAPAMA.I18N.Arrangement.ab = "Unten ausrichten";
WAPAMA.I18N.Arrangement.abDesc = "Unten ausrichten";
WAPAMA.I18N.Arrangement.am = "Horizontal ausrichten";
WAPAMA.I18N.Arrangement.amDesc = "Horizontal ausrichten";
WAPAMA.I18N.Arrangement.at = "Oben ausrichten";
WAPAMA.I18N.Arrangement.atDesc = "Oben ausrichten";
WAPAMA.I18N.Arrangement.al = "Links ausrichten";
WAPAMA.I18N.Arrangement.alDesc = "Links ausrichten";
WAPAMA.I18N.Arrangement.ac = "Vertikal ausrichten";
WAPAMA.I18N.Arrangement.acDesc = "Vertikal ausrichten";
WAPAMA.I18N.Arrangement.ar = "Rechts ausrichten";
WAPAMA.I18N.Arrangement.arDesc = "Rechts ausrichten";
WAPAMA.I18N.Arrangement.as = "Größenangleichung";
WAPAMA.I18N.Arrangement.asDesc = "Größenangleichung";

if(!WAPAMA.I18N.BPELSupport) WAPAMA.I18N.BPELSupport = {};

WAPAMA.I18N.BPELSupport.group = "BPEL";
WAPAMA.I18N.BPELSupport.exp = "BPEL Export";
WAPAMA.I18N.BPELSupport.expDesc = "Exportieren nach BPEL";
WAPAMA.I18N.BPELSupport.imp = "BPEL Import";
WAPAMA.I18N.BPELSupport.impDesc = "Importieren einer BPEL Datei";
WAPAMA.I18N.BPELSupport.selectFile = "Wählen Sie eine BPEL Datei aus, die Sie importieren möchten.";
WAPAMA.I18N.BPELSupport.file = "Datei";
WAPAMA.I18N.BPELSupport.impPanel = "BPEL Datei importieren";
WAPAMA.I18N.BPELSupport.impBtn = "Importieren";
WAPAMA.I18N.BPELSupport.content = "Inhalt";
WAPAMA.I18N.BPELSupport.close = "Schließen";
WAPAMA.I18N.BPELSupport.error = "Fehler";
WAPAMA.I18N.BPELSupport.progressImp = "Importiere...";
WAPAMA.I18N.BPELSupport.progressExp = "Exportiere...";
WAPAMA.I18N.BPELSupport.impFailed = "Während des Importierens ist ein Fehler aufgetreten. <br/>Fehlermeldung: <br/><br/>";

if(!WAPAMA.I18N.BPELLayout) WAPAMA.I18N.BPELLayout = {};

WAPAMA.I18N.BPELLayout.group = "BPELLayout";
WAPAMA.I18N.BPELLayout.disable = "disable layout";
WAPAMA.I18N.BPELLayout.disDesc = "disable auto layout plug-in";
WAPAMA.I18N.BPELLayout.enable = "enable layout";
WAPAMA.I18N.BPELLayout.enDesc = "enable auto layout plug-in";

if(!WAPAMA.I18N.BPEL4ChorSupport) WAPAMA.I18N.BPEL4ChorSupport = {};

WAPAMA.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.exp = "BPEL4Chor Export";
WAPAMA.I18N.BPEL4ChorSupport.expDesc = "Exportieren nach BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.imp = "BPEL4Chor Import";
WAPAMA.I18N.BPEL4ChorSupport.impDesc = "Importieren einer BPEL4Chor Datei";
WAPAMA.I18N.BPEL4ChorSupport.gen = "BPEL4Chor Generator";
WAPAMA.I18N.BPEL4ChorSupport.genDesc = "Generieren Werte einiger BPEL4Chor Eigenschaften sofern sie schon bekannt sind (z.B. Sender von messageLink)";
WAPAMA.I18N.BPEL4ChorSupport.selectFile = "Wählen Sie eine BPEL4Chor Datei aus, die Sie importieren möchten.";
WAPAMA.I18N.BPEL4ChorSupport.file = "Datei";
WAPAMA.I18N.BPEL4ChorSupport.impPanel = "BPEL4Chor Datei importieren";
WAPAMA.I18N.BPEL4ChorSupport.impBtn = "Importieren";
WAPAMA.I18N.BPEL4ChorSupport.content = "Inhalt";
WAPAMA.I18N.BPEL4ChorSupport.close = "Schließen";
WAPAMA.I18N.BPEL4ChorSupport.error = "Fehler";
WAPAMA.I18N.BPEL4ChorSupport.progressImp = "Importiere...";
WAPAMA.I18N.BPEL4ChorSupport.progressExp = "Exportiere...";
WAPAMA.I18N.BPEL4ChorSupport.impFailed = "Während des Importierens ist ein Fehler aufgetreten. <br/>Fehlermeldung: <br/><br/>";

if(!WAPAMA.I18N.Bpel4ChorTransformation) WAPAMA.I18N.Bpel4ChorTransformation = {};

WAPAMA.I18N.Bpel4ChorTransformation.group = "Export";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPEL = "BPEL4Chor Export";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPELDesc = "Exportieren nach BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDL = "XPDL4Chor Export";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDLDesc = "Exportieren nach XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.warning = "Warnung";
WAPAMA.I18N.Bpel4ChorTransformation.wrongValue = 'Der geänderte Name muß den Wert "1" haben, um Fehler während der Transformation zu BPEL4Chor zu vermeiden.';
WAPAMA.I18N.Bpel4ChorTransformation.loopNone = 'Der Schleifentyp (Loop Type) empfangsbereiten Task muss für die Transformation zu BPEL4Chor "None" sein.';
WAPAMA.I18N.Bpel4ChorTransformation.error = "Fehler";
WAPAMA.I18N.Bpel4ChorTransformation.noSource = "1 mit der Id 2 hat kein Quellobjekt.";
WAPAMA.I18N.Bpel4ChorTransformation.noTarget = "1 mit der Id 2 hat kein Zielobjekt.";
WAPAMA.I18N.Bpel4ChorTransformation.transCall = "Während der Transformation ist ein Fehler aufgetreten. 1:2";
WAPAMA.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "Exportiere nach XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "Exportiere nach BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.noGen = "Die Transformationseingabedaten konnten nicht erzeugt werden: 1\n2\n";

WAPAMA.I18N.BPMN2PNConverter = {
  name: "Konvertiere zu Petrinetz",
  desc: "Konvertiert BPMN-Diagramme in Petrinetze",
  group: "Export",
  error: "Fehler",
  errors: {
    server: "BPMN Diagramm konnte nicht importiert werden!",
    noRights: "Es sind keine Leserechte für das importierte Diagramm vorhanden!",
    notSaved: "Das Diagramm wurde noch nicht gespeichert und/ oder muss neu geöffnet werden!"
  },
  progress: {
      status: "Status",
      importingModel: "Importiere BPMN Model",
      fetchingModel: "Lade",
      convertingModel: "Konvertiere",
      renderingModel: "Zeige an"
  }
}

if(!WAPAMA.I18N.TransformationDownloadDialog) WAPAMA.I18N.TransformationDownloadDialog = {};

WAPAMA.I18N.TransformationDownloadDialog.error = "Fehler";
WAPAMA.I18N.TransformationDownloadDialog.noResult = "Der Transformationsservice hat kein Ergebnis zurückgeliefert.";
WAPAMA.I18N.TransformationDownloadDialog.errorParsing = "Während der Analyse des Diagramms ist ein Fehler aufgetreten.";
WAPAMA.I18N.TransformationDownloadDialog.transResult = "Transformationsergebnisse";
WAPAMA.I18N.TransformationDownloadDialog.showFile = "Ergebnisdatei anzeigen";
WAPAMA.I18N.TransformationDownloadDialog.downloadFile = "Ergebnisdatei herunterladen";
WAPAMA.I18N.TransformationDownloadDialog.downloadAll = "Alle Ergebnisdateien herunterladen";

if(!WAPAMA.I18N.DesynchronizabilityOverlay) WAPAMA.I18N.DesynchronizabilityOverlay = {};
//TODO translate
WAPAMA.I18N.DesynchronizabilityOverlay.group = "Overlay";
WAPAMA.I18N.DesynchronizabilityOverlay.name = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.desc = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.sync = "The net is desynchronizable.";
WAPAMA.I18N.DesynchronizabilityOverlay.error = "The net has 1 syntax errors.";
WAPAMA.I18N.DesynchronizabilityOverlay.invalid = "Invalid answer from server.";

if(!WAPAMA.I18N.Edit) WAPAMA.I18N.Edit = {};

WAPAMA.I18N.Edit.group = "Edit";
WAPAMA.I18N.Edit.cut = "Ausschneiden";
WAPAMA.I18N.Edit.cutDesc = "Ausschneiden der selektierten Elemente";
WAPAMA.I18N.Edit.copy = "Kopieren";
WAPAMA.I18N.Edit.copyDesc = "Kopieren der selektierten Elemente";
WAPAMA.I18N.Edit.paste = "Einfügen";
WAPAMA.I18N.Edit.pasteDesc = "Einfügen von kopierten/ausgeschnittenen Elementen";
WAPAMA.I18N.Edit.del = "Löschen";
WAPAMA.I18N.Edit.delDesc = "Löschen der selektierten Elemente";

if(!WAPAMA.I18N.EPCSupport) WAPAMA.I18N.EPCSupport = {};

WAPAMA.I18N.EPCSupport.group = "EPC";
WAPAMA.I18N.EPCSupport.exp = "EPML Export";
WAPAMA.I18N.EPCSupport.expDesc = "Exportieren nach EPML";
WAPAMA.I18N.EPCSupport.imp = "EPML Import";
WAPAMA.I18N.EPCSupport.impDesc = "Importieren einer EPML Datei";
WAPAMA.I18N.EPCSupport.progressExp = "Exportiere Modell";
WAPAMA.I18N.EPCSupport.selectFile = "Wählen Sie eine EPML Datei aus, die Sie importieren möchten.";
WAPAMA.I18N.EPCSupport.file = "Datei";
WAPAMA.I18N.EPCSupport.impPanel = "EPML Datei importieren";
WAPAMA.I18N.EPCSupport.impBtn = "Importieren";
WAPAMA.I18N.EPCSupport.close = "Schließen";
WAPAMA.I18N.EPCSupport.error = "Fehler";
WAPAMA.I18N.EPCSupport.progressImp = "Importiere...";

if(!WAPAMA.I18N.ERDFSupport) WAPAMA.I18N.ERDFSupport = {};

WAPAMA.I18N.ERDFSupport.exp = "ERDF Export";
WAPAMA.I18N.ERDFSupport.expDesc = "Exportieren nach ERDF";
WAPAMA.I18N.ERDFSupport.imp = "ERDF Import";
WAPAMA.I18N.ERDFSupport.impDesc = "ERDF Datei importieren";
WAPAMA.I18N.ERDFSupport.impFailed = "Anfrage für den Import der ERDF Datei ist fehlgeschlagen.";
WAPAMA.I18N.ERDFSupport.impFailed2 = "Während des Importierens ist ein Fehler aufgetreten. <br/>Fehlermeldung: <br/><br/>";
WAPAMA.I18N.ERDFSupport.error = "Fehler";
WAPAMA.I18N.ERDFSupport.noCanvas = "Das XML Dokument enthält keinen Wapama Canvas Knoten.";
WAPAMA.I18N.ERDFSupport.noSS = "Im XML Dokument ist kein Stencil Set referenziert.";
WAPAMA.I18N.ERDFSupport.wrongSS = "Das im XML Dokument referenzierte Stencil Set passt nicht zu dem im Editor geladenen Stencil Set.";
WAPAMA.I18N.ERDFSupport.selectFile = "Wählen sie eine ERDF Datei (.xml) aus oder geben Sie den ERDF Code im Textfeld ein.";
WAPAMA.I18N.ERDFSupport.file = "Datei";
WAPAMA.I18N.ERDFSupport.impERDF = "ERDF importieren";
WAPAMA.I18N.ERDFSupport.impBtn = "Importieren";
WAPAMA.I18N.ERDFSupport.impProgress = "Importiere...";
WAPAMA.I18N.ERDFSupport.close = "Schließen";
WAPAMA.I18N.ERDFSupport.deprTitle = "Wirklich nach eRDF exportieren?";
WAPAMA.I18N.ERDFSupport.deprText = "Der Export nach eRDF wird nicht empfohlen, da dieses Format in zukünftigen Versionen des Wapama Editors nicht mehr unterstützt wird. Verwenden Sie statt dessen den Export nach JSON, falls möglich. Wollen Sie dennoch das Model nach eRDF exportieren?";

if(!WAPAMA.I18N.jPDLSupport) WAPAMA.I18N.jPDLSupport = {};

WAPAMA.I18N.jPDLSupport.group = "ExecBPMN";
WAPAMA.I18N.jPDLSupport.exp = "jPDL Export";
WAPAMA.I18N.jPDLSupport.expDesc = "Exportieren nach jPDL";
WAPAMA.I18N.jPDLSupport.imp = "jPDL Import";
WAPAMA.I18N.jPDLSupport.impDesc = "jPDL Datei importieren";
WAPAMA.I18N.jPDLSupport.impFailedReq = "Anfrage für den Import der jPDL Datei ist fehlgeschlagen.";
WAPAMA.I18N.jPDLSupport.impFailedJson = "Transformation der jPDL Datei ist fehlgeschlagen.";
WAPAMA.I18N.jPDLSupport.impFailedJsonAbort = "Import abgebrochen.";
WAPAMA.I18N.jPDLSupport.loadSseQuestionTitle = "Stencil Set Erweiterung für jBPM muss geladen werden";
WAPAMA.I18N.jPDLSupport.loadSseQuestionBody = "Um jPDL importieren zu können, muss die Stencil Set Erweiterung für jBPM geladen werden. Möchten Sie fortfahren?";
WAPAMA.I18N.jPDLSupport.expFailedReq = "Anfrage für den Export des Models ist fehlgeschlagen.";
WAPAMA.I18N.jPDLSupport.expFailedXml = "Export nach jPDL ist fehlgeschlagen. Exporter meldet: ";
WAPAMA.I18N.jPDLSupport.error = "Fehler";
WAPAMA.I18N.jPDLSupport.selectFile = "Wählen sie eine jPDL Datei (.xml) aus oder geben Sie den jPDL Code im Textfeld ein.";
WAPAMA.I18N.jPDLSupport.file = "Datei";
WAPAMA.I18N.jPDLSupport.impJPDL = "jPDL importieren";
WAPAMA.I18N.jPDLSupport.impBtn = "Importieren";
WAPAMA.I18N.jPDLSupport.impProgress = "Importiere...";
WAPAMA.I18N.jPDLSupport.close = "Schließen";

if(!WAPAMA.I18N.cpntoolsSupport) WAPAMA.I18N.cpntoolsSupport = {};

WAPAMA.I18N.cpntoolsSupport.serverConnectionFailed = "Anfrage an den Wapama Server ist fehlgeschlagen.";
WAPAMA.I18N.cpntoolsSupport.importTask = "Wähle eine CPN Datei (.cpn) aus oder tippe die CPN XML Struktur ein  um es zu importieren!";
WAPAMA.I18N.cpntoolsSupport.file = "Datei:";
WAPAMA.I18N.cpntoolsSupport.cpn = "CPN";
WAPAMA.I18N.cpntoolsSupport.title = "CPN Wapama";
WAPAMA.I18N.cpntoolsSupport.importLable = "Importieren";
WAPAMA.I18N.cpntoolsSupport.close = "Schließen";
WAPAMA.I18N.cpntoolsSupport.wrongCPNFile = "Keine richtige CPN - Datei ausgewählt.";
WAPAMA.I18N.cpntoolsSupport.noPageSelection = "Es wurde kein Netze ausgewählt.";
WAPAMA.I18N.cpntoolsSupport.importProgress = "Importieren ...";
WAPAMA.I18N.cpntoolsSupport.exportProgress = "Exportieren ...";
WAPAMA.I18N.cpntoolsSupport.exportDescription = "Exportieren nach CPN Tools";
WAPAMA.I18N.cpntoolsSupport.importDescription = "Importieren von CPN Tools";

if(!WAPAMA.I18N.Bpmn2Bpel) WAPAMA.I18N.Bpmn2Bpel = {};

WAPAMA.I18N.Bpmn2Bpel.group = "ExecBPMN";
WAPAMA.I18N.Bpmn2Bpel.show = "Transformiertes BPEL anzeigen";
WAPAMA.I18N.Bpmn2Bpel.download = "Transformiertes BPEL herunterladen";
WAPAMA.I18N.Bpmn2Bpel.deploy = "Transformiertes BPEL bereitstellen";
WAPAMA.I18N.Bpmn2Bpel.showDesc = "Transformiert BPMN in BPEL und zeigt das Ergebnis an.";
WAPAMA.I18N.Bpmn2Bpel.downloadDesc = "Transformiert BPMN in BPEL und bietet das Ergebnis zum Download an.";
WAPAMA.I18N.Bpmn2Bpel.deployDesc = "Transformiert BPMN in BPEL und stellt den Prozess auf der BPEL-Engine Apache ODE bereit.";
WAPAMA.I18N.Bpmn2Bpel.transfFailed = "Die Anfrage zur Transformation in BPEL ist fehlgeschlagen.";

if(!WAPAMA.I18N.Save) WAPAMA.I18N.Save = {};

WAPAMA.I18N.Save.group = "File";
WAPAMA.I18N.Save.save = "Speichern";
WAPAMA.I18N.Save.saveDesc = "Speichern";
WAPAMA.I18N.Save.saveAs = "Speichern als...";
WAPAMA.I18N.Save.saveAsDesc = "Speichern als...";
WAPAMA.I18N.Save.unsavedData = "Das Diagramm enthält nicht gespeicherte Daten. Sind Sie sicher, daß Sie den Editor schließen möchten?";
WAPAMA.I18N.Save.newProcess = "Neuer Prozess";
WAPAMA.I18N.Save.saveAsTitle = "Speichern als...";
WAPAMA.I18N.Save.saveBtn = "Speichern";
WAPAMA.I18N.Save.close = "Schließen";
WAPAMA.I18N.Save.savedAs = "Gespeichert als";
WAPAMA.I18N.Save.saved = "Gespeichert";
WAPAMA.I18N.Save.failed = "Das Speichern ist fehlgeschlagen.";
WAPAMA.I18N.Save.noRights = "Sie haben nicht die erforderlichen Rechte, um Änderungen zu speichern.";
WAPAMA.I18N.Save.saving = "Speichern";
WAPAMA.I18N.Save.saveAsHint = "Das Diagramm wurde unter folgendem Link gespeichert:";

if(!WAPAMA.I18N.File) WAPAMA.I18N.File = {};

WAPAMA.I18N.File.group = "File";
WAPAMA.I18N.File.print = "Drucken";
WAPAMA.I18N.File.printDesc = "Drucken";
WAPAMA.I18N.File.pdf = "PDF Export";
WAPAMA.I18N.File.pdfDesc = "Exportieren nach PDF";
WAPAMA.I18N.File.info = "Über";
WAPAMA.I18N.File.infoDesc = "Über";
WAPAMA.I18N.File.genPDF = "PDF wird generiert";
WAPAMA.I18N.File.genPDFFailed = "Die Generierung der PDF Datei ist fehlgeschlagen.";
WAPAMA.I18N.File.printTitle = "Drucken";
WAPAMA.I18N.File.printMsg = "Leider arbeitet die Druckfunktion zur Zeit nicht immer korrekt. Bitte nutzen Sie den PDF Export, und drucken Sie das PDF Dokument aus. Möchten Sie dennoch mit dem Drucken fortfahren?";

if(!WAPAMA.I18N.Grouping) WAPAMA.I18N.Grouping = {};

WAPAMA.I18N.Grouping.grouping = "Grouping";
WAPAMA.I18N.Grouping.group = "Gruppieren";
WAPAMA.I18N.Grouping.groupDesc = "Gruppierung der selektierten Elemente";
WAPAMA.I18N.Grouping.ungroup = "Gruppierung aufheben";
WAPAMA.I18N.Grouping.ungroupDesc = "Aufheben aller Gruppierungen der selektierten Elemente";

if(!WAPAMA.I18N.IBPMN2BPMN) WAPAMA.I18N.IBPMN2BPMN = {};

WAPAMA.I18N.IBPMN2BPMN.group ="Export";
WAPAMA.I18N.IBPMN2BPMN.name ="IBPMN 2 BPMN Mapping";
WAPAMA.I18N.IBPMN2BPMN.desc ="IBPMN nach BPMN konvertieren";

if(!WAPAMA.I18N.Loading) WAPAMA.I18N.Loading = {};

WAPAMA.I18N.Loading.waiting ="Bitte warten...";

if(!WAPAMA.I18N.Pnmlexport) WAPAMA.I18N.Pnmlexport = {};

WAPAMA.I18N.Pnmlexport.group ="Export";
WAPAMA.I18N.Pnmlexport.name ="Nach PNML exportieren";
WAPAMA.I18N.Pnmlexport.desc ="Exportieren nach ausführbarem PNML und Deployen";

if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};

WAPAMA.I18N.PropertyWindow.name = "Name";
WAPAMA.I18N.PropertyWindow.value = "Wert";
WAPAMA.I18N.PropertyWindow.selected = "ausgewählt";
WAPAMA.I18N.PropertyWindow.clickIcon = "Symbol anklicken";
WAPAMA.I18N.PropertyWindow.add = "Hinzufügen";
WAPAMA.I18N.PropertyWindow.rem = "Löschen";
WAPAMA.I18N.PropertyWindow.complex = "Editor für komplexe Eigenschaft";
WAPAMA.I18N.PropertyWindow.text = "Editor für einen Text";
WAPAMA.I18N.PropertyWindow.ok = "OK";
WAPAMA.I18N.PropertyWindow.cancel = "Abbrechen";
WAPAMA.I18N.PropertyWindow.dateFormat = "d/m/y";

if(!WAPAMA.I18N.ShapeMenuPlugin) WAPAMA.I18N.ShapeMenuPlugin = {};

WAPAMA.I18N.ShapeMenuPlugin.drag = "Ziehen";
WAPAMA.I18N.ShapeMenuPlugin.clickDrag = "Klicken oder ziehen";
WAPAMA.I18N.ShapeMenuPlugin.morphMsg = "Shape morphen";

if(!WAPAMA.I18N.SimplePnmlexport) WAPAMA.I18N.SimplePnmlexport = {};

WAPAMA.I18N.SimplePnmlexport.group = "Export";
WAPAMA.I18N.SimplePnmlexport.name = "Nach PNML exportieren";
WAPAMA.I18N.SimplePnmlexport.desc = "Exportieren nach PNML";

if(!WAPAMA.I18N.StepThroughPlugin) WAPAMA.I18N.StepThroughPlugin = {};

WAPAMA.I18N.StepThroughPlugin.group = "Step Through";
WAPAMA.I18N.StepThroughPlugin.stepThrough = "Schrittweise Ausführung";
WAPAMA.I18N.StepThroughPlugin.stepThroughDesc = "Schrittweise Ausführung des Modells";
WAPAMA.I18N.StepThroughPlugin.undo = "Rückgängig";
WAPAMA.I18N.StepThroughPlugin.undoDesc = "Rückgängig";
WAPAMA.I18N.StepThroughPlugin.error = "Ausführung des Modells nicht möglich.";
WAPAMA.I18N.StepThroughPlugin.executing = "Führe aus";

if(!WAPAMA.I18N.SyntaxChecker) WAPAMA.I18N.SyntaxChecker = {};

WAPAMA.I18N.SyntaxChecker.group = "Verification";
WAPAMA.I18N.SyntaxChecker.name = "Syntax-Checker";
WAPAMA.I18N.SyntaxChecker.desc = "Überprüfung der Syntax";
WAPAMA.I18N.SyntaxChecker.noErrors = "Es wurden keine Syntaxfehler gefunden.";
WAPAMA.I18N.SyntaxChecker.invalid = "Ungültige Antwort vom Server.";
WAPAMA.I18N.SyntaxChecker.checkingMessage = "Überprüfung wird durchgeführt ...";

if(!WAPAMA.I18N.Undo) WAPAMA.I18N.Undo = {};

WAPAMA.I18N.Undo.group = "Undo";
WAPAMA.I18N.Undo.undo = "Rückgängig";
WAPAMA.I18N.Undo.undoDesc = "Rückgängig";
WAPAMA.I18N.Undo.redo = "Wiederherstellen";
WAPAMA.I18N.Undo.redoDesc = "Wiederherstellen";

if(!WAPAMA.I18N.Validator) WAPAMA.I18N.Validator = {};
WAPAMA.I18N.Validator.checking = "Prüfe";

if(!WAPAMA.I18N.View) WAPAMA.I18N.View = {};

WAPAMA.I18N.View.group = "Zoom";
WAPAMA.I18N.View.zoomIn = "Vergrößern";
WAPAMA.I18N.View.zoomInDesc = "Vergrößern";
WAPAMA.I18N.View.zoomOut = "Verkleinern";
WAPAMA.I18N.View.zoomOutDesc = "Verkleinern";
WAPAMA.I18N.View.zoomStandard = "Originalgröße";
WAPAMA.I18N.View.zoomStandardDesc = "Originalgröße";
WAPAMA.I18N.View.zoomFitToModel = "Modelgröße";
WAPAMA.I18N.View.zoomFitToModelDesc = "Modelgröße";


if(!WAPAMA.I18N.XFormsSerialization) WAPAMA.I18N.XFormsSerialization = {};

WAPAMA.I18N.XFormsSerialization.group = "XForms Serialisierung";
WAPAMA.I18N.XFormsSerialization.exportXForms = "XForms Export";
WAPAMA.I18N.XFormsSerialization.exportXFormsDesc = "Export als XForms+XHTML Markup";
WAPAMA.I18N.XFormsSerialization.importXForms = "XForms Import";
WAPAMA.I18N.XFormsSerialization.importXFormsDesc = "Import von XForms+XHTML Markup";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupport = "Keine XForms Unterstützung";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupportDesc = "<h2>Ihr Browser unterstützt XForms nicht. Bitte installieren Sie das <a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> für Firefox.</h2>";
WAPAMA.I18N.XFormsSerialization.ok = "OK";
WAPAMA.I18N.XFormsSerialization.selectFile = "Wählen sie eine XHTML Datei (.xhtml) aus oder geben Sie das XForms+XHTML Markup im Textfeld ein.";
WAPAMA.I18N.XFormsSerialization.selectCss = "Optional: Geben sie die URL der gewünschten css Datei an.";
WAPAMA.I18N.XFormsSerialization.file = "Datei";
WAPAMA.I18N.XFormsSerialization.impFailed = "Anfrage für den Import des Dokuments ist fehlgeschlagen.";
WAPAMA.I18N.XFormsSerialization.impTitle = "XForms+XHTML Dokument importieren";
WAPAMA.I18N.XFormsSerialization.expTitle = "XForms+XHTML Dokument exportieren";
WAPAMA.I18N.XFormsSerialization.impButton = "Importieren";
WAPAMA.I18N.XFormsSerialization.impProgress = "Importiere...";
WAPAMA.I18N.XFormsSerialization.close = "Schließen";

/** New Language Properties: 08.12.2008 **/

WAPAMA.I18N.PropertyWindow.title = "Eigenschaften";

if(!WAPAMA.I18N.ShapeRepository) WAPAMA.I18N.ShapeRepository = {};
WAPAMA.I18N.ShapeRepository.title = "Shape Verzeichnis";

WAPAMA.I18N.Save.dialogDesciption = "Bitte geben Sie einen Namen, eine Beschreibung und einen Kommentar ein.";
WAPAMA.I18N.Save.dialogLabelTitle = "Titel";
WAPAMA.I18N.Save.dialogLabelDesc = "Beschreibung";
WAPAMA.I18N.Save.dialogLabelType = "Typ";
WAPAMA.I18N.Save.dialogLabelComment = "Revisionskommentar";

WAPAMA.I18N.Validator.name = "BPMN Überprüfung";
WAPAMA.I18N.Validator.description = "Überprüfung von BPMN Modellen";

WAPAMA.I18N.SSExtensionLoader.labelImport = "Import";
WAPAMA.I18N.SSExtensionLoader.labelCancel = "Abbrechen";

Ext.MessageBox.buttonText.yes = "Ja";
Ext.MessageBox.buttonText.no = "Nein";
Ext.MessageBox.buttonText.cancel = "Abbrechen";
Ext.MessageBox.buttonText.ok = "OK";



/** New Language Properties: 28.01.2009 */
WAPAMA.I18N.BPMN2XPDL.group = "Export";
WAPAMA.I18N.BPMN2XPDL.xpdlExport = "Nach XPDL exportieren";

/** Resource Perspective Additions: 24 March 2009 */
if(!WAPAMA.I18N.ResourcesSoDAdd) WAPAMA.I18N.ResourcesSoDAdd = {};

WAPAMA.I18N.ResourcesSoDAdd.name = "Erstelle Separation of Duties Abhängigkeit";
WAPAMA.I18N.ResourcesSoDAdd.group = "Resource Perspective";
WAPAMA.I18N.ResourcesSoDAdd.desc = "Erstelle eine Separation of Duties Abhängigkeit für die selektierten Tasks";

if(!WAPAMA.I18N.ResourcesSoDShow) WAPAMA.I18N.ResourcesSoDShow = {};

WAPAMA.I18N.ResourcesSoDShow.name = "Zeige Separation of Duties Abhängigkeiten";
WAPAMA.I18N.ResourcesSoDShow.group = "Resource Perspective";
WAPAMA.I18N.ResourcesSoDShow.desc = "Zeige Separation of Duties Abhängigkeiten der selektierten Task";

if(!WAPAMA.I18N.ResourcesBoDAdd) WAPAMA.I18N.ResourcesBoDAdd = {};

WAPAMA.I18N.ResourcesBoDAdd.name = "Erstelle Binding of Duties Abhängigkeit";
WAPAMA.I18N.ResourcesBoDAdd.group = "Resource Perspective";
WAPAMA.I18N.ResourcesBoDAdd.desc = "Erstelle eine Binding of Duties Abhängigkeit für die selektierten Tasks";

if(!WAPAMA.I18N.ResourcesBoDShow) WAPAMA.I18N.ResourcesBoDShow = {};

WAPAMA.I18N.ResourcesBoDShow.name = "Zeige Binding of Duties Abhängikeiten";
WAPAMA.I18N.ResourcesBoDShow.group = "Resource Perspective";
WAPAMA.I18N.ResourcesBoDShow.desc = "Zeige Binding of Duties Abhängigkeiten für die selektierte Task";

if(!WAPAMA.I18N.ResourceAssignment) WAPAMA.I18N.ResourceAssignment = {};

WAPAMA.I18N.ResourceAssignment.name = "Ressourcenzuweisung";
WAPAMA.I18N.ResourceAssignment.group = "Resource Perspective";
WAPAMA.I18N.ResourceAssignment.desc = "Weise der/ den selektierten Task(s) Ressourcen zu";

if(!WAPAMA.I18N.ClearSodBodHighlights) WAPAMA.I18N.ClearSodBodHighlights = {};

WAPAMA.I18N.ClearSodBodHighlights.name = "Entferne Highlights und Overlays";
WAPAMA.I18N.ClearSodBodHighlights.group = "Resource Perspective";
WAPAMA.I18N.ClearSodBodHighlights.desc = "Entferne alle Separation und Binding of Duties Highlights/ Overlays";

if(!WAPAMA.I18N.Perspective) WAPAMA.I18N.Perspective = {};
WAPAMA.I18N.Perspective.no = "Keine Perspektive"
WAPAMA.I18N.Perspective.noTip = "Zurücksetzen der aktuellen Perspektive"

/** New Language Properties: 21.04.2009 */
WAPAMA.I18N.JSONSupport = {
    imp: {
        name: "JSON importieren",
        desc: "Importiert ein neues Modell aus JSON",
        group: "Export",
        selectFile: "Wählen Sie eine JSON-Datei (*.json) aus, die Sie importieren möchten, oder fügen Sie JSON in das Textfeld ein.",
        file: "Datei",
        btnImp: "Importieren",
        btnClose: "Schließen",
        progress: "Importieren ...",
        syntaxError: "Syntaxfehler"
    },
    exp: {
        name: "Nach JSON exportieren",
        desc: "Exportiert das aktuelle Modell nach JSON",
        group: "Export"
    }
};

/** New Language Properties: 08.05.2009 */
if(!WAPAMA.I18N.BPMN2XHTML) WAPAMA.I18N.BPMN2XHTML = {};
WAPAMA.I18N.BPMN2XHTML.group = "Export";
WAPAMA.I18N.BPMN2XHTML.XHTMLExport = "XHTML Dokumentation exportieren";

/** New Language Properties: 09.05.2009 */
if(!WAPAMA.I18N.JSONImport) WAPAMA.I18N.JSONImport = {};

WAPAMA.I18N.JSONImport.title = "JSON Import";
WAPAMA.I18N.JSONImport.wrongSS = "Das Stencil Set der importierten Datei ({0}) entspricht nicht dem geladenen Stencil Set ({1})."
WAPAMA.I18N.JSONImport.invalidJSON = "Das zu importierende JSON ist ungültig.";

/** New Language Properties: 11.05.2009 */
if(!WAPAMA.I18N.BPMN2DTRPXMI) WAPAMA.I18N.BPMN2DTRPXMI = {};
WAPAMA.I18N.BPMN2DTRPXMI.group = "Export";
WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExport = "Nach XMI exportieren (Design Thinking)";
WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "Exportiert das aktuelle Model nach XMI (erfordert die Stencil Set Extension 'BPMN Subset for Design Thinking')";

/** New Language Properties: 14.05.2009 */
if(!WAPAMA.I18N.RDFExport) WAPAMA.I18N.RDFExport = {};
WAPAMA.I18N.RDFExport.group = "Export";
WAPAMA.I18N.RDFExport.rdfExport = "Nach RDF exportieren";
WAPAMA.I18N.RDFExport.rdfExportDescription = "Exportiert das aktuelle Model in die XML-Serialisierung des Resource Description Frameworks (RDF)";

/** New Language Properties: 15.05.2009*/
if(!WAPAMA.I18N.SyntaxChecker.BPMN) WAPAMA.I18N.SyntaxChecker.BPMN={};
WAPAMA.I18N.SyntaxChecker.BPMN_NO_SOURCE = "Eine Kante muss einen Ursprung haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_NO_TARGET = "Eine Kante muss ein Ziel haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_DIFFERENT_PROCESS = "Ursprungs- und Zielknoten müssen im gleichen Prozess sein.";
WAPAMA.I18N.SyntaxChecker.BPMN_SAME_PROCESS = "Ursprungs- und Zielknoten müssen in verschiedenen Pools enthalten sein.";
WAPAMA.I18N.SyntaxChecker.BPMN_FLOWOBJECT_NOT_CONTAINED_IN_PROCESS = "Ein Kontrollflussobjekt muss sich in einem Prozess befinden.";
WAPAMA.I18N.SyntaxChecker.BPMN_ENDEVENT_WITHOUT_INCOMING_CONTROL_FLOW = "Ein End-Ereignis muss einen eingehenden Sequenzfluss haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_STARTEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "Ein Start-Ereignis muss einen ausgehenden Sequenzfluss haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_STARTEVENT_WITH_INCOMING_CONTROL_FLOW = "Start-Ereignisse dürfen keinen eingehenden Sequenzfluss haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITH_INCOMING_CONTROL_FLOW = "Angeheftete Zwischen-Ereignisse dürfen keinen eingehenden Sequenzfluss haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "Angeheftete Zwischen-Ereignisse müssen genau einen ausgehenden Sequenzfluss haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_ENDEVENT_WITH_OUTGOING_CONTROL_FLOW = "End-Ereignisse dürfen keinen ausgehenden Sequenzfluss haben.";
WAPAMA.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "Auf Ereignis-basierte Gateways dürfen weder Gateways noch Subprozesse folgen.";
WAPAMA.I18N.SyntaxChecker.BPMN_NODE_NOT_ALLOWED = "Knotentyp ist nicht erlaubt.";

if(!WAPAMA.I18N.SyntaxChecker.IBPMN) WAPAMA.I18N.SyntaxChecker.IBPMN={};
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_ROLE_SET = "Für Interaktionen muss ein Sender und ein Empfänger definiert sein.";
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_INCOMING_SEQFLOW = "Dieser Knoten muss eingehenden Sequenzfluss besitzen.";
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_OUTGOING_SEQFLOW = "Dieser Knoten muss ausgehenden Sequenzfluss besitzen.";

if(!WAPAMA.I18N.SyntaxChecker.InteractionNet) WAPAMA.I18N.SyntaxChecker.InteractionNet={};
WAPAMA.I18N.SyntaxChecker.InteractionNet_SENDER_NOT_SET = "Sender ist nicht definiert";
WAPAMA.I18N.SyntaxChecker.InteractionNet_RECEIVER_NOT_SET = "Empfänger ist nicht definiert";
WAPAMA.I18N.SyntaxChecker.InteractionNet_MESSAGETYPE_NOT_SET = "Nachrichtentyp ist nicht definiert.";
WAPAMA.I18N.SyntaxChecker.InteractionNet_ROLE_NOT_SET = "Rolle ist nicht definiert.";

if(!WAPAMA.I18N.SyntaxChecker.EPC) WAPAMA.I18N.SyntaxChecker.EPC={};
WAPAMA.I18N.SyntaxChecker.EPC_NO_SOURCE = "Eine Kante muss einen Ursprung haben.";
WAPAMA.I18N.SyntaxChecker.EPC_NO_TARGET = "Eine Kante muss ein Ziel haben.";
WAPAMA.I18N.SyntaxChecker.EPC_NOT_CONNECTED = "Dieser Knoten muss eingehende oder ausgehende Kanten besitzen.";
WAPAMA.I18N.SyntaxChecker.EPC_NOT_CONNECTED_2 = "Dieser Knoten muss sowohl eingehende als auch ausgehende Knoten besitzen.";
WAPAMA.I18N.SyntaxChecker.EPC_TOO_MANY_EDGES = "Knoten ist mit zu vielen Kanten verbunden.";
WAPAMA.I18N.SyntaxChecker.EPC_NO_CORRECT_CONNECTOR = "Knoten ist kein korrekter Konnektor.";
WAPAMA.I18N.SyntaxChecker.EPC_MANY_STARTS = "Es darf nur ein Start-Ereignis geben.";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_OR = "Funktionen hinter einem OR-/XOR-Split sind nicht erlaubt.";
WAPAMA.I18N.SyntaxChecker.EPC_PI_AFTER_OR = "Prozessschnittstellen hinter einem OR-/XOR-Split ist nicht erlaubt.";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_FUNCTION =  "Auf eine Funktion darf keine Funktion folgen.";
WAPAMA.I18N.SyntaxChecker.EPC_EVENT_AFTER_EVENT =  "Auf ein Ereignis darf kein Ereignis folgen.";
WAPAMA.I18N.SyntaxChecker.EPC_PI_AFTER_FUNCTION =  "Auf eine Funktion darf keine Prozessschnittstelle folgen.";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_PI =  "Auf eine Prozessschnittstelle darf keine Funktion folgen.";

if(!WAPAMA.I18N.SyntaxChecker.PetriNet) WAPAMA.I18N.SyntaxChecker.PetriNet={};
WAPAMA.I18N.SyntaxChecker.PetriNet_NOT_BIPARTITE = "Der Graph ist nicht bepartit.";
WAPAMA.I18N.SyntaxChecker.PetriNet_NO_LABEL = "Bezeichnung für einen bezeichnete Transition ist nicht gesetzt.";
WAPAMA.I18N.SyntaxChecker.PetriNet_NO_ID = "Ein Knoten besitzt keine ID.";
WAPAMA.I18N.SyntaxChecker.PetriNet_SAME_SOURCE_AND_TARGET = "Zwei Flussbeziehungen besitzen den gleichen Ursprung und das gleiche Ziel.";
WAPAMA.I18N.SyntaxChecker.PetriNet_NODE_NOT_SET = "Ein Knoten ist nicht definiert für einen Flussbeziehung.";

/** New Language Properties: 02.06.2009*/
WAPAMA.I18N.Edge = "Kante";
WAPAMA.I18N.Node = "Knoten";

/** New Language Properties: 02.06.2009*/
WAPAMA.I18N.SyntaxChecker.notice = "Bitte bewegen Sie den Mauszeiger über ein rotes Kreuz, um die Details zu erfahren.";

WAPAMA.I18N.Validator.result = "Validierungsergebnis";
WAPAMA.I18N.Validator.noErrors = "Es wurden keine Fehler gefunden.";
WAPAMA.I18N.Validator.bpmnDeadlockTitle = "Deadlock";
WAPAMA.I18N.Validator.bpmnDeadlock = "Dieses Element verursacht einen Deadlock, d.h. in manchen Situationen können nicht alle eingehenden Kanten und Nachrichtenflüsse aktiviert werden.";
WAPAMA.I18N.Validator.bpmnUnsafeTitle = "Fehlende Synchronisation";
WAPAMA.I18N.Validator.bpmnUnsafe = "Es findet eine mehrfache Aktivierung statt. Dadurch ist Synchronisierung nicht gewährleistet.";
WAPAMA.I18N.Validator.bpmnLeadsToNoEndTitle = "Validierungsergebnis";
WAPAMA.I18N.Validator.bpmnLeadsToNoEnd = "Dieser Prozess wird niemals einen Endzustand erreichen.";


WAPAMA.I18N.Validator.syntaxErrorsTitle = "Syntaxfehler";
WAPAMA.I18N.Validator.syntaxErrorsMsg = "Das Modell kann nicht validiert werden, weil es Syntaxfehler enthält.";

WAPAMA.I18N.Validator.error = "Validierung fehlgeschlagen";
WAPAMA.I18N.Validator.errorDesc = 'Es tut uns leid, aber die Valdierung konnte nicht durchgeführt werden. Wenn Sie uns über die Supportanfrage-Funktion Ihr Modell zuschicken, hilft es uns, den Fehler zu identifizieren und zu beheben.';

WAPAMA.I18N.Validator.epcIsSound = "<p><b>The EPC is sound, no problems found!</b></p>";
WAPAMA.I18N.Validator.epcNotSound = "<p><b>The EPC is <i>NOT</i> sound!</b></p>";

/** New Language Properties: 15.07.2009*/
if(!WAPAMA.I18N.Layouting) WAPAMA.I18N.Layouting ={};
WAPAMA.I18N.Layouting.doing = "Layouten...";

/** New Language Properties: 18.08.2009*/
WAPAMA.I18N.SyntaxChecker.MULT_ERRORS = "Mehrere Fehler";

/** New Language Properties: 08.09.2009*/
if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};
WAPAMA.I18N.PropertyWindow.oftenUsed = "Hauptattribute";
WAPAMA.I18N.PropertyWindow.moreProps = "Mehr Attribute";

/** New Language Properties 01.10.2009 */
if(!WAPAMA.I18N.SyntaxChecker.BPMN2) WAPAMA.I18N.SyntaxChecker.BPMN2 = {};

WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "Ein Dateninput darf keine ausgehenden Datenassoziationen haben.";
WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "Ein Datenoutput darf keine eingehenden Datenassoziationen haben.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "Ziele von Ereignis-basierten Gateways dürfen nicht mehr als einen eingehenden Sequenzfluss haben.";

/** New Language Properties 02.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "Ein Ereignis-basiertes Gateway muss 2 oder mehr ausgehende Sequenzflüsse besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "Wenn Nachrichten-Zwischenereignisse im Diagramm verwendet werden, dann dürfen Receive Tasks nicht verwendet werden und umgekehrt.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "Nur die folgenden Zwischen-Ereignis-Auslöser sind hier zulässig: Nachricht, Signal, Timer, Bedingungs und Mehrfach.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "Die ausgehenden Sequenzflüsse eines Ereignis-Gateways dürfen keinen Bedingungsausdruck besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "Das Gateway erfüllt nicht die Voraussetzungen um den Prozess zu instantiieren. Bitte verwenden Sie ein Start-Ereignis oder setzen Sie die Instanziierungs-Attribute korrekt.";

/** New Language Properties 05.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "Das Gateway muss mehrere eingehende und ausgehende Sequenzflüsse besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "Das Gateway muss mehrere eingehende aber darf keine mehrfache ausgehende Sequenzflüsse besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "Das Gateway darf keine mehrfachen eingehenden aber muss mehrfache ausgehende Sequenzflüsse besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "Ein Gateway muss mindestens einen ausgehenden Sequenzfluss besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "Empfangende Tasks, die in Ereignis-Gateway-Konfigurationen benutzt werden, dürfen keine angehefteten Zwischen-Ereignisse besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "Ein Ereignis-Unterprozess darf keinen eingehenden oder ausgehenden Sequenzfluss besitzen.";

/** New Language Properties 13.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "Mindestens ein Ende des Nachrichtenflusses muss mit einem anderen Objekt verbunden sein.";

/** New Language Properties 05.11.2009 */
if(!WAPAMA.I18N.RESIZE) WAPAMA.I18N.RESIZE = {};
WAPAMA.I18N.RESIZE.tipGrow = "Zeichenfläche vergrößern:";
WAPAMA.I18N.RESIZE.tipShrink = "Zeichenfläche verkleinern:";
WAPAMA.I18N.RESIZE.N = "Nach oben";
WAPAMA.I18N.RESIZE.W = "Nach links";
WAPAMA.I18N.RESIZE.S ="Nach unten";
WAPAMA.I18N.RESIZE.E ="Nach rechts";

/** New Language Properties 24.11.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "Eine Choreographie-Aktivität darf nur eine initiierende Nachricht besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "Ein Nachrichtenfluss ist an dieser Stelle nicht erlaubt.";

/** New Language Properties 27.11.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "Ein Ereignis-basiertes Gateway, dass nicht instanziierend ist, muss mindestens einen eingehenden Kontrollfluss besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "Eine Choreographie-Aktivität musst genau einen initiierenden Teilnehmer (weiß) besitzen.";
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "Eine Choreographie-Aktivität darf nicht mehr als einen initiierenden Teilnehmer (weiß) besitzen."

WAPAMA.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "Die Kommunikation oder Sub-Konversation muss mit mindestens zwei Teilnehmern verbunden sein.";
WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "Die Nachrichtenflussquelle muss ein Teilnehmer sein.";
WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "Das Nachrichtenflussziel muss ein Teilnehmer sein.";
WAPAMA.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "Der Konversationslink muss eine Kommunikation oder Sub-Konversation mit einem Teilnehmer verbinden.";
