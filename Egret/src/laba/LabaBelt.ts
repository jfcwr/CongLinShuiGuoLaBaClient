
module conglinshuiguo {
    export enum ScrollType {
        UpScroll = 1,
        DownScroll = 2
    }

    // 3个夺宝停下来播win动画
    // 只要中奖都要播放背景动画 一次(跳线这重新播放)
    // 变化图标不播放背景  仅在划线的时候播放背景
    export class AwardScrollIcon extends game.BaseUI {
        constructor() {
            super()
            this.skinName = new clsg_winscrolliconkin()
            this.anchorOffsetX = 142 / 2
            this.anchorOffsetY = 142 / 2
            this.kuangDragon1 = uniLib.DragonUtils.createDragonBoneAnimation("icon_gx")
            this.bgGroup.addChild(this.kuangDragon1)
            // this.kuangDragon2 = uniLib.DragonUtils.createDragonBoneAnimation("icon_gx")
            // this.addChild(this.kuangDragon2)
            this.kuangDragon1.x = 66
            this.kuangDragon1.y = 66
            this.touchEnabled = false;
            // this.kuangDragon2.x = 66
            // this.kuangDragon2.y = 66
        }

        private kuangDragon1 = null
        // private kuangDragon2 = null
        destroy(): void {
            super.destroy();
            this.StopAnimation()
            if (this.kuangDragon1) {
                this.kuangDragon1.animation.stop()
                if (this.kuangDragon1.parent)
                    this.kuangDragon1.parent.removeChild(this.kuangDragon1)
                this.kuangDragon1.dispose()
                this.kuangDragon1 = null
            }
            // if (this.kuangDragon2) {
            //     this.kuangDragon2.animation.stop()
            //     if (this.kuangDragon2.parent)
            //         this.kuangDragon2.parent.removeChild(this.kuangDragon2)
            //     this.kuangDragon2.dispose()
            //     this.kuangDragon2 = null
            // }
        }
        public addUIListener() {

        }
        public removeUIListener() {

        }


        // private scaleAnim: egret.tween.TweenGroup

        // 背景光可旋转
        private animGroup: eui.Group
        protected mAllScale: number = 1;
        private elemImage: eui.Image
        private bgGroup: eui.Group
        protected mElemType: number = 0;



        public Animation_Bright(finishCB?: Function, params?: any) {
            this["mBright"] = 1;
            let periodTm: number = 1000;
            let minBright: number = 0.5;
            let maxBright: number = 1.5;
            let curBright: number = 1;
            let isPlayOnce = params ? params.once : false
            //this.filters = [this.mColorMatrixFilter];
            if (!isPlayOnce)
                egret.Tween.get(this, { loop: true }).to({ "Bright": maxBright }, ((maxBright - curBright) / (maxBright - minBright)) * 0.5 * periodTm)
                    .to({ "Bright": minBright }, periodTm / 2)
                    .to({ "Bright": curBright }, ((curBright - minBright) / (maxBright - minBright) * 0.5 * periodTm)).call(() => {
                        if (isPlayOnce == false) {
                            isPlayOnce = true;
                            if (finishCB) finishCB();
                        }
                    });
            else
                egret.Tween.get(this, ).to({ "Bright": maxBright }, ((maxBright - curBright) / (maxBright - minBright)) * 0.5 * periodTm)
                    .to({ "Bright": minBright }, periodTm / 2)
                    .to({ "Bright": curBright }, ((curBright - minBright) / (maxBright - minBright) * 0.5 * periodTm)).call(() => {
                        if (finishCB) finishCB();
                    });
        }
        private backgroundLight: dragonBones.EgretArmatureDisplay = null;
        /**
         * 背景光
         */
        public bgMov() {
            this.backgroundLight = uniLib.DragonUtils.createDragonBoneAnimation("icon_gx")
            this.backgroundLight.x = 64;
            this.backgroundLight.y = 60;
            this.backgroundLight.touchEnabled = false;

            this.backgroundLight.animation.play(null, 0)
            // this.backgroundLight.blendMode = egret.BlendMode.ADD;
            this.bgGroup.addChild(this.backgroundLight)
        }

