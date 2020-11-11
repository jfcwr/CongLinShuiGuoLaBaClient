// TypeScript file
module conglinshuiguo {


    //拉霸游戏规则框界面;
    export class RuleView extends game.BaseUI {

        private closeButton: eui.Button;
        private mainGroup: eui.Group;

        constructor() {
            super()
            this.skinName = new clsg_ruleskin();
            this.initUI();
            this.onResize();

        }
        public onResize() {
            if (uniLib.Global.screenWidth < 720 || uniLib.Global.screenHeight < 1280) {
                this.mainGroup.scaleX = uniLib.Global.screenWidth / 720;
                this.mainGroup.scaleY = uniLib.Global.screenHeight / 1280;
            }
            else {
                this.mainGroup.scaleX = 1;
                this.mainGroup.scaleY = 1;
            }
        }
        private static m_Instance: RuleView;
        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new RuleView();
            return this.m_Instance;
        }

        destroy(): void {
            super.destroy();
            RuleView.m_Instance = null;
        }
        public addUIListener() {
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
            this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
        }

        public removeUIListener() {
            egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
            this.closeButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
        }

        public onClickClose() {
            if (RuleView.Instance.parent) {
                RuleView.Instance.parent.visible = false
                RuleView.Instance.parent.removeChild(RuleView.Instance)
            }
            LabaGame.Instance.moneyBox.visible = true
            // GX.PopUpManager.removePopUp(RuleView.Instance, GX.PopUpEffect.TOP);
        }

        protected initUI() {

        }

    }
}