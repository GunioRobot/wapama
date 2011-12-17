/**
 * @author Garret.Bi
 *
 * Contains all strings for the Japanese language.
 * Version 1 - 02/09/11
 */
if(!WAPAMA) var WAPAMA = {};

if(!WAPAMA.I18N) WAPAMA.I18N = {};

WAPAMA.I18N.Language = "ja"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!WAPAMA.I18N.Wapama) WAPAMA.I18N.Wapama = {};

WAPAMA.I18N.Wapama.title        = WAPAMA.TITLE;
WAPAMA.I18N.Wapama.noBackendDefined = "注意! \nバックエンド未定義。\n 要求されたモデルはロードできませんでした。保存プラグインを利用し設定をロードしてください。";
WAPAMA.I18N.Wapama.pleaseWait   = "ロード中はお待ちください...";
WAPAMA.I18N.Wapama.notLoggedOn = "ログ無効化";
WAPAMA.I18N.Wapama.editorOpenTimeout = "エディターが起動していません。このサイトで利用するポップアップの設定を有効化しているかどうか確認してください。";

if(!WAPAMA.I18N.AddDocker) WAPAMA.I18N.AddDocker = {};

WAPAMA.I18N.AddDocker.group = "Docker";
WAPAMA.I18N.AddDocker.add = "ドックの追加";
WAPAMA.I18N.AddDocker.addDesc = "クリックし、ドックを端に追加します";
WAPAMA.I18N.AddDocker.del = "ドックの削除";
WAPAMA.I18N.AddDocker.delDesc = "ドックを削除します";

if(!WAPAMA.I18N.ShapeConnector) WAPAMA.I18N.ShapeConnector = {};

WAPAMA.I18N.ShapeConnector.group = "Connector";
WAPAMA.I18N.ShapeConnector.add = "シェープの接続";
WAPAMA.I18N.ShapeConnector.addDesc = "順序を付け複数のノードを接続します";

if(!WAPAMA.I18N.SSExtensionLoader) WAPAMA.I18N.SSExtensionLoader = {};

WAPAMA.I18N.SSExtensionLoader.group = "Stencil Set";
WAPAMA.I18N.SSExtensionLoader.add = "ステンシルセット拡張の追加";
WAPAMA.I18N.SSExtensionLoader.addDesc = "ステンシルセット拡張を追加します";
WAPAMA.I18N.SSExtensionLoader.loading = "ステンシルセット拡張のロード";
WAPAMA.I18N.SSExtensionLoader.noExt = "拡張がないか、すでにすべての拡張がロードされています。";
WAPAMA.I18N.SSExtensionLoader.failed1 = "ステンシルセット拡張のロードに失敗しました。応答は有効な構成ファイルではありません。";
WAPAMA.I18N.SSExtensionLoader.failed2 = "ステンシルセット拡張のロードに失敗しました。要求はエラーを返しました。";
WAPAMA.I18N.SSExtensionLoader.panelTitle = "ステンシルセット拡張";
WAPAMA.I18N.SSExtensionLoader.panelText = "ロードしたいステンシルセット拡張を選択してください。";

if(!WAPAMA.I18N.AdHocCC) WAPAMA.I18N.AdHocCC = {};

WAPAMA.I18N.AdHocCC.group = "Ad Hoc";
WAPAMA.I18N.AdHocCC.compl = "完了条件の編集";
WAPAMA.I18N.AdHocCC.complDesc = "アドホックアクティビティーの完了条件の編集";
WAPAMA.I18N.AdHocCC.notOne = "１つの要素が正しく選択されていません!";
WAPAMA.I18N.AdHocCC.nodAdHocCC = "選択された要素はアドホック完了条件を含んでいません!";
WAPAMA.I18N.AdHocCC.selectTask = "タスクの選択...";
WAPAMA.I18N.AdHocCC.selectState = "状態の選択...";
WAPAMA.I18N.AdHocCC.addExp = "式の追加";
WAPAMA.I18N.AdHocCC.selectDataField = "データフィールドの選択...";
WAPAMA.I18N.AdHocCC.enterEqual = "等しい値を入力してください...";
WAPAMA.I18N.AdHocCC.and = "and";
WAPAMA.I18N.AdHocCC.or = "or";
WAPAMA.I18N.AdHocCC.not = "not";
WAPAMA.I18N.AdHocCC.clearCC = "完了条件のクリアー";
WAPAMA.I18N.AdHocCC.editCC = "アドホック完了条件の編集";
WAPAMA.I18N.AdHocCC.addExecState = "実行状態式の追加: ";
WAPAMA.I18N.AdHocCC.addDataExp = "データ式の追加: ";
WAPAMA.I18N.AdHocCC.addLogOp = "論理演算の追加: ";
WAPAMA.I18N.AdHocCC.curCond = "現在の完了条件: ";

if(!WAPAMA.I18N.AMLSupport) WAPAMA.I18N.AMLSupport = {};

WAPAMA.I18N.AMLSupport.group = "EPC";
WAPAMA.I18N.AMLSupport.imp = "AML ファイルのインポート";
WAPAMA.I18N.AMLSupport.impDesc = "Aris 7 AML ファイルのインポート";
WAPAMA.I18N.AMLSupport.failed = "AML ファイルのインポートに失敗しました。選択されたファイルが有効な AML ファイルかどうか確認してください。エラーメッセージ: ";
WAPAMA.I18N.AMLSupport.failed2 = "AML ファイルのインポートに失敗: ";
WAPAMA.I18N.AMLSupport.noRights = "複数の EPC ダイアグラムをインポートする権限がありません(ログインが必要です)。";
WAPAMA.I18N.AMLSupport.panelText = "インポートする AML (.xml) を選択してください。";
WAPAMA.I18N.AMLSupport.file = "ファイル";
WAPAMA.I18N.AMLSupport.importBtn = "AML ファイルのインポート";
WAPAMA.I18N.AMLSupport.get = "ダイアグラムの取得...";
WAPAMA.I18N.AMLSupport.close = "閉じる";
WAPAMA.I18N.AMLSupport.title = "タイトル";
WAPAMA.I18N.AMLSupport.selectDiagrams = "インポートしたいダイアグラムを選択してください。 <br/> １つのモデルが選択された場合、現在のエディターにインポートされます。複数のモデルが選択された場合、リポジトリ―に保存されます。";
WAPAMA.I18N.AMLSupport.impText = "インポート";
WAPAMA.I18N.AMLSupport.impProgress = "インポート中...";
WAPAMA.I18N.AMLSupport.cancel = "キャンセル";
WAPAMA.I18N.AMLSupport.name = "名前";
WAPAMA.I18N.AMLSupport.allImported = "インポートされたすべてのダイアグラム";
WAPAMA.I18N.AMLSupport.ok = "OK";

if(!WAPAMA.I18N.Arrangement) WAPAMA.I18N.Arrangement = {};

WAPAMA.I18N.Arrangement.groupZ = "Z-Order";
WAPAMA.I18N.Arrangement.btf = "最前面へ移動";
WAPAMA.I18N.Arrangement.btfDesc = "最前面へ移動";
WAPAMA.I18N.Arrangement.btb = "最背面へ移動";
WAPAMA.I18N.Arrangement.btbDesc = "最背面へ移動";
WAPAMA.I18N.Arrangement.bf = "前面へ移動";
WAPAMA.I18N.Arrangement.bfDesc = "前面へ移動";
WAPAMA.I18N.Arrangement.bb = "背面へ移動";
WAPAMA.I18N.Arrangement.bbDesc = "背面へ移動";
WAPAMA.I18N.Arrangement.groupA = "Alignment";
WAPAMA.I18N.Arrangement.ab = "下揃え";
WAPAMA.I18N.Arrangement.abDesc = "下";
WAPAMA.I18N.Arrangement.am = "上下中央揃え";
WAPAMA.I18N.Arrangement.amDesc = "上下中央";
WAPAMA.I18N.Arrangement.at = "上揃え";
WAPAMA.I18N.Arrangement.atDesc = "上";
WAPAMA.I18N.Arrangement.al = "左揃え";
WAPAMA.I18N.Arrangement.alDesc = "左";
WAPAMA.I18N.Arrangement.ac = "左右中央揃え";
WAPAMA.I18N.Arrangement.acDesc = "左右中央";
WAPAMA.I18N.Arrangement.ar = "右揃え";
WAPAMA.I18N.Arrangement.arDesc = "右";
WAPAMA.I18N.Arrangement.as = "サイズ揃え";
WAPAMA.I18N.Arrangement.asDesc = "同サイズ";

