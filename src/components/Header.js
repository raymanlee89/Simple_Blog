import { Button } from 'antd';

const Header = ({ mode, changePage, post }) => (
    <div className="Header vertical">
        <div className="header-panel">
            <Button type="text" style={{fontWeight: "bold"}} onClick={()=>changePage("Home", "")}>Home</Button>
        </div>
        {(() => {
            switch (mode) {
            case 'Home':
                return <h1>My Blog</h1>;
            case 'Edit':
                return <h1>Edit Post</h1>;
            case 'Add':
                return <h1>Add Post</h1>;
            case 'Post':
                return (
                    <div className="header-post-title">
                        <h1>{post.title}</h1>
                        <h3>Posted by {post.poster} on {new Date(post.time).toString().slice(4,15).replace(/-/g,"")}</h3>
                    </div>
                );
            default :
                return <></>;
        }})()}
    </div>
);

export default Header;