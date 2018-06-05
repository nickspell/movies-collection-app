// @flow

import React from 'react'
import * as str from "../../../../localization/strings";
import {Manager, Target, Popper} from 'react-popper';
import Button from "@material-ui/core/es/Button/Button";
import {createMuiTheme, withStyles} from "@material-ui/core/styles/index";
import ClickAwayListener from "@material-ui/core/es/ClickAwayListener/ClickAwayListener";
import Paper from "@material-ui/core/es/Paper/Paper";
import MenuList from "@material-ui/core/es/MenuList/MenuList";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import classNames from 'classnames';
import * as pal from "../../../../styles/palette";
import grey from "@material-ui/core/es/colors/grey";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grow from "@material-ui/core/es/Grow/Grow";
import orange from "@material-ui/core/es/colors/orange";
import SvgIcon from "@material-ui/core/es/SvgIcon/SvgIcon";


const path_ascending = 'M736 1440q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm1056 128v192q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23zm-192-512v192q0 14-9 23t-23 9h-640q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23zm-192-512v192q0 14-9 23t-23 9h-448q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h448q14 0 23 9t9 23zm-192-512v192q0 14-9 23t-23 9h-256q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h256q14 0 23 9t9 23z';
const path_descending = 'M1216 1568v192q0 14-9 23t-23 9h-256q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h256q14 0 23 9t9 23zm-480-128q0 12-10 24l-319 319q-10 9-23 9-12 0-23-9l-320-320q-15-16-7-35 8-20 30-20h192v-1376q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23zm672-384v192q0 14-9 23t-23 9h-448q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h448q14 0 23 9t9 23zm192-512v192q0 14-9 23t-23 9h-640q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23zm192-512v192q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23z';


type Classes = {
    root: {
        display: string
    },
    paper: {
        marginRight: number
    },
    popperClose: any
}

type Props = {
    classes: Classes,
    selectedSort: string,
    ascending: boolean
};

type State = {
    open: boolean
};

const styles = theme => ({
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

const themez = createMuiTheme({
    palette: {
        ...pal.palette,
        secondary: {main: grey[300]},
        text: {
            primary: grey[800],
            secondary: grey[50]
        },

    },
    overrides: {
        MuiButton: {
            root: {
                //background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
                borderRadius: 10,
            },
        },
    }
});

const themeIcon = createMuiTheme({
    palette: {
        ...pal.palette,
        primary:{main:grey[800]},
        secondary: {main: grey[300]},
        text: {
            primary: grey[800],
            secondary: grey[50]
        },

    },
    overrides: {
        MuiButton: {
            root: {
                //background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
                borderRadius: 10,
                border: 0,
                minHeight: 0,
                minWidth:0,
                paddingLeft:10,
                paddingRight:10,
                paddingTop:6,
                paddingBottom:6,
                borderWidth:4
            },
        },
    }
});


//TODO add dispatch to ordering action
class OrderingMenu extends React.Component<Props, State> {
    state = {
        open: false
    };

    target: any;

    handleToggle = () => {
        this.setState({open: !this.state.open});
    };

    handleClose = (event: Event) => {
        if (this.target.contains(event.target)) {
            return;
        }

        this.setState({open: false});
    };

    render() {
        const {classes, selectedSort, ascending} = this.props;
        const {open} = this.state;
        let sortBy = {
            id: {
                paramName: 'id',
                longName: 'ID'
            },
            title: {
                paramName: 'title',
                longName: str.strings.titleButton
            },
            duration: {
                paramName: 'duration',
                longName: str.strings.duration
            },
            date: {
                paramName: 'date',
                longName: str.strings.orderDate
            },
            rtscore: {
                paramName: 'rtscore',
                longName: 'RT Score'
            },
            audscore: {
                paramName: 'audscore',
                longName: 'Audience Score'
            },


        };
        return (
            <div className={"order"}>
                <MuiThemeProvider theme={themeIcon}>
                    <Button variant={"raised"}
                            color={"secondary"} onClick={() => {
                        console.log('order toggle');
                    }} style={{marginRight:5}}>
                        <SvgIcon color={"primary"} viewBox={"0 0 1792 1792"} style={{transform:"scale(0.7)"}}>
                            <path d={ascending ? path_ascending : path_descending}/>
                        </SvgIcon>
                    </Button>
                </MuiThemeProvider>
                <MuiThemeProvider theme={themez}>
                    <Manager>
                        <Target>
                            <div
                                ref={node => {
                                    this.target = node;
                                }}
                            >
                                <Button
                                    variant={"raised"}
                                    color={"secondary"}
                                    aria-owns={open ? "menu-list-grow" : null}
                                    aria-haspopup="true"
                                    onClick={this.handleToggle}
                                >
                                    {str.strings.sortButton}
                                </Button>
                            </div>
                        </Target>
                        <Popper
                            placement="bottom-start"
                            eventsEnabled={open}
                            className={classNames({[classes.popperClose]: !open})}
                        >
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <Grow
                                    in={open}
                                    id="menu-list-grow"
                                    style={{transformOrigin: "0 0 0"}}
                                >
                                    <Paper>
                                        <MenuList role="menu">
                                            {Object.keys(sortBy).map(key => {
                                                let style = (key === selectedSort) ?
                                                    {color: orange[800], fontWeight: 'bold'} :
                                                    {};
                                                return (
                                                    <MenuItem key={key} onClick={(event) => {
                                                        console.log(key + ' clicked');
                                                        this.handleClose(event);
                                                    }}
                                                    > {/*TODO add dispatcher*/}
                                                        <span style={style}>{sortBy[key].longName}</span>
                                                    </MenuItem>);
                                            })};
                                        </MenuList>
                                    </Paper>
                                </Grow>
                            </ClickAwayListener>
                        </Popper>
                    </Manager>
                </MuiThemeProvider>
            </div>
        )
    }

}

export default withStyles(styles)(OrderingMenu);