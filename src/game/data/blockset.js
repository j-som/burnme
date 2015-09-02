var blockset = cc.Class.extend({
	blocks:[],
	ctor:function(row, column){
		var count = row * column;
		for (var i = 0; i < count; ++i) {
			this.blocks[i] = 0;
		};
	},
	merge:function (block)
	{
		var x = block.x;
		var y = block.y;
		var c = block.column;
		var r = block.row;
		var data = block.blockData;
		
	}
	
});
