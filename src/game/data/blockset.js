var blockset = cc.Class.extend({
	blocks:[],
	width:0,
	height:0,
	ctor:function(row, column){
		var count = row * column;
		for (var i = 0; i < count; ++i) {
			this.blocks[i] = 0;
		};
		this.width = column;
		this.height = row;
	},
	merge:function (block)
	{
		var x = block.x;
		var y = block.y;
		var c = block.column;
		var r = block.row;
		var data = block.blockData;
		var index = 0;
		var indexOfNew = new Array();
		for (var i = 0; i < r; ++i)
		{
			for (var j = 0; j < c; ++j)
			{
				if (data[i][j])
				{
					index = y * this.width + x;
					indexOfNew.push(index);
					this.blocks[index] = data[i][j];
				}
			}
		}
		//todo 根据indexOfNew 消去相应的块
		_disposeBlocks(indexOfNew);
	}

	_disposeBlocks:function(indexs)
	{

	}
	
});
