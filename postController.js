const posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
]

const getPosts = () => posts;
export const getPostsLen = () => {
    return posts.length;
};

export default getPosts;
