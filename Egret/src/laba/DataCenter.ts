// TypeScript file
module conglinshuiguo {
    export class DataCenter extends labalib.LabaDataCenter {
        private mLabaItemMultiplyCfg: table.ItemMultiplyList[];
        private mLabaLineInfoCfg: table.LabaLineList[];
        private mTableGameRuleConfig: table.TableGameRuleConfigList[];
        private mTableItemConfig: table.TableItemConfig[];
        private mLabaMaliResultPoolCfg: table.MaliResultPool[];          //拼盘池
        // private mLabaSpecialSymbolConfig: table.TableSpecialSymbolConfig[]; //特殊符号配置;
        private mLabaEffectResultPoolCfg: table.LabaEffectMultiplyList[];//拉霸特效池;
        // private mMaryOutputIconList: table.MaryOutputIconList[];//小玛丽的外围图标配置;
        private mTableMaliMultiplyList: table.TableMaliMultiplyList[]; //小玛丽的物品赔率;
        private mMaxLineCount: number = -1;                       //最大线的个数;
        private mDizhuIndex: number = 0;                         //默认选择的底注索引;
        private mMaxDizhuIndex: number = -1;
        private mBibeiMoney: number = 0;                         //比倍的分数;
        private mMariIdElemMaps: { [key: number]: number } = {};          //小玛丽ID和物品对照表;
        private mapAroundToBeltMap: { [key: number]: number } = {};
        public mBeltToArroundMap: { [key: number]: number } = {};
        private randomItemsMoBan: Array<number>;
        private mLabaLineResultPools: { [key: string]: Array<{ score, index }> } = {};//每一条线的赔率配置;{[s1]:[[赔率,ID],[赔率,ID]...]}


        public mScrollTimeScale: number = 1;
        constructor(beltCount: number) {
            super(beltCount);
            this.loadConfig();
            this.mScrollSpeed = LabaConfig.BeltScrollSpeed;
            this.ScrollorChanged = new GX.MulticastEvent();
            this.ScrollorChanged = new GX.MulticastEvent();

            this.mScrollTimeScale = LabaConfig.ScrollTimeScale;
        }

        public static get Instance() {
            return labalib.LabaDataCenter.Instance as DataCenter;
        }

        public static clearInstance() {
            labalib.LabaDataCenter.clearInstance();
        }

        //读取表配置;
        public loadConfig() {
            this.mLabaItemMultiplyCfg = table.ItemMultiplyList.instance();
            this.mLabaLineInfoCfg = table.LabaLineList.instance();
            this.mTableGameRuleConfig = table.TableGameRuleConfigList.instance();
            this.mTableItemConfig = table.TableItemConfig.instance();
            this.mLabaEffectResultPoolCfg = table.LabaEffectMultiplyList.instance();
            // this.mMaryOutputIconList = table.MaryOutputIconList.instance();
            this.mLabaMaliResultPoolCfg = table.MaliResultPool.instance();
            this.mTableMaliMultiplyList = table.TableMaliMultiplyList.instance();
        }




        public updateCurDizhu() {
            let dizhuList: Array<number> = this.getDizhuList();
            // this.mCurDizhu = this.mLineCount * dizhuList[this.mDizhuIndex];
            this.mCurDizhu = dizhuList[this.mDizhuIndex];
            LabaGame.Instance.betNumLabel.text = "" + this.mCurDizhu
        }

        /**当前每一条线的底注 */
        public get CurLineDizhu() {
            let dizhuList: Array<number> = this.getDizhuList();
            return dizhuList[this.mDizhuIndex] / 20;
        }
        public get CurDizhu() {
            return this.getDizhuList()[this.mDizhuIndex]
        }
        /**
         * 设置当前的底注索引;
         */
        public set DizhuIndex(dizhuIndex: number) {
            if (dizhuIndex < 0 || dizhuIndex > this.MaxDizhuIndex) {
                return;
            }
            this.mDizhuIndex = dizhuIndex;
            this.updateCurDizhu();
        }

        /**
         * 获取当前的底注索引;
         */
        public get DizhuIndex(): number {
            return this.mDizhuIndex;
        }


        public mainGoldNumber:number = null;
        /**
         * 获取当前金币;
         */
        public mainGold(): number {
            return this.mainGoldNumber;
        }



