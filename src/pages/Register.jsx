import { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onUsernameChange = (e) => setUsername(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="p-4 bg-gray-200 rounded-lg" onSubmit={onSubmit}>
                <h1 className="text-2xl font-bold">Register</h1>

                <div className="mb-4">
                    <label for="username">Username</label>
                    <input type="text" id="username" className="w-full p-2 border rounded" value={username} onChange={onUsernameChange} />
                </div>

                <div className="mb-4">
                    <label for="email">Email</label>
                    <input type="email" id="email" className="w-full p-2 border rounded" value={email} onChange={onEmailChange} />
                </div>

                <div className="mb-4">
                    <label for="password">Password</label>
                    <input type="password" id="password" className="w-full p-2 border rounded" value={password} onChange={onPasswordChange} />
                </div>

                <div className="mb-4">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="w-full p-2 border rounded" value={confirmPassword} onChange={onConfirmPasswordChange} />
                </div>

                <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;