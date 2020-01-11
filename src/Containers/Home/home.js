import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextField from '../../Components/TextField/textfield'

import Appbar from '../../Components/Appbar/appBar'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            todo : [],
            value : ''
        }
    }
    
    value = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.value] : e.target.value
        })
    }
    addTodo(){
        alert('Add')
    }
    render(){
        console.log(this.state)
        return(
            <div>
            <Appbar/>
            <br/>
            <br/>
            <Grid container justify='center'>
                <Grid item xs={11} sm={10} md={6} lg={5}>
                    <Paper style={{textAlign:'center',padding : '5%'}}>
                        <h1>ToDo App</h1>
                <TextField label='Enter Value' onChange={(e)=> this.value(e)} width='100%'/>
                <br/>
                <Button variant="contained" color="primary" 
                onClick={this.addTodo.bind(this)}
                style={{
                    backgroundColor: 'darkcyan',
                    width: '30%',
                    }} >Add</Button>
                </Paper>
                </Grid>
                </Grid>
            </div>
        )
    }
}
export default Home