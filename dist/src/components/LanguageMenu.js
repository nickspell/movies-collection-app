import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Portal from '@material-ui/core/Portal';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import classNames from 'classnames';
import FlagIcon from "./FlagIcon";
import languages from '../localization/languages';

const styles = theme => ({
    root: {
        display: 'flex'
    },
    paper: {
        marginRight: theme.spacing.unit * 2
    },
    popperClose: {
        pointerEvents: 'none'
    }
});

//TODO add dispatch to languageselect action
class LanguageMenu extends React.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            open: false
        }, this.handleToggle = () => {
            this.setState({ open: !this.state.open });
        }, this.handleClose = event => {
            if (this.target.contains(event.target)) {
                return;
            }

            this.setState({ open: false });
        }, _temp;
    }

    render() {
        const { classes, activeLanguage } = this.props;
        const { open } = this.state;
        const size = 'lg';

        console.log(typeof this.target);
        return React.createElement(
            'div',
            { className: classes.root },
            React.createElement(
                Manager,
                null,
                React.createElement(
                    Target,
                    null,
                    React.createElement(
                        'div',
                        {
                            ref: node => {
                                this.target = node;
                            }
                        },
                        React.createElement(
                            Button,
                            {
                                'aria-owns': open ? 'menu-list-collapse' : null,
                                'aria-haspopup': 'true',
                                onClick: this.handleToggle
                            },
                            React.createElement(FlagIcon, { code: activeLanguage, size: size })
                        )
                    )
                ),
                React.createElement(
                    Portal,
                    null,
                    React.createElement(
                        Popper,
                        {
                            placement: 'bottom',
                            eventsEnabled: open,
                            className: classNames({ [classes.popperClose]: !open })
                        },
                        React.createElement(
                            ClickAwayListener,
                            { onClickAway: this.handleClose },
                            React.createElement(
                                Collapse,
                                { 'in': open, id: 'menu-list-collapse', style: { transformOrigin: '0 0 0' } },
                                React.createElement(
                                    Paper,
                                    { style: { margin: 3 } },
                                    React.createElement(
                                        MenuList,
                                        { role: 'menu' },
                                        'Object.keys(languages).forEach((key: string,language : )=> ',
                                        React.createElement(
                                            MenuItem,
                                            { onClick: this.handleClose },
                                            React.createElement(FlagIcon, { code: key, size: size }),
                                            ' ',
                                            React.createElement(
                                                'span',
                                                null,
                                                'Ciao'
                                            )
                                        ),
                                        ');'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }

}

export default withStyles(styles)(LanguageMenu);
//# sourceMappingURL=LanguageMenu.js.map