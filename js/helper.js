// Linear Regresion adapted from - http://trentrichardson.com/2010/04/06/compute-linear-regressions-in-javascript/
function linearRegression(y,x){
	var lr = {};
	const n = y.length;
	var sum_x = 0;
	var sum_y = 0;
	var sum_xy = 0;
	var sum_xx = 0;
	var sum_yy = 0;
	
	_.forEach(y, (d,i) => {
		sum_x += x[i];
		sum_y += y[i];
		sum_xy += (x[i]*y[i]);
		sum_xx += (x[i]*x[i]);
		sum_yy += (y[i]*y[i]);
	})
	
	lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
	lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
	lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);
	
	return lr;
}

function removeOldContent(items) {
	while (!_.isNull(items) && items.firstChild) {
    items.removeChild(items.firstChild);
	}
}