module conglinshuiguo {



	export class FreeReultPanel extends game.BaseUI {



		// 
		private mAutoCloseTimer: number
		private getMoneyButton: game.Button
		private wildImage: eui.Image;
		private freecountLabel: eui.BitmapLabel;
		private winLabel: eui.BitmapLabel;
		public static m_Instance: FreeReultPanel = null;
		public static get Instance() {
			if (this.m_Instance == null)
				this.m_Instance = new FreeReultPanel();
			return this.m_Instance;
		}
		public destroy() {
			super.destroy();
			FreeReultPanel.m_Instance = null;

		}

		public constructor() {
			super();
			this.skinName = new clsg_freeResultskin();

			this.playWinBar()
			// this.freeGoldFlyGroup.addChild(this.freeWinGoldEffect);
		}

		addUIListener(): void {
			this.getMoneyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetMoneyButton, this);
		}
		removeUIListener(): void {
			this.getMoneyButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetMoneyButton, this);
		}
		private winTotalAnimArr = []

		public playWinBar() {
			this.totalWin.visible = true
			let totalFlare = labalib.Utils.PlayMovieAnimInfo(this.totalWin, LabaConfig.TotalFlare);
			totalFlare.x = 170
			totalFlare.y = 1000
			totalFlare.scaleX = 3.5
			totalFlare.scaleY = 3
			this.winTotalAnimArr.push(totalFlare)

			let totalFlare1 = labalib.Utils.PlayMovieAnimInfo(this.totalWin, LabaConfig.TotalFlare);
			totalFlare1.x = 550
			totalFlare1.y = 1000
			totalFlare1.scaleX = -3.5
			totalFlare1.scaleY = 3
			this.winTotalAnimArr.push(totalFlare1)

			let totalFlare2 = labalib.Utils.PlayMovieAnimInfo(this.totalWin, LabaConfig.TotalFlare);
			totalFlare2.x = 170
			totalFlare2.y = 300
			totalFlare2.scaleX = 3.5
			totalFlare2.scaleY = -3
			this.winTotalAnimArr.push(totalFlare2)

			let totalFlare3 = labalib.Utils.PlayMovieAnimInfo(this.totalWin, LabaConfig.TotalFlare);
			totalFlare3.x = 550
			totalFlare3.y = 300
			totalFlare3.scaleX = -3.5
			totalFlare3.scaleY = -3
			this.winTotalAnimArr.push(totalFlare3)


		}

		public destroyBarAnim() {
			for (let anim of this.winTotalAnimArr) {
				labalib.Utils.ObjectPool.Instance.destroyObject(anim)
			}
			this.winTotalAnimArr = []
		}
		private wildImageGroup: eui.Group
		private mFinishCB: any = null
		private mFinishCBObj: any = null
		private totalWin: eui.Group
		private totalGlow: egret.tween.TweenGroup
		private mStopScrollCB: any = null
		public showFreeEnd(cb?: Function) {
			game.Timer.clearTimeout(this.mAutoCloseTimer)
			game.Timer.clearTimeout(this.mDelayCloseTimer)
			this.mFinishCB = cb
			let wildMap = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
			let elemMap = [8, 7, 6, 5]
			let changeCount = DataCenter.Instance.WildCount > 12 ? 4 : wildMap[DataCenter.Instance.WildCount - 1]
			for (let i = 0; i < this.wildImageGroup.numChildren; i++) {
				let img = this.wildImageGroup.getChildAt(i) as eui.Image
				img.source = "elem" + elemMap[i] + (changeCount > i ? "0" : "")
			}
			this.freecountLabel.text = "" + (wildMap[DataCenter.Instance.WildCount - 1] * 2 + 8)


			this.mStopScrollCB = labalib.Utils.scrollNumber(this.winLabel, 0, DataCenter.Instance.FreeAccObtainGold, 1000, () => {
				labalib.Utils.PlayTweenGroup(this.totalGlow, 1)
			})
			GX.PopUpManager.addPopUp(FreeReultPanel.Instance)



			// monkey.x = 0
			// monkey.y = 160
			this.mAutoCloseTimer = game.Timer.setTimeout(() => {
				GX.PopUpManager.removePopUp(FreeReultPanel.Instance)

				if (this.mStopScrollCB) {
					this.mStopScrollCB.stopCB()
				}
				if (this.mFinishCB) {
					this.mFinishCB()
				}
				LabaGame.Instance.switchBG(GameBG.normal)
			}, null, 4000);
		}

		public mDelayCloseTimer: number
		public onGetMoneyButton() {
			if (this.mStopScrollCB) {
				this.mStopScrollCB.stopCB()
			}
			egret.Tween.removeTweens(this.winLabel)
			this.winLabel.text = DataCenter.Instance.FreeAccObtainGold + ""
			game.Timer.clearTimeout(this.mDelayCloseTimer)
			this.mDelayCloseTimer = game.Timer.setTimeout(() => {
				GX.PopUpManager.removePopUp(FreeReultPanel.Instance)
				LabaGame.Instance.switchBG(GameBG.normal)
				if (this.mFinishCB) {
					this.mFinishCB()
				}
			}, null, 800)

		}





		private onContinueGameButton() {

		}

	}
}