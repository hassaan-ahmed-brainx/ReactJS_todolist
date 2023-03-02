import React from 'react';
import { Link} from 'react-router-dom';



export const Page404 = () => {

    return(
        <div>
            <h1>Account Not Found</h1>
            <p class="mb-0">Don't have an account? <Link to='/Signup'> Signup</Link>
            </p>
        </div>
        
    );

}