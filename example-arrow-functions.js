names = ['Thanh', 'Linh', 'Peter', 'John'];

names.forEach(function(name) {
	console.log('forEach ', name)
});

names.forEach((name) => {
	console.log('arrFunction ', name)
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Thanh'));

var person = {
	name: 'Thanh',
	greet: function() {
		names.forEach((name) => {		// using anonymous causes this.name undefined, arrow function still refers to current object
			console.log(this.name + ' says hi to ' + name)
		});
	}
}; 

person.greet();

var addStatement = (a, b) => {
	return a + b;
};
console.log(addStatement(1, 2));

var addExpression = (a, b) => a + b;
console.log(addExpression(2, 3));