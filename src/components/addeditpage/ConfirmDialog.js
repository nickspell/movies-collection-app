//@flow
import React from 'react'
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import {withRouter} from "react-router";

const ConfimDialog=withRouter(({open,text,onClick,history})=>{
    return(
        <Dialog open={open}>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
                <DialogActions>
                        <Button variant="raised" color="primary" onClick={()=>{onClick();history.push("/")}}>
                            OK
                        </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
});



export default ConfimDialog;