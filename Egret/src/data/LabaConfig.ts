// TypeScript file
module xiyouji {
    //拉霸的常用配置;
    export class LabaConfig {
        //元素编号，元素图片对照表;
        public static ElementIcons: { [key: number]: string } = {
            1: "elem1",
            2: "elem2",
            3: "elem3",
            4: "elem4",
            5: "elem5",
            6: "elem6",
            7: "elem7",
            8: "elem8",
            9: "elem9",
            10: "elem10",
        };

        public static ElementBlurIcons: { [key: number]: string } = {
            1: "elem1",
            2: "elem2",
            3: "elem3",
            4: "elem4",
            5: "elem5",
            6: "elem6",
            7: "elem7",
            8: "elem8",
            9: "elem9",
            10: "elem10",
        }

        //元素编号，元素动画对照表;
        public static ElementAnimations: { [key: number]: labalib.IAnimInfo } = {
            1: { Path: "bfsg_elem1", Action: "bfsg_elem1", KeyRate: 12, Scale: 1 },
            2: { Path: "bfsg_elem2", Action: "bfsg_elem2", KeyRate: 12, Scale: 1 },
            3: { Path: "bfsg_elem3", Action: "bfsg_elem3", KeyRate: 12, Scale: 1 },
            4: { Path: "bfsg_elem4", Action: "bfsg_elem4", KeyRate: 12, Scale: 1 },
            5: { Path: "h_sandy", Action: "bfsg_elem5", KeyRate: 12, Scale: 4.1 },
            6: { Path: "h_pig", Action: "bfsg_elem6", KeyRate: 12, Scale: 4.1 },
            7: { Path: "h_monkey", Action: "bfsg_elem7", KeyRate: 12, Scale: 4.1 },
            8: { Path: "h_monk", Action: "bfsg_elem8", KeyRate: 12, Scale: 4.1 },
            9: { Path: "s_wild", Action: "bfsg_elem9", KeyRate: 12, Scale: 4.1 },
            10: { Path: "s_scatter", Action: "bfsg_elem10", KeyRate: 12, Scale: 4.8 },
        };

        //元素编号，元素动画对照表;
        public static ElementSpecialAnimations: { [key: number]: labalib.IAnimInfo } = {
            1: { Path: "bfsg_elem1", Action: "bfsg_elem1", KeyRate: 12, Scale: 1 },
            2: { Path: "bfsg_elem2", Action: "bfsg_elem2", KeyRate: 12, Scale: 1 },
            3: { Path: "bfsg_elem3", Action: "bfsg_elem3", KeyRate: 12, Scale: 1 },
            4: { Path: "bfsg_elem4", Action: "bfsg_elem4", KeyRate: 12, Scale: 1 },
            5: { Path: "s_sandy_wild", Action: "bfsg_elem5", KeyRate: 12, Scale: 1.7 },
            6: { Path: "s_pig_wild", Action: "bfsg_elem6", KeyRate: 12, Scale: 1.7 },
            7: { Path: "s_monkey_wild", Action: "bfsg_elem7", KeyRate: 12, Scale: 1.7 },
            8: { Path: "s_monk_wild", Action: "bfsg_elem8", KeyRate: 12, Scale: 1.7 },
            9: { Path: "s_wild", Action: "bfsg_elem9", KeyRate: 12, Scale: 4.1 },
            10: { Path: "s_scatter", Action: "bfsg_elem10", KeyRate: 12, Scale: 4.8 },
        };

        //中间人物特效;
        public static CenterPigEffect = { Path: "pig1", KeyRate: 14, Scale: .8 };
        public static CenterMonkeyEffect = { Path: "monkey1", KeyRate: 14, Scale: .9 };
        public static CenterMonkEffect = { Path: "monk1", KeyRate: 14, Scale: .9 };
        public static CenterSandyEffect = { Path: "sandy1", KeyRate: 14, Scale: .8 };
        //中间人物跳起来特效 --  普通中奖

