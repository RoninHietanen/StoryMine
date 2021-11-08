import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import './signup.css';

function SignUp (props) {
    const [formState, setFormState] = useState({ email: '', password: '', username: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
        variables: {
            email: formState.email,
            password: formState.password,
            username: formState.username,
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
                        <button className="signin-btn" type="submit">SignIn</button>
                        <button className="signup-btn" type="submit">SignUp</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignUp;