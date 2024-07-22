import posts from '../data/posts';
import Posts from "../components/Posts";

const HomePage = () => {
    return (
        <Posts posts={posts} />
    );
};

export default HomePage;