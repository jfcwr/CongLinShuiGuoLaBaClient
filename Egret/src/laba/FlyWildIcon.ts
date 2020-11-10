module xiyouji {
    /**
     * 主角显示对象集合
     */
    export class FlyWildIcon extends game.BaseUI {

        private wildFlyGroup: eui.Group



        constructor() {
            super();

            this.skinName = new xyj_flywildskin();
            this.touchEnabled = false
            this.anchorOffsetX = this.width / 2
            this.anchorOffsetY = this.height / 2

        }



        public destroy() {
            super.destroy();

        }
        public addUIListener(): void {

        }
        public removeUIListener(): void {
        }
        public addActionListener(): void {

        }
        public removeActionListener(): void {

        }


    }
}