/**
 * @author Sergey Smirnov
 *
 * Contains all strings for the default language (ru).
 * Version 1 - 08/29/08
 */
if(!WAPAMA) var WAPAMA = {};

if(!WAPAMA.I18N) WAPAMA.I18N = {};

WAPAMA.I18N.Language = "ru"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!WAPAMA.I18N.Wapama) WAPAMA.I18N.Wapama = {};

WAPAMA.I18N.Wapama.pleaseWait = "Wapama загружается. Пожалуйста, подождите...";
WAPAMA.I18N.Wapama.notLoggedOn = "Не прошел регистрацию";

if(!WAPAMA.I18N.AddDocker) WAPAMA.I18N.AddDocker = {};

//WAPAMA.I18N.AddDocker.group = "Docker";
WAPAMA.I18N.AddDocker.add = "Добавить докер";
WAPAMA.I18N.AddDocker.addDesc = "Добавить докер, кликом на ребре";
WAPAMA.I18N.AddDocker.del = "Удалить докер";
WAPAMA.I18N.AddDocker.delDesc = "Удалить докер";

if(!WAPAMA.I18N.SSExtensionLoader) WAPAMA.I18N.SSExtensionLoader = {};

//WAPAMA.I18N.SSExtensionLoader.group = "Stencil Set";
WAPAMA.I18N.SSExtensionLoader.add = "Добавить расширения набора шаблонов";
WAPAMA.I18N.SSExtensionLoader.addDesc = "Добавить расширение набора шаблонов";
WAPAMA.I18N.SSExtensionLoader.loading = "Загрузка расширения набора шаблонов";
WAPAMA.I18N.SSExtensionLoader.noExt = "Нет доступных расширений или все доступные расширения уже загружены.";
WAPAMA.I18N.SSExtensionLoader.failed1 = "Загрузка конфигурации расширений наборов шаблонов не удалась. Ответ не является правильным файлом конфигурации.";
WAPAMA.I18N.SSExtensionLoader.failed2 = "Загрузка конфигурации расширений наборов шаблонов не удалась. Запрос вызвал ошибку.";
WAPAMA.I18N.SSExtensionLoader.panelTitle = "Расширения";
WAPAMA.I18N.SSExtensionLoader.panelText = "Выберите расширения набора шаблонов, которые вы хотите использовать.";

if(!WAPAMA.I18N.AdHocCC) WAPAMA.I18N.AdHocCC = {};
//WAPAMA.I18N.AdHocCC.group = "Ad Hoc";
WAPAMA.I18N.AdHocCC.compl = "Изменить условие завершения";
WAPAMA.I18N.AdHocCC.complDesc = "Изменить условие завершения ad hoc Действия";
WAPAMA.I18N.AdHocCC.notOne = "Необходимо выбрать один элемент!";
WAPAMA.I18N.AdHocCC.nodAdHocCC = "Выбранный ad hoc элемент не имеет условия завершения!";
WAPAMA.I18N.AdHocCC.selectTask = "Выбрать задачу...";
WAPAMA.I18N.AdHocCC.selectState = "Выбрать состояние...";
WAPAMA.I18N.AdHocCC.addExp = "Добавить выражение";
WAPAMA.I18N.AdHocCC.selectDataField = "Выбрать поле данных...";
WAPAMA.I18N.AdHocCC.enterEqual = "Выбрать значение, равное...";
WAPAMA.I18N.AdHocCC.and = "и";
WAPAMA.I18N.AdHocCC.or = "или";
WAPAMA.I18N.AdHocCC.not = "не";
WAPAMA.I18N.AdHocCC.clearCC = "Очистить условие завершения";
WAPAMA.I18N.AdHocCC.editCC = "Редактировать условия завершения ad hoc элементов";
WAPAMA.I18N.AdHocCC.addExecState = "Добавить операторы состояний выполнения: ";
WAPAMA.I18N.AdHocCC.addDataExp = "Добавить операторы данных: ";
WAPAMA.I18N.AdHocCC.addLogOp = "Добавить логические операторы: ";
WAPAMA.I18N.AdHocCC.curCond = "Текущие условия завершения: ";