        public static CenterEffectA: { [key: number]: labalib.IAnimInfo } = {
            1: { Path: "sandya", KeyRate: 14, Scale: 1.1, PlayTime: 1 },
            2: { Path: "piga", KeyRate: 14, Scale: 1.1, PlayTime: 1 },
            3: { Path: "monka", KeyRate: 14, Scale: 1.2, PlayTime: 1 },
            4: { Path: "monkeya", KeyRate: 14, Scale: 1.2, PlayTime: 1 },
        };
        //中大奖
        public static CenterEffectB: { [key: number]: labalib.IAnimInfo } = {
            1: { Path: "sandyb", KeyRate: 14, Scale: 1.1, PlayTime: 1 },
            2: { Path: "pigb", KeyRate: 14, Scale: 1.1, PlayTime: 1 },
            3: { Path: "monkb", KeyRate: 14, Scale: 1.2, PlayTime: 1 },
            4: { Path: "monkeyb", KeyRate: 14, Scale: 1.2, PlayTime: 1 },
        };

        //猴子吹气
        public static MonkeyChuiqi = { Path: "monkey_chuiqi", KeyRate: 5, Scale: 1, AddBlend: 1, PlayTime: 1 };
        public static HighRotate = [
            { Path: "fast3", KeyRate: 40, Scale: 1.6 }, { Path: "fast2", KeyRate: 30, Scale: 1.6, AddBlend: 1 },
            { Path: "fast4", KeyRate: 20, Scale: 1.25, AddBlend: 1 }, { Path: "fast1", KeyRate: 15, Scale: 1, AddBlend: 1 }];
        public static Rotate1 = { Path: "rotate1", KeyRate: 20, Scale: 1.1, AddBlend: 1, PlayTime: 1 };
        public static Rotate2 = { Path: "rotate2", KeyRate: 20, Scale: 1.2, AddBlend: 1, PlayTime: 1 };
        //图标变化
        public static ChangeIcon = { Path: "rotationbutton1", KeyRate: 5, Scale: 1, AddBlend: 1, PlayTime: 1 };

        //重转变换图标rerotate
        public static Rerotate1 = { Path: "rerotate", KeyRate: 15, Scale: 1, AddBlend: 1, PlayTime: 1 };
        //八戒和沙僧攻击
        public static Attack = { Path: "attack", KeyRate: 5, Scale: -1, AddBlend: 1 };

        //中间中奖框
        public static ShiningInfoB = { Path: "winbar1", KeyRate: 20, Scale: 1.2, AddBlend: 1, PlayTime: 1 };
        public static ShiningInfoWave = { Path: "winbar2", KeyRate: 20, Scale: 1.2, AddBlend: 1, PlayTime: 1 };
        public static ShiningInfoParticle = { Path: "winbar3", KeyRate: 16, Scale: 1.2, AddBlend: 1, PlayTime: 1 };
        public static ShiningInfoflare = { Path: "winbar4", KeyRate: 20, Scale: 1.2, AddBlend: 1, PlayTime: 1 };
        //免费总赢得散光
        public static TotalFlare = { Path: "totalwin1", KeyRate: 15, Scale: 1, AddBlend: 1 }
        // public static TotalXingxing = { Path: "totalwin2", KeyRate: 5, Scale: 1 }

        //五星连珠
        public static FiveKind1 = { Path: "fiveKind1", KeyRate: 20, Scale: 2.5, AddBlend: 1 , PlayTime: 1};
        public static FiveKind2 = { Path: "fiveKind2", KeyRate: 20, Scale: 1, AddBlend: 1 , PlayTime: 1};

