// @flow
import React from "react"
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
import * as lang from '../../localization/languages'


type Classes={
    root:{[string]:string},
    paper:{[string]:string},
    popperClose:any
}

type Props={
    classes:Classes,
    activeLanguage:string,
    onLanguageChange: Function
};

type State={
    open: boolean
};

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    popperClose: {
        pointerEvents: 'none',
    },
});


//TODO add dispatch to languageselect action
class LanguageMenu extends React.Component<Props,State>{
    state={
        open:false
    };

    target: any;

    handleToggle = () => {
        this.setState({ open: !this.state.open });
    };

    handleClose = (event:Event) => {
        if (this.target.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };

    render(){
        const {classes,activeLanguage,onLanguageChange}=this.props;
        const {open}=this.state;
        const size='lg';
        return(
            <div className={classes.root}>
                <Manager>
                    <Target>
                        <div
                            ref={node => {
                                this.target = node;
                            }}
                        >
                            <Button
                                aria-owns={open ? 'menu-list-collapse' : null}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                            >
                                <FlagIcon code={activeLanguage} size={size} />
                            </Button>
                        </div>
                    </Target>
                    <Portal>
                        <Popper
                            placement="bottom"
                            eventsEnabled={open}
                            className={classNames({ [classes.popperClose]: !open })}
                            style={{zIndex:2000}}
                        >
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <Collapse in={open} id="menu-list-collapse" style={{ transformOrigin: '0 0 0'}}>
                                    <Paper style={{ margin: 3}}>
                                        <MenuList role="menu">
                                            {Object.keys(lang.languages).map(key=> {
                                                return(
                                            <MenuItem key={key} onClick={(event)=>{onLanguageChange(key);this.handleClose(event)}}>
                                                <FlagIcon code={key} size={size} />
                                                <div style={{marginLeft:"10px"}}>{lang.languages[key].name}</div>
                                            </MenuItem>);
                                        })};
                                        </MenuList>
                                    </Paper>
                                </Collapse>
                            </ClickAwayListener>
                        </Popper>
                    </Portal>
                </Manager>
            </div>
        )
    }

}

export default withStyles(styles)(LanguageMenu);