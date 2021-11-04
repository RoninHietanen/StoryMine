import React, { useState }  from 'react';
import './signin.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

function SignIn (props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
        const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
        } catch (e) {
        console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
        ...formState,
        [name]: value,
        });
    };

    return (
        <div>
            <div className="signin-card">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="email">
                    <label className="label-h" htmlFor="email">Email:</label>
                    <input
                        placeholder="johndoe@mail.com"
                        name="email"
                        type="email"
                        id="email"
                        className="e-input"
                        onChange={handleChange}
                    />
                </div>
                <div className="password">
                    <label className="label-h" htmlFor="pwd">Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        className="p-input"
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                </div>
                ) : null}
                <div className="buttons">
                    <button className="signin-btn" type="submit">SignIn</button>
                    <button className="signup-btn" type="submit">SignUp</button>
                </div>
            </form>
            </div>  

        </div>
    );
}

export default SignIn;