        //免费游戏过程人物特效;
        public static FreeInCharacterDragons: { [key: number]: any } = {
            // 3: { Path: "_bonusgame_sandy", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle", Scale: 2, Down: { x: 2, y: 370, s: 1.6 }, Right: { x: 180, y: 300, s: 1.6 }, Up: { x: 0, y: 250, s: 1.6 }, Left: { x: -180, y: 310, s: 1.6 } },
            // 2: { Path: "_bonusgame_pig", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle", Scale: 2, Left: { x: -180, y: 320, s: 1.7 }, Down: { x: 0, y: 390, s: 1.7 }, Right: { x: 190, y: 320, s: 1.7 }, Up: { x: 2, y: 250, s: 1.7 } },
            // 1: { Path: "_bonusgame_monkey", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle", Up: { x: 2, y: 285, s: 1.8 }, Left: { x: -180, y: 340, s: 1.8 }, Down: { x: 0, y: 420, s: 1.8 }, Right: { x: 214, y: 345, s: 1.8 } },
            // 0: { Path: "_bonusgame_monk", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle", Scale: 2, Right: { x: 190, y: 265, s: 1.9 }, Up: { x: 0, y: 200, s: 1.9 }, Left: { x: -180, y: 265, s: 1.7 }, Down: { x: 5, y: 340, s: 1.9 } },

            3: {
                Path: "_bonusgame_sandy", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle",
                Scale: 2, Down: { x: 2, y: 370, s: 1.6 }, Right: { x: 180, y: 305, s: 1.5 },
                Up: { x: 0, y: 250, s: 1.6 }, Left: { x: -180, y: 310, s: 1.6 }
            },
            2: {
                Path: "_bonusgame_pig", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle",
                Scale: 2, Left: { x: -180, y: 320, s: 1.7 }, Down: { x: 0, y: 390, s: 1.7 },
                Right: { x: 190, y: 320, s: 1.7 }, Up: { x: 2, y: 250, s: 1.6 }
            },
            1: {
                Path: "_bonusgame_monkey", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle",
                Up: { x: 40, y: 250, s: 1.8 }, Left: { x: -180, y: 340, s: 1.8 },
                Down: { x: 0, y: 405, s: 1.8 }, Right: { x: 214, y: 345, s: 1.8 }
            },
            0: {
                Path: "_bonusgame_monk", Win: "base_win", Change: "base_to_gold", Normal: "base_idlefade", Gold: "gold_idle",
                Scale: 2, Right: { x: 190, y: 265, s: 1.9 }, Up: { x: 0, y: 180, s: 1.9 },
                Left: { x: -180, y: 265, s: 1.5 }, Down: { x: 5, y: 340, s: 1.7 }
            },
        };
        //免费游戏进度条动画
        public static FreeInProgressEffect = { Path: "btn1", KeyRate: 10, Scale: 1 };
        // bigwin 粒子特效
        public static BigWinLiziEffect = { Path: "bigwin1", KeyRate: 10, Scale: 0.8, AddBlend: 1, PlayTime: 1 };
        public static BigWinLiziEffect2 = { Path: "bigwin_partice", KeyRate: 10, Scale: 1, AddBlend: 1, PlayTime: 1 };

        //命中后的公共特效;
        public static RotateElemEffect = { Path: "elem_effect", KeyRate: 5, Scale: 0.7 };
        //小玛丽命中特效
        public static MaliElemEffect = { Path: "maliaward", KeyRate: 5, Scale: 1, AddBlend: 1 };
        //高速滚带
        public static beltHighEffect = { Path: "beltRedEffect2", Action: "beltRedEffect2", KeyRate: 24 };
        public static FreeGameTriggerRotateTime: number = 500;
        //慢速旋转个数;
        public static MisSlowExtraRotateCount: number = 9;
        //慢速旋转的时间;
        public static MisSlowExtraRotateTime: number = 3000;
        //真免费慢速旋转的概率
        public static MisSlowExtraRealFreeGameProp: number = 8000;
        //假免费慢速旋转的概率
        public static MisSlowExtraNoFreeGameProp: number = 8000;

