var React = require('react');
var ReactDOM =  require('react-dom');
import BodyIndex from './components/bodyindex.js';

class Index  extends React.Component {
	render() {
		return (
			<div>
				<BodyIndex />
			</div>
		);
	}
}


ReactDOM.render(
		<Index />,
		document.getElementById("example")
	);