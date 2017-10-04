const container = document.getElementById("ourFirstApp");

// function Greeting(props) {
// 	return <div>Hello {props.for}!</div>;
// }

// Greeting.propTypes = {
// 	for: React.PropTypes.string.isRequired
// };

// Greeting.defaultProps = {
// 	for: 'hi'
// };

// ReactDOM.render(
// 	<Greeting for="Mark" />, container)


const Greeting = (props) => <div>Hello {props.for}</div>;

ReactDOM.render(
	<Greeting for="Mark" />, container)