        /**
         * 最大的底注索引;
         */
        public get MaxDizhuIndex() {
            if (this.mMaxDizhuIndex == -1) {
                let dizhuList = this.getDizhuList();
                this.mMaxDizhuIndex = dizhuList.length - 1;
            }
            return this.mMaxDizhuIndex;
        }

        /**
         * 获取线的条数;
         */
        public get MaxLineCount() {
            if (this.mMaxLineCount == -1) {
                this.mMaxLineCount = this.mLabaLineInfoCfg.length;
            }
            return this.mMaxLineCount;
        }

        /**
         * 获取每个元素对应的贴图路径;
         */
        public getElementSource(elementType: number): string {
            return LabaConfig.ElementIcons[elementType];
        }
        /**
         * 获取每个元素对应的wild贴图路径;
         */
        public getElementWildSource(elementType: number): string {
            return LabaConfig.ElementIcons[elementType] + "0";
        }
        /**
         * 获取每个元素对应的模糊贴图路径;
         */
        public getElementBlurSource(elementType: number): string {
            elementType = elementType == 11 ? 10 : elementType
            return LabaConfig.ElementIcons[elementType] + "_b";
        }

        /**
         * 添加所用到的基础的元素表 
         */
        public addBasicElems() {
            this.addBasicElem(CLSG_ElemAllType.J);
            this.addBasicElem(CLSG_ElemAllType.Q);
            this.addBasicElem(CLSG_ElemAllType.K);
            this.addBasicElem(CLSG_ElemAllType.A);
            this.addBasicElem(CLSG_ElemAllType.ShaSeng);
            this.addBasicElem(CLSG_ElemAllType.ZhuBaJie);
            this.addBasicElem(CLSG_ElemAllType.SunWuKong);
            this.addBasicElem(CLSG_ElemAllType.TangSeng);
            this.addBasicElem(CLSG_ElemAllType.Wild);
            this.addBasicElem(CLSG_ElemAllType.DuoBao);
        }

        /**
         * 获取元素的动画名称,返回的是一个animInfo{Path, KeyRate, Scale};
         */
        public getElementAnimInfo(elementType: number): labalib.IAnimInfo {
            return LabaConfig.ElementAnimations[elementType];
        }
        /**
               * 获取元素的动画名称,返回的是一个animInfo{Path, KeyRate, Scale};
               */
        public getSpecialElementAnimInfo(elementType: number): labalib.IAnimInfo {
            return LabaConfig.ElementSpecialAnimations[elementType];
        }
        /**
         * 获取基本元素的公共动画信息;(比如金玉满堂每个元素的转圈),如果有的话，则在播放默认动画时，将播放该动画，如果没有，则不进行播放
         */
        public getElemCommonAnimInfo(): labalib.IAnimInfo {
            return LabaConfig.RotateElemEffect;
        }

        /**
         * 获取所有线的信息;
         */
        public getLineInfos(): Array<Array<number>> {
            let lineInfos = [];
            let lineInfosCfg = this.mLabaLineInfoCfg;
            for (let i: number = 0; i < lineInfosCfg.length; i++) {
                let lineInfo = [];
                lineInfo.push(lineInfosCfg[i].col1RowNo);
                lineInfo.push(lineInfosCfg[i].col2RowNo);
                lineInfo.push(lineInfosCfg[i].col3RowNo);
                lineInfo.push(lineInfosCfg[i].col4RowNo);
                lineInfo.push(lineInfosCfg[i].col5RowNo);
                lineInfos.push(lineInfo);
            }
            return lineInfos;
        }

        /**
         * 获取所有元素的赔率;
         * 返回一个数组,数组元素是一个Object,{itemId,connCount,multiply};
         */
        public getAllItemMultiply(): Array<labalib.IItemMultiply> {
            let itemMultiplyLists = this.mLabaItemMultiplyCfg;
            itemMultiplyLists = itemMultiplyLists.sort((v1, v2) => {
                return v1.multiply - v2.multiply;
            });
            egret.log("DataCenter, getAllItemMultiply:" + JSON.stringify(itemMultiplyLists));
            return itemMultiplyLists;
        }



        // public ItemMultiply(elemID,connect){

        // }

        /**
         * 拉霸获奖系数(线数)
         */
        public getAwardRatio(): number {
            return this.mTableGameRuleConfig[0].awardRatio;
        }

