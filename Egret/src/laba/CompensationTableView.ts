// TypeScript file
module conglinshuiguo {
    class PageHelper {
        private mScroller: eui.Scroller;
        private mCallBackTarget: any;
        private mCallBack: Function;
        private mTotalWidth: number;
        private mCurPageIndex: number;
        private mScrollWidth: number;
        private mScrollSpeed: number = 1000;//1秒1000像素;
        private lastScrollH: number = 0;
        private scrolloffset: number = 0;
        constructor(scroller: eui.Scroller) {
            this.mScroller = scroller;
            this.mScroller.bounces = false;
            this.mScroller.throwSpeed = 0;
            this.mScrollWidth = this.mScroller.width;
            this.mScroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE, this.onChange, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE_END, this.onChangeEnd, this);
            this.mTotalWidth = this.mScroller.viewport.width;
            this.mCurPageIndex = 0;
        }

        public addPageChangedListener(listener: Function, tar: any = null) {
            this.mCallBack = listener;
            this.mCallBackTarget = tar;
        }

        protected onBeginTouch(e: egret.TouchEvent) {
        }

        protected onChange() {
            this.updateCurPage();
        }

        protected onChangeEnd() {
            this.scrollToWholePage();
            this.mScroller.touchEnabled = false;
        }

        protected scrollToWholePage() {
            let curScrollH: number = this.mScroller.viewport.scrollH;
            let dstPage: number = Math.floor(curScrollH / this.mScrollWidth + 0.5 + this.scrolloffset);
            let dstScrollH: number = dstPage * this.mScrollWidth;
            let self = this;
            egret.Tween.get(this.mScroller.viewport).to({ scrollH: dstScrollH }, (Math.abs(dstScrollH - curScrollH) / this.mScrollSpeed) * 500, egret.Ease.getPowOut(2)).call(() => {
                self.mScroller.touchEnabled = true;
            });
        }

        public scrollToPage(page: number) {
            let dstScrollH: number = page * this.mScrollWidth;
            let self = this;
            let curScrollH: number = this.mScroller.viewport.scrollH;
            egret.Tween.get(this.mScroller.viewport).to({ scrollH: dstScrollH }, (Math.abs(this.mScrollWidth) / this.mScrollSpeed) * 500, egret.Ease.getPowOut(2)).call(() => {
                self.mScroller.touchEnabled = true;
            });
        }

        public setScrollLeft(offset: number, duration: number) {
            egret.Tween.get(this.mScroller.viewport).to({ scrollH: offset }, duration);
        }

        private calScrollOffset(curScrollH: number) {
            if (curScrollH - this.lastScrollH > 0) {
                this.scrolloffset = 0.2;
            } else {
                this.scrolloffset = -0.2;
            }
            this.lastScrollH = curScrollH;
        }
        public updateCurPage() {
            let curScrollH: number = this.mScroller.viewport.scrollH;
            this.calScrollOffset(curScrollH);
            let newPage: number = Math.floor(curScrollH / this.mScrollWidth + 0.5 + this.scrolloffset);
            if (newPage != this.mCurPageIndex) {
                this.mCurPageIndex = newPage;
                if (this.mCallBack != null) {
                    this.mCallBack.call(this.mCallBackTarget, this.mCurPageIndex);
                }
            }
        }

        public getCurIndex(): number {
            return this.mCurPageIndex;
        }
    }


    //拉霸帮助框界面;
    export class CompensationTableView extends game.BaseUI {

        // public pageFlag1:eui.Image;
        // public pageFlag2:eui.Image;

        // public helpLast:game.Button;
        // public helpNext:game.Button;
        private closeButton: eui.Button;
        private pageHelper: PageHelper;
        private helpScroller: eui.Scroller;
        private mainGroup: eui.Group;

        constructor() {
            super()
            this.skinName = new clsg_compensationTableskin();
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
        private static m_Instance: CompensationTableView;
        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new CompensationTableView();
            return this.m_Instance;
        }

        destroy(): void {
            super.destroy();
            CompensationTableView.m_Instance = null;
        }
        public addUIListener() {
            egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
            this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
            // this.helpLast.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSwitchButtonLast, this);
            // this.helpNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickSwitchButtonNext, this);
        }

        public removeUIListener() {
            egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
            this.closeButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);

        }

        public onClickClose() {

            if (CompensationTableView.Instance.parent) {
                CompensationTableView.Instance.parent.visible = false
                CompensationTableView.Instance.parent.removeChild(CompensationTableView.Instance)
            }
            LabaGame.Instance.moneyBox.visible = true

        }
        public onClickSwitchButtonLast(event: egret.TouchEvent) {
            this.curIndex--;
            if (this.curIndex <= 0) {
                this.curIndex = 0;
            }
            this.pageHelper.scrollToPage(this.curIndex);

        }

        public onClickSwitchButtonNext(event: egret.TouchEvent) {
            this.curIndex++;
            if (this.curIndex >= 2) {
                this.curIndex = 2;
            }
            this.pageHelper.scrollToPage(this.curIndex);

        }
        private curIndex: number = 0;
        protected initUI() {
            this.curIndex = 0;
            this.pageHelper = new PageHelper(this.helpScroller);
            this.pageHelper.addPageChangedListener(this.onPageChanged, this);
        }

        protected onPageChanged(pageIndex: number) {
            this.curIndex = pageIndex;

        }
    }
}