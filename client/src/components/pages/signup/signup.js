import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import './signup.css';
import { Link } from "react-router-dom";

function SignUp (props) {
    const [formState, setFormState] = useState({ username: '' , email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
        variables: {
            username: formState.username,
            email: formState.email,
            password: formState.password,
        },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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
            <div className="signup-card">
                <h2>Signup</h2>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label className="label-h" htmlFor="username">Username:</label>
                        <input
                            placeholder="username"
                            name="username"
                            type="username"
                            id="username"
                            className="input"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
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
                    <div>
                        <label className="label-h" htmlFor="password">Password:</label>
                        <input
                            placeholder="******"
                            name="password"
                            type="password"
                            id="password"
                            className="p-input"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="buttons">
                        <button className="signin-btn"><Link to="/signin" className="text">SignIn</Link></button>
                        <button className="signup-btn" type="submit"><Link to="/profile/id" className="text">SignUp</Link></button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignUp;