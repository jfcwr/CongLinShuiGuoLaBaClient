module conglinshuiguo {
    export class SHZPokerMediator extends puremvc.Mediator {
        public static NAME: string = "SHZPokerMediator";
        public constructor(viewComponent: any) {
            super(SHZPokerMediator.NAME, viewComponent);
            this.initGame();
            GX.GameLayerManager.addUIToScene(LabaGame.Instance);
            SHZPokerMediator.ShowPanel("LabaGame");
        }
        public static ShowPanel(panelName: string) {
            LabaGame.Instance.visible = (panelName == "LabaGame");
        }

        private uiHandle(evt: egret.Event): void {
        }
        public listNotificationInterests(): Array<any> {
            return [
                game.MahjongFourFacadeConst.NOTIFY_COMMON_CHAT,  // 聊天
            ];
        }
        public handleNotification(notification: puremvc.INotification): void {
            switch (notification.getName()) {
                case game.MahjongFourFacadeConst.NOTIFY_COMMON_CHAT:
                    var data: Cmd.CommonChat_Brd = notification.getBody();
                    this.showChatPop(data);
                    break;
            }
        }

        private showChatPop(rev: Cmd.CommonChat_Brd) {
            if (rev.voiceId) {
            }
            else if (rev.words) {
            }
        }
        /**
         * 显示玩家信息
         */
        private showUserInfo(data) {

        }
        /**
         * ip提示
         */
        private ipWarnPanel(sameSet: string[]) {
        }
        private dissData: Cmd.SuccessDissolveRoom_Brd;

        private initGame(): void {
            if (game.PokerData.isStandAlone) {
                return;
            }
            this.facade.sendNotification(game.MahjongFourFacadeConst.SEND_DATA, null, game.DataRequestCommand.CONNECT_GAME_SERVER);
        }
        public onRemove(): void {
            super.onRemove();
        }

    }
}
