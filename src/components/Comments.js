const Comments = ({ comments }) => {
    return (
        <>
            <h3>Comments</h3>
            {comments && comments.length
                ? comments.map((comment, i) => (
                    <div key={i}>
                        <strong>{comment.postedBy}</strong>
                        <p>{comment.content}</p>
                    </div>
                ))
                : <p>No comments yet...</p>
            }
        </>
    );
};

export default Comments;