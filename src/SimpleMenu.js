import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


class SimpleMenu extends Component {
    constructor(){
        super(); 
        this.state={
            anchorEl:''
        }
    }

    handelClick=(e)=>{
        this.setState({
            anchorEl:e.currentTarget
        })
    }

    handleClose=(e)=>{
        this.setState({
            anchorEl:''
        });
    }
    render() {
        return (
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handelClick.bind(this)}>Open Menu</Button>
                <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default SimpleMenu;