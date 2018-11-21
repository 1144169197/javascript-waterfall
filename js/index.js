/*********************************************************************************
Name:瀑布流
Author:ll
Date:2018
Desc:操作
version:1.0
**********************************************************************************/
function waterfall(id, col, gap) {
	this._id = id || 'container';
	this._col = col || 4;
	this._gap = gap || [10, 10];
}

/*
描述：初始化
参数：
conatiner: 初始化
*/
waterfall.prototype.init = function (container) {
	
}