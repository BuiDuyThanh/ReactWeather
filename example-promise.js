function getTempCallback (location, callback) {
	callback(undefined, 78);		// case 1: have no error, just temp
	callback('City not found');		// case 2: error
}

getTempCallback('Espoo', function (err, temp){
	if (err) {
		console.log('error', err);
	} else {
		console.log('success', temp);
	}
});

function getTempPromise (location) {
	return new Promise(function (resolve, reject) {
		setTimeout(function() {
			resolve(79);
			reject('City not found');
		}, 1000);
	});
};

getTempPromise('Espoo').then(function(temp) {
	console.log('promise success', temp);	
}, function(err) {
	console.log('promise error', err);
});

// TEST

function addNumber (a, b) {
	return new Promise(function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('invalid number');
		};
	});
};

addNumber(7, 8).then(function(sum) {
	console.log('Sum = ', sum);
}, function(err) {
	console.log('Promise error: ', err);
});