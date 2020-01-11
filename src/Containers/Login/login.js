import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
  MDBAlert 
} from "mdbreact";
import "./login.css";
import AlertPage from './../../Components/alerts/alert'

class ClassicFormPage extends React.Component {
   constructor(){
       super();
       this.state={
           alert:""
       }
   }

alertFunc=()=>{
    this.setState({
        alert:               
        <MDBAlert  color="danger" >
            <b>Email is required</b>
              </MDBAlert>
       
    })

    setTimeout(()=>{
    this.setState({
        alert:""
    })
    },1000)
}

  render() {
    
    return (
      <div id="classicformpage">


        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow center> 


                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h1 className="text-center" >
                           Login
                        </h1>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your name"
                          icon="user"
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="white" onClick={()=>this.alertFunc()}>LOgin</MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="facebook"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                                className="white-text"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="instagram"
                                className="white-text"
                              />
                            </a>
                          </div>
                        </div>
                        <AlertPage>{ this.state.alert }</AlertPage>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

      </div>
    );
  }
}

export default ClassicFormPage;