module conglinshuiguo {
    /**
     * 主角显示对象集合
     */
    export class FlyWildIcon extends game.BaseUI {

        private wildFlyGroup: eui.Group



        constructor() {
            super();

            this.skinName = new clsg_flywildskin();
            this.touchEnabled = false
            this.anchorOffsetX = this.width / 2
            this.anchorOffsetY = this.height / 2
            this.mGuangDragon = uniLib.DragonUtils.createDragonBoneAnimation("gq")
            this.mGuangDragon.animation.play("animation", 0)
            this.wildFlyGroup.addChild(this.mGuangDragon)

        }
        private mGuangDragon = null



        public destroy() {
            super.destroy();
            if (this.mGuangDragon) {
                this.mGuangDragon.animation.stop()
                if (this.mGuangDragon.parent)
                    this.mGuangDragon.parent.removeChild(this.mGuangDragon)
                this.mGuangDragon.dispose()
                this.mGuangDragon = null
            }

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