        public Animation_Scale(target, finishCB?: Function, params?: any) {
            let periodTm: number = params && params.periodTm ? params.periodTm : 1000;
            let minScale: number = params && params.minScale ? params.minScale : 0.8;
            let maxScale: number = params && params.maxScale ? params.maxScale : 1.05;
            let curScale: number = params && params.curScale ? params.curScale : 1.0;
            egret.Tween.get(target).to({ scaleX: maxScale, scaleY: maxScale }, ((maxScale - curScale) / (maxScale - minScale)) * 0.5 * periodTm)
                .to({ scaleX: minScale, scaleY: minScale }, periodTm / 2)
                .to({ scaleX: curScale, scaleY: curScale }, ((curScale - minScale) / (maxScale - minScale) * 0.5 * periodTm)).call(() => {
                    if (finishCB)
                        finishCB();
                });


        }
        private mAnimObject: dragonBones.EgretArmatureDisplay
        public Animation_dragon(winElemID: number, finishCB?: Function, params?: any) {
            let specialWild = params && params.changeAnim ? true : false
            let animName = params && params.name ? params.name : null

            let animInfo = specialWild ? DataCenter.Instance.getSpecialElementAnimInfo(winElemID) : DataCenter.Instance.getElementAnimInfo(winElemID)
            this.mAnimObject = uniLib.DragonUtils.createDragonBoneAnimation(animInfo.Path)
            if (winElemID == 9)
                animName = "win"
            this.mAnimObject.animation.play(null, 0)
            this.mAnimObject.scaleX = animInfo.Scale
            this.mAnimObject.scaleY = animInfo.Scale
            this.mAnimObject.touchEnabled = false;
            this.animGroup.addChild(this.mAnimObject)
            if (specialWild) {
                egret.Tween.get(this.mAnimObject).set({ scaleX: 0.2, scaleY: 0.2 }).to({ scaleX: animInfo.Scale + 0.1, scaleY: animInfo.Scale + 0.1 }, 400)
                    .set({ scaleX: animInfo.Scale, scaleY: animInfo.Scale })
                // this.Animation_Scale(this.mAnimObject, null, { minScale: 0.2, maxScale: animInfo.Scale, curScale: animInfo.Scale, periodTm: 200 })
            }
        }
        public Animation_Dragon(animInfo, animName = null, times = 0) {
            if (animInfo.Path == "s_wild") {
                SoundHand.Instance.playBaiDaSound();
            }
            this.mAnimObject = uniLib.DragonUtils.createDragonBoneAnimation(animInfo.Path)
            this.mAnimObject.animation.play(animName, times)
            this.mAnimObject.scaleX = animInfo.Scale
            this.mAnimObject.touchEnabled = false;
            this.mAnimObject.scaleY = animInfo.Scale
            this.animGroup.addChild(this.mAnimObject)
        }

        // private bg4: eui.Image


        // private duobaoScale: egret.tween.TweenGroup
        // private changeScale: egret.tween.TweenGroup
        // 
        private isSpecial: boolean
        public set Special(is: boolean) {
            this.isSpecial = is
        }
        public get Special() {
            return this.isSpecial
        }
        public PlayChangeAnimation(winElemID: number, finishCB?: Function, params?: any) {
            this.Special = true
            let animInfo = DataCenter.Instance.getSpecialElementAnimInfo(winElemID)
            this.bgGroup.visible = false
            this.elemImage.visible = false

            if (this.mAnimObject != null) {
                this.mAnimObject.animation.play(null, 0)
                return
            }
            // labalib.Utils.PlayTweenGroup(this.changeScale, 1)
            this.Animation_Dragon(animInfo, null, 0)
            egret.Tween.get(this.mAnimObject).set({ scaleX: 0.2, scaleY: 0.2 })
                .to({ scaleX: animInfo.Scale + 0.1, scaleY: animInfo.Scale + 0.1 }, 400)
                .set({ scaleX: animInfo.Scale, scaleY: animInfo.Scale })
        }
        private elemImageBg:eui.Image;
        /**
         * 免费滑动
         */
        public PlayfreeSlide(winElemID: number[],sizeIndex:boolean = false) {
            this.elemImageBg.visible = true;
            this.elemImage.visible = true;
            let index = 0;
            if(sizeIndex){
                this.elemImageBg.source = "free_frame_a";
            }
            this.elemImage.source = "elem"+winElemID[index]+"_b";
            egret.Tween.get(this.elemImage,{loop:true}).set({ alpha:0.2 }).to({ alpha:1 }, 150).to({ alpha:0.2 }, 150).call(() => {
                index++;
                if(index>winElemID.length){
                    index = 0;
                }
                this.elemImage.source = "elem"+winElemID[index]+"_b";
            });
        }
        /**
         * 免费滑动停止
         */
        public freeSlideStop(winElemID: number) {
            this.elemImageBg.visible = false;
            this.elemImage.visible = false;
            this.elemImage.alpha = 1;
            egret.Tween.removeTweens(this.elemImage)
        }

