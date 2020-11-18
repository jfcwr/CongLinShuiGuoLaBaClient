
// 对自动生成的表格代码的扩展

// TableGameRuleConfigList_json
declare module table {

    export module ItemMultiplyList {
        var $instance: table.ItemMultiplyList[];
        function instance(): table.ItemMultiplyList[];
    }

    export module TableGameRuleConfigList {
        var $instance: table.TableGameRuleConfigList[];
        function instance(): table.TableGameRuleConfigList[];
    }

    export module LabaLineList {
        var $instance: table.LabaLineList[];
        function instance(): table.LabaLineList[];
    }

    export module MaliResultPool {
        var $instance: table.MaliResultPool[];
        function instance(): table.MaliResultPool[];
    }
    export module TableItemConfig {
        var $instance: table.TableItemConfig[];
        function instance(): table.TableItemConfig[];
    }
    export module LabaEffectMultiplyList {
        var $instance: table.LabaEffectMultiplyList[];
        function instance(): table.LabaEffectMultiplyList[];
    }

    export module MaryOutputIconList {
        var $instance: table.MaryOutputIconList[];
        function instance(): table.MaryOutputIconList[];
    }

    export module TableMaliMultiplyList {
        var $instance: table.TableMaliMultiplyList[];
        function instance(): table.TableMaliMultiplyList[];
    }


    export module TableJackpotSpecialSymbolConfig {
        var $instance: table.TableJackpotSpecialSymbolConfig[];
        function instance(): table.TableJackpotSpecialSymbolConfig[];
    }
    
    export function clearTable(): void;
}

table.clearTable = function (): void {
    table.TableJackpotSpecialSymbolConfig.$instance = null;
    table.ItemMultiplyList.$instance = null;
    table.TableGameRuleConfigList.$instance = null;
    table.LabaLineList.$instance = null;
    table.MaliResultPool.$instance = null;
    table.TableItemConfig.$instance = null;
    table.LabaEffectMultiplyList.$instance = null;
    table.MaryOutputIconList.$instance = null;
    table.TableMaliMultiplyList.$instance = null;
}

table.TableJackpotSpecialSymbolConfig.instance = function (): table.TableJackpotSpecialSymbolConfig[] {
    if (table.TableJackpotSpecialSymbolConfig.$instance == null) {
        table.TableJackpotSpecialSymbolConfig.$instance = loadTable("TableJackpotSpecialSymbolConfig_json");
    }
    return table.TableJackpotSpecialSymbolConfig.$instance;
}

table.ItemMultiplyList.instance = function (): table.ItemMultiplyList[] {
    if (table.ItemMultiplyList.$instance == null) {
        table.ItemMultiplyList.$instance = loadTable("ItemMultiplyList_json");
    }
    return table.ItemMultiplyList.$instance;
}

table.TableGameRuleConfigList.instance = function (): table.TableGameRuleConfigList[] {
    if (table.TableGameRuleConfigList.$instance == null) {
        table.TableGameRuleConfigList.$instance = loadTable("TableGameRuleConfigList_json");
    }
    return table.TableGameRuleConfigList.$instance;
}

table.LabaLineList.instance = function (): table.LabaLineList[] {
    if (table.LabaLineList.$instance == null) {
        table.LabaLineList.$instance = loadTable("LabaLineList_json");
    }
    return table.LabaLineList.$instance;
}
table.MaliResultPool.instance = function (): table.MaliResultPool[] {
    if (table.MaliResultPool.$instance == null) {
        table.MaliResultPool.$instance = loadTable("MaliResultPool_json");
    }
    return table.MaliResultPool.$instance;
}
table.TableItemConfig.instance = function (): table.TableItemConfig[] {
    if (table.TableItemConfig.$instance == null) {
        table.TableItemConfig.$instance = loadTable("TableItemConfig_json");
    }
    return table.TableItemConfig.$instance;
}



table.LabaEffectMultiplyList.instance = function (): table.LabaEffectMultiplyList[] {
    if (table.LabaEffectMultiplyList.$instance == null) {
        table.LabaEffectMultiplyList.$instance = loadTable("LabaEffectMultiplyList_json");
    }
    return table.LabaEffectMultiplyList.$instance;
}

table.MaryOutputIconList.instance = function (): table.MaryOutputIconList[] {
    if (table.MaryOutputIconList.$instance == null) {
        table.MaryOutputIconList.$instance = loadTable("MaryOutputIconList_json");
    }
    return table.MaryOutputIconList.$instance;
}

table.TableMaliMultiplyList.instance = function (): table.TableMaliMultiplyList[] {
    if (table.TableMaliMultiplyList.$instance == null) {
        table.TableMaliMultiplyList.$instance = loadTable("TableMaliMultiplyList_json");
    }
    return table.TableMaliMultiplyList.$instance;
}
