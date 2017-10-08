const ChildComponent = React.createClass({
	propTypes: {
		name: PropTypes.string,
	},

	getInitialState: function() {
		console.log("ChildComponent: getInitState");
		return {
			name: "mark",
		}
	},

	render: function() {
		console.log("ChildComponent: render");
		return (
			<div> Props: {this.props.name} </div>
		);
	}
});

const ParentComponent = React.createClass({
	getDefaultProps: function() {
		console.log('ParentComponent: getDefaultProps');
	},

	getInitialState: function() {
		console.log('ParentComponent: getInitState');
		return { text: ''};
	},

	onInputChange: function(e) {
		console.log('Parent onChange called');
		this.setState({text: e.target.value})
	},

	render: function() {
		console.log('ParentComponent: render');
		return(
			<div className="container">
				<h2>Learn about rendering and lifecycle methods!</h2>
				<input 
					value={this.state.text}
					onChange={this.onInputChange}
				/>

			<ChildComponent name={this.state.text} />
			</div>
			

		)
	}
});

ReactDOM.render(
	<ParentComponent />,
	document.getElementById("ourFirstApp")
)