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

ReactDOM.render(
	<Counter incrementBy={1}/>,
	container
)