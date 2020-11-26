// TypeScript file

module conglinshuiguo {
    export class FreeGameStart extends game.BaseUI {
        public static m_Instance: FreeGameStart = null;
        // private cloud: egret.tween.TweenGroup;
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


        private winMonkeyMov: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov1: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov2: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov3: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov4: dragonBones.EgretArmatureDisplay = null;
        private movGroup:eui.Group;
        public stopAppear() {
            SoundHand.Instance.switchMusicBG(1)
            egret.Tween.get(this.bgimage).set({ alpha: 1 }).to({ alpha: 0 }, 300);
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
            LabaGame.Instance.playFreeMov();
            game.Timer.setTimeout(() => {
                LabaGame.Instance.maskRect.visible = false;
                LabaGame.Instance.freemGroup.removeChild(FreeGameStart.Instance);
            }, null, 500)
        }
        public empty(){
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
            egret.Tween.removeTweens(this.bgimage)
            
        }

        public playAppear() {
            SoundHand.Instance.switchMusicBG(3)
            egret.Tween.get(this.bgimage).set({ alpha: 0 }).to({ alpha: 1 }, 300);
            if(!this.winMonkeyMov){
                this.winMonkeyMov = uniLib.DragonUtils.createDragonBoneAnimation("mgbg_wins_lemur")
                this.winMonkeyMov.x = 360;
                this.winMonkeyMov.y = 550;

                this.winLeafMov1 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov1.x = 0;
                this.winLeafMov1.y = 1280;
                this.movGroup.addChild(this.winLeafMov1);

                this.winLeafMov2 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov2.x = 0;
                this.winLeafMov2.y = 520;
                this.movGroup.addChild(this.winLeafMov2);

                this.winLeafMov3 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov3.x = 720;
                this.winLeafMov3.y = 200;
                this.movGroup.addChild(this.winLeafMov3);

                this.winLeafMov4 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov4.x = 720;
                this.winLeafMov4.y = 1280;
                this.movGroup.addChild(this.winLeafMov4);
                this.movGroup.addChild(this.winMonkeyMov);
            }
            this.startButton.enabled = true;
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
        }
        public winMonkeyMovIdle(){
            this.winMonkeyMov.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.winMonkeyMovIdle, this);
            this.winMonkeyMov.animation.play("win_1",0)
        }

        destroy(): void {
            super.destroy();
            FreeGameStart.m_Instance = null;
            this.empty();
        }
        addUIListener(): void {
            this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton, this);
        }
        removeUIListener(): void {
            this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton, this);
        }

        public initUI() {
            this.loadImg.blendMode = egret.BlendMode.ADD;
            // this.playAppear();
        }
        private gameRoot: eui.Group
        public onStartButton() {
            SoundHand.Instance.playFreebtnSound();
            this.startButton.enabled = false;
            game.Timer.clearTimeout(this.mAutoCloseTimer)
            //星星动画
            labalib.Utils.PlayTweenGroup(this.startBtnLight, 1)

            labalib.Utils.PlayMovieAnimInfo(this.startButton, LabaConfig.Rotate2, () => {
                // this.lcloud.visible = true
                // this.rcloud.visible = true
                this.gameRoot.visible = false
                this.bgimage.visible = false
                // labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {
                    
                // GX.PopUpManager.removePopUp(FreeGameStart.Instance)
                this.stopAppear();
                
                if (this.mFinishCB) {
                    this.mFinishCB()
                }
                // })
            }, true);

        }


        private scrollNumberInfo: any
        private loadImg: eui.Image
        private loadGroup: eui.Group
        private mFinishCB: any = null
        private mFinishCBObj: any = null
        private startBtnLight: egret.tween.TweenGroup;
        // private startBtnLight1: eui.Image
        private lcloud: eui.Image
        private rcloud: eui.Image
        private bgimage: eui.Image

        public Show(cb?: Function, params?: any) {
            this.playAppear();
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
            LabaGame.Instance.maskRect.visible = true;
            LabaGame.Instance.freemGroup.addChild(FreeGameStart.Instance);
            // GX.PopUpManager.addPopUp(FreeGameStart.Instance, false, 0)
            this.gameRoot.visible = true
            this.bgimage.visible = true
            // labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {
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
                            // this.startBtnLight1.parent.visible = true
                            // labalib.Utils.PlayTweenGroup(this.startBtnLight, 1)

                        })
                });
            // })
            this.mAutoCloseTimer = game.Timer.setTimeout(() => {
                // this.lcloud.visible = true
                // this.rcloud.visible = true
                this.gameRoot.visible = false
                this.bgimage.visible = false
                SoundHand.Instance.switchMusicBG(1)
                // labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {
                    // GX.PopUpManager.removePopUp(FreeGameStart.Instance)
                    // LabaGame.Instance.freemGroup.removeChild(FreeGameStart.Instance);
                    this.stopAppear();
                    if (this.mFinishCB) {
                        this.mFinishCB()
                    }
                // })
            }, null, 5000);


        }

    }
}