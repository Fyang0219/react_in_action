const container = document.getElementById("ourFirstApp");

class ChildComponent extends React.Component {

	constructor(props) {
		super(props); 
		
	}

	render() {
		console.log('Child: rendered')

		return (
			<div>Props: {this.props.name}</div>
		);
	}
}

ChildComponent.propTypes = {
	name: PropTypes.string.isRequired,
};


class ParentComponent extends React.Component {

	static defaultProps: {
		count: 1
	}
	
	constructor(props) {
		super(props); 
		this.state = {
			text: 'please enter some text'
		};
		this.onInputChange = this.onInputChange.bind(this); 
		console.log('ParentComponent: get initialState');
	}

	componentWillMount() {
		console.log('ParentComponent: componentWillMount');
	}

	componentDidMount() {
		console.log('ParentComponent: componentDidMount');
	}

	onInputChange(e) {
		this.setState({ text: e.target.value });
	}

	render() {
		console.log('Parent: render');

		return (
			<div className="container">
				<h2> Learn about rendering and lifecycle methods!</h2>
				<input 
					value={this.state.text}
					onChange={this.onInputChange}
				/>
				<ChildComponent name={this.state.text} />
			</div>
		);
	}
}




ReactDOM.render(
	<ParentComponent />,
	container
)
