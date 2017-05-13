var React = require('react');
var {Link, IndexLink} = require('react-router');

/*
var Nav = React.createClass({
	render: function () {
		return (
			<div>
				<h2>Nav Component</h2>
				<IndexLink to="/" activeClassname="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
				<Link to="/about" activeClassname="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/examples" activeClassname="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
			</div>
		);
	}
});
*/

var Nav = () => {
	return (
		<div>
			<h2>Nav Component</h2>
			<IndexLink to="/" activeClassname="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassname="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassname="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
		</div>
	);	
};
module.exports = Nav;