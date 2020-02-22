import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class MyComponent extends React.Component {

    getBtn = (
        <Button variant="contained" color="secondary">Get Score</Button>
    );

    setBtn = (
        <Button variant="contained" color="primary">Set Score</Button>
    );

    scoreField = (
        <p>
            <form noValidate autoComplete="off">
                <TextField id="filled-basic" label="Enter your new score" variant="filled" />
            </form>
        </p>
    );


    constructor() {
        super();
        this.state = { color: "grey" }
    }
    
    render() {
        return <div>{this.scoreField}{this.getBtn}{this.setBtn}</div>;
    }
}




export default MyComponent;