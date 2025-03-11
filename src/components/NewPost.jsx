import { useState } from "react";

function NewPost({ onSubmit, onCancel }) {
    const [content, setContent] = useState("");

    const onContentChange = (event) => setContent(event.target.value);
    const createPost = (event) => {
        event.preventDefault();
        onSubmit(content);
    }

    return (
        <div>
            <h1>New Post</h1>

            <form onSubmit={createPost}>
                <div>
                    <label for="content">Content</label>
                    <textarea id="content" value={content} onChange={onContentChange}></textarea>
                </div>

                <button type="submit">Post</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default NewPost;