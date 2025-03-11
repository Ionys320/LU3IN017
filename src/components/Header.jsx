import { useContext } from "react";
import { UserContext } from "../contexts";
import Search from "./Search";

function Header() {
    const user = { username: "meow" }

    return (
        <header class="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1>Association</h1>

            <Search />

            <div>
                {user ? (
                    <div>
                        <span>{user.username}</span>
                        <button>Logout</button>
                    </div>
                ) : (
                    <>
                        <button>Login</button>
                        <button>Register</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;