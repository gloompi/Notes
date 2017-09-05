let React = require('react');
require('./Note.css');

var Note = React.createClass({
	render: function() {
		var style = {backgroundColor: this.props.color};
		return (
			<div className="note" style={style}>
				{this.props.children}
				<span className='delete-note' onClick={this.props.onDelete}> x </span>
			</div>
		);
	}
});

module.exports = Note;