        // private duobaoglow: eui.Image
        // private duobaoglow0: eui.Image
        public PlayDefautAnimation(winElemID: number, finishCB?: Function, params?: any) {
            let animInfo = DataCenter.Instance.getElementAnimInfo(winElemID)
            this.bgGroup.visible = false
            // this.kuangDragon2.visible = false
            // this.changeImage.visible = false
            this.elemImage.visible = false
            if (this.mAnimObject != null) {
                this.mAnimObject.animation.play(null, 0)
                return
            }
            // if (winElemID == CLSG_ElemAllType.DuoBao) {
            //     this.duobaoglow0.visible = true
            //     this.duobaoglow.visible = true
            //     // labalib.Utils.PlayTweenGroup(this.duobaoScale, 1)
            // }
            this.Animation_Dragon(animInfo, null, 0)

        }
        public set BGGroup(visible: boolean) {
            this.bgGroup.visible = visible
            // this.kuangDragon2.visible = visible
        }
        // private changeImage: eui.Image
        public PlayWinAnimation(winElemID: number, finishCB?: Function, params?: any) {
            let animName = null
            // this.changeImage.visible = false
            // this.duobaoglow0.visible = false
            // this.duobaoglow.visible = false
            let animInfo = DataCenter.Instance.getElementAnimInfo(winElemID)
            // if (winElemID == CLSG_ElemAllType.Wild || winElemID == CLSG_ElemAllType.DuoBao) {
            //     animName = "win"
            // }
            if (winElemID != CLSG_ElemAllType.DuoBao && winElemID != CLSG_ElemAllType.Wild) {
                this.bgGroup.visible = true
                // this.kuangDragon2.visible = true
                this.kuangDragon1.animation.play(null, 0)
                // this.kuangDragon2.animation.play(null, 1)
                // labalib.Utils.PlayTweenGroup(this.scaleAnim, 1)
            }
            // if (winElemID < CLSG_ElemAllType.ShaSeng) {
            //     this.elemImage.visible = true
            //     this.elemImage.texture = DataCenter.Instance.getElementTexture(winElemID);
            //     egret.Tween.get(this.elemImage).set({ scaleX: 0.9, scaleY: 0.9 }).to({ scaleX: 1 + 0.1, scaleY: 1 + 0.1 }, 300)
            //         .set({ scaleX: 1, scaleY: 1 })
            //     return
            // }
            // else {
            this.elemImage.visible = false
            // this.mAnimObject.blendMode="add"
            if (this.mAnimObject != null) {
                if (this.isSpecial)
                    return
                this.mAnimObject.animation.play(animName, 0)
                return
            }
            this.Animation_Dragon(animInfo, animName, 0)
            // }




        }


        /**
         * 停止播放动画;
         */
        public StopAnimation() {
            egret.Tween.removeTweens(this.elemImage)
            this.elemImage.visible = false
            this.bgGroup.visible = false
            // this.kuangDragon2.visible = false
            this.isSpecial = false
            // this.duobaoglow.visible = false
            // this.duobaoglow0.visible = false
            if (this.mAnimObject != null) {
                egret.Tween.removeTweens(this.mAnimObject)
                this.mAnimObject.animation.stop();
                this.mAnimObject.dispose();
                if (this.mAnimObject.parent) {
                    this.mAnimObject.parent.removeChild(this.mAnimObject)
                }
                this.mAnimObject = null
            }
            if (this.backgroundLight != null) {
                this.backgroundLight.animation.stop();
                if (this.backgroundLight.parent) {
                    this.backgroundLight.parent.removeChild(this.backgroundLight)
                }
                this.backgroundLight.dispose();
                this.backgroundLight = null
            }
        }


    }

