// TypeScript file

module conglinshuiguo {
    export class FreeGameStart extends game.BaseUI {
        public static m_Instance: FreeGameStart = null;
        private cloud: egret.tween.TweenGroup;
        private freeCountBLabel: eui.BitmapLabel
        private timeLabel: eui.BitmapLabel
        private mAutoCloseTimer: number
        private startButton: game.Button

        constructor() {
            super();
            this.skinName = new clsg_freeGameStartSkin();
            this.initUI();
        }

        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new FreeGameStart();
            return this.m_Instance;
        }

        destroy(): void {
            super.destroy();
            FreeGameStart.m_Instance = null;
        }
        addUIListener(): void {
            this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton, this);
        }
        removeUIListener(): void {
            this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton, this);
        }

        public initUI() {

        }
        private gameRoot: eui.Group
        public onStartButton() {
            game.Timer.clearTimeout(this.mAutoCloseTimer)
            //星星动画

            labalib.Utils.PlayMovieAnimInfo(this.startButton, LabaConfig.Rotate2, () => {
                this.lcloud.visible = true
                this.rcloud.visible = true
                this.gameRoot.visible = false
                this.bgimage.visible = false
                labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {
                    GX.PopUpManager.removePopUp(FreeGameStart.Instance)
                    if (this.mFinishCB) {
                        this.mFinishCB()
                    }
                })
            }, true);

        }


        private scrollNumberInfo: any
        private loadImg: eui.Image
        private loadGroup: eui.Group
        private mFinishCB: any = null
        private mFinishCBObj: any = null
        private startBtnLight: egret.tween.TweenGroup;
        private startBtnLight1: eui.Image
        private lcloud: eui.Image
        private rcloud: eui.Image
        private bgimage: eui.Image

        public Show(cb?: Function, params?: any) {
            game.Timer.clearTimeout(this.mAutoCloseTimer)
            let freecount = 8
            this.startButton.visible = false
            this.timeLabel.text = "0"
            if (this.scrollNumberInfo) {
                this.scrollNumberInfo.stopCB();
            }
            this.mFinishCB = cb
            this.mFinishCBObj = params
            this.loadGroup.visible = true
            GX.PopUpManager.addPopUp(FreeGameStart.Instance, false, 0)
            this.gameRoot.visible = true
            this.bgimage.visible = true
            labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {
                this.lcloud.visible = false
                this.rcloud.visible = false
                egret.Tween.get(this.loadImg, { loop: true }).to({ rotation: 360 }, 800)
                this.scrollNumberInfo = labalib.Utils.scrollNumber(this.timeLabel, 0, 90, 800, () => {
                    egret.Tween.removeTweens(this.startButton)
                    egret.Tween.removeTweens(this.loadImg)
                    this.loadGroup.visible = false
                    egret.Tween.get(this.startButton).set({ scaleX: 0.5, scaleY: 0.5, visible: true }).to({ scaleX: 1, scaleY: 1 }, 500)
                        .wait(1000).call(() => {
                            //按钮框框动画
                            this.startBtnLight1.parent.visible = true
                            labalib.Utils.PlayTweenGroup(this.startBtnLight, 1)

                        })
                });
            })
            this.mAutoCloseTimer = game.Timer.setTimeout(() => {
                this.lcloud.visible = true
                this.rcloud.visible = true
                this.gameRoot.visible = false
                this.bgimage.visible = false
                labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {
                    GX.PopUpManager.removePopUp(FreeGameStart.Instance)
                    if (this.mFinishCB) {
                        this.mFinishCB()
                    }
                })
            }, null, 5000);


        }

    }
}