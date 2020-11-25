module conglinshuiguo {
    export enum FreeInCharacter {
        Monkey = 1,
        Pig = 2,
        Sandy = 3,
        Monk = 0
    }
    enum Direct {
        down = 1,
        up = 2,
        left = 3,
        right = 4
    }
    // 百搭一个个加 如果中间满了就当前人物变成金色 然后旋转 在当前人物播放命中win   已经变成金色的放大
    // 百搭一个个加 如果中间没满 当前人物播放命中win   已经变成金色的放大
    // 百搭一个个加 没有百搭获取金色的放大    
    export enum FreeInCharacterDragonType {
        CHANGE_ROTATE = 0,
        WIN = 1,
        SCALE = 2
    }
    export class FreeGameIngPanel extends game.BaseUI {



        // addImage plus_2_active
        private freecountBLabel: eui.BitmapLabel
        private lastFreeImage: eui.Image
        private freeWordImage: eui.Image
        public static m_Instance: FreeGameIngPanel = null;
        // private animGroup: eui.Group
        public constructor() {
            super();
            this.skinName = new clsg_freeGameIng();
            this.InitCharacterDragon()

            this.LeftFreeCount = 2
        }
        public get LeftFreeCount() {
            return parseInt(this.freecountBLabel.text)
        }
        public set LeftFreeCount(count: number) {
            this.lastFreeImage.visible = count == 1
            this.freecountBLabel.visible = count != 1
            this.freeWordImage.visible = count != 1
            this.freecountBLabel.text = "" + count;
            
        }
        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new FreeGameIngPanel();
            return this.m_Instance;
        }
        public addUIListener() {

        }

        public removeUIListener() {

        }

        public destroy() {
            super.destroy();
            // this.destroyCharacterDragon()
            FreeGameIngPanel.m_Instance = null;
        }
        // public getAnimGroupGlobalPos() {
        //     return this.animGroup.localToGlobal(1, 1)
        // }

        // private mCharacterDragonObjectArr: { [key: number]: dragonBones.EgretArmatureDisplay } = {}
        public destroyCharacterDragon() {
            // for (let key in LabaConfig.FreeInCharacterDragons) {
            //     let dragonObj = this.mCharacterDragonObjectArr[key]
            //     if (dragonObj) {
            //         dragonObj.animation.stop()
            //         if (dragonObj.parent)
            //             dragonObj.parent.removeChild(dragonObj)
            //         dragonObj.dispose()
            //         dragonObj = null
            //     }
            // }
            // this.mCharacterDragonObjectArr = {}
        }
        // private mFinishCB: any = null
        private mCharacterState = {}


        // 百搭一个个加 如果中间满了就当前人物变成金色 然后旋转 在当前人物播放命中win   已经变成金色的放大
        // 百搭一个个加 如果中间没满 当前人物播放命中win   已经变成金色的放大
        // 百搭一个个加 没有百搭获取金色的放大
        public playGetWildAnim(dragonType: FreeInCharacterDragonType, waittime = 0, cb = null) {
            // this.mFinishCB = cb
            // this.mFinishCBDelay = waittime
            if(cb){
                cb()
            }
            // game.Timer.clearTimeout(this.mFinishCBDelayTimer)
            // switch (dragonType) {
            //     case FreeInCharacterDragonType.CHANGE_ROTATE:
            //         this.ChangeGoldDragon()
            //         break;
            //     case FreeInCharacterDragonType.WIN:
            //         this.GetWildDragon()
            //         break;
            //     case FreeInCharacterDragonType.SCALE:
            // this.ScaleDragon();
            //         break;
            // } 
        }
        // private mFinishCBDelayTimer: number = 0
        private mFinishCBDelay: number = 0
        private mFinishCB: Function = null
        // public GetWildDragon() {
        //     this.animGroup.addChild(this.mCharacterDragonObjectArr[this.FrontDragonType])
        //     let animInfo = LabaConfig.FreeInCharacterDragons[this.FrontDragonType]
        //     this.mCharacterDragonObjectArr[this.FrontDragonType].animation.stop()
        //     this.mCharacterDragonObjectArr[this.FrontDragonType].animation.play(animInfo.Win, 1)
        //     this.mCharacterDragonObjectArr[this.FrontDragonType].addEventListener(egret.Event.COMPLETE, this.DragonCompleteWin, this)
        // }
        // public ChangeGoldDragon() {
        //     //背景动画
        //     this.animGroup.addChild(this.mCharacterDragonObjectArr[this.FrontDragonType])
        //     let animInfo = LabaConfig.FreeInCharacterDragons[this.FrontDragonType]
        //     this.mCharacterDragonObjectArr[this.FrontDragonType].animation.stop()
        //     this.mCharacterDragonObjectArr[this.FrontDragonType].animation.play(animInfo.Change, 1)
        //     this.mCharacterDragonObjectArr[this.FrontDragonType].addEventListener(egret.Event.COMPLETE, this.DragonCompleteChange, this)
        //     this.mCharacterState[this.FrontDragonType] = true
        //     // this.Progress = 0
        // }
        public ScaleDragon() {

            // let scaleTweenArr = []
            // for (let key in this.mCharacterState) {
            //     if (this.mCharacterState[key] == true) {
            //         let animInfo = LabaConfig.FreeInCharacterDragons[key]
            //         let scaleTween = egret.Tween.get(this.mCharacterDragonObjectArr[key])
            //         scaleTween.to({ scaleX: animInfo.Down.s + 0.2, scaleY: animInfo.Down.s + 0.2 }, 500).wait(400)
            //         scaleTweenArr.push({ twHandler: scaleTween, scale: animInfo.Down.s })
            //     }
            //     // else {
            //     //     // this.alpha=0.4
            //     //     this.mCharacterDragonObjectArr[key].alpha = 0.4
            //     // }
            // }
            // if (scaleTweenArr.length != 0)
            //     for (let key in this.mCharacterState) {
            //         if (this.mCharacterState[key] != true) {
            //             this.mCharacterDragonObjectArr[key].alpha = 0.4
            //         }
            //     }
            // if (scaleTweenArr.length == 0) {
                if (this.mFinishCB) {
                    // if (this.mFinishCBDelay != 0)
                    //     this.mFinishCBDelayTimer = game.Timer.setTimeout(() => { this.mFinishCB() }, null, this.mFinishCBDelay)
                    // else
                        this.mFinishCB()
                }
            // } 
            // else {
            //     scaleTweenArr[0].twHandler.call(() => {

            //         if (this.mFinishCB) {
            //             this.mFinishCB()
            //         }
            //     })
            //     for (let tw of scaleTweenArr) {
            //         tw.twHandler.wait(this.mFinishCBDelay).to({ scaleX: tw.scale, scaleY: tw.scale }, 500).call(() => {
            //             for (let key in this.mCharacterDragonObjectArr) {
            //                 this.mCharacterDragonObjectArr[key].alpha = 1
            //             }
            //         })
            //     }
            // }
        }
        public RotateDragon(Init: boolean = false) {
            // if (!Init)
            //     this.FrontDragonType = (this.FrontDragonType + 1) % 4
            // let pos = [Direct.down, Direct.right, Direct.up, Direct.left]
            // this.animGroup.addChild(this.mCharacterDragonObjectArr[(this.FrontDragonType + 2) % 4])
            // this.animGroup.addChild(this.mCharacterDragonObjectArr[(this.FrontDragonType + 1) % 4])
            // this.animGroup.addChild(this.mCharacterDragonObjectArr[(this.FrontDragonType + 3) % 4])
            // let characterIndex = [this.FrontDragonType, (this.FrontDragonType + 1) % 4, (this.FrontDragonType + 2) % 4, (this.FrontDragonType + 3) % 4]
            // for (let i = 0; i < 4; i++) {
            //     if (this.mCharacterDragonObjectArr[characterIndex[i]]) {
            //         this.mCharacterDragonObjectArr[characterIndex[i]].x = this.mCharacterPosOffset[characterIndex[i]][pos[i]].x
            //         this.mCharacterDragonObjectArr[characterIndex[i]].y = this.mCharacterPosOffset[characterIndex[i]][pos[i]].y
            //     }
            // }
            // this.animGroup.addChild(this.baiImage)
            // this.animGroup.addChild(this.huangImage)
            // this.animGroup.addChild(this.baiImage0)

            // this.animGroup.addChild(this.mCharacterDragonObjectArr[this.FrontDragonType])

            // if (this.mFinishCB) {
            //     if (this.mFinishCBDelay != 0)
            //         this.mFinishCBDelayTimer = game.Timer.setTimeout(this.mFinishCB, this, this.mFinishCBDelay)
            //     else
                    // this.mFinishCB()
            // }
        }
        private addTween: egret.tween.TweenGroup;
        public addFreeCountTween() {
            // egret.Tween.get()
            
        }

        private mFrontDragonType: FreeInCharacter
        public get FrontDragonType() {
            return this.mFrontDragonType
        }
        public set FrontDragonType(value: number) {
            this.mFrontDragonType = value
        }
        // public mWinNextToScaleTimerDelay: number = 0
        public DragonCompleteWin(e: egret.Event) {
            // let animInfo = LabaConfig.FreeInCharacterDragons[this.mFrontDragonType]
            // e.target.removeEventListener(egret.Event.COMPLETE, this.DragonCompleteWin, this)
            // e.target.animation.stop()
            // e.target.animation.play(animInfo.Normal, 0)
            // game.Timer.clearTimeout(this.mWinNextToScaleTimerDelay)
            // this.mWinNextToScaleTimerDelay = game.Timer.setTimeout(() => {
                // this.ScaleDragon()
            // }, null, 600)
        }
        public DragonCompleteChange(e: egret.Event) {
            // let animInfo = LabaConfig.FreeInCharacterDragons[this.mFrontDragonType]
            // e.target.removeEventListener(egret.Event.COMPLETE, this.DragonCompleteChange, this)
            // e.target.animation.stop()
            // e.target.animation.play(animInfo.Gold, 0)
            // egret.Tween.get(this.addImage_active).set({ alpha: 1, scaleX: 1, scaleY: 1, x: 208, y: 22 })
            //     .to({ x: 344, y: 149, alpha: 0 }, 800).call(() => {
            //         this.LeftFreeCount = this.LeftFreeCount + 2
            //         if (this.mProgressValue < 12)
            //             this.RotateDragon()
            //         else {
            //             if (this.mFinishCB) {
            //                 if (this.mFinishCBDelay != 0)
            //                     this.mFinishCBDelayTimer = game.Timer.setTimeout(this.mFinishCB, this, this.mFinishCBDelay)
            //                 else
            //                     this.mFinishCB()
            //             }
            //         }
            //     })

        }
        public clearLastAnim() {
            // game.Timer.clearTimeout(this.mFinishCBDelayTimer)
            // game.Timer.clearTimeout(this.mWinNextToScaleTimerDelay)
            // egret.Tween.removeTweens(this.addImage_active)
            // for()
        }
        private mCharacterPosOffset = {}
        public ResetCharacterDragon() {
            this.FrontDragonType = 0
            this.mCharacterState = {}
            this.ProgressValue = 0
            this.Progress = 0
            this.LeftFreeCount = 8
            this.mFinishCB = null
            // this.mFinishCBDelay = 0
            // game.Timer.clearTimeout(this.mFinishCBDelayTimer)
            // game.Timer.clearTimeout(this.mWinNextToScaleTimerDelay)

            // for (let key in this.mCharacterDragonObjectArr) {
            //     let animInfo = LabaConfig.FreeInCharacterDragons[key]
            //     let obj = this.mCharacterDragonObjectArr[key]
            //     obj.removeEventListener(egret.Event.COMPLETE, this.DragonCompleteChange, this)
            //     obj.removeEventListener(egret.Event.COMPLETE, this.DragonCompleteWin, this)
            //     obj.animation.stop()
            //     obj.animation.play(animInfo.Normal, 0)
            //     this.mCharacterState[key] = false
            //     egret.Tween.removeTweens(obj)
            // }
            // this.RotateDragon(true)
            // this.animGroup.addChild(this.mCharacterDragonObjectArr[this.FrontDragonType])
        }
        public InitCharacterDragon() {
            // [Direct.down, Direct.right, Direct.up, Direct.left]
            // for (let i = FreeInCharacter.Monk; i <= FreeInCharacter.Sandy; i++) {
            //     this.mCharacterPosOffset[i] = {}
            //     let animinfo = LabaConfig.FreeInCharacterDragons[i]
            //     this.mCharacterPosOffset[i][Direct.down] = { x: animinfo.Down.x, y: animinfo.Down.y }
            //     this.mCharacterPosOffset[i][Direct.up] = { x: animinfo.Up.x, y: animinfo.Up.y }
            //     this.mCharacterPosOffset[i][Direct.left] = { x: animinfo.Left.x, y: animinfo.Left.y }
            //     this.mCharacterPosOffset[i][Direct.right] = { x: animinfo.Right.x, y: animinfo.Right.y }
            // }

            // for (let key in LabaConfig.FreeInCharacterDragons) {
            //     let animInfo = LabaConfig.FreeInCharacterDragons[key]
            //     let animDragon = uniLib.DragonUtils.createDragonBoneAnimation(animInfo.Path)
            //     animDragon.scaleX = animInfo.Down.s
            //     animDragon.scaleY = animInfo.Down.s
            //     animDragon.anchorOffsetX = animDragon.width / 2
            //     animDragon.anchorOffsetY = animDragon.height / 2
            //     // this.animGroup.addChild(animDragon)
            //     this.mCharacterDragonObjectArr[key] = animDragon
            // }
            this.ResetCharacterDragon()
        }
        // baiImage0
        private mProgressValue: number
        public set Progress(value: number) {
            // if (!this.progressAnim) {
            //     this.progressAnim = labalib.Utils.PlayMovieAnimInfo(this.progressGroup, LabaConfig.FreeInProgressEffect);
            //     this.progressAnim.blendMode = "add"
            //     // this.blendMode
            // }
            // let imagesrc = ["bonus_gem_bar_1", "bonus_gem_bar_1", "bonus_gem_bar_2", "bonus_gem_bar_full"]
            // let iamgewild = [0, 120, 250, 358]
            // let animWild = [0, 86, 215, 340]
            // if (value == 0) {
            //     // this.progressAnim.visible = false
            //     this.progressImage.visible = false
            //     this.progressAnim.x = animWild[value]
            //     this.progressImage.width = iamgewild[value]
            //     return
            // }
            // this.progressImage.source = imagesrc[value]
            // this.progressAnim.visible = false
            // this.progressImage.visible = true
            // egret.Tween.get(this.progressImage).to({ width: iamgewild[value] }, 300).call(
            //     () => {
            //         this.progressAnim.visible = true
            //         this.progressAnim.x = animWild[value]
            //     }
            // )
            // this.progressImage.width = iamgewild[value]
            // this.progressAnim.x = animWild[value]
        }
        public set ProgressValue(value: number) {
            this.mProgressValue = value
        }
        public get ProgressValue() {
            return this.mProgressValue
        }
        public get Progress() {
            let valueCover = [0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
            if (this.mProgressValue > 12)
                return this.mProgressValue
            return valueCover[this.mProgressValue]
        }
        // private progressAnim: any
        // public getWildFlyPos() {
        //     // return this.progressGroup.localToGlobal(this.progressGroup.width / 2, this.progressGroup.height / 2)
        // }
    }
}