if(!WAPAMA.I18N.AMLSupport) WAPAMA.I18N.AMLSupport = {};

//WAPAMA.I18N.AMLSupport.group = "EPC";
WAPAMA.I18N.AMLSupport.imp = "Импортировать файл AML";
WAPAMA.I18N.AMLSupport.impDesc = "Импортировать файл в формате AML Aris 7";
WAPAMA.I18N.AMLSupport.failed = "Импорт файла AML не удался. Пожалуйста, проверьте соответствует ли выбранный файл формату AML. Сообщение об ошибке: ";
WAPAMA.I18N.AMLSupport.failed2 = "Импорт файла AML не удался: ";
WAPAMA.I18N.AMLSupport.noRights = "У вас нет прав для импорта нескольких диаграмм EPC (Необходимо войти в систему).";
WAPAMA.I18N.AMLSupport.panelText = "Выбрать файл AML (.xml) для импорта.";
WAPAMA.I18N.AMLSupport.file = "Файл";
WAPAMA.I18N.AMLSupport.importBtn = "Импортировать файл AML";
WAPAMA.I18N.AMLSupport.get = "Получить диаграммы...";
WAPAMA.I18N.AMLSupport.close = "Закрыть";
WAPAMA.I18N.AMLSupport.title = "Название";
WAPAMA.I18N.AMLSupport.selectDiagrams = "Выбрать диаграммы для импорта. <br/> Если выбрана одна модель, то она будет загружена в текущее окно. Если импортируется более одной модели, то они сохраняются в репозитории.";
WAPAMA.I18N.AMLSupport.impText = "Импорт";
WAPAMA.I18N.AMLSupport.impProgress = "Выполняется импорт...";
WAPAMA.I18N.AMLSupport.cancel = "Отменить";
WAPAMA.I18N.AMLSupport.name = "Имя";
WAPAMA.I18N.AMLSupport.allImported = "Все импортированные диаграммы.";
WAPAMA.I18N.AMLSupport.ok = "Ок";

if(!WAPAMA.I18N.Arrangement) WAPAMA.I18N.Arrangement = {};

WAPAMA.I18N.Arrangement.groupZ = "Z-Order";
WAPAMA.I18N.Arrangement.btf = "На передний план";
WAPAMA.I18N.Arrangement.btfDesc = "На передний план";
WAPAMA.I18N.Arrangement.btb = "На задний план";
WAPAMA.I18N.Arrangement.btbDesc = "На задний план";
WAPAMA.I18N.Arrangement.bf = "Переместить вперед";
WAPAMA.I18N.Arrangement.bfDesc = "Переместить вперед";
WAPAMA.I18N.Arrangement.bb = "Переместить назад";
WAPAMA.I18N.Arrangement.bbDesc = "Переместить назад";
WAPAMA.I18N.Arrangement.groupA = "Выравнивание";
WAPAMA.I18N.Arrangement.ab = "Выравнивание по нижнему краю";
WAPAMA.I18N.Arrangement.abDesc = "По нижнему краю";
WAPAMA.I18N.Arrangement.am = "Выравнивание по центру";
WAPAMA.I18N.Arrangement.amDesc = "По центру";
WAPAMA.I18N.Arrangement.at = "Выравнивание по верхнему краю";
WAPAMA.I18N.Arrangement.atDesc = "По верхнему краю";
WAPAMA.I18N.Arrangement.al = "Выравнивание по левому краю";
WAPAMA.I18N.Arrangement.alDesc = "По левому краю";
WAPAMA.I18N.Arrangement.ac = "Выравнивание по центру";
WAPAMA.I18N.Arrangement.acDesc = "По центру";
WAPAMA.I18N.Arrangement.ar = "Выравнивание по правому краю";
WAPAMA.I18N.Arrangement.arDesc = "По правому краю";

if(!WAPAMA.I18N.BPELSupport) WAPAMA.I18N.BPELSupport = {};

