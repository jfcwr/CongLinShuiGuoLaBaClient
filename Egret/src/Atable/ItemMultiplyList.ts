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
	 * FILE: 玩法配置.xlsx SHEET: 物品赔率 KEY: id
	 */
	export class ItemMultiplyList {
		id: number;
		/**
		 * 物品名称
		 */
		name: string;
		/**
		 * 物品编号
		 */
		itemId: number;
		/**
		 * 连线数量
		 */
		connCount: number;
		/**
		 * 赔率
		 */
		multiply: number;

		GetType(): string { return 'table.ItemMultiplyList'; }
	}
}
