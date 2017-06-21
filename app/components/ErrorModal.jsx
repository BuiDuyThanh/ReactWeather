var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
	getDefaultProps: function () {
		return {
			title: 'Error'
		};
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	// Reason why we render a empty plain <div> is because after React put elements in the DOM, Foundation manipulate (remove) the browser DOM/elements.
	// React needs to be able to maintain the application's state. React automatically re-render components everytime things change

	componentDidMount: function () {
		var {title, message} = this.props;
		var modalMarkup = (				// put this HTML in componentDidMount helps us to render HTML after first render and Foundation's manipulation
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));		// jQuery
		$(ReactDOM.findDOMNode(this)).html($modal);						// jQuery

		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},

	// because Foundation manipulates the DOM, so give it a plain <div>, prevent them to change it.
	render: function () {
		return (
			<div>
			</div>
		);
	}

	/*

	// Rendering directly raises an error that after typing in invalid input, the ErrorModal appears and we cannont continue to search for other locations
	
	render: function () {
		var {title, message} = this.props;
		
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
		);
	}
	*/	
});


module.exports = ErrorModal;