// TypeScript file




module conglinshuiguo {

    enum GameRotateStatus {
        RotateNormal = 1,       //普通旋转(显示长按自动);
        RotatePause = 2,        //旋转暂停;
        CollectMoney = 3        //收取金币;
    }
    enum GameRotateChoose {
        normal = 1,
        rotate = 2,
    }
    export enum GameBG {
        normal = 1,
        free = 2,
    }

    enum switchType {
        normal = 1,  //普通轮播
        again = 2,   //重新旋转
        cover = 3,    //符号转换
        win = 4,     //赢得
        winTotal = 5,      //共赢得

    }

    export class LabaGame extends game.BaseUI {
        private static m_Instance: LabaGame;

        // public group_left:eui.Group;
        // public group_right:eui.Group;
        public group_deng: eui.Group;
        public imgLogo: eui.Image;

        // public freeGamePointAnimUp:eui.Group;
        public gameGroup: eui.Group;
        // public lineMaskGroup:eui.Group;
        public labaGameScroller: eui.Scroller;
        public belt1Group: eui.Group;
        public belt2Group: eui.Group;
        public belt3Group: eui.Group;
        public belt4Group: eui.Group;
        public belt5Group: eui.Group;
        // public pointFlowLightGroup:eui.Group;
        public labaLine5: eui.Image;
        public labaLine2: eui.Image;
        public labaLine1: eui.Image;
        public labaLine3: eui.Image;
        public labaLine4: eui.Image;
        public labaLine7: eui.Image;
        public labaLine6: eui.Image;
        public labaLine9: eui.Image;
        public labaLine8: eui.Image;
        // public yudiEffectGroup:eui.Group;
        // public playerGoldLabel:eui.Label;
        public downPanel: eui.Group;
        public cancelAutoRotateButton: game.Button;
        public gameFreegameButton: game.Button;
        // public skipGoldButton: game.Button;
        public fastSettleButton: game.Button;
        public lineTipGroup: eui.Group;
        public lineTipBg: eui.Image;

        public effectPanel: eui.Group;




        public guchuiImage: eui.Image;  //旋转按钮的鼓锤图标;
        public guMianImage: eui.Image; //鼓面的图标;

        private gameRotateState: number = GameRotateStatus.RotateNormal;
        private lineRootGroup: eui.Group;  //拉霸绘制线的根节点;

        public raceObtainGoldLabel: eui.Label;    //当前局赢取的金币;
        private gameRootPanel: eui.Panel;


        // private setButton: eui.Button;
        // private homeButton: eui.Button;
        // private nameLabel: eui.Label;
        // private idLabel: eui.Label;
        public moneyLabel: eui.Label;
        // private imgHead: eui.Image;

        // public jackportValueLabel: eui.Label;       //奖池金额;

        // private curDizhuLabel: eui.BitmapLabel;     //当前底注总金额;
        private lineCountLabel: eui.Label;           //线的条数;
        // private lineDizhuLabel: eui.Label;           //每条线的投注额
        //特效相关面板;
        //--------------------------
        private worldGroup: eui.Group
        private groupMenu: eui.Group;
        private compensationTableButton: eui.Button;             //赔付表按钮;
        private menuListButton: eui.Button;                      //菜单按钮
        private betMenuGruop: eui.Group;                    //投注按钮组
        private menuListGroup: eui.Group;                    //规则菜单栏
        private closeRect: eui.Rect

        private closeMenuButton: eui.Button;                 //关闭菜单栏按钮
        private ruleListButton: eui.Button;                  //打开规则按钮
        private betGoldButton: eui.Button;                //打开投注界面按钮
        public rotationSetButton: eui.Button;              //旋转设置按钮
        private rotationButton: eui.Button;                 //快速旋转按钮
        private soundSetButton: eui.Button;                //声音开关
        //--------------------------
        // public mLines: Array<eui.Image>;


        private mIsAutoRotating: boolean = false;   //是否正在自动旋转;
        private mIsRotating: boolean = false;       //是否正在旋转;

        private mDrawGoldIconRoot: egret.Sprite;
        // private nvshenImage: egret.Sprite;
        private LabaBeltRootGroup: eui.Group;
        private mLabaMachine: LabaMachine;
        public mBigWinInfo: any;

        private mIsInMarigame: boolean = false;

        private highScrollGroup: eui.Group;                  //旋转的父窗口;
        // private highScrollEffect1: egret.tween.TweenGroup;   //五个带子旋转动画;
        // private highScrollEffect2: egret.tween.TweenGroup;
        // private highScrollEffect3: egret.tween.TweenGroup;
        // private highScrollEffect4: egret.tween.TweenGroup;
        // private highScrollEffect5: egret.tween.TweenGroup;
        private BeltHighScoll1: eui.Group;
        private BeltHighScoll2: eui.Group;
        private BeltHighScoll3: eui.Group;
        private BeltHighScoll4: eui.Group;
        private BeltHighScoll5: eui.Group;

        private mAutoRotateTimer: number = 0;

        public mDataCenter: any = null;


        //小玛丽
        // private linePotGroup1: eui.Group;
        // private linePotGroup0: eui.Group;
        public freeRotateButton: game.Button
        private autoRotateButton: game.Button
        // public subDizhuButton: game.Button;           //减少底注;
        // public addDizhuButton: game.Button;           //增加底注;
        // private dizhuLabel: eui.BitmapLabel;        //当前底注;
        private mLeftRotateCount: number = 0;
        // private closeAutoRotateGroupRect: eui.Group;

        // private maxDizhuButton: game.Button
        private group_test: eui.Group;

        public bigWinPanel: BigWinPanelExt;



        //----------
        private gameRotateButton: game.Button;
        private centerGroup: eui.Group
        private center_bg1: eui.Image  //山
        private center_bg2: eui.Image
        private center_bottom_cao1: eui.Image //中间前面的草
        private center_bottom_cao2: eui.Image
        private center_middle_cao1: eui.Image  //中间中间草
        private center_middle_cao2: eui.Image
        private center_top_cao1: eui.Image      //中间远处草
        private center_top_cao2: eui.Image
        private center_yuns: eui.Group         //中间的云
        private feature_glow: eui.Image         //动画高亮背景图
        private feature_glow_c: eui.Image      //选中人物高亮

        private centerAnimArr: Array<labalib.Utils.KeyFrameObject> = [];

        private cloud: egret.tween.TweenGroup;

        private bg1: eui.Image
        private bg2: eui.Image
        private lcloud: eui.Image
        private rcloud: eui.Image
        private centerFreeGroup: eui.Group
        private TipsImage: eui.Image
        public betNumLabel: eui.Label
        private popGroup: eui.Group
        public artLineRootGroup: eui.Group;    //美术线的根节点;
        private elemAnimMask: eui.Group
        private backButton: game.Button
        private animGroup: eui.Group
        //----------
        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new LabaGame();
            return this.m_Instance;
        }



        public destroyDragon() {
            if (this.mBarWinDragon) {
                this.mBarWinDragon.animation.stop()
                if (this.mBarWinDragon.parent)
                    this.mBarWinDragon.parent.removeChild(this.mBarWinDragon)
                this.mBarWinDragon.dispose()
                this.mBarWinDragon = null
            }
            for (let dragon of this.mHighRotateAnimArr) {
                if (dragon) {
                    dragon.animation.stop()
                    if (this.mBarWinDragon.parent)
                        dragon.parent.removeChild(this.mBarWinDragon)
                    dragon.dispose()
                    dragon = null
                }
            }
        }
        public destroy() {
            super.destroy();
            this.clearAllHitHighlights();

            this.destroyHighRotateAnim()

            if (this.dengAnimation2 != null) {
                labalib.Utils.ObjectPool.Instance.destroyObject(this.dengAnimation2);
                this.dengAnimation2 = null;
            }
            if (this.myUser != null) {
                this.myUser.nameChanged.remove(this.nameChanged, this);
                this.myUser.pointChanged.remove(this.chipChanged, this);
                // this.myUser.headUrlChanged.remove(this.setMainRole, this);
            }


            this.destroyDragon()

            SoundHand.Instance.endLabaBg();
            SoundHand.Instance.destroy();
            EffectLayer.Instance.destroy();
            EffectCreate.Instance.destroy();
            SgmlHelper.clearInstance();
            ResultShow.clearInstance();
            labalib.Utils.ObjectPool.clearInstance();
            DataCenter.clearInstance();
            LabaGame.m_Instance = null;
        }

        constructor() {
            super();
            this.initLaba();
            this.adaptationHeight();
            this.adaptationWidth();
            this.initUI();


            // let high5 = new eui.Image("fast_back_whitelight")
            // high5.scaleX = -1
            // high5.blendMode = "add"
            // let high6 = new eui.Image("fast_back_whitelight")
            // high6.blendMode = "add"

            // this.LabaBeltRootGroup.addChild(high6)
            // this.LabaBeltRootGroup.addChild(high5)
            // let high1 = labalib.Utils.PlayMovieAnimInfo(this.LabaBeltRootGroup, LabaConfig.HighRotate[0]);

            // let high3 = labalib.Utils.PlayMovieAnimInfo(this.LabaBeltRootGroup, LabaConfig.HighRotate[2]);

            this.initData();
            //创建需要的拉霸机;
            egret.log("this.LabaBeltRootGroup:" + this.LabaBeltRootGroup);
            this.mLabaMachine = new LabaMachine(this.LabaBeltRootGroup, this.lineRootGroup);
            // this.mLabaMachine["drawAllLines"]()
            // this.mLabaMachine.clearAllLines()
            this.addActionListener();
            uniLib.Global.dispatchEvent(uniLib.CustomEvent.Menu_SwitchChipsAutoUpdate, { type: 1, open: false });

            this.initHitScrollonIcon()

            let dragon1 = uniLib.DragonUtils.createDragonBoneAnimation("jiasu")
            dragon1.animation.play("jiasu_2", 0)
            this.LabaBeltRootGroup.addChild(dragon1)
            dragon1.y = 200
            this.LabaBeltRootGroup.addChild(this.LabaBeltRootGroup.getChildByName("belt4Group"))

            let dragon2 = uniLib.DragonUtils.createDragonBoneAnimation("jiasu")
            dragon2.animation.play("jiasu_1", 0)
            this.LabaBeltRootGroup.addChild(dragon2)

            dragon2.y = -25
            this.mHighRotateAnimArr.push(dragon1)
            this.mHighRotateAnimArr.push(dragon2)

            // this.LabaBeltRootGroup
            // this.InitHighAnim()
            // let high2 = labalib.Utils.PlayMovieAnimInfo(this.LabaBeltRootGroup, LabaConfig.HighRotate[1]);
            // let high4 = labalib.Utils.PlayMovieAnimInfo(this.LabaBeltRootGroup, LabaConfig.HighRotate[3]);
            // let high7 = labalib.Utils.PlayMovieAnimInfo(this.LabaBeltRootGroup, LabaConfig.HighRotate[3]);
            // high7.scaleY = 1.5
            // high4.scaleY = 1.5
            // this.mHighRotateAnimArr.push(high1)
            // this.mHighRotateAnimArr.push(high2)
            // // this.mHighRotateAnimArr.push(high3)
            // this.mHighRotateAnimArr.push(high4)
            // this.mHighRotateAnimArr.push(high7)
            // this.mHighRotateAnimArr.push(high5)
            // this.mHighRotateAnimArr.push(high6)

            let posdd = [196, 330, 464]
            for (let i = 0; i < 3; i++) {
                let high3 = labalib.Utils.PlayMovieAnimInfo(this.LabaBeltRootGroup, LabaConfig.HighRotate[2]);
                this.mBeltMaskAnimArr.push(high3)
                high3.x = posdd[i]
                high3.visible = false
                this.LabaBeltRootGroup.addChildAt(high3, 0)
            }
            this.SetHighAnim(false)
        }
        private mHighRotateAnimArr = []
        //创建需要的拉霸机对象;
        protected initLaba() {
            //默认设置采用美术提供的动画播放，如果没有，则不播放动画
            labalib.ScrollIcon.scrollElemAnimMode = labalib.ScrollElemAnimMode.ScrollElemAnimMode_Auto;
            labalib.ScrollIcon.scrollElemCodeAnimMode = labalib.ScrollElemCodeAnimMode.ScrollElemCodeAnimMode_Scale;
            this.mDataCenter = new DataCenter(5);
            new SgmlHelper();
            new ResultShow();
        }

