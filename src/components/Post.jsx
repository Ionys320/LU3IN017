import { useState } from "react";
import RemoveAnswer from "./RemoveAnswer";

/**
 * Composant affichant un post de forum. Il permet à la fois d'y répondre, mais aussi d'afficher les réponses déjà apportées.
 * @returns 
 */
function Post({ post, onAnswerAdded }) {
    const [addNewAnswer, setAddNewAnswer] = useState(false);
    const [newAnswer, setNewAnswer] = useState("");
    const onNewAnswerChange = (e) => setNewAnswer(e.target.value);

    const addAnswer = (e) => {
        e.preventDefault();

        onAnswerAdded(newAnswer);
        setAddNewAnswer(false);
    }

    const prepareAddAnswer = () => {
        setNewAnswer("");
        setAddNewAnswer(true);
    }
    const cancelAddAnswer = () => setAddNewAnswer(false);

    return (
        <div>
            <h1>Forum</h1>

            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>

            {post.answers.map((answer) => (
                <div>
                    <p>{answer}</p>
                    <RemoveAnswer />
                </div>
            ))}

            <form onSubmit={addAnswer}>
                <div>
                    <label for="newAnswer">Answer</label>
                    <textarea id="newAnswer" value={newAnswer} onChange={onNewAnswerChange}></textarea>
                </div>

                <button type="submit">Answer</button>
                <button type="button" onClick={cancelAddAnswer}>Cancel</button>
            </form>
        </div>
    );
}

export default Post;