const container = document.getElementById('ourFirstApp');

class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState( (previousState, currentProps) => ({count: previousState.count + currentProps.incrementBy}));
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.onButtonClick}>+</button>
			</div>
		)
	}
}

Counter.defaultProps = {
	incrementBy: 2
};

Counter.propTypes = {
    incrementBy: React.PropTypes.number,
    name: React.PropTypes.string,
    counterStyle: React.PropTypes.shape({
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
    }),
    // onIncrement: React.PropTypes.func.isRequired

};



ReactDOM.render(
	<Counter />,
	container
)