        public addUIListener() {
            // this.gameRotateButton.addEventListener(egret.MotionEvent., this.onAutoRotateButton, this);
            this.gameRotateButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRotateButtonByClick, this);
            // this.gameRotateButton.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRotateButtonLeaseOutside, this);
            // this.gameRotateButton.addEventListener(egret.TouchEvent.TOUCH_END, this.onRotateButtonEnd, this);
            // this.gameRotateButton.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRotateButtonLeaseOutside, this);
            // this.fastSettleButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFastSettleButton, this);
            this.autoRotateButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelAutoRotate, this);
            // this.skipGoldButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkipGoldButton, this);


            this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackButton, this);
            // this.setButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetButton, this);
            // this.homeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHomeButton, this);
            // this.nvshenImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNvshenImage, this);
            // this.autoRotateButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAutoRotateButton, this);
            this.compensationTableButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCompensationTableButton, this);
            this.ruleListButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRuleListButton, this);
            this.betGoldButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetGoldButton, this);
            this.rotationSetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRotationSetButton, this);
            this.rotationButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRotationButton, this);
            this.soundSetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundSetButton, this);


            this.menuListButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMenuListButton, this);
            this.closeRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseMenuButton, this);

            // this.subDizhuButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubDizhuButton, this);
            // this.addDizhuButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddDizhuButton, this);
            // this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseAutoRotateGroupRect, this);
            // this.maxDizhuButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMaxDizhuButton, this);
        }

        public removeUIListener() {
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAutoRotateButton, this);
            this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRotateButtonByClick, this);
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_END, this.onRotateButtonEnd, this);
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRotateButtonLeaseOutside, this);
            // this.fastSettleButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFastSettleButton, this);
            this.autoRotateButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelAutoRotate, this);
            // this.skipGoldButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkipGoldButton, this);

            // this.autoRotateButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAutoRotateButton, this);
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRotateButtonBegin, this);
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_END, this.onRotateButtonEnd, this);
            // this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseAutoRotateGroupRect, this);
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRotateBegin, this);
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onRotateCancel, this);
            // this.gameRotateButton.removeEventListener(egret.TouchEvent.TOUCH_END, this.onRotateEnd, this);
            this.backButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackButton, this);
            // this.setButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetButton, this);
            // this.homeButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onHomeButton, this);
            // this.nvshenImage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNvshenImage, this);
            this.compensationTableButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCompensationTableButton, this);
            this.ruleListButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRuleListButton, this);
            this.betGoldButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetGoldButton, this);
            this.rotationSetButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRotationSetButton, this);
            this.rotationButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRotationButton, this);
            this.soundSetButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundSetButton, this);


            this.menuListButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMenuListButton, this);
            this.closeRect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseMenuButton, this);



            // this.subDizhuButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubDizhuButton, this);
            // this.addDizhuButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddDizhuButton, this);
            // this.maxDizhuButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMaxDizhuButton, this);
        }
        public addActionListener() {
            if (DataCenter.Instance && DataCenter.Instance.MainUserGoldChanged)
                DataCenter.Instance.MainUserGoldChanged.add(this.onMainGoldChanged, this);
            GX.PokerEvent.Instance.moneyUpdate.add(this.onMsg_MoneyUpdate, this);
            game.RoomData.Instance.addSeatChanged.add(this.addSeatSprite, this);
            labalib.EventManager.Instance.addEventListener(labalib.LabaBaseEvent.LabaInitDizhuCompleted, this.onInitDizhuCompleted, this);
            // labalib.EventManager.Instance.addEventListener(labalib.LabaBaseEvent.LabaJackportPoolChanged, this.onJackportPoolChanged, this);
            labalib.EventManager.Instance.addEventListener(labalib.LabaBaseEvent.LabaMachineEnterRotating, this.onEnterRotating, this);
            labalib.EventManager.Instance.addEventListener(labalib.LabaBaseEvent.LabaMachineEnterShowReuslt, this.onEnterShowResult, this);
            labalib.EventManager.Instance.addEventListener(labalib.LabaBaseEvent.BeltRotateBeginEx, this.onBeltRotateBegin, this);
            labalib.EventManager.Instance.addEventListener(labalib.LabaBaseEvent.BeltRotateEndEx, this.onBeltRotateEnd, this);
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
            egret.MainContext.instance.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this);
            this.mLabaMachine.addActionListener();
            uniLib.Global.addEventListener(uniLib.CustomEvent.UniLibSocketOpen, this.onSocketOpen, this);
            labalib.EventManager.Instance.addEventListener(labalib.LabaBaseEvent.LabaSendBetTimeout, this.onSendBetTimeout, this);
            labalib.EventManager.ResetButtonStatusEvent.add(this.onResetGameStatus, this);
        }

        public removeActionListener() {
            if (DataCenter.Instance && DataCenter.Instance.MainUserGoldChanged)
                DataCenter.Instance.MainUserGoldChanged.remove(this.onMainGoldChanged, this);
            GX.PokerEvent.Instance.moneyUpdate.remove(this.onMsg_MoneyUpdate, this);
            game.RoomData.Instance.addSeatChanged.remove(this.addSeatSprite, this);
            labalib.EventManager.Instance.removeEventListener(labalib.LabaBaseEvent.LabaInitDizhuCompleted, this.onInitDizhuCompleted, this);
            // labalib.EventManager.Instance.removeEventListener(labalib.LabaBaseEvent.LabaJackportPoolChanged, this.onJackportPoolChanged, this);
            labalib.EventManager.Instance.removeEventListener(labalib.LabaBaseEvent.LabaMachineEnterRotating, this.onEnterRotating, this);
            labalib.EventManager.Instance.removeEventListener(labalib.LabaBaseEvent.LabaMachineEnterShowReuslt, this.onEnterShowResult, this);
            labalib.EventManager.Instance.removeEventListener(labalib.LabaBaseEvent.BeltRotateBeginEx, this.onBeltRotateBegin, this);
            labalib.EventManager.Instance.removeEventListener(labalib.LabaBaseEvent.BeltRotateEndEx, this.onBeltRotateEnd, this);
            egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
            egret.MainContext.instance.stage.removeEventListener(egret.Event.ACTIVATE, this.onActivate, this);
            this.mLabaMachine.removeActionListener();
            uniLib.Global.removeEventListener(uniLib.CustomEvent.UniLibSocketOpen, this.onSocketOpen, this);
            labalib.EventManager.Instance.removeEventListener(labalib.LabaBaseEvent.LabaSendBetTimeout, this.onSendBetTimeout, this);
            labalib.EventManager.ResetButtonStatusEvent.remove(this.onResetGameStatus, this);
        }

        private onSocketOpen() {
            if (this.IsAutoRotating) {
                this.refreshRotateButtonStatus();
                if (this.mIsRotating == false && !DataCenter.Instance.IsRerotateGame() && !DataCenter.Instance.IsFreeGame())
                    this.onFinishShowResult();
            }
            console.error("onSocketOpen");
        }

        private onSendBetTimeout() {
            if (this.IsAutoRotating) {
                this.refreshRotateButtonStatus();
                if (this.mIsRotating == false && !DataCenter.Instance.IsRerotateGame() && !DataCenter.Instance.IsFreeGame())
                    this.onFinishShowResult();
            }
        }

        public onResize() {
            this.adaptationHeight();
            this.adaptationWidth();



        }

        private onActivate() {

        }

        public initUI() {
            this.skinName = new clsg_gameskin()
            this.raceObtainGoldLabel.text = "";

            //添加特效层;
            GX.GameLayerManager.maskLayer.addChild(EffectLayer.Instance);

            //添加比倍界面;
            // this.addChild(BibeiPanel.Instance);
            // Utils.SetPanelScreenCenter(BibeiPanel.Instance);
            // BibeiPanel.Instance.visible = false;
            //添加小玛丽的界面;
            // this.addChild(MariGame.Instance);

            this.autoRotateButton.visible = false
            this.gameRotateButton.visible = true



            this.tipsGroup.visible = false
            this.tipsGroup.addChild(MutiTipsIcon.Instance)


            if (game.Config.debug) {
                this.group_test.visible = true;
                this.group_test.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnDebugTest, this);
            } else {
                this.group_test.visible = false;
            }


            this.switchBG(GameBG.normal)
            this.centerFreeGroup.addChild(FreeGameIngPanel.Instance)
            this.InitMaskRext()
            this.InitCharacterAnim()
            this.initCenterBGTween()
            this.GameRotateButtomTween(GameRotateChoose.normal)
            this.switchTipsImage(1)
            // this.initHitScrollonIcon()
            // this.playWinBarAnim(false)
            this.initLineInfo()
            this.onResize();

        }
        private iconLineGroup: eui.Group
        private mLineTipsInfoArr = []
        public initLineInfo() {
            for (let i = 0; i < 30; i++) {
                let group = new eui.Group()
                let img = new eui.Image("badge")
                group.addChild(img)
                group.width = 36
                group.height = 34
                group.anchorOffsetX = 18
                group.anchorOffsetY = 17
                let label = new eui.BitmapLabel()
                label.font = "number1_fnt"
                label.verticalCenter = "0"
                label.horizontalCenter = "0"
                label.text = "" + (i + 1)
                group.addChild(label)
                this.mLineTipsInfoArr.push(group)
                this.iconLineGroup.addChild(group)
            }
            let label = new eui.BitmapLabel()
            label.font = "number5_fnt"
            label.name = "muti"
            label.horizontalCenter = "0"
            this.iconLineGroup.addChild(label)
            // label.text = "22222"
            this.hideAllLineTips()
            this.iconLineGroup.name = "iconLineGroup"
        }
        public hideAllLineTips() {
            for (let item of this.mLineTipsInfoArr) {
                item.visible = false
            }
            this.iconLineGroup.getChildByName("muti").visible = false
        }
        public showOneLineTips(index, gpos, point) {
            // let gpos=line.localToGlobal(0,line)
            let pos = this.iconLineGroup.globalToLocal(gpos.x, gpos.y)
            if ((index - 1) % 2 == 0)
                this.mLineTipsInfoArr[index].x = pos.x + 2
            else
                this.mLineTipsInfoArr[index].x = pos.x + 670
            let special = [15, 16, 19, 20, 21, 22, 23, 24, 28]
            let posmap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 200, 210, 0, 0, 60,
                342, 70, 315, 196, 210, 0, 0, 0, 220, 0]
            this.mLineTipsInfoArr[index].y = pos.y
            if (special.indexOf(index) != -1)
                this.mLineTipsInfoArr[index].y = posmap[index]
            this.mLineTipsInfoArr[index].visible = true
            let label = this.iconLineGroup.getChildByName("muti") as eui.BitmapLabel
            label.visible = point != 0 ? true : false
            label.text = "" + point
            let labely = SgmlHelper.Instance.getLineInfo(index)[2]
            // console.log("sdasdpow", labely)
            label.y = 80 + (3 - labely) * 130
            // this.
        }
        private winElemAnimGroup: eui.Group
        public initHitScrollonIcon() {
            for (let row = 0; row < 3; row++) {
                this.mAwardScrollIcon.push([])
                for (let col = 0; col < 5; col++) {
                    let icon = this.mLabaMachine.getBelt(col).GetElementByIndex(row + 1)
                    let pos1 = icon.localToGlobal(icon.width / 2, icon.height / 2)
                    let pos2 = this.LabaBeltRootGroup.globalToLocal(pos1.x, pos1.y)
                    let scrollicon = new AwardScrollIcon()
                    scrollicon.scaleX = icon.scaleX;
                    scrollicon.scaleY = icon.scaleY;
                    this.mAwardScrollIcon[row].push(scrollicon)
                    // this.winElemAnimGroup.addChild(scrollicon)
                    scrollicon.x = pos2.x
                    scrollicon.y = pos2.y
                    // scrollicon.PlayWinAnimation(8)
                }
            }
            this.elemAnimMask.visible = false

        }
        public playHitScrollIcon(winElemID: number, row: number, col: number, isFreeTri = false) {
            this.winElemAnimGroup.addChild(this.mAwardScrollIcon[row][col])
            if (isFreeTri)
                this.mAwardScrollIcon[row][col].PlayWinAnimation(winElemID)
            else
                this.mAwardScrollIcon[row][col].PlayDefautAnimation(winElemID)

            return this.mAwardScrollIcon[row][col]
        }


        // private filter1:Array<any> = [new egret.GlowFilter(0xE7A8FE,1,15,15)];
        // private filter2:Array<any> = [new egret.GlowFilter(0x90CDFD,1,15,15)];
        // private playDengPaoTime:number=0;
        //背景横向移动动画
        private center_san1: eui.Image
        private center_san2: eui.Image
        public initCenterBGTween() {
            let parent = this.center_bg1.parent
            egret.Tween.get(parent, { loop: true })
                .set({ x: 0 })
                .to({ x: -720 }, 3000 * 40)
                .call(() => { parent.addChild(this.center_bg1) })
                .set({ x: 0 })
                .to({ x: -720 }, 3000 * 40)
                .call(() => {
                    parent.addChild(this.center_bg2)
                })

            let parent5 = this.center_san1.parent
            egret.Tween.get(parent5, { loop: true })
                .set({ x: 0 })
                .to({ x: -720 }, 5000 * 40)
                .call(() => { parent5.addChild(this.center_san1) })
                .set({ x: 0 })
                .to({ x: -720 }, 5000 * 40)
                .call(() => {
                    parent5.addChild(this.center_san2)
                })


            let parent1 = this.center_bottom_cao1.parent
            egret.Tween.get(parent1, { loop: true })
                .set({ x: 0 })
                .to({ x: -720 }, 200 * 40)
                .call(() => { parent1.addChild(this.center_bottom_cao1) })
                .set({ x: 0 })
                .to({ x: -720 }, 200 * 40)
                .call(() => {
                    parent1.addChild(this.center_bottom_cao2)
                })


            let parent2 = this.center_middle_cao1.parent
            egret.Tween.get(parent2, { loop: true })
                .set({ x: 0 })
                .to({ x: -720 }, 400 * 40)
                .call(() => { parent2.addChild(this.center_middle_cao1) })
                .set({ x: 0 })
                .to({ x: -720 }, 400 * 40)
                .call(() => {
                    parent2.addChild(this.center_middle_cao2)
                })


            let parent3 = this.center_top_cao1.parent
            egret.Tween.get(parent3, { loop: true })
                .set({ x: 0 })
                .to({ x: -720 }, 900 * 40)
                .call(() => { parent3.addChild(this.center_top_cao1) })
                .set({ x: 0 })
                .to({ x: -720 }, 900 * 40)
                .call(() => {
                    parent3.addChild(this.center_top_cao2)
                })

            let parent4 = this.center_yuns.parent
            egret.Tween.get(this.center_yuns, { loop: true })
                .set({ x: 0 })
                .to({ x: -720 }, 1000 * 40)
                .call(() => {
                    parent4.addChild(this.center_yuns)
                })
        }
        //beltindex 第几列   pos 1--上  2--中  3--下
        private fast_back_whitelight1: eui.Image
        private fast_back_whitelight2: eui.Image
        private fast_back_whitelight3: eui.Image
        public playHighDuobaoAnim(params, clear = false) {
            if (clear) {
                let ls = [this.fast_back_whitelight1, this.fast_back_whitelight2, this.fast_back_whitelight3]
                for (let bg of ls) {
                    if (bg.parent) {
                        bg.parent.visible = false
                        egret.Tween.removeTweens(bg.parent)
                    }
                }
                for (let item of this.mBeltMaskAnimArr) {
                    item.visible = false
                }
                return
            }


            for (let param of params) {
                uniLib.SoundMgr.instance.playSound("quanzhou_mp3", 1)
                this.anim(param.beltindex, param.pos)
                this.mBeltMaskAnimArr[param.beltindex - 2].visible = true
            }
        }
        public anim(beltindex, pos) {
            let ls = [this.fast_back_whitelight1, this.fast_back_whitelight2, this.fast_back_whitelight3]
            let parent = ls[beltindex - 2].parent as eui.Group
            parent.visible = true
            egret.Tween.removeTweens(parent)
            if (pos == 1) {
                parent.scaleY = 1
                parent.y = 0
                ls[pos - 1].y = 0
                egret.Tween.get(parent).set({ height: 0 }).to({ height: 400 }, 200)
            } else if (pos == 3) {
                ls[pos - 1].y = 0
                parent.scaleY = -1
                parent.y = 400
                egret.Tween.get(parent).set({ height: 0 }).to({ height: 400 }, 200)
            } else {
                parent.verticalCenter = "0"
                ls[pos - 1].verticalCenter = "0"
                parent.scaleY = 1
                egret.Tween.get(parent).set({ height: 0 }).to({ height: 400 }, 200)
            }

        }
        public GameRotateButtomTween(type: GameRotateChoose) {
            egret.Tween.removeTweens(this.gameRotateButton)
            console.log('1111111111-------------------------------', DataCenter.Instance['mIsQuickRotate'])
            if (type == GameRotateChoose.normal)
                egret.Tween.get(this.gameRotateButton, { loop: true })
                    .to({ rotation: 360 }, 4000)
            else
                if (!DataCenter.Instance['mIsQuickRotate'])
                    egret.Tween.get(this.gameRotateButton, { loop: false })
                        .to({ rotation: 360 * 5 }, 2300).call(() => {
                            egret.Tween.get(this.gameRotateButton, { loop: true })
                                .to({ rotation: 360 }, 4000)
                        })
                else {
                    egret.Tween.get(this.gameRotateButton, { loop: false })
                        .to({ rotation: 360 * 4 }, 1200).call(() => {
                            egret.Tween.get(this.gameRotateButton, { loop: true })
                                .to({ rotation: 360 }, 4000)
                        })
                }
        }
        private dengAnimation2: labalib.Utils.KeyFrameObject;
        private characterGroup: eui.Group
        private effGroup: eui.Group
        public InitMaskRext() {
            let worldGroupMask = new eui.Rect()
            worldGroupMask.width = this.worldGroup.width
            worldGroupMask.height = this.worldGroup.height
            worldGroupMask.y = this.worldGroup.y
            worldGroupMask.x = this.worldGroup.x
            this.worldGroup.parent.addChild(worldGroupMask)
            this.worldGroup.mask = worldGroupMask

            // let centerGroupMask = new eui.Rect()
            // centerGroupMask.width = this.centerGroup.width
            // centerGroupMask.height = this.centerGroup.height
            // centerGroupMask.y = this.centerGroup.y
            // centerGroupMask.x = this.centerGroup.x
            // this.centerGroup.parent.addChild(centerGroupMask)
            // this.centerGroup.mask = centerGroupMask
        }
        private mBeltMaskAnimArr = []

        public SetHighAnim(visible: boolean) {
            for (let i = 1; i <= 5; i++) {
                if (i != 4) {
                    let mask = this.LabaBeltRootGroup.getChildByName("belt" + i + "Mask")
                    mask.visible = visible
                }
            }

            if (visible) {
                uniLib.SoundMgr.instance.playSound("kuaisu_mp3", 1)
            }
            // let pos = [462, 462, 462, 530, 400, 680, 250]
            let pos = [462, 462, 530, 400, 680, 250]
            let index = 0
            for (let item of this.mHighRotateAnimArr) {
                item.visible = visible
                item.x = pos[index]
                index++
            }
        }
        private InitCharacterAnim() {
            let sandy = labalib.Utils.PlayMovieAnimInfo(this.characterGroup, LabaConfig.CenterSandyEffect);
            this.centerAnimArr.push(sandy)
            sandy.x = 100
            sandy.y = 270
            this.characterGroup.y = 50

            let pig = labalib.Utils.PlayMovieAnimInfo(this.characterGroup, LabaConfig.CenterPigEffect);
            this.centerAnimArr.push(pig)
            pig.x = 310
            pig.y = 215

            let monk = labalib.Utils.PlayMovieAnimInfo(this.characterGroup, LabaConfig.CenterMonkEffect);
            this.centerAnimArr.push(monk)
            monk.x = 465
            monk.y = 250
            let monkey = labalib.Utils.PlayMovieAnimInfo(this.characterGroup, LabaConfig.CenterMonkeyEffect);
            this.centerAnimArr.push(monkey)
            monkey.x = 580
            monkey.y = 160
        }

        //人物跳动动画  1：随机播放两个动画  0：四个一起动
        private characterJumpAnim(num?: number) {
            if (DataCenter.Instance.IsFreeGame())
                return
            let posindexB = [{ x: 110, y: 270 }, { x: 300, y: 210 }, { x: 465, y: 245 }, { x: 600, y: 150 }]
            if (num == 1) {
                let target = []
                let num1 = Math.floor(Math.random() * 4)
                target.push(num1)
                let num2 = Math.floor(Math.random() * 4)
                if (num1 == num2) {
                    if (num1 == 3) {
                        target.push(num1 - 1)
                    } else {
                        target.push(num1 + 1)
                    }
                } else {
                    target.push(num2)

                }
                SoundHand.Instance.playRerotateTwoSound(target)
                for (let i of target) {
                    this.centerAnimArr[i].visible = false
                    let boxa = labalib.Utils.PlayMovieAnimInfo(this.characterGroup, LabaConfig.CenterEffectA[i + 1], () => {
                        this.centerAnimArr[i].visible = true
                    }, true);
                    boxa.x = posindexB[i].x
                    boxa.y = posindexB[i].y
                    this.characterGroup.y = 50
                }
                target = []


            } else {
                SoundHand.Instance.playRerotateTwoSound([0, 1, 2, 3])
                for (let i = 0; i < 4; i++) {
                    this.centerAnimArr[i].visible = false
                    let boxb = labalib.Utils.PlayMovieAnimInfo(this.characterGroup, LabaConfig.CenterEffectB[i + 1], () => {
                        this.centerAnimArr[i].visible = true
                    }, true);
                    boxb.x = posindexB[i].x
                    boxb.y = posindexB[i].y
                    this.characterGroup.y = 50
                }

            }


        }
        public playWinBarAnim(show: boolean) {
            this.InitWinBarAnim()
        }
        private mBarWinDragon = null
        private WinBarComplete() {
            if (this.mBarWinDragon)
                this.mBarWinDragon.visible = false
        }
        private fiveBox: eui.Group
        private fiveKindAni: egret.tween.TweenGroup
        private fiveKindExitAni: egret.tween.TweenGroup
        public stopPlayFiveKindAnim() {
            this.fiveBox.visible = false
        }
        public playFiveKindAnim() {
            uniLib.SoundMgr.instance.playSound("wuxinglianzhu_mp3", 1)
            //五星連珠
            this.fiveBox.visible = true
            let fiveKind2 = labalib.Utils.PlayMovieAnimInfo(this.fiveBox, LabaConfig.FiveKind2, null, true);
            fiveKind2.x = 500
            fiveKind2.y = 150
            fiveKind2.scaleX = 1.5
            fiveKind2.scaleY = -1
            let fiveKind3 = labalib.Utils.PlayMovieAnimInfo(this.fiveBox, LabaConfig.FiveKind2, null, true);
            labalib.Utils.PlayTweenGroup(this.fiveKindAni, 1, () => {
                labalib.Utils.PlayTweenGroup(this.fiveKindExitAni, 1, null, true)
            }, true)
            let fiveKind1 = labalib.Utils.PlayMovieAnimInfo(this.fiveBox, LabaConfig.FiveKind1)
            fiveKind3.x = 240
            fiveKind3.y = 150
            fiveKind3.scaleX = -1.5
            fiveKind3.scaleY = 1
        }

        public InitWinBarAnim() {
            if (!this.mBarWinDragon) {
                this.mBarWinDragon = uniLib.DragonUtils.createDragonBoneAnimation("zhongjiang_kuang")
                this.winWorldGroup.addChild(this.mBarWinDragon)
            }
            this.mBarWinDragon.visible = true
            this.mBarWinDragon.animation.play("animation", 1)
            this.mBarWinDragon.x = 308
            this.mBarWinDragon.y = 25

            this.mBarWinDragon.scaleX = 1.16
            this.mBarWinDragon.scaleY = 1.2
            uniLib.SoundMgr.instance.playSound("scrollgold2_mp3", 1);
            this.characterJumpAnim(1)
            //边框流动金光
            // let winBar1 = labalib.Utils.PlayMovieAnimInfo(this.winWorldGroup, LabaConfig.ShiningInfoB, null, true);
            // winBar1.x = 310
            // winBar1.y = 20
            // winBar1.scaleX = 1.58
            // winBar1.scaleY = 1.6

            // //中间扩散
            // let winBar2 = labalib.Utils.PlayMovieAnimInfo(this.winWorldGroup, LabaConfig.ShiningInfoWave, null, true);
            // winBar2.x = 310
            // winBar2.y = 35
            // winBar2.scaleX = 1.58
            // winBar2.scaleY = 1.6

            // //上下散出
            // let winBar3 = labalib.Utils.PlayMovieAnimInfo(this.winWorldGroup, LabaConfig.ShiningInfoParticle, null, true);
            // winBar3.x = 310
            // winBar3.y = -35
            // winBar3.scaleX = 1.8
            // winBar3.scaleY = 1.6

            // let winBar3_1 = labalib.Utils.PlayMovieAnimInfo(this.winWorldGroup, LabaConfig.ShiningInfoParticle, null, true);
            // winBar3_1.x = 310
            // winBar3_1.y = 110
            // winBar3_1.scaleX = 1.8
            // winBar3_1.scaleY = -1.6

        }

        public destroyHighRotateAnim() {
            for (let anim of this.mHighRotateAnimArr) {
                anim.animation.stop();
                anim.dispose();
                if (anim.parent) {
                    anim.parent.removeChild(anim)
                }
                anim = null
            }
            this.mHighRotateAnimArr = []
        }
        private mRerotateAttackDragon = null
		/**
		 * 添加动画
		 */
        private onAdddonghuaEff(index: number, objGroup: any, cb = null) {
            //存动画数组
            let dragonIndex = ["mg_feature_sandy", "mg_feature_pig", "mg_feature_monk", "mg_feature_monkey"]
            let animIndex = [null, null, null, LabaConfig.MonkeyChuiqi]
            let animPos = [{ x: 635, y: 300 }, { x: 635, y: 300 }, { x: 635, y: 300 }, { x: 410, y: 230 }]
            let scaleIndex = [.9, .8, .6, 1]
            let scaleIndex2 = [0.9, 0.8, 1.2, 1]
            let posindex1 = [{ x: 110, y: 940 }, { x: 280, y: 945 }, { x: 470, y: 980 }, { x: 635, y: 905 }]
            let posindex2 = [{ x: 550, y: 500 }, { x: 600, y: 460 }, { x: 540, y: 500 }, { x: 610, y: 400 }]
            let posindex3 = [{ x: 100, y: 270 }, { x: 310, y: 215 }, { x: 465, y: 250 }, { x: 580, y: 160 }]
            if (this.mRerotateAttackDragon) {
                egret.Tween.removeTweens(this.mRerotateAttackDragon)
                this.mRerotateAttackDragon.animation.stop();
                this.mRerotateAttackDragon.dispose();
                if (this.mRerotateAttackDragon.parent) {
                    this.mRerotateAttackDragon.parent.removeChild(this.mRerotateAttackDragon)
                }
                this.mRerotateAttackDragon = null
            }
            this.mRerotateAttackDragon = uniLib.DragonUtils.createDragonBoneAnimation(dragonIndex[index])
            this.mRerotateAttackDragon.animation.play("exit", 1)
            this.mRerotateAttackDragon.y = posindex1[index].y
            this.mRerotateAttackDragon.x = posindex1[index].x
            this.mRerotateAttackDragon.scaleX = scaleIndex[index]
            this.mRerotateAttackDragon.scaleY = scaleIndex[index]
            this.mRerotateAttackDragon.animation.timeScale = 1
            objGroup.addChild(this.mRerotateAttackDragon)

            egret.Tween.get(this.mRerotateAttackDragon).wait(400).to({ x: 720 }, 300).set({ x: posindex2[index].x, y: posindex2[index].y, visble: false }).call(() => {
                this.feature_glow.visible = false
                this.feature_glow_c.visible = false
                this.mRerotateAttackDragon.animation.play("attack", 1)
                this.mRerotateAttackDragon.scaleX = '-' + scaleIndex2[index]
                this.mRerotateAttackDragon.scaleY = scaleIndex2[index]
                this.mRerotateAttackDragon.animation.timeScale = 0.8
                SoundHand.Instance.playRerotatejumUPSound(index)
                for (let item of this.centerAnimArr) {
                    this.characterGray(item, false)
                }
            }).wait(500).call(() => {
                if (index == 3) {
                    let anim = labalib.Utils.PlayMovieAnimInfo(objGroup, animIndex[index]);
                    anim.y = animPos[index].y
                    anim.x = animPos[index].x
                }
            }).wait(300).call(() => {
                this.changeScrollIcon2()
            }).wait(1500).call(() => {
                this.centerAnimArr[index].x = 0
                this.centerAnimArr[index].visible = true
                if (this.mRerotateAttackDragon) {
                    egret.Tween.removeTweens(this.mRerotateAttackDragon)
                    this.mRerotateAttackDragon.animation.stop();
                    this.mRerotateAttackDragon.dispose();
                    if (this.mRerotateAttackDragon.parent) {
                        this.mRerotateAttackDragon.parent.removeChild(this.mRerotateAttackDragon)
                    }

                    this.mRerotateAttackDragon = null
                }
                egret.Tween.get(this.centerAnimArr[index]).to({ x: posindex3[index].x }, 2000).set({ x: posindex3[index].x, y: posindex3[index].y })
                this.switchTipsImage(1)
                if (cb) {
                    cb()
                }

            })

        }

        public characterGray(obj: any, gray: boolean = true) {
            let v = 0.1
            let colorMaxtrix =
                [v, 0, 0, 0, 0,
                    0, v, 0, 0, 0,
                    0, 0, v, 0, 0,
                    0, 0, 0, 1, 0];
            if (gray)
                obj.filters = [new egret.ColorMatrixFilter(colorMaxtrix)]
            else
                obj.filters = []
        }
        public mCurCharacterIndex = 0
        // 选中人物 从0开始
        public characterChooseAnim(target?: number, startStop: boolean = false, cb = null) {
            if (!startStop) {
                for (let item of this.centerAnimArr) {
                    this.characterGray(item)
                }
                egret.Tween.get(this.centerAnimArr[0], { loop: true }).call(() => {
                    uniLib.SoundMgr.instance.playSound("select_mp3", 1)
                    this.characterBgImgAnim(this.mCurCharacterIndex, false)
                    this.characterGray(this.centerAnimArr[this.mCurCharacterIndex], false)
                    if (this.mCurCharacterIndex == 0)
                        this.characterGray(this.centerAnimArr[3])
                    else
                        this.characterGray(this.centerAnimArr[this.mCurCharacterIndex - 1])
                    this.mCurCharacterIndex++
                    if (this.mCurCharacterIndex == 4)
                        this.mCurCharacterIndex = 0
                }).wait(200)
            }
            else {
                egret.Tween.removeTweens(this.centerAnimArr[0])
                egret.Tween.get(this.centerAnimArr[0], { loop: true }).call(() => {
                    uniLib.SoundMgr.instance.playSound("select_mp3", 1)
                    this.characterBgImgAnim(this.mCurCharacterIndex, true)
                    this.characterGray(this.centerAnimArr[this.mCurCharacterIndex], false)
                    if (this.mCurCharacterIndex == target) {
                        egret.Tween.removeTweens(this.centerAnimArr[0])
                        this.onAdddonghuaEff(target, this.effGroup, cb);
                        this.centerAnimArr[target].visible = false
                    }
                    if (this.mCurCharacterIndex == 0)
                        this.characterGray(this.centerAnimArr[3])
                    else
                        this.characterGray(this.centerAnimArr[this.mCurCharacterIndex - 1])
                    this.mCurCharacterIndex++
                    if (this.mCurCharacterIndex == 4)
                        this.mCurCharacterIndex = 0
                }).wait(200)
            }
        }

        public characterBgImgAnim(target?: number, isChoose: boolean = false) {
            let bgPosition = [{ x: 35, y: 80 }, { x: 195, y: 90 }, { x: 365, y: 60 }, { x: 545, y: 65 }]
            this.feature_glow.visible = true
            this.feature_glow.x = bgPosition[target].x
            this.feature_glow.y = bgPosition[target].y
            this.feature_glow.blendMode = "add"
            if (isChoose) {
                this.feature_glow_c.visible = true
                this.feature_glow_c.x = bgPosition[target].x
                this.feature_glow_c.y = bgPosition[target].y
            }
        }
        public DestroyCharacterAnim() {
            for (let anim of this.centerAnimArr)
                labalib.Utils.ObjectPool.Instance.destroyObject(anim)
            this.centerAnimArr = []
        }
        private stopDengPao() {
        }

        public debugTestButtonIndex: number = 0;
        private onBtnDebugTest(e: TouchEvent) {
            let tttt: any = e.target;
            let index = this.group_test.getChildIndex(tttt);

            this.debugTestButtonIndex = index;
            (this.group_test.getChildAt(0) as eui.Label).text = "普通";
            (this.group_test.getChildAt(1) as eui.Label).text = "免费";
            (this.group_test.getChildAt(2) as eui.Label).text = "玛丽";
            if (index == 0) {
                tttt.text = "*普通*";
            } else if (index == 1) {
                tttt.text = "*免费*";
            } else if (index == 2) {
                tttt.text = "*玛丽*";
            }
        }



        public initData() {

        }

        private onFastSettleButton() {
            this.mLabaMachine.onFastSettleButton();

        }

        // public tesetLinePot() {
        //     for (let i = 1; i <= 9; i++) {
        //         this.linePotGroup0.getChildByName("line" + i).visible = false
        //         this.linePotGroup1.getChildByName("line" + i).visible = false
        //     }
        // }
        // public setLinePot(index) {
        //     // console.error("setlinepot,", index);
        //     this.linePotGroup0.getChildByName("line" + (index + 1)).visible = true
        //     this.linePotGroup1.getChildByName("line" + (index + 1)).visible = true

        // }

        public tipsGroup: eui.Group
        //自动旋转次数
        public onClickRotateCountButton(nCount: number) {
            this.mIsAutoRotating = true;

            this.gameRotateButton.visible = false;
            this.autoRotateButton.visible = true
            this.autoRotateButton.label = String(nCount);
            this.mLeftRotateCount = nCount
            this.onRotateButton();

        }





        public onResetGameStatus() {
            this.mLeftRotateCount = 0
            this.mIsAutoRotating = this.mLeftRotateCount > 0 || this.mLeftRotateCount == -1;
            this.mIsRotating = false
            this.mIsFreeGameIng = false
            this.mIsInMarigame = false

            // this.addDizhuButton.enabled = true;
            // this.maxDizhuButton.enabled = true;
            // this.subDizhuButton.enabled = true;
            // this.gameRotateButton.enabled = true;

            // this.addDizhuButton.filters = [];
            // this.maxDizhuButton.filters = [];
            // this.subDizhuButton.filters = [];
            // this.gameRotateButton.filters = [];

            // this.chooseGameRotateButton(GameRotateChoose.rotate);

        }
        private startRotationTime: number;

        public mGameButtonStatus: GameRotateStatus = GameRotateStatus.RotateNormal
        public onRotateButtonByClick(e: egret.Event = null) {
            if (this.mGameButtonStatus == GameRotateStatus.RotateNormal) {
                if (e && e.target != null) {
                    let rotate1 = labalib.Utils.PlayMovieAnimInfo(this.betMenuGruop, LabaConfig.Rotate1, null, true);
                    rotate1.x = 360
                    rotate1.y = 35


                    let rotate2 = labalib.Utils.PlayMovieAnimInfo(this.betMenuGruop, LabaConfig.Rotate2, null, true);
                    rotate2.x = 380
                    rotate2.y = 40
                    this.GameRotateButtomTween(GameRotateChoose.rotate)
                }
                this.onRotateButton()
                this.mGameButtonStatus = GameRotateStatus.RotatePause
            }
            else {
                console.log("xxxxx77777777777777", DataCenter.Instance.IsGetServerMsg)

                if (DataCenter.Instance.IsGetServerMsg && !DataCenter.Instance.IsQuickRotate) {
                    game.Timer.clearTimeout(this.mLabaMachine.RealStartTimer)
                    this.mLabaMachine.doFastStop()
                    this.gameRotateButton.enabled = false
                }
            }




        }

        //普通旋转;
        public onRotateButton(e: egret.Event = null) {
            console.error("ssdasdqw onRotateButton")
            // this.playWinBarAnim(false)


            this.switchTipsImage(1)
            DataCenter.Instance.ChangeIconWin = []
            this.mLabaMachine.doEnterRotate()
            if (DataCenter.Instance.ServerRealGold < DataCenter.Instance.CurDizhu) {
                GX.Tips.showPopup("金币不足");
                labalib.EventManager.ResetButtonStatusEvent.call()
                return
            }
            if (this.mLabaMachine.isState(labalib.LabaInnerState.Rotating) || this.mLabaMachine.isState(labalib.LabaInnerState.SendBet)) {
                console.error("正在旋转中,或者正在发消息");
                return;
            }

            if (this.mLeftRotateCount > 0 && (!DataCenter.Instance.IsFreeGame() || DataCenter.Instance.IsFreeGameEnd() ||
                DataCenter.Instance.IsRerotateGame() || DataCenter.Instance.IsTriggerRerotateGame()))
                this.mLeftRotateCount--;
            this.refreshRotateButtonStatus();
            this.mLabaMachine.startRotate();




        }

        public getLabaMachine() {
            return this.mLabaMachine;
        }

        //取消自动旋转(暂停);
        public onCancelAutoRotate() {

            console.log("xxxxx565xxxxx")
            if (this.IsAutoRotating) {
                // this.mIsAutoRotating = false;
                this.mLeftRotateCount = 0;
                this.refreshRotateButtonStatus();
            }
        }
        private mIsFreeGameIng: boolean = false;
        private mIsInReRotategame: boolean = false;

        public get IsAutoRotating() {
            return this.mLeftRotateCount != 0;
        }

        //刷新旋转按钮状态;
        public refreshRotateButtonStatus() {
            // console.error("refreshRotateButtonStatus");
            // this.mIsAutoRotating = this.mLeftRotateCount > 0 || this.mLeftRotateCount == -1;
            // let enableFlag = (this.IsAutoRotating == false && this.mIsRotating == false && !this.mIsFreeGameIng && !this.mIsInMarigame);
            // this.gameRotateButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            console.error("ssdasdqw111111111", this.gameRotateButton.enabled)
            this.gameRotateButton.visible = !this.IsAutoRotating
            this.autoRotateButton.visible = this.IsAutoRotating

            this.rotationButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            this.rotationSetButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            this.betGoldButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            this.menuListButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            console.log("xxxxxxsssssddddddd", this.IsAutoRotating)
            if (this.IsAutoRotating) {

                // console.error("refreshRotateButtonStatus111");
                // this.chooseGameRotateButton(GameRotateChoose.autorotate);
                let text = this.mLeftRotateCount == -1 ? "∞" : this.mLeftRotateCount.toString()
                this.autoRotateButton.label = text;
            }
        }



        public testWin(value, filer, a) {
            // this.bigWinPanel.initTween()
            console.log("ssdasdqwdqwd", this.bigWinPanel)
            this.bigWinPanel.initTween(value, filer, a)
        }
        public initBigwinPanel() {
            if (!this.bigWinPanel)
                this.bigWinPanel = new BigWinPanelExt()

            //Bigwin设置需要的高分等级;
            this.bigWinPanel.HighScoreLists = DataCenter.Instance.getLabaHighScoreList()
            BigWinPanelExt.MAX_WinType = 3
            this.bigWinPanel.WinTypePaths = "laba_bigMCS,laba_bigMC,laba_megaMC,laba_megaMC,laba_megaMC"
            this.bigWinPanel.WinTypeSoundPaths = "mlsg_win_1_mp3,mlsg_win_2_mp3,mlsg_win_3_mp3,mlsg_win_3_mp3,mlsg_win_3_mp3"
            this.bigWinPanel.WinTypeImagePaths = "big_win-bw,big_win-mw,big_win-smw"

            //设置滚动速度;
            this.bigWinPanel.CalcScrollTimeCB = {
                calcScrollCB: this.calScrollTimeByMultiply, cbObj: this
            }
        }
        public calScrollTimeByMultiply(multiply: number) {
            //无奖，则停留0.1s
            if (multiply == 0) {
                return 100;
            }
            let scrollNumMinMultiply: number = LabaConfig.GoldNumScrollMinMultiply;
            let deltaMultiply = multiply - scrollNumMinMultiply;
            if (deltaMultiply < 0) {
                return 0
            }
            //新的计算公式;
            let multiplyPerSecond: number = LabaConfig.GoldNumMultiplyPerSecond;
            let scrollTime = (deltaMultiply / multiplyPerSecond) * 1000;
            if (scrollTime < LabaConfig.BigWinMinScrollTm) {
                scrollTime = LabaConfig.BigWinMinScrollTm;
            }
            if (scrollTime > LabaConfig.BigWinMaxScrollTm) {
                scrollTime = LabaConfig.BigWinMaxScrollTm;
            }
            return scrollTime;
        }


        public showLeftFgTips() {
            this.freeRotateButton.label = (DataCenter.Instance.getLeftFgCount()).toString();
        }


        //金币变化更新;
        public onMsg_MoneyUpdate(data: Cmd.MoneyUpdateCmd_S) {

        }


        public onInitDizhuCompleted() {
            //egret.MainContext.instance.stage.setContentSize(720, 1280);
            //超级大奖
            // this.initBigwinPanel();
            DataCenter.Instance.updateCurDizhu();
            // this.updateRotateList();
            RotationSetView.Instance.InitRotateListView();
            this.setDefaultDizhu(game.PokerFunction.MainUser.point);
            BetGoldView.Instance.updateBetView()
            this.initBigwinPanel()
            // game.bsAdaptationStageSize(720, 1280);
        }



        //设置默认底注;
        public setDefaultDizhu(money?: number) {
            let dizhuList = DataCenter.Instance.getDizhuList();
            // let minDizhu = dizhuList[0];
            let cpdizhulist = dizhuList.clone();
            cpdizhulist.sort((a, b) => {
                return a > b;
            });

            if (!money) {
                let minDizhu = cpdizhulist[0];
                //this.onClickDizhuButton(minDizhu);
                return;
            }
            let idx = 0;
            let betOffset = DataCenter.Instance.getBetOffset();
            for (idx = cpdizhulist.length - 1; idx >= 0; idx--) {
                if ((money * betOffset) >= cpdizhulist[idx] * 30) {
                    break;
                }
            }
            if (idx == -1) {
                idx = 0;
            }

            let strIndex = GX.localStorage.getItem("dizhu_" + game.GameId());
            if (strIndex && strIndex.length > 0) {
                idx = parseInt(strIndex);
            }

            DataCenter.Instance.DizhuIndex = idx;

            //this.onClickDizhuButton(cpdizhulist[idx]);
        }



        public addSeatSprite(seatData: game.SeatData) {
            seatData.userChanged.add(this.mainRoleChanged, this);
        }

        private myUser: game.UserInfo;
        public mainRoleChanged(user: game.UserInfo) {
            if (!user || user.uid != uniLib.NetMgr.UID) {
                return;
            }
            // if (user) {
            //     this.myUser = user;
            //     this.myUser.nameChanged.add(this.nameChanged, this);
            //     this.myUser.pointChanged.add(this.chipChanged, this);
            //     this.myUser.headUrlChanged.add(this.setMainRole, this);
            //     this.idLabel.text = "" + this.myUser.uid;
            // }
            // if (user) {
            //     this.addMainRole(user);
            // } else {
            //     this.removeMaionRole();
            // }
        }
        /**
         * 名字
         */
        public nameChanged() {
            // this.nameLabel.text = this.myUser.nickName;
        }

        public chipChanged() {
            let point = this.myUser.point == null ? 0 : this.myUser.point;
            this.moneyLabel.text = GX.GoldFormat(Number(GX.numToFixed(point, 2)), true, true, true);
            if (point != 0) {
                this.myUser.pointChanged.remove(this.chipChanged, this);
                return;
            }
        }

        // private imgHeadMask: egret.Shape;
        /*
        * 设置人物头像
        */
        // public setMainRole() {
        //     if (this.imgHeadMask == null) {
        //         this.imgHeadMask = new egret.Shape();
        //         this.imgHeadMask.graphics.beginFill(0x0);
        //         this.imgHeadMask.graphics.drawCircle(this.imgHead.width / 2, this.imgHead.height / 2, this.imgHead.width / 2);
        //         this.imgHeadMask.graphics.endFill();
        //         this.imgHeadMask.x = this.imgHead.x;
        //         this.imgHeadMask.y = this.imgHead.y;
        //         this.imgHead.parent.addChild(this.imgHeadMask);
        //         this.imgHead.mask = this.imgHeadMask
        //     }
        //     GX.AvatarManager.read(this.myUser.headUrl, (data) => {
        //         this.imgHead.texture = data;
        //     }, this);
        // }

        public onMainGoldChanged(gold: number) {
            console.log("onMainGoldChanged:" + gold)
            this.moneyLabel.text = GX.GoldFormat(Number(GX.numToFixed(gold, 2)), true, true, true);
        }
        public setMainGoldManu(gold: number) {
            console.log("setMainGoldManu triFree:" + gold)
            this.moneyLabel.text = GX.GoldFormat(Number(GX.numToFixed(gold, 2)), true, true, true);
        }

        //取出需要播放的组；
        // public getLineEffectGroup(lineIndex: number): eui.Group {
        //     let playLineGroup: eui.Group = this[`lineEffectGroup${lineIndex}`] as eui.Group;
        //     return playLineGroup;
        // }
        public clearAllLines() {
            this.mLabaMachine.clearAllLines()
            this.clearLastGameAnim()
            this.resetAwardScrollIcon()
            this.tipsGroup.visible = false
            // this.elemAnimMask.visible = false
        }

        /**
         * 进入旋转状态，延时一段时间清空上局赢取的金币数量;
         */
        public onEnterRotating() {

            // this.tesetLinePot()
            // DataCenter.Instance.MaliTriggerMoney = 0
            this.clearAllLines()
            egret.log("call onEnterRotating..");
            let clearGoldlabelFunc = () => {
                game.Timer.setTimeout(() => {
                    if (this.mScrollRaceGoldInfo != null) {
                        this.mScrollRaceGoldInfo.stopCB();
                        this.mScrollRaceGoldInfo = null;
                    }
                    this.raceObtainGoldLabel.text = "0";
                }, null, LabaConfig.DelayClearRaceGoldWhenRotatingTm);
            }
            if (DataCenter.Instance.IsFreeGame()) {
                if (DataCenter.Instance.IsTriggerFreeGame()) {
                    clearGoldlabelFunc();
                }
                else if (DataCenter.Instance.isFirstFreeGame()) {
                    SoundHand.Instance.PlaySoundOnce(ShzSound.FreeStartSound);
                    clearGoldlabelFunc();
                }
            }
            else {
                clearGoldlabelFunc();

            }

            this.mIsRotating = true;
            this.showLeftFgTips();

            this.clearAllHitHighlights();
            this.refreshRotateButtonStatus();
            if (DataCenter.Instance.IsTriggerFreeGame() || !DataCenter.Instance.IsFreeGame())
                SoundHand.Instance.PlayRotateSound();

            if (DataCenter.Instance.CurServerResultDatas && DataCenter.Instance.IsRerotateGame()) {
                // this.characterChooseAnim()
            }
        }
        private highLightInfos: Array<{ stopCB: Function }> = [];

        //清除高亮;
        public clearAllHitHighlights() {
            for (let i: number = 0; i < this.highLightInfos.length; i++) {
                this.highLightInfos[i].stopCB();
            }
            this.highLightInfos = [];
        }
        public getFreeGameChangePos() {
            let wildMap = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
            let elemMap = [8, 7, 6, 5]
            let resultdata = DataCenter.Instance.getResultDatas()
            // if (DataCenter.Instance.WildCount == 0)
            //     return []
            let changeType = DataCenter.Instance.WildCount > 12 ? 4 : wildMap[DataCenter.Instance.WildCount - 1]
            console.log("startmove  DataCenter.Instance.WildCount :", DataCenter.Instance.WildCount, JSON.stringify(resultdata))
            let changePos = []
            for (let col = 0; col < 5; col++) {
                for (let row = 0; row < 3; row++) {
                    for (let index = 0; index < changeType; index++) {
                        let scrollIcon = this.mLabaMachine.getBelt(col).GetElementByIndex(row + 1)
                        if (scrollIcon.ElemType == elemMap[index]) {
                            changePos.push({ row: row, col: col })
                        }
                    }
                }
            }
            for (let pos of changePos) {
                resultdata[pos.row][pos.col] = CLSG_ElemAllType.Wild
            }
            DataCenter.Instance.ChangeIconWin = changePos
            return changePos
        }

        public changeScrollIcon(cb: Function = null) {
            let changePos = this.getFreeGameChangePos()
            if (changePos.length == 0) {
                if (cb) {
                    cb()
                }
                return
            }
            let particlePath = "js_hitPoint";
            let startPosGlobal = FreeGameIngPanel.Instance.getAnimGroupGlobalPos()
            let startPosStart = this.artLineRootGroup.globalToLocal(startPosGlobal.x, startPosGlobal.y)
            let partRes = labalib.Utils.PlayParticle(this.artLineRootGroup, particlePath, { x: 0, y: 0 });
            partRes.particleObj.emitterX = startPosStart.x;
            partRes.particleObj.emitterY = startPosStart.y
            partRes.particleObj.blendMode = "add"
            egret.Tween.removeTweens(partRes.particleObj);
            let partTw = egret.Tween.get(partRes.particleObj);
            console.error("start select wild startmove changePos:", changePos)
            let lastTw = 0
            for (let pos of changePos) {
                let scrollIcon = this.mLabaMachine.getBelt(pos.col).GetElementByIndex(pos.row + 1)
                let targetGlobalPos = scrollIcon.localToGlobal(scrollIcon.width / 2, scrollIcon.height / 2)
                let targetPos = this.artLineRootGroup.globalToLocal(targetGlobalPos.x, targetGlobalPos.y)
                console.log("startmove :", targetPos)

                partTw.to({ emitterX: targetPos.x, emitterY: targetPos.y }, 200)
                    .call(() => {
                        uniLib.SoundMgr.instance.playSound("freestar_mp3", 1)
                        let icon = this.mAwardScrollIcon[pos.row][pos.col]
                        this.winElemAnimNotLineGroup.addChild(icon)
                        icon.PlayChangeAnimation(scrollIcon.ElemType)
                    }).wait(200)
                if (lastTw == changePos.length - 1) {
                    partTw.call(() => {
                        partRes.stopCB()
                    })
                }
                lastTw++
            }

            partTw.wait(2000).call(() => {
                // partRes.stopCB();
                console.error("start select wild endmove-------", cb)
                if (cb) {
                    cb()
                }
            })
        }
        public changeScrollIcon2(cb: Function = null) {
            let wildMap = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]
            let elemMap = [8, 7, 6, 5]
            let resultdata = DataCenter.Instance.getResultDatas()
            let changeElem = DataCenter.Instance.ChangeElemType()
            console.log("changeScrollIcon2 ChangeElemType:", changeElem, JSON.stringify(resultdata), JSON.stringify(DataCenter.Instance.CurServerResultDatas))
            let changePos = []
            for (let col = 0; col < 5; col++) {
                for (let row = 0; row < 3; row++) {
                    let scrollIcon = this.mLabaMachine.getBelt(col).GetElementByIndex(row + 1)
                    console.log("convert map resultdata-pinpan: ", resultdata[row][col], "--", scrollIcon.ElemType)
                    if (resultdata[row][col] == changeElem)
                        resultdata[row][col] = CLSG_ElemAllType.Wild
                    if (scrollIcon.ElemType == changeElem) {
                        changePos.push({ row: row, col: col })
                    }
                }
            }

            DataCenter.Instance.ChangeIconWin = changePos

            console.log("startmove changePos222222:", changePos)

            for (let pos of changePos) {
                let scrollIcon = this.mLabaMachine.getBelt(pos.col).GetElementByIndex(pos.row + 1)
                console.log("changeScrollIcon2  change", this.mAwardScrollIcon, pos)
                let icon = this.mAwardScrollIcon[pos.row][pos.col]
                this.winElemAnimNotLineGroup.addChild(icon)
                icon.PlayChangeAnimation(scrollIcon.ElemType)
            }


        }
        private winElemAnimNotLineGroup: eui.Group
        private rerotateImage: eui.Image
        public mPlayWinAllEffectTimeout: number = 0;
        public playWinAllEffect() {
            game.Timer.clearTimeout(this.mPlayWinAllEffectTimeout)

            LabaGame.Instance.playAllHitElemDefaultEffect()
            this.elemAnimMask.visible = true
            console.log("xxxxxxxxx999999999999999")
            this.mLabaMachine.drawAllLines()
        }
        /**
         * 显示结果，如果是bigwin,则播放bigwin;
         */
        private mScrollRaceGoldInfo: any = null;
        private mmmmm = 0;
        public onEnterShowResult() {
            // 免费累计 直接加到玩家身上
            let obtainGold = DataCenter.Instance.RaceObtainGold;
            DataCenter.Instance.IsGetServerMsg = false
            console.log("xxxasdasdasdqw ", obtainGold, DataCenter.Instance.FreeAccObtainGold)
            // return

            // return
            let awardFun = () => {
                console.log("xasdasdqw22222", obtainGold)
                if (obtainGold > 0) {
                    // return
                    // LabaGame.Instance.playAllHitElemDefaultEffect()
                    this.playWinAllEffect()
                    // return
                    // this.elemAnimMask.visible = true
                    // this.mLabaMachine.drawAllLines()
                    console.error("call onEnterShowResult ")
                    if (DataCenter.Instance.isBigwin(obtainGold)) {
                        this.bigWinPanel.enterBigWinAnim(() => {
                            this.mBigWinInfo = this.bigWinPanel.playGoldWinType(obtainGold, () => {
                                this.characterJumpAnim(0)
                                this.onFinishShowResult()
                            });
                        })
                    }
                    else
                        this.onFinishShowResult()
                    // });
                } else {
                    this.onFinishShowResult()
                }
            }

            if (DataCenter.Instance.IsFreeGame()) {
                if (!DataCenter.Instance.IsTriggerFreeGame()) {
                    console.error("entershow free select wild", this.mmmmm)
                    this.selectWildElem(awardFun)

                    return
                }
                if (DataCenter.Instance.IsTriggerFreeGame()) {
                    LabaGame.Instance.playWildDuobaoElemDefaultEffect(true);
                    game.Timer.setTimeout(awardFun, null, 500)
                    return
                }

            }
            else if (DataCenter.Instance.IsTriggerRerotateGame()) {
                // return
                LabaGame.Instance.playWildDuobaoElemDefaultEffect();
                awardFun()
                return
            }
            else if (DataCenter.Instance.IsRerotateGame()) {
                // this.changeScrollIcon(awardFun)
                let elemChange = DataCenter.Instance.ChangeElemType()
                // [CLSG_ElemAllType.TangSeng, CLSG_ElemAllType.SunWuKong, CLSG_ElemAllType.ZhuBaJie, CLSG_ElemAllType.ShaSeng]
                // 3 2 1 0
                let convert = [0, 1, 3, 2]
                console.log("xasdasdqwqwd", elemChange, )
                // this.characterChooseAnim(convert[elemChange - 5], true, awardFun)
                this.characterChooseAnim(0, true, awardFun)
                return
            }
            LabaGame.Instance.playWildDuobaoElemDefaultEffect();

            awardFun()

        }

        private wildFlyGroup: eui.Group
        private mFlyWildIconList = []


        public FlyWildIconAnim(flypos = [], cb = null): egret.Tween {
            let localPos = FreeGameIngPanel.Instance.getWildFlyPos()
            let retTween = null
            let endpos = this.globalToLocal(localPos.x, localPos.y)
            if (flypos.length > 0)
                uniLib.SoundMgr.instance.playSound("wild_mp3", 1);
            for (let pos of flypos) {
                let lpos = this.globalToLocal(pos.x, pos.y)
                let obj = new FlyWildIcon()
                this.addChild(obj)

                let bazierFlyObj = new Utils.BezierObject(obj)
                let alpha = Math.randomInteger(0, 1) == 0 ? 1 : -1
                bazierFlyObj.setTwoStepParam(lpos, endpos, { x: (lpos.x + endpos.x) / 2 + Math.randomInteger(70, 100) * alpha, y: (lpos.y + endpos.y) / 2 })

                obj.x = lpos.x
                obj.y = lpos.y
                // obj.visible = false
                retTween = egret.Tween.get(bazierFlyObj)
                retTween.set({ visible: true, factor: 0 }).to({ scaleX: 2, scaleY: 2 }, 200)
                    .to({ factor: 1, scaleX: 1.8, scaleY: 1.8 }, 600, egret.Ease.circIn)
                    .call(() => {
                        if (obj.parent) {
                            obj.parent.removeChild(obj)
                        }
                    })

                // obj.x = lpos.x
                // obj.y = lpos.y
                // obj.visible = false
                // retTween = egret.Tween.get(obj)
                // retTween.set({ visible: true }).to({ scaleX: 2, scaleY: 2 }, 200)
                //     .to({ x: endpos.x, y: endpos.y, scaleX: 1.8, scaleY: 1.8 }, 600, egret.Ease.circIn)
                //     .call(() => {
                //         if (obj.parent) {
                //             obj.parent.removeChild(obj)
                //         }
                //     })
            }
            if (retTween == null) {
                if (cb) cb()
                return retTween
            }
            retTween.wait(500).call(() => {
                if (cb) cb()
            })
            return retTween
        }
        public selectWildElem(cb = null) {
            // playGetWildAnim  的第二个参数时间特指开始变化图标的总时间花费
            let globalPosArr = []
            let localPosArr = []
            for (let col = 0; col < 5; col++) {
                for (let row = 0; row < 3; row++) {
                    let scrollIcon = this.mLabaMachine.getBelt(col).GetElementByIndex(row + 1)
                    if (scrollIcon.ElemType == CLSG_ElemAllType.Wild) {
                        let pos = scrollIcon.localToGlobal(scrollIcon.width / 2, scrollIcon.height / 2)
                        globalPosArr.push(pos)
                    }
                }
            }
            let totalWildCount = FreeGameIngPanel.Instance.ProgressValue
            console.error("start select wild special ", JSON.stringify(globalPosArr), totalWildCount)
            if (globalPosArr.length == 0 || totalWildCount >= 12) {
                if (totalWildCount >= 3)
                    FreeGameIngPanel.Instance.playGetWildAnim(FreeInCharacterDragonType.SCALE, 3000, () => {
                        console.error("start select wild special222222222222")
                        this.changeScrollIcon(cb)
                    })
                else
                    this.changeScrollIcon(cb)
                return
            }


            let FirstflyPosArr = []
            let NextflyPosArr = []
            let isNextArr = false
            for (let pos of globalPosArr) {
                if (!isNextArr)
                    FirstflyPosArr.push(pos)
                else
                    NextflyPosArr.push(pos)
                FreeGameIngPanel.Instance.ProgressValue = FreeGameIngPanel.Instance.ProgressValue + 1

                if (FreeGameIngPanel.Instance.ProgressValue % 3 == 0) {
                    isNextArr = true
                }
            }
            console.error("start select wild ", JSON.stringify(FirstflyPosArr), " nextarr:", JSON.stringify(NextflyPosArr))
            if (isNextArr) {
                this.FlyWildIconAnim(FirstflyPosArr, () => {
                    FreeGameIngPanel.Instance.Progress = 3
                    FreeGameIngPanel.Instance.playGetWildAnim(FreeInCharacterDragonType.CHANGE_ROTATE, 500, () => {
                        FreeGameIngPanel.Instance.Progress = 0
                        if (NextflyPosArr.length != 0 && FreeGameIngPanel.Instance.ProgressValue >= 12) {
                            FreeGameIngPanel.Instance.playGetWildAnim(FreeInCharacterDragonType.SCALE, 3000, () => {
                                this.changeScrollIcon(cb)
                            })
                            return
                        }
                        if (NextflyPosArr.length != 0)
                            this.FlyWildIconAnim(NextflyPosArr, () => {
                                FreeGameIngPanel.Instance.Progress = FreeGameIngPanel.Instance.Progress
                                FreeGameIngPanel.Instance.playGetWildAnim(FreeInCharacterDragonType.WIN, 3000, () => {
                                    this.changeScrollIcon(cb)
                                })
                            })
                        else
                            FreeGameIngPanel.Instance.playGetWildAnim(FreeInCharacterDragonType.SCALE, 3000, () => {
                                this.changeScrollIcon(cb)
                            })
                    })
                })
            }
            else {
                this.FlyWildIconAnim(FirstflyPosArr, () => {
                    FreeGameIngPanel.Instance.Progress = FreeGameIngPanel.Instance.Progress
                    FreeGameIngPanel.Instance.playGetWildAnim(FreeInCharacterDragonType.WIN, 3000, () => {
                        this.changeScrollIcon(cb)
                    })
                })
            }


        }


        /**
        * 滚动结束后，是否播放免费结束动画或者继续下一轮旋转;
        */
        protected onFinishShowResult() {
            let count = parseInt(uniLib.BrowersUtils.GetRequest("mmmm"))
            count = count == 0 ? 60 : count
            console.log('DataCenter.Instance.IsFreeGame:' + DataCenter.Instance.IsFreeGame())
            console.log('DataCenter.Instance.IsTriggerRerotateGame:' + DataCenter.Instance.IsTriggerRerotateGame())
            console.log('DataCenter.Instance.IsRerotateGame():' + DataCenter.Instance.IsRerotateGame())
            if (DataCenter.Instance.IsFreeGame()) {
                if (DataCenter.Instance.IsTriggerFreeGame()) {
                    this.doFreeTrigger()
                    console.log("xxxxxxasssss")
                    this.mIsFreeGameIng = true;
                }
                else if (DataCenter.Instance.IsFreeGameEnd()) {
                    this.doFreeEnd()
                    this.doRefreshGoldDisplay()
                }
                else {
                    // if (this.mmmmm > 0)
                    //     return
                    // this.mmmmm++
                    this.doFreeIng()
                    this.doRefreshGoldDisplay(false)
                }
            }
            else if (DataCenter.Instance.IsTriggerRerotateGame()) {

                this.mIsInReRotategame = true;
                game.Timer.setTimeout(() => {
                    this.doReRotateTrigger()
                    // this.doRefreshGoldDisplay(false)
                }, null, 1500)

            }
            else if (DataCenter.Instance.IsRerotateGame()) {
                this.doReRotateIng()
                this.doRefreshGoldDisplay()
            }
            else {
                this.doRefreshGoldDisplay()
                this.mIsRotating = false;
                this.refreshRotateButtonStatus();
                this.mGameButtonStatus = GameRotateStatus.RotateNormal
                this.gameRotateButton.enabled = true
                if (this.IsAutoRotating)
                    this.doNormal()


            }
        }
        public doRefreshGoldDisplay(isDisPlay = true) {
            let raceNo: number = DataCenter.Instance.CurRaceNo;
            let obtainGold = DataCenter.Instance.RaceObtainGold;
            DataCenter.Instance.MainUserGold = DataCenter.Instance.MainUserGold + obtainGold;
            if (isDisPlay)
                DataCenter.Instance.DisplayRaceGold(raceNo);
            this.raceObtainGoldLabel.text = "" + obtainGold
            this.switchTipsImage(4, obtainGold)
        }
        public delayRotateTimer: number

        public doNormal(rotateNext: boolean = true, isdelay: boolean = true) {
            console.log('免费旋转一次--------------')
            game.Timer.clearTimeout(this.delayRotateTimer);
            let waitTimer = 1500
            this.refreshRotateButtonStatus();

            if (!this.mLabaMachine.runDelayMessage()) {
                if (isdelay)
                    this.delayRotateTimer = game.Timer.setTimeout(() => {
                        this.onRotateButton();
                        this.mAutoRotateTimer = 0;
                        this.refreshRotateButtonStatus();
                    }, null, 1500);
                else {
                    this.onRotateButton();
                    this.mAutoRotateTimer = 0;
                    this.refreshRotateButtonStatus();
                }
            }
        }
        private doFreeEndDelayTimer: number = 0
        public doFreeEnd() {
            this.mIsFreeGameIng = false;
            this.mIsRotating = false;
            this.refreshRotateButtonStatus();
            console.error("zzzzzzzzzzz  doFreeEnd     z")
            game.Timer.clearTimeout(this.doFreeEndDelayTimer)
            this.doFreeEndDelayTimer = game.Timer.setTimeout(() => {
                FreeReultPanel.Instance.showFreeEnd(() => {
                    SoundHand.Instance.endLabaBg()
                    SoundHand.Instance.switchMusicBG()
                    FreeGameIngPanel.Instance.ResetCharacterDragon()
                    this.mIsRotating = false;
                    this.mGameButtonStatus = GameRotateStatus.RotateNormal
                    this.gameRotateButton.enabled = true
                    console.error("zzzzzzzzzzz  doFreeEnd  showFreeEnd   z")
                    if (this.IsAutoRotating)
                        this.doNormal()
                })
            }, null, 2000)

        }
        public doFreeIng() {
            FreeGameIngPanel.Instance.LeftFreeCount = FreeGameIngPanel.Instance.LeftFreeCount - 1
            this.mGameButtonStatus = GameRotateStatus.RotatePause
            this.gameRotateButton.enabled = true
            this.doNormal()
        }
        public doReRotateIng() {
            this.mIsInReRotategame = false;
            this.rerotateImage.visible = false
            this.mIsRotating = false;
            this.refreshRotateButtonStatus();
            this.mGameButtonStatus = GameRotateStatus.RotateNormal
            this.gameRotateButton.enabled = true
            if (this.IsAutoRotating)
                this.doNormal()
        }
        public doReRotateTrigger() {
            egret.Tween.removeTweens(this.animGroup)
            uniLib.SoundMgr.instance.playSound("chongzhuan_mp3", 1);
            egret.Tween.get(this.animGroup).set({ alpha: 0, y: -450 }).to({ y: -434, alpha: 1 }, 700).wait(1000).
                call(() => {
                    this.mGameButtonStatus = GameRotateStatus.RotatePause
                    this.gameRotateButton.enabled = true
                    this.doNormal(false)
                    this.rerotateImage.visible = true
                    this.switchTipsImage(2)
                    this.characterChooseAnim(1, false)
                }).to({ alpha: 0 }, 700)

            // this.playRerotateWord()


        }
        public nextDoTimer: number = 0
        public doFreeTrigger() {
            game.Timer.clearTimeout(this.nextDoTimer)
            this.nextDoTimer = game.Timer.setTimeout(() => {
                SoundHand.Instance.endLabaBg()
                SoundHand.Instance.switchMusicBG(false)
                FreeGameIngPanel.Instance.LeftFreeCount = 8
                labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {

                    this.lcloud.alpha = 0
                    this.rcloud.alpha = 0
                    FreeGameStart.Instance.Show(() => {
                        this.mGameButtonStatus = GameRotateStatus.RotatePause
                        this.gameRotateButton.enabled = true
                        this.doNormal()
                    })
                    this.switchBG(GameBG.free)
                })

                // this.lcloud.visible = true
                // this.rcloud.visible = true

            }, null, 2000)


        }

        public playRerotateWord(start: boolean = true) {

        }


        public clearLastGameAnim() {
            for (let i = 0; i < DataCenter.Instance.BeltCount; i++) {
                let belt = this.mLabaMachine.getBelt(i) as LabaBelt
                belt.clearLastGameAnim()
            }
            for (let row of this.mAwardScrollIcon) {
                for (let icon of row) {
                    if (icon.parent) {
                        icon.parent.removeChild(icon)
                    }
                    icon.StopAnimation()
                }
            }
            this.playHighDuobaoAnim([], true)
            this.elemAnimMask.visible = false
        }        // public playAllHitElemEffect(cb?: Function, lineindex = -1) {


        public playAllHitElemDefaultEffect(cb?: Function, lineIndex = -1) {
            let results = DataCenter.Instance.getResultDatas();
            //   results = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
            let resultInfo = SgmlHelper.Instance.getResultAllLinesAndMultipy(results);
            // console.log("xxxxasd", JSON.stringify(results))
            // console.log("xxxxasd", JSON.stringify(resultInfo))
            let lines = resultInfo.LineInfos;




            for (let i = 0; i < DataCenter.Instance.BeltCount; i++) {
                let belt = this.mLabaMachine.getBelt(i) as LabaBelt
                belt.clearLastGameAnim()
            }


            let isPlayFlag = [[false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false]]
            let changePos = DataCenter.Instance.ChangeIconWin
            for (let pos of changePos) {
                isPlayFlag[pos.row][pos.col] = true
            }

            // console.error("sssssssssdqwwwwwww  :", JSON.stringify(isPlayFlag))
            if (lines.length > 0) {
                this.winElemAnimNotLineGroup.parent.addChild(this.winElemAnimNotLineGroup)
                this.elemAnimMask.parent.addChild(this.elemAnimMask)
                this.winElemAnimGroup.parent.addChild(this.winElemAnimGroup)
            }
            for (let i: number = 0; i < lines.length; i++) {
                let line = lines[i];
                if (lineIndex == -1) {
                    // return
                    let lineInfo = SgmlHelper.Instance.getLineInfo(line.LineType);

                    for (let i: number = 0; i < lines.length; i++) {
                        let line = lines[i];
                        let lineInfo = SgmlHelper.Instance.getLineInfo(line.LineType);
                        for (let j: number = 0; j < line.ConnectCount; j++) {
                            let hitColIndex = j;
                            let scrollIcon = this.mLabaMachine.getBelt(hitColIndex).GetElementByIndex(4 - lineInfo[hitColIndex]);
                            let row = - (lineInfo[hitColIndex] - 4) - 1
                            // console.log("row  col lineindex lineInfo", line.LineType, lineInfo, row, hitColIndex, scrollIcon.ElemType)
                            let icon = this.mAwardScrollIcon[row][hitColIndex] as AwardScrollIcon
                            let showBG = scrollIcon.ElemType == CLSG_ElemAllType.Wild || scrollIcon.ElemType == CLSG_ElemAllType.DuoBao
                            this.winElemAnimGroup.addChild(icon)
                            if (!isPlayFlag[row][hitColIndex]) {
                                icon.PlayWinAnimation(scrollIcon.ElemType)
                                isPlayFlag[row][hitColIndex] = true
                            }


                        }
                    }
                }
                else {
                    // return
                    for (let row of this.mAwardScrollIcon) {
                        for (let icon of row) {
                            if (icon.parent && icon.parent == this.winElemAnimGroup) {
                                // console.log("xxxxxxxzzzzza2313124 ",icon.Special)
                                if (icon.Special) {
                                    icon.BGGroup = false
                                    this.winElemAnimNotLineGroup.addChild(icon)
                                }
                                else
                                    icon.parent.removeChild(icon)
                            }
                        }
                    }
                    // console.log("xxxxxxxxxassssssss1111", lineIndex, this.ddd, JSON.stringify(isPlayFlag))

                    for (let i: number = 0; i < lines.length; i++) {
                        let line = lines[i];
                        let lineInfo = SgmlHelper.Instance.getLineInfo(line.LineType);
                        if (line.LineType == lineIndex)
                            for (let j: number = 0; j < line.ConnectCount; j++) {
                                let hitColIndex = j;
                                let scrollIcon = this.mLabaMachine.getBelt(hitColIndex).GetElementByIndex(4 - lineInfo[hitColIndex]);
                                let row = - (lineInfo[hitColIndex] - 4) - 1
                                // if (!isPlayFlag[row][hitColIndex]) {
                                let isChange = false
                                for (let pos of changePos) {
                                    if (pos.row == row && pos.col == hitColIndex)
                                        isChange = true
                                }
                                let icon = this.mAwardScrollIcon[row][hitColIndex]
                                this.winElemAnimGroup.addChild(icon)

                                icon.PlayWinAnimation(scrollIcon.ElemType)

                                // }

                            }
                    }
                }
            }


        }
        public ddd = 0
        public mAwardScrollIcon = []
        //播放命中元素的默认动画  特指没中奖的wild 和百搭
        public playWildDuobaoElemDefaultEffect(freeTri: boolean = false) {

            this.winElemAnimNotLineGroup.parent.addChild(this.winElemAnimNotLineGroup)
            this.elemAnimMask.parent.addChild(this.elemAnimMask)
            this.winElemAnimGroup.parent.addChild(this.winElemAnimGroup)
            let changepos = DataCenter.Instance.ChangeIconWin
            for (let row: number = 0; row < 3; row++) {
                for (let col: number = 0; col < 5; col++) {
                    let isChange = false
                    for (let pos of changepos) {
                        if (row == pos.row && col == pos.col)
                            isChange = true
                    }
                    if (isChange)
                        continue
                    let scrollIcon = this.mLabaMachine.getBelt(col).GetElementByIndex(row + 1);
                    if (scrollIcon && (scrollIcon.ElemType == 9 || scrollIcon.ElemType == 10)) {
                        scrollIcon.visible = false
                        let playIcon = this.playHitScrollIcon(scrollIcon.ElemType, row, col, freeTri)
                        this.winElemAnimNotLineGroup.addChild(playIcon)
                    }
                }
            }


        }






        //点击返回按钮;
        public onBackButton() {
            if (uniLib.Global.lobbyMode) {
                // 如果为大厅模式，派发事件行为给大厅处理
                // egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.MenuRecovery, this)
                // this.backButton.visible = false;
                uniLib.Global.dispatchEvent(uniLib.CustomEvent.Show_MenuPanel);
            } else {
                // 游戏模式，直接请求服务端退出
                let cmd = new Cmd.LeaveRoomCmd_CS();
                cmd.uid = uniLib.NetMgr.UID;
                game.PokerFunction.tcpSend(cmd);
            }
        }
        //-------------------------------------------------------
        /**
         * 点击赔付表按钮;
         */
        public moneyBox: eui.Group
        protected onCompensationTableButton() {
            this.popGroup.visible = true
            this.popGroup.addChild(CompensationTableView.Instance)
            egret.Tween.get(CompensationTableView.Instance).set({ x: 0, y: 220 }).to({ y: 220 - 1280 }, 400)
            this.moneyBox.visible = false
            // GX.PopUpManager.addPopUp(CompensationTableView.Instance, true, GX.PopUpEffect.BOTTOM);

        }
        //点击规则按钮
        protected onRuleListButton() {
            this.popGroup.visible = true
            this.popGroup.addChild(RuleView.Instance)
            egret.Tween.get(RuleView.Instance).set({ x: 0, y: 220 }).to({ y: 220 - 1280 }, 400)
            this.moneyBox.visible = false
            // GX.PopUpManager.addPopUp(RuleView.Instance, true, GX.PopUpEffect.BOTTOM);
        }

        //打开投注界面按钮

        protected onBetGoldButton() {
            this.popGroup.visible = true
            this.popGroup.addChild(BetGoldView.Instance)
            egret.Tween.get(BetGoldView.Instance).set({ x: 0, y: 220 }).to({ y: 220 - 1280 }, 400)
            // GX.PopUpManager.addPopUp(BetGoldView.Instance, true, GX.PopUpEffect.BOTTOM);
        }

        public setRotationSetButtonBG(isQuick) {
            console.log("xxasd", this.rotationButton.skin,
                this.rotationButton.skin["bg"], this.rotationButton.getChildByName("bg"))

            // this.rotationButton.skinName.skin["bg"].source = isQuick ? "icon_auto_spin_menu" : "icon_auto_spin_menu"
        }
        //点击旋转按钮
        protected onRotationSetButton() {
            this.popGroup.visible = true
            this.popGroup.addChild(RotationSetView.Instance)
            egret.Tween.get(RotationSetView.Instance).set({ x: 0, y: 220 }).to({ y: 220 - 1280 }, 400)
            // let num = Math.floor(Math.random() * 5)
            // this.characterChooseAnim(3, true)
            // this.characterChooseAnim(0, false)
            // this.onAdddonghuaEff(2, this.effGroup);

        }

        //声音开关
        protected onSoundSetButton() {
            if (this.soundSetButton.currentState == 'up') {
                uniLib.SoundMgr.instance.musicOpen = false
                uniLib.SoundMgr.instance.soundOpen = false
                this.soundSetButton.currentState = "down"
            } else {
                this.soundSetButton.currentState = "up"
                uniLib.SoundMgr.instance.musicOpen = true
                uniLib.SoundMgr.instance.soundOpen = true

            }
        }

        protected onRotationButton() {
            console.log(this.rotationButton.currentState, 'this.rotationButton')
            if (this.rotationButton.currentState == 'up') {
                this.rotationButton.currentState = "down"
                this.rotationSetButton.currentState = "down"
                DataCenter.Instance['mIsQuickRotate'] = true
            } else {
                this.rotationButton.currentState = "up"
                this.rotationSetButton.currentState = "up"
                DataCenter.Instance['mIsQuickRotate'] = false
            }
        }

        // 点击菜单按钮
        protected onMenuListButton() {
            this.menuListGroup.visible = true;
            egret.Tween.get(this.menuListGroup).set({ y: 108 }).to({ y: 0 }, 200)
            this.betMenuGruop.visible = false;
        }
        // 点击关闭菜单按钮
        protected onCloseMenuButton() {
            this.betMenuGruop.visible = true;
            egret.Tween.get(this.betMenuGruop).set({ y: 185 }).to({ y: 35 }, 200)
            this.menuListGroup.visible = false;
        }


        public onBeltRotateBegin(param) {
            let beltIndex = param.beltIndex;
            let speed = param.speed * 1000;
            // console.error("onBeltRotateBegin,", beltIndex, speed);
            // this["BeltHighScoll" + (beltIndex)].visible = true;
            // let outAnim = labalib.Utils.PlayMovieAnimInfo(this.mOutGridIcons[this.mCurAroundIndex].Root.parent, LabaConfig.MaliElemEffect);

            // if (speed >= LabaConfig.BeltScrollSpeed - 3) {
            //     // if (!DataCenter.Instance.getIsHighRotate()) {
            //     labalib.EventManager.Instance.dispatchEvent(labalib.LabaBaseEvent.LabaBeltSetBlur, { beltIndex: beltIndex, blur: true });
            //     // }
            // } else {
            //     labalib.EventManager.Instance.dispatchEvent(labalib.LabaBaseEvent.LabaBeltSetBlur, { beltIndex: beltIndex, blur: false });
            // }
        }
        /**
         * 停止高速滚动;
         */
        public onBeltRotateEnd(param) {
            let beltIndex = param.beltIndex;
            // let speed = param.speed * 1000;
            // let stageIndex = param.stageRevertIndex;
            // if (stageIndex == undefined) {
            //     stageIndex = 0;
            // }
            let rest = DataCenter.Instance.getResultDatas()
            console.log("xxxasdasd", rest)
            console.log("xxxz2311", rest[0][1], rest[1][1], rest[2][1])
            let pos = -1
            for (let i = 2; i >= 0; i--) {
                if (rest[i][beltIndex - 1] == CLSG_ElemAllType.DuoBao) {
                    pos = i + 1
                    break
                }
            }
            if (pos == -1)
                return
            console.log("playHighDuobaoAnim ", { beltindex: beltIndex, pos: pos })
            this.playHighDuobaoAnim([{ beltindex: beltIndex, pos: pos }])
            // this["BeltHighScoll" + (beltIndex)].visible = false;
        }

        public switchBG(type: GameBG) {
            this.bg1.visible = type == GameBG.free
            this.centerGroup.visible = type == GameBG.normal
            this.centerFreeGroup.visible = type == GameBG.free

            this.downPanel.visible = type == GameBG.normal
        }
        private winBitmapLabel: eui.BitmapLabel
        private winWorldGroup: eui.Group
        private winMoneyImage: eui.Image
        private winMoneyLabel: eui.BitmapLabel
        private winAnimBarGroup: eui.Group
        private mMaxShowTipsTimer: number = 0
        public switchTipsImage(type: switchType, obtainGold?: number) {
            game.Timer.clearTimeout(this.mMaxShowTipsTimer)
            egret.Tween.removeTweens(this.TipsImage)
            let target = 0
            let moveTween = egret.Tween.get(this.TipsImage, { loop: true })
            let widthlist = [441, 543, 571, 831, 253, 218, 608]
            let tipsImageSrc = ["infoboard-info_", "infoboard-info_5", "infoboard-info_6", "infoboard-win", "infoboard-total_win"]
            let tipsImageSrcWidth = [253, 218, 82, 122]
            this.TipsImage.y = 35

            let parent = this.TipsImage.parent
            this.TipsImage.visible = !((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)
            this.winWorldGroup.visible = ((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)
            this.winAnimBarGroup.visible = ((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)
            this.worldGroup.visible = !((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)

            console.log("xxxxxxxxzzzzzzz ", this.winWorldGroup.visible, this.winAnimBarGroup.visible)
            // if (type != 1) {
            //     this.TipsImage.source = tipsImageSrc[type - 1]
            //     this.TipsImage.x = (parent.width - tipsImageSrcWidth[type - 2]) / 2
            // }

            if (type == switchType.normal) {
                let showImageIndex = [1, 2, 7, 3, 4]
                for (let idx of showImageIndex) {
                    let posX = (parent.width - widthlist[idx - 1]) / 2
                    let moveWidth = posX > 0 ? posX : 20
                    if (idx == 4 || idx == 7) {
                        moveTween.set({ x: moveWidth, source: "infoboard-info_" + idx }).wait(300).to({ x: -widthlist[idx - 1] }, 5000)
                    } else {
                        moveTween.set({ x: moveWidth, source: "infoboard-info_" + idx }).wait(5000)
                    }
                }
            }
            else if (type == switchType.again) {


            } else if (type == switchType.cover) {

                // moveTween.to({ x: (parent.width - widthlist[5]) / 2 }, 5000)
            } else if ((type == switchType.win || type == switchType.winTotal) && obtainGold > 0) {

                // this.worldGroup.addChild(this.winWorldGroup)
                // this.winMoneyLabel.text = DataCenter.Instance.RaceObtainGold + ""
                // this.winMoneyImage.source = tipsImageSrc[type - 1]
                console.log('type------------', type)
                if (type == switchType.win) {
                    this.winMoneyImage.source = tipsImageSrc[type - 1]
                } else {
                    this.winMoneyImage.source = tipsImageSrc[type - 1]
                }
                let timer = null
                console.log("xxxxxxxxxas", obtainGold)
                this.winAnimBarGroup.visible = false
                this.winMoneyLabel.visible = false
                this.winMoneyImage.visible = false

                this.winMoneyLabel.text = GX.GoldFormat(DataCenter.Instance.RaceObtainGold, true, true, true)
                let muti = DataCenter.Instance.RaceObtainGold * 30 / DataCenter.Instance.CurDizhu
                if (!DataCenter.Instance.isBigwin(DataCenter.Instance.RaceObtainGold) && muti > 60) {
                    console.log("ssssssssssddddddddw")
                    uniLib.SoundMgr.instance.playSound("scrollgold_mp3", 1);
                    labalib.Utils.scrollNumber(this.winMoneyLabel, 0, DataCenter.Instance.RaceObtainGold, 2400, () => {
                        // uniLib.SoundMgr.instance.playSound("scrollgold2_mp3", 1);
                    })
                } else
                    this.winMoneyLabel.text = GX.GoldFormat(DataCenter.Instance.RaceObtainGold, true, true, true)
                this.winMoneyLabel.visible = true
                this.winMoneyImage.visible = true

                this.playWinBarAnim(true)
                this.winAnimBarGroup.visible = true
            }
            if (type != 1)
                this.mMaxShowTipsTimer = game.Timer.setTimeout(() => {
                    this.switchTipsImage(1)
                }, null, 8000)
        }


        public resetAwardScrollIcon() {
            this.elemAnimMask.visible = false
            for (let rows of this.mAwardScrollIcon) {
                for (let obj of rows) {
                    obj.StopAnimation()
                }
            }

            // this.winElemAnimNotLineGroup.parent.addChild(this.winElemAnimNotLineGroup)
            // this.elemAnimMask.parent.addChild(this.elemAnimMask)
            // this.winElemAnimGroup.parent.addChild(this.winElemAnimGroup)
            // for (let rows of this.mAwardScrollIcon) {
            //     for (let obj of rows) {
            //         this.winElemAnimGroup.addChild(obj)
            //         let rad = Math.randomInteger(0, 3)
            //         // obj.PlayChangeAnimation(Math.randomInteger(5, 8))
            //         if (rad == 0) {
            //             obj.PlayDefautAnimation(Math.randomInteger(9, 10))
            //         }
            //         else if (rad == 1) {
            //             obj.PlayWinAnimation(Math.randomInteger(9, 10))
            //         } else
            //             obj.PlayChangeAnimation(Math.randomInteger(5, 8))
            //     }
            // }
        }
    }

}