if(!WAPAMA.I18N.BPELSupport) WAPAMA.I18N.BPELSupport = {};

WAPAMA.I18N.BPELSupport.group = "BPEL";
WAPAMA.I18N.BPELSupport.exp = "BPEL のエキスポート";
WAPAMA.I18N.BPELSupport.expDesc = "ダイアグラムの BPEL へのエキスポート";
WAPAMA.I18N.BPELSupport.imp = "BPEL のインポート";
WAPAMA.I18N.BPELSupport.impDesc = "BPEL ファイルのインポート";
WAPAMA.I18N.BPELSupport.selectFile = "インポートする BPEL ファイルの選択";
WAPAMA.I18N.BPELSupport.file = "ファイル";
WAPAMA.I18N.BPELSupport.impPanel = "BPEL ファイルのインポートfile";
WAPAMA.I18N.BPELSupport.impBtn = "インポート";
WAPAMA.I18N.BPELSupport.content = "コンテント";
WAPAMA.I18N.BPELSupport.close = "閉じる";
WAPAMA.I18N.BPELSupport.error = "エラー";
WAPAMA.I18N.BPELSupport.progressImp = "インポート中...";
WAPAMA.I18N.BPELSupport.progressExp = "エキスポート中...";
WAPAMA.I18N.BPELSupport.impFailed = "インポート中にエラーが発生しました! <br/>エラーメッセージを確認してください: <br/><br/>";

if(!WAPAMA.I18N.BPELLayout) WAPAMA.I18N.BPELLayout = {};

WAPAMA.I18N.BPELLayout.group = "BPELLayout";
WAPAMA.I18N.BPELLayout.disable = "レイアウトの無効";
WAPAMA.I18N.BPELLayout.disDesc = "自動レイアウトプラグインの無効化";
WAPAMA.I18N.BPELLayout.enable = "レイアウトの有効";
WAPAMA.I18N.BPELLayout.enDesc = "自動レイアウトプラグインの有効化";

if(!WAPAMA.I18N.BPEL4Chor2BPELSupport) WAPAMA.I18N.BPEL4Chor2BPELSupport = {};

WAPAMA.I18N.BPEL4Chor2BPELSupport.group = "BPEL4Chor";
WAPAMA.I18N.BPEL4Chor2BPELSupport.exp = "BPEL　へエクスポート";
WAPAMA.I18N.BPEL4Chor2BPELSupport.expDesc = "ダイアグラムを BPEL へエクスポート";

if(!WAPAMA.I18N.BPEL4ChorSupport) WAPAMA.I18N.BPEL4ChorSupport = {};

WAPAMA.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
WAPAMA.I18N.BPEL4ChorSupport.exp = "BPEL4Chor へエクスポート";
WAPAMA.I18N.BPEL4ChorSupport.expDesc = "ダイアグラムを BPEL4Chor へエクスポート";
WAPAMA.I18N.BPEL4ChorSupport.imp = "BPEL4Chor のインポート";
WAPAMA.I18N.BPEL4ChorSupport.impDesc = "BPEL4Chor ファイルのインポート";
WAPAMA.I18N.BPEL4ChorSupport.gen = "BPEL4Chor ジェネレーター";
WAPAMA.I18N.BPEL4ChorSupport.genDesc = "既知の BPEL4Chor プロパティ―の値を生成します(例 messageLink の送信者)";
WAPAMA.I18N.BPEL4ChorSupport.selectFile = "インポートする BPEL4Chor ファイルの選択";
WAPAMA.I18N.BPEL4ChorSupport.file = "ファイル";
WAPAMA.I18N.BPEL4ChorSupport.impPanel = "BPEL4Chor ファイルのインポート";
WAPAMA.I18N.BPEL4ChorSupport.impBtn = "インポート";
WAPAMA.I18N.BPEL4ChorSupport.content = "コンテント";
WAPAMA.I18N.BPEL4ChorSupport.close = "閉じる";
WAPAMA.I18N.BPEL4ChorSupport.error = "エラー";
WAPAMA.I18N.BPEL4ChorSupport.progressImp = "インポート中...";
WAPAMA.I18N.BPEL4ChorSupport.progressExp = "エクスポート中...";
WAPAMA.I18N.BPEL4ChorSupport.impFailed = "インポート中にエラーが発生しました! <br/>エラーメッセージを確認してください: <br/><br/>";

if(!WAPAMA.I18N.Bpel4ChorTransformation) WAPAMA.I18N.Bpel4ChorTransformation = {};

WAPAMA.I18N.Bpel4ChorTransformation.group = "Export";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPEL = "BPEL4Chor のエクスポート";
WAPAMA.I18N.Bpel4ChorTransformation.exportBPELDesc = "ダイアグラムの BPEL4Chor へのエクスポート";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDL = "XPDL4Chor のエクスポート";
WAPAMA.I18N.Bpel4ChorTransformation.exportXPDLDesc = "ダイアグラムの XPDL4Chor へのエクスポート";
WAPAMA.I18N.Bpel4ChorTransformation.warning = "警告";
WAPAMA.I18N.Bpel4ChorTransformation.wrongValue = 'BPEL4Chor への変換中のエラーを回避するために、変更された名前は値 "1" を含まなければなりません。';
WAPAMA.I18N.Bpel4ChorTransformation.loopNone = 'BPEL4Chor へ変換するするために、受信タスクのループタイプは "None" でなければなりません。';
WAPAMA.I18N.Bpel4ChorTransformation.error = "エラー";
WAPAMA.I18N.Bpel4ChorTransformation.noSource = "ID 2 の 1 はソースオブジェクトを持っていません。";
WAPAMA.I18N.Bpel4ChorTransformation.noTarget = "ID 2 の 1 はターゲットオブジェクトを持っていません。";
WAPAMA.I18N.Bpel4ChorTransformation.transCall = "変換中にエラーが発生しました。 1:2";
WAPAMA.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "XPDL4Chor へエクスポート";
WAPAMA.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "BPEL4Chor へエクスポート";
WAPAMA.I18N.Bpel4ChorTransformation.noGen = "変換入力は生成されませんでした: 1\n2\n";

WAPAMA.I18N.BPMN2PNConverter = {
  name: "ペトリネットへ変換",
  desc: "BPMN ダイアグラムのペトリネットへの変換",
  group: "エキスポート",
  error: "エラー",
  errors: {
    server: "BPNM ダイアグラムをインポートできません。",
    noRights: "与えられたモデルに読込権限がありますか?",
    notSaved: "ペトリネットエクスポートを利用するためには、モデルを保存し、もう一度開いてください!"
  },
  progress: {
      status: "状態",
      importingModel: "BPMN モデルのインポート",
      fetchingModel: "取り込み中",
      convertingModel: "変換中",
      renderingModel: "レンダリング中"
  }
}

if(!WAPAMA.I18N.TransformationDownloadDialog) WAPAMA.I18N.TransformationDownloadDialog = {};

