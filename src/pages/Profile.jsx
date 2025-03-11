import { useState } from "react";
import RemoveContent from "../components/RemoveContent";

function Profile({ userId }) {
    /**
     * The user object.
     * @example { id: 7, username: "mraou", { posts: [{ id: 1, content: "Hello, World!", category: 7 }] } }
     */
    const [user, setUser] = useState(null);

    const [categories, setCategories] = useState([{
        name: "announcement",
        title: "Annonces",
    },
    {
        name: "install-party",
        title: "Install Party",
    },
    {
        name: "ca",
        title: "CA",
        closed: true
    }]);

    return (
        <div>
            <h1>Profile</h1>

            <ul>
                {user.posts.map((post) => (
                    <li>
                        <p>{post.content}</p>
                        <RemoveContent postId={post.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile