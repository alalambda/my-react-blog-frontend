import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ postId, onPostUpdated }) => {
    const [text, setText] = useState('');

    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const { data } = await axios.post(`/api/post/${postId}/comment`, {
            content: text
        }, {
            headers
        });

        onPostUpdated(data);

        setText('');
    };

    return (
        <>
            <hr />
            <h3>Add a comment</h3>
            {user && <p>Posting as {user.email}</p>}
            <br />
            <div>
                <textarea style={{ width: '500px', margin: 'auto' }}
                    rows="4"
                    className="form-control"
                    value={text}
                    onChange={e => setText(e.target.value)} />
            </div>
            <br />
            <button className="btn btn-info" onClick={addComment}>Add Comment</button>
        </>
    );
};

export default AddCommentForm;