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
        public ScaleDragon() {

                if (this.mFinishCB) {
                        this.mFinishCB()
                }
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
        public DragonCompleteWin(e: egret.Event) {
        }
        public DragonCompleteChange(e: egret.Event) {
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
        }
        public InitCharacterDragon() {
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