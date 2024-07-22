import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
    return (
        <>
            <h3>Posts</h3>
            {
                posts.map((post, i) => (
                    <Link className="nav-link" key={i} to={`post/${post.id}`}>
                        <strong>{post.title}</strong>
                        <p>{post.content.substring(0, 250)}...</p>
                    </Link>
                ))
            }
        </>
    )
};

export default Posts;