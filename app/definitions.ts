// 此文件包含数据的类型定义，它描述了数据的形状以及每个属性应接受的数据类型。
export type Holiday = {
	date: string
    localName: string;
    name: string;
    countryCode: string;
    fixed: boolean;
    global: boolean;
    counties?: null; // 使用问号表示这个属性可能是undefined或null
    launchYear?: null;
    types: string[];
};