module conglinshuiguo {
    /**
     * 音效管理类
     */



    export class ShzSound {
        public static GoldEffectSound: string = "bfsg_gold_effect_mp3";
        // public static HitElem: string = "shz_a_point_1_mp3";         //比倍命中;
        // public static BibeiHostWin: string = "shz_makers_win_mp3";  //玩家赢，庄家输;
        // public static BibeiHostLost: string = "shz_makers_lose_mp3";  //玩家输，庄家赢;
        // public static BibeiBgm: string = "shz_bgm_bibei_mp3";        //比倍背景音乐;
        // public static BibeiMakers: Array<string> = ["shz_makers1_mp3", "shz_makers2_mp3", "shz_makers3_mp3", "shz_makers4_mp3", "shz_makers5_mp3", "shz_makers6_mp3"];//比倍开始随机语音;
        public static MariBgm: string = "";         //小玛丽背景音乐;
        // public static SgmlBgm: string = "bfsg_shuiguo_bgm_mp3";            //水浒传背景音乐;
        public static StartRotate: string = "bfsg_rotation_start_mp3";          //开始滚动;
        // public static RotatingSound: string = "shz_turn_1_mp3";      //滚动中音效;
        // public static FullElemSound: string = "shz_all_icon_get_mp3";    //全屏将语音;
        public static MariStartSound: string = "bfsg_mariFree_start_mp3";     //玛丽开始语音;
        public static FreeStartSound: string = "bfsg_mariFree_start_mp3";     //免费开始语音;
        // public static WinnerSuperSound: string = "shz_s_winer_mp3";      //超级大赢家语音;
        // public static WinnerBigSound: string = "shz_winer_mp3";          //大赢家语音;
        public static MariRotatePerGridSound: string = "bfsg_mary_rotate_pergrid_mp3";       //玛丽旋转每个格子音效;
        // public static MariHitAwardSound: string = "bfsg_mlaward_mp3";   //玛丽停止旋转音效;
        public static MariHitBoomSound: string = "bfsg_mary_bomb_mp3";   //玛丽命中炸弹旋转音效;      
        // public static MariRotateEndSound: string = "bfsg_ml_end_mp3";   //玛丽停止旋转音效;
        public static DrawLineSound: string = "bfsg_drawline_mp3";   //玛丽停止旋转音效;
        public static BombGoldEndSound: string = "bfsg_bomb_end_mp3";
        public static FlyGoldStartSound: string = "bfsg_flybold_start_mp3";
        public static beleStopSound: string = "bfsg_roll_end_mp3";

    };


    //游戏三个状态;
    export enum GameBgmState {
        GameBgmState_Sgml = 1,
        GameBgmState_Mari = 2,
    }

    export class SoundHand {
        private static m_Instance: SoundHand;
        public static get Instance() {
            if (this.m_Instance == null) {
                this.m_Instance = new SoundHand();
            }
            return this.m_Instance;
        }
        private $isPlayBg: boolean;
        private bgmState: GameBgmState = GameBgmState.GameBgmState_Sgml;


        public static bgMusic: string[] = ["clsg_bgm_mp3"];


        private mElemSoundPaths: { [index: number]: string } = {};
        constructor() {
            this.mElemSoundPaths[6] = "shz_elem_6_mp3";
            this.mElemSoundPaths[7] = "shz_elem_7_mp3";
            this.mElemSoundPaths[8] = "shz_elem_8_mp3";
            this.mElemSoundPaths[9] = "shz_elem_9_mp3";
            this.mElemSoundPaths[10] = "shz_elem_10_mp3";
        }

        public destroy() {
            SoundHand.m_Instance = null;
        }



        public get isPlayBg() {
            return this.$isPlayBg;
        }
        public set isPlayBg(play: boolean) {
            this.$isPlayBg = play;
        }

        private soundChannelHighIng: egret.SoundChannel = null;
        public playGoldenRollingSound() {
            if (this.soundChannelHighIng != null) {
                this.soundChannelHighIng.stop()
                this.soundChannelHighIng = null
            }
            this.soundChannelHighIng = uniLib.SoundMgr.instance.playSound("bfsg_go_anim_wait_mp3", 1);
        }

        public stopGoldenRolling() {
            if (this.soundChannelHighIng != null) {
                this.soundChannelHighIng.stop()
                this.soundChannelHighIng = null
            }
        }

        public playHitSpecialElemSound() {
            uniLib.SoundMgr.instance.playSound("bfsg_go_roll_end_mp3", 1);
        }


        //--------------------------------
        // public playLabaBg() {
        //     if (this.isPlayBg) {
        //         return;
        //     }
        //     this.switchMusicBG()
        //     this.isPlayBg = true;
        // }