WAPAMA.I18N.TransformationDownloadDialog.error = "エラー";
WAPAMA.I18N.TransformationDownloadDialog.noResult = "変換サービスが結果を返信していません。";
WAPAMA.I18N.TransformationDownloadDialog.errorParsing = "ダイアグラムのパース中にエラーが発せしました。";
WAPAMA.I18N.TransformationDownloadDialog.transResult = "変換結果";
WAPAMA.I18N.TransformationDownloadDialog.showFile = "結果ファイルの表示";
WAPAMA.I18N.TransformationDownloadDialog.downloadFile = "結果ファイルのダウンロード";
WAPAMA.I18N.TransformationDownloadDialog.downloadAll = "すべての結果ファイルのダウンロード";

if(!WAPAMA.I18N.DesynchronizabilityOverlay) WAPAMA.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
WAPAMA.I18N.DesynchronizabilityOverlay.group = "Overlay";
WAPAMA.I18N.DesynchronizabilityOverlay.name = "非同期化の確認";
WAPAMA.I18N.DesynchronizabilityOverlay.desc = "非同期化の確認";
WAPAMA.I18N.DesynchronizabilityOverlay.sync = "ネットは非同期にできます。";
WAPAMA.I18N.DesynchronizabilityOverlay.error = "ネットに１つのシンタックスエラーがあります。";
WAPAMA.I18N.DesynchronizabilityOverlay.invalid = "サーバーからの無効な回答です。";

if(!WAPAMA.I18N.Edit) WAPAMA.I18N.Edit = {};

WAPAMA.I18N.Edit.group = "Edit";
WAPAMA.I18N.Edit.cut = "カット";
WAPAMA.I18N.Edit.cutDesc = "選択したものをクリップボードへカット";
WAPAMA.I18N.Edit.copy = "コピー";
WAPAMA.I18N.Edit.copyDesc = "選択したものをクリップボードへコピー";
WAPAMA.I18N.Edit.paste = "ペースト";
WAPAMA.I18N.Edit.pasteDesc = "クリップボードからキャンバスにペースト";
WAPAMA.I18N.Edit.del = "削除";
WAPAMA.I18N.Edit.delDesc = "選択したすべてのシェープを削除";

if(!WAPAMA.I18N.EPCSupport) WAPAMA.I18N.EPCSupport = {};

WAPAMA.I18N.EPCSupport.group = "EPC";
WAPAMA.I18N.EPCSupport.exp = "EPC のエキスポート";
WAPAMA.I18N.EPCSupport.expDesc = "ダイアグラムの EPML へのエキスポート";
WAPAMA.I18N.EPCSupport.imp = "EPC のインポート";
WAPAMA.I18N.EPCSupport.impDesc = "EPML ファイルのインポート";
WAPAMA.I18N.EPCSupport.progressExp = "モデルのエクスポート";
WAPAMA.I18N.EPCSupport.selectFile = "インポートする EPML (.empl) ファイルの選択。";
WAPAMA.I18N.EPCSupport.file = "ファイル";
WAPAMA.I18N.EPCSupport.impPanel = "EPML ファイルのインポート";
WAPAMA.I18N.EPCSupport.impBtn = "インポート";
WAPAMA.I18N.EPCSupport.close = "閉じる";
WAPAMA.I18N.EPCSupport.error = "エラー";
WAPAMA.I18N.EPCSupport.progressImp = "インポート中...";

if(!WAPAMA.I18N.ERDFSupport) WAPAMA.I18N.ERDFSupport = {};

WAPAMA.I18N.ERDFSupport.exp = "ERDF のエキスポート";
WAPAMA.I18N.ERDFSupport.expDesc = "ERDF のエキスポート";
WAPAMA.I18N.ERDFSupport.imp = "ERDF のインポート";
WAPAMA.I18N.ERDFSupport.impDesc = "ERDF のインポート";
WAPAMA.I18N.ERDFSupport.impFailed = "ERDF のインポートへの要求が失敗しました。";
WAPAMA.I18N.ERDFSupport.impFailed2 = "インポート中にエラーが発生しました! <br/>エラーメッセージを確認してください: <br/><br/>";
WAPAMA.I18N.ERDFSupport.error = "エラー";
WAPAMA.I18N.ERDFSupport.noCanvas = "xml ファイルに Wapama キャンバスノードが含まれていません!";
WAPAMA.I18N.ERDFSupport.noSS = "Wapama キャンバスノードにステンシルセット定義が含まれていません!";
WAPAMA.I18N.ERDFSupport.wrongSS = "与えられたステンシルセットは現在のエディターに対応していません!";
WAPAMA.I18N.ERDFSupport.selectFile = "インポートスr ERDF (.xml) ファイルまたは ERDF のタイプを選択してください!";
WAPAMA.I18N.ERDFSupport.file = "ファイル";
WAPAMA.I18N.ERDFSupport.impERDF = "ERDF のインポート";
WAPAMA.I18N.ERDFSupport.impBtn = "インポート";
WAPAMA.I18N.ERDFSupport.impProgress = "インポート中...";
WAPAMA.I18N.ERDFSupport.close = "閉じる";
WAPAMA.I18N.ERDFSupport.deprTitle = "eRDF をエキスポートしますか?";
WAPAMA.I18N.ERDFSupport.deprText = "eRDF へのエキスポートは推奨されません。将来の Wapama エディターのバージョンではサポートされません。モデルの JSON へのエクスポートを推奨します。エキスポートを続けますか?";

if(!WAPAMA.I18N.jPDLSupport) WAPAMA.I18N.jPDLSupport = {};

WAPAMA.I18N.jPDLSupport.group = "Export";
WAPAMA.I18N.jPDLSupport.exp = "jPDL へのエキスポート";
WAPAMA.I18N.jPDLSupport.expDesc = "jPDL へのエキスポート";
WAPAMA.I18N.jPDLSupport.imp = "jPDL のインポート";
WAPAMA.I18N.jPDLSupport.impDesc = "jPDL ファイルのインポート";
WAPAMA.I18N.jPDLSupport.impFailedReq = "jPDL のインポートへの要求が失敗しました。";
//WAPAMA.I18N.jPDLSupport.impFailedJson = "JA:Transformation of jPDL failed.";
WAPAMA.I18N.jPDLSupport.impFailedJsonAbort = "インポートが中断しました。";
WAPAMA.I18N.jPDLSupport.loadSseQuestionTitle = "jBPM ステンシルセット拡張がロードされなければなりません";
WAPAMA.I18N.jPDLSupport.loadSseQuestionBody = "jPDL をインポートするためには、ステンシルセット拡張がロードされなけれbあなりません。実行しますか?";
WAPAMA.I18N.jPDLSupport.expFailedReq = "モデルのエキスポート要求が失敗しました。";
WAPAMA.I18N.jPDLSupport.expFailedXml = "jPDL へのエキスポートが失敗しました。 エキスポートの報告: ";
WAPAMA.I18N.jPDLSupport.error = "エラー";
WAPAMA.I18N.jPDLSupport.selectFile = "インポートする jPDL (.xml) ファイルまたは jPDL のタイプを選択してください!";
WAPAMA.I18N.jPDLSupport.file = "ファイル";
WAPAMA.I18N.jPDLSupport.impJPDL = "jPDL のインポート";
WAPAMA.I18N.jPDLSupport.impBtn = "インポート";
WAPAMA.I18N.jPDLSupport.impProgress = "インポート中...";
WAPAMA.I18N.jPDLSupport.close = "閉じる";

if(!WAPAMA.I18N.Bpmn2Bpel) WAPAMA.I18N.Bpmn2Bpel = {};

