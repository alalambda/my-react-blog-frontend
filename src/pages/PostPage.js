import NotFoundPage from "./NotFoundPage";
import posts from "../data/posts";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "../components/Comments";
// import LikeButton from "../components/LikeButton";
import { useState, useEffect } from "react";
import axios from 'axios';
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const PostPage = () => {
    const { user, isLoading } = useUser();

    const { postId } = useParams();
    const [postData, setPostData] = useState({ likes: 0, comments: [], canLike: false });

    const { canLike } = postData;

    const navigate = useNavigate();

    useEffect(() => {
        const loadPostData = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const { data } = await axios.get(`/api/post/${postId}`, {
                headers
            });

            setPostData(data);
        };

        if (!isLoading) {
            loadPostData();
        }
    }, [isLoading, user]);

    const incrementLikes = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const { data } = await axios.put(`/api/post/${postId}/like`, null, {
            headers
        });
        setPostData(data);
    };

    const post = posts.find(post => post.id === Number(postId));
    if (!post) {
        return <NotFoundPage />
    }

    return (
        <>
            <h3>{post.title}</h3>
            <strong>posted by {post.author}</strong>
            <p>{post.content}</p>

            {/* <LikeButton likeCount={Number(postData.likes)} /> */}
            {user
                ? <button type="button" className={canLike ? "btn btn-info" : "btn btn-info disabled"} onClick={incrementLikes}>{canLike ? 'Like' : 'Liked'}</button>
                : <button type="button" className="btn btn-info" onClick={() => navigate('/login')}>Log in to like</button>}
            <br />
            <small>{postData.likes} like(s)</small>
            <hr />
            <Comments comments={postData.comments} />
            {user
                ? <AddCommentForm
                    postId={postId}
                    onPostUpdated={post => setPostData(post)} />
                : <button type="button" className="btn btn-info" onClick={() => navigate('/login')}>Log in to comment</button>}
        </>
    );
};

export default PostPage;