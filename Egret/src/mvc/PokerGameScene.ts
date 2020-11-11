module conglinshuiguo {
	/**
	 *
	 * @author 
	 *
	 */
	export class PokerGameScene extends uniLib.GameScene {
		public constructor() {
			super();
		}
		public start(): void {
			super.start();
			game.GameInfo.topLayer = this.mainUILayer;
			GX.GameLayerManager.sceneLayer = this.uiLayer;
			GX.GameLayerManager.mainLayer = this.effectLayer;
			GX.GameLayerManager.effectLayer = this.topLayer;
			GX.GameLayerManager.popLayer = this.mainUILayer;
			GX.GameLayerManager.maskLayer = this.maskLayer;
			GX.GameLayerManager.loadLayer = this.tipsLayer;
			game.MahJongFourFacede.getInstance().startUp(this);
			
			EffectCreate.Instance;
		}
		public destroy(): void {
			super.destroy();
			game.MahJongFourFacede.getInstance().sendNotification(game.MahjongFourFacadeConst.DESTORY);
		}
		/**
		 * 初始化位置属性,以做到右对齐
		 */
		private initPositionData(): void {
			if (game.DataCache.defaultWidth != uniLib.Global.screenWidth) {
				game.DataCache.defaultWidth = uniLib.Global.screenWidth;
				game.DataCache.defaultHeight = uniLib.Global.screenHeight;
			}
		}
	}
}