WAPAMA.I18N.Bpmn2Bpel.group = "ExecBPMN";
WAPAMA.I18N.Bpmn2Bpel.show = "変換済み BPEL の表示";
WAPAMA.I18N.Bpmn2Bpel.download = "変換済み BPEL のダウンロード";
WAPAMA.I18N.Bpmn2Bpel.deploy = "変換済み BPEL のデプロイ";
WAPAMA.I18N.Bpmn2Bpel.showDesc = "BPMN を BPEL へ変換し、新規のウィンドウに結果を表示する。";
WAPAMA.I18N.Bpmn2Bpel.downloadDesc = "BPMN を BPEL へ変換し、結果をダウンロードします。";
WAPAMA.I18N.Bpmn2Bpel.deployDesc = "BPMN を BPEL へ変換し、BPEL-エンジン Apache ODE にビジネスプロセスをデプロイします。";
WAPAMA.I18N.Bpmn2Bpel.transfFailed = "BPEL への変換要求が失敗しました。";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputTitle = "Apache ODE URL";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelDeploy = "プロセスのデプロイ";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelCancel = "キャンセル";
WAPAMA.I18N.Bpmn2Bpel.ApacheOdeUrlInputPanelText = "Apache ODE BPEL-エンジンのURLを入力してください。 例: http://myserver:8080/ode";


if(!WAPAMA.I18N.Save) WAPAMA.I18N.Save = {};

WAPAMA.I18N.Save.group = "File";
WAPAMA.I18N.Save.save = "保存";
WAPAMA.I18N.Save.autosave = "自動保存";
WAPAMA.I18N.Save.saveDesc = "保存";
WAPAMA.I18N.Save.autosaveDesc = "自動保存";
WAPAMA.I18N.Save.autosaveDesc_on = "自動保存 (オン)";
WAPAMA.I18N.Save.autosaveDesc_off = "自動保存 (オフ)";
WAPAMA.I18N.Save.saveAs = "名前を付けて保存...";
WAPAMA.I18N.Save.saveAsDesc = "名前を付けて保存...";
WAPAMA.I18N.Save.unsavedData = "保存されていないデータがあります。変更されませんので、保存してください!";
WAPAMA.I18N.Save.newProcess = "新規プロセス";
WAPAMA.I18N.Save.saveAsTitle = "名前を付けて保存...";
WAPAMA.I18N.Save.saveBtn = "保存";
WAPAMA.I18N.Save.close = "閉じる";
WAPAMA.I18N.Save.savedAs = "名前を付けて保存";
WAPAMA.I18N.Save.saved = "保存されました!";
WAPAMA.I18N.Save.failed = "保存されませんでした。";
WAPAMA.I18N.Save.failedTitle = "内部エラー";
WAPAMA.I18N.Save.failedMsg = "保存中にエラーが発生しました。";
WAPAMA.I18N.Save.failedOKBtn = "OK";
WAPAMA.I18N.Save.failedDetailsBtn = "詳細";
WAPAMA.I18N.Save.failedThereWas = "要求を実行中に問題が発せしました:";
WAPAMA.I18N.Save.noRights = "変更を保存する権限がありません。";
WAPAMA.I18N.Save.saving = "保存中";
WAPAMA.I18N.Save.saveAsHint = "プロセスダイアグラムが次に保存されています:";
WAPAMA.I18N.Save.successTitle = "JA:Status";
WAPAMA.I18N.Save.successMsg = "JA:Save operation completed successfully.";
WAPAMA.I18N.Save.savingMsg = "JA:Please wait while saving...";

if(!WAPAMA.I18N.File) WAPAMA.I18N.File = {};

WAPAMA.I18N.File.group = "File";
WAPAMA.I18N.File.print = "印刷";
WAPAMA.I18N.File.printDesc = "現在のモデルの印刷";
WAPAMA.I18N.File.pdf = "PDF としてエキスポート";
WAPAMA.I18N.File.pdfDesc = "PDF としてエキスポート";
WAPAMA.I18N.File.info = "情報";
WAPAMA.I18N.File.infoDesc = "情報";
WAPAMA.I18N.File.genPDF = "PDF の生成";
WAPAMA.I18N.File.genPDFFailed = "PDF の生成に失敗しました。";
WAPAMA.I18N.File.printTitle = "印刷";
WAPAMA.I18N.File.printMsg = "現在、印刷機能に問題があります。ダイアグラムを印刷するよりPDFにエキスポートすることをお勧めします。印刷を継続しますか?";

if(!WAPAMA.I18N.Grouping) WAPAMA.I18N.Grouping = {};

WAPAMA.I18N.Grouping.grouping = "Grouping";
WAPAMA.I18N.Grouping.group = "Group";
WAPAMA.I18N.Grouping.groupDesc = "選択したすべてのシェープをグループ化";
WAPAMA.I18N.Grouping.ungroup = "グループ解除";
WAPAMA.I18N.Grouping.ungroupDesc = "選択したすべてのシェープのグループを削除";

if(!WAPAMA.I18N.IBPMN2BPMN) WAPAMA.I18N.IBPMN2BPMN = {};

WAPAMA.I18N.IBPMN2BPMN.group = "Export";
WAPAMA.I18N.IBPMN2BPMN.name = "IBPMN から BPMN へマッピング";
WAPAMA.I18N.IBPMN2BPMN.desc = "IBPMN から BPMN へ変換";

if(!WAPAMA.I18N.Loading) WAPAMA.I18N.Loading = {};

WAPAMA.I18N.Loading.waiting = "しばらくお待ちください...";

if(!WAPAMA.I18N.Pnmlexport) WAPAMA.I18N.Pnmlexport = {};

WAPAMA.I18N.Pnmlexport.group = "Export";
WAPAMA.I18N.Pnmlexport.name = "BPMN から PNML へ";
WAPAMA.I18N.Pnmlexport.desc = "実行可能 PNML へエキスポートしデプロイ";

if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};

WAPAMA.I18N.PropertyWindow.name = "名前";
WAPAMA.I18N.PropertyWindow.value = "値";
WAPAMA.I18N.PropertyWindow.selected = "選択済み";
WAPAMA.I18N.PropertyWindow.clickIcon = "クリックアイコン";
WAPAMA.I18N.PropertyWindow.add = "追加";
WAPAMA.I18N.PropertyWindow.rem = "削除";
WAPAMA.I18N.PropertyWindow.complex = "コンプレックスタイプエディター";
WAPAMA.I18N.PropertyWindow.text = "テキストタイプエディター";
WAPAMA.I18N.PropertyWindow.ok = "OK";
WAPAMA.I18N.PropertyWindow.cancel = "キャンセル";
WAPAMA.I18N.PropertyWindow.dateFormat = "m/d/y";
WAPAMA.I18N.PropertyWindow.mappingeditor = "マッピングエディター";
WAPAMA.I18N.PropertyWindow.expression = "式エディター";
WAPAMA.I18N.PropertyWindow.xpathTextarea = "xpath 式の挿入";
WAPAMA.I18N.PropertyWindow.True = "真";
WAPAMA.I18N.PropertyWindow.False = "偽";

if(!WAPAMA.I18N.ShapeMenuPlugin) WAPAMA.I18N.ShapeMenuPlugin = {};

WAPAMA.I18N.ShapeMenuPlugin.drag = "ドラッグ";
WAPAMA.I18N.ShapeMenuPlugin.clickDrag = "クリックまたはドラッグ";
WAPAMA.I18N.ShapeMenuPlugin.morphMsg = "モーフ形状";

if(!WAPAMA.I18N.SimplePnmlexport) WAPAMA.I18N.SimplePnmlexport = {};

WAPAMA.I18N.SimplePnmlexport.group = "Export";
WAPAMA.I18N.SimplePnmlexport.name = "PNML へエキスポート";
WAPAMA.I18N.SimplePnmlexport.desc = "PNML へエキスポート";

