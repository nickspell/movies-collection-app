// @flow
import React from 'react';
import '../../../../styles/css/components/spinner.css'
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import orange from "@material-ui/core/es/colors/orange";




const Placeholder=()=> {
    return (
        <div className="placeholderMovie">
            <CircularProgress   size={80} style={{ color: orange[800] }} />
        </div>
    );
};

export default Placeholder;