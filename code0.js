gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.GDPlayObjects1= [];
gdjs.TitleCode.GDPlayObjects2= [];
gdjs.TitleCode.GDSettingsObjects1= [];
gdjs.TitleCode.GDSettingsObjects2= [];
gdjs.TitleCode.GDSkyBackgroundObjects1= [];
gdjs.TitleCode.GDSkyBackgroundObjects2= [];
gdjs.TitleCode.GDGreenFloorObjects1= [];
gdjs.TitleCode.GDGreenFloorObjects2= [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDNewSprite2Objects1= [];
gdjs.TitleCode.GDNewSprite2Objects2= [];


gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.TitleCode.GDPlayObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDSettingsObjects1Objects = Hashtable.newFrom({"Settings": gdjs.TitleCode.GDSettingsObjects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.TitleCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.TitleCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDSettingsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDPlayObjects1.length = 0;
gdjs.TitleCode.GDPlayObjects2.length = 0;
gdjs.TitleCode.GDSettingsObjects1.length = 0;
gdjs.TitleCode.GDSettingsObjects2.length = 0;
gdjs.TitleCode.GDSkyBackgroundObjects1.length = 0;
gdjs.TitleCode.GDSkyBackgroundObjects2.length = 0;
gdjs.TitleCode.GDGreenFloorObjects1.length = 0;
gdjs.TitleCode.GDGreenFloorObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSprite2Objects1.length = 0;
gdjs.TitleCode.GDNewSprite2Objects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDPlayObjects1.length = 0;
gdjs.TitleCode.GDPlayObjects2.length = 0;
gdjs.TitleCode.GDSettingsObjects1.length = 0;
gdjs.TitleCode.GDSettingsObjects2.length = 0;
gdjs.TitleCode.GDSkyBackgroundObjects1.length = 0;
gdjs.TitleCode.GDSkyBackgroundObjects2.length = 0;
gdjs.TitleCode.GDGreenFloorObjects1.length = 0;
gdjs.TitleCode.GDGreenFloorObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSprite2Objects1.length = 0;
gdjs.TitleCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
