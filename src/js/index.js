var React = require('react');
var ReactDOM =  require('react-dom');
import { hot } from 'react-hot-loader';

import BodyIndex from './components/bodyindex.js';
import ComponentHeader from './components/Header.js';

class Index  extends React.Component {
	render() {
		return (
			<div>
				<ComponentHeader />
				<BodyIndex />
			</div>
		);
	}
}


ReactDOM.render(
		<Index />,
		document.getElementById("example")
	);