    export class LabaBelt extends labalib.LabaBelt {
        constructor(group: eui.Group, beltIndex: number, beltIconCount: number = 7, scrollIconClass = labalib.ScrollIcon) {
            super(group, beltIndex, beltIconCount, scrollIconClass);
            for (let icon of this.mIcons) {
                if (icon.parent) {
                    // icon.parent.touchChildren = false
                    // icon.parent.touchEnabled = false
                    let rect = new eui.Rect(icon.parent.width, icon.parent.height)
                    rect.alpha = 0
                    icon.touchEnabled = false
                    // icon.touchChildren = false
                    icon.parent.addChild(rect)
                    rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShowIconInfo, this);
                }
            }
            group.touchEnabled = false

        }
        public onClickShowIconInfo(e: egret.TouchEvent) {
            let scrollicon = e.target.parent.getChildAt(0) as labalib.ScrollIcon
            MutiTipsIcon.Instance.showIcon(this.mBeltIndex, scrollicon.localToGlobal(scrollicon.width / 2, scrollicon.height / 2), scrollicon.ElemType)
        }
        public SetScrollData(datas: Array<number>, totalTime: number, scrollToIndex?: number, scrollFromToIndex?: number): void {
            super.SetScrollData(datas, totalTime, scrollToIndex, scrollFromToIndex);
        }
        public StartEx_Normal() {
            this.clearLastGameAnim()
            this.clearLastGameParam()
            // for (let item of this.mIcons) {
            //     item.Blur = true
            // }
            this.BeltScrollType = ScrollType.DownScroll
            this.StartImplEx()
        }

