import React from 'react'
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import {Link} from "react-router-dom";

const ConfimDialog=({open,text})=>{
    return(
        <Dialog open={open}>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
                <DialogActions>
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <Button variant="raised" color="primary">
                            OK
                        </Button>
                    </Link>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
};

export default ConfimDialog;