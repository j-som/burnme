var gtools = gtools || {};

gtools.get2dArray = function(row, column)
{
	var arr = new Array(row);
	for (var i = 0; i < row; ++i)
	{
		arr[i] = new Array(column);
	}

	return arr;
}