        /**
         * 获取每列滚动的时间;
         */
        public getBeltScrollTms(): Array<number> {
            return LabaConfig.BeltScrollTime;
        }

        //获取玩家配置表;
        public getPlayTypeListCfg() {
            for (let i: number = 0; i < this.mTableGameRuleConfig.length; i++) {
                if (this.mTableGameRuleConfig[i].level == this.mRoomLevel) {
                    return this.mTableGameRuleConfig[i];
                }
            }
            return null;
        }
        public isFirstFreeGame() {
            if (this.mServerResultDatas.length > 1) {
                return this.mLeftFreeCount == this.mServerResultDatas.length - 2;
            }
            else {
                return false;
            }
        }
        public IsFreeGame() {
            return this.mServerResultDatas.length > 1 && (this.mServerResultDatas[0].isPinpan == CLSG_ResultType.FREETRI
                || this.mServerResultDatas[0].isPinpan == CLSG_ResultType.FREEIN);
        };
        /**
         * 神秘模式触发
         */
        public IsMysticalGame() {
            return DataCenter.Instance.CurServerResultDatas.resultData.isPinpan == CLSG_ResultType.MYSTICAL;
        }
        public IsRerotateGame() {
            return DataCenter.Instance.CurServerResultDatas.resultData.isPinpan == CLSG_ResultType.REROTATEIN;
        }
        public IsTriggerRerotateGame() {
            return DataCenter.Instance.CurServerResultDatas.resultData.isPinpan == CLSG_ResultType.REROTATETRI;
        }
        public IsTriggerCurFreeGame() {
            return DataCenter.Instance.CurServerResultDatas.resultData.isPinpan == CLSG_ResultType.FREETRI;
        }
        /**
       * 是否触发的免费游戏;
       */
        public IsTriggerFreeGame() {
            if (this.mServerResultDatas.length > 1 && (this.mServerResultDatas[0].isPinpan == CLSG_ResultType.FREETRI
                || this.mServerResultDatas[0].isPinpan == CLSG_ResultType.FREEIN)) {
                return this.mLeftFreeCount == this.mServerResultDatas.length - 1;
            }
            else {
                return false;
            }
        };

        public ChangeElemType() {
            let result = DataCenter.Instance.CurServerResultDatas.resultData
            let elemtype = [CLSG_ElemAllType.TangSeng, CLSG_ElemAllType.SunWuKong, CLSG_ElemAllType.ZhuBaJie, CLSG_ElemAllType.ShaSeng]
            return elemtype[result.wildNum - 1]
        }

        private mChangeIconWinPos = []
        public get ChangeIconWin() {
            return this.mChangeIconWinPos
        }
        public set ChangeIconWin(poss) {
            this.mChangeIconWinPos = poss
        }
        //获取拉霸的获奖系数;
        public getLabaAwardRatio() {
            return this.getPlayTypeListCfg().awardRatio;
        }

        public getLeftFgCount() {
            return this.mLeftFreeCount;
        }

        public getLabaHighScoreList() {
            return this.getBaseRuleCfg().highScoreList;
            // return [72, 108, 144, 180, 288];
        }
        public isBigwin(normalObtainGold: number) {

            let curDizhu = labalib.LabaDataCenter.Instance.CurDizhu;
            let perGold = curDizhu / 20;
            let obtainNormalMultiply = Math.floor(normalObtainGold / perGold);



            let highScoreList = this.getLabaHighScoreList();
            let showWinTypeCount: number = 0;
            //从后往前计算，
            // for (let i: number = 2; i < highScoreList.length; i++) {
            //     if (obtainNormalMultiply >= highScoreList[highScoreList.length - i - 1]) {
            //         showWinTypeCount = highScoreList.length - i;
            //         break;
            //     }
            // }
            if(obtainNormalMultiply>highScoreList[1]){
                showWinTypeCount = 1;
            }

            if (showWinTypeCount == 0)
                return false
            else
                return true
        }

        public getRotateList() {
            return this.getBaseRuleCfg().autoRotateList;
        }






