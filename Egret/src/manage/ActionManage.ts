class ActionManage {
    constructor() {
        this.listener();
    }
    public listener() {
        GX.PokerEvent.Instance.leaveRoom.add(this.leaveRoom, this);
        GX.PokerEvent.Instance.systemMessage.add(this.showSystemMessage, this);
    }
    public leaveRoom() {
        ActionManage.exitGame();
    }
    /**
     * 显示系统消息
     */
    private showSystemMessage(data: Cmd.SysMessageCmd_S): void {
        switch (data.msgType) {
            case Cmd.SysMessageCmd_S.MsgType.Text:
                GX.Tips.showTips(data.msg);
                break;
            case Cmd.SysMessageCmd_S.MsgType.DissolveRoom:
                GX.Tips.showPopup(data.msg, () => { ActionManage.exitGame(); })
                break;
            case Cmd.SysMessageCmd_S.MsgType.BackToLobby:
                ActionManage.exitGame();
                break;
        }
    }
    public static exitGame(): void {
        game.GameData.iskPoker = false;
        egret.Tween.removeAllTweens();
        RES.destroyRes(xiyouji.GameConstant.ResGroup_SC, false);
        uniLib.ResUtils.clearResConfigByGroupName([xiyouji.GameConstant.ResGroup_SC]);
        game.PokerFunction.exitGame();
        table.clearTable();
        uniLib.GameModuleUtils.ExitGame(false);
    }
}