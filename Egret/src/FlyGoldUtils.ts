module xiyouji {
    export class FlyGoldUtils {
        public constructor() {

        }

        public static FlyLowGolds(goldNum: number, goldIconNum: number, dstpos: any, frompos?: any, cb?: Function, cbObj?: any, params?: any): void {
            // Utils.scrollNumber(imgLabel, 0, goldNum, 1000);
            // let timer = game.Timer.setInterval(()=>{
            for (let i = 0; i < goldIconNum; i++) {
                let num = Math.randomInteger(1, 3);
                let source: string = "gold_4";
                // if (num == 1) {
                //     source = "gold_1";
                // } else if (num == 2) {
                //     source = "gold_2";
                // } else if (num == 3) {
                //     source = "gold_3";
                // }
                let rotateEffect = uniLib.DisplayUtils.createMovieClicp(source);
                rotateEffect.x = uniLib.Global.screenWidth / 2;
                rotateEffect.y = uniLib.Global.screenHeight / 2 - 100;
                rotateEffect.frameRate = 12;
                rotateEffect.rotation = Math.randomInteger(0,360);
                rotateEffect.scaleX = rotateEffect.scaleY = 0.8;
                // rotateEffect.alpha = 0.5;
                GX.GameLayerManager.sceneLayer.addChild(rotateEffect);
                rotateEffect.play(-1);
                let targetX0 = uniLib.Global.screenWidth / 2 + Math.random() * 150 - 75;
                let targetY0 = uniLib.Global.screenHeight / 2 - 200;

                let targetX = uniLib.Global.screenWidth / 2 + Math.random() * 400 - 200;
                let targetY = uniLib.Global.screenHeight / 2 + 150;
                let targetX2;
                if (targetX < uniLib.Global.screenWidth / 2) {
                    targetX2 = uniLib.Global.screenWidth / 2 - 250;
                } else {
                    targetX2 = uniLib.Global.screenWidth / 2 + 250;
                }
                let dis = Math.sqrt((rotateEffect.x - targetX) * (rotateEffect.x - targetX) + (rotateEffect.y - targetY) * (rotateEffect.y - targetY));
                let dis2 = Math.sqrt((targetX2 - targetX) * (targetX2 - targetX));
                egret.Tween.get(rotateEffect).to({ x: targetX0, y: targetY0 }, Math.randomFloat(100, 500))
                    .to({ x: targetX, y: targetY }, dis * 1 + Math.randomFloat(10, 200))
                    .to({ x: targetX2 ,rotation:7200 }, dis2 * 1)
                    .to({ x: dstpos.x, y: dstpos.y, scaleX: 0.5, scaleY: 0.5 }, 200)
                    .call(() => {
                        if (rotateEffect && rotateEffect.parent) {
                            rotateEffect.stop();
                            rotateEffect.parent.removeChild(rotateEffect);
                        }
                        // goldIconNum--;
                        // if (goldIconNum <= 0) {
                            if (cb) {
                                cb();
                                cb = null;
                            }
                        // }
                    });
            }
            let group: eui.Group = new eui.Group();
            GX.GameLayerManager.sceneLayer.addChild(group);

            let imgLabel0 = new eui.BitmapLabel();
            imgLabel0.font = "bfsg_freeResult_fnt";
            imgLabel0.text = "$";
            group.addChild(imgLabel0);

            let imgLabel = new eui.BitmapLabel();
            imgLabel.font = "bfsg_freeResult_fnt";
            imgLabel.x = 44;
            imgLabel.letterSpacing = -10;
            imgLabel.text = FlyGoldUtils.format(goldNum) + "";
            group.addChild(imgLabel);
            labalib.Utils.scrollNumber(imgLabel, 0, goldNum, 900);

            // imgLabel.x = uniLib.Global.screenWidth/2 - imgLabel.width/2;
            // imgLabel.y = uniLib.Global.screenHeight/2 - imgLabel.height/2+206;

            group.y = uniLib.Global.screenHeight / 2 - group.height / 2 + 206 - 64;
            group.x = uniLib.Global.screenWidth / 2 - group.measuredWidth / 2;
            group.alpha = 0;

            egret.Tween.get(group, {
                onChange: () => {
                    group.x = uniLib.Global.screenWidth / 2 - group.measuredWidth / 2;
                }
            }).to({ alpha: 1 }, 300)
                .wait(2000, true)
                .to({ alpha: 0 }, 300).call(() => {
                    if (group && group.parent)
                        group.parent.removeChild(group);
                });
            //     goldIconNum--;
            //     if(goldIconNum <=0){
            //         game.Timer.clearInterval(timer);
            //     }
            // },null,200);
        }

        public static FlyLowGolds2(goldNum: number, goldIconNum: number, dstpos: any, frompos?: any, cb?: Function, cbObj?: any, params?: any): void {
            let group: eui.Group = new eui.Group();
            group.touchEnabled = false;
            group.touchChildren = false;
            GX.GameLayerManager.sceneLayer.addChild(group);

            let imgLabel0 = new eui.BitmapLabel();
            imgLabel0.font = "bfsg_freeResult_fnt";
            imgLabel0.text = "$";
            imgLabel0.scaleX = imgLabel0.scaleY = 1.5;
            group.addChild(imgLabel0);

            let imgLabel = new eui.BitmapLabel();
            imgLabel.font = "bfsg_freeResult_fnt";
            imgLabel.x = 55;
            imgLabel.letterSpacing = -10;
            imgLabel.text = FlyGoldUtils.format(goldNum) + "";
            imgLabel.scaleX = imgLabel.scaleY = 1.5;
            group.addChild(imgLabel);
            labalib.Utils.scrollNumber(imgLabel, 0, goldNum, 1000,()=>{
                if (cb) {
                    cb();
                    cb = null;
                }
            },{ soundType: 2, soundPath: ShzSound.GoldEffectSound });

            // imgLabel.x = uniLib.Global.screenWidth/2 - imgLabel.width/2;
            // imgLabel.y = uniLib.Global.screenHeight/2 - imgLabel.height/2+206;

            group.y = dstpos.y - group.height / 2;//uniLib.Global.screenHeight / 2 - group.height / 2 + 206 - 64;
            group.x = dstpos.x - group.measuredWidth / 2;//uniLib.Global.screenWidth / 2 - group.measuredWidth / 2;
            group.alpha = 0;

            egret.Tween.get(group, {
                onChange: () => {
                    group.x = uniLib.Global.screenWidth / 2 - group.measuredWidth / 2;
                }
            }).to({ alpha: 1 }, 300)
                .wait(2000, true)
                .to({ alpha: 0 }, 300).call(() => {
                    if (group && group.parent)
                        group.parent.removeChild(group);
                });
        }

        public static format(num: number): String {
            var str: String = num.toString();
            var ary: Array<any> = str.split("");
            var leng = ary.length;
            var index = 1;
            for (var i = leng - 1; i > 0; i-- , index++) {
                if ((index / 3) == 1) {
                    index = 0;
                    ary[i] = "," + ary[i];
                }
            }
            var str2: String = ary.join("");
            return str2;
        }

    }
}