import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';


export const Signup = () => {


  const navigate = useNavigate();

  function handleSubmit(e) {
        e.preventDefault();
        navigate('/');
        
  }

  return(


        <MDBContainer fluid className='vh-100 d-flex align-items-center justify-content-center bg-image-signup signuppage-textalign p-5'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='mask gradient-custom-3'></div>
                        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                        <MDBCardBody className='signup-padding'>
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                        <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' required/>
                        <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' required/>
                        <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' required/>
                        <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' required/>
                        <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' required/>
                        </div>
                        <button class="btn btn-outline-dark btn-lg px-5" type="submit">Register</button>
                        <p class="mb-0 mt-5">Go to Login Page? <Link to='/'> Login</Link></p>
                         </MDBCardBody>
                        </MDBCard>
                    </form>
        
      </MDBContainer>

  );


}