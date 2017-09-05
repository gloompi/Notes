let ReactDOM = require('react-dom');
let React = require('react');
let NotesApp = require('./components/NotesApp.jsx');

ReactDOM.render(
	<NotesApp />,
	document.getElementById('mount-point')
);