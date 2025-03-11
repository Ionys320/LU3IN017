import { useContext, useState } from "react";
import { UserContext } from "../contexts";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`Email: ${email}, Password: ${password}`);
        setUser({
            id: 1,
            username: "MeowMeow",
            avatar: "https://avatars.githubusercontent.com/u/139426?s=400&u="
        })
    }

    return (
        <div class="flex items-center justify-center h-screen">
            <form class="p-4 bg-gray-200 rounded-lg">
                <h1 class="text-2xl font-bold">Login</h1>

                <div class="mb-4">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="w-full p-2 border rounded" value={email} onChange={onEmailChange} />
                </div>

                <div class="mb-4">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="w-full p-2 border rounded" value={password} onChange={onPasswordChange} />
                </div>

                <button class="w-full p-2 bg-blue-500 text-white rounded" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;