if(!WAPAMA.I18N.StepThroughPlugin) WAPAMA.I18N.StepThroughPlugin = {};

WAPAMA.I18N.StepThroughPlugin.group = "Step Through";
WAPAMA.I18N.StepThroughPlugin.stepThrough = "ステップスルー";
WAPAMA.I18N.StepThroughPlugin.stepThroughDesc = "モデルのステップスルー";
WAPAMA.I18N.StepThroughPlugin.undo = "取り消し";
WAPAMA.I18N.StepThroughPlugin.undoDesc = "ステップの取り消し";
WAPAMA.I18N.StepThroughPlugin.error = "このダイアグラムをステップスルーできません。";
WAPAMA.I18N.StepThroughPlugin.executing = "実行中";

if(!WAPAMA.I18N.SyntaxChecker) WAPAMA.I18N.SyntaxChecker = {};

WAPAMA.I18N.SyntaxChecker.group = "Verification";
WAPAMA.I18N.SyntaxChecker.name = "シンタックスチェック";
WAPAMA.I18N.SyntaxChecker.desc = "シンタックスチェック";
WAPAMA.I18N.SyntaxChecker.noErrors = "シンタックスエラーはありません。";
WAPAMA.I18N.SyntaxChecker.invalid = "サーバーから無効な回答です。";
WAPAMA.I18N.SyntaxChecker.checkingMessage = "チェック中...";

if(!WAPAMA.I18N.Undo) WAPAMA.I18N.Undo = {};

WAPAMA.I18N.Undo.group = "Undo";
WAPAMA.I18N.Undo.undo = "取り消し";
WAPAMA.I18N.Undo.undoDesc = "最後のアクションの取り消し";
WAPAMA.I18N.Undo.redo = "やり直し";
WAPAMA.I18N.Undo.redoDesc = "最後のアクションのやり直し";

if(!WAPAMA.I18N.Validator) WAPAMA.I18N.Validator = {};
WAPAMA.I18N.Validator.checking = "チェック中";

if(!WAPAMA.I18N.View) WAPAMA.I18N.View = {};

WAPAMA.I18N.View.group = "Zoom";
WAPAMA.I18N.View.zoomIn = "拡大";
WAPAMA.I18N.View.zoomInDesc = "モデルを拡大";
WAPAMA.I18N.View.zoomOut = "縮小";
WAPAMA.I18N.View.zoomOutDesc = "モデルの縮小";
WAPAMA.I18N.View.zoomStandard = "標準へズーム";
WAPAMA.I18N.View.zoomStandardDesc = "標準レベルにズーム";
WAPAMA.I18N.View.zoomFitToModel = "モデルへズーム";
WAPAMA.I18N.View.zoomFitToModelDesc = "モデルサイズにズーム";

if(!WAPAMA.I18N.XFormsSerialization) WAPAMA.I18N.XFormsSerialization = {};

WAPAMA.I18N.XFormsSerialization.group = "XForms Serialization";
WAPAMA.I18N.XFormsSerialization.exportXForms = "XForms のエキスポート";
WAPAMA.I18N.XFormsSerialization.exportXFormsDesc = "XForms+XHTML アークアップのエキスポート";
WAPAMA.I18N.XFormsSerialization.importXForms = "XForms のインポート";
WAPAMA.I18N.XFormsSerialization.importXFormsDesc = "XForms+XHTML マークアップのインポート";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupport = "XForms はサポートされていません";
WAPAMA.I18N.XFormsSerialization.noClientXFormsSupportDesc = "<h2>このブラウザーはXFormsをサポートしていません。<a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> を Firefoxにインポートしてください。</h2>";
WAPAMA.I18N.XFormsSerialization.ok = "OK";
WAPAMA.I18N.XFormsSerialization.selectFile = "インポートする XHTML (.xhtml) ファイルまたは XForms+XHTML のタイプを選択してください!";
WAPAMA.I18N.XFormsSerialization.selectCss = "css ファイルのURLを入力してください";
WAPAMA.I18N.XFormsSerialization.file = "ファイル";
WAPAMA.I18N.XFormsSerialization.impFailed = "ドキュメントのインポート要求が失敗しました。";
WAPAMA.I18N.XFormsSerialization.impTitle = "XForms+XHTML ドキュメントのインポート";
WAPAMA.I18N.XFormsSerialization.expTitle = "XForms+XHTML ドキュメントのエキスポート";
WAPAMA.I18N.XFormsSerialization.impButton = "インポート";
WAPAMA.I18N.XFormsSerialization.impProgress = "インポート中...";
WAPAMA.I18N.XFormsSerialization.close = "閉じる";


if(!WAPAMA.I18N.TreeGraphSupport) WAPAMA.I18N.TreeGraphSupport = {};

WAPAMA.I18N.TreeGraphSupport.syntaxCheckName = "シンタックスチェック";
WAPAMA.I18N.TreeGraphSupport.group = "Tree Graph Support";
WAPAMA.I18N.TreeGraphSupport.syntaxCheckDesc = "ツリーグラフ構造のシンタックスチェック";

if(!WAPAMA.I18N.QueryEvaluator) WAPAMA.I18N.QueryEvaluator = {};

WAPAMA.I18N.QueryEvaluator.name = "クエリ―評価";
WAPAMA.I18N.QueryEvaluator.group = "Verification";
WAPAMA.I18N.QueryEvaluator.desc = "クエリ―の評価";
WAPAMA.I18N.QueryEvaluator.noResult = "クエリ―結果がマッチしません。";
WAPAMA.I18N.QueryEvaluator.invalidResponse = "サーバーからの無効な回答です。";

// if(!WAPAMA.I18N.QueryResultHighlighter) WAPAMA.I18N.QueryResultHighlighter = {};
//
// WAPAMA.I18N.QueryResultHighlighter.name = "JA:Query Result Highlighter";

/** New Language Properties: 08.12.2008 */

WAPAMA.I18N.PropertyWindow.title = "プロパティ―";

if(!WAPAMA.I18N.ShapeRepository) WAPAMA.I18N.ShapeRepository = {};
WAPAMA.I18N.ShapeRepository.title = "シェープリポジトリ―";

WAPAMA.I18N.Save.dialogDesciption = "名前、説明、およびコメントを入力してください。";
WAPAMA.I18N.Save.dialogLabelTitle = "タイトル";
WAPAMA.I18N.Save.dialogLabelDesc = "説明";
WAPAMA.I18N.Save.dialogLabelType = "タイプ";
WAPAMA.I18N.Save.dialogLabelComment = "更新コメント";

WAPAMA.I18N.Validator.name = "BPMN 評価";
WAPAMA.I18N.Validator.description = "BPMN の評価";

WAPAMA.I18N.SSExtensionLoader.labelImport = "インポート";
WAPAMA.I18N.SSExtensionLoader.labelCancel = "キャンセル";

Ext.MessageBox.buttonText.yes = "はい";
Ext.MessageBox.buttonText.no = "いいえ";
Ext.MessageBox.buttonText.cancel = "キャンセル";
Ext.MessageBox.buttonText.ok = "OK";


/** New Language Properties: 28.01.2009 */
if(!WAPAMA.I18N.BPMN2XPDL) WAPAMA.I18N.BPMN2XPDL = {};
WAPAMA.I18N.BPMN2XPDL.group = "Export";
WAPAMA.I18N.BPMN2XPDL.xpdlExport = "XPDL へエキスポート";
WAPAMA.I18N.BPMN2XPDL.xpdlImport = "XPDL からインポート";
WAPAMA.I18N.BPMN2XPDL.importGroup = "インポート";
WAPAMA.I18N.BPMN2XPDL.selectFile = "インポートする XPDL (.xml) ファイルまたは XPDL のタイプを選択してください!";
WAPAMA.I18N.BPMN2XPDL.file = "ファイル";
WAPAMA.I18N.BPMN2XPDL.impXPDL = "XPDL のインポート";
WAPAMA.I18N.BPMN2XPDL.impBtn = "インポート";
WAPAMA.I18N.BPMN2XPDL.impProgress = "インポート中...";
WAPAMA.I18N.BPMN2XPDL.close = "閉じる";

