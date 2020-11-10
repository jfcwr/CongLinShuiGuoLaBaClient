module xiyouji {
    /**
     * 特效生成器
     */
    export class EffectCreate {
        private static m_Instance: EffectCreate;
        public static get Instance() {
            if (this.m_Instance == null) {
                this.m_Instance = new EffectCreate();
            }
            return this.m_Instance;
        }

        constructor() {
        }

        public destroy() {
            EffectCreate.m_Instance = null;
        }

        // /**
        //  * 开始笑玛丽游戏;
        //  */
        // public ShowMariStart(cb: Function, cbObj) {
        //     // MariStart.Instance.Show(cb, cbObj);
        //     LabaGame.Instance.popCenterTips(3, 0, cb, cbObj)
        //     SoundHand.Instance.PlaySoundOnce(ShzSound.MariStartSound);
        // }

        // /**
        //  * 显示中奖结果
        //  */
        // public ShowObtainGold(gold: number, cb?: Function, cbObj?: any) {
        //     //console.error("call ShowObtainGold.., timer:",egret.getTimer());
        //     //金币为0;
        //     if (gold == 0) {
        //         if (cb) cb.call(cbObj);
        //         return;
        //     }



        //     let wrapCb = () => {
        //         if (cb) cb.call(cbObj);
        //     }
        //     let obtainGold = gold * DataCenter.Instance.CurDizhu;

        //     // let highScoreList = DataCenter.Instance.getLabaHighScoreList();
        //     // egret.log("highScoreList:"+JSON.stringify(highScoreList));

        //     // let highGolds = [];
        //     // for (let i: number = 0; i < highScoreList.length; i++) {
        //     //     highGolds.push(highScoreList[i] );
        //     // }
        //     // if (obtainGold < highGolds[0]) {
        //     //     WinNormal.Instance.ShowScore(obtainGold, wrapCb);

        //     // }
        //     // else if (obtainGold < highGolds[1]) {
        //     //     WinBig.Instance.ShowScore(obtainGold, wrapCb);
        //     //     SoundHand.Instance.PlaySoundOnce(ShzSound.WinnerBigSound);
        //     // }
        //     // else {
        //     //     WinSuper.Instance.ShowScore(obtainGold, wrapCb);
        //     //     SoundHand.Instance.PlaySoundOnce(ShzSound.WinnerSuperSound);
        //     // }
        //     let onFinishContinueCB = () => {
        //         if(LabaGame.Instance.mBigwinContinueTimeout != 0){
        //             game.Timer.clearTimeout(LabaGame.Instance.mBigwinContinueTimeout);
        //             LabaGame.Instance.mBigwinContinueTimeout = 0;
        //         }

        //         LabaGame.Instance.bigWinPanel.visible = false;
        //         game.Timer.setTimeout(() => {
        //             if (cb) cb.call(cbObj);
        //         }, this, 200);

        //     }
        //     LabaGame.Instance.bigWinPanel.playGoldWinType(obtainGold,
        //         () => {
        //             onFinishContinueCB();
        //         },
        //         {
        //             scrollFinishCB: () => {
        //                 //自动挂机时，超时5秒钟;
        //                 LabaGame.Instance.mBigwinContinueTimeout = game.Timer.setTimeout(() => {
        //                     LabaGame.Instance.bigWinPanel.visible = false;
        //                     onFinishContinueCB();
        //                 }, null, LabaConfig.BigWinContinueTimeOut);

        //             }
        //         }
        //     );
        // }


        /**
         * 击鼓的动画;
         */
        public DoBeatDrumEffect() {
            //鼓锤的动画;
            let guChuiImage = LabaGame.Instance.guchuiImage;
            //鼓面的动画;
            let guMianImage = LabaGame.Instance.guMianImage;
            egret.Tween.removeTweens(guChuiImage);
            egret.Tween.removeTweens(guMianImage);
            guMianImage.scaleX = 1.0;
            guMianImage.scaleY = 1.0;
            guMianImage.filters = [];
            guChuiImage.rotation = -90;
            let brightValue: number = 1.5;
            let gumianScaleValue: number = 1.05;
            let brightColorMaxtrix = [brightValue, 0, 0, 0, 0,
                0, brightValue, 0, 0, 0,
                0, 0, brightValue, 0, 0,
                0, 0, 0, 1, 0];
            egret.Tween.get(guChuiImage).to({ "rotation": 0 }, 200).call(() => {
                egret.Tween.removeTweens(guChuiImage);
                guMianImage.filters = [new egret.ColorMatrixFilter(brightColorMaxtrix)]
                guMianImage.scaleX = 1.0;
                guMianImage.scaleX = 1.0;
                egret.Tween.get(guMianImage).to({ "scaleX": gumianScaleValue, "scaleY": gumianScaleValue }, 150).to({ "scaleX": 1.0, "scaleY": 1.0 }, 150).call(() => {
                    guMianImage.filters = [];
                    egret.Tween.removeTweens(guMianImage);
                });
            })
        }


     
        //出现图片imgPath后, duration时间;
        public ScreenAppearImage(configInfo: any, duration: number = 2000, cb: Function = null): labalib.Utils.KeyFrameObject {
            let showImage = function () {

                let boneAnimation = labalib.Utils.PlayMovieAnimInfo(EffectLayer.Instance, configInfo, () => {
                    (boneAnimation.getChildAt(0) as egret.MovieClip).stop();
                });
                // boneAnimation.animation.play(configInfo.animationName,1);
                // EffectLayer.Instance.addChild(boneAnimation.armature.display);
                // boneAnimation.scaleX = boneAnimation.scaleY = 2;
                // let img: eui.Image = new eui.Image()
                // EffectLayer.Instance.addChild(img);
                // img.source = imgPath;
                // img.anchorOffsetX = img.width / 2;
                // img.anchorOffsetY = img.height / 2;
                boneAnimation.x = uniLib.Global.screenWidth / 2;
                boneAnimation.y = uniLib.Global.screenHeight / 2;

                game.Timer.setTimeout(() => {
                    labalib.Utils.ObjectPool.Instance.destroyObject(boneAnimation);
                    boneAnimation = null;
                    // boneAnimation.dispose(true);
                    // EffectLayer.Instance.removeChild(boneAnimation);
                    if (cb != null) {
                        cb();
                    }
                }, null, duration)

                // egret.Tween.get(img).set({ scaleX: 1.2, scaleY: 1.2 }).to({ scaleX: 1.0, scaleY: 1.0 }, 500, egret.Ease.getBackOut(0.2)).call(() => {
                // }).wait(duration).call(() => {
                //     //EffectLayer.Instance.HideDarkLayer(0.3, cb);
                // }).to({ alpha: 0 }, 0.3).call(() => {
                //     EffectLayer.Instance.removeChild(boneAnimation);
                //     if (cb != null) {
                //         cb();
                //     }
                // });
                return boneAnimation;
            }
            return showImage();
            //EffectLayer.Instance.ShowDarkLayer(0.3, showFreeFont);
        }

     
    }
}