import * as React from 'react';
import axios from 'axios';
import HoverTooltip from "./Tooltip"; 
import Grid from '@mui/material/Grid';

export default class GridOfCards extends React.Component {
  state = {
    breeds : []
  };

  componentDidMount() {
    axios.get('https://catfact.ninja/breeds?limit=25').then(res=>{
      this.setState({breeds: res.data.data});
    });
    }

render(){
  return (

    <Grid container >
        {this.state.breeds.map(breed=> 
        <Grid item xs>
        <HoverTooltip data={breed} /> 
        </Grid>
        )}
        
    </Grid>
      
    
    );
}
  
}