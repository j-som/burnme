// var diamonds = [
// 	[
// 		[1,1],
// 		[1,1]
// 	]
// ];
// var Zblocks = [
// 	[
// 		[1,1,0],
// 		[0,1,1]
// 	],
// 	[
// 		[0,1],
// 		[1,1],
// 		[1,0]
// 	]
// ];
// var rZblocks = [
// 	[
// 		[0,1,1],
// 		[1,1,0]
// 	],
// 	[
// 		[1,0],
// 		[1,1],
// 		[0,1]
// 	]
// ];
// var Lblocks = [
// 	[
// 		[1,0],
// 		[1,0],
// 		[1,1]
// 	],
// 	[
// 		[0,0,1],
// 		[1,1,1]
// 	],
// 	[
// 		[1,1],
// 		[0,1],
// 		[0,1]
// 	],
// 	[
// 		[0,0,1],
// 		[1,1,1]
// 	],
// ];
var Block = cc.Class.extend({
	x:0,
	y:0,
	row:0,
	column:0,
	blockData:null,
	ctor:function (_x, _y, _row, _column){
		this.x = _x;
		this.y = _y;
		this.column = _column;
		this.row = _row;
		// this.blockData = new Array();

		// for (var i = 0; i < _row; ++i) {
		// 	this.blockData[i] = new Array();
		// 	for (var j = 0; j < _column; ++j)
		// 	{
		// 		this.blockData[i][j] = 0
		// 	}
		// };
	},
	rotateLeft:function()
	{
		var b = new Block(this.x, this.y, this.column, this.row);
		var newData = new Array(this.column);
		for (var i = 0; i < this.column ; ++i)
		{
			newData[i] = new Array(this.row);
			for (var j = 0; j < this.row; ++j)
			{
				newData[i][j] = this.blockData[j][this.column - 1 - i];
			}
		}
		b.blockData = newData;
		return b;
	},

	rotateRight:function()
	{
		var newData = new Array(this.column);
		var b = new Block(this.x, this.y, this.column, this.row);
		for (var i = 0; i < this.column; ++i)
		{
			newData[i] = new Array(this.row);
			for (var j = 0; j < this.row; ++j)
			{
				newData[i][j] = this.blockData[this.row - 1 - j][i]
			}
		}
		b.blockData = newData;
		return b;
	},
	toString: function()
	{
		if (this.blockData == null) return "empty block";
		var str = "";
		for (var i = 0; i < this.row; ++i)
		{
			for (var j = 0; j < this.column; ++j)
			{
				str += (this.blockData[i][j])?this.blockData[i][j]: " " + " "
			}
			str += "\n";
		}
		str += "\n";
		return str;
	}
});

/**
 *  口口 
 *  口口
 **/
var Diamonds = Block.extend({
	ctor: function(_data)
	{
		this._super(0, 0, 2, 2);
		this.blockData = gtools.get2dArray(2, 2);
		this.blockData[0][0] = _data[0];
		this.blockData[0][1] = _data[1];
		this.blockData[1][0] = _data[2];
		this.blockData[1][1] = _data[3];
	},
});

/**
 *  口口
 *    口口
 **/
var ZBlocks = Block.extend({
	ctor:function(_data)
	{
		this._super(0, 0, 2, 3);
		this.blockData = gtools.get2dArray(2, 3);
		this.blockData[0][0] = _data[0];
		this.blockData[0][1] = _data[1];
		this.blockData[1][1] = _data[2];
		this.blockData[1][2] = _data[3];

	}
});

/**
 *    口口
 *  口口
 **/
var AntiZBlocks = Block.extend({
	ctor:function(_data)
	{
		this._super(0, 0, 2, 3);
		this.blockData = gtools.get2dArray(2, 3);
		this.blockData[0][1] = _data[0];
		this.blockData[0][2] = _data[1];
		this.blockData[1][0] = _data[2];
		this.blockData[1][1] = _data[3];
	}
});

/**
 *   口
 *   口
 *   口口
 **/
var LBlocks = Block.extend({
	ctor:function(_data)
	{
		this._super(0, 0, 3, 2);
		this.blockData = gtools.get2dArray(3, 2);
		this.blockData[0][0] = _data[0];
		this.blockData[1][0] = _data[1];
		this.blockData[2][0] = _data[2];
		this.blockData[2][1] = _data[3];
	}
});

/**
 *     口
 *     口
 *   口口
 **/
var AntiLBlocks = Block.extend({
	ctor:function(_data)
	{
		this._super(0, 0, 3, 2);
		this.blockData = gtools.get2dArray(3, 2);
		this.blockData[0][1] = _data[0];
		this.blockData[1][1] = _data[1];
		this.blockData[2][0] = _data[2];
		this.blockData[2][1] = _data[3];
	}
});

/**
 *   口口口口
 **/
var IBlocks = Block.extend({
	ctor:function (_data)
	{
		this._super(0, 0, 1, 4);
		this.blockData = gtools.get2dArray(1, 4);
		this.blockData[0][0] = _data[0];
		this.blockData[0][1] = _data[1];
		this.blockData[0][2] = _data[2];
		this.blockData[0][3] = _data[3];
	}
})