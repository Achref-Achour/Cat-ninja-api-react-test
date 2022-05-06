import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Card from"./Card";
import axios from 'axios';

export default class HoverTooltip extends React.Component {
    constructor(props) {
        super();
        this.state = {
            fact:""
        };
    }


  
  componentDidMount() {
      axios.get('https://catfact.ninja/fact').then(res=>{
        this.setState({fact: res.data.fact});

    });
    }
    

render(){
  return (
        <Tooltip title={this.state.fact} >
            <IconButton>
            <Card data={this.props.data}  /> 
            </IconButton>
        </Tooltip>
    
    
    );
}
  
}