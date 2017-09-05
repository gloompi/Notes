let React = require('react');
require('./NoteEditor.css')

var NoteEditor = React.createClass({
	getInitialState: function() {
		return {
			text: '',
			color: 'yellow'
		};
	},

	handleTextChange: function(event) {
		this.setState({ text: event.target.value });
	},

	handleColorChange: function(event) {
		this.setState({ color: event.target.value });
	},

	handleNoteAdd: function() {
		var newNote = {
			text: this.state.text,
			color: this.state.color,
			id: Date.now()
		};

		this.props.onNoteAdd(newNote);
		this.setState({ text: ''});
	},

	render: function(){
		return (
			<div className='note-editor'> 
				<textarea placeholder="Enter your note here..." 
					rows={5} 
					className='textarea'
					value={this.state.text} 
					onChange={this.handleTextChange}
				/>
				<input className='color-picker' 
					type='color' 
					value={this.state.color}
					onChange={this.handleColorChange}
				/>
				<button className='add-button' onClick={this.handleNoteAdd}>Add</button>
			</div>
		);
	}
});

module.exports = NoteEditor;