//WAPAMA.I18N.BPELSupport.group = "BPEL";
WAPAMA.I18N.BPELSupport.exp = "Экспортировать BPEL";
WAPAMA.I18N.BPELSupport.expDesc = "Экспортировать диаграмму в BPEL";
WAPAMA.I18N.BPELSupport.imp = "Импорт BPEL";
WAPAMA.I18N.BPELSupport.impDesc = "Импортировать файл BPEL";
WAPAMA.I18N.BPELSupport.selectFile = "Выбрать файл BPEL для импорта";
WAPAMA.I18N.BPELSupport.file = "файл";
WAPAMA.I18N.BPELSupport.impPanel = "Импортировать файл BPEL";
WAPAMA.I18N.BPELSupport.impBtn = "Импорт";
WAPAMA.I18N.BPELSupport.content = "содержимое";
WAPAMA.I18N.BPELSupport.close = "Закрыть";
WAPAMA.I18N.BPELSupport.error = "Ошибка";
WAPAMA.I18N.BPELSupport.progressImp = "Импорт...";
WAPAMA.I18N.BPELSupport.progressExp = "Экспорт...";
WAPAMA.I18N.BPELSupport.impFailed = "Произошла ошибка импорта! <br/>Пожалуйста, проверьте сообщение об ошибке: <br/><br/>";

if(!WAPAMA.I18N.BPEL4ChorSupport) WAPAMA.I18N.BPEL4ChorSupport = {};

//WAPAMA.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.exp = "Экспорт BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.expDesc = "Экспортировать диаграмму в BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.imp = "Импортировать BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.impDesc = "Импортировать файл BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.selectFile = "Выбрать файл BPEL4Chor для импорта";
WAPAMA.I18N.BPEL4ChorSupport.file = "файл";
WAPAMA.I18N.BPEL4ChorSupport.impPanel = "Импортировать файл BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.impBtn = "Импорт";
WAPAMA.I18N.BPEL4ChorSupport.content = "содержимое";
WAPAMA.I18N.BPEL4ChorSupport.close = "Закрыть";
WAPAMA.I18N.BPEL4ChorSupport.error = "Ошибка";
WAPAMA.I18N.BPEL4ChorSupport.progressImp = "Импорт...";
WAPAMA.I18N.BPEL4ChorSupport.progressExp = "Экспорт...";
WAPAMA.I18N.BPEL4ChorSupport.impFailed = "Произошла ошибка импорта! <br/>Пожалуйста, проверьте сообщение об ошибке: <br/><br/>";

if(!WAPAMA.I18N.Bpel4ChorTransformation) WAPAMA.I18N.Bpel4ChorTransformation = {};

//WAPAMA.I18N.Bpel4ChorTransformation.group = "BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPEL = "Экспорт BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPELDesc = "Экспортировать диаграмму в BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDL = "Экспорт XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDLDesc = "Экспортировать диаграмму в XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.warning = "Предупреждение";
WAPAMA.I18N.Bpel4ChorTransformation.wrongValue = 'Измененное имя должно иметь значение "1" во избежание ошибок трансформации в BPEL4Chor';
WAPAMA.I18N.Bpel4ChorTransformation.loopNone = 'Тип цикла задачи-получателя сообщения должен быть "None" для трансформации в BPEL4Chor';
WAPAMA.I18N.Bpel4ChorTransformation.error = "Ошибка";
WAPAMA.I18N.Bpel4ChorTransformation.noSource = "1 с идентификатором 2 не имеет объекта-источника.";
WAPAMA.I18N.Bpel4ChorTransformation.noTarget = "1 с идентификатором 2 не имеет объекта-цели.";
WAPAMA.I18N.Bpel4ChorTransformation.transCall = "Во время трансформации произогла ошибка. 1:2";
WAPAMA.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "Экспорт XPDL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "Экспорт to BPEL4Chor";
WAPAMA.I18N.Bpel4ChorTransformation.noGen = "Данные для трансформации не могут быть сгенерированы: 1\n2\n";

if(!WAPAMA.I18N.TransformationDownloadDialog) WAPAMA.I18N.TransformationDownloadDialog = {};

WAPAMA.I18N.TransformationDownloadDialog.error = "Ошибка";
WAPAMA.I18N.TransformationDownloadDialog.noResult = "Веб сервис трансформации не отвечает.";
WAPAMA.I18N.TransformationDownloadDialog.errorParsing = "Ошибка во время анализа диаграммы.";
WAPAMA.I18N.TransformationDownloadDialog.transResult = "Результаты трансформации";
WAPAMA.I18N.TransformationDownloadDialog.showFile = "Показать результат трансформации";
WAPAMA.I18N.TransformationDownloadDialog.downloadFile = "Скачать файл с результатом";
WAPAMA.I18N.TransformationDownloadDialog.downloadAll = "Скачать все файлы с результатами";