        //高速旋转的元素个数
        public static MisHighExtraRotateCount: number = 100;
        //高速旋转持续的时间
        public static MisHighExtraRotateTime: number = 5000;
        //真免费高速旋转概率
        public static MisHighExtraRealFreeGameProp: number = 10000;
        //假免费高速旋转概率
        public static MisHighExtraNoRealGameProp: number = 10000;

        //加速旋转的速度;
        public static BeltHighScrollSpeed: number = 20;
        //加速旋转多余的时间;
        public static BeltHighScrollExtraTime: number = 1500;

        public static AlllineShowTm: number = 2000;

        public static showOneLineIntervalTm: number = 1500;

        //高速额外旋转的时间
        public static ScreenSameElemEffectExtraTime: number = 3000;
        //高速额外旋转的元素个数
        public static ScreenSameElemEffectExtraCount: number = 60;

        //高速旋转前，等待的时间;
        public static HighRotateDelayTime: number = 2000;
        //闪屏的速度(一秒钟多少次)
        public static HighRotateFlashSpeed: number = 3;
        //高速旋转前，黑屏的时间;
        public static DarkTimeBeforeFlash: number = 1500;

        //每一列正常滚动的时间(单位，毫秒);
        public static BeltScrollTime: Array<number> = [1500, 1800, 2100, 2400, 2700];
        // public static BeltScrollTime: Array<number> = [1200,1500,1800,2100,2400];
        //正常滚动的速度;
        public static BeltScrollSpeed: number = 18;
        //自动旋转的间隔时间;
        public static AutoRotatingIntervalTime: number = 500;
        public static NorRotatingIntervalTime: number = 600;

        public static NoAwardResultShowTime: number = 10;
        public static AwardResultExtraShowTime: number = 10;
        public static ScrollTimeScale: number = 1;

        public static GoldNumScrollMinMultiply: number = 27;
        public static GoldNumMultiplyPerSecond: number = 20;

        public static BigWinContinueTimeOut: number = 5000;

        public static BigWinMinScrollTm: number = 100;
        public static BigWinMaxScrollTm: number = 15000;

        public static FreegameContinueTimeOut: number = 5000;
        public static FreegameRotateAwardTimeOut: number = 5000;
        //回弹下滑
        public static ScrollBackUpOffset = 100;
        public static ScrollBackUpTm = 150;
        public static ScrollBackDownOffset = 150;
        public static ScrollBackDownTm = 1700;

        //减速参数 回弹时间从这里减的
        public static ScrollSlowTm = 400;
        public static ScrollSlowSpeed = 6;
        //慢速一个 结果三个
        public static scrollSlowCount = 4;

        //下局开始，超过多少时间清除上局盈利金币;
        public static DelayClearRaceGoldWhenRotatingTm: number = 500;

        //比倍特效;
        //荷官空闲动画
        public static DealerIdleAnim = { Path: "dealer_idle", KeyRate: 8 };
        //荷官摇色子动画
        public static DealerShakeAnim = { Path: "dealer_shake", KeyRate: 8 };
        //荷官开奖动画
        public static DealerOpenAnim = { Path: "dealer_open", KeyRate: 8 };
        //荷官胜利动画
        public static DealerWinAnim = { Path: "dealer_win", KeyRate: 8 };
        //荷官失败动画
        public static DealerLostAnim = { Path: "dealer_lost", KeyRate: 8 };

        //小玛丽外围滚动的时间;
        public static MariAroundRotateTime: number = 8000;
        //小玛丽外围滚动的最少圈数;
        public static MariAroundMinTurns: number = 4;
        //小玛丽的拉霸滚动时间;
        public static MariLabaRotateTime: number = 3000;
        //小玛丽的拉霸滚动速度;
        public static MariLabaRotateSpeed: number = 10;


        //普通赢取得动画
        public static WinNormalAnim = { Path: "win1_effect1", KeyRate: 13 };
        //超级大赢家的动画
        public static WinSuperAnim = { Path: "win3_effect1", KeyRate: 7 };

        //玛丽的字体爆炸效果;
        public static MariFontBombAnim = { Path: "font_bomb", KeyRate: 10 };

