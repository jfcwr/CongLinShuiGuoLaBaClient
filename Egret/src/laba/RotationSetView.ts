// TypeScript file
module conglinshuiguo {


    //旋转设置界面;
    export class RotationSetView extends game.BaseUI {

        private closeButton: eui.Button;
        private mainGroup: eui.Group;
        private changSuButton: game.Button;   //常速按钮
        private jisuButton: game.Button;   //急速按钮
        private autoBet10: eui.Button;  //自动旋转 -- 10
        private autoBet30: game.Button;  //自动旋转 -- 30
        private autoBet50: game.Button;  //自动旋转 -- 50
        private autoBet80: game.Button;  //自动旋转 -- 80
        private autoBet100: game.Button;  //自动旋转 -- 100
        private autoBet10Donw: eui.Button;  //自动旋转 -- 10
        private autoBet30Donw: game.Button;  //自动旋转 -- 30
        private autoBet50Donw: game.Button;  //自动旋转 -- 50
        private autoBet80Donw: game.Button;  //自动旋转 -- 80
        private autoBet100Donw: game.Button;  //自动旋转 -- 100
        private reduceNumHSlider: eui.HSlider;     //余额减少滑动选择器
        private reduceNum: eui.Label;         //余额减少必选项
        private addNumHSlider: eui.HSlider;     //余额增加滑动选择器
        private addNum: eui.Label;                 //余额增加、
        private singleNumHSlider: eui.HSlider;     //单次滑动选择器
        private singleNum: eui.Label;                 //单次余额增加   
        private startAutoRotatingButton: eui.Button;     //开始自动旋转
        private autoNum: Number = 25                      //自动旋转的轮数
        constructor() {
            super()
            this.skinName = new clsg_rotatingskin();
            this.initUI();
            // this.onResize();

        }

        private static m_Instance: RotationSetView;
        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new RotationSetView();
            return this.m_Instance;
        }

        destroy(): void {
            super.destroy();
            RotationSetView.m_Instance = null;
        }
        public addUIListener() {
            // egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHanlde, this);

        }

        public removeUIListener() {
            // egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHanlde, this);
        }

        public onClickHanlde(e: egret.TouchEvent) {
            if (e.target == this.closeButton)
            { this.onClickClose() }
            else if (e.target == this.changSuButton) {
                DataCenter.Instance['mIsQuickRotate'] = false
                this.onChangSuButton()
            }
            else if (e.target == this.jisuButton) {
                DataCenter.Instance['mIsQuickRotate'] = true
                this.onJisuButton()
            }
            else if (e.target == this.startAutoRotatingButton)
            { this.onStartAutoRotatingButton() }
            else {
                this.onAutoBet(e)
            }


        }

        public onReduceNumHSlider(e: egret.Event) {
            this.reduceNum.text = String(this.reduceNumHSlider.value)
            this.reduceNumHSlider.skin["trackWidth"].width = 590 * this.reduceNumHSlider.value / 100
        }

        public onAddNumHSlider(e: egret.Event) {
            this.addNum.text = String(this.addNumHSlider.value)
            this.addNumHSlider.skin["trackWidth"].width = 590 * this.addNumHSlider.value / 100
            if (this.addNumHSlider.value > 0)
                this.addNum.textColor = 0xf7ba65
            else
                this.addNum.textColor = 0x888888
        }

        public onSingleNumHSlider(e: egret.Event) {
            this.singleNum.text = String(this.singleNumHSlider.value)
            this.singleNumHSlider.skin["trackWidth"].width = 590 * this.singleNumHSlider.value / 100

            this.singleNum.text = String(this.singleNumHSlider.value)
            if (this.addNumHSlider.value > 0)
                this.singleNum.textColor = 0xf7ba65
            else
                this.singleNum.textColor = 0x888888
        }

        public onStartAutoRotatingButton() {
            if (Number(this.autoNum) != 0) {
                LabaGame.Instance.onClickRotateCountButton(Number(this.autoNum))
            }
            this.onClickClose()
        }

        public onClickClose() {
            if (RotationSetView.Instance.parent) {
                RotationSetView.Instance.parent.visible = false
                RotationSetView.Instance.parent.removeChild(RotationSetView.Instance)
            }
        }
        //常速
        protected onChangSuButton() {
            this.changSuButton.skin["labelDisplay"].textColor = '0xF2F2FC'
            this.changSuButton.skin["bgColor1"].visible = true
            this.changSuButton.skin["bgColor2"].visible = false
            this.jisuButton.skin["labelDisplay"].textColor = '0x5C5C5C'
            this.jisuButton.skin["bgColor1"].visible = false
            this.jisuButton.skin["bgColor2"].visible = true
            DataCenter.Instance.IsQuickRotate = false

        }
        //极速
        protected onJisuButton() {
            this.changSuButton.skin["labelDisplay"].textColor = '0x5C5C5C'
            this.changSuButton.skin["bgColor1"].visible = false
            this.changSuButton.skin["bgColor2"].visible = true
            this.jisuButton.skin["labelDisplay"].textColor = '0xF2F2FC'
            this.jisuButton.skin["bgColor1"].visible = true
            this.jisuButton.skin["bgColor2"].visible = false
            DataCenter.Instance.IsQuickRotate = true
        }
        private betGroup: eui.Group
        private mCurBetButton: game.Button = null
        public InitRotateListView() {
            let rotateList = DataCenter.Instance.getRotateList()
            for (let i = 0; i < this.betGroup.numChildren; i++) {
                let btn = this.betGroup.getChildAt(i) as game.Button
                btn.name = "bet_" + rotateList[rotateList.length - i - 1]
                btn.label = rotateList[rotateList.length - i - 1] == -1 ? "∞" : rotateList[rotateList.length - i - 1] + ""
                if (i == 0) {
                    this.mCurBetButton = btn
                    this.mCurBetButton.skin["labelDisplay"].textColor = '0xFFC824'
                    this.mCurBetButton.skin["act"].visible = true
                    this.autoNum = rotateList[rotateList.length - i - 1]
                }
                else {
                    btn.skin["labelDisplay"].textColor = '0xA2A3B0'
                    btn.skin["act"].visible = false
                }
            }
        }
        protected onAutoBet(e: egret.TouchEvent) {
            let str = e.target.name.split("_")

            if (str.length != 2) {
                return
            }
            if (this.mCurBetButton != null) {
                this.mCurBetButton.skin["labelDisplay"].textColor = '0xA2A3B0'
                this.mCurBetButton.skin["act"].visible = false
            }
            this.mCurBetButton = e.target
            if (this.mCurBetButton != null) {
                this.mCurBetButton.skin["labelDisplay"].textColor = '0xFFC824'
                this.mCurBetButton.skin["act"].visible = true
            }
            this.autoNum = Number(str[1])
        }

        protected initUI() {
           
        }

    }
}