        /**
         * 获取无奖的结果
         * param        specialNumber:特殊符号个数
         * return                    :返回结果;
         */
        public getNoAwardArray(param?: labalib.IServerRaceResult): Array<Array<number>> {
            let itemIdList = param ? param["itemIdList"] : null;
            DataCenter.Instance.WildCount = 0
            if (param && param["wildCountNum"]) {
                DataCenter.Instance.WildCount = param["wildCountNum"]
            }
            let resultdata = [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7]]
            let resultdata_ = [1,2,3,4,5,6,7]
            for(let i = 0;i<5;++i){
                for(let j = 0;j<3;++j){
                    if(i == 0){
                        resultdata[j][i] = MathUtil.random(1,7);
                        for(let item of resultdata_){
                            if(resultdata[j][i] == item){
                                resultdata_.remove(item);
                            }
                        }
                    }
                }
            }
            for(let i = 1;i<5;++i){
                for(let j = 0;j<3;++j){
                    if(i == 1){
                        resultdata[j][i] = resultdata_[MathUtil.random(0,resultdata_.length-1)];
                    }
                    else if(i != 0){
                        resultdata[j][i] = MathUtil.random(1,7);
                    }
                }
            }
            let random_ = MathUtil.random(0,100);
            if(random_>90){
                resultdata[MathUtil.random(0,2)][MathUtil.random(2,4)] = 8;
            }
            if(random_>80){
                resultdata[MathUtil.random(0,2)][MathUtil.random(2,4)] = 9;
            }
            if(random_>98){
                resultdata[MathUtil.random(0,2)][MathUtil.random(2,4)] = 9;
            }
            if (itemIdList && param) {
                resultdata = labalib.Utils.getLineArrayByItemIdList(itemIdList);
            }
            return [resultdata[0], resultdata[1], resultdata[2]]
        }






        /**
         * 根据赔率获取有奖结果
         * param             multiply:要查找的赔率
         * param        specialNumber:特殊符号个数
         * return                    :返回结果;
         */
        public getResultByPool(multiply: number, param?: labalib.IServerRaceResult): Array<Array<number>> {
            let itemIdList = param ? param["itemIdList"] : null;
            let ret = null;
            if (itemIdList) {
                ret = labalib.Utils.getLineArrayByItemIdList(itemIdList);
            }
            egret.log("getResultByPool, multiply:" + multiply + " param:" + JSON.stringify(param));

            let resultType: number = 0;
            if (param && param.isPinpan) {
                resultType = param.isPinpan;
            }
            let specialNumber: number = 0;
            if (param && param.specialSymbolNum) {
                specialNumber = param.specialSymbolNum;
            }
            DataCenter.Instance.WildCount = 0
            if (param && param["wildCountNum"]) {
                DataCenter.Instance.WildCount = param["wildCountNum"]
            }
            let result = [ret[0], ret[1], ret[2]]
            return result;
        }

        //将字符串结果转换成数组;
        protected convertResultByStr(resultStr: string) {
            resultStr = resultStr.trim();
            let results: Array<string> = resultStr.split(' ');
            return [[Number(results[0]), Number(results[1]), Number(results[2]), Number(results[3]), Number(results[4])],
            [Number(results[5]), Number(results[6]), Number(results[7]), Number(results[8]), Number(results[9])],
            [Number(results[10]), Number(results[11]), Number(results[12]), Number(results[13]), Number(results[14])]];
        }

        public isScatter(elem) {
            if (elem == CLSG_ElemAllType.DuoBao) {
                return true;
            }
            return false;
        }

        /**
         * 将resultData中0的元素填写其他元素，填写后的赔率和填写前的赔率必须一样.
         */
        public fillOtherData(resultData, specialNum?: number) {
            if (specialNum == null) {
                specialNum = 0;
            }
            let genRandomItemFunc = () => this.GenerateRandomElement(false, false);
            let generateRandomArray = (dstData) => {
                let fillValues = [];
                let fillTotalCount: number = 0;
                for (let i: number = 0; i < dstData.length; i++) {
                    for (let j: number = 0; j < dstData[i].length; j++) {
                        if (dstData[i][j] == 0) {
                            fillTotalCount = fillTotalCount + 1;
                        }
                    }
                }
                for (let j: number = fillValues.length; j < fillTotalCount; j++) {
                    fillValues.push(genRandomItemFunc());
                }
                let getRandomValue = (): number => {
                    let randomIndex = Math.randomInteger(0, fillValues.length - 1);
                    let result = fillValues[randomIndex];
                    fillValues.splice(randomIndex, 1);
                    return result;
                }

                let result = [];
                for (let i: number = 0; i < dstData.length; i++) {
                    result.push([]);
                    for (let j: number = 0; j < dstData[i].length; j++) {
                        if (dstData[i][j] == 0) {
                            result[i][j] = getRandomValue();
                        } else {
                            result[i][j] = dstData[i][j];
                        }
                    }
                }
                return result;
            };
            let oldMultiply = labalib.LabaHelper.Instance.getResultAllLinesAndMultipy(resultData).Multiply;
            let loopCount = 0;
            while (true) {
                let newResultData = generateRandomArray(resultData);
                if (labalib.LabaHelper.Instance.getResultAllLinesAndMultipy(newResultData).Multiply == oldMultiply) {
                    return newResultData;
                }
                if (loopCount > 100) {
                    return newResultData;
                }
                loopCount = loopCount + 1;
            }
        }




