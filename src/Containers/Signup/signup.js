import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '../../Components/TextField/textfield'
import Button from '@material-ui/core/Button';
import Appbar from '../../Components/Appbar/appBar'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { connect } from 'react-redux'
import { Signup } from './../../Config/Store/action'
import './Signup.css'
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName:"",
            email: '',
            password: ''

        }
        this.textInput = React.createRef();
        this.textInput1 = React.createRef();

    }
signupFunc=()=>{
  console.log(this.textInput);
    if(this.state.fullName===""){
        this.textInput.current.focus();
        console.log(this.textInput.current)
    }
    else if(this.state.email===""){
      this.textInput1.current.focus();

    }
    else{

        this.props.sendData(this.state,this.props.history)
    }
}
    render() {

        return (
            <div>
            <br/><br/><br/>
            
                <MDBContainer>
      <MDBRow center>
        <MDBCol md="6" lg="5">
          <MDBCard >
            <MDBCardBody>
              <form>
                  <center>
                <p style={{backgroundColor:"#26a69a",color:"white"}} className="h4 text-center py-4">Sign up</p>
                </center>
                
          
                <div className="grey-text">
                <div class="input-field col s12">
          <input id="fullname" type="text" class="validate" 
            ref={this.textInput}
           onChange={(e)=>this.setState({fullName:e.target.value})}
          />
          <label for="fullname">FullName</label>
        </div>


        <div class="input-field col s12">
          <input id="Email" type="email" class="validate" 
               ref={this.textInput1}
           onChange={(e)=>this.setState({email:e.target.value})}
          />
          <label for="Email">Email</label>
        </div>


        <div class="input-field col s12">
          <input id="Password" type="password" class="validate" 
        
           onChange={(e)=>this.setState({password:e.target.value})}
          />
          <label for="Password">Password</label>
        </div>
                  
                </div>
                <div className="text-center">

  <a style={{backgroundColor:"#26a69a",height:40,width:150}} onClick={()=>this.signupFunc()} class="waves-effect waves-light btn">button</a>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                <div id="snackbar" className={this.props.snackBar}>{this.props.signupErr}</div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
        signupErr: state.SignupErr,
        snackBar: state.snackBar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendData: (data,path) => dispatch(Signup(data,path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