if(!WAPAMA.I18N.DesynchronizabilityOverlay) WAPAMA.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
//WAPAMA.I18N.DesynchronizabilityOverlay.group = "Overlay";
WAPAMA.I18N.DesynchronizabilityOverlay.name = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.desc = "Desynchronizability Checker";
WAPAMA.I18N.DesynchronizabilityOverlay.sync = "Сеть десинхронизированаю";
WAPAMA.I18N.DesynchronizabilityOverlay.error = "Сеть содержит 1 синтаксических ошибок.";
WAPAMA.I18N.DesynchronizabilityOverlay.invalid = "Неверный ответ сервера.";

if(!WAPAMA.I18N.Edit) WAPAMA.I18N.Edit = {};

//WAPAMA.I18N.Edit.group = "Edit";
WAPAMA.I18N.Edit.cut = "Вырезать";
WAPAMA.I18N.Edit.cutDesc = "Вырезать в буфер Wapama";
WAPAMA.I18N.Edit.copy = "Копировать";
WAPAMA.I18N.Edit.copyDesc = "Скопировать в буфер Wapama";
WAPAMA.I18N.Edit.paste = "Вставить";
WAPAMA.I18N.Edit.pasteDesc = "Добавить содержимое буфера Wapama на холст";
WAPAMA.I18N.Edit.del = "Удалить";
WAPAMA.I18N.Edit.delDesc = "Удалить";

if(!WAPAMA.I18N.EPCSupport) WAPAMA.I18N.EPCSupport = {};

//WAPAMA.I18N.EPCSupport.group = "EPC";
WAPAMA.I18N.EPCSupport.exp = "Экспорт EPC";
WAPAMA.I18N.EPCSupport.expDesc = "Экспортировать диаграмму в EPML";
WAPAMA.I18N.EPCSupport.imp = "Импорт EPC";
WAPAMA.I18N.EPCSupport.impDesc = "Импортировать файл в EPML";
WAPAMA.I18N.EPCSupport.progressExp = "Экспорт модели";
WAPAMA.I18N.EPCSupport.selectFile = "Выбрать файл EPML (.empl) для экспорта.";
WAPAMA.I18N.EPCSupport.file = "Файл";
WAPAMA.I18N.EPCSupport.impPanel = "Импортировать файл EPML";
WAPAMA.I18N.EPCSupport.impBtn = "Импорт";
WAPAMA.I18N.EPCSupport.close = "Закрыть";
WAPAMA.I18N.EPCSupport.error = "Ошибка";
WAPAMA.I18N.EPCSupport.progressImp = "Импорт...";

if(!WAPAMA.I18N.ERDFSupport) WAPAMA.I18N.ERDFSupport = {};

WAPAMA.I18N.ERDFSupport.exp = "Экспорт в ERDF";
WAPAMA.I18N.ERDFSupport.expDesc = "Экспорт в ERDF";
WAPAMA.I18N.ERDFSupport.imp = "Имопрт  ERDF";
WAPAMA.I18N.ERDFSupport.impDesc = "Импорт ERDF";
WAPAMA.I18N.ERDFSupport.impFailed = "Импорт ERDF не удался.";
WAPAMA.I18N.ERDFSupport.impFailed2 = "Произошла ошибка во время импорта! <br/>Пожалуйста, ознакомьтесь с сообщением: <br/><br/>";
WAPAMA.I18N.ERDFSupport.error = "Ошибка";
WAPAMA.I18N.ERDFSupport.noCanvas = "XML документ не содержит Wapama холста!";
WAPAMA.I18N.ERDFSupport.noSS = "Wapama холст не содержит определения набора шаблонов!";
WAPAMA.I18N.ERDFSupport.wrongSS = "Данный набор шаблонов не подходит для данного редактора!";
WAPAMA.I18N.ERDFSupport.selectFile = "Выберите файл ERDF (.xml) или введите ERDF для импорта!";
WAPAMA.I18N.ERDFSupport.file = "Файл";
WAPAMA.I18N.ERDFSupport.impERDF = "Импорт ERDF";
WAPAMA.I18N.ERDFSupport.impBtn = "Импорт";
WAPAMA.I18N.ERDFSupport.impProgress = "Импорт...";
WAPAMA.I18N.ERDFSupport.close = "Закрыть";
//WAPAMA.I18N.ERDFSupport.deprTitle = "Do you really want to export to eRDF?";
//WAPAMA.I18N.ERDFSupport.deprText = "Exporting to eRDF is not recommended anymore because the support will be stopped in future versions of the Wapama editor. If possible, export the model to JSON.";