        private mCurSoundBG: string = "clsg_bgm_mp3"
        public switchMusicBG(isNormal: number = 0) {
            let musicPath = ["clsg_bgm_mp3", "freebg_mp3", "bigwin_mp3" , "freeBg1_mp3","freeEnd_mp3"]
            this.mCurSoundBG = musicPath[isNormal]
            uniLib.SoundMgr.instance.stopBgMusic();
            uniLib.SoundMgr.instance.playBgMusic([musicPath[isNormal]]);
            // this.isPlayBg = true;
        }
        // public PlayLabaGb() {
        //     uniLib.SoundMgr.instance.playBgMusic([this.mCurSoundBG]);
        //     this.isPlayBg = true;
        // }
        public endLabaBg() {
            uniLib.SoundMgr.instance.stopBgMusic();
            // this.isPlayBg = false;
        }

        //中间猴子出来3个随机
        public playRerotateTwoSound() {
            let soundList = ["tangshen2_mp3", "tangshen3_mp3", "tangshen4_mp3"]
            // for (let i=0;i<target; i++) {
            uniLib.SoundMgr.instance.playSound(soundList[MathUtil.random(0,2)], 1);
            // }
        }


        // }
        //--------------------------------
        public PlaySoundOnce(soundPath: string, cb?: Function) {
            uniLib.SoundMgr.instance.playSound(soundPath, 1, 0, cb);
        }

        /**
         * 循环播放声音;
         */
        public PlayLoopSound(loopSoundPath: string, delayTime: number = 0): { stopCB: Function } {
            let delayTimer: number = 0;
            let curChannel: egret.SoundChannel = null;
            let playSound = () => {
                curChannel = uniLib.SoundMgr.instance.playSound(loopSoundPath, 0);
                delayTimer = 0;
            }
            if (delayTime == 0) {
                curChannel = uniLib.SoundMgr.instance.playSound(loopSoundPath, 0);
            } else {
                delayTimer = game.Timer.setTimeout(playSound, null, delayTime);
            }
            let stopCB = () => {
                if (curChannel != null) {
                    uniLib.SoundMgr.instance.stopSound(loopSoundPath);
                    curChannel = null;
                }
                if (delayTimer != 0) {
                    game.Timer.clearTimeout(delayTimer);
                    delayTimer = 0;
                }
            }
            return { "stopCB": stopCB }
        }

        //开始旋转;
        private mRoateLoopInfo = null;
        private soundRotateAutoLoopFlag: boolean = false;
        public PlayRotateSound() {
            // if(this.mRoateLoopInfo != null){
            //     return;
            // }
            // this.mRoateLoopInfo = uniLib.SoundMgr.instance.playSound(ShzSound.StartRotate, 1,0,()=>{
            //     this.mRoateLoopInfo = null;
            // });
            this.soundRotateAutoLoopFlag = true;
            if (this.mRoateLoopInfo != null) {
                return;
            }
            this.mRoateLoopInfo = uniLib.SoundMgr.instance.playSound(ShzSound.StartRotate, 1, 0, this.rotateSoundCB, this);
        }

        private rotateSoundCB() {
            if ((this.soundRotateAutoLoopFlag)) {
                this.mRoateLoopInfo = uniLib.SoundMgr.instance.playSound(ShzSound.StartRotate, 1, 0, this.rotateSoundCB, this);
            } else {
                this.mRoateLoopInfo = null;
            }
        }

        public stopRotateSound() {
            if (this.mRoateLoopInfo != null) {
                this.mRoateLoopInfo.stop()
                this.mRoateLoopInfo = null
            }
        }

        public setRotateSoundAutoLoopFlag(value: boolean) {
            this.soundRotateAutoLoopFlag = value;
            // if (this.soundRotate != null) {
            //     this.soundRotate.stop()
            //     this.soundRotate = null
            // }
        }

        //bigwin金币雨
        private bigWinGoldSound: egret.SoundChannel = null;

        public playBigWinGoldSound() {
            if (this.bigWinGoldSound != null) {
                this.bigWinGoldSound.stop()
                this.bigWinGoldSound = null
            }
            this.bigWinGoldSound = uniLib.SoundMgr.instance.playSound("bfsg_coinsFallLoop_mp3", 0);
        }

        public stopBigWinGoldSound() {
            if (this.bigWinGoldSound != null) {
                this.bigWinGoldSound.stop()
                this.bigWinGoldSound = null
            }
        }


     
        //小玛丽游戏背景音乐
        private maryBgSound: egret.SoundChannel = null;

