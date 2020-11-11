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
            // let v = 0.6
            // let light = 20
            // let colorMaxtrix =
            //     [v, 0, 0, 0, light,
            //         0, v, 0, 0, light,
            //         0, 0, v, 0, light,
            //         0, 0, 0, 1, light];

            // this.cloudImage1.filters = [new egret.ColorMatrixFilter(colorMaxtrix)]

            // let v1 = 0.6
            // let light1 = 20
            // let colorMaxtrix1 =
            //     [v1, 0, 0, 0, light1,
            //         0, v1, 0, 0, light1,
            //         0, 0, v1, 0, light1,
            //         0, 0, 0, 1, light1];

            // this.cloudImage3.filters = [new egret.ColorMatrixFilter(colorMaxtrix1)]
        }

        public addUIListener() {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkipCurWinType, this);
        }
        private ringImage1: eui.Image
        private ringImage2: eui.Image
        private cloudImage1: eui.Image
        private cloudImage2: eui.Image
        private cloudImage3: eui.Image

        private flashImage: eui.Image
        private glowImage2: eui.Image
        private glowImage1: eui.Image
        private glowImage3: eui.Image
        private glowImage4: eui.Image
        private glowImage5: eui.Image
        private ringanim: egret.tween.TweenGroup   //重复一直播
        private ringanim2: egret.tween.TweenGroup  //红光
        private lianhua: egret.tween.TweenGroup    //莲花背景 一次
        private lianhua2: egret.tween.TweenGroup   //文字
        private winTitleGroup: eui.Group
        private normalEffectGroup: eui.Group
        public enterBigWinAnim(cb) {
            GX.PopUpManager.addPopUp(this)
            // this.cloudImage1.visible = true
            // this.cloudImage2.visible = true
            // this.cloudImage3.visible = true
            // this.winTitleGroup.visible = false
            // this.ringImage1.visible = true

            SoundHand.Instance.playBigWinSound()

            // this.flashImage.visible = false
            // this.glowImage1.visible = false
            // this.glowImage2.visible = false
            // this.glowImage3.visible = false
            // this.glowImage4.visible = false
            // this.glowImage5.visible = false

            //    normalEffectGroup
            // this.rotation
            // this.alpha
            // egret.Tween.get(this.cloudImage1).to({ alpha: 0.5 }, 1000)
            // egret.Tween.get(this.cloudImage2).to({ alpha: 1 }, 1000)
            // egret.Tween.get(this.cloudImage3).to({ alpha: 0.5 }, 1000)
            // this.ringImage2.filters = [labalib.Utils.GetGlowFilter(0xFFFF00)];
            // this.ringImage1.filters = [labalib.Utils.GetGlowFilter(0xFFFF00)];

            let part1 = labalib.Utils.PlayMovieAnimInfo(this.normalEffectGroup, LabaConfig.BigWinLiziEffect);
            part1.x = part1.x - 10
            let part2 = labalib.Utils.PlayMovieAnimInfo(this.normalEffectGroup, LabaConfig.BigWinLiziEffect);
            part2.x = part2.x + 6
            // game.Timer.clearTimeout(this.mDelayOpenTimer)
            // this.mDelayOpenTimer = game.Timer.setTimeout(() => {
            // this.flashImage.visible = true
            // this.glowImage1.visible = true
            // this.glowImage2.visible = true
            // this.glowImage3.visible = true
            // this.glowImage4.visible = true
            // this.glowImage5.visible = true
            // this.ringImage1.visible = false
            // let part = labalib.Utils.PlayMovieAnimInfo(this.normalEffectGroup, LabaConfig.BigWinLiziEffect);
            // egret.Tween.get(this.ringImage1).set({ scaleX: 2.2, visible: true }).to({ scaleX: 3, scaleY: 3 }, 1500).set({ visible: false })
            labalib.Utils.PlayTweenGroup(this.lianhua, 1)
            labalib.Utils.PlayTweenGroup(this.lianhua2, 0)
            labalib.Utils.PlayTweenGroup(this.ringanim, 0)
            labalib.Utils.PlayTweenGroup(this.ringanim2, 0)


            // egret.Tween.get(this.cloudImage1, { loop: true }).set({ rotation: 0 }).to({ rotation: 360 }, 40000)
            // egret.Tween.get(this.cloudImage2, { loop: true }).set({ rotation: 0 }).to({ rotation: 360 }, 40000)
            // egret.Tween.get(this.cloudImage3, { loop: true }).set({ rotation: 0 }).to({ rotation: 360 }, 40000)
            egret.Tween.get(this.winTitleGroup).set({ scaleX: 0.2, scaleY: 0.2, visible: true }).to({ scaleX: 1, scaleY: 1 }, 600)
            if (cb) {
                cb()
            }
            // }, null, 200)
        }
        public mDelayOpenTimer: number = 0
        public initTween(value, filter, a) {

            // this.ringImage1.visible = false
            // egret.Tween.get(this.ringImage1).set({ scaleX: 2.2, visible: true }).to({ scaleX: 3, scaleY: 3 }, 1500).set({ visible: false })
            // labalib.Utils.PlayTweenGroup(this.ringanim, 0)
            // labalib.Utils.PlayTweenGroup(this.ringanim2, 0)
            // egret.Tween.get(this.cloudImage1, { loop: true }).set({ rotation: 0 }).to({ rotation: 360 }, 40000)
            // egret.Tween.get(this.cloudImage2, { loop: true }).set({ rotation: 0 }).to({ rotation: 360 }, 40000)
            // egret.Tween.get(this.cloudImage3, { loop: true }).set({ rotation: 0 }).to({ rotation: 360 }, 40000)


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
        private winTitleImage: eui.Image
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
            console.log("JSON.", JSON.stringify(this._scoreList))
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
                    console.log("playbigwin from:", fromGold, " toGold:", toGold, " winidx:", winidx, waitTime)
                    scrollNumberInfo = labalib.Utils.scrollNumber(this.GoldNumLabel, fromGold, toGold, waitTime);
                    uniLib.SoundMgr.instance.playSound("freescroll_mp3", 1)
                }).wait(waitTime)
            }
            bigwinTween.wait(4000).call(() => {
                if (cb)
                    cb()
                GX.PopUpManager.removePopUp(this)
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
                    GX.PopUpManager.removePopUp(this)
                }, null, 1500)

            }
            return { stopCB: null, totalTm: totalTime, noBigWin: false };
        }


        // private _mTotal
        /**
         * 播放指定的胜利类型
         */
        public playWinType(winType) {
            this._mCurPlayWinType += 1
            this.winTitleImage.source = this._winTypeTitlePaths[this._mCurPlayWinType - 1]
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