import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';



export const Login = () => {

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const email =  document.getElementById('typeEmailX').value;
        const password =  document.getElementById('typePasswordX').value;

        if(email ==='ali@gmail.com' && password ==='12345')
        {
            navigate('/Todolist');
        }
        else
        {
            alert("Invalid Email or Password")
        }

      }

    return (
        <section class="vh-100 gradient-custom-login">
            <form action="" onSubmit={handleSubmit}>
            <div class="container py-5 h-100 ">
                <div class="row d-flex justify-content-center align-items-center h-100 ">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
                        <div class="card bg-light text-black" >
                            <div class="card-body p-5 text-center">
                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <h2 class="text-dark sfw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-dark-50 mb-5">Please enter your login and password!</p>
  
                                    <div class="form-outline form-black mb-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg" required />
                                        <label  class="form-label" for="typeEmailX">Email</label>
                                    </div>
  
                                    <div class="form-outline form-black mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg" required/>
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>
  
                                    <p class="small mb-5 pb-lg-2"><Link text-dark to='/Forgetpassword'> Forget Password?</Link></p>
  
                                    <button class="btn btn-outline-dark btn-lg px-5" type="submit">Login</button>
  

                                </div>
                                <div>
                                        <p class="mb-0">Don't have an account? <Link to='/Signup'> Signup</Link>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </form>

        </section>
    );
    
}

// export default Login