if(!WAPAMA.I18N.Save) WAPAMA.I18N.Save = {};

//WAPAMA.I18N.Save.group = "File";
WAPAMA.I18N.Save.save = "Сохранить";
WAPAMA.I18N.Save.saveDesc = "Сохранить";
WAPAMA.I18N.Save.saveAs = "Сохранить как...";
WAPAMA.I18N.Save.saveAsDesc = "Сохранить как...";
WAPAMA.I18N.Save.unsavedData = "Есть несохраненные изменения. Пожалуйста, сохраните изменения перед выходом, иначе они будут утеряны!";
WAPAMA.I18N.Save.newProcess = "Новый процесс";
WAPAMA.I18N.Save.saveAsTitle = "Сохранить как...";
WAPAMA.I18N.Save.saveBtn = "Сохранить";
WAPAMA.I18N.Save.close = "Закрыть";
WAPAMA.I18N.Save.savedAs = "Сохранен как";
WAPAMA.I18N.Save.saved = "Выполняется сохранение";
WAPAMA.I18N.Save.failed = "Сохранение не выполнено.";
WAPAMA.I18N.Save.noRights = "У Вас нет прав для сохранения изменений.";
WAPAMA.I18N.Save.saving = "Сохранение";

if(!WAPAMA.I18N.File) WAPAMA.I18N.File = {};

//WAPAMA.I18N.File.group = "File";
WAPAMA.I18N.File.print = "Печать";
WAPAMA.I18N.File.printDesc = "Печать модели";
WAPAMA.I18N.File.pdf = "Экспорт в PDF";
WAPAMA.I18N.File.pdfDesc = "Экспорт в PDF";
WAPAMA.I18N.File.info = "Инфо";
WAPAMA.I18N.File.infoDesc = "Инфо";
WAPAMA.I18N.File.genPDF = "Создается PDF";
WAPAMA.I18N.File.genPDFFailed = "Не удалось создать PDF.";
WAPAMA.I18N.File.printTitle = "Печать";
WAPAMA.I18N.File.printMsg = "В настоящий момент мы испытываем проблемы с печатью. Мы рекоммендуем экспортировать диаграмму в PDF и затем распечатать ее. Вы хотите продолжить печать?";

if(!WAPAMA.I18N.Grouping) WAPAMA.I18N.Grouping = {};

WAPAMA.I18N.Grouping.grouping = "Группировка";
WAPAMA.I18N.Grouping.group = "Группировать";
WAPAMA.I18N.Grouping.groupDesc = "Группировать";
WAPAMA.I18N.Grouping.ungroup = "Разгруппировать";
WAPAMA.I18N.Grouping.ungroupDesc = "Разгруппировать";

if(!WAPAMA.I18N.IBPMN2BPMN) WAPAMA.I18N.IBPMN2BPMN = {};

//WAPAMA.I18N.IBPMN2BPMN.group ="Экспорт";
WAPAMA.I18N.IBPMN2BPMN.name ="Конвертация IBPMN в BPMN";
WAPAMA.I18N.IBPMN2BPMN.desc ="Конвертировать IBPMN в BPMN";

if(!WAPAMA.I18N.Loading) WAPAMA.I18N.Loading = {};

WAPAMA.I18N.Loading.waiting ="Пожалуйста, подождите...";

if(!WAPAMA.I18N.Pnmlexport) WAPAMA.I18N.Pnmlexport = {};