        //逐条绘制线的时间间隔;
        public static DrawEveryLineIntervalTime: number = 500;

        //自动挂机长按时间;
        public static AutoRotateClickTime: number = 700;

        //扫光图片;
        public static SaoGuangImage: string = "w_light";

        //全屏特效结果;
        public static WholeScreenResults = {
            1: [[1, 2, 3, 2, 1], [1, 2, 3, 2, 1], [1, 2, 3, 2, 1]],
            2: [[4, 5, 6, 5, 4], [4, 5, 6, 5, 4], [4, 5, 6, 5, 4]],
            3: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]],
            4: [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]],
            5: [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]],
            6: [[4, 4, 4, 4, 4], [4, 4, 4, 4, 4], [4, 4, 4, 4, 4]],
            7: [[5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]],
            8: [[6, 6, 6, 6, 6], [6, 6, 6, 6, 6], [6, 6, 6, 6, 6]],
            9: [[7, 7, 7, 7, 7], [7, 7, 7, 7, 7], [7, 7, 7, 7, 7]],
            10: [[8, 8, 8, 8, 8], [8, 8, 8, 8, 8], [8, 8, 8, 8, 8]],
            11: [[9, 9, 9, 9, 9], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9]],
        }
        //全屏特效倍率;
        public static WholeElemMultiplys: { [key: number]: number } = {
            4: 250,
            5: 400,
            6: 500,
            7: 1000,
            8: 2500,
            9: 5000
        };
        //飞金币停下后播放命中的特效;
        public static FlyGoldEndMovieClipPath: string = "by_coinBright";

        public static bfsg_deng = { Path: "bfsg_deng", Action: "bfsg_deng", KeyRate: 20, Scale: 1, AddBlend: 1 };

        public static FreeGameAnimations = {
            "jsjm": { Path: "jsjm", Action: "jsjm", KeyRate: 12, Scale: 2 },
            "mfyxcs5": { "resName": "mfyxcs", "armatureName": "armatureName", "animationName": "mfyxcs5" },
            "mfyxcs7": { "resName": "mfyxcs", "armatureName": "armatureName", "animationName": "mfyxcs7" },
            "mfyxcs9": { "resName": "mfyxcs", "armatureName": "armatureName", "animationName": "mfyxcs9" },
            "mianfei": { Path: "mianfei", Action: "mianfei", KeyRate: 15, Scale: 1 }
        };

        public static BigWinAnimations = {
            "big_win_1": { Path: "big_win_1", Action: "big_win_1", KeyRate: 12, Scale: 2, "animation2": { Path: "big_win_2", Action: "big_win_2", KeyRate: 12, Scale: 2 } },
            "super_win_1": { Path: "super_win_1", Action: "super_win_1", KeyRate: 12, Scale: 2, "animation2": { Path: "super_win_2", Action: "super_win_2", KeyRate: 12, Scale: 2 } },
            "mega_win_1": { Path: "mega_win_1", Action: "mega_win_1", KeyRate: 12, Scale: 2, "animation2": { Path: "mega_win_2", Action: "mega_win_2", KeyRate: 12, Scale: 2 } },
            "huge_win_1": { Path: "huge_win_1", Action: "huge_win_1", KeyRate: 12, Scale: 2, "animation2": { Path: "huge_win_2", Action: "huge_win_2", KeyRate: 12, Scale: 2 } },
            "exreme_win_1": { Path: "exreme_win_1", Action: "exreme_win_1", KeyRate: 12, Scale: 2, "animation2": { Path: "exreme_win_2", Action: "exreme_win_2", KeyRate: 12, Scale: 2 } },
            "jack_win_1": { Path: "jack_win_1", Action: "jack_win_1", KeyRate: 12, Scale: 2, "animation2": { Path: "jack_win_2", Action: "jack_win_2", KeyRate: 12, Scale: 2 } }
        };

        public static maxScrollGoldTime: number = 3000;

    }
}
