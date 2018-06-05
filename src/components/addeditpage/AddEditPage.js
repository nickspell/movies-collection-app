import React from 'react';
import {Field, reduxForm} from "redux-form";


type Movie = {
    id: number, //
    title: string,
    poster: string,
    rtscore: number,//
    audscore: number,//
    nnoscars: number,//
    nwoscars: number,//
    nnglobes: number,//
    nwglobes: number,//
    date: number,//
    duration: number,//
    resolution: string,
    hd: string,
    trailer: string,
    catchy:string,
    description:string,
    genres:[string],
    useTMDB:boolean
};



let AddEditPage=({movie}:{movie:Movie})=>{

};


AddEditPage = reduxForm({
        form: 'addetitPage'
    }
)(AddEditPage);
export default AddEditPage;
