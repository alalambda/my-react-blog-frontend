import { useState } from "react";

const LikeButton = ({ likeCount }) => {
    const [likes, setLikes] = useState(likeCount);

    const increaseLikeCount = () => {
        setLikes(likes + 1);
    };

    return (
        <>
            <button type="button" className="btn btn-info"
                onClick={increaseLikeCount}>Like</button>
            <br />
            <small>{likeCount} like(s)</small>
        </>
    );
};

export default LikeButton;