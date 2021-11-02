import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import './signup.css';

function SignUp (props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
        variables: {
            email: formState.email,
            password: formState.password,
            firstName: formState.firstName,
            lastName: formState.lastName,
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
                            type="firstName"
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
                    <div className="buttons">
                        <button className="signin-btn" type="submit">SignIn</button>
                        <button className="signup-btn" type="submit">SignUp</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignUp;