// @flow
import React from 'react';
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import Typography from "@material-ui/core/es/Typography/Typography";
import '../../styles/css/components/moviedetails.css'
import grey from "@material-ui/core/es/colors/grey";
import * as str from '../../localization/strings';
import Button from "@material-ui/core/es/Button/Button";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core/styles/index";
import orange from "@material-ui/core/es/colors/orange";

type Props={
    description:string
};

type State={
    open:boolean,
    height:number
};

const theme = createMuiTheme({
    overrides: {
        MuiButton:{
            root:{
                fontSize:'0.9rem',
                textTransform:'none'
            }
        }
    }
});

class Description extends React.Component<Props,State>{
    state={
        open:false,
        height:0,
    };

    paragraph:any;

    componentDidMount() {
        this.updateHeight();
        window.addEventListener("resize", this.updateHeight);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight);
    }

    componentDidUpdate() {
        this.updateHeight();
    }

    handleOpenToggle=()=>{
        console.log(this.paragraph.clientHeight);
        this.setState({open:!this.state.open})
    };

    updateHeight=()=> {
        if (this.state.height !== this.paragraph.clientHeight)
            this.setState({ height: this.paragraph.clientHeight })
    };

    render(){
        return(
            <div className={'descr'}>
                <Collapse  in={this.state.open} collapsedHeight='60px'>
                    <div ref={ (paragraph) => this.paragraph = paragraph} >
                        <Typography paragraph color='inherit' align={'justify'}>
                            {this.props.description}
                        </Typography>
                    </div>
                </Collapse>
                {this.state.height>60?<div className={'expand'}>
                    <MuiThemeProvider theme={theme}>
                        <Button color="inherit" onClick={this.handleOpenToggle}>
                            {this.state.open?str.strings.showless:str.strings.showall}
                        </Button>
                    </MuiThemeProvider>
                </div>:''}

            </div>
        );

    }

}


export default Description;