        /**
         * 当前局获得的Jackport值;
         */
        public get Jackport(): number {
            return 0;
        }


        public getFreeBonusCount(): number {
            return this.mShowLeftFreeCount;
        }





        public mBeltStatus = [false, false, false, false, false]
        public SetBeltStatus(st: boolean, index: number) {
            this.mBeltStatus[index] = st
            LabaGame.Instance.getLabaMachine().LabaMachineStop()
        }
        public get BeltStatus() {
            return this.mBeltStatus
        }
        public ScrollorChanged: GX.MulticastEvent;
        private mWildCount: number = 0;
        public get WildCount(): number {
            return this.mWildCount;
        }
        public set WildCount(count: number) {
            this.mWildCount = count > 12 ? 12 : count;
        }
        private mCurServerResultDatas: any
        public get CurServerResultDatas() {
            return this.mCurServerResultDatas
        }
        public set CurServerResultDatas(serverResult) {
            this.mCurServerResultDatas = serverResult
        }


        /**
         * 释放元素贴图;
         */
        public releaseElemTextures() {
            for (let item in this["mElemTextures"])
                for (let i: number = 0; i < this.basicElemsArray.length; i++) {
                    let elem = this.basicElemsArray[i];
                    if (elem >= CLSG_ElemAllType.ShaSeng && this["mElemTextures"][elem * 10]) {
                        this["mElemTextures"][elem * 10].dispose();
                    }
                    this["mElemTextures"][elem].dispose();
                    if (this["mElemBlurTextures"][elem]) {
                        this["mElemBlurTextures"][elem].dispose();
                    }
                }
            this["mElemTextures"] = {};
            this["mElemBlurTextures"] = {};
            //如果有背景贴图，则释放背景贴图;
            if (this["mElemBgTexture"] != null) {
                this["mElemBgTexture"].dispose();
                this["mElemBgTexture"] = null;
            }
        }

        /**
        * 创建元素贴图
        */
        protected createElemTextures() {
            for (let i: number = 0; i < this.basicElemsArray.length; i++) {
                let elem = this.basicElemsArray[i];
                let elemSourcePath = this.getElementSource(elem);
                let tex: egret.Texture = RES.getRes(elemSourcePath) as egret.Texture;
                this["mElemTextures"][elem] = tex;
                if (elem >= CLSG_ElemAllType.ShaSeng) {
                    let elemSpecialSourcePath = this.getElementWildSource(elem);
                    let texSpecil: egret.Texture = RES.getRes(elemSpecialSourcePath) as egret.Texture;
                    this["mElemTextures"][elem * 10] = texSpecil;
                }
                let elemBlurSourcePath = this.getElementBlurSource(elem);
                if (elemBlurSourcePath != null) {
                    this["mElemBlurTextures"][elem] = RES.getRes(elemBlurSourcePath) as egret.Texture;
                }
            }

            //如果有背景图片，则加载背景贴图;
            let bgTexturePath: string = this.getElementBgSource();
            if (bgTexturePath != null) {
                this["mElemBgTexture"] = RES.getRes(bgTexturePath) as egret.Texture;
            }
        }

        private mIsQuickRotate: boolean = false;
        public get IsQuickRotate() {
            return this.mIsQuickRotate;
        }
        public set IsQuickRotate(is: boolean) {
            this.mIsQuickRotate = is
        }

        private mIsGetServerMsg: boolean = false;
        public get IsGetServerMsg() {
            return this.mIsGetServerMsg;
        }
        public set IsGetServerMsg(is: boolean) {
            this.mIsGetServerMsg = is
        }
    }
}