// TypeScript file
module conglinshuiguo {
	//特效层;
	export class EffectLayer extends egret.DisplayObjectContainer {
		private static m_Instance: EffectLayer;
		public static get Instance() {
			if (this.m_Instance == null)
				this.m_Instance = new EffectLayer();
			return this.m_Instance;
		}

		public destroy(){
			EffectLayer.m_Instance = null;
		}
		//变暗的屏幕
		private DarkRect: eui.Rect;

		constructor() {
			super();
			this.touchEnabled = false;
			this.touchChildren = false;
			
		}
		
	

		
	}
}