        public StartImplEx(cb: Function = null) {
            // let timeScale = DataCenter.Instance.ScrollTimeScale
            // if (this.BeltScrollType == ScrollType.DownScroll)
            //     egret.Tween.get(this.mGroup, { onChange: this.ScrollUpdateChange, onChangeObj: this, loop: true })
            //         .to({ y: 0 }, 250 * timeScale)

            let timeScale = DataCenter.Instance.ScrollTimeScale
            let waittime = [0, 100 * timeScale, 100 * timeScale * 2, 100 * timeScale * 3, 100 * timeScale * 4]
            // let 
            if (!DataCenter.Instance.IsQuickRotate||LabaGame.Instance.isFreeGame)
                egret.Tween.get(this.mGroup).wait(waittime[this.mBeltIndex - 1]).to({ y: -684 - 40 }, 200 * timeScale).to({ y: -684 }, 250 / 684 * 40 * timeScale).call(() => {
                    egret.Tween.removeTweens(this.mGroup)
                    for (let item of this.mIcons) {
                        item.Blur = true
                    }
                    egret.Tween.get(this.mGroup, { onChange: this.ScrollUpdateChange, onChangeObj: this, loop: true })
                        .to({ y: 0 }, 200 * timeScale)
                })
            else {
                egret.Tween.get(this.mGroup, { onChange: this.ScrollUpdateChange, onChangeObj: this, loop: true })
                    .to({ y: 0 }, 200 * timeScale)
            }
            // else if (this.BeltScrollType == ScrollType.UpScroll)
            //     egret.Tween.get(this.mGroup).wait(this.mBeltIndex * 50).to({ y: -684 - 60 }, 200).to({ y: -684 }, 250 / 684 * 60).call(() => {
            //         egret.Tween.removeTweens(this.mGroup)
            //         egret.Tween.get(this.mGroup, { onChange: this.ScrollUpdateChange, onChangeObj: this, loop: true })
            //             .to({ y: 0 }, 250)
            //     })
        }
        public isHighRotate: number = null
        public mScrollInfoExt: any = null
        // private mGroupTweenHandler: egret.Tween
        /**
         * 准备数据滚动
         */
        public ReadyScrollData(): boolean {
            if (this.mScrollInfoList.length == 0) {
                return false;
            }
            // egret.Tween.pauseTweens(this.mGroup)
            egret.Tween.removeTweens(this.mGroup)

            console.log("testddddsw scrolldata111111 mBeltIndex :", this.mBeltIndex, " col", this.mBeltSrcollDatas[this.mCurBeltSrcollDataIndex], this.mBeltSrcollDatas[this.mCurBeltSrcollDataIndex + 1], this.mBeltSrcollDatas[this.mCurBeltSrcollDataIndex + 2])
            console.log("testddddsw scrolldata111111 ", JSON.stringify(this.mBeltSrcollDatas), this.mCurBeltSrcollDataIndex)
            if (this.mBeltSrcollDatas.length > 0) {
                this.resetBeltPos()
                this.mGroup.y = -684
            }





            this.mScrollInfoExt = this.mScrollInfoList.splice(0, 1)
            this.BeltScrollType = this.mScrollInfoExt[0].beltScrollType
            this.mResultType = this.mScrollInfoExt[0].resultType
            let scrollItemCount = this.mScrollInfoExt[0].realScrollItem
            let scrollSpeed = this.mScrollInfoExt[0].speed ? this.mScrollInfoExt[0].speed : 250

            let result = DataCenter.Instance.getResultDatas()
            let cols = [result[0][this.mBeltIndex - 1], result[1][this.mBeltIndex - 1], result[2][this.mBeltIndex - 1]]
            // let cols = [1, 1, 1]


            this.mCurBeltSrcollDataIndex = 0
            this.mLastBeltScrollDataIndex = 0
            this.mOffsetIndex = 0
            this.mBeltSrcollDatas.clear()
            // this.RealStart = true

            // // let index = 0
            // // let testdata = [[1, 2, 3, 4, 5, 6, 7],
            // // [2, 3, 4, 5, 6, 7, 1],
            // // [3, 4, 5, 6, 7, 1, 2],
            // // [4, 5, 6, 7, 1, 2, 3],
            // // [5, 6, 7, 1, 2, 3, 4]]
            // if (this.mScrollInfoList.length == 0 && this.isHighRotate) {
            //     let count = 0
            //     for (let item of this.mIcons) {
            //         this.mBeltSrcollDatas.push(item.ElemType)
            //         count++
            //         if (count > 2)
            //             break
            //     }
            // }
            // else
            //     for (let item of this.mIcons) {
            //         this.mBeltSrcollDatas.push(item.ElemType)
            //     }
            console.log("testddddsw scrolldata111111 ", JSON.stringify(this.mBeltSrcollDatas), this.mCurBeltSrcollDataIndex)

            for (let i = 0; i < 3; i++) {
                this.mBeltSrcollDatas.push(this.mIcons[i].ElemType)
            }

            for (let i = 0; i < scrollItemCount; i++) {
                this.mBeltSrcollDatas.push(this.GenerateRandomElem())
            }
            if (this.mScrollInfoList.length == 0)
                for (let i = 0; i < 3; i++) {
                    this.mBeltSrcollDatas.push(cols[i])
                }

            console.log("testddddsw scrolldata ", JSON.stringify(this.mBeltSrcollDatas), this.mCurBeltSrcollDataIndex)
            this.resetBeltPos()




            this.RealScrollItem = this.mBeltSrcollDatas.length


            let waittime = 1000

            if (this.mScrollInfoList.length == 1 && this.isHighRotate) {
                for (let icon of this.mIcons) {
                    icon.Blur = false
                }
                if (!LabaGame.Instance.playJiaSu) {
                    LabaGame.Instance.playJiaSu = true;
                    LabaGame.Instance.SetHighAnim(true, this.isHighRotate)
                }
            }
            egret.Tween.get(this.mGroup, { onChange: this.ScrollUpdateChange, onChangeObj: this, loop: true })
                .to({ y: 0 }, scrollSpeed)


            return true;
        }
        public resetBeltPos() {
            for (let i = 0; i < this.mIcons.length; i++) {
                if (this.mCurBeltSrcollDataIndex + i < this.mBeltSrcollDatas.length)
                    this.mIcons[i].ElemType = this.mBeltSrcollDatas[this.mCurBeltSrcollDataIndex + i]
            }
            this.mGroup.y = -684
        }
        /**
         * 添加带子每一段滚动的数据,通过调用多次AddScrollData实现滚动多次...;
         */
        public AddScrollData(scrollinfo: any) {
            this.mScrollInfoList.push({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: scrollinfo.realScrollItem, speed: scrollinfo.speed });
        }
        public StopEx() {
            SoundHand.Instance.playHuaDongStopSound()
            SoundHand.Instance.stopSlowStopSound();

            // LabaGame.Instance.playWildDuobaoElemDefaultEffect();


            egret.Tween.removeTweens(this.mGroup)

            for (let item of this.mIcons) {
                item.Blur = false
                item.ElemType = item.ElemType
            }
            labalib.EventManager.Instance.dispatchEvent(labalib.LabaBaseEvent.BeltRotateEndEx, {
                "beltIndex": this.mBeltIndex,
                "speed": 10,
                "stageIndex": 1,
                "stageRevertIndex": 1
            });
            if (this.mBeltSrcollDatas.length > 0) {
                this.resetBeltPos()
            }
            //  return
            DataCenter.Instance.SetBeltStatus(true, this.mBeltIndex - 1);
            // DataCenter.Instance.CurServerResultDatas
            // if (this.isHighRotate) {
            //     for (let item of DataCenter.Instance.CurServerResultDatas.itemIdList[this.isHighRotate]) {
            //         if (item == 8) {
            //             console.error("夺宝音效")
            //             SoundHand.Instance.playDuoBaoStopSound();
            //             break;
            //         }
            //     }
            // }
            if(LabaGame.Instance.freeIconBg.length>=1){
                for(let j = 0;j<3;++j){
                    if(LabaGame.Instance.freeIconBg[this.mBeltIndex - 1][2-j] == 1){
                        let icon = LabaGame.Instance.mAwardScrollIcon[j][this.mBeltIndex - 1]
                        LabaGame.Instance.winElemAnimGroup.addChild(icon)
                        icon.freeSlideStop(2)
                    }
                }
            }
            for (let i = 0; i < this.mIcons.length; i++) {
                if (i >= 3) {
                    this.mIcons[i].ElemType = MathUtil.random(1,7);
                }
                else{
                    if(this.mIcons[i].ElemType == 8){
                        SoundHand.Instance.playDuoBaoStopSound();
                    }

                }
            }


            
            if (this.mScrollInfoList.length == 0 && this.isHighRotate) {
                if (this.isHighRotate == 4) {
                    LabaGame.Instance.SetHighAnim(false)
                    LabaGame.Instance.playJiaSu = true;
                }
                else {
                    LabaGame.Instance.SetHighAnim(true, this.isHighRotate + 1)
                }

            }
        }

