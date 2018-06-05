// @flow

import React from 'react'
import LazyLoad from 'react-lazyload'
import Placeholder from "./Placeholder";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import grey from "@material-ui/core/es/colors/grey";
import '../../../../styles/css/components/movie.css'
import Paper from "@material-ui/core/es/Paper/Paper";
import {withStyles} from '@material-ui/core/styles';
import CircularProgressbar from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import orange from "@material-ui/core/es/colors/orange";
import green from "@material-ui/core/es/colors/green";
import yellow from "@material-ui/core/es/colors/yellow";
import deepOrange from "@material-ui/core/es/colors/deepOrange";
import oscar from '../../../../static/icons/oscar.png'
import globe from '../../../../static/icons/globe.png'
import Button from "@material-ui/core/es/Button/Button";
import Icon from "@material-ui/core/es/Icon/Icon";
import * as pal from "../../../../styles/palette";
import {createMuiTheme} from "@material-ui/core/styles/index";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import DeleteIcon from '@material-ui/icons/Delete';
import Target from "react-popper/lib/Target";
import {Link} from "react-router-dom";
import * as db from '../../../../remote'
import * as str from "../../../../localization/strings";

type Classes = {
    root: {
        backgroundColor: string,
        height: number,
        width: number
    },
}

type Movie = {
    id: number, //
    title:string,
    poster: string,
    rtscore: number,//
    audscore: number,//
    nwoscars: number,//
    nwglobes: number,//
    date: number,//
    duration: number,//
    useTMDB:boolean
};


const styles = () => ({
    root: {
        backgroundColor: grey[800],
        height: 300,
        width: 250,
        display: 'flex',
        flexDirection: 'row'
    },

});

const getColorFromPercentage = (perc: number) =>
    perc >= 50 ? (perc >= 80 ? green['A700'] : yellow['A400']) : deepOrange['A400'];

const spinnerStyle = {
    text: {
        fontSize: 35,
        fill: grey[50],
        fontFamily: '"Roboto", "Helvetica","Arial",sans-serif'
    }
};

type Props = {
    movie: Movie,
    classes: Classes
}
type State = {
    open: boolean,
    dark:boolean
}

const theme = createMuiTheme({
    palette: pal.palette
});

export const EmptyMovieCard = () =>
    <div className={'emptycard'}/>;

class MovieCard extends React.Component<Props, State> {
    state = {
        open: false,
        dark:false
    };
    target: any;
    target_float:any;

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleDark = () => {
        this.setState({dark: true});
    };

    handleBright = () => {
        this.setState({dark: false});
    };

    render() {
        const {movie, classes} = this.props;
        const lang=str.strings.getLanguage();
        const posterurl=movie.useTMDB?(db.BASE_PATH_TMDB + 'w500/' + movie.poster): movie.poster;
        return (
            <div onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
            {this.state.open ?
                <MuiThemeProvider theme={theme}>
                    {this.state.dark?<div className={"overlay"}/>:null}
                    <div className={"floatingbuttons"} onMouseEnter={this.handleDark} onMouseLeave={this.handleBright}>
                        <Button mini variant="fab" color="primary" aria-label="edit">
                            <Icon>edit_icon</Icon>
                        </Button>
                        <Button mini variant="fab" color="primary" aria-label="edit">
                            <DeleteIcon/>
                        </Button>
                    </div>
                </MuiThemeProvider> : null}

            <LazyLoad height={300} offset={200} placeholder={<Placeholder/>}>

                <div>

                    <Link to='/' style={{ textDecoration: 'none' }}>

                    <Paper classes={{root: classes.root}} elevation={10}>

                        <img src={posterurl} height={300} width={200} alt={movie.useTMDB?movie.title[lang]:movie.title['def']}/>
                        <div className={"movieinfo"}>
                            <div className={"info score"}>
                                <CircularProgressbar
                                    percentage={movie.rtscore}
                                    strokeWidth={10}
                                    initialAnimation={true}
                                    textForPercentage={(pct) => `${pct}`}
                                    styles={{
                                        ...spinnerStyle, path: {
                                            stroke: getColorFromPercentage(movie.rtscore)
                                        }
                                    }}/>
                            </div>
                            <div className={"info score2"}>
                                <CircularProgressbar
                                    percentage={movie.audscore}
                                    strokeWidth={10}
                                    initialAnimation={true}
                                    textForPercentage={(pct) => `${pct}`}
                                    styles={{
                                        ...spinnerStyle, path: {
                                            stroke: getColorFromPercentage(movie.audscore)
                                        }
                                    }}/>
                            </div>
                            <div className={"info prizes"}>
                                {movie.nwoscars > 0 ?
                                    <div><img src={oscar} height={40}/></div>
                                    : ''}
                                {movie.nwglobes > 0 ?
                                    <div><img src={globe} height={40}/></div>
                                    : ''}
                            </div>
                            <div className={"info gen"}>
                                {movie.duration + "'"}
                            </div>
                            <div className={"info gen"}>
                                {movie.date}
                            </div>
                            <div className={"info id"}>
                                {movie.id}
                            </div>
                        </div>

                    </Paper>
                    </Link>
                </div>

            </LazyLoad>
            </div>

        );

    }

}


export default withStyles(styles)(MovieCard);