// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
	handleSearchTermChange(event) {
		dispatch(setSearchTerm(event.target.value));
	}
});

@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.Component {
	props: {
		showSearch?: boolean,
		handleSearchTermChange: Function,
		searchTerm: string
	};

	render() {
		let utilSpace;
		if (this.props.showSearch) {
			utilSpace = (
				<input
					type="text"
					placeholder="Search"
					value={this.props.searchTerm}
					onChange={this.props.handleSearchTermChange}
				/>
			);
		} else {
			utilSpace = (
				<h2 className="header-back">
					<Link to="/search">
						Back
					</Link>
				</h2>
			);
		}

		return (
			<header>
				<h1>
					<Link to="/">
						svideo
					</Link>
				</h1>
				{utilSpace}
			</header>
		);
	}
}

Header.defaultProps = {
	showSearch: false
};

export default Header;