/** Resource Perspective Additions: 24 March 2009 */
if(!WAPAMA.I18N.ResourcesSoDAdd) WAPAMA.I18N.ResourcesSoDAdd = {};

WAPAMA.I18N.ResourcesSoDAdd.name = "責任制約セパレータ―の定義";
WAPAMA.I18N.ResourcesSoDAdd.group = "Resource Perspective";
WAPAMA.I18N.ResourcesSoDAdd.desc = "選択したタスクの責任制約のセパレータ―の定義";

if(!WAPAMA.I18N.ResourcesSoDShow) WAPAMA.I18N.ResourcesSoDShow = {};

WAPAMA.I18N.ResourcesSoDShow.name = "責任制約のセパレータ―の表示";
WAPAMA.I18N.ResourcesSoDShow.group = "Resource Perspective";
WAPAMA.I18N.ResourcesSoDShow.desc = "選択したタスクの責任制約のセパレータ―の表示";

if(!WAPAMA.I18N.ResourcesBoDAdd) WAPAMA.I18N.ResourcesBoDAdd = {};

WAPAMA.I18N.ResourcesBoDAdd.name = "責任制約のバインディングの定義";
WAPAMA.I18N.ResourcesBoDAdd.group = "Resource Perspective";
WAPAMA.I18N.ResourcesBoDAdd.desc = "選択したタスクの責任制約のバインディングの定義";

if(!WAPAMA.I18N.ResourcesBoDShow) WAPAMA.I18N.ResourcesBoDShow = {};

WAPAMA.I18N.ResourcesBoDShow.name = "責任制約のバインディングの表示";
WAPAMA.I18N.ResourcesBoDShow.group = "Resource Perspective";
WAPAMA.I18N.ResourcesBoDShow.desc = "選択したタスクの責任制約のバインディングの表示";

if(!WAPAMA.I18N.ResourceAssignment) WAPAMA.I18N.ResourceAssignment = {};

WAPAMA.I18N.ResourceAssignment.name = "リソース割り当て";
WAPAMA.I18N.ResourceAssignment.group = "Resource Perspective";
WAPAMA.I18N.ResourceAssignment.desc = "選択したタスクにリソースを割り当て";

if(!WAPAMA.I18N.ClearSodBodHighlights) WAPAMA.I18N.ClearSodBodHighlights = {};

WAPAMA.I18N.ClearSodBodHighlights.name = "ハイライトとオーバーレイのクリアー";
WAPAMA.I18N.ClearSodBodHighlights.group = "Resource Perspective";
WAPAMA.I18N.ClearSodBodHighlights.desc = "責任ハイライト/オーバーレイのすべてのセパレータ―とバインディングの削除";


if(!WAPAMA.I18N.Perspective) WAPAMA.I18N.Perspective = {};
WAPAMA.I18N.Perspective.no = "パースペクティブなし"
WAPAMA.I18N.Perspective.noTip = "現在のパースペクティブのアンロード"


/** New Language Properties: 21.04.2009 */
WAPAMA.I18N.JSONSupport = {
    imp: {
        name: "JSON からインポート",
        desc: "JSON からモデルのインポート",
        group: "エキスポート",
        selectFile: "インポートする JSON (.json) ファイルまたは JSON のタイプを選択してください!",
        file: "ファイル",
        btnImp: "インポート",
        btnClose: "閉じる",
        progress: "インポート中 ...",
        syntaxError: "シンタックスエラー"
    },
    exp: {
        name: "JSON へエキスポート",
        desc: "現在のモデルを JSON へエキスポート",
        group: "エキスポート"
    }
};

WAPAMA.I18N.TBPMSupport = {
        imp: {
        name: "PNG/JPEG からインポート",
        desc: "TPBM 写真からモデルのインポート",
        group: "エキスポート",
        selectFile: "イメージ (.png/.jpeg) ファイルの選択!",
        file: "ファイル",
        btnImp: "インポート",
        btnClose: "閉じる",
        progress: "インポート中 ...",
        syntaxError: "シンタックスエラー",
        impFailed: "ドキュメントのインポートの要求に失敗しました。",
        confirm: "ハイライトされたシェープのインポートの確認!",
    }
};

/** New Language Properties: 08.05.2009 */
if(!WAPAMA.I18N.BPMN2XHTML) WAPAMA.I18N.BPMN2XHTML = {};
WAPAMA.I18N.BPMN2XHTML.group = "Export";
WAPAMA.I18N.BPMN2XHTML.XHTMLExport = "XHTML ドキュメントのエキスポート";

/** New Language Properties: 09.05.2009 */
if(!WAPAMA.I18N.JSONImport) WAPAMA.I18N.JSONImport = {};

WAPAMA.I18N.JSONImport.title = "JSON のインポート";
WAPAMA.I18N.JSONImport.wrongSS = "インポートされたファイル ({0}) のステンシルセットは、ロードされたステンシルセット ({1}) に一致しません。";
WAPAMA.I18N.JSONImport.invalidJSON = "インポートする JSON は無効です。";

/** New Language Properties: 11.05.2009 */
if(!WAPAMA.I18N.BPMN2DTRPXMI) WAPAMA.I18N.BPMN2DTRPXMI = {};
WAPAMA.I18N.BPMN2DTRPXMI.group = "Export";
WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExport = "XMI (Design Thinking)へエキスポート";
WAPAMA.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "現在のモデルを XMI (ステンシルセット拡張 'BPMN サブセット Design Thinking' が必要)へエキスポート";

/** New Language Properties: 14.05.2009 */
if(!WAPAMA.I18N.RDFExport) WAPAMA.I18N.RDFExport = {};
WAPAMA.I18N.RDFExport.group = "Export";
WAPAMA.I18N.RDFExport.rdfExport = "RDF へエキスポート";
WAPAMA.I18N.RDFExport.rdfExportDescription = "現在のモデルをResource Description Framework (RDF) で定義された XML シリアリゼーションへエキスポート";

/** New Language Properties: 15.05.2009*/
if(!WAPAMA.I18N.SyntaxChecker.BPMN) WAPAMA.I18N.SyntaxChecker.BPMN={};
WAPAMA.I18N.SyntaxChecker.BPMN_NO_SOURCE = "エッジはソースが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN_NO_TARGET = "エッジはターゲットが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN_DIFFERENT_PROCESS = "ソースとターゲットノードは同じプロセスに含まれなければなりません。";
WAPAMA.I18N.SyntaxChecker.BPMN_SAME_PROCESS = "ソースとターゲットノードは異なるプールに含まれなければなりません。";
WAPAMA.I18N.SyntaxChecker.BPMN_FLOWOBJECT_NOT_CONTAINED_IN_PROCESS = "フローオブジェクトはプロセスに含まれなければなりません。";
WAPAMA.I18N.SyntaxChecker.BPMN_ENDEVENT_WITHOUT_INCOMING_CONTROL_FLOW = "終了イベントは入力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN_STARTEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "開始イベントは出力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN_STARTEVENT_WITH_INCOMING_CONTROL_FLOW = "開始イベントは出力シーケンスフローが必要ありません。";
WAPAMA.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITH_INCOMING_CONTROL_FLOW = "添付中間イベントは入力シーケンスフローは必要ありません。";
WAPAMA.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "添付中間イベントは１つの出力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN_ENDEVENT_WITH_OUTGOING_CONTROL_FLOW = "終了イベントは出力シーケンスフローは必要ありません。";
WAPAMA.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "イベントベースゲートウェイはゲートウェイまたはサブプロセスの後に続くことはできません。";
WAPAMA.I18N.SyntaxChecker.BPMN_NODE_NOT_ALLOWED = "ノード対応は許されません。";

