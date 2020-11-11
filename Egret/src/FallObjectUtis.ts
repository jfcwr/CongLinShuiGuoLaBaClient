module conglinshuiguo {
    //落雨落金币
    export class FallObjectUtils {

        private fallObjects: Array<FallObject>;
        // private fallObjectTimeArr:Array<any>;

        private _parent: egret.DisplayObjectContainer;
        private builder: Builder;

        private fallObjectNum: number = 0;
        private isPlay: boolean = false;
        private timer: egret.Timer;

        public constructor(parent: egret.DisplayObjectContainer, num: number) {
            this.fallObjects = new Array<FallObject>();
            // this.fallObjectTimeArr = new Array<any>();
            this._parent = parent;

            this.timer = new egret.Timer(40, 0);

            this.builder = new Builder(["gold_4"]);
            this.builder.setSpeed(20, true)
                .setSize(110, 110, true)
                .setWind(5, true, true);

            this.setFallNum(num);
        }

        public setFallNum(value: number) {
            if (this.fallObjectNum < value) {
                while (this.fallObjectNum < value) {
                    let newFallObject: FallObject = new FallObject(this.builder, this._parent);
                    this.fallObjects.push(newFallObject);
                    this.fallObjectNum++;
                }
            } else if (this.fallObjectNum > value) {
                let oldFallObject: FallObject;
                while (this.fallObjectNum > value) {
                    oldFallObject = this.fallObjects.pop();
                    oldFallObject.dispose();
                    this.fallObjectNum--;
                }
            }
        }

        public Play() {
            if (!this.isPlay) {
                this.isPlay = true;

                this.timer.addEventListener(egret.TimerEvent.TIMER, this.ontimer, this);
                this.timer.start();
            }
        }

        private ontimer() {
            let fallObject: FallObject;
            for (let i = 0; i < this.fallObjectNum; i++) {
                fallObject = this.fallObjects[i];
                if (fallObject) {
                    fallObject.visible = true;
                    fallObject.drawObject()
                }
                // this.fallObjectTimeArr.push(game.Timer.setInterval(fallObject.drawObject,fallObject,13));
            }
        }

        public Stop() {
            if (this.isPlay) {
                this.isPlay = false;

                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.ontimer, this);
                this.timer.stop();

                let fallObject: FallObject;
                for (let i = 0; i < this.fallObjectNum; i++) {
                    fallObject = this.fallObjects[i];
                    if (fallObject) {
                        fallObject.visible = false;
                    }
                }

                // let fallObject:FallObject;
                // for (let i = 0; i < this.fallObjectTimeArr.length; i++) {
                //     game.Timer.clearInterval(this.fallObjectTimeArr[i]);
                //     fallObject = this.fallObjects[i];
                //     if(fallObject)
                //         fallObject.visible = false;
                // }
                // this.fallObjectTimeArr.length = 0;
            }
        }

        public dispose() {
            // for (let i = 0; i < this.fallObjectTimeArr.length; i++) {
            //     game.Timer.clearInterval(this.fallObjectTimeArr[i]);
            // }
            // this.fallObjectTimeArr.length = 0;
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.ontimer, this);
            this.timer.stop();
            for (let i = 0; i < this.fallObjects.length; i++) {
                this.fallObjects[i].dispose();
            }
            this.fallObjects.length = 0;
        }
    }


    export class Builder {
        public initSpeed: number;
        public initWindLevel: number;
        public bitmapSourceArray: Array<string>;

        public sizeW: number;
        public sizeH: number;

        public isSpeedRandom: boolean;
        public isSizeRandom: boolean;
        public isWindRandom: boolean;
        public isWindChange: boolean;

        public constructor(source: Array<string>) {
            this.initSpeed = FallObject.defaultSpeed;
            this.initWindLevel = FallObject.defaultWindLevel;
            this.bitmapSourceArray = source;

            this.isSpeedRandom = false;
            this.isSizeRandom = false;
            this.isWindRandom = false;
            this.isWindChange = false;
        }

        /**
         * 设置物体的初始下落速度
         * @param speed
         * @param isRandomSpeed 物体初始下降速度比例是否随机
         * @return
         */
        public setSpeed(speed: number, isRandomSpeed: boolean): Builder {
            this.initSpeed = speed;
            this.isSpeedRandom = isRandomSpeed;
            return this;
        }

        /**
         * 设置物体大小
         * @param w
         * @param h
         * @param isRandomSize 物体初始大小比例是否随机
         * @return
         */
        public setSize(w: number, h: number, isRandomSize: boolean): Builder {
            this.sizeW = w;
            this.sizeH = h;
            this.isSizeRandom = isRandomSize;
            return this;
        }

        /**
         * 设置风力等级、方向以及随机因素
         * @param level 风力等级（绝对值为 5 时效果会比较好），为正时风从左向右吹（物体向X轴正方向偏移），为负时则相反
         * @param isWindRandom 物体初始风向和风力大小比例是否随机
         * @param isWindChange 在物体下落过程中风的风向和风力是否会产生随机变化
         * @return
         */
        public setWind(level: number, isWindRandom: boolean, isWindChange: boolean): Builder {
            this.initWindLevel = level;
            this.isWindRandom = isWindRandom;
            this.isWindChange = isWindChange;
            return this;
        }

        public createBitmap(): egret.MovieClip {
            let num = Math.randomInteger(0, 2);
            let source: string = this.bitmapSourceArray[num];
            let rotateEffect = uniLib.DisplayUtils.createMovieClicp(source);
            rotateEffect.play(-1);
            return rotateEffect;
        }
    }

    export class FallObject {
        private initX: number = 0;
        private initY: number = 0;
        private _parent: egret.DisplayObjectContainer;
        // private parentWidth:number=0;//父容器宽度
        // private parentHeight:number=0;//父容器高度
        private objectWidth: number = 0;//下落物体宽度
        private objectHeight: number = 0;//下落物体高度

        public initSpeed = 0;//初始下降速度
        public initWindLevel = 0;//初始风力等级

        public presentX: number = 0;//当前位置X坐标
        public presentY: number = 0;//当前位置Y坐标
        public presentSpeed: number = 0;//当前下降速度
        private angle: number = 0;//物体下落角度

        private bitmap: egret.MovieClip;
        public builder: Builder;

        private isSpeedRandom: boolean;//物体初始下降速度比例是否随机
        private isSizeRandom: boolean;//物体初始大小比例是否随机
        private isWindRandom: boolean;//物体初始风向和风力大小比例是否随机
        private isWindChange: boolean;//物体下落过程中风向和风力是否产生随机变化


        public static defaultWindSpeed: number = 10;//默认单位风速
        public static HALF_PI: number = Math.PI / 2;//π/2
        public static defaultSpeed: number = 10;//默认下降速度
        public static defaultWindLevel: number = 0;//默认风力等级

        public constructor(builder: Builder, parent: egret.DisplayObjectContainer) {
            this._parent = parent;
            // this.parentWidth = parentWidth;
            // this.parentHeight = parentHeight;

            this.builder = builder;
            this.isSpeedRandom = builder.isSpeedRandom;
            this.isSizeRandom = builder.isSizeRandom;
            this.isWindRandom = builder.isWindRandom;
            this.isWindChange = builder.isWindChange;

            this.initSpeed = builder.initSpeed;
            this.randomSpeed();
            this.randomSize();
            this.randomWind();
        }

        public dispose() {
            if (this.bitmap && this.bitmap.parent) {
                this.bitmap.parent.removeChild(this.bitmap);
                this.bitmap = null;
            }
            this._parent = null;
        }

        public set visible(value: boolean) {
            if (this.bitmap) {
                this.bitmap.visible = value;
            }
        }

        /**
         * 绘制物体对象
         * @param canvas
         */
        public drawObject() {
            if (this.bitmap.parent == null && this._parent) {
                this.initX = Math.random() * (uniLib.Global.screenWidth);
                this.initY = Math.random() * (uniLib.Global.screenHeight) - uniLib.Global.screenHeight;
                this.presentX = this.initX;
                this.presentY = this.initY;
                this._parent.addChild(this.bitmap);
            }
            this.moveObject();
            this.bitmap.x = this.presentX;
            this.bitmap.y = this.presentY;
        }

        /**
         * 移动物体对象
         */
        private moveObject() {
            this.moveX();
            this.moveY();
            if (this.presentY > uniLib.Global.screenHeight || this.presentX < -this.bitmap.width || this.presentX > uniLib.Global.screenWidth + this.bitmap.width) {
                this.reset();
            }
        }

        /**
         * X轴上的移动逻辑
         */
        private moveX() {
            this.presentX += FallObject.defaultWindSpeed * Math.sin(this.angle);
            if (this.isWindChange) {
                this.angle += ((Math.randomInteger(0, 1) == 0) ? -1 : 1) * Math.random() * 0.0025;
            }
        }

        /**
         * Y轴上的移动逻辑
         */
        private moveY() {
            this.presentY += this.presentSpeed;
        }

        /**
         * 重置object位置
         */
        private reset() {
            this.initX = Math.random() * (uniLib.Global.screenWidth);
            this.initY = Math.random() * (uniLib.Global.screenHeight) - uniLib.Global.screenHeight;
            this.presentX = this.initX;
            this.presentY = this.initY;

            // this.presentY = -this.objectHeight;
            this.randomSpeed();//记得重置时速度也一起重置，这样效果会好很多
            this.randomWind();//记得重置一下初始角度，不然雪花会越下越少（因为角度累加会让雪花越下越偏）
        }

        /**
         * 随机物体初始下落速度
         */
        private randomSpeed() {
            if (this.isSpeedRandom) {
                this.presentSpeed = ((Math.random() * (3) + 1) * 0.1 + 1) * this.initSpeed;//这些随机数大家可以按自己的需要进行调整
            } else {
                this.presentSpeed = this.initSpeed;
            }
        }

        /**
         * 随机物体初始大小比例
         */
        private randomSize() {
            if (this.bitmap == null) {
                this.bitmap = this.builder.createBitmap();
                this.bitmap.rotation = Math.randomFloat(0, 360);
                // this.bitmap.smoothing = true;
            }
            if (this.isSizeRandom) {
                let r = Math.randomFloat(0.7, 1);//(Math.random() * (10)+1)*0.1;
                let rW = r * this.builder.sizeW;
                let rH = r * this.builder.sizeH;
                this.bitmap = this.changeBitmapSize(this.bitmap, rW, rH);
            }
            this.objectWidth = this.bitmap.width;
            this.objectHeight = this.bitmap.height;
        }

        /**
         * 随机风的风向和风力大小比例，即随机物体初始下落角度
         */
        private randomWind() {
            if (this.isWindRandom) {
                this.angle = ((Math.randomInteger(0, 1) == 0) ? -1 : 1) * Math.random() * this.initWindLevel / 50;
            } else {
                this.angle = this.initWindLevel / 50;
            }

            //限制angle的最大最小值
            if (this.angle > FallObject.HALF_PI) {
                this.angle = FallObject.HALF_PI;
            } else if (this.angle < -FallObject.HALF_PI) {
                this.angle = -FallObject.HALF_PI;
            }
        }

        // /**
        //  * drawable图片资源转bitmap
        //  * @param drawable
        //  * @return
        //  */
        // public  drawableToBitmap( drawable:Drawable) :Bitmap{
        //     Bitmap bitmap = Bitmap.createBitmap(
        //             drawable.getIntrinsicWidth(),
        //             drawable.getIntrinsicHeight(),
        //             drawable.getOpacity() != PixelFormat.OPAQUE ? Bitmap.Config.ARGB_8888
        //                     : Bitmap.Config.RGB_565);
        //     Canvas canvas = new Canvas(bitmap);
        //     drawable.setBounds(0, 0, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
        //     drawable.draw(canvas);
        //     return bitmap;
        // }

        /**
         * 改变bitmap的大小
         * @param bitmap 目标bitmap
         * @param newW 目标宽度
         * @param newH 目标高度
         * @return
         */
        public changeBitmapSize(mc: egret.MovieClip, newW: number, newH: number): egret.MovieClip {

            let oldW = mc.width;
            let oldH = mc.height;
            // 计算缩放比例
            let scaleWidth = newW / oldW;
            let scaleHeight = newH / oldH;
            // 取得想要缩放的matrix参数
            mc.scaleX = scaleWidth;
            mc.scaleY = scaleWidth;
            // 得到新的图片
            return mc;
        }
    }
}