gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDBrick3Objects1_1final = [];

gdjs.GameCode.GDGreenFloorObjects1_1final = [];

gdjs.GameCode.GDNewSpriteObjects1_1final = [];

gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDGreenFloorObjects1= [];
gdjs.GameCode.GDGreenFloorObjects2= [];
gdjs.GameCode.GDSkyBackgroundObjects1= [];
gdjs.GameCode.GDSkyBackgroundObjects2= [];
gdjs.GameCode.GDBrick3Objects1= [];
gdjs.GameCode.GDBrick3Objects2= [];
gdjs.GameCode.GDPlay_9595againObjects1= [];
gdjs.GameCode.GDPlay_9595againObjects2= [];
gdjs.GameCode.GDMain_9595MenuObjects1= [];
gdjs.GameCode.GDMain_9595MenuObjects2= [];
gdjs.GameCode.GDrObjects1= [];
gdjs.GameCode.GDrObjects2= [];
gdjs.GameCode.GDPress_9595space_9595to_9595jumpObjects1= [];
gdjs.GameCode.GDPress_9595space_9595to_9595jumpObjects2= [];
gdjs.GameCode.GDScore1Objects1= [];
gdjs.GameCode.GDScore1Objects2= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.GameCode.GDNewSpriteObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGreenFloorObjects2Objects = Hashtable.newFrom({"GreenFloor": gdjs.GameCode.GDGreenFloorObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.GameCode.GDNewSpriteObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBrick3Objects2Objects = Hashtable.newFrom({"Brick3": gdjs.GameCode.GDBrick3Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMain_95959595MenuObjects1Objects = Hashtable.newFrom({"Main_Menu": gdjs.GameCode.GDMain_9595MenuObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlay_95959595againObjects1Objects = Hashtable.newFrom({"Play_again": gdjs.GameCode.GDPlay_9595againObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBrick3Objects1Objects = Hashtable.newFrom({"Brick3": gdjs.GameCode.GDBrick3Objects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "NewWall", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Obstacle", gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + gdjs.randomInRange(-(7) * 32, 7 * 32), 0);
}}

}


{

gdjs.GameCode.GDBrick3Objects1.length = 0;

gdjs.GameCode.GDGreenFloorObjects1.length = 0;

gdjs.GameCode.GDNewSpriteObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDBrick3Objects1_1final.length = 0;
gdjs.GameCode.GDGreenFloorObjects1_1final.length = 0;
gdjs.GameCode.GDNewSpriteObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenFloor"), gdjs.GameCode.GDGreenFloorObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewSpriteObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGreenFloorObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDGreenFloorObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDGreenFloorObjects1_1final.indexOf(gdjs.GameCode.GDGreenFloorObjects2[j]) === -1 )
            gdjs.GameCode.GDGreenFloorObjects1_1final.push(gdjs.GameCode.GDGreenFloorObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNewSpriteObjects1_1final.indexOf(gdjs.GameCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.GameCode.GDNewSpriteObjects1_1final.push(gdjs.GameCode.GDNewSpriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Brick3"), gdjs.GameCode.GDBrick3Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewSpriteObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBrick3Objects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBrick3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBrick3Objects1_1final.indexOf(gdjs.GameCode.GDBrick3Objects2[j]) === -1 )
            gdjs.GameCode.GDBrick3Objects1_1final.push(gdjs.GameCode.GDBrick3Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNewSpriteObjects1_1final.indexOf(gdjs.GameCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.GameCode.GDNewSpriteObjects1_1final.push(gdjs.GameCode.GDNewSpriteObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = runtimeScene.getOnceTriggers().triggerOnce(10826140);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBrick3Objects1_1final, gdjs.GameCode.GDBrick3Objects1);
gdjs.copyArray(gdjs.GameCode.GDGreenFloorObjects1_1final, gdjs.GameCode.GDGreenFloorObjects1);
gdjs.copyArray(gdjs.GameCode.GDNewSpriteObjects1_1final, gdjs.GameCode.GDNewSpriteObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].rotateTowardAngle(-(90), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Play Again");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10829156);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Play Again");
}{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "NewWall");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.GameCode.GDMain_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMain_95959595MenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_again"), gdjs.GameCode.GDPlay_9595againObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlay_95959595againObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ahh");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10833420);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].activateBehavior("PlatformerObject", true);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "NewWall");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "ahh");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick3"), gdjs.GameCode.GDBrick3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBrick3Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBrick3Objects1[i].getX() < (( gdjs.GameCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDNewSpriteObjects1[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBrick3Objects1[k] = gdjs.GameCode.GDBrick3Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBrick3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score1"), gdjs.GameCode.GDScore1Objects1);
{for(var i = 0, len = gdjs.GameCode.GDScore1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDScore1Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBrick3Objects1Objects) / 4));
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDGreenFloorObjects1.length = 0;
gdjs.GameCode.GDGreenFloorObjects2.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects1.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects2.length = 0;
gdjs.GameCode.GDBrick3Objects1.length = 0;
gdjs.GameCode.GDBrick3Objects2.length = 0;
gdjs.GameCode.GDPlay_9595againObjects1.length = 0;
gdjs.GameCode.GDPlay_9595againObjects2.length = 0;
gdjs.GameCode.GDMain_9595MenuObjects1.length = 0;
gdjs.GameCode.GDMain_9595MenuObjects2.length = 0;
gdjs.GameCode.GDrObjects1.length = 0;
gdjs.GameCode.GDrObjects2.length = 0;
gdjs.GameCode.GDPress_9595space_9595to_9595jumpObjects1.length = 0;
gdjs.GameCode.GDPress_9595space_9595to_9595jumpObjects2.length = 0;
gdjs.GameCode.GDScore1Objects1.length = 0;
gdjs.GameCode.GDScore1Objects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDGreenFloorObjects1.length = 0;
gdjs.GameCode.GDGreenFloorObjects2.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects1.length = 0;
gdjs.GameCode.GDSkyBackgroundObjects2.length = 0;
gdjs.GameCode.GDBrick3Objects1.length = 0;
gdjs.GameCode.GDBrick3Objects2.length = 0;
gdjs.GameCode.GDPlay_9595againObjects1.length = 0;
gdjs.GameCode.GDPlay_9595againObjects2.length = 0;
gdjs.GameCode.GDMain_9595MenuObjects1.length = 0;
gdjs.GameCode.GDMain_9595MenuObjects2.length = 0;
gdjs.GameCode.GDrObjects1.length = 0;
gdjs.GameCode.GDrObjects2.length = 0;
gdjs.GameCode.GDPress_9595space_9595to_9595jumpObjects1.length = 0;
gdjs.GameCode.GDPress_9595space_9595to_9595jumpObjects2.length = 0;
gdjs.GameCode.GDScore1Objects1.length = 0;
gdjs.GameCode.GDScore1Objects2.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
