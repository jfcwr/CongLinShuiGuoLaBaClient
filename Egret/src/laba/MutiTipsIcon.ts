module conglinshuiguo {
    /**
     * 主角显示对象集合
     */
    export class MutiTipsIcon extends game.BaseUI {
        private nameLabel: eui.Label;
        private propertyLabel: eui.BitmapLabel;
        // public iconGroup: eui.Group;
        private headImage: eui.Image;

        private shopBtn: egret.MovieClip;



        public static m_Instance: MutiTipsIcon = null;
        public descGroup: eui.Group;
        public iconGroup: eui.Group;
        public mainGroup: eui.Group;
        private mAwardIcon: AwardScrollIcon
        private duobaoLabel: eui.Label
        private mutiGroup: eui.Group
        constructor() {
            super();

            this.skinName = new clsg_mutiinfoskin();

            this.initUI()
        }


        public static get Instance() {
            if (this.m_Instance == null)
                this.m_Instance = new MutiTipsIcon();
            return this.m_Instance;
        }
        public initUI(): void {
            this.mAwardIcon = new AwardScrollIcon()
            this.iconGroup.addChild(this.mAwardIcon)
        }
        public destroy() {
            super.destroy();
            this.mAwardIcon.StopAnimation()
            this.mAwardIcon = null
            MutiTipsIcon.m_Instance = null;

        }
        public addUIListener(): void {

        }
        public removeUIListener(): void {

        }
        public addActionListener(): void {

        }
        public removeActionListener(): void {

        }

        private onClickTap(e: egret.TouchEvent) {
        }
        private muti3: eui.BitmapLabel
        private muti2: eui.BitmapLabel
        private muti1: eui.BitmapLabel
        private rect1: eui.Rect
        private image1: eui.Image
        public showIcon(beltIndex: number, posXY: egret.Point, elemID: number) {
            this.mutiGroup.visible = false
            this.duobaoLabel.visible = false
            if (elemID == CLSG_ElemAllType.DuoBao) {
                this.width = 132 * 3
                this.image1.width = 132 * 3
                this.rect1.width = 132 * 3 - 6
                this.duobaoLabel.visible = true
            }
            else {
                this.width = 132 * 2
                this.image1.width = 132 * 2
                this.rect1.width = 132 * 2 - 6
                this.mutiGroup.visible = true
            }
            this.descGroup.width = this.width - 132
            if (beltIndex <= 3) {
                this.mainGroup.addChild(this.iconGroup)
                this.mainGroup.addChild(this.descGroup)
            } else {
                this.mainGroup.addChild(this.descGroup)
                this.mainGroup.addChild(this.iconGroup)
            }
            this.mAwardIcon.StopAnimation()
            this.mAwardIcon.PlayWinAnimation(elemID)
            this.muti1.text = "" + SgmlHelper.Instance.getElementMultiply(elemID, 3)
            this.muti2.text = "" + SgmlHelper.Instance.getElementMultiply(elemID, 4)
            this.muti3.text = "" + SgmlHelper.Instance.getElementMultiply(elemID, 5)
            LabaGame.Instance.tipsGroup.visible = true
            let xy = this.parent.globalToLocal(posXY.x, posXY.y)
            if (beltIndex <= 3) {
                xy.x -= 66
                xy.y -= 66
            } else {
                xy.x = xy.x - this.width + 66
                xy.y = xy.y  - 66

            }
            this.x = xy.x
            this.y = xy.y
        }

    }
}