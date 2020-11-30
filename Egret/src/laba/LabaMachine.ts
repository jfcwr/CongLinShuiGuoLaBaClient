// TypeScript file
module conglinshuiguo {
    export class LabaMachine extends labalib.LabaMachine {

        constructor(beltParentGroup: eui.Group, lineRoot: eui.Group) {
            super(beltParentGroup, lineRoot, 7, LabaBelt);
            this.mNeedDrawLine = false;     //不绘制默认的线;
            this.mDrawConnectedLineColor = 0xFFBA52
            this.mDrawUnConnectedLineColor = 0xFFBA52

            this.mLineBold = 5

            this.mLineRoot.touchEnabled = false
            // this.mLineRoot.touchChildren = false


            this.darkLineGroup = this.mLineRoot.getChildByName("darkLineGroup") as eui.Group
            this.moveLineGroup = this.mLineRoot.getChildByName("moveLineGroup") as eui.Group
            this.lightLineGroup = this.moveLineGroup.getChildByName("lightLineGroup") as eui.Group

        }
        public testShowLine(index) {
            this.showLine(index, true)
            let lineimg = this.darkLineGroup.getChildByName("lined" + index)
            let pos = lineimg.localToGlobal(0, 0)
            LabaGame.Instance.showOneLineTips(index, pos, 2321)

            LabaGame.Instance.playAllHitElemDefaultEffect(null, index)
        }
        // conglinshuiguo.LabaGame.Instance["mLabaMachine"].testShowLine(0)
        // private mMoveGroup: eui.Group
        private darkLineGroup: eui.Group
        private lightLineGroup: eui.Group
        private moveLineGroup: eui.Group
m

        /**
         * 重新实现发送押注协议，因为这里需要发送多少条线;
         */
        protected sendRotateMsg() {
            let cmd = new Cmd.BetRoomCmd_CS();
            cmd.opType = Cmd.Operation.Wagering;
            cmd.bet = new Cmd.DoorChips();
            cmd.bet.chips = DataCenter.Instance.DizhuIndex + 1;
            // cmd.bet.potId = DataCenter.Instance.LineCount;
            cmd.bet.doorId = 1;
            game.PokerFunction.tcpSend(cmd);
            this.setState(labalib.LabaInnerState.SendBet);
        }




