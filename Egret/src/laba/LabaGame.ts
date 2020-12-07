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
        stop = 3
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

        private centerAnimArr: Array<labalib.Utils.KeyFrameObject> = [];

        // private cloud: egret.tween.TweenGroup;

        private bg2: eui.Image
        // private lcloud: eui.Image
        // private rcloud: eui.Image
        private centerFreeGroup: eui.Group
        private TipsImage: eui.Image
        public betNumLabel: eui.Label
        private popGroup: eui.Group
        public artLineRootGroup: eui.Group;    //美术线的根节点;
        private elemAnimMask: eui.Group
        private backButton: game.Button
        private animGroup: eui.Group

        public mysteriousData: any = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        private maskImage1:eui.Image;
        private maskImage2:eui.Image;
        public freemGroup:eui.Group;

        public maskRect:eui.Rect;
        public isFreeGame = false;
        



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
            this.empty();

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

            let jiaSu1 = uniLib.DisplayUtils.createMovieClicp("clsg_jiaSuMov");
            this.freeIconGroup.addChild(jiaSu1);
            jiaSu1.blendMode = egret.BlendMode.ADD;
            jiaSu1.play(-1);
            jiaSu1.scaleX = 1.5;
            jiaSu1.scaleY = 1.5;
            jiaSu1.y = 250;
            this.mHighRotateAnimArr.push(jiaSu1)
            this.LabaBeltRootGroup.addChild(this.LabaBeltRootGroup.getChildByName("belt4Group"))

            // this.mHighRotateAnimArr.push(dragon2)

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

            // let posdd = [196, 330, 464]
            // for (let i = 0; i < 3; i++) {
            //     let high3 = labalib.Utils.PlayMovieAnimInfo(this.LabaBeltRootGroup, LabaConfig.HighRotate[2]);
            //     this.mBeltMaskAnimArr.push(high3)
            //     high3.x = posdd[i]
            //     high3.visible = false
            //     this.LabaBeltRootGroup.addChildAt(high3, 0)
            // }
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

            // this.maskImage1.x = uniLib.Global.screenWidth/2+360;

            // this.maskImage2.x = 0;
            // this.maskImage2.width = (uniLib.Global.screenWidth-720)/2;

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
            this.GameRotateButtomTween(GameRotateChoose.normal)
            this.switchTipsImage(1)
            // this.initHitScrollonIcon()
            // this.playWinBarAnim(false)
            this.initLineInfo()
            this.onResize();
            this.playHelloMonkeyMov();
            this.playLeafMov();
            this.playMonkeyMov();
            this.playMonkeyAfterMov();
            this.playMonkeyAboutMov();

        }
        private iconLineGroup: eui.Group
        private mLineTipsInfoArr = []
        public initLineInfo() {
            for (let i = 0; i < 20; i++) {
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
                group.touchEnabled = false;
                this.mLineTipsInfoArr.push(group)
                this.iconLineGroup.addChild(group)
            }
            let image = new eui.Image("heidi_jianbian")
            image.name = "mutiImage"
            image.horizontalCenter = "0"
            image.scaleX = 0.6
            image.scaleY = 0.6
            image.touchEnabled = false;
            this.iconLineGroup.addChild(image)

            let label = new eui.BitmapLabel()
            label.font = "number2_fnt"
            label.name = "muti"
            label.horizontalCenter = "0"
            label.scaleX = 0.6
            label.scaleY = 0.6
            label.touchEnabled = false;
            this.iconLineGroup.addChild(label)
            // label.text = "22222"
            this.hideAllLineTips()
            this.iconLineGroup.name = "iconLineGroup"
        }

        private MonkeyFreeMov1: dragonBones.EgretArmatureDisplay = null;
        private lightFreeMov: dragonBones.EgretArmatureDisplay = null;
        private menImage:eui.Image;
        private gameNameImage:eui.Image;
        private freeBgImage:eui.Image;
        private torchImage1:eui.Image;
        private torchImage2:eui.Image;
        private torchMov1:egret.MovieClip = null;
        private torchMov2:egret.MovieClip = null;
        private bgImage:eui.Image;
        private branchImage1:eui.Image;
        private branchImage2:eui.Image;




        /**
         * 初始替换免费动画
         */
        public playFreeMov() {
            this.isFreeGame = true;
            this.MonkeyMov1.visible = false;
            this.MonkeyMov2.visible = false;
            this.branchImage1.visible = true;
            this.branchImage2.visible = true;
            this.bgImage.source = "background_c_png";
            // this.MonkeyMov3.visible = false;
            // this.helloMonkeyMov.visible = false;
            this.helloMonkeyMov.alpha = 0;
            // if (this.stepOnThehelloMonkeyTime) {
            //     game.Timer.clearTimeout(this.stepOnThehelloMonkeyTime);
            //     this.stepOnThehelloMonkeyTime = null;
            // }
            // if (this.stepOnThehelloMonkeyMov) {
            //     this.helloMonkeyMov.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.playHelloMonkeyMov1, this);
            //     this.stepOnThehelloMonkeyMov = null;
            // }
            this.gameNameImage.visible = false;
            this.freeBgImage.visible = true;
            this.freeBgImage.blendMode = egret.BlendMode.ADD
            this.menImage.source = "bg_temple";
            this.playMonkeyFreeMov();

            this.torchImage1.visible = true;
            this.torchImage2.visible = true;
            this.leafMov1.visible = false;
            // this.leafMov2.visible = false;

            if (!this.torchMov1) {
                this.torchMov1 = uniLib.DisplayUtils.createMovieClicp("clsg_huoMov");
                this.leafGroup.addChild(this.torchMov1);
                this.torchMov1.blendMode = egret.BlendMode.ADD;
                this.torchMov1.x = 40;
                this.torchMov1.y = 135;
                this.torchMov1.scaleX = 1.5;
                this.torchMov1.scaleY = 1.5;

                this.torchMov2 = uniLib.DisplayUtils.createMovieClicp("clsg_huoMov");
                this.leafGroup.addChild(this.torchMov2);
                this.torchMov2.blendMode = egret.BlendMode.ADD;
                this.torchMov2.x = 680;
                this.torchMov2.y = 135;
                this.torchMov2.scaleX = 1.5;
                this.torchMov2.scaleY = 1.5;
            }
            if (!this.lightFreeMov) {
                this.lightFreeMov = uniLib.DragonUtils.createDragonBoneAnimation("bg_guang")
                this.lightFreeMov.x = 280;
                this.lightFreeMov.y = 500;
                this.MonkeyMovGroup.addChild(this.lightFreeMov);
                this.lightFreeMov.alpha = 0.2;
            }
            this.lightFreeMov.animation.play(null,0)
            this.torchMov1.visible = true;
            this.torchMov2.visible = true;
            this.torchMov1.gotoAndPlay(0,-1);
            this.torchMov2.gotoAndPlay(0,-1)

        }
        /**
         * 停止免费动画
         */
        public stopFreeMov() {
            // conglinshuiguo.LabaGame.Instance.stopFreeMov()
            this.MonkeyMov1.visible = true;
            this.isFreeGame = false;
            this.MonkeyMov2.visible = true;
            this.branchImage1.visible = false;
            this.branchImage2.visible = false;
            // this.MonkeyMov3.visible = true;
            this.bgImage.source = "background_a_png";
            // this.helloMonkeyMov.visible = true;
            this.helloMonkeyMov.alpha = 1;
            // this.playHelloMonkeyMov();
            this.gameNameImage.visible = true;
            this.freeBgImage.visible = false;
            this.freeBgImage.blendMode = null;
            this.menImage.source = "mg_temple";
            this.leafMov1.visible = true;
            // this.leafMov2.visible = true;
            if (this.MonkeyFreeMov1){
                egret.Tween.removeTweens(this.MonkeyFreeMov1)
                this.MonkeyFreeMov1.animation.stop();
                if(this.MonkeyFreeMov1.parent){
                    this.MonkeyFreeMov1.parent.removeChild(this.MonkeyFreeMov1)
                }
                this.MonkeyFreeMov1.dispose();
                this.MonkeyFreeMov1 = null;
            }
            if (this.lightFreeMov){
                this.lightFreeMov.animation.stop();
                if(this.lightFreeMov.parent){
                    this.lightFreeMov.parent.removeChild(this.lightFreeMov)
                }
                this.lightFreeMov.dispose();
                this.lightFreeMov = null;
            }
            if(this.torchMov1){
                this.torchMov1.stop();
                this.torchMov2.stop();
                this.torchMov1.visible = false
                this.torchMov2.visible = false
            }

            this.torchImage1.visible = false;
            this.torchImage2.visible = false;

            for(let item of this.stickMovBg){
                if(item.parent){
                    item.parent.removeChild(item)
                }
                item = null;
            }
            this.stickMovBg = [];
            for(let item of this.bombShuYe){
                item.stop();
                if(item.parent){
                    item.parent.removeChild(item)
                }
                item = null;
            }
            this.bombShuYe = [];
            if (this.stickMov){
                this.stickMov.stop();
                if(this.stickMov.parent){
                    this.stickMov.parent.removeChild(this.stickMov)
                }
                this.stickMov = null;
            }

        }
        /**
         * 替换上方三只猴子
         */
        public playMonkeyFreeMov(direction:boolean = true) {
            if (this.MonkeyFreeMov1){
                egret.Tween.removeTweens(this.MonkeyFreeMov1)
                this.MonkeyFreeMov1.animation.stop();
                if(this.MonkeyFreeMov1.parent){
                    this.MonkeyFreeMov1.parent.removeChild(this.MonkeyFreeMov1)
                }
                this.MonkeyFreeMov1.dispose();
                this.MonkeyFreeMov1 = null;
            }
            let stringMov = ["bg_lemur_A","bg_lemur_B","bg_lemur_C"]
            let action = stringMov[MathUtil.random(0,2)];
            this.MonkeyFreeMov1 = uniLib.DragonUtils.createDragonBoneAnimation(action)
            this.MonkeyFreeMov1.y = 330;
            this.MonkeyFreeMov1.scaleX = direction?-2:2;
            this.MonkeyFreeMov1.scaleY = 2;
            this.MonkeyMovGroup.addChild(this.MonkeyFreeMov1);
            this.MonkeyFreeMov1.animation.play(null,0)
            let playX = direction?-100:820;
            let endX = direction?820:-100;
            egret.Tween.get(this.MonkeyFreeMov1).set({ x: playX }).to({ x:endX }, 4000).call(() => {
                this.playMonkeyFreeMov(!direction)
            })
        }
        private stickMov:egret.MovieClip = null;
        private freeIconGroup:eui.Group;
        public stickMovBg:eui.Image[] = [];
        public freeIconBg:any = [];
        

        /**
         * 粘图案动画
         */
        public freeStickMov() {
            if(this.stickMovBg.length>0){
                return;
            }
            SoundHand.Instance.playFreeIcon1Sound()
            // if (!this.stickMov) {
            this.freeIconBg = [[0,0,0],[0,0,0],[0,1,0],[0,0,0],[0,0,0]]
            let stickMov = uniLib.DisplayUtils.createMovieClicp("clsg_freeAppearMov");
            this.mysteriousBoxGroup.addChild(stickMov);
            stickMov.blendMode = egret.BlendMode.ADD;
            stickMov.x = 355;
            stickMov.y = 250;
            stickMov.scaleX = 1.5;
            stickMov.scaleY = 1.5;
            stickMov.frameRate = 20;
                // stickMov.y = 135;
            // }
            this.stickMovBg = [];
            let lvYeMov;
            // let stickMovBg;
            let stickBg;
            stickMov.play(1);

            let icon1 = this.elemPos[1][2];
            let stickMovBg1 = new eui.Image("glow_c_mystery");
            stickMovBg1.x = icon1.x;
            stickMovBg1.y = icon1.y;
            stickMovBg1.scaleX = 0;
            stickMovBg1.scaleY = 0;
            stickMovBg1.anchorOffsetX = 88/2;
            stickMovBg1.anchorOffsetY = 88/2;
            this.mysteriousBoxGroup.addChild(stickMovBg1);

            let stickMovBg2 = new eui.Image("solid_c");
            stickMovBg2.blendMode = egret.BlendMode.ADD;
            stickMovBg2.x = icon1.x;
            stickMovBg2.y = icon1.y;
            stickMovBg2.scaleX = 0;
            stickMovBg2.scaleY = 0;
            stickMovBg2.anchorOffsetX = 114/2;
            stickMovBg2.anchorOffsetY = 117/2;
            this.mysteriousBoxGroup.addChild(stickMovBg2);

            egret.Tween.get(stickMovBg1).to({ scaleX:3,scaleY:3 }, 300);
            egret.Tween.get(stickMovBg2).to({ scaleX:3,scaleY:3 }, 300).call(() => {
                lvYeMov = uniLib.DisplayUtils.createMovieClicp("dot_particle");
                this.mysteriousBoxGroup.addChild(lvYeMov);
                lvYeMov.x = icon1.x;
                lvYeMov.y = icon1.y;
                lvYeMov.scaleX = 1.5;
                lvYeMov.scaleY = 1.5;
                lvYeMov.frameRate = 20;
                lvYeMov.play(1);
                this.stickMov = uniLib.DisplayUtils.createMovieClicp("freespin_vfx_a");
                this.mysteriousBoxGroup.addChild(this.stickMov);
                // this.stickMov.blendMode = egret.BlendMode.ADD;
                this.stickMov.x = icon1.x;
                this.stickMov.y = icon1.y;
                this.stickMov.scaleX = 0;
                this.stickMov.scaleY = 0;
                this.stickMov.play(-1);

                stickBg = new eui.Image("free_frame_a");
                stickBg.anchorOffsetX = 185/2;
                stickBg.anchorOffsetY = 211/2;
                this.stickMovBg.push(stickBg);
                this.mysteriousBoxGroup.addChild(stickBg);
                stickBg.x = icon1.x;
                stickBg.y = icon1.y;
                stickBg.scaleX = 0;
                stickBg.scaleY = 0;
                egret.Tween.get(this.stickMov).to({ scaleX:2,scaleY:2 }, 100);
                egret.Tween.get(stickBg).to({ scaleX:1,scaleY:1 }, 100).call(() => {
                    stickMovBg1.parent.removeChild(stickMovBg1);
                    stickMovBg2.parent.removeChild(stickMovBg2);
                    stickMov.stop();
                    stickMov.parent.removeChild(stickMov)
                });
            });
            game.Timer.setTimeout(() => {
                lvYeMov.stop();
                lvYeMov.parent.removeChild(lvYeMov);
                this.freeIconGroup.addChild(this.stickMov)
                this.freeIconGroup.addChild(stickBg)
            }, null, 1000);
        }

        private bombShuYe:egret.MovieClip[] = [];
        /**
         * 开始粘连
         */
        public itStartsToStick() {
            // this.stickMovBg
            // conglinshuiguo.LabaGame.Instance.itStartsToStick();

            let icon1 = this.elemPos[1][2];
            let stickBg = new eui.Image("frame_glow_free");
            SoundHand.Instance.playFreeIcon1Sound()
            stickBg.anchorOffsetX = 56/2;
            stickBg.anchorOffsetY = 65/2;
            stickBg.blendMode = egret.BlendMode.ADD;
            this.mysteriousBoxGroup.addChild(stickBg);
            stickBg.x = icon1.x;
            stickBg.y = icon1.y;
            stickBg.scaleX = 3.5;
            stickBg.scaleY = 3.5;
            let icon = this.mLabaMachine.getBelt(2).GetElementByIndex(2);
            let ElemType = icon.ElemType;
            egret.Tween.get(icon).set({ scaleX:0.95,scaleY:0.95}).to({ scaleX:1.2,scaleY:1.2 }, 100).wait(50)
            .to({ scaleX:0.95,scaleY:0.95 }, 100)
            egret.Tween.get(stickBg).to({ scaleX:5,scaleY:5,alpha:0 }, 100).wait(150).call(() => {
                SoundHand.Instance.playFreeIcon2Sound()
                stickBg.parent.removeChild(stickBg);
                if(this.stickMovBg.length>1){
                    for(let item = 1; item<this.stickMovBg.length;++item){
                        egret.Tween.get(this.stickMovBg[item]).set({ scaleX:1,scaleY:1}).to({ scaleX:0.8,scaleY:0.8 }, 100).wait(50).call(() => {
                            let stickMov = this.bombShuYe[item-1];
                            stickMov.gotoAndPlay(0,1);
                        })
                        .to({ scaleX:1,scaleY:1 }, 100)
                    }
                }
                for(let i = 0;i<5;++i){
                    for(let j = 0;j<3;++j){
                        let icon1 = this.mLabaMachine.getBelt(i).GetElementByIndex(3-j);
                        if(this.freeIconBg[i][j]==0&&icon1.ElemType == ElemType){
                            let elemPos = this.elemPos[2-j][i];
                            this.freeIconBg[i][j] = 1;
                            let stickBg1 = new eui.Image("free_frame_b");
                            stickBg1.anchorOffsetX = 185/2;
                            stickBg1.anchorOffsetY = 211/2;
                            this.freeIconGroup.addChild(stickBg1);
                            stickBg1.x = elemPos.x;
                            stickBg1.y = elemPos.y;
                            stickBg1.scaleX = 1;
                            stickBg1.scaleY = 1;
                            egret.Tween.get(stickBg1).set({ scaleX:1,scaleY:1}).to({ scaleX:0.8,scaleY:0.8 }, 100).wait(50).call(() => {
                                let stickMov = uniLib.DisplayUtils.createMovieClicp("dot_particle");
                                this.mysteriousBoxGroup.addChild(stickMov);
                                // stickMov.blendMode = egret.BlendMode.ADD;
                                stickMov.x = elemPos.x;
                                stickMov.y = elemPos.y;
                                stickMov.frameRate = 20;
                                stickMov.scaleX = 2;
                                stickMov.scaleY = 2;
                                stickMov.play(1);
                                stickMov.touchEnabled = false;
                                this.bombShuYe.push(stickMov);
                                })
                            .to({ scaleX:1,scaleY:1 }, 100)
                            this.stickMovBg.push(stickBg1);
                        }
                    }
                }
                this.stickMovBg[0].parent.setChildIndex(this.stickMovBg[0],100);
            });
        }
        public hideAllLineTips() {
            for (let item of this.mLineTipsInfoArr) {
                item.visible = false
            }
            this.iconLineGroup.getChildByName("muti").visible = false
            this.iconLineGroup.getChildByName("mutiImage").visible = false
        }
        public showOneLineTips(index, gpos, point) {
            // let gpos=line.localToGlobal(0,line)
            // conglinshuiguo.LabaGame.Instance["mLabaMachine"].testShowLine(0)
            let pos = this.iconLineGroup.globalToLocal(gpos.x, gpos.y)
            if ((index - 1) <= 7||(index - 1) == 10)
                this.mLineTipsInfoArr[index].x = pos.x + 12
            else
                this.mLineTipsInfoArr[index].x = pos.x + 700
            let special = [13,14,15,16,17,18,19, 20, 21, 22, 23, 24, 28]
            let posmap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 280, 250, 400, 82, 115, 420, 282,
                342, 70, 315, 196, 210, 0, 0, 0, 220, 0]
            this.mLineTipsInfoArr[index].y = pos.y
            if (special.indexOf(index) != -1)
                this.mLineTipsInfoArr[index].y = posmap[index]
            this.mLineTipsInfoArr[index].visible = true;
            this.mLineTipsInfoArr[index].touchEnabled = false;

            
            let label = this.iconLineGroup.getChildByName("muti") as eui.BitmapLabel
            label.visible = point != 0 ? true : false
            label.text = "" + point
            let labely = SgmlHelper.Instance.getLineInfo(index)[2]
            let labelPosmap = [0, -20, -50, 40, 40, 90, 0, 40, 30, 30,
                0, 30, 40, 50, 0,30, 0, 0, 20, 40]
            label.y = 80 + (3-labely) * 130+labelPosmap[index];

            let mutiImage  = this.iconLineGroup.getChildByName("mutiImage") as eui.Image
            mutiImage.visible = point != 0 ? true : false
            mutiImage.y = 80 + (3-labely) * 130+labelPosmap[index]-50;
            // this.
        }
        public winElemAnimGroup: eui.Group
        private elemPos: any[] = [[],[],[]]
        public initHitScrollonIcon() {
            for (let row = 0; row < 3; row++) {
                this.mAwardScrollIcon.push([])
                for (let col = 0; col < 5; col++) {
                    let icon = this.mLabaMachine.getBelt(col).GetElementByIndex(row + 1)
                    icon.scaleX = 0.95;
                    icon.scaleY = 0.95;
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
                    // let point1 = icon.localToGlobal();
                    // let point2 = this.gameGroup.globalToLocal(point1.x, point1.y);
                    let point = new egret.Point();
                    point.x = pos2.x;
                    point.y = pos2.y;
                    this.elemPos[row].push(point);
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


            // for (let param of params) {
            //     this.anim(param.beltindex, param.pos)
            //     this.mBeltMaskAnimArr[param.beltindex - 2].visible = true
            // }
        }
        public anim(beltindex, pos) {
            // let ls = [this.fast_back_whitelight1, this.fast_back_whitelight2, this.fast_back_whitelight3]
            // let parent = ls[beltindex - 2].parent as eui.Group
            // parent.visible = true
            // egret.Tween.removeTweens(parent)
            // if (pos == 1) {
            //     parent.scaleY = 1
            //     parent.y = 0
            //     ls[pos - 1].y = 0
            //     egret.Tween.get(parent).set({ height: 0 }).to({ height: 495 }, 200)
            // } else if (pos == 3) {
            //     ls[pos - 1].y = 0
            //     parent.scaleY = -1
            //     parent.y = 495
            //     egret.Tween.get(parent).set({ height: 0 }).to({ height: 495 }, 200)
            // } else {
            //     parent.verticalCenter = "0"
            //     ls[pos - 1].verticalCenter = "0"
            //     parent.scaleY = 1
            //     egret.Tween.get(parent).set({ height: 0 }).to({ height: 495 }, 200)
            // }

        }
        public GameRotateButtomTween(type: GameRotateChoose) {
            egret.Tween.removeTweens(this.gameRotateButton)
            if (type == GameRotateChoose.normal)
                egret.Tween.get(this.gameRotateButton, { loop: true })
                    .to({ rotation: 360 }, 4000)
            else if (type == GameRotateChoose.rotate)
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
            else
                egret.Tween.get(this.gameRotateButton, { loop: false })
                    .to({ rotation: 360  }, 500).call(() => {
                        egret.Tween.get(this.gameRotateButton, { loop: true })
                            .to({ rotation: 360 }, 4000)
                    })

        }
        private dengAnimation2: labalib.Utils.KeyFrameObject;
        private characterGroup: eui.Group
        public InitMaskRext() {
            let worldGroupMask = new eui.Rect()
            worldGroupMask.width = this.worldGroup.width
            worldGroupMask.height = this.worldGroup.height
            worldGroupMask.y = this.worldGroup.y
            worldGroupMask.x = this.worldGroup.x
            this.worldGroup.parent.addChild(worldGroupMask)
            this.worldGroup.mask = worldGroupMask

        }
        private mBeltMaskAnimArr = []
        public playJiaSu:boolean = false;

        public SetHighAnim(visible: boolean,column:number = 0) {
            // for (let i = 1; i <= 5; i++) {
            //     if (i != 4) {
            //         let mask = this.LabaBeltRootGroup.getChildByName("belt" + i + "Mask")
            //         mask.visible = visible
            //     }
            // }

            if (visible) {
                uniLib.SoundMgr.instance.playSound("kuaisu_mp3", 1)
            }
            // let pos = [462, 462, 462, 530, 400, 680, 250]
            let pos = [345, 495, 635, 400, 680, 250]
            let index = column==0?0:column-2;
            for (let item of this.mHighRotateAnimArr) {
                item.visible = visible
                item.x = pos[index]
                index++
            }
        }
        private mBarWinDragonIndex:number = 0;

        /**
         * 中间奖框 1小将出现 2小将消失 34 大奖类推
         */
        public playWinBarAnim(index: number) {
            if (!this.mBarWinDragon) {
                this.mBarWinDragon = uniLib.DragonUtils.createDragonBoneAnimation("hua")
                this.winAnimBarGroup.addChild(this.mBarWinDragon)
                // this.winWorldGroup.visible = true;
            }
            this.mBarWinDragon.visible = true
            this.mBarWinDragon.animation.stop();
            if(index==1){
                SoundHand.Instance.playRerotateTwoSound()
                uniLib.SoundMgr.instance.playSound("scrollgold2_mp3", 1);
                this.mBarWinDragonIndex = index;
                this.mBarWinDragon.animation.play("huaban0", 1)
                this.playMonkeyAboutMov(true)
            }
            else if(index==2){
                this.mBarWinDragon.animation.play("huaban0_1", 1)
            }
            else if(index==3){
                this.playMonkeyAboutMov(true)
                SoundHand.Instance.playRerotateTwoSound()
                uniLib.SoundMgr.instance.playSound("scrollgold2_mp3", 1);
                this.mBarWinDragonIndex = index;
                this.mBarWinDragon.animation.play("huaban1", 1)
            }
            else if(index==4){
                this.mBarWinDragon.animation.play("huaban1_1", 1)
            }
            this.mBarWinDragon.x = 330
            this.mBarWinDragon.y = 17

            this.mBarWinDragon.scaleX = 1
            this.mBarWinDragon.scaleY = 1
        }
        private mBarWinDragon = null
        private WinBarComplete() {
            if (this.mBarWinDragon)
                this.mBarWinDragon.visible = false
        }
        private fiveBox: eui.Group
        public stopPlayFiveKindAnim() {
            this.fiveBox.visible = false
        }

        private fiveKindMov: dragonBones.EgretArmatureDisplay = null;
        public playFiveKindAnim() {
            uniLib.SoundMgr.instance.playSound("wuxinglianzhu_mp3", 1)
            //五星连珠
            this.fiveBox.visible = true
            if(!this.fiveKindMov){
                this.fiveKindMov = uniLib.DragonUtils.createDragonBoneAnimation("wuxinglianzhu")
                this.fiveKindMov.x = 360;
                this.fiveKindMov.touchEnabled = false;
                this.fiveBox.addChild(this.fiveKindMov);
                this.fiveKindMov.animation.timeScale = 2;
            }
            this.fiveKindMov.animation.play(null,1)
        }
        private mysteryMov: dragonBones.EgretArmatureDisplay = null;
        private MysteriousBoxMov: dragonBones.EgretArmatureDisplay[] = [];
        private MysteriousBoxImage: eui.Image[] = [];
        private MysteriousBoxImageBg: eui.Image[] = [];
        private mysteriousBoxGroup:eui.Group;
        public stopMysteryMode() {
            for(let item of this.MysteriousBoxMov){
                item.animation.stop()
                if(item.parent){
                    item.parent.removeChild(item)
                }
                item.dispose();
                item = null;
            }
            this.MysteriousBoxMov = [];
            this.mysteryMov.visible = false
            for(let item of this.MysteriousBoxImage){
                if(item.parent){
                    item.parent.removeChild(item)
                }
                item = null;
            }
            this.MysteriousBoxImage = [];

            for(let item of this.MysteriousBoxImageBg){
                egret.Tween.removeTweens(item);
                if(item.parent){
                    item.parent.removeChild(item)
                }
                item = null;
            }
            this.MysteriousBoxImageBg = [];
        }

        /**
         * 神秘模式动物出现
         */
        public mysteryMode() {
            if(!this.mysteryMov){
                this.mysteryMov = uniLib.DragonUtils.createDragonBoneAnimation("bg_lemurflip")
                this.mysteryMov.x = 360;
                this.mysteryMov.y = 240;
                this.mysteryMov.touchEnabled = false;
                this.MonkeyMovGroup.addChild(this.mysteryMov);
            }
            this.gameRotateButton.enabled = false;
            SoundHand.Instance.playMonkeyAboutSound()
            this.mysteryMov.visible = true;
            this.mysteryMov.animation.play("long_flip",1)
            game.Timer.setTimeout(() => {
                this.MysteriousBox();
                }, null, 1000);
        }
        public MysteriousBox() {
            let mysteriousData = LabaGame.Instance.mysteriousData;//动画抛箱子时间1.3秒
            let numberBox = 0;
            // let ElemType = null;
            let jumpPont = [];
            for(let i = 0;i<5;++i){
                for(let j = 0;j<3;++j){
                    if(mysteriousData[i][j]>0){
                        numberBox++;
                        // let icon = this.mLabaMachine.getBelt(i).GetElementByIndex(3-j);
                        let icon1 = this.elemPos[j][i]
                        jumpPont.push(icon1);
                        // let point1 = icon.localToGlobal();
                        // let point = this.gameGroup.globalToLocal(point1.x, point1.y);

                        let iconBg = new eui.Image("glow_c_mystery");
                        iconBg.x = icon1.x;
                        iconBg.y = icon1.y;
                        iconBg.anchorOffsetX = 44;
                        iconBg.anchorOffsetY = 44;
                        iconBg.scaleX = 3;
                        iconBg.scaleY = 3;
                        iconBg.visible = false;
                        iconBg.blendMode = egret.BlendMode.ADD;
                        this.mysteriousBoxGroup.addChild(iconBg);

                        let iconImage = new eui.Image("elem"+mysteriousData[i][j]);
                        iconImage.x = icon1.x;
                        iconImage.y = icon1.y;
                        iconImage.anchorOffsetX = 105;
                        iconImage.anchorOffsetY = 105;
                        iconImage.visible = false;
                        
                        this.mysteriousBoxGroup.addChild(iconImage);

                        this.MysteriousBoxImageBg.push(iconBg);
                        this.MysteriousBoxImage.push(iconImage);

                        
                        let box = uniLib.DragonUtils.createDragonBoneAnimation("muxiang");
                        box.x = 360;
                        box.y = -90;
                        box.visible = false;
                        this.mysteriousBoxGroup.addChild(box);
                        this.MysteriousBoxMov.push(box);
                        // ElemType = icon.ElemType;
                        // icon.ElemType
                    }
                }
            }
            let timeWait = Math.ceil(1300/numberBox);
            SoundHand.Instance.playMysticalSound();
            for(let playIndex =0;playIndex< this.MysteriousBoxMov.length;++playIndex){
                game.Timer.setTimeout(() => {
                    // let point1 = jumpPont[playIndex].localToGlobal();
                    // let point = this.gameGroup.globalToLocal(point1.x, point1.y);
                    this.MysteriousBoxMov[playIndex].visible = true;
                    this.circularArcMovement(this.MysteriousBoxMov[playIndex], jumpPont[playIndex].x, jumpPont[playIndex].y);
                }, null, timeWait*playIndex);
            }
            game.Timer.setTimeout(() => {
                SoundHand.Instance.playMysticalBoomSound();
                for(let item of this.MysteriousBoxMov){
                    item.animation.play(null,1)
                }
                for(let item of this.MysteriousBoxImageBg){
                    item.visible = true;
                }
                for(let item of this.MysteriousBoxImage){
                    item.visible = true;
                }
            }, null, 2000);

            game.Timer.setTimeout(() => {
                for(let item of this.MysteriousBoxImageBg){
                    egret.Tween.get(item).to({ alpha:0 }, 300)
                }
            }, null, 3000);
        }
        /**
         * 弧线跳动
         */
        private circularArcMovement(item, coordinateX: number, coordinateY: number) {
            // if (item.x + 50 > coordinateX && item.x - 50 < coordinateX) {
            // 	return;
            // }
            let times = 0;
            let timerMy = game.Timer.setInterval(() => {
                let value = times / 100;
                let highPointX = Math.ceil(item.x + ((coordinateX - item.x) * 0.33));;//右移
                let highPointY = Math.ceil(item.y - ((coordinateY - item.y) * 0.3));//下移动
                // 500 500  300 400
                // 100 300

                if (coordinateX < item.x) {//左移
                    highPointX = Math.ceil(item.x - ((item.x - coordinateX) * 0.33));
                }
                if (coordinateX == item.x) {//左右不动 (上下跳动)
                    highPointX = item.x;
                }
                if (coordinateY < item.y) {//上移
                    highPointY = Math.ceil(coordinateY - ((item.y - coordinateY) * 0.3));
                }
                if (coordinateY == item.y) {//上下不动(左右跳动)
                    highPointY = coordinateY - 200;
                }



                item.x = (1 - value) * (1 - value) * item.x + 2 * value * (1 - value) * (highPointX) + value * value * coordinateX;
                item.y = (1 - value) * (1 - value) * item.y + 2 * value * (1 - value) * (highPointY) + value * value * coordinateY;

                times += MathUtil.random(5, 10)//5;
                if (times >= 100) {
                    item.x = coordinateX;
                    item.y = coordinateY;
                    game.Timer.clearInterval(timerMy);
                    return;
                }
            }, this, 10)
        }


        public destroyHighRotateAnim() {
            for (let anim of this.mHighRotateAnimArr) {
                anim.stop();
                // anim.dispose();
                if (anim.parent) {
                    anim.parent.removeChild(anim)
                }
                anim = null
            }
            this.mHighRotateAnimArr = []
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
        //     this.linePotGroup0.getChildByName("line" + (index + 1)).visible = true
        //     this.linePotGroup1.getChildByName("line" + (index + 1)).visible = true

        // }

        public tipsGroup: eui.Group
        //自动旋转次数
        public onClickRotateCountButton(nCount: number) {
            this.mIsAutoRotating = true;
            this.mGameButtonStatus = GameRotateStatus.RotatePause;

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
        private btnLightMov: dragonBones.EgretArmatureDisplay = null;
        /**
         * 按钮灯光闪烁
         */
        public btnFlashOfLight() {
            if (!this.btnLightMov) {
                this.btnLightMov = uniLib.DragonUtils.createDragonBoneAnimation("spin")
                this.btnLightMov.x = 360;//this.normalGoldFlyGroup.width/2;
                this.btnLightMov.y = 15;
                // this.btnLightMov.y = 1.5;//this.normalGoldFlyGroup.height;
                this.betMenuGruop.addChild(this.btnLightMov);
                this.btnLightMov.touchEnabled = false;
            }
            this.btnLightMov.visible = true;
            this.btnLightMov.animation.stop();
            this.btnLightMov.animation.play("spin_0", 1);

        }
        private startRotationTime: number;

        public mGameButtonStatus: GameRotateStatus = GameRotateStatus.RotateNormal
        public onRotateButtonByClick(e: egret.Event = null) {
            if(Number(this.moneyLabel.text)<labalib.LabaDataCenter.Instance.CurDizhu){
                GX.Tips.showTips("金额不足!")
                return;
            }
            
            SoundHand.Instance.playBtnRotateSound();
            if (this.mGameButtonStatus == GameRotateStatus.RotateNormal) {
                if (e && e.target != null) {
                    this.btnFlashOfLight();
                    this.GameRotateButtomTween(GameRotateChoose.rotate)
                }
                this.onRotateButton()
                this.mGameButtonStatus = GameRotateStatus.RotatePause;
            }
            else {
                let specialGame = DataCenter.Instance.IsTriggerCurFreeGame() || DataCenter.Instance.IsTriggerRerotateGame()
                if (DataCenter.Instance.IsGetServerMsg && !DataCenter.Instance.IsQuickRotate && !specialGame) {
                    // if(DataCenter.Instance.CurServerResultDatas&&DataCenter.Instance.IsMysticalGame()){
                    //     return;
                    // }
                    game.Timer.clearTimeout(this.mLabaMachine.RealStartTimer)
                    this.GameRotateButtomTween(GameRotateChoose.stop)
                    this.mAccFastStopTimes++
                    if (this.mAccFastStopTimes >= 4 && !DataCenter.Instance.IsQuickRotate) {
                        GX.Tips.showPopup("检测到您急停的频率很高,是否开启极速旋转模式?", () => {
                            //确定
                            this.mAccFastStopTimes = 0
                            this.rotationButton.currentState = "down"
                            this.rotationSetButton.currentState = "down"
                            DataCenter.Instance.IsQuickRotate = true
                        }, () => {

                            //否定
                        }, this, true, null, null, null, null, false);
                    }
                    this.mLabaMachine.doFastStop()
                    this.gameRotateButton.enabled = false
                }
            }

        }
        public mAccFastStopTimes: number = 0

        //普通旋转;
        public onRotateButton(e: egret.Event = null) {
            // this.playWinBarAnim(false)


            this.switchTipsImage(1)
            DataCenter.Instance.ChangeIconWin = []
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

            this.mLabaMachine.doEnterRotate()
            this.refreshRotateButtonStatus();
            this.mLabaMachine.startRotate();




        }

        public getLabaMachine() {
            return this.mLabaMachine;
        }

        //取消自动旋转(暂停);
        public onCancelAutoRotate() {

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
            // this.mIsAutoRotating = this.mLeftRotateCount > 0 || this.mLeftRotateCount == -1;
            // let enableFlag = (this.IsAutoRotating == false && this.mIsRotating == false && !this.mIsFreeGameIng && !this.mIsInMarigame);
            // this.gameRotateButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            this.gameRotateButton.visible = !this.IsAutoRotating
            this.autoRotateButton.visible = this.IsAutoRotating

            this.rotationButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            this.rotationSetButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            this.betGoldButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            this.menuListButton.enabled = this.IsAutoRotating == false && !this.mIsRotating && !this.mIsFreeGameIng && !this.mIsInReRotategame
            if (this.IsAutoRotating) {

                // this.chooseGameRotateButton(GameRotateChoose.autorotate);
                let text = this.mLeftRotateCount == -1 ? "∞" : this.mLeftRotateCount.toString()
                this.autoRotateButton.label = text;
            }
        }



        public testWin(value, filer, a) {
            // this.bigWinPanel.initTween()
            this.bigWinPanel.initTween(value, filer, a)
        }
        public initBigwinPanel() {
            if (!this.bigWinPanel)
                this.bigWinPanel = new BigWinPanelExt()

            //Bigwin设置需要的高分等级;
            this.bigWinPanel.HighScoreLists = DataCenter.Instance.getLabaHighScoreList()
            BigWinPanelExt.MAX_WinType = 3
            this.bigWinPanel.WinTypePaths = "gx_0,gx_1,gx_2"
            this.bigWinPanel.WinTypeSoundPaths = "mlsg_win_1_mp3,mlsg_win_2_mp3,mlsg_win_3_mp3,mlsg_win_3_mp3,mlsg_win_3_mp3"
            this.bigWinPanel.WinTypeImagePaths = "dajiang,jujiang,chanjijiang"

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
                if ((money * betOffset) >= cpdizhulist[idx] * 20) {
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
            this.moneyLabel.text = GX.GoldFormat(Number(GX.numToFixed(gold, 2)), true, true, true);
        }
        public setMainGoldManu(gold: number) {
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
                    this.freeStickMov();
                    // SoundHand.Instance.PlaySoundOnce(ShzSound.FreeStartSound);
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
                resultdata[2-pos.row][pos.col] = CLSG_ElemAllType.Wild
            }
            DataCenter.Instance.ChangeIconWin = changePos
            return changePos
        }

        public changeScrollIcon(cb: Function = null) {
                if (cb) {
                    cb()
                }
        }
        public changeScrollIcon2(cb: Function = null) {
            let wildMap = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]
            let elemMap = [8, 7, 6, 5]
            let resultdata = DataCenter.Instance.getResultDatas()
            let changeElem = DataCenter.Instance.ChangeElemType()
            let changePos = []
            for (let col = 0; col < 5; col++) {
                for (let row = 0; row < 3; row++) {
                    let scrollIcon = this.mLabaMachine.getBelt(col).GetElementByIndex(row + 1)
                    if (resultdata[row][col] == changeElem)
                        resultdata[row][col] = CLSG_ElemAllType.Wild
                    if (scrollIcon.ElemType == changeElem) {
                        changePos.push({ row: row, col: col })
                    }
                }
            }

            DataCenter.Instance.ChangeIconWin = changePos


            for (let pos of changePos) {
                let scrollIcon = this.mLabaMachine.getBelt(pos.col).GetElementByIndex(pos.row + 1)
                let icon = this.mAwardScrollIcon[pos.row][pos.col]
                this.winElemAnimNotLineGroup.addChild(icon)
                icon.PlayChangeAnimation(scrollIcon.ElemType)
            }


        }
        private winElemAnimNotLineGroup: eui.Group
        private rerotateImage: eui.Image
        public mPlayWinAllEffectTimeout: number = 0;
        public playWinAllEffect() {
            //连线 
            if(DataCenter.Instance.IsMysticalGame()){
                this.stopMysteryMode();
                this.gameRotateButton.enabled = true;
                DataCenter.Instance.getServerBetResult()

            }
            game.Timer.clearTimeout(this.mPlayWinAllEffectTimeout)

            LabaGame.Instance.playAllHitElemDefaultEffect()
            this.elemAnimMask.visible = true
            this.switchTipsImage(4, DataCenter.Instance.RaceObtainGold)
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
            // return

            // return
            let awardFun = () => {
                if (obtainGold > 0) {
                    // return
                    // LabaGame.Instance.playAllHitElemDefaultEffect()
                    this.playWinAllEffect()
                    // return
                    // this.elemAnimMask.visible = true
                    // this.mLabaMachine.drawAllLines()
                    if (DataCenter.Instance.isBigwin(obtainGold)) {
                        this.bigWinPanel.enterBigWinAnim(() => {
                            this.mBigWinInfo = this.bigWinPanel.playGoldWinType(obtainGold, () => {
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
                let elemChange = DataCenter.Instance.CurServerResultDatas.resultData.wildNum - 1
                // [XYJ_ElemAllType.TangSeng, XYJ_ElemAllType.SunWuKong, XYJ_ElemAllType.ZhuBaJie, XYJ_ElemAllType.ShaSeng]
                // 3 2 1 0
                let animIndex = [2, 3, 1, 0]
                // [XYJ_ElemAllType.TangSeng, XYJ_ElemAllType.SunWuKong, XYJ_ElemAllType.ZhuBaJie, XYJ_ElemAllType.ShaSeng]
                // let convert = [0, 3, 1, 0]
                // this.characterChooseAnim(convert[elemChange - 5], true, awardFun)
                awardFun();
                // this.characterChooseAnim(animIndex[elemChange], true, awardFun)
                return
            }
            LabaGame.Instance.playWildDuobaoElemDefaultEffect();

            awardFun()

        }

        public selectWildElem(cb = null) {
            this.itStartsToStick();
            game.Timer.setTimeout(() => {
                this.changeScrollIcon(cb)
            }, null, 1500)
            return
        }


        /**
        * 滚动结束后，是否播放免费结束动画或者继续下一轮旋转;
        */
        protected onFinishShowResult() {
            let count = parseInt(uniLib.BrowersUtils.GetRequest("mmmm"))
            count = count == 0 ? 60 : count
            if (DataCenter.Instance.IsFreeGame()) {
                if (DataCenter.Instance.IsTriggerFreeGame()) {
                    this.doFreeTrigger()
                    this.mIsFreeGameIng = true;
                }
                else if (DataCenter.Instance.IsFreeGameEnd()) {
                    // this.stopFreeMov();
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
            // this.switchTipsImage(4, obtainGold)
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
            game.Timer.clearTimeout(this.doFreeEndDelayTimer)
            this.doFreeEndDelayTimer = game.Timer.setTimeout(() => {
                this.stopFreeMov();
                FreeReultPanel.Instance.showFreeEnd(() => {
                    SoundHand.Instance.endLabaBg()
                    SoundHand.Instance.switchMusicBG()
                    FreeGameIngPanel.Instance.ResetCharacterDragon()
                    this.mIsRotating = false;
                    this.mGameButtonStatus = GameRotateStatus.RotateNormal
                    this.gameRotateButton.enabled = true
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
            egret.Tween.get(this.animGroup).set({ alpha: 0, y: -450 }).to({ y: -434, alpha: 1 }, 700).wait(1000).
                call(() => {
                    this.mGameButtonStatus = GameRotateStatus.RotatePause
                    this.gameRotateButton.enabled = true
                    this.doNormal(false)
                    this.rerotateImage.visible = true
                    this.switchTipsImage(2)
                    // this.characterChooseAnim(1, false)
                }).to({ alpha: 0 }, 700)

            // this.playRerotateWord()


        }
        public doFreeTrigger() {
            // this.nextDoTimer = game.Timer.setTimeout(() => {
                SoundHand.Instance.endLabaBg()
                SoundHand.Instance.switchMusicBG(1)
                FreeGameIngPanel.Instance.LeftFreeCount = DataCenter.Instance.getFreeBonusCount()
                // labalib.Utils.PlayTweenGroup(this.cloud, 1, () => {

                    // this.lcloud.alpha = 0
                    // this.rcloud.alpha = 0
            //     this.bigWinPanel.enterBigWinAnim(() => {
            //     // this.bigWinPanel.playGoldWinType(100000)
            // })
                FreeGameStart.Instance.Show(() => {
                    this.mGameButtonStatus = GameRotateStatus.RotatePause
                    this.gameRotateButton.enabled = true
                    this.doNormal()
                })
                this.switchBG(GameBG.free)
                // })

                // this.lcloud.visible = true
                // this.rcloud.visible = true

            // }, null, 2000)


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

            if (lines.length > 0) {
                this.winElemAnimNotLineGroup.parent.addChild(this.winElemAnimNotLineGroup)
                this.elemAnimMask.parent.addChild(this.elemAnimMask)
                this.lineRootGroup.parent.addChild(this.lineRootGroup)
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
                            let scrollIcon = this.mLabaMachine.getBelt(hitColIndex).GetElementByIndex(4-lineInfo[hitColIndex]);
                            scrollIcon.visible = false;
                            let row = - (lineInfo[hitColIndex] - 4) - 1
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
                                if (icon.Special) {
                                    icon.BGGroup = false
                                    this.winElemAnimNotLineGroup.addChild(icon)
                                }
                                else
                                    icon.parent.removeChild(icon)
                            }
                        }
                    }

                    for (let i: number = 0; i < lines.length; i++) {
                        let line = lines[i];
                        let lineInfo = SgmlHelper.Instance.getLineInfo(line.LineType);
                        // conglinshuiguo.SgmlHelper.Instance.getLineInfo(0)
                        
                        if (line.LineType == lineIndex){
                            
                            for (let j: number = 0; j < line.ConnectCount; j++) {
                                let hitColIndex = j;
                                let scrollIcon = this.mLabaMachine.getBelt(hitColIndex).GetElementByIndex(4-lineInfo[hitColIndex]);
                                scrollIcon.visible = false;
                                let row = - (lineInfo[hitColIndex] - 4) - 1
                                // let row = (lineInfo[hitColIndex])-1
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


        }
        public ddd = 0
        public mAwardScrollIcon = []
        //播放命中元素的默认动画  特指没中奖的wild 和百搭
        public playWildDuobaoElemDefaultEffect(freeTri: boolean = false) {

            this.winElemAnimNotLineGroup.parent.addChild(this.winElemAnimNotLineGroup)
            this.elemAnimMask.parent.addChild(this.elemAnimMask)
            this.lineRootGroup.parent.addChild(this.lineRootGroup)
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
                    if (scrollIcon && (scrollIcon.ElemType == 9 || scrollIcon.ElemType == 8)) {
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


        private gameRotateImage:eui.Image;
        // 点击菜单按钮
        protected onMenuListButton() {
            if(this.btnLightMov){
                this.btnLightMov.visible = false;
            }
            this.gameRotateButton.visible = false;
            this.gameRotateImage.visible = false;
            this.menuListGroup.visible = true;
            egret.Tween.get(this.menuListGroup).set({ y: 108 }).to({ y: 0 }, 200)
            this.betMenuGruop.visible = false;
            //测试
            // this.mysteryMode();
            // this.freeStickMov();
            // FreeGameStart.Instance.Show(() => {

            //     })
            // FreeReultPanel.Instance.showFreeEnd(() => {

            //     })
            // this.SetHighAnim(true);
            // this.bigWinPanel.enterBigWinAnim(() => {
            //     this.bigWinPanel.playGoldWinType(100000)
            // })
            // this.playWinBarAnim(3)
        }
        // 点击关闭菜单按钮
        protected onCloseMenuButton() {
            if(this.btnLightMov){
                this.btnLightMov.visible = true;
            }
            this.gameRotateButton.visible = true;
            this.gameRotateImage.visible = true;
            this.betMenuGruop.visible = true;
            egret.Tween.get(this.betMenuGruop).set({ y: 185 }).to({ y: 35 }, 200)
            this.menuListGroup.visible = false;
        }


        public onBeltRotateBegin(param) {
            let beltIndex = param.beltIndex;
            let speed = param.speed * 1000;
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
            let pos = -1
            for (let i = 2; i >= 0; i--) {
                if (rest[i][beltIndex - 1] == CLSG_ElemAllType.DuoBao) {
                    pos = i + 1
                    break
                }
            }
            if (pos == -1)
                return
            this.playHighDuobaoAnim([{ beltindex: beltIndex, pos: pos }])
            // this["BeltHighScoll" + (beltIndex)].visible = false;
        }
        private empty() {
            if (this.helloMonkeyMov){
                this.helloMonkeyMov.animation.stop();
                if(this.helloMonkeyMov.parent){
                    this.helloMonkeyMov.parent.removeChild(this.helloMonkeyMov)
                }
                this.helloMonkeyMov.dispose();
                this.helloMonkeyMov = null;
            }
            if (this.MonkeyFreeMov1){
                egret.Tween.removeTweens(this.MonkeyFreeMov1)
                this.MonkeyFreeMov1.animation.stop();
                if(this.MonkeyFreeMov1.parent){
                    this.MonkeyFreeMov1.parent.removeChild(this.MonkeyFreeMov1)
                }
                this.MonkeyFreeMov1.dispose();
                this.MonkeyFreeMov1 = null;
            }
            if (this.lightFreeMov){
                this.lightFreeMov.animation.stop();
                if(this.lightFreeMov.parent){
                    this.lightFreeMov.parent.removeChild(this.lightFreeMov)
                }
                this.lightFreeMov.dispose();
                this.lightFreeMov = null;
            }
            if (this.stepOnThehelloMonkeyMov) {
                this.helloMonkeyMov.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.playHelloMonkeyMov1, this);
                this.stepOnThehelloMonkeyMov = null;
            }
            if (this.stepOnThehelloMonkeyTime) {
                game.Timer.clearTimeout(this.stepOnThehelloMonkeyTime);
                this.stepOnThehelloMonkeyTime = null;
            }
            if (this.btnLightMov){
                this.btnLightMov.animation.stop();
                if(this.btnLightMov.parent){
                    this.btnLightMov.parent.removeChild(this.btnLightMov)
                }
                this.btnLightMov.dispose();
                this.btnLightMov = null;
            }
            if (this.MonkeyMov2){
                egret.Tween.removeTweens(this.MonkeyMov2)
                this.MonkeyMov2.animation.stop();
                if(this.MonkeyMov2.parent){
                    this.MonkeyMov2.parent.removeChild(this.MonkeyMov2)
                }
                this.MonkeyMov2.dispose();
                this.MonkeyMov2 = null;
            }
            if (this.MonkeyMov3){
                this.MonkeyMov3.animation.stop();
                if(this.MonkeyMov3.parent){
                    this.MonkeyMov3.parent.removeChild(this.MonkeyMov3)
                }
                this.MonkeyMov3.dispose();
                this.MonkeyMov3 = null;
            }
            if (this.MonkeyMov1){
                egret.Tween.removeTweens(this.MonkeyMov1)
                this.MonkeyMov1.animation.stop();
                if(this.MonkeyMov1.parent){
                    this.MonkeyMov1.parent.removeChild(this.MonkeyMov1)
                }
                this.MonkeyMov1.dispose();
                this.MonkeyMov1 = null;
            }
            this.bigWinPanel.empty();      

        }
        private leafMov1: dragonBones.EgretArmatureDisplay = null;
        private leafGroup:eui.Group;
        private leafMov2: dragonBones.EgretArmatureDisplay = null;
        private playLeafMov() {
            if (!this.leafMov1) {
                this.leafMov1 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_1")
                this.leafGroup.addChild(this.leafMov1);
                this.leafMov1.animation.play("yezi2_0",0)
                this.leafMov1.x = 360;
                this.leafMov1.y = 550;

                this.leafMov2 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_1")
                this.leafGroup.addChild(this.leafMov2);
                this.leafMov2.animation.play("yezi2_1",0)
                this.leafMov2.x = 360;
                this.leafMov2.y = 500;
            }
        }


        private MonkeyMov1: dragonBones.EgretArmatureDisplay = null;
        private MonkeyMov2: dragonBones.EgretArmatureDisplay = null;
        private MonkeyMov3: dragonBones.EgretArmatureDisplay = null;
        /**
         * 前方猴子动画
         */
        private playMonkeyMov() {
            if (!this.MonkeyMov1) {
                this.MonkeyMov1 = uniLib.DragonUtils.createDragonBoneAnimation("mg_lemur_walk")
                this.MonkeyMov1.y = 275;
                this.MonkeyMovGroup.addChild(this.MonkeyMov1);
            }
            let random1 = MathUtil.random(1,2);//上方猴子方向
            let random3 = MathUtil.random(1,2);//猴子初始资源
            let random2 = MathUtil.random(1,2);//中间是否停顿
            let randomTime1 = MathUtil.random(3000,6000);//初始移动速度
            let randomTime2 = MathUtil.random(1000,2000);//停顿后移动速度
            let randomTime3 = MathUtil.random(1000,2000);//停顿时间
            let randomTime4 = MathUtil.random(3000,15000);//移动结束后的等待时间
            let randomTime5 = random3==1?1500:1000;//停顿动画播放时间
            let movString1 
            if(random3 == 1){
               movString1 = random1==1?"right_walk_blink":"left_walk";//猴子方向动画
            }
            else{
                movString1 = random1==1?"right_boxwalk":"left_boxwalk";//猴子方向动画
            }
            let MovingPosition1 = random1==1?-100:820;//位置
            let MovingPosition2 = random1==1?820:-100;
            let movString2 = ["right_apple","right_coconut","right_starfruit"]
            let movString3 = ["left_apple","left_coconut","left_starfruit"]

            this.MonkeyMov1.animation.play(movString1,0)
            egret.Tween.get(this.MonkeyMov1).set({ x: MovingPosition1 }).to({ x:MovingPosition2 }, randomTime1).call(() => {
                this.MonkeyMov1.animation.stop();
            }).wait(randomTime4).call(() => {
                egret.Tween.removeTweens(this.MonkeyMov1);
                this.playMonkeyMov();
            });;
            if(random2 == 1){
                game.Timer.setTimeout(() => {
                    egret.Tween.removeTweens(this.MonkeyMov1);
                    this.MonkeyMov1.animation.stop();
                    let movString_1;
                    if(random1 == 1){
                        if(random3 == 1){
                            movString_1 = movString2[MathUtil.random(0,2)];
                        }
                        else{
                            movString_1 = "right_boxpause";
                        }
                    }
                    else{
                        if(random3 == 1){
                            movString_1 = movString3[MathUtil.random(0,2)];
                        }
                        else{
                            movString_1 = "left_boxpause";
                        }
                    }
                    this.MonkeyMov1.animation.play(movString_1,1)
                    game.Timer.setTimeout(() => {
                        this.MonkeyMov1.animation.stop();
                        this.MonkeyMov1.animation.play(movString1,0)
                        egret.Tween.get(this.MonkeyMov1).to({ x:MovingPosition2 }, randomTime2).call(() => {
                            this.MonkeyMov1.animation.stop();
                        }).wait(randomTime4).call(() => {
                            egret.Tween.removeTweens(this.MonkeyMov1);
                            this.playMonkeyMov();
                        });
                    }, this, randomTime5)
                }, this, randomTime3)
            }

        }
        private MonkeyMovGroup1:eui.Group;
        /**
         * 后方猴子动画
         */
        private playMonkeyAfterMov() {
            if (!this.MonkeyMov2) {
                this.MonkeyMov2 = uniLib.DragonUtils.createDragonBoneAnimation("mg_lemur_walk")
                this.MonkeyMov2.y = 250;
                this.MonkeyMovGroup1.addChild(this.MonkeyMov2);
            }
            let random1 = MathUtil.random(1,2);//上方猴子方向
            let random2 = MathUtil.random(1,2);//哪里到哪里
            let randomTime1 = MathUtil.random(3000,6000);//初始移动速度
            let randomTime4 = MathUtil.random(3000,15000);//移动结束后的等待时间
            let movString1 = random1==1?"right_walk_behind":"left_walk_behind";//猴子方向动画
            
            let MovingPosition1 
            let MovingPosition2 
            if(random1 == 1){
                MovingPosition1 = random1==1?-100:420;//位置
                MovingPosition2 = random1==1?300:820;
            }
            else{
                MovingPosition1 = random1==1?820:300;//位置
                MovingPosition2 = random1==1?420:-100;
            }

            this.MonkeyMov2.animation.play(movString1,0)
            egret.Tween.get(this.MonkeyMov2).set({ x: MovingPosition1 }).to({ x:MovingPosition2 }, randomTime1).call(() => {
                this.MonkeyMov2.animation.stop();
            }).wait(randomTime4).call(() => {
                egret.Tween.removeTweens(this.MonkeyMov2);
                this.playMonkeyAfterMov();
            });;
            

        }


        public MonkeyMovGroup2:eui.Group;
        private MonkeyMov3Time:number = null;
        /**
         * 左右上三方猴子动画
         */
        private playMonkeyAboutMov(index:boolean = false) {
            if (!this.MonkeyMov3) {
                this.MonkeyMov3 = uniLib.DragonUtils.createDragonBoneAnimation("mg_lemur_popup")
                this.MonkeyMov3.y = 700;
                this.MonkeyMov3.touchEnabled = false;
            }
            let randomTime4 = MathUtil.random(10000,60000);//移动结束后的等待时间
            let movString1
            if(!index){
                let random1 = MathUtil.random(1,3);//上方猴子方向
                SoundHand.Instance.playMonkeyAboutSound()
                if(random1 == 1){
                    this.MonkeyMov3.x = 0;
                    this.MonkeyMov3.y = 700;
                    movString1 = "popup_03_left";//猴子方向动画
                    this.MonkeyMovGroup2.addChild(this.MonkeyMov3);
                }
                
                else{
                    this.MonkeyMov3.x = 720;
                    this.MonkeyMov3.y = 700;
                    movString1 = "popup_03_right";//猴子方向动画
                    this.MonkeyMovGroup2.addChild(this.MonkeyMov3);
                }
            }
            else{
                if(this.MonkeyMov3Time){
                    game.Timer.clearTimeout(this.MonkeyMov3Time)
                    this.MonkeyMov3Time = null;
                }
                this.MonkeyMov3.x = 360;
                this.MonkeyMov3.y = 240;
                movString1 = "popup_03_bottom";//猴子方向动画
                this.MonkeyMovGroup.addChild(this.MonkeyMov3);
            }
            
            this.MonkeyMov3.animation.play(movString1,1)
            this.MonkeyMov3Time = game.Timer.setTimeout(() => {
                this.playMonkeyAboutMov()
            }, this, randomTime4)
        }

        private helloMonkeyMov: dragonBones.EgretArmatureDisplay = null;
        private helloMonkeyMovIndex: number = 0;
        private MonkeyMovGroup:eui.Group;
        private stepOnThehelloMonkeyMov: any = null;
        private stepOnThehelloMonkeyTime: any = null;
        // private stepOnThehelloMonkeyMov: any = null;
        private playHelloMonkeyMov() {
            if (!this.helloMonkeyMov) {
                this.helloMonkeyMov = uniLib.DragonUtils.createDragonBoneAnimation("mg_lemur")
                this.MonkeyMovGroup.addChild(this.helloMonkeyMov);
                // this.helloMonkeyMov.scaleX = 2;
                // this.helloMonkeyMov.scaleY = 2;
            }
            if(MathUtil.random(1,2)==1){
                this.helloMonkeyMov.x = 150;
                this.helloMonkeyMov.y = 150;
                this.helloMonkeyMov.scaleX = 1;
                // this.helloMonkeyMov.scaleY = 1;
            }
            else{
                this.helloMonkeyMov.x = 570;
                this.helloMonkeyMov.y = 150;
                this.helloMonkeyMov.scaleX = -1;
                // this.helloMonkeyMov.scaleY = -1;
            }
            this.helloMonkeyMov.visible = true;
            this.helloMonkeyMov.animation.play("mid_spawn",1)
            this.stepOnThehelloMonkeyMov = this.helloMonkeyMov.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.playHelloMonkeyMov1, this);
            
        }
        private playHelloMonkeyMov1() {
            this.helloMonkeyMovIndex++;
            if (this.stepOnThehelloMonkeyMov) {
                this.helloMonkeyMov.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.playHelloMonkeyMov1, this);
                this.stepOnThehelloMonkeyMov = null;
            }
            let random1 = MathUtil.random(1,3)
            if(this.helloMonkeyMovIndex==1){
                this.helloMonkeyMov.animation.play("mid_idle",random1)
            }
            else if(this.helloMonkeyMovIndex==2){
                this.helloMonkeyMov.animation.play("mid_wave",random1)
            }
            else if(this.helloMonkeyMovIndex==3){
                this.helloMonkeyMov.animation.play("mid_idle",random1)
            }
            else if(this.helloMonkeyMovIndex==4){
                this.helloMonkeyMov.animation.play("mid_despawn",1)
            }
            else if(this.helloMonkeyMovIndex==5){
                this.helloMonkeyMov.visible = false;
                let random2 = MathUtil.random(3000,15000)
                this.stepOnThehelloMonkeyTime = game.Timer.setTimeout(() => {
                    this.stepOnThehelloMonkeyTime = null
                    this.helloMonkeyMovIndex = 0;
                    this.playHelloMonkeyMov()
                }, null, random2)
            }
            if(this.helloMonkeyMovIndex<=4){
                this.stepOnThehelloMonkeyMov = this.helloMonkeyMov.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.playHelloMonkeyMov1, this);
            }
        }
        private btnGroup:eui.Group;


        public switchBG(type: GameBG) {
            // this.bg1.visible = type == GameBG.free
            this.centerFreeGroup.visible = type == GameBG.free
            this.btnGroup.visible = type == GameBG.normal

            // this.downPanel.visible = type == GameBG.normal
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

            // if(!(((type == switchType.win || type == switchType.winTotal) && obtainGold > 0))){
            if(this.mBarWinDragonIndex>0){
                if(this.mBarWinDragonIndex == 1){
                    this.playWinBarAnim(2);
                }
                else{
                    this.playWinBarAnim(4);
                }
                this.mBarWinDragonIndex = 0;
            }
            if(this.isFreeGame){
                this.TipsImage.source = "infoboard-info_7";
                this.TipsImage.x = 20;
                return
            }
            let target = 0
            let moveTween = egret.Tween.get(this.TipsImage, { loop: true })
            let widthlist = [434, 456, 454, 644, 702, 218, 627]
            let tipsImageSrc = ["infoboard-info_", "infoboard-info_5", "infoboard-info_6", "infoboard-win", "infoboard-total_win"]
            let tipsImageSrcWidth = [253, 218, 82, 122]
            this.TipsImage.y = 35

            let parent = this.TipsImage.parent
            this.TipsImage.visible = !((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)
            this.winWorldGroup.visible = ((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)
            // this.winAnimBarGroup.visible = ((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)
            this.worldGroup.visible = !((type == switchType.win || type == switchType.winTotal) && obtainGold > 0)
            

            // if (type != 1) {
            //     this.TipsImage.source = tipsImageSrc[type - 1]
            //     this.TipsImage.x = (parent.width - tipsImageSrcWidth[type - 2]) / 2
            // }

            if (type == switchType.normal) {
                let showImageIndex = [1, 2, 7, 3, 4,5]
                for (let idx of showImageIndex) {
                    let posX = (parent.width - widthlist[idx - 1]) / 2
                    let moveWidth = posX > 0 ? posX : 20
                    if (idx == 4 || idx == 7|| idx == 5) {
                        moveTween.set({ x: moveWidth, source: "infoboard-info_" + idx }).wait(300).to({ x: -widthlist[idx - 1] }, 5000)
                    } else {
                        moveTween.set({ x: moveWidth, source: "infoboard-info_" + idx }).wait(5000)
                    }
                }
            }
            else if (type == switchType.again) {
                this.winMoneyImage.source = "infoboard-info_7";
            } else if (type == switchType.cover) {

                // moveTween.to({ x: (parent.width - widthlist[5]) / 2 }, 5000)
            } else if ((type == switchType.win || type == switchType.winTotal) && obtainGold > 0) {

                // this.worldGroup.addChild(this.winWorldGroup)
                // this.winMoneyLabel.text = DataCenter.Instance.RaceObtainGold + ""
                // this.winMoneyImage.source = tipsImageSrc[type - 1]
                if (type == switchType.win) {
                    this.winMoneyImage.source = tipsImageSrc[type - 1]
                } else {
                    this.winMoneyImage.source = tipsImageSrc[type - 1]
                }
                let timer = null
                // this.winAnimBarGroup.visible = false
                this.winMoneyLabel.visible = false
                this.winMoneyImage.visible = false

                this.winMoneyLabel.text = GX.GoldFormat(DataCenter.Instance.RaceObtainGold, true, true, true)
                let muti = DataCenter.Instance.RaceObtainGold * 20 / DataCenter.Instance.CurDizhu
                if (!DataCenter.Instance.isBigwin(DataCenter.Instance.RaceObtainGold) && muti > 60) {
                    labalib.Utils.scrollNumber(this.winMoneyLabel, 0, DataCenter.Instance.RaceObtainGold, 2400, () => {
                        // uniLib.SoundMgr.instance.playSound("scrollgold2_mp3", 1);
                    })
                } else
                    this.winMoneyLabel.text = GX.GoldFormat(DataCenter.Instance.RaceObtainGold, true, true, true)
                this.winMoneyLabel.visible = true
                this.winMoneyImage.visible = true

                let curDizhu = labalib.LabaDataCenter.Instance.CurDizhu;
                let perGold = curDizhu / 20;
                let obtainNormalMultiply = Math.floor(obtainGold / perGold);



                let highScoreList = DataCenter.Instance.getLabaHighScoreList();
                if(obtainNormalMultiply<highScoreList[0]){
                    this.playWinBarAnim(1)
                }
                else if(obtainNormalMultiply<highScoreList[1]){
                    this.playWinBarAnim(3)
                }

                // this.winAnimBarGroup.visible = true
            }
            // if (type != 1)
            //     this.mMaxShowTipsTimer = game.Timer.setTimeout(() => {
            //         this.switchTipsImage(1)
            //     }, null, 8000)
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