        public playMaryBgSound() {
            if (this.maryBgSound != null) {
                this.maryBgSound.stop()
                this.maryBgSound = null
            }
            if (this.mRoateLoopInfo != null) {
                uniLib.SoundMgr.instance.stopSound(ShzSound.StartRotate);
                this.mRoateLoopInfo = null;
            }
            this.maryBgSound = uniLib.SoundMgr.instance.playSound(ShzSound.StartRotate, 0);
        }

        public stopMaryBgSound() {
            if (this.maryBgSound != null) {
                this.maryBgSound.stop()
                this.maryBgSound = null
            }
        }
        //停止
        // public StopRotateSound(){
        //     if(this.mRoateLoopInfo != null){
        //         this.mRoateLoopInfo.stopCB();
        //         this.mRoateLoopInfo = null;
        //     }
        // }


        // /**
        //  * 播放金币飞完后的声音
        //  */
        // public playFlyGoldStartSound() {
        //     uniLib.SoundMgr.instance.playSound("bfsg_flygold_begin_mp3", 1);
        // }

        public playMFYXTipSound() {
            return uniLib.SoundMgr.instance.playSound("bfsg_mfyx_tips_mp3");
        }

        /**
         * 播放免费游戏结算声音
         */
        public playFreegameResultSound() {
            // uniLib.SoundMgr.instance.playSound("bfsg_free_time_win_mp3", 1);
            uniLib.SoundMgr.instance.playSound("bfsg_freegameend_loop_mp3", 1)
        }
        /**
         * 按钮旋转音效
         */
        public playBtnRotateSound() {
            uniLib.SoundMgr.instance.playSound("clsg_btnRotate_mp3", 1);
        }

        /**
         * bigwin字体跳动music先放这里
         */
        public playbigwinSound() {
            uniLib.SoundMgr.instance.playSound("bigwin_mp3", 1);
        }
        /**
         * bigwin猴子中间出来时
         */
        public playbigwinMonkeySound() {
            uniLib.SoundMgr.instance.playSound("clsg_sound1_mp3", 1);
        }
        /**
         * bigwin停止滚动
         */
        public playbigwinStopSound() {
            uniLib.SoundMgr.instance.playSound("bigwinStop_mp3", 1);
        }

        /**
         * 百搭跳动
         */
        public playBaiDaSound() {
            uniLib.SoundMgr.instance.playSound("baiDa_mp3", 1);
        }
        /**
         * 夺宝停止
         */
        public playDuoBaoStopSound() {
            uniLib.SoundMgr.instance.playSound("duoBaoStop_mp3", 1);
        }
        /**
         * 滑动停止
         */
        public playHuaDongStopSound() {
            uniLib.SoundMgr.instance.playSound("huaDongStop_mp3", 1);
        }
        /**
         * 免费开始按钮 领取按钮
         */
        public playFreebtnSound() {
            uniLib.SoundMgr.instance.playSound("freebtn_mp3", 1);
        }
        /**
         * 免费其他粘连图案跳动
         */
        public playFreeIcon2Sound() {
            uniLib.SoundMgr.instance.playSound("freeIcon2_mp3", 1);
        }
        /**
         * 免费游戏结算金额跑完包红叶子时
         */
        public playFreeStopSound() {
            uniLib.SoundMgr.instance.playSound("freeStop_mp3", 1);
        }
        /**
         * 免费中间图案出现时和跳动时
         */
        public playFreeIcon1Sound() {
            uniLib.SoundMgr.instance.playSound("freeIcon1_mp3", 1);
        }
        /**
         * 免费准备音效背景音效3(music)
         */
        public playFreeBg1Sound() {
            uniLib.SoundMgr.instance.playSound("freeBg1_mp3", 1);
        }
        /**
         * 神秘箱子出现
         */
        public playMysticalSound() {
            uniLib.SoundMgr.instance.playSound("mystical_mp3", 1);
        }
        /**
         * 神秘箱子爆开
         */
        public playMysticalBoomSound() {
            uniLib.SoundMgr.instance.playSound("mysticalBoom_mp3", 1);
        }
        private slowStop:egret.SoundChannel = null;
        /**
         * 滑动音效(无夺宝)
         */
        public playSlowStopSound() {
            this.slowStop = uniLib.SoundMgr.instance.playSound("clsg_slowStop_mp3", 1);
        }
        /**
         * 滑动音效停止
         */
        public stopSlowStopSound() {
            if(this.slowStop){
                this.slowStop.stop();
                this.slowStop = null;
            }
        }
        /**
         * 左右两侧猴子出来神秘模式出来也要
         */
        public playMonkeyAboutSound() {
            uniLib.SoundMgr.instance.playSound("monkeyAbout_mp3", 1);
        }
        /**
         * 免费游戏结束面板 猴子消失
         */
        public playfreeEnd2Sound() {
            uniLib.SoundMgr.instance.playSound("freeEnd2_mp3", 1);
        }


    }
}