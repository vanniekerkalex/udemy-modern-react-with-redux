import React from 'react';

class SearchBar extends React.Component {

	state = {
		term: '',
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		
		this.props.onSubmit(this.state.term);
	}

	render () {

		return (
			<div className="ui segment">
				<form action="" onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="search-field">Image Search</label>
						<input id="search-field" type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;