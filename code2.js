gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.GDSkyBackgroundObjects1= [];
gdjs.SettingsCode.GDSkyBackgroundObjects2= [];
gdjs.SettingsCode.GDCheif_9595Mstear_9595TextObjects1= [];
gdjs.SettingsCode.GDCheif_9595Mstear_9595TextObjects2= [];
gdjs.SettingsCode.GDLil_9595EnergeticObjects1= [];
gdjs.SettingsCode.GDLil_9595EnergeticObjects2= [];
gdjs.SettingsCode.GDCheif_9595MstaerObjects1= [];
gdjs.SettingsCode.GDCheif_9595MstaerObjects2= [];
gdjs.SettingsCode.GDLil_9595Energetic_9595textObjects1= [];
gdjs.SettingsCode.GDLil_9595Energetic_9595textObjects2= [];
gdjs.SettingsCode.GDSelect_9595a_9595characterObjects1= [];
gdjs.SettingsCode.GDSelect_9595a_9595characterObjects2= [];
gdjs.SettingsCode.GDBackObjects1= [];
gdjs.SettingsCode.GDBackObjects2= [];


gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDLil_95959595EnergeticObjects1Objects = Hashtable.newFrom({"Lil_Energetic": gdjs.SettingsCode.GDLil_9595EnergeticObjects1});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDCheif_95959595MstaerObjects1Objects = Hashtable.newFrom({"Cheif_Mstaer": gdjs.SettingsCode.GDCheif_9595MstaerObjects1});
gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.SettingsCode.GDBackObjects1});
gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lil_Energetic"), gdjs.SettingsCode.GDLil_9595EnergeticObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDLil_95959595EnergeticObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cheif_Mstaer"), gdjs.SettingsCode.GDCheif_9595MstaerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDCheif_95959595MstaerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SettingsCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_9546SettingsCode_9546GDBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDSkyBackgroundObjects1.length = 0;
gdjs.SettingsCode.GDSkyBackgroundObjects2.length = 0;
gdjs.SettingsCode.GDCheif_9595Mstear_9595TextObjects1.length = 0;
gdjs.SettingsCode.GDCheif_9595Mstear_9595TextObjects2.length = 0;
gdjs.SettingsCode.GDLil_9595EnergeticObjects1.length = 0;
gdjs.SettingsCode.GDLil_9595EnergeticObjects2.length = 0;
gdjs.SettingsCode.GDCheif_9595MstaerObjects1.length = 0;
gdjs.SettingsCode.GDCheif_9595MstaerObjects2.length = 0;
gdjs.SettingsCode.GDLil_9595Energetic_9595textObjects1.length = 0;
gdjs.SettingsCode.GDLil_9595Energetic_9595textObjects2.length = 0;
gdjs.SettingsCode.GDSelect_9595a_9595characterObjects1.length = 0;
gdjs.SettingsCode.GDSelect_9595a_9595characterObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
gdjs.SettingsCode.GDSkyBackgroundObjects1.length = 0;
gdjs.SettingsCode.GDSkyBackgroundObjects2.length = 0;
gdjs.SettingsCode.GDCheif_9595Mstear_9595TextObjects1.length = 0;
gdjs.SettingsCode.GDCheif_9595Mstear_9595TextObjects2.length = 0;
gdjs.SettingsCode.GDLil_9595EnergeticObjects1.length = 0;
gdjs.SettingsCode.GDLil_9595EnergeticObjects2.length = 0;
gdjs.SettingsCode.GDCheif_9595MstaerObjects1.length = 0;
gdjs.SettingsCode.GDCheif_9595MstaerObjects2.length = 0;
gdjs.SettingsCode.GDLil_9595Energetic_9595textObjects1.length = 0;
gdjs.SettingsCode.GDLil_9595Energetic_9595textObjects2.length = 0;
gdjs.SettingsCode.GDSelect_9595a_9595characterObjects1.length = 0;
gdjs.SettingsCode.GDSelect_9595a_9595characterObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