        /**
         * 获取指定位置元素 
         * 1:代表拼盘最下面的一行
         * 3:代表拼盘最上面的一行
         */
        public GetElementByIndex(index: number): any {
            return this.mIcons[3 - index]
        }
        public clearLastGameParam() {

            if (this.mBeltSrcollDatas.length > 0) {
                this.resetBeltPos()
            }
            this.mCurBeltSrcollDataIndex = 0
            this.mLastBeltScrollDataIndex = 0
            this.mOffsetIndex = 0
            this.mBeltSrcollDatas.clear()
            this.RealStart = false

            for (let item of this.mIcons) {
                this.mBeltSrcollDatas.push(item.ElemType)
            }
        }
        public Max_BeltSrcollDatas: number = 100
        public mBeltSrcollDatas = []
        public mCurBeltSrcollDataIndex = 0
        public mLastBeltScrollDataIndex = 0
        public mResultType: CLSG_ResultType
        public GenerateRandomElem() {
            if (this.mResultType == CLSG_ResultType.FREEIN || this.mResultType == CLSG_ResultType.REROTATEIN) {
                return Math.randomInteger(CLSG_ElemAllType.J, CLSG_ElemAllType.SunWuKong)
            }
            if (this.mBeltIndex == 1 || this.mBeltIndex == 5)
                return Math.randomInteger(CLSG_ElemAllType.J, CLSG_ElemAllType.SunWuKong)
            return Math.randomInteger(CLSG_ElemAllType.J, CLSG_ElemAllType.SunWuKong)
        }
        public mBeltScrollType: ScrollType
        public set BeltScrollType(scrollType: ScrollType) {
            this.mBeltScrollType = scrollType
        }
        public get BeltScrollType() {
            return this.mBeltScrollType
        }
        public mScrollFactor: number = 0



