// TypeScript file

module conglinshuiguo {
    export class SgmlHelper extends labalib.LabaHelper {
        constructor() {
            super();
        }

        public static get Instance() {
            return labalib.LabaHelper.Instance as SgmlHelper;
        }

        public static clearInstance() {
            labalib.LabaHelper.clearInstance();
        }

        /**
         * 获取元素类型;
         * param itemId：给定的元素
         */
        public getElemType(itemId: number): number {
            return Math.floor(itemId / 10);
        }
        /**
         * 获取元素值
         */
        public getElemValue(itemId: number): number {
            return itemId;
        }

        /**
         * 设置线的方向;
         */
        // protected getLineDirType(): labalib.ELineDirType {
        //     return labalib.ELineDirType.LineDir_TwoDir;
        // }

        /**
         * 设置特殊符号,水浒传没有特殊符号，所有直接为-1.
         */
        public getScatterValue(): number {
            return -1;
        }
        /**
         * 当前Wild属性的值，水浒传里“水浒传”类型就是特殊符号.
         */
        public getWildValue(): number {
            return CLSG_ElemAllType.Wild;
        }

        protected getResultLineWildCount(datas: Array<Array<number>>, lineIndex: number) {
            let foreWildCount = 0;
            let isForeWild = true;
            let backWildCount = 0;
            let isBackWild = true;
            let lineInfo = this.getLineInfo(lineIndex);
            for (let i: number = 0; i < 5; i++) {
                if (isForeWild){
                    if(datas[lineInfo[i]-1][i] == this.getWildValue()){
                        foreWildCount = foreWildCount + 1;
                    }else{
                        isForeWild = false;
                    }
                }
                if(isBackWild){
                    if(datas[lineInfo[5-i-1]-1][5-i-1] == this.getWildValue()){
                        backWildCount = backWildCount + 1;
                    }else{
                        isBackWild = false;
                    }
                }
            }
            if (foreWildCount<3){
                foreWildCount = 0;
            }
            if(backWildCount<3){
                backWildCount = 0;
            }
            if(foreWildCount>=backWildCount){
                return foreWildCount;
            }else{
                return backWildCount;
            }
        }

        /**
         * 计算结果的wild信息;
         */
        public getResultWildInfos(datas:Array<Array<number>>, lineCount:number=0){
            if (lineCount == 0){
                lineCount = this.mLineInfos.length;
            }
            let wildInfos = [];
            for(let i:number=0; i<lineCount; i++){
                let wildCount:number = this.getResultLineWildCount(datas, i);
                if(wildCount>0){
                    wildInfos.push([i, wildCount]);
                }
            }
            return wildInfos;
        }

        /**
         * 检测连个结果是否一致;
         */
        public isSameData(data1:Array<Array<number>>, data2:Array<Array<number>>):boolean{
            if(data1.length != data2.length){
                return false;
            }
            for(let i:number=0; i<data1.length; i++){
                if(data1[i].length != data2[i].length){
                    return false;
                }
                for(let j:number=0; j<data1[i].length; j++){
                    if(data1[i][j] != data2[i][j]){
                        return false;
                    }
                }
            }
            return true;
        }

        public isFullscreenMultiply(data:Array<Array<number>>, lineCount?:number):{result, multiply}{
            if (lineCount == null){
                lineCount = 9;
            }
            if(lineCount < 9){
                return {result:false, multiply:0};
            }
            let jackpotSpecialSymbolType = null;
            for(let i in LabaConfig.WholeScreenResults){
                let item = LabaConfig.WholeScreenResults[i];
                if(this.isSameData(item,data)){
                    jackpotSpecialSymbolType = Number(i);
                    break;
                }
            }
            if (jackpotSpecialSymbolType == null){
                return {result:false, multiply:0};
            }
            let tableJackpotSpecialSymbolConfig = table.TableJackpotSpecialSymbolConfig.instance().first((v: table.TableJackpotSpecialSymbolConfig) => v.id == jackpotSpecialSymbolType)
            if(tableJackpotSpecialSymbolConfig != null){
                return { result: true, multiply: tableJackpotSpecialSymbolConfig.value/9 }
            }
            else{
                return {result:false,multiply:0};
            }
        }

        /**
         * 获取中奖信息;
         */
        public getResultAllLinesAndMultipy(data: Array<Array<number>>, lineCount?: number): labalib.IResultLineAndMultiply {
            let result = super.getResultAllLinesAndMultipy(data, lineCount);
           
            return result;
        }

        /**
        * 不能用wild替换的元素,特殊符号可以不用放置这里;
        */
        public getNoWildValues(): Array<number> {
            return [CLSG_ElemAllType.DuoBao];
        }
    }
}