if(!WAPAMA.I18N.SyntaxChecker.IBPMN) WAPAMA.I18N.SyntaxChecker.IBPMN={};
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_ROLE_SET = "相互作用は送信者と受信者の役割セットが必要です。";
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_INCOMING_SEQFLOW = "このノードは入力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.IBPMN_NO_OUTGOING_SEQFLOW = "このノードは出力シーケンスフローが必要です。";

if(!WAPAMA.I18N.SyntaxChecker.InteractionNet) WAPAMA.I18N.SyntaxChecker.InteractionNet={};
WAPAMA.I18N.SyntaxChecker.InteractionNet_SENDER_NOT_SET = "送信者未設定";
WAPAMA.I18N.SyntaxChecker.InteractionNet_RECEIVER_NOT_SET = "受信者未設定";
WAPAMA.I18N.SyntaxChecker.InteractionNet_MESSAGETYPE_NOT_SET = "メッセージタイプ未設定";
WAPAMA.I18N.SyntaxChecker.InteractionNet_ROLE_NOT_SET = "役割未設定";

if(!WAPAMA.I18N.SyntaxChecker.EPC) WAPAMA.I18N.SyntaxChecker.EPC={};
WAPAMA.I18N.SyntaxChecker.EPC_NO_SOURCE = "エッジはソースが必要です。";
WAPAMA.I18N.SyntaxChecker.EPC_NO_TARGET = "エッジはターゲットが必要です。";
WAPAMA.I18N.SyntaxChecker.EPC_NOT_CONNECTED = "ノードはエッジに接続されなければなりません。";
WAPAMA.I18N.SyntaxChecker.EPC_NOT_CONNECTED_2 = "ノードは複数のエッジに接続されなければなりません。";
WAPAMA.I18N.SyntaxChecker.EPC_TOO_MANY_EDGES = "ノードに接続されたエッジが多すぎます。";
WAPAMA.I18N.SyntaxChecker.EPC_NO_CORRECT_CONNECTOR = "ノードは正しいコネクターではありません。";
WAPAMA.I18N.SyntaxChecker.EPC_MANY_STARTS = "１つの開始イベントのみが必要です。";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_OR = "OR/XOR 分割後ファンクションは必要ありません。";
WAPAMA.I18N.SyntaxChecker.EPC_PI_AFTER_OR = "OR/XOR 分割後プロセスインターフェースは必要ありません。";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_FUNCTION = "ファンクションの後ファンクションは必要ありません。";
WAPAMA.I18N.SyntaxChecker.EPC_EVENT_AFTER_EVENT = "イベントの後イベントは必要ありません。";
WAPAMA.I18N.SyntaxChecker.EPC_PI_AFTER_FUNCTION = "ファンクションの後プロセスインターフェースは必要ありません。";
WAPAMA.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_PI = "プロセスインスタンスの後ファンクションは必要ありません。";

if(!WAPAMA.I18N.SyntaxChecker.PetriNet) WAPAMA.I18N.SyntaxChecker.PetriNet={};
WAPAMA.I18N.SyntaxChecker.PetriNet_NOT_BIPARTITE = "グラフは二部ではありません";
WAPAMA.I18N.SyntaxChecker.PetriNet_NO_LABEL = "ラベルはラベル付きの遷移に設定されていません";
WAPAMA.I18N.SyntaxChecker.PetriNet_NO_ID = "IDのないノードがあります";
WAPAMA.I18N.SyntaxChecker.PetriNet_SAME_SOURCE_AND_TARGET = "2つのフロー関連は同じソースとターゲットを含みます";
WAPAMA.I18N.SyntaxChecker.PetriNet_NODE_NOT_SET = "ノードはフロー関連に設定されていません";

/** New Language Properties: 02.06.2009*/
WAPAMA.I18N.Edge = "エッジ";
WAPAMA.I18N.Node = "ノード";

/** New Language Properties: 03.06.2009*/
WAPAMA.I18N.SyntaxChecker.notice = "エラーメッセージを見るには赤い十字アイコンの上にマウスを移動させてください。";

WAPAMA.I18N.Validator.result = "検証結果";
WAPAMA.I18N.Validator.noErrors = "検証エラーは見つかりませんでした。";
WAPAMA.I18N.Validator.bpmnDeadlockTitle = "停止";
WAPAMA.I18N.Validator.bpmnDeadlock = "このノードは停止しました。すべての入力ブランチが有効化できない状況です。";
WAPAMA.I18N.Validator.bpmnUnsafeTitle = "同期不足";
WAPAMA.I18N.Validator.bpmnUnsafe = "このモデルは同期が十分ではありません。マークされたエレメントは複数の入力ブランチから有効化されています。";
WAPAMA.I18N.Validator.bpmnLeadsToNoEndTitle = "検証結果";
WAPAMA.I18N.Validator.bpmnLeadsToNoEnd = "プロセスは最終状態へ到達できません。";

WAPAMA.I18N.Validator.syntaxErrorsTitle = "シンタックスエラー";
WAPAMA.I18N.Validator.syntaxErrorsMsg = "シンタックスエラーのため、プロセスは検証できません。";

WAPAMA.I18N.Validator.error = "検証失敗";
WAPAMA.I18N.Validator.errorDesc = 'プロセスの検証に失敗しました。"Feedbackの送信" 機能からプロセスモデルを送信いたたければ、問題を切り分けることができるかもしれません。';

WAPAMA.I18N.Validator.epcIsSound = "<p><b>The EPC はサウンドです。問題はありません!</b></p>";
WAPAMA.I18N.Validator.epcNotSound = "JA:<p><b>EPC はサウンドでは<i>ありません</i>!</b></p>";

/** New Language Properties: 05.06.2009*/
if(!WAPAMA.I18N.RESIZE) WAPAMA.I18N.RESIZE = {};
WAPAMA.I18N.RESIZE.tipGrow = "キャンバスサイズの拡張:";
WAPAMA.I18N.RESIZE.tipShrink = "キャンバスサイズの縮小:";
WAPAMA.I18N.RESIZE.N = "上";
WAPAMA.I18N.RESIZE.W = "左";
WAPAMA.I18N.RESIZE.S = "下";
WAPAMA.I18N.RESIZE.E = "右";
/** New Language Properties: 14.08.2009*/
if(!WAPAMA.I18N.PluginLoad) WAPAMA.I18N.PluginLoad = {};
WAPAMA.I18N.PluginLoad.AddPluginButtonName = "プラグインの追加";
WAPAMA.I18N.PluginLoad.AddPluginButtonDesc = "動的にプラグインの追加";
WAPAMA.I18N.PluginLoad.loadErrorTitle= "ローディングエラー";
WAPAMA.I18N.PluginLoad.loadErrorDesc = "プラグインをロードできません。 \n エラー:\n";
WAPAMA.I18N.PluginLoad.WindowTitle = "追加プラグインの追加";

WAPAMA.I18N.PluginLoad.NOTUSEINSTENCILSET = "このステンシルセットは許可されていません!";
WAPAMA.I18N.PluginLoad.REQUIRESTENCILSET = "別のステンシルセットが必要です!";
WAPAMA.I18N.PluginLoad.NOTFOUND = "プラグイン名が見つかりません!"
WAPAMA.I18N.PluginLoad.YETACTIVATED = "プラグインが有効化されていません!"

/** New Language Properties: 15.07.2009*/
if(!WAPAMA.I18N.Layouting) WAPAMA.I18N.Layouting ={};
WAPAMA.I18N.Layouting.doing = "レイアウト中...";