        public mRealStart: boolean
        public set RealStart(status: boolean) {
            this.mRealStart = status
        }
        public get RealStart() {
            return this.mRealStart
        }
        public mRealScrollItem: number
        public set RealScrollItem(num: number) {
            this.mRealScrollItem = num
        }
        public mOffsetIndex = 0

        public mLenth = 0
        public ScrollUpdateChange() {


            // this. 滚4挺5
            let nGroupY = this.mGroup.y;
            let temp = Math.floor((nGroupY + 684) / 171)
            if (this.mLastBeltScrollDataIndex != temp) {
                this.mCurBeltSrcollDataIndex++
                if (this.RealStart && this.mCurBeltSrcollDataIndex == (this.mRealScrollItem - 3)) {
                    egret.Tween.removeTweens(this.mGroup)
                    this.mGroup.y = -684 + temp * 171
                    if (!this.ReadyScrollData()) {
                        for (let item of this.mIcons) {
                            item.Blur = false
                            item.ElemType = item.ElemType
                        }
                        if (!DataCenter.Instance.IsQuickRotate || (DataCenter.Instance.IsTriggerCurFreeGame() || DataCenter.Instance.IsTriggerRerotateGame())) {
                            if (this.mScrollInfoExt && this.mScrollInfoExt.back)
                                egret.Tween.get(this.mGroup).to({ y: this.mGroup.y + 40 }, 150).to({ y: this.mGroup.y }, 200).call(
                                    () => {
                                        this.StopEx()
                                    }
                                )
                            else
                                this.StopEx()
                            return
                        }
                        this.StopEx()
                    }
                    return
                }
            }

            this.mLastBeltScrollDataIndex = temp
            if (this.mGroup.y == 0) {
                this.mGroup.y = -684
                if (!this.RealStart) {
                    this.mBeltSrcollDatas.push(this.GenerateRandomElem())
                    this.mBeltSrcollDatas.push(this.GenerateRandomElem())
                    this.mBeltSrcollDatas.push(this.GenerateRandomElem())
                    this.mBeltSrcollDatas.push(this.GenerateRandomElem())
                }
                for (let i = 0; i < this.mIcons.length; i++) {
                    let scrollIcon = this.mIcons[i]
                    if (this.mCurBeltSrcollDataIndex + i < this.mBeltSrcollDatas.length) {
                        scrollIcon.ElemType = this.mBeltSrcollDatas[this.mCurBeltSrcollDataIndex + i]
                    }
                }

                this.mCurBeltSrcollDataIndex--
            }



        }


        public clearLastGameAnim() {
            //显示以前的元素;
            for (let i: number = 0; i < this.mIcons.length; i++) {
                this.mIcons[i].visible = true;
                this.mIcons[i].StopAnimation();
                this.mIcons[i].visible = true
                if (this.mNeedScaleWhenAnim)
                    this.mIcons[i].Scale = this.mDefaultIconScale;
            }


        }
        public fastStop() {
            this.mScrollInfoList.clear()
            egret.Tween.removeTweens(this.mGroup)

            for (let item of this.mIcons) {
                item.Blur = false
                item.ElemType = item.ElemType
            }

            let result = DataCenter.Instance.getResultDatas()
            let cols = [result[0][this.mBeltIndex - 1], result[1][this.mBeltIndex - 1], result[2][this.mBeltIndex - 1]]

            this.mCurBeltSrcollDataIndex = 0
            this.mLastBeltScrollDataIndex = 0
            this.mOffsetIndex = 0
            this.mBeltSrcollDatas.clear()
            if (this.mScrollInfoList.length == 0)
                for (let i = 0; i < 3; i++) {
                    this.mBeltSrcollDatas.push(cols[i])
                }
            this.resetBeltPos()
            DataCenter.Instance.SetBeltStatus(true, this.mBeltIndex - 1)
            if (this.mScrollInfoList.length == 0 && this.isHighRotate) {
                if (this.isHighRotate == 4) {

                    LabaGame.Instance.SetHighAnim(false)
                }
                else {
                    LabaGame.Instance.SetHighAnim(true, this.isHighRotate)
                }

            }
            labalib.EventManager.Instance.dispatchEvent(labalib.LabaBaseEvent.BeltRotateEndEx, {
                "beltIndex": this.mBeltIndex,
                "speed": 10,
                "stageIndex": 1,
                "stageRevertIndex": 1
            });
        }

    }
}