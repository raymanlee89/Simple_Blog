const PostBox = ({ changePage, post }) => (
    <div className="post-box">
        <button onClick={() => changePage("Post", post)}>{post.title}</button>
        {post.subtitle && <h2>{post.subtitle}</h2>}
        <h3>Posted by {post.poster} on {new Date(post.time).toString().slice(4,15).replace(/-/g,"")}</h3>
    </div>
);

export default PostBox;