//WAPAMA.I18N.Pnmlexport.group ="Экспорт";
WAPAMA.I18N.Pnmlexport.name ="BPMN в PNML";
WAPAMA.I18N.Pnmlexport.desc ="Экспортировать в выполняемый PNML и развернуть";

if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};

WAPAMA.I18N.PropertyWindow.name = "Имя";
WAPAMA.I18N.PropertyWindow.value = "Значение";
WAPAMA.I18N.PropertyWindow.clickIcon = "Нажмите на значок";
WAPAMA.I18N.PropertyWindow.add = "Добавить";
WAPAMA.I18N.PropertyWindow.rem = "Удалить";
WAPAMA.I18N.PropertyWindow.complex = "Редактор сложных типов";
WAPAMA.I18N.PropertyWindow.text = "Редактор текста типа";
WAPAMA.I18N.PropertyWindow.ok = "Ок";
WAPAMA.I18N.PropertyWindow.cancel = "Отменить";
WAPAMA.I18N.PropertyWindow.dateFormat = "m/d/y";

if(!WAPAMA.I18N.ShapeMenuPlugin) WAPAMA.I18N.ShapeMenuPlugin = {};

WAPAMA.I18N.ShapeMenuPlugin.drag = "Тянуть";
WAPAMA.I18N.ShapeMenuPlugin.clickDrag = "Нажать или тянуть";

if(!WAPAMA.I18N.SimplePnmlexport) WAPAMA.I18N.SimplePnmlexport = {};

//WAPAMA.I18N.SimplePnmlexport.group = "Экспорт";
WAPAMA.I18N.SimplePnmlexport.name = "Простой экспорт BPMN в PNML";
WAPAMA.I18N.SimplePnmlexport.desc = "Экспорт в PNML";

if(!WAPAMA.I18N.StepThroughPlugin) WAPAMA.I18N.StepThroughPlugin = {};

//WAPAMA.I18N.StepThroughPlugin.group = "Пошаговая симуляция";
WAPAMA.I18N.StepThroughPlugin.stepThrough = "Пошаговая симуляция";
WAPAMA.I18N.StepThroughPlugin.stepThroughDesc = "Пошаговая симуляция BPMN модели";
WAPAMA.I18N.StepThroughPlugin.undo = "Отменить";
WAPAMA.I18N.StepThroughPlugin.undoDesc = "Вернуться на шаг назад";
WAPAMA.I18N.StepThroughPlugin.error = "Пошаговая симуляция диаграммы невозможна.";

if(!WAPAMA.I18N.SyntaxChecker) WAPAMA.I18N.SyntaxChecker = {};

//WAPAMA.I18N.SyntaxChecker.group = "Проверка";
WAPAMA.I18N.SyntaxChecker.name = "Проверка синтекса";
WAPAMA.I18N.SyntaxChecker.desc = "Проверить синтакс";
WAPAMA.I18N.SyntaxChecker.noErrors = "Синтаксических ошибок нет.";
WAPAMA.I18N.SyntaxChecker.invalid = "Неверный ответ сервера.";

if(!WAPAMA.I18N.Undo) WAPAMA.I18N.Undo = {};

//WAPAMA.I18N.Undo.group = "Отменить";
WAPAMA.I18N.Undo.undo = "Отменить";
WAPAMA.I18N.Undo.undoDesc = "Отменить последнее действие";
WAPAMA.I18N.Undo.redo = "Вернуть";
WAPAMA.I18N.Undo.redoDesc = "Вернуть последнее действие";

if(!WAPAMA.I18N.View) WAPAMA.I18N.View = {};

//WAPAMA.I18N.View.group = "Масштаб";
WAPAMA.I18N.View.zoomIn = "Увеличить";
WAPAMA.I18N.View.zoomInDesc = "Увеличить";
WAPAMA.I18N.View.zoomOut = "Уменьшить";
WAPAMA.I18N.View.zoomOutDesc = "Уменьшить";


if(!WAPAMA.I18N.XFormsSerialization) WAPAMA.I18N.XFormsSerialization = {};

