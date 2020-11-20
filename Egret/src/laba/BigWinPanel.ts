module conglinshuiguo {
    enum WinType {
        BIG_WIN = 1,
        HUGE_WIN = 2,
        SUPER_WIN = 3
    }
    export class BigWinPanelExt extends game.BaseUI {



        public constructor() {
            super();
            this.skinName = new clsg_bigwinskin();
        }

        public addUIListener() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkipCurWinType, this);
        }

        private winTitleGroup: eui.Group
        private normalEffectGroup: eui.Group

        private winMonkeyMov: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov1: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov2: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov3: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov4: dragonBones.EgretArmatureDisplay = null;
        private normalGoldFlyGroup:eui.Group;


        public enterBigWinAnim(cb) {
            this.height = uniLib.Global.screenHeight
            this.width = uniLib.Global.screenWidth
            this.winTitleGroup.visible = false;
            GX.PopUpManager.addPopUp(this)

            SoundHand.Instance.playBigWinSound()
            if(!this.winMonkeyMov){
                this.winMonkeyMov = uniLib.DragonUtils.createDragonBoneAnimation("mgbg_wins_lemur")
                this.winMonkeyMov.x = 360;
                this.winMonkeyMov.y = 950;

                this.winLeafMov1 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov1.x = 0;
                this.winLeafMov1.y = 1280;
                this.normalGoldFlyGroup.addChild(this.winLeafMov1);

                this.winLeafMov2 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov2.x = 0;
                this.winLeafMov2.y = 520;
                this.normalGoldFlyGroup.addChild(this.winLeafMov2);

                this.winLeafMov3 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov3.x = 720;
                this.winLeafMov3.y = 200;
                this.normalGoldFlyGroup.addChild(this.winLeafMov3);

                this.winLeafMov4 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov4.x = 720;
                this.winLeafMov4.y = 1280;
                this.normalGoldFlyGroup.addChild(this.winLeafMov4);
                this.normalGoldFlyGroup.addChild(this.winMonkeyMov);
            }
            this.winLeafMov1.animation.play("yezi_0",0)
            this.winLeafMov2.animation.play("yezi_1",0)
            this.winLeafMov3.animation.play("yezi_2",0)
            this.winLeafMov4.animation.play("yezi_3",0)
            egret.Tween.get(this.winLeafMov1).set({ x:-200 }).to({ x:0 }, 300)
            egret.Tween.get(this.winLeafMov2).set({ x:-200 }).to({ x:0 }, 300)
            egret.Tween.get(this.winLeafMov3).set({ x:920 }).to({ x:720 }, 300)
            egret.Tween.get(this.winLeafMov4).set({ x:920 }).to({ x:720 }, 300)
            this.winMonkeyMov.animation.play("win_0",1)
            this.winMonkeyMov.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.winMonkeyMovIdle, this);
            game.Timer.setTimeout(() => {
                if (cb)
                    cb()
            }, null, 300)
            // }, null, 200)
        }
        public winMonkeyMovIdle(){
            this.winMonkeyMov.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.winMonkeyMovIdle, this);
            this.winMonkeyMov.animation.play("win_1",0)
        }
        public empty(){
            if (this.winTitleMov1){
                this.winTitleMov1.animation.stop();
                egret.Tween.removeTweens(this.winTitleMov1)
                if(this.winTitleMov1.parent){
                    this.winTitleMov1.parent.removeChild(this.winTitleMov1)
                }
                this.winTitleMov1.dispose();
                this.winTitleMov1 = null;
            }
            if (this.winTitleMov2){
                this.winTitleMov2.animation.stop();
                egret.Tween.removeTweens(this.winTitleMov2)
                if(this.winTitleMov2.parent){
                    this.winTitleMov2.parent.removeChild(this.winTitleMov2)
                }
                this.winTitleMov2.dispose();
                this.winTitleMov2 = null;
            }
            if (this.winTitleMov3){
                this.winTitleMov3.animation.stop();
                egret.Tween.removeTweens(this.winTitleMov3)
                if(this.winTitleMov3.parent){
                    this.winTitleMov3.parent.removeChild(this.winTitleMov3)
                }
                this.winTitleMov3.dispose();
                this.winTitleMov3 = null;
            }
            if (this.winLightMov1){
                this.winLightMov1.animation.stop();
                if(this.winLightMov1.parent){
                    this.winLightMov1.parent.removeChild(this.winLightMov1)
                }
                this.winLightMov1.dispose();
                this.winLightMov1 = null;
            }
            if (this.winLightMov2){
                this.winLightMov2.animation.stop();
                if(this.winLightMov2.parent){
                    this.winLightMov2.parent.removeChild(this.winLightMov2)
                }
                this.winLightMov2.dispose();
                this.winLightMov2 = null;
            }
            if (this.winLightMov3){
                this.winLightMov3.animation.stop();
                if(this.winLightMov3.parent){
                    this.winLightMov3.parent.removeChild(this.winLightMov3)
                }
                this.winLightMov3.dispose();
                this.winLightMov3 = null;
            }
            if (this.winMonkeyMov){
                this.winMonkeyMov.animation.stop();
                if(this.winMonkeyMov.parent){
                    this.winMonkeyMov.parent.removeChild(this.winMonkeyMov)
                }
                this.winMonkeyMov.dispose();
                this.winMonkeyMov = null;
            }

            if (this.winLeafMov1){
                this.winLeafMov1.animation.stop();
                egret.Tween.removeTweens(this.winLeafMov1)
                if(this.winLeafMov1.parent){
                    this.winLeafMov1.parent.removeChild(this.winLeafMov1)
                }
                this.winLeafMov1.dispose();
                this.winLeafMov1 = null;
            }

            if (this.winLeafMov2){
                this.winLeafMov2.animation.stop();
                egret.Tween.removeTweens(this.winLeafMov2)
                if(this.winLeafMov2.parent){
                    this.winLeafMov2.parent.removeChild(this.winLeafMov2)
                }
                this.winLeafMov2.dispose();
                this.winLeafMov2 = null;
            }

            if (this.winLeafMov3){
                this.winLeafMov3.animation.stop();
                egret.Tween.removeTweens(this.winLeafMov3)
                if(this.winLeafMov3.parent){
                    this.winLeafMov3.parent.removeChild(this.winLeafMov3)
                }
                this.winLeafMov3.dispose();
                this.winLeafMov3 = null;
            }

            if (this.winLeafMov4){
                this.winLeafMov4.animation.stop();
                egret.Tween.removeTweens(this.winLeafMov4)
                if(this.winLeafMov4.parent){
                    this.winLeafMov4.parent.removeChild(this.winLeafMov4)
                }
                this.winLeafMov4.dispose();
                this.winLeafMov4 = null;
            }
            
            egret.Tween.removeTweens(this.GoldNumLabel)
        }
        public mDelayOpenTimer: number = 0
        public initTween(value, filter, a) {

        }
        public removeUIListener() {
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkipCurWinType, this);
        }
        public static MAX_WinType: number = 3
        private _scoreList: Array<number> = [];
        //wintype的类型;
        private _winTypePaths: Array<string> = [];
        //wintype的类型;
        private _winTypeTitlePaths: Array<string> = [];
        //wintype的音效类型;
        private _winTypeSoundPaths: Array<string> = [];
        //计算滚动时间回调函数;
        private _calcScrollCB: Function;
        //计算滚动时间回调函数调用者;
        private _calcScrollObj: any;
        private _mDelayClosePanelTimer: number = 0
        private _mCurPlayWinType: number = 0
        //金币数量标签;
        private GoldNumLabel: eui.BitmapLabel;
        // private winTitleImage: eui.Image
        //每个获奖阶段的表现时间
        // private _winTime = [500000, 500000, 500000, 500000, 500000, 500000, 500000];
        private _winTime = [2000, 2000, 2000, 2000, 2000, 3000, 5000];

        /**
         *  点击事件;
         */
        public onSkipCurWinType() {
            // this.visible = false;
            // LabaGame.Instance.skipGoldButton.visible = false;

        }
        public set HighScoreLists(scoreList) {
            this._scoreList = [];
            for (let i: number = 0; i < scoreList.length; i++) {
                this._scoreList.push(scoreList[i]);
            }
        }
        public winSignOut(cb:any) {
            egret.Tween.get(this.winLeafMov1).set({ x:0 }).to({ x:-200 }, 300)
            egret.Tween.get(this.winLeafMov2).set({ x:0 }).to({ x:-200 }, 300)
            egret.Tween.get(this.winLeafMov3).set({ x:720 }).to({ x:920 }, 300)
            egret.Tween.get(this.winLeafMov4).set({ x:720 }).to({ x:920 }, 300)
            this.winMonkeyMov.animation.stop();
            this.winLeafMov1.animation.stop();
            this.winLeafMov2.animation.stop();
            this.winLeafMov3.animation.stop();
            this.winLeafMov4.animation.stop();
            this.winMonkeyMov.animation.play("win_2",1)
            this.winLightMov3.animation.play(this._winTypePaths[2],1)
            this.winLightMov1.animation.play("gx_3",1)
            this.winLightMov2.animation.play(this._winTypePaths[2],1)
            game.Timer.setTimeout(() => {
                if (cb)
                    cb()
                this.winTitleMov3.animation.stop()
                this.winTitleMov2.alpha = 0;
                this.winTitleMov1.alpha = 0;
                this.winTitleMov3.alpha = 0;
                GX.PopUpManager.removePopUp(this)
            }, null, 500)
        }

        /**
       * 设置胜利类型,wintype用逗号(,)隔开，jackport用冒号(:)隔开;
       */
        public set WinTypePaths(paths: string) {
            this._winTypePaths.clear();
            let winTypePathStrs = paths.split(",");
            for (let i: number = 0; i < winTypePathStrs.length; i++) {
                this._winTypePaths.push(winTypePathStrs[i]);
            }

        }
        /**
       * 设置胜利类型标题,用逗号(,)隔开
       */
        public set WinTypeImagePaths(paths: string) {
            this._winTypeTitlePaths.clear();
            let winTypePathStrs = paths.split(",");
            for (let i: number = 0; i < winTypePathStrs.length; i++) {
                this._winTypeTitlePaths.push(winTypePathStrs[i]);
            }

        }

        /**
              * 设置bigwin滚动时间的回调函数;
              */
        public set CalcScrollTimeCB(params) {
            this._calcScrollCB = params.calcScrollCB ? params.calcScrollCB : null;
            this._calcScrollObj = params.cbObj ? params.cbObj : null;
        }
        public set WinTypeSoundPaths(paths: string) {
            this._winTypeSoundPaths.clear();
            let strTmps = paths.split(":");
            if (strTmps.length > 0) {
                let winTypeSoundPathStrs = strTmps[0].split(",");
                for (let i: number = 0; i < winTypeSoundPathStrs.length; i++) {
                    this._winTypeSoundPaths.push(winTypeSoundPathStrs[i]);
                }
            }
        }


        /**
         * 播放金币滚动动画;
         * obtainGold: 获得的金币;
         * otherParam: lineCount:如果没有，
         * otherParam: jackport如果有值，则普通获得的金币 = obtainGold-otherParam.jackport;
         */
        public playGoldWinType(obtainGold, cb?: Function, otherParam?: any): { stopCB: Function, totalTm?: number, noBigWin: boolean } {
            // if (this._goldParticle != null) {
            //     this._goldParticle.stopCB();
            //     this._goldParticle = null;
            // }


            if (obtainGold == 0) {
                // this.visible = false;
                if (cb) cb();
                return { stopCB: null, totalTm: 0, noBigWin: true };
            }


            if (otherParam) {
                egret.log("otherParam:" + JSON.stringify(otherParam));
            }
            let defaultLineCount: number = labalib.LabaDataCenter.Instance.AwardRatio;

            let normalObtainGold: number = obtainGold;
            //显示控件.

            let curDizhu = labalib.LabaDataCenter.Instance.CurDizhu;
            let perGold = curDizhu / defaultLineCount;
            let obtainNormalMultiply = Math.floor(normalObtainGold / perGold);



            //保存普通获取计算要播放的几个动画;
            let showWinTypeCount: number = 0;
            //从后往前计算，
            for (let i: number = 0; i < this._scoreList.length; i++) {
                if (obtainNormalMultiply >= this._scoreList[this._scoreList.length - i - 1]) {
                    showWinTypeCount = this._scoreList.length - i;
                    break;
                }
            }
            egret.log("call playGoldWinType, obtainGold:", obtainGold, " showWinTypeCount:", showWinTypeCount, " obtainNormalMultiply:", obtainNormalMultiply);

            if (showWinTypeCount == 0) {
                if (cb) cb();
                return { stopCB: null, totalTm: 0, noBigWin: true };
            }



            if (showWinTypeCount > BigWinPanelExt.MAX_WinType)
                showWinTypeCount = BigWinPanelExt.MAX_WinType
            // GX.PopUpManager.addPopUp(this)
            this._mCurPlayWinType = 0
            let totalTime: number = 0;
            let bigwinTween = egret.Tween.get(this)
            let scrollNumberInfo: any = null;

            for (let winidx = 0; winidx < showWinTypeCount; winidx++) {
                let waitTime = this._winTime[winidx]
                totalTime += waitTime
                bigwinTween.call(() => {
                    if (scrollNumberInfo) {
                        scrollNumberInfo.stopCB();
                    }
                    this.playWinType(winidx + 1)

                    let fromGold = 0
                    let toGold = this._scoreList[winidx] * perGold
                    if (winidx != 0) {
                        fromGold = this._scoreList[winidx - 1] * perGold
                    }
                    if (obtainGold < toGold)
                        toGold = obtainGold
                    scrollNumberInfo = labalib.Utils.scrollNumber(this.GoldNumLabel, fromGold, toGold, waitTime);
                    uniLib.SoundMgr.instance.playSound("freescroll_mp3", 1)
                }).wait(waitTime)
            }
            bigwinTween.wait(4000).call(() => {
                this.winSignOut(cb);
                // if (cb)
                //     cb()
                
            })

            let stopCB = () => {
                if (scrollNumberInfo) {
                    scrollNumberInfo.stopCB();
                }
                egret.Tween.removeTweens(bigwinTween)
                //还有没有播放完毕的金币类型;
                if (this._mCurPlayWinType < showWinTypeCount) {
                    this.playWinType(showWinTypeCount);
                    this.GoldNumLabel.text = GX.GoldFormat(obtainGold, false, true);
                }
                game.Timer.clearTimeout(this._mDelayClosePanelTimer)
                this._mDelayClosePanelTimer = game.Timer.setTimeout(() => {
                    if (cb)
                        cb()
                    this.winTitleMov3.animation.stop()
                    this.winLightMov3.animation.play(this._winTypePaths[2],1)
                    GX.PopUpManager.removePopUp(this)
                }, null, 1500)

            }
            return { stopCB: null, totalTm: totalTime, noBigWin: false };
        }


        private winTitleMov1: dragonBones.EgretArmatureDisplay = null;
        private winTitleMov2: dragonBones.EgretArmatureDisplay = null;
        private winTitleMov3: dragonBones.EgretArmatureDisplay = null;
        private winLightMov1: dragonBones.EgretArmatureDisplay = null;
        private winLightMov2: dragonBones.EgretArmatureDisplay = null;
        private winLightMov3: dragonBones.EgretArmatureDisplay = null;
        /**
         * 播放指定的胜利类型
         */
        public playWinType(winType) {
            this._mCurPlayWinType += 1
            // this.winTitleImage.source = this._winTypeTitlePaths[this._mCurPlayWinType - 1]
            if (!this.winTitleMov1) {
                this.winTitleMov1 = uniLib.DragonUtils.createDragonBoneAnimation("dajiang_logo")
                this.winTitleMov1.x = 450;
                this.winTitleGroup.addChild(this.winTitleMov1);
                this.winTitleMov1.animation.play(this._winTypeTitlePaths[this._mCurPlayWinType - 1],0)

                this.winTitleMov2 = uniLib.DragonUtils.createDragonBoneAnimation("dajiang_logo")
                this.winTitleMov2.x = 450;
                this.winTitleGroup.addChild(this.winTitleMov2);
                this.winTitleMov2.animation.play(this._winTypeTitlePaths[this._mCurPlayWinType],0)
                this.winTitleMov2.visible = false;

                this.winTitleMov3 = uniLib.DragonUtils.createDragonBoneAnimation("dajiang_logo")
                this.winTitleMov3.x = 450;
                this.winTitleGroup.addChild(this.winTitleMov3);
                this.winTitleMov3.animation.play(this._winTypeTitlePaths[this._mCurPlayWinType+1],0)
                this.winTitleMov3.visible = false;

                this.winLightMov1 = uniLib.DragonUtils.createDragonBoneAnimation("jiesuan_gx1_1")
                this.winLightMov1.x = 450;
                this.winTitleGroup.addChild(this.winLightMov1);
                this.winLightMov1.animation.play(this._winTypePaths[0],1)
                // this.winLightMov1.visible = false;
                this.winLightMov1.animation.timeScale = 3;

                this.winLightMov2 = uniLib.DragonUtils.createDragonBoneAnimation("jiesuan_gx2")
                this.winLightMov2.x = 450;
                this.winTitleGroup.addChild(this.winLightMov2);
                // this.winLightMov2.animation.play(this._winTypePaths[this._mCurPlayWinType-1],1)
                this.winLightMov2.visible = false;
                this.winLightMov2.animation.timeScale = 3;

                this.winLightMov3 = uniLib.DragonUtils.createDragonBoneAnimation("jiesuan_gx3")
                this.winLightMov3.x = 450;
                this.winTitleGroup.addChild(this.winLightMov3);
                // this.winLightMov3.animation.play(this._winTypePaths[this._mCurPlayWinType-1],1)
                this.winLightMov3.visible = false;
                this.winLightMov3.animation.timeScale = 3;
            }
            this.winTitleGroup.visible = true;
            if(this._mCurPlayWinType == 1){
                this.winTitleMov3.alpha = 0;
                // this.winLightMov3.alpha = 0;
                this.GoldNumLabel.visible = false;
                egret.Tween.get(this.winTitleMov1).set({ y: -700,alpha: 1,visible:true }).to({ y: 60 }, 330).call(() => {
                    this.GoldNumLabel.visible = true;
                    this.winLightMov1.animation.stop();
                    this.winLightMov1.animation.play(this._winTypePaths[1],0)
                    egret.Tween.get(this.GoldNumLabel).to({ scaleX: 1.2,scaleY:1.2 }, 150).to({ scaleX: 1,scaleY:1 }, 150)
                })
            }
            else if(this._mCurPlayWinType == 2){
                this.winLightMov2.visible = true;
                this.winLightMov2.animation.play(this._winTypePaths[0],1)
                egret.Tween.get(this.winTitleMov2).set({ y: -700,alpha: 1,visible:true }).to({ y: 60 }, 330).call(() => {
                    this.winTitleMov1.animation.stop()
                    this.winLightMov1.animation.stop();
                    this.winLightMov2.animation.stop();
                    this.winLightMov1.animation.play("gx_3",1)
                    this.winLightMov2.animation.play(this._winTypePaths[1],0)
                    egret.Tween.get(this.winTitleMov1).to({ alpha: 0 }, 300)
                    egret.Tween.get(this.GoldNumLabel).to({ scaleX: 1.2,scaleY:1.2 }, 150).to({ scaleX: 1,scaleY:1 }, 150)
                })
            }
            else if(this._mCurPlayWinType == 3){
                this.winLightMov3.visible = true;
                this.winLightMov3.animation.play(this._winTypePaths[0],1)
                egret.Tween.get(this.winTitleMov3).set({ y: -700,alpha: 1,visible:true }).to({ y: 60 }, 330).call(() => {
                    this.winTitleMov2.animation.stop()
                    this.winLightMov2.animation.stop();
                    this.winLightMov3.animation.stop();
                    this.winLightMov2.animation.play(this._winTypePaths[2],1)
                    this.winLightMov3.animation.play(this._winTypePaths[1],0)
                    egret.Tween.get(this.winTitleMov2).to({ alpha: 0 }, 300)
                    egret.Tween.get(this.GoldNumLabel).to({ scaleX: 1.2,scaleY:1.2 }, 150).to({ scaleX: 1,scaleY:1 }, 150)
                })
            }
            switch (winType) {
                case WinType.BIG_WIN:
                    this.playWinType_BigWin()
                    break
                case WinType.BIG_WIN:
                    this.playWinType_HugeWin()
                    break
                case WinType.SUPER_WIN:
                    this.playWinType_SuperWin()
                    break
                default:
                    this.playWinType_SuperWin()
                    break
            }
        }
        public playWinType_BigWin() {
            // this.winTitleImage.source = this._winTypeTitlePaths[this._mCurPlayWinType - 1]
        }
        public playWinType_HugeWin() {
            // this.winTitleImage.source = this._winTypeTitlePaths[this._mCurPlayWinType - 1]
        }
        public playWinType_SuperWin() {
            // this.winTitleImage.source = this._winTypeTitlePaths[this._mCurPlayWinType - 1]
        }

    }
}