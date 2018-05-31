import React from 'react';
import '../styles/css/components/searchbar.css';
import logo from '../static/icons/silo.jpg';
import SearchBar from "./SearchBar";

const Header = () => {
    return React.createElement(
        'div',
        { className: "back" },
        React.createElement(
            'div',
            { className: "wrapper" },
            React.createElement('img', { src: logo, alt: 'Movie Collection logo', className: "logo" }),
            React.createElement(
                'div',
                { className: 'title-container' },
                React.createElement(
                    'div',
                    { className: "pretitle" },
                    'My '
                ),
                React.createElement(
                    'div',
                    { className: "title" },
                    'Movie Collection'
                )
            ),
            React.createElement(SearchBar, { activeLanguage: "it", filterById: false })
        )
    );
};

export default Header;
//# sourceMappingURL=Header.js.map