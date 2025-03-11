import { useState } from "react";
import { useParams } from "react-router";

import Post from "../components/Post";
import NewPost from "../components/NewPost";

/**
 * Page listant les posts d'un forum. Elle permet également d'en créer un nouveau.
 * @returns 
 */
function Forum() {
    let { forum } = useParams();

    const [posts, setPosts] = useState([{
        title: "Hello, World!",
        content: "This is a test post",
        category: forum,
    }]);

    const [postCreatorOpened, setPostCreatorOpened] = useState(false);

    const preparePostCreation = () => setPostCreatorOpened(true);
    const publishPost = (newPost) => {
        setPosts([...posts, newPost]);
        setPostCreatorOpened(false);
    }
    const cancelPostPublication = () => setPostCreatorOpened(false);

    return (
        <div className="flex flex-col items-center justify-center h-dvh">
            <div>
                <p>Forum: {forum}</p>

                <button onClick={preparePostCreation}>Create a post</button>
            </div>

            {/* Allow to create a post */}
            {postCreatorOpened && <NewPost onSubmit={publishPost} onCancel={cancelPostPublication} />}

            {/* List all created posts */}
            {posts.map((post) => (
                <Post forum={post} />
            ))}
        </div>
    )
}

export default Forum;