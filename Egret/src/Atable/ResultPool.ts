﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
module table {
	/**
	 * FILE: 玩法配置.xlsx SHEET: 结果池
	 */
	export class ResultPool {
		id: number;
		/**
		 * 赔率
		 */
		mul: number;
		/**
		 * 结果类型
		 */
		resultType: number;
		/**
		 * 特殊数量
		 */
		specialNum: number;
		/**
		 * 免费id
		 */
		freeGameId: number;
		/**
		 * 结果
		 */
		ret: string;

		GetType(): string { return 'table.ResultPool'; }
	}
}
