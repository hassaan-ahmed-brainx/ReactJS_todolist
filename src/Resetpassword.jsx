
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';



export const Resetpassword = () => {

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/');
        
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
                                <h2 class="fw-bold mb-2 text-black">Reset Password</h2>
                                <p class="text-black-50 mb-5">Please enter new Password</p>
        
                                <div class="form-outline form-black mb-4">
                                    <input type="password" id="typeEmailX" class="form-control form-control-lg" required/>
                                    <label class="form-label" for="typeEmailX">Password</label>
                                </div>

                                <div class="form-outline form-black mb-4">
                                    <input type="password" id="typeEmailX" class="form-control form-control-lg" required/>
                                    <label class="form-label" for="typeEmailX">Re-enter Password</label>
                                </div>
    
        
                                <button class="btn btn-outline-dark btn-lg px-5" type="submit">Reset</button>
        
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

