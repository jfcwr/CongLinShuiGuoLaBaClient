class LocalStorage {
    private static _self;
    public static get Instance(): LocalStorage {
        if (LocalStorage._self == null) {
            LocalStorage._self = new LocalStorage();
        }
        return LocalStorage._self;
    }
    /**
    * 显示背景开关
    */
    private $hideSelectr = "hideSelectr";
    public set hideSelct(b: boolean) {
        if (b) {
            egret.localStorage.setItem(this.$hideSelectr, "1");
        } else {
            egret.localStorage.setItem(this.$hideSelectr, "0");
        }
    }
    public get hideSelct() {
        var s: string = egret.localStorage.getItem(this.$hideSelectr);
        return s != null && s == "1";
    }
    private $hideSelectr2 = "hideSelectr2";
    public set hideSelct2(b: boolean) {
        if (b) {
            egret.localStorage.setItem(this.$hideSelectr2, "1");
        } else {
            egret.localStorage.setItem(this.$hideSelectr2, "0");
        }
    }
    public get hideSelct2() {
        var s: string = egret.localStorage.getItem(this.$hideSelectr2);
        return s != null && s == "1";
    }
}