        protected changeBitmapLabelColor(value: number) {
            let bili: number = value / this.jackpotMax;

        }
        public testData2(topdata) {
            topdata.labaStatusInfo.dataList = [{
                "isFalseFree": 0, "awardMultipleReal": 0, "specialSymbolAward": 0, "awardPoint": 0,
                "itemIdList": [[6, 1, 5], [3, 10, 1], [2, 10, 3], [7, 4, 5], [1, 6, 8]],
                "jackpotSpecialSymbolType": 0, "totalValue": 0, "specialSymbolValues": [],
                "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 4
            },
            {
                "isFalseFree": 0, "awardMultipleReal": 554, "wildNum": 2, "specialSymbolAward": 0, "awardPoint": 554000, "jackpotSpecialSymbolType": 0,
                "itemIdList": [[1, 3, 4],
                [3, 3, 3],
                [9, 3, 3],
                [4, 1, 7],
                [3, 1, 3]], "tableIndex": 5, "awardMultiple": 554, "specialSymbolNum": 0, "isPinpan": 5
            }]
        }
        /**
        * jackport奖池变化
        */
        protected onDoorUpdate(rev: Cmd.DoorUpdataCmd_S) {
            // this.jackpotMax = rev.DoorChips[0]["jackpotMax"];
            // labalib.JackPortObject.rollJackPot(rev.DoorChips[0].expect, 0, 0, this.JackportLabel, this.jackpotMax, this.changeBitmapLabelColor, this);
            // // this.mJackportObject.UpdateJackport(rev.DoorChips[0].expect, rev.DoorChips[0].place * 1000);
            // for (let i: number = 0; i < rev.DoorChips.length; i++) {
            //     let doorChips: Cmd.DoorChips = rev.DoorChips[i];
            //     if (doorChips.doorId == 0) {
            //         let jackportGold = Math.floor(doorChips.expect);
            //         LabaDataCenter.Instance.JackportPoolGold = jackportGold;
            //     }
            // }
        }
        public testData1(topdata) {
            topdata.labaStatusInfo = <any>{
                "dataList": [{
                    "isFalseFree": 0,
                    "awardMultipleReal": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 0,
                    "itemIdList": [
                        [4, 2, 4],
                        [3, 7, 10],
                        [2, 10, 3],
                        [1, 6, 10],
                        [4, 1, 4]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "totalValue": 0,
                    "specialSymbolValues": [],
                    "awardMultiple": 0,
                    "specialSymbolNum": 9,
                    "isPinpan": 1
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 130,
                    "wildNum": 1,
                    "specialSymbolAward": 0,
                    "awardPoint": 195000,
                    "itemIdList": [
                        [7, 5, 6],
                        [6, 6, 8],
                        [6, 2, 6],
                        [4, 9, 6],
                        [7, 6, 3]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 1,
                    "wildCountNum": 1,
                    "awardMultiple": 130.5291051971,
                    "specialSymbolNum": 0,
                    "isPinpan": 3
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 122,
                    "wildNum": 1,
                    "specialSymbolAward": 0,
                    "awardPoint": 183000,
                    "itemIdList": [
                        [1, 1, 9],
                        [6, 7, 1],
                        [1, 8, 1],
                        [1, 1, 1],
                        [8, 1, 2]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 1,
                    "wildCountNum": 2,
                    "awardMultiple": 122,
                    "specialSymbolNum": 0,
                    "isPinpan": 3
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 66,
                    "wildNum": 2,
                    "specialSymbolAward": 0,
                    "awardPoint": 99000,
                    "itemIdList": [
                        [2, 9, 4],
                        [5, 1, 1],
                        [1, 1, 8],
                        [7, 9, 1],
                        [6, 6, 4]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 2,
                    "wildCountNum": 4,
                    "awardMultiple": 67.45011457006,
                    "specialSymbolNum": 0,
                    "isPinpan": 6
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 258,
                    "wildNum": 1,
                    "specialSymbolAward": 0,
                    "awardPoint": 387000,
                    "itemIdList": [
                        [3, 3, 9],
                        [3, 3, 3],
                        [8, 3, 4],
                        [8, 8, 5],
                        [2, 1, 6]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 2,
                    "wildCountNum": 5,
                    "awardMultiple": 259,
                    "specialSymbolNum": 0,
                    "isPinpan": 6
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 64,
                    "wildNum": 1,
                    "specialSymbolAward": 0,
                    "awardPoint": 96000,
                    "itemIdList": [
                        [4, 6, 4],
                        [9, 8, 3],
                        [1, 4, 4],
                        [1, 1, 4],
                        [5, 4, 2]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 6,
                    "wildCountNum": 6,
                    "awardMultiple": 64,
                    "specialSymbolNum": 0,
                    "isPinpan": 9
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 140,
                    "wildNum": 3,
                    "specialSymbolAward": 0,
                    "awardPoint": 210000,
                    "itemIdList": [
                        [5, 4, 9],
                        [2, 2, 2],
                        [7, 2, 9],
                        [8, 2, 2],
                        [2, 9, 1]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 7,
                    "wildCountNum": 9,
                    "awardMultiple": 161.29825559361,
                    "specialSymbolNum": 0,
                    "isPinpan": 12
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 130,
                    "wildNum": 3,
                    "specialSymbolAward": 0,
                    "awardPoint": 195000,
                    "itemIdList": [
                        [4, 9, 3],
                        [9, 1, 1],
                        [9, 3, 2],
                        [1, 2, 6],
                        [5, 8, 5]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 204.76266891157,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 204,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 306000,
                    "itemIdList": [
                        [4, 3, 3],
                        [3, 2, 8],
                        [7, 3, 3],
                        [4, 3, 4],
                        [6, 5, 8]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 204,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 74,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 111000,
                    "itemIdList": [
                        [5, 3, 1],
                        [3, 1, 3],
                        [4, 3, 6],
                        [2, 3, 2],
                        [2, 5, 3]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 74,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 54,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 81000,
                    "itemIdList": [
                        [6, 3, 1],
                        [3, 3, 4],
                        [2, 3, 2],
                        [3, 4, 4],
                        [4, 1, 1]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 54.631670809597,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 346,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 519000,
                    "itemIdList": [
                        [4, 3, 6],
                        [3, 2, 4],
                        [7, 3, 1],
                        [3, 2, 3],
                        [1, 3, 3]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 346,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 135,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 202500,
                    "itemIdList": [
                        [3, 3, 2],
                        [3, 3, 3],
                        [1, 3, 2],
                        [2, 4, 8],
                        [2, 6, 6]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 135,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 119,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 178500,
                    "itemIdList": [
                        [2, 3, 7],
                        [3, 3, 8],
                        [3, 3, 2],
                        [1, 2, 1],
                        [3, 5, 3]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 119,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 44,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 66000,
                    "itemIdList": [
                        [6, 3, 3],
                        [3, 1, 1],
                        [1, 3, 1],
                        [1, 3, 3],
                        [3, 3, 5]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 44,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 23,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 34500,
                    "itemIdList": [
                        [1, 3, 2],
                        [3, 2, 3],
                        [1, 3, 1],
                        [2, 3, 8],
                        [3, 2, 3]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 23,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }, {
                    "isFalseFree": 0,
                    "awardMultipleReal": 101,
                    "wildNum": 0,
                    "specialSymbolAward": 0,
                    "awardPoint": 151500,
                    "itemIdList": [
                        [1, 3, 4],
                        [3, 3, 3],
                        [6, 3, 3],
                        [4, 1, 7],
                        [3, 1, 3]
                    ],
                    "jackpotSpecialSymbolType": 0,
                    "tableIndex": 8,
                    "wildCountNum": 12,
                    "awardMultiple": 101,
                    "specialSymbolNum": 0,
                    "isPinpan": 15
                }],
                "awardMultiplePool": 0,
                "isFree": 1
            }
        }
        public testData3(topdata) {
            let sss = Math.randomInteger(0, 2)
            if (sss == 1)
                topdata.labaStatusInfo.dataList = [{
                    "isFalseFree": 0, "awardMultipleReal": 5, "specialSymbolAward": 0, "awardPoint": 6000000,
                    "itemIdList": [[1, 5, 5], [1, 10, 1], [1, 7, 3], [7, 10, 5], [5, 7, 8]], "jackpotSpecialSymbolType": 0, "totalValue": 0, "specialSymbolValues": [],
                    "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 0
                }]
            else if (sss == 2)
                topdata.labaStatusInfo.dataList = [{
                    "isFalseFree": 0, "awardMultipleReal": 5, "specialSymbolAward": 0, "awardPoint": 0,
                    "itemIdList": [[6, 5, 5], [5, 5, 1], [2, 10, 3], [7, 10, 5], [1, 6, 8]], "jackpotSpecialSymbolType": 0, "totalValue": 0, "specialSymbolValues": [],
                    "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 0
                }]
            else if (sss == 0)
                topdata.labaStatusInfo.dataList = [{
                    "isFalseFree": 0, "awardMultipleReal": 5, "specialSymbolAward": 0, "awardPoint": 0,
                    "itemIdList": [[6, 5, 5], [5, 5, 1], [2, 3, 3], [7, 10, 5], [4, 3, 2]], "jackpotSpecialSymbolType": 0, "totalValue": 0, "specialSymbolValues": [],
                    "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 0
                }]

        }
        /**
         * 播放命中元素的默认动画;
         * 因为这里命中后，不是立即播放默认动画，而是由上层自己控制;
         */
        protected playDefaultAnimByLine() {
        }
        public onMsg_GameStateUpdate(data, topData) {

            let mysteriousData = LabaGame.Instance.mysteriousData;
            let itemIdListIcon =null;
            if(topData.labaStatusInfo.dataList.length == 2){
                for(let i = 0;i<5;++i){
                    for(let j = 0;j<3;++j){
                        if(topData.labaStatusInfo.dataList[0].itemIdList[i][j] == 0){
                            mysteriousData[i][j] = topData.labaStatusInfo.dataList[1].itemIdList[i][j];
                        }
                        else{
                            mysteriousData[i][j] = 0;
                        }
                    }
                }
                topData.labaStatusInfo.dataList[0] = topData.labaStatusInfo.dataList[1];
                LabaGame.Instance.mysteryMode()
            }
            else{
                mysteriousData = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
            }
            // if(topData.labaStatusInfo.dataList.length == 2){
            //     for(let item of topData.labaStatusInfo.dataList[0].itemIdList){

            //     }
            //     topData.labaStatusInfo.dataList[0].itemIdList = topData.labaStatusInfo.dataList[1].itemIdList;
            // }
            // topData.labaStatusInfo.dataList.clear()
            // topData.labaStatusInfo.dataList.push({
            //     jackpotSpecialSymbolType: 0, specialSymbolAward: 0, specialSymbolNum: 0, awardMultiple: 1,
            //     isFalseFree: 0, isPinpan: 0, awardPoint: 0, awardMultipleReal: 326,
            // });
            // }]   
            // topData.labaStatusInfo.dataList = [{
            //     "isFalseFree": 0, "awardMultipleReal": 0, "specialSymbolAward": 0, "awardPoint":6000,
            //     "itemIdList": [[6, 1, 5], [6, 8, 1], [6, 1, 3], [7, 10, 5], [1, 6, 8]], "jackpotSpecialSymbolType": 0, "totalValue": 0, 
            //     "specialSymbolValues": [], "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 0
            // }] 
            // this.testData3(topData)   //无奖
            // this.testData1(topData)     //免费
            // this.testData2(topData)     //重转
            // topData.labaStatusInfo.dataList = [{
            //     "isFalseFree": 0, "awardMultipleReal": 0, "specialSymbolAward": 0, "awardPoint": 0,
            //     "itemIdList": [[6, 1, 6], [10, 3, 7], [6, 10, 2], [1, 3, 8], [6, 6, 8]], "jackpotSpecialSymbolType": 0, "totalValue": 0, "specialSymbolValues": [],
            //     "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 4
            // },
            // {
            //     "isFalseFree": 0, "awardMultipleReal": 554, "wildNum": 4, "specialSymbolAward": 0, "awardPoint": 554000, "jackpotSpecialSymbolType": 0,
            //     "itemIdList": [[3, 3, 3], [3, 3, 3], [5, 5, 5], [6, 3, 8], [5, 6, 7]], "tableIndex": 5, "awardMultiple": 554, "specialSymbolNum": 0, "isPinpan": 5
            // }]
            // topData.labaStatusInfo.dataList = [{
            //     "isFalseFree": 0, "awardMultipleReal": 65, "specialSymbolAward": 0, "awardPoint": 20000000,
            //     "itemIdList": [[6, 6, 6], [6,6, 6], [6, 6, 6], [6, 6, 6], [6, 6,6]], "jackpotSpecialSymbolType": 0, "totalValue": 0, "specialSymbolValues": [],
            //     "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 0
            // }]
            // topData.labaStatusInfo.dataList = [{
            //     "isFalseFree": 0, "awardMultipleReal": 0, "specialSymbolAward": 0, "awardPoint": 20000,
            //     "itemIdList": [[3, 1, 3],
            //     [4, 8, 6],
            //     [3, 1, 3],
            //     [3, 1, 3],
            //     [3, 2, 3]], "jackpotSpecialSymbolType": 0, "totalValue": 0, "specialSymbolValues": [],
            //     "awardMultiple": 5, "specialSymbolNum": 9, "isPinpan": 0
            // }]
            // topData.labaStatusInfo.dataList[0].awardPoint = 5000 / 5 * 326
            // topData.labaStatusInfo.dataList[0].awardMultipleReal = 326
            // topData.labaStatusInfo.dataList[0].itemIdList = [[9,7,4],[9,0,4],[5,9,0],[9,0,7],[2,6,3]]
            // topData.labaStatusInfo.dataList[0].itemIdList = [[7, 6, 8], [7, 6, 8], [7,6, 8], [10, 6, 7], [7, 7, 6]]
            // topData.labaStatusInfo.dataList.push({ awardMultipleReal: 5 })

            // //测试数据，777
            // let dddArrr = new Array<Cmd.LabaStatusInfo.Data>();
            // let dddddd = new Cmd.LabaStatusInfo.Data();
            // dddddd.awardPoint = 98577;
            // dddddd.awardMultipleReal = 200;
            // dddddd.jackpotSpecialSymbolType = 3;
            // dddddd.specialSymbolAward = 0;
            // dddddd.specialSymbolNum = 0;
            // dddddd.isFalseFree = 0;
            // dddddd.isPinpan = 1;
            // dddArrr.push(dddddd);
            // topData.labaStatusInfo.dataList = dddArrr;

            super.onMsg_GameStateUpdate(data, topData)
            DataCenter.Instance.IsGetServerMsg = true;


            game.Timer.clearTimeout(this.RealStartTimer)
            // this.RealStartTimer = game.Timer.setTimeout(() => { this.doEnterRotate(true) }, null, 400 )
            if (!DataCenter.Instance.IsQuickRotate)
                this.RealStartTimer = game.Timer.setTimeout(() => { this.doEnterRotate(true) }, null, 900 * DataCenter.Instance.ScrollTimeScale)
            else
                this.doEnterRotate(true)

        }
        public RealStartTimer: number
        public LabaMachineStop() {
            for (let st of DataCenter.Instance.BeltStatus) {
                if (!st)
                    return
            }
            this.setState(labalib.LabaInnerState.ShowResult);
        }







        //=================

        public initResultData() {
            // var resultData = labalib.DataCenter.Instance.getNoAwardArray();
            var resultData =
                [[9, 3, 3, 4, 3],
                [4, 6, 4, 2, 7],
                [5, 9, 1, 3, 6]];
            this.setDefaultResultData(resultData);
        };

        public onFastSettleButton() {
            DataCenter.Instance.fastSettle = true;
            // LabaGame.Instance.fastSettleButton.visible = false;
            LabaGame.Instance.refreshRotateButtonStatus();
            for (let item of this.mBeltArray) {
                item["StopEx"]();
                item.ClearAllDefaultAnimation();
            }
            // SoundHand.Instance.stopRotateBeltSound();
        }


        public onMsg_onRoomDataUpdate(data) {
            DataCenter.Instance.fastSettle = false;
            super.onMsg_onRoomDataUpdate(data);
            // LabaGame.Instance.resetCheckOperation();
        }



        /**
         * 进入旋转阶段
         */
        protected onEnterRotating() {
            DataCenter.Instance.fastSettle = false;
            // LabaGame.Instance.fastSettleButton.visible = true;
            LabaGame.Instance.refreshRotateButtonStatus();
            LabaGame.Instance.freeRotateButton.visible = false;
            labalib.EventManager.Instance.dispatchEvent(labalib.LabaBaseEvent.LabaMachineEnterRotating);

        }
        /**
    * 开始旋转， 点击旋转按钮需要调用该方法;
    */
        public startRotate() {
            if (this.isState(labalib.LabaInnerState.Rotating) || this.isState(labalib.LabaInnerState.SendBet)) {
                if (this.isState(labalib.LabaInnerState.SendBet) && (DataCenter.Instance.ServerRealGold < DataCenter.Instance.CurDizhu)) {
                    GX.Tips.showPopup("金币不足")
                    labalib.EventManager.ResetButtonStatusEvent.call();
                }
                return;
            }
            let serverResult = DataCenter.Instance.getServerBetResult();
            if (serverResult.hasResult == true) {
                this.startGameByResult(serverResult);
                game.Timer.clearTimeout(this.RealStartTimer)
                this.RealStartTimer = game.Timer.setTimeout(() => { this.doEnterRotate(true) }, null, 400)
            } else {
                if (this.isState(labalib.LabaInnerState.SendBet) == false) {
                    // if (DataCenter.Instance.MainUserGold >= DataCenter.Instance.CurDizhu) {
                    this.setState(labalib.LabaInnerState.SendBet);
                    this.sendRotateMsg();

                }
            }
        }


        /**
     * 根据服务器的结果开始游戏转动 
     */
        protected startGameByResult(serverResult: labalib.IServerBetResult) {
            DataCenter.Instance.CurServerResultDatas = serverResult
            super.startGameByResult(serverResult)
        }
        public doEnterRotate(isGetServerResponse: boolean = false) {
            if(LabaGame.Instance.stickMovBg.length>=1){
                let winElemID = [1,2,3,4,5,6,7];
                winElemID.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});
                for(let i = 0;i<5;++i){
                    for(let j = 0;j<3;++j){
                        if(LabaGame.Instance.freeIconBg[i][j] == 1){
                            let icon = LabaGame.Instance.mAwardScrollIcon[2-j][i]
                            LabaGame.Instance.winElemAnimGroup.addChild(icon)
                            if(j == 1&&i ==2){
                                icon.PlayfreeSlide(winElemID,true)
                            }
                            else{
                                icon.PlayfreeSlide(winElemID)
                            }
                        }
                    }
                }
            }
            if (!isGetServerResponse) {

                for (let i: number = 0; i < DataCenter.Instance.BeltCount; i++) {
                    DataCenter.Instance.SetBeltStatus(false, i)
                    let beltext = this.mBeltArray[i] as LabaBelt
                    beltext.StartEx_Normal();
                    beltext.isHighRotate = null
                }
                labalib.EventManager.Instance.dispatchEvent(labalib.LabaBaseEvent.LabaMachineEnterRotating);
            }
            else {
                let itemIdList_ = DataCenter.Instance.CurServerResultDatas.itemIdList;
                let jiaSuIndex = 0;
                let jiaSuNumber = 0;
                if(itemIdList_){
                    for(let i =0;i<5;++i){
                        for(let j =0;j<3;++j){
                            if(itemIdList_[i][j] == 8){
                                jiaSuIndex++;
                                break;
                            }
                        }
                        if(jiaSuIndex == 2){
                            jiaSuNumber = i;
                            break;
                        }
                    }
                }
                SoundHand.Instance.playSlowStopSound();
                // return
                let timeScale = DataCenter.Instance.ScrollTimeScale
                let count = [10, 12, 14, 17, 19]
                if (DataCenter.Instance.IsQuickRotate&&!LabaGame.Instance.isFreeGame)
                    count = [20, 24, 28, 34, 40]
                for (let i: number = 0; i < DataCenter.Instance.BeltCount; i++) {
                    let beltext = this.mBeltArray[i] as LabaBelt
                    // beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 4, waitTime: i * 100, speed: 250*20 });

                    if (DataCenter.Instance.IsTriggerCurFreeGame() || DataCenter.Instance.IsTriggerRerotateGame()) {
                        if(DataCenter.Instance.IsQuickRotate){
                            beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 3, back: false, waitTime: i * 100, speed: 200 * timeScale });
                        }
                        else{
                            if ((i == 3&&jiaSuNumber==2)||(i == 2&&jiaSuNumber==1)||(i == 4&&jiaSuNumber==3)) {
                                beltext.isHighRotate = i;
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: count[i], waitTime: i * 100, speed: 200 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 20, waitTime: i * 100, speed: 200 * 2 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 0, back: false, waitTime: i * 100, speed: 500 * 7 * timeScale });

                                // beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 4*5, waitTime: i * 100, speed: 250*20 });
                            }
                            else if((i == 3&&jiaSuNumber==1)||(i == 4&&jiaSuNumber==2)){
                                beltext.isHighRotate = i;
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: count[i], waitTime: i * 100, speed: 200 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: count[i], waitTime: i * 100, speed: 200 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 20, waitTime: i * 100, speed: 200 * 2 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 20, waitTime: i * 100, speed: 200 * 2 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 0, back: false, waitTime: i * 100, speed: 500 * 7 * timeScale });

                                // beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 4*5, waitTime: i * 100, speed: 250*20 });

                            }
                            else if(i == 4&&jiaSuNumber==1){
                                beltext.isHighRotate = i;
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: count[i], waitTime: i * 100, speed: 200 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: count[i], waitTime: i * 100, speed: 200 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: count[i], waitTime: i * 100, speed: 200 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 20, waitTime: i * 100, speed: 200 * 2 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 20, waitTime: i * 100, speed: 200 * 2 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 20, waitTime: i * 100, speed: 200 * 2 * timeScale });
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 0, back: false, waitTime: i * 100, speed: 500 * 7 * timeScale });

                                // beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 4*5, waitTime: i * 100, speed: 250*20 });

                            }
                            else{
                                beltext.isHighRotate = i;
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: count[i], back: false, waitTime: i * 100, speed: 200 * timeScale });
                            }
                        }
                    }
                    else{
                        if(DataCenter.Instance.IsMysticalGame()){
                            beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 60+i*2, back: false, waitTime: i * 100, speed: 200 * timeScale });
                        }
                        else{
                            if (DataCenter.Instance.IsQuickRotate&&!LabaGame.Instance.isFreeGame) {
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 3, back: false, waitTime: i * 100, speed: 200 * timeScale });

                            } else{
                                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 10 + i * 2, back: false, waitTime: i * 100, speed: 200 * timeScale });
                            }
                        }
                    }
                    console.log("testddddsw scrolldata111111 real start")
                    beltext.ReadyScrollData()
                    beltext.RealStart = true
                }
            }
            
            
        }






        /**
        * 绘制所有线
        */
        public drawAllLines() {
            let resultData = DataCenter.Instance.getResultDatas();
            // resultData = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
            let result = SgmlHelper.Instance.getResultAllLinesAndMultipy(resultData);
            // let 
            let totalPoint = DataCenter.Instance.CurServerResultDatas.resultData.awardPoint
            let totalMuti = DataCenter.Instance.CurServerResultDatas.resultData.awardMultipleReal
            let lines = result.LineInfos;
            LabaGame.Instance.hideAllLineTips()
            for (let line of lines) {
                for (let i = 0; i < 20; i++) {
                    if (i == line.LineType) {
                        this.showLine(i, true)
                        let lineimg = this.darkLineGroup.getChildByName("lined" + i)
                        let pos = lineimg.localToGlobal(0, 0)
                        LabaGame.Instance.showOneLineTips(i, pos, 0)
                    }
                }
            }
            this.lightLineGroup.visible = true
            // return
            // this.mask1.width = 80
            this.moveLineGroup.width = 80
            let drawLineTween = egret.Tween.get(this.mLineRoot, { loop: true }).wait(1000)
            for (let line of lines) {
                drawLineTween.call(() => {
                    LabaGame.Instance.playAllHitElemDefaultEffect(null, line.LineType)
                    LabaGame.Instance.hideAllLineTips()
                    LabaGame.Instance.stopPlayFiveKindAnim()
                    for (let i = 0; i < 20; i++) {
                        this.showLine(i, i == line.LineType)
                        if (i == line.LineType) {
                            let lineimg = this.darkLineGroup.getChildByName("lined" + i)
                            let pos = lineimg.localToGlobal(0, 0)
                            console.log("ccccccc",line.Multiply)
                            LabaGame.Instance.showOneLineTips(i, pos, totalPoint / totalMuti * line.Multiply)
                            if (line.ConnectCount == 5)
                                LabaGame.Instance.playFiveKindAnim()
                        }
                    }
                }).wait(2500)
            }
            // return
            let onchange = () => {
                // this.flashLineGroup.x =80- (this.mMoveGroup.x + 80)
                this.lightLineGroup.x = -this.moveLineGroup.x
            }
            this.lightLineGroup.x = 80
            this.moveLineGroup.x = -80

            egret.Tween.get(this.moveLineGroup, { loop: true, onChange: onchange }).set({ x: -80 }).to({ x: 660 }, 1000)
            // egret.Tween.get(this.mask1, { loop: true }).set({ x: -80 }).to({ x: 688 }, 1000)
        }


        public clearAllLines() {
            egret.Tween.removeTweens(this.mLineRoot)
            egret.Tween.removeTweens(this.moveLineGroup)
            this.clearResultLines()
            this.lightLineGroup.visible = false
            LabaGame.Instance.hideAllLineTips()
        }

        public showLine(linetype, visible) {
            if (visible)
                uniLib.SoundMgr.instance.playSound("xian_mp3", 1);
            this.darkLineGroup.getChildByName("lined" + linetype).visible = visible
            this.lightLineGroup.getChildByName("line" + linetype).visible = visible
            this.darkLineGroup.getChildByName("lined" + linetype).touchEnabled = false;
            this.lightLineGroup.getChildByName("line" + linetype).touchEnabled = false;
            // this.lightLineGroup.getChildByName("line" + linetype).blendMode = "add"
        }
        /**
        * 清除结果线条;
        */
        public clearResultLines() {

            for (let i = 0; i < 20; i++) {
                this.showLine(i, false)
            }
            // this.flashLineGroup.visible = false
        }


        public doFastStop() {
            // for (let i = 0; i < this.mBeltArray.length; i++) {
            //     let belt = this.mBeltArray[i] as LabaBelt
            //     belt.fastStop()
            // }

            let timeScale = DataCenter.Instance.ScrollTimeScale
            for (let i: number = 0; i < DataCenter.Instance.BeltCount; i++) {
                let beltext = this.mBeltArray[i] as LabaBelt
                beltext.AddScrollData({ beltScrollType: ScrollType.DownScroll, resultType: CLSG_ResultType.NORMAL, realScrollItem: 0, back: false, waitTime: i * 100, speed: 200 * timeScale });
                beltext.ReadyScrollData()
                beltext.RealStart = true
            }
        }

    }

}