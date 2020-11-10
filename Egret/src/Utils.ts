// TypeScript file
module xiyouji {
    export namespace Utils {
        export enum BezierLineType {
            TwoStep = 2,        //二阶贝塞尔曲线 B(t) = (1-t)^2 * P0 + 2*t*(1-t)P1 + t^2 * P2; T=[0,1]  
            ThreeStep = 3,      //三阶贝塞尔曲线 B(t) = (1-t)^3 * P0 + 3*(1-t)^2*t*P1 + 3*(1-t)*t^2*P2 + t^3 *p3;
        }
        //贝塞尔曲线对象;
        export class BezierObject {
            private obj;  //实际操作的对象;
            private pFrom;   //bezier的起始坐标
            private p1;   //bezier的p1坐标;
            private p2;   //bezier的p2坐标;
            private pTo;      //bezier的目标点;
            private mBezierType = BezierLineType.TwoStep;
            constructor(obj: any) {
                this.obj = obj;
            }

            public setTwoStepParam(fromPos, toPos, p1Pos) {
                this.pFrom = fromPos;
                this.p1 = p1Pos;
                this.pTo = toPos;
                this.obj.x = fromPos.x;
                this.obj.y = fromPos.y;
                this.mBezierType = BezierLineType.TwoStep;
            }

            public setThreeStepParam(fromPos, toPos, p1Pos, p2Pos) {
                this.mBezierType = BezierLineType.ThreeStep;
                this.pFrom = fromPos;
                this.pTo = toPos;
                this.p1 = p1Pos;
                this.p2 = p2Pos;
                this.obj.x = fromPos.x;
                this.obj.y = fromPos.y;
            }

            public get scaleX() {
                return this.obj.scaleX;
            }
            public set scaleX(value: number) {
                this.obj.scaleX = value
            }
            public get scaleY() {
                return this.obj.scaleY;
            }
            public set scaleY(value: number) {
                this.obj.scaleY = value
            }

            public get factor() {
                return 0;
            }
            public set factor(value: number) {
                if (this.mBezierType == BezierLineType.TwoStep) {
                    this.obj.x = (1 - value) * (1 - value) * this.pFrom.x + 2 * value * (1 - value) * this.p1.x + value * value * this.pTo.x;
                    this.obj.y = (1 - value) * (1 - value) * this.pFrom.y + 2 * value * (1 - value) * this.p1.y + value * value * this.pTo.y;
                } else {
                    this.obj.x = (1 - value) * (1 - value) * (1 - value) * this.pFrom.x + 3 * value * (1 - value) * (1 - value) * this.p1.x + 3 * value * value * (1 - value) * this.p2.x + value * value * value * this.pTo.x;
                    this.obj.y = (1 - value) * (1 - value) * (1 - value) * this.pFrom.y + 3 * value * (1 - value) * (1 - value) * this.p1.y + 3 * value * value * (1 - value) * this.p2.y + value * value * value * this.pTo.y;
                }
            }
            public destroy() {
                if (this.obj.parent != null) {
                    this.obj.parent.removeChild(this.obj);
                    this.obj = null;
                }
            }

        };

    }



}