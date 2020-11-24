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
		// private totalGlow: egret.tween.TweenGroup
		private mStopScrollCB: any = null
		public showFreeEnd(cb?: Function) {
			game.Timer.clearTimeout(this.mAutoCloseTimer)
			game.Timer.clearTimeout(this.mDelayCloseTimer)
			this.mFinishCB = cb
			this.playAppear();
			let wildMap = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
			let elemMap = [8, 7, 6, 5]
			let changeCount = DataCenter.Instance.WildCount > 12 ? 4 : wildMap[DataCenter.Instance.WildCount - 1]
			for (let i = 0; i < this.wildImageGroup.numChildren; i++) {
				let img = this.wildImageGroup.getChildAt(i) as eui.Image
				img.source = "elem" + elemMap[i] + (changeCount > i ? "0" : "")
			}


			this.freecountLabel.text = "" + (wildMap[DataCenter.Instance.WildCount - 1] * 2 + 8)


			this.mStopScrollCB = labalib.Utils.scrollNumber(this.winLabel, 0, DataCenter.Instance.FreeAccObtainGold, 1000, () => {
				this.playCopperFly();
				egret.Tween.get(this.lightImage2).set({ scaleX:1,scaleY:1,alpha:1 }).to({ scaleX:12,scaleY:12 }, 300).to({ alpha:0 }, 300)
				// labalib.Utils.PlayTweenGroup(this.totalGlow, 1)
			})
			LabaGame.Instance.freemGroup.addChild(FreeReultPanel.Instance);



			// monkey.x = 0
			// monkey.y = 160
			this.mAutoCloseTimer = game.Timer.setTimeout(() => {
				this.stopAppear()
				if (this.mStopScrollCB) {
					this.mStopScrollCB.stopCB()
				}
				if (this.mFinishCB) {
					this.mFinishCB()
				}
				LabaGame.Instance.switchBG(GameBG.normal)
			}, null, 4000);
		}
		
		private winMonkeyMov: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov1: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov2: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov3: dragonBones.EgretArmatureDisplay = null;
        private winLeafMov4: dragonBones.EgretArmatureDisplay = null;
		private freeGoldFlyGroup:eui.Group;
		private lightImage1:eui.Image;
		private lightImage2:eui.Image;
		private torchImage1:eui.Image;
		private torchImage2:eui.Image;
		private torchMov2:egret.MovieClip = null;
		private torchMov1:egret.MovieClip = null;




		 public playAppear() {
			 this.flyLantern();
			//  this.playCopperFly();
            if(!this.winMonkeyMov){
                this.winMonkeyMov = uniLib.DragonUtils.createDragonBoneAnimation("totalwin_ske")
                this.winMonkeyMov.x = 360;
                this.winMonkeyMov.y = 1450;

                this.winLeafMov1 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov1.x = 0;
                this.winLeafMov1.y = 1280;
                this.freeGoldFlyGroup.addChild(this.winLeafMov1);

                this.winLeafMov2 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov2.x = 0;
                this.winLeafMov2.y = 520;
                this.freeGoldFlyGroup.addChild(this.winLeafMov2);

                this.winLeafMov3 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov3.x = 720;
                this.winLeafMov3.y = 200;
                this.freeGoldFlyGroup.addChild(this.winLeafMov3);

                this.winLeafMov4 = uniLib.DragonUtils.createDragonBoneAnimation("shuye_0")
                this.winLeafMov4.x = 720;
                this.winLeafMov4.y = 1280;
                this.freeGoldFlyGroup.addChild(this.winLeafMov4);
                this.freeGoldFlyGroup.addChild(this.winMonkeyMov);
            }
            this.winLeafMov1.animation.play("yezi_0",0)
            this.winLeafMov2.animation.play("yezi_1",0)
            this.winLeafMov3.animation.play("yezi_2",0)
            this.winLeafMov4.animation.play("yezi_3",0)
            egret.Tween.get(this.winLeafMov1).set({ x:-200 }).to({ x:0 }, 300)
            egret.Tween.get(this.winLeafMov2).set({ x:-200 }).to({ x:0 }, 300)
            egret.Tween.get(this.winLeafMov3).set({ x:920 }).to({ x:720 }, 300)
            egret.Tween.get(this.winLeafMov4).set({ x:920 }).to({ x:720 }, 300)
            this.winMonkeyMov.animation.play("spawn",1)
            this.winMonkeyMov.armature.addEventListener(dragonBones.EventObject.COMPLETE, this.winMonkeyMovIdle, this);
			egret.Tween.get(this.lightImage1).set({ scaleX:1,scaleY:1 }).to({ scaleX:12,scaleY:12 }, 300).call(() => {
				egret.Tween.get(this.lightImage1,{loop:true}).to({ scaleX:8,scaleY:8 }, 900).to({ scaleX:12,scaleY:12 }, 900)
			});
			egret.Tween.get(this.torchImage2).set({ x:740 }).to({ x:638 }, 300)
			egret.Tween.get(this.torchImage1).set({ x:-100 }).to({ x:0 }, 300).call(() => {
				if(!this.torchMov1){
					this.torchMov1 = uniLib.DisplayUtils.createMovieClicp("clsg_huoMov");
					this.freeGoldFlyGroup.addChild(this.torchMov1);
					this.torchMov1.blendMode = egret.BlendMode.ADD;
					this.torchMov1.x = 40;
					this.torchMov1.y = 430;
					this.torchMov1.scaleX = 2;
					this.torchMov1.scaleY = 2;

					this.torchMov2 = uniLib.DisplayUtils.createMovieClicp("clsg_huoMov");
					this.freeGoldFlyGroup.addChild(this.torchMov2);
					this.torchMov2.blendMode = egret.BlendMode.ADD;
					this.torchMov2.x = 680;
					this.torchMov2.y = 435;
					this.torchMov2.scaleX = 2;
					this.torchMov2.scaleY = 2;
				}
				this.torchMov1.visible = true;
				this.torchMov2.visible = true;
				this.torchMov1.gotoAndPlay(0,-1);
				this.torchMov2.gotoAndPlay(0,-1)

			});


        }

		private copperTime:number = null
		 /**
         * 铜钱乱飞
         */
        public playCopperFly(addOrRem:boolean = true) {
            if(!this.copperTime&&addOrRem){
                this.copperTime = game.Timer.setInterval(()=>{
					for(let i = 0;i<MathUtil.random(2,5);++i){
						let iconMovie = new eui.Image("particle_g");
						let scale_ = MathUtil.random(0.2,1.5)
						iconMovie.scaleX = scale_;
						iconMovie.scaleY = scale_;
						iconMovie.x = 360;
						iconMovie.y = 440;
						iconMovie.blendMode = egret.BlendMode.ADD;
						this.totalWin.addChild(iconMovie);
						iconMovie.rotation = MathUtil.random(0,360);
						let rotation_ = iconMovie.rotation+MathUtil.random(0,360);
						let dstPos// = {x:[-100,820].random(),y:[-100,1380].random()};
						let dstScale = MathUtil.random(12,25);
						let duration = MathUtil.random(1500,2000);
						if(MathUtil.random(0,1)==1){
							dstPos = {x:[-100,820].random(),y:MathUtil.random(-100,1380)};
						}
						else{
							dstPos = {x:MathUtil.random(-100,820),y:[-100,1380].random()};
						}
						// if (toPos == null) {
						iconMovie.alpha = 0;
						let alpha_ = MathUtil.random(0,0.6)
						egret.Tween.get(iconMovie).set({ alpha: 1 }).to({ x: dstPos.x, y: dstPos.y,rotation:rotation_,alpha:alpha_}, duration, egret.Ease.sineOut).call(() => {
							this.totalWin.removeChild(iconMovie);
						});
					}
                },this, 50);
            }
            else if(this.copperTime&&!addOrRem){
                game.Timer.clearInterval(this.copperTime)
                this.copperTime = null;
            }
        }
		public winMonkeyMovIdle(){
            this.winMonkeyMov.armature.removeEventListener(dragonBones.EventObject.COMPLETE, this.winMonkeyMovIdle, this);
            this.winMonkeyMov.animation.play("idle",0)
        }
		private lantern: particle.GravityParticleSystem = null;
		private flyLantern() {
			if(!this.lantern){
				var texture = RES.getRes("clsg_freeLiZi_png");
				var config = RES.getRes("clsg_freeLiZi_json");
				this.lantern = new particle.GravityParticleSystem(texture, config);
				this.lantern.blendMode = egret.BlendMode.ADD;
				// this.lantern.scaleX = 2;
				// this.lantern.scaleY = 2;
				this.freeGoldFlyGroup.addChild(this.lantern);
			}
            this.lantern.start();
        }
		public stopAppear() {
			this.lantern.stop(true);
			this.playCopperFly(false);
			egret.Tween.removeTweens(this.lightImage1)
			egret.Tween.removeTweens(this.lightImage2)
			if(this.torchMov1){
                this.torchMov1.stop();
                this.torchMov2.stop();
                this.torchMov1.visible = false
                this.torchMov2.visible = false
            }
			
            egret.Tween.get(this.winLeafMov1).set({ x:0 }).to({ x:-200 }, 300)
            egret.Tween.get(this.winLeafMov2).set({ x:0 }).to({ x:-200 }, 300)
            egret.Tween.get(this.winLeafMov3).set({ x:720 }).to({ x:920 }, 300)
            egret.Tween.get(this.winLeafMov4).set({ x:720 }).to({ x:920 }, 300)
            this.winMonkeyMov.animation.stop();
            this.winLeafMov1.animation.stop();
            this.winLeafMov2.animation.stop();
            this.winLeafMov3.animation.stop();
            this.winLeafMov4.animation.stop();
            this.winMonkeyMov.animation.play("exit",1)
            // LabaGame.Instance.playFreeMov();
            game.Timer.setTimeout(() => {
				LabaGame.Instance.freemGroup.removeChild(FreeReultPanel.Instance);
            }, null, 500)
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