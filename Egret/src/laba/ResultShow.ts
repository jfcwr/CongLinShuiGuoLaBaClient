// TypeScript file
//旋转过程中的表演.
module xiyouji {
    export class ResultShow extends labalib.ResultShow {

        public static get Instance() {
            return labalib.ResultShow.Instance as ResultShow;
        }


        public static clearInstance() {
            labalib.ResultShow.clearInstance();
        }



        /**
         * 产生旋转的数据; 这里直接返回普通的旋转，如果需要更加复杂的选择，则需要重写改函数;
         * param    lastResultData:上次结果
         * param     newResultData:当前结果
         * return                 :返回滚动的信息;
         */
        public generateRotateResultData(lastResultData, newResultData): labalib.IRotateInfo {
            let resultData = this.generateNormalRotateResult(lastResultData, newResultData);
            return resultData;
        }
    }
}