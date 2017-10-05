const container = document.getElementById("ourFirstApp");

class ChildComponent extends React.Component {

	render() {
		console.log('Child: render')
		return (
			<div>Props: {this.props.name}</div>
		);
	}
}


class ParentComponent extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			text: 'please enter some text'
		};
		this.onInputChange = this.onInputChange.bind(this); 
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
