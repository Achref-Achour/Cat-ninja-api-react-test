import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './card.css'


export default class OutlinedCard extends React.Component {
    constructor(props) {
        super();
        
    }
    render(){  
    return (
        
        <Card variant="outlined"  className='card' >
           <CardContent>
        
        <b>{this.props.data.breed}</b><br/>
        <Typography variant="body2" color="text.secondary">
        coat: {this.props.data.coat}<br/>
        country: {this.props.data.country}<br/>
        origin: {this.props.data.origin}<br/>
        pattern: {this.props.data.pattern}<br/>
        </Typography>
        
      </CardContent>
        </Card>
        
    );
    }
}