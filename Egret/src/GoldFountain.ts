module conglinshuiguo {
    export class GoldFountain extends egret.Sprite {
        private _goldNum: number;
        private _gravity: number;
        private _complete: Function;
        private golds: Array<any>;

        private startTime: number;

        public constructor() {
            super();
            this.golds = [];
        }

        public play(goldNum: number, gravity: number = 0.5, complete: Function = null) {
            this.startTime = -100;
            this._goldNum = goldNum;
            this._gravity = gravity;
            this._complete = complete;
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        }

        public stop() {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            if (this._complete != null) {
                this._complete();
                this._complete = null;
            }
        }

        public dispose() {
            this.stop();
            for (let i = this.golds.length - 1; i >= 0; i--) {
                var ball: GoldObj = this.golds[i];
                this.golds.splice(i, 1);
                this.saveGoldObj(ball);
            }
            if (this.parent) {
                this.parent.removeChild(this);
            }
        }

        private onEnterFrame(e: egret.Event) {
            if (this.stage == null) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
                return;
            }
            while (this._goldNum > 0 && (egret.getTimer() - this.startTime >= 10)) {
                this.startTime = egret.getTimer();
                let ball: GoldObj = this.newGoldObj();
                if (this.stage) {
                    ball.x = 720 / 2 - (Math.random() * 100 - 50);
                    ball.y = 1280*0.67;
                }
                ball.rotation = Math.random() * 360;
                ball.vx = Math.random() * 20 - 10;
                ball.vy = Math.random() * -5 - 23;
                ball.addParent(this);
                this.golds.push(ball);
                this._goldNum--;
            }
            for (let i = this.golds.length - 1; i >= 0; i--) {
                var ball: GoldObj = this.golds[i];
                ball.vy += this._gravity;
                ball.x += ball.vx;
                ball.y += ball.vy;
                ball.draw();
                if (ball.y > this.stage.stageHeight) {
                    this.golds.splice(i, 1);
                    this.saveGoldObj(ball);
                }
            }
            if (this.golds.length == 0) {
                this.stop();
            }
        }

        private goldPool: Array<GoldObj> = [];

        private saveGoldObj(value: GoldObj): void {
            if (value) {
                value.removeParent();
            }
            this.goldPool.push(value);
        }

        private newGoldObj(): GoldObj {
            if (this.goldPool.length > 0)
                return this.goldPool.pop();
            return new GoldObj();
        }
    }

    export class GoldObj {
        public vx: number;
        public vy: number;
        public x: number;
        public y: number;
        public rotation: number;

        private rotateEffect: egret.MovieClip;

        public constructor() {
            this.rotateEffect = uniLib.DisplayUtils.createMovieClicp("gold_4");
            this.rotateEffect.frameRate = 12;
            this.rotateEffect.scaleX = this.rotateEffect.scaleY = 0.7;
        }

        public addParent(value: egret.DisplayObjectContainer) {
            if (this.rotateEffect && value) {
                value.addChild(this.rotateEffect);
                this.rotateEffect.play(-1);
            }
        }

        public removeParent() {
            if (this.rotateEffect && this.rotateEffect.parent) {
                this.rotateEffect.parent.removeChild(this.rotateEffect);
                this.rotateEffect.stop();
            }
        }

        public draw() {
            if (this.rotateEffect) {
                this.rotateEffect.x = this.x;
                this.rotateEffect.y = this.y;
                this.rotateEffect.rotation = this.rotation;
            }
        }


    }
}