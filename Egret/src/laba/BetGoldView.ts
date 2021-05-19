
// TypeScript file
module conglinshuiguo {
    //拉霸游戏规则框界面;
    class PositionScroller {
        private mScroller: eui.Scroller;
        private mCallBackTarget: any;
        private mCallBack: Function;
        private mTotalHeight: number;
        private mCurPageIndex: number;
        private mScrollHeight: number;
        private mScrollSpeed: number = 1000;//1秒1000像素;
        private lastScrollH: number = 0;
        private scrolloffset: number = 0;
        private mID: number
        constructor(scroller: eui.Scroller, id: number, totalHeight: number) {
            this.mScroller = scroller;
            this.mID = id
            this.mTotalHeight = totalHeight
            // this.mScroller.bounces = false;
            // this.mScroller.throwSpeed = 0;
            // this.mScrollHeight = this.mScroller.height;
            this.mScrollHeight = 80;
            this.mScroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE, this.onChange, this);
            this.mScroller.addEventListener(eui.UIEvent.CHANGE_END, this.onChangeEnd, this);
            // this.mTotalHeight = this.mScroller.viewport.height;
            this.mCurPageIndex = 0;
        }

        public destory() {
            this.mScroller.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginTouch, this);
            this.mScroller.removeEventListener(eui.UIEvent.CHANGE, this.onChange, this);
            this.mScroller.removeEventListener(eui.UIEvent.CHANGE_END, this.onChangeEnd, this);
        }
        public addPageChangedListener(listener: Function, tar: any = null) {
            this.mCallBack = listener;
            this.mCallBackTarget = tar;
        }

        protected onBeginTouch(e: egret.TouchEvent) {
            // BetGoldView.Instance.setBtnTouch(false)
        }

        protected onChange() {
            this.updateCurPage();
        }

        protected onChangeEnd() {
            this.mScroller.touchEnabled = false;
            this.scrollToWholePage();

        }

        public scrollToWholePage() {

            let curScrollV: number = this.mScroller.viewport.scrollV; //当前滚动位置
            let dstPage: number = Math.floor(curScrollV / this.mScrollHeight + 0.5 + this.scrolloffset);
            let dstScrollH: number = (this.mCurPageIndex - 2) * this.mScrollHeight;
            let self = this;
            egret.Tween.get(this.mScroller.viewport).to({ scrollV: dstScrollH }, (Math.abs(dstScrollH - curScrollV) / this.mScrollSpeed) * 1000, egret.Ease.getPowOut(2)).call(() => {
                self.mScroller.touchEnabled = true;
                if (this.mID == 2)  //等于2的时候  滚动倍数
                    DataCenter.Instance.ScrollorChanged.call({ page: this.mCurPageIndex, id: 1 });
                else    //等于2的时候  滚动投注总额
                    DataCenter.Instance.ScrollorChanged.call({ page: this.mCurPageIndex, id: 2 });
            });
        }
        public scrollToPage(page: number) {
            this.mScroller.touchEnabled = false;
            egret.Tween.removeTweens(this.mScroller.viewport)
            this.mCurPageIndex = page
            let curScrollV: number = this.mScroller.viewport.scrollV; //当前滚动位置
            let dstScrollH: number = (this.mCurPageIndex - 2) * this.mScrollHeight;
            this.mScroller.removeEventListener(eui.UIEvent.CHANGE, this.onChange, this);
            this.mScroller.removeEventListener(eui.UIEvent.CHANGE_END, this.onChangeEnd, this);
            egret.Tween.get(this.mScroller.viewport).to({ scrollV: dstScrollH }, (Math.abs(dstScrollH - curScrollV) / this.mScrollSpeed) * 1000, egret.Ease.getPowOut(2)).call(() => {
                this.mScroller.touchEnabled = true;
                this.mScroller.addEventListener(eui.UIEvent.CHANGE, this.onChange, this);
                this.mScroller.addEventListener(eui.UIEvent.CHANGE_END, this.onChangeEnd, this);
            });
        }

        private calScrollOffset(curScrollV: number) {
            if (curScrollV - this.lastScrollH > 0) {
                this.scrolloffset = 0.2;
            } else {
                this.scrolloffset = -0.2;
            }
            this.lastScrollH = curScrollV;
        }
        public updateCurPage() {
            let curScrollV: number = this.mScroller.viewport.scrollV;
            if (curScrollV <= 0) {
                //  从1开始
                this.mCurPageIndex = 2
                return
            }
            if (curScrollV > this.mTotalHeight) {
                this.mCurPageIndex = 4
                return
            }
            let PageLast: number = Math.floor(curScrollV / this.mScrollHeight);
            let PageNext: number = Math.ceil(curScrollV / this.mScrollHeight);
            if ((curScrollV - PageLast * this.mScrollHeight) > (PageNext * this.mScrollHeight - curScrollV)) {
                this.mCurPageIndex = PageNext
            }
            else
                this.mCurPageIndex = PageLast
            this.mCurPageIndex += 2
        }
        public get CurPageIndex() {
            return this.mCurPageIndex
        }
    }


    //拉霸帮助框界面;
    export class BetGoldView extends game.BaseUI {
        private closeButton: eui.Button;
        private bigBetButton: eui.Button;  //最大投注
        private allBetNum: eui.Label;      //投注总额
        // private singleBetLabel: eui.Label   //投注基础
        private bigBetClickButton: eui.Button; //点击确定
        // private positionScroller: PositionScroller;
        private multipleBetsScroller: eui.Scroller;  //投注倍数
        private betsLineScroller: eui.Scroller;  //投注线
        private totalNumBetsScroller: eui.Scroller;  //投注总额
        private mainGroup: eui.Group;
        private totalBetGroup: eui.Group
        constructor() {
            super()
            this.skinName = new clsg_betskin();

            this.initUI();
        }

        public mTotalBet: number

        private static m_Instance: BetGoldView;
        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new BetGoldView();
            return this.m_Instance;
        }

        destroy(): void {
            super.destroy();

            BetGoldView.m_Instance = null;
        }
        public addUIListener() {
            // egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onResize, this);
            this.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
            this.bigBetButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBigBetButton, this);
            this.bigBetClickButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBigBetClickButton, this);
            this.subButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubButton, this);
            this.addButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddButton, this);
        }
        private subButton: game.Button
        private addButton: game.Button
        public removeUIListener() {
            // egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE, this.onResize, this);
            this.closeButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
            this.bigBetButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBigBetButton, this);
            this.bigBetClickButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBigBetClickButton, this);
            this.subButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubButton, this);
            this.addButton.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddButton, this);
        }

        public onClickClose() {
            if (BetGoldView.Instance.parent) {
                BetGoldView.Instance.parent.visible = false
                BetGoldView.Instance.parent.removeChild(BetGoldView.Instance)
            }
        }



        public onAddButton() {
            let dizhuIndex = DataCenter.Instance.DizhuIndex;
            let idx = 0;
            if (dizhuIndex < DataCenter.Instance.MaxDizhuIndex) {
                idx = dizhuIndex + 1;
                DataCenter.Instance.DizhuIndex = idx;
            } else {
                idx = 0;
                DataCenter.Instance.DizhuIndex = idx;
            }
            GX.localStorage.setItem("dizhu_" + game.GameId(), idx.toString());
            this.allBetNum.text = GX.GoldFormat(DataCenter.Instance.CurDizhu, false, false, true)//DataCenter.Instance.CurDizhu + ""
        }
        public onSubButton() {
            let dizhuIndex = DataCenter.Instance.DizhuIndex;
            let idx = 0;
            if (dizhuIndex > 0) {
                idx = dizhuIndex - 1;
                DataCenter.Instance.DizhuIndex = idx;
            } else {
                idx = DataCenter.Instance.MaxDizhuIndex;
                DataCenter.Instance.DizhuIndex = idx;
            }
            GX.localStorage.setItem("dizhu_" + game.GameId(), idx.toString());
            this.allBetNum.text = GX.GoldFormat(DataCenter.Instance.CurDizhu, false, false, true)
        }
        protected onBigBetClickButton() {
            if (BetGoldView.Instance.parent) {
                BetGoldView.Instance.parent.visible = false
                BetGoldView.Instance.parent.removeChild(BetGoldView.Instance)
            }
          

        }
        public updateBetView() {

            this.allBetNum.text = GX.GoldFormat(DataCenter.Instance.CurDizhu, false, false, true)

        }
        protected onBigBetButton() {
            let idx = DataCenter.Instance.MaxDizhuIndex;
            DataCenter.Instance.DizhuIndex = idx;
            GX.localStorage.setItem("dizhu_" + game.GameId(), idx.toString());
            this.allBetNum.text = GX.GoldFormat(DataCenter.Instance.CurDizhu, false, false, true)
        }
        private multilingual1:eui.Label;
        private multilingual2:eui.Label;

        private clickCount: number = 0;
        protected initUI() {
            this.multilingual1.text = game.Words.get(65);
            this.multilingual2.text = game.Words.get(91);
            this.bigBetButton["labelDisplay"].text = game.Words.get(92);
            this.bigBetClickButton["labelDisplay"].text = game.Words.get(93);

        }


    }
}