//WAPAMA.I18N.XFormsSerialization.group = "Сериализация XForms";
WAPAMA.I18N.XFormsSerialization.exportXForms = "Экспорт XForms";
WAPAMA.I18N.XFormsSerialization.exportXFormsDesc = "Экспортировать XForms+XHTML";
WAPAMA.I18N.XFormsSerialization.importXForms = "Импорт XForms";
WAPAMA.I18N.XFormsSerialization.importXFormsDesc = "Импортировать XForms+XHTML";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupport = "Нет поддержки XForms";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupportDesc = "<h2>Ваш браузер не поддерживает XForms. Пожалуйста, установите <a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms надстройку</a> для Firefox.</h2>";
WAPAMA.I18N.XFormsSerialization.ok = "Ок";
WAPAMA.I18N.XFormsSerialization.selectFile = "Выберите файл XHTML (.xhtml) или введите XForms+XHTML для импорта!";
WAPAMA.I18N.XFormsSerialization.file = "Файл";
WAPAMA.I18N.XFormsSerialization.impFailed = "Импорт документа не удался.";
WAPAMA.I18N.XFormsSerialization.impTitle = "Импорт документа XForms+XHTML";
WAPAMA.I18N.XFormsSerialization.impButton = "Импорт";
WAPAMA.I18N.XFormsSerialization.impProgress = "Импорт...";
WAPAMA.I18N.XFormsSerialization.close = "Закрыть";


if(!WAPAMA.I18N.TreeGraphSupport) WAPAMA.I18N.TreeGraphSupport = {};

WAPAMA.I18N.TreeGraphSupport.syntaxCheckName = "Проверка синтаксиса";
WAPAMA.I18N.TreeGraphSupport.group = "Поддержка деревьев";
WAPAMA.I18N.TreeGraphSupport.syntaxCheckDesc = "Проверить синтаксис структуры дерева";

WAPAMA.I18N.PropertyWindow.title = "Свойства";

if(!WAPAMA.I18N.ShapeRepository) WAPAMA.I18N.ShapeRepository = {};
WAPAMA.I18N.ShapeRepository.title = "Репозиторий фигур";

WAPAMA.I18N.Save.dialogDesciption = "Пожалуйста, введите имя и описание.";
WAPAMA.I18N.Save.dialogLabelTitle = "Название";
WAPAMA.I18N.Save.dialogLabelDesc = "Описание";
WAPAMA.I18N.Save.dialogLabelType = "Тип";

WAPAMA.I18N.Validator.name = "Проверка BPMN";
WAPAMA.I18N.Validator.description = "Проверка для BPMN";

WAPAMA.I18N.SSExtensionLoader.labelImport = "Импорт";
WAPAMA.I18N.SSExtensionLoader.labelCancel = "Отмена";

Ext.MessageBox.buttonText.yes = "Да";
Ext.MessageBox.buttonText.no = "Нет";
Ext.MessageBox.buttonText.cancel = "Отмена";
Ext.MessageBox.buttonText.ok = "Ок";


///** New Language Properties: 08.12.2008 */
//
//WAPAMA.I18N.PropertyWindow.title = "Properties";
//
//if(!WAPAMA.I18N.ShapeRepository) WAPAMA.I18N.ShapeRepository = {};
//WAPAMA.I18N.ShapeRepository.title = "Shape Repository";
//
//WAPAMA.I18N.Save.dialogDesciption = "Please enter a name and a description.";
//WAPAMA.I18N.Save.dialogLabelTitle = "Title";
//WAPAMA.I18N.Save.dialogLabelDesc = "Description";
//WAPAMA.I18N.Save.dialogLabelType = "Type";
//
//WAPAMA.I18N.Validator.name = "BPMN Validator";
//WAPAMA.I18N.Validator.description = "Validation for BPMN";
//
//WAPAMA.I18N.SSExtensionLoader.labelImport = "Import";
//WAPAMA.I18N.SSExtensionLoader.labelCancel = "Cancel";
//
//Ext.MessageBox.buttonText.yes = "Yes";
//Ext.MessageBox.buttonText.no = "No";
//Ext.MessageBox.buttonText.cancel = "Cancel";
//Ext.MessageBox.buttonText.ok = "OK";
//
//
//
///** New Language Properties: 28.01.2009 */
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

/** New Language Properties: 08.09.2009 */
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
