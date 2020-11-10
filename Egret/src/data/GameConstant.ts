module xiyouji {

	//水浒传的所有类型.
	export enum XYJ_ElemAllType {
		J = 1,
		Q = 2,
		K = 3,
		A= 4,
		ShaSeng = 5,
		ZhuBaJie = 6,
		SunWuKong = 7,
		TangSeng = 8,
		Wild = 9,
		DuoBao = 10,
	};

	export enum XYJ_ResultType {
		NORMAL = 0,
		FREEIN = 3,//免费中
		FREETRI = 1,//触发
		REROTATETRI = 4,//玛丽触发
		REROTATEIN = 5,//玛丽中
	}

	/**
	 * 扑克常量
	 */
	export class GameConstant {
		public static ResGroup_SC = "xyj_preload";
		/**
		 * 门界面Y
		 */
		public static DoorSpriteY = 437;
		/**
		 * 门的间隙
		 */
		public static DoorGap = 39;
		/**
		 * 门width
		 */
		public static DoorWidth = 281;
		/**
		 * 门的起始位置
		 */
		public static get DoorStartX(): number {
			let sunWidth = (GameConstant.DoorWidth + GameConstant.DoorGap) * 3 + GameConstant.DoorWidth;
			let startX = (uniLib.Global.screenWidth - sunWidth) / 2;
			return startX;
		}
		/**
		 * 压注的筹码值
		 */
		public static Chips = [2, 10, 50, 100, 1000];
		/**
		 * 头像宽
		 */
		public static HeadWidth = 57;
		/**
		 * 头像高
		 */
		public static HeadHeight = 57;
		/**
		 * 小数的计算的系数
		 */
		public static DecimalRatio: number = 10;
		/**
		 * 筹码进入起始位置
		 */
		public static BetStartRange = [{ x: { min: 0, max: 100 }, y: { min: 0, max: 1280 } },
		{ x: { min: 0, max: 720 }, y: { min: 0, max: 100 } },
		{ x: { min: 1180, max: 720 }, y: { min: 0, max: 1280 } },
		{ x: { min: 620, max: 1280 }, y: { min: 0, max: 720 } }];
		/**
		 * 压入筹码位置
		 */
		public static BetEndRange = { x: { min: 30, max: 180 }, y: { min: 45, max: 85 } };
		/**
		 * 结束后最终排名位置
		 */
		public static CarEndX = [300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
		/**
		 * 随机筹码落到门中的位置
		 */
		public static GetDoorChipsPoint(doorId: number): { x: number, y: number } {
			let endX = Math.randomInteger(GameConstant.BetEndRange.x.min, GameConstant.BetEndRange.x.max);
			let endY = Math.randomInteger(GameConstant.BetEndRange.y.min, GameConstant.BetEndRange.y.max);
			endX = GameConstant.DoorStartX + (GameConstant.DoorWidth + GameConstant.DoorGap) * (doorId - 1) + endX;
			endY = GameConstant.DoorSpriteY + endY;
			return { x: endX, y: endY };
		}
		/**
		 * 获取下注的筹码通过总筹码
		 */
		public static GetChipsByBetSum(value: number): Array<number> {
			if (value == NaN || value == null || value <= 0)
				return [];
			let arr = new Array<number>();
			var index: number = 0;
			while (value > 0) {
				let chips = GameConstant.Chips.filter(v => v <= value);
				let random = chips.random();
				let ratio = GameConstant.DecimalRatio;
				value = (value * ratio - random * ratio) / ratio;
				arr.push(random);
				index = index + 1;
				if (index > 3)
					break;
			}
			return arr;
		}
		/**
		 * 数字三位一分
		 */
		public static getStringByChips(chips: string | number): string {
			chips = chips != null ? chips + "" : "0";
			if (chips == "0" || chips == "" || chips == null) return "0";
			var reg: RegExp = /(\d)(?=(?:\d{3})+\b)/g;
			var str: string = chips.replace(reg, "$1,");
			return str;
		}

		//滚动条数量;
		public static BeltCount:number = 5;
	}
}