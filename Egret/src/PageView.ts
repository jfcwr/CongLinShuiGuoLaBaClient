// TypeScript file

module xiyouji{
    export class PageView extends eui.Group{
        private mScroller:eui.Scroller;
        private mScrollContainer:eui.Group;
        constructor(){
            super();
        }

        protected initScroller(){
            this.mScroller = new eui.Scroller();
            this.mScrollContainer = new eui.Group();
            this.mScroller.addChild(this.mScrollContainer);
            this.mScrollContainer.width = this.width;
            this.mScrollContainer.height = this.height;
            this.mScroller.width = this.width;
            this.mScroller.height = this.height;
            this.addChild(this.mScroller);
        }

    }
}