/** New Language Properties: 18.08.2009*/
WAPAMA.I18N.SyntaxChecker.MULT_ERRORS = "複数のエラー";

/** New Language Properties: 08.09.2009*/
if(!WAPAMA.I18N.PropertyWindow) WAPAMA.I18N.PropertyWindow = {};
WAPAMA.I18N.PropertyWindow.oftenUsed = "複数利用済み";
WAPAMA.I18N.PropertyWindow.moreProps = "多くのプロパティ―";

/** New Language Properties: 17.09.2009*/
if(!WAPAMA.I18N.Bpmn2_0Serialization) WAPAMA.I18N.Bpmn2_0Serialization = {};
WAPAMA.I18N.Bpmn2_0Serialization.show = "BPMN 2.0 DI XML の表示";
WAPAMA.I18N.Bpmn2_0Serialization.showDesc = "表示";
WAPAMA.I18N.Bpmn2_0Serialization.download = "BPMN 2.0 DI XML のダウンロード";
WAPAMA.I18N.Bpmn2_0Serialization.downloadDesc = "現在の BPMN 2.0 モデルのBPMN 2.0 DI XMLのダウンロード";
WAPAMA.I18N.Bpmn2_0Serialization.serialFailed = "BPMN 2.0 DI XML シリアリぜーションの生成中にエラーが発生しました。";
WAPAMA.I18N.Bpmn2_0Serialization.group = "BPMN 2.0";

/** New Language Properties 01.10.2009 */
if(!WAPAMA.I18N.SyntaxChecker.BPMN2) WAPAMA.I18N.SyntaxChecker.BPMN2 = {};

WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "データ入力は入力データ関連の必要はありません。";
WAPAMA.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "データ出力は出力データ関連の必要はありません。.";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "イベントベースゲートウェイのターゲットは１つの入力シーケンスフローのみが必要です。";

/** New Language Properties 02.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "イベントベースゲートウェアいは2つ以上の出力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "設定にメッセージ中間イベントを利用している場合、受信タスクを利用することはできません。";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "次の中間イベントトリガーのみ有効です: メッセージ、シグナル、タイマー、条件とマルチ。";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "イベントゲートウェイの出力シーケンスフローは条件式を利用することができません。";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "ゲートウェイはプロセスをインスタンス化する条件を満たしません。開始イベントまたはゲートウェイのインスタンス化属性を利用してください。";

/** New Language Properties 05.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "ゲートウェイは複数の入力および出力シーケンスフローが両方必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "ゲートウェイは複数の入力シーケンスフローが必要ですが、出力シーケンスフローは必要ありません。";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "ゲートウェイは複数の入力シーケンスフローは必要ありませんが、出力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "ゲートウェイは少なくとも１つの出力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "イベントゲートウェイの設定で利用される受信タスクは添付中間イベントを利用することはできません。";
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "イベントサブプロセスは入力および出力シーケンスフローを利用することはできません。";

/** New Language Properties 13.10.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "少なくとも一方のメッセージフローが接続される必要があります。";

/** New Language Properties 19.10.2009 */
WAPAMA.I18N.Bpmn2_0Serialization['import'] = "BPMN 2.0 DI XML からのインポート";
WAPAMA.I18N.Bpmn2_0Serialization.importDesc = "ファイルまたはXML文字列からの BPMN 2.0 モデルのインポート";
WAPAMA.I18N.Bpmn2_0Serialization.selectFile = "インポートする BPMN 2.0 DI XML の (*.bpmn) またはタイプを選択してください!";
WAPAMA.I18N.Bpmn2_0Serialization.file = "ファイル:";
WAPAMA.I18N.Bpmn2_0Serialization.name = "BPMN 2.0 DI XML からのインポート";
WAPAMA.I18N.Bpmn2_0Serialization.btnImp = "インポート";
WAPAMA.I18N.Bpmn2_0Serialization.progress = "BPMN 2.0 DI XML インポート中...";
WAPAMA.I18N.Bpmn2_0Serialization.btnClose = "閉じる";
WAPAMA.I18N.Bpmn2_0Serialization.error = "BPMN 2.0 DI XML のインポート中にエラーが発生しました";

/** New Language Properties 24.11.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "コレオグラフィーアクティビティーは１つの初期化メッセージを利用します。";
WAPAMA.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "メッセージフローは利用できません。";

/** New Language Properties 27.11.2009 */
WAPAMA.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "インスタンス化していないイベントベースゲートウェイは少なくとも１つの入力シーケンスフローが必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "コレオグラフィーアクティビティーは、１つの初期化実行者 (白)が必要です。";
WAPAMA.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "コレオグラフィーアクティビティーは、1つ以上の初期化実行者 (白)が必要です。"

WAPAMA.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "コミュニケーションは少なくとも２つの実行者に接続されなければなりません。";
WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "メッセージフローのソースは実行者でなければなりません。";
WAPAMA.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "メッセージフローのターゲットは実行者でなければなりません。";
WAPAMA.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "カンバセーションリンクは、コミュニケーションまたはサブカンバセーションノードと実行者が接続されていなければなりません。";

/** New Language Properties 30.12.2009 */
WAPAMA.I18N.Bpmn2_0Serialization.xpdlShow = "XPDL 2.2 の表示";
WAPAMA.I18N.Bpmn2_0Serialization.xpdlShowDesc = "BPMN 2.0 XML (by XSLT) に基づく XPDL 2.2 の表示";
WAPAMA.I18N.Bpmn2_0Serialization.xpdlDownload = "XPDL 2.2 のダウンロード";
WAPAMA.I18N.Bpmn2_0Serialization.xpdlDownloadDesc = "BPMN 2.0 XML (by XSLT) に基づく XPDL 2.2 のダウンロード";


if(!WAPAMA.I18N.cpntoolsSupport) WAPAMA.I18N.cpntoolsSupport = {};

WAPAMA.I18N.cpntoolsSupport.serverConnectionFailed = "サーバーへの接続に失敗しました。";
WAPAMA.I18N.cpntoolsSupport.importTask = "インポートするためには、CPN ファイル (.cpn) または CPN XML のタイプを選択してください!";
WAPAMA.I18N.cpntoolsSupport.File = "ファイル:";
WAPAMA.I18N.cpntoolsSupport.cpn = "CPN";
WAPAMA.I18N.cpntoolsSupport.title = "CPN Wapama";
WAPAMA.I18N.cpntoolsSupport.importLable = "インポート";
WAPAMA.I18N.cpntoolsSupport.close = "閉じる";
WAPAMA.I18N.cpntoolsSupport.wrongCPNFile = "正しい CPN ファイルが選択されていません。";
WAPAMA.I18N.cpntoolsSupport.noPageSelection = "ページが選択されていません。";
WAPAMA.I18N.cpntoolsSupport.group = "Export";
WAPAMA.I18N.cpntoolsSupport.importProgress = "インポート中 ...";
WAPAMA.I18N.cpntoolsSupport.exportProgress = "エキスポート中 ...";
WAPAMA.I18N.cpntoolsSupport.exportDescription = "CPN ツールへエキスポート";
WAPAMA.I18N.cpntoolsSupport.importDescription = "CPN ツールからインポート";

if(!WAPAMA.I18N.BPMN2YAWLMapper) WAPAMA.I18N.BPMN2YAWLMapper = {};

WAPAMA.I18N.BPMN2YAWLMapper.group = "Export";
WAPAMA.I18N.BPMN2YAWLMapper.name = 'YAWL エキスポート';
WAPAMA.I18N.BPMN2YAWLMapper.desc = 'このダイアグラムを YAWL へマッピングし、エキスポートしてください。"YAWL へマッピングするための BPMN サブセット" がロードされたかどうか確認してください。';
