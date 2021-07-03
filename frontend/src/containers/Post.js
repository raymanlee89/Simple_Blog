import { useState, useEffect } from 'react';
import { Modal, message, Button, Comment, Avatar, Tooltip } from 'antd';
import CommentPanel from '../components/CommentPanel';
import Header from '../components/Header';
import { UserOutlined } from '@ant-design/icons';
import { sendMessage } from '../api';

const Post = ({ changePage, postId }) => {
    const [post, setPost] = useState({
        postId: -1,
        title: "",
        subTitle: "",
        poster: "",
        content: "",
        time: Date(2014, 1, 1),
        comments: [{name: "", message: ""}]
    });

    const deletePost = async() => {
        const res = await sendMessage("post", "post/delete", {postId});
        message.success(res);
        changePage("Home");
    }
    
    useEffect(() => {
        if(postId !== -1 && post.postId === -1){
            //use api to get data
            //console.log("get post");

            const getPost = async() => {
                const data = await sendMessage("get", "post/detail", {postId});
                setPost(data);
            }

            getPost();
        }
    }, [postId, post.postId]);

    return(
        <div className="vertical">
            <Header mode={"Post"} changePage={changePage} post={post}/>
            <div className="content">
                <div className="post-panel horizontal">
                    <Button type="lightdark" onClick={()=>changePage("Edit", post)}>Edit Post</Button>
                    <Button type="danger" onClick={deletePost}>Delete Post</Button>
                </div>
                <pre>{post.content}</pre>
                <div className="comment-list">
                    {post.comments.map((comment, i)=>(
                        <Comment
                            key={i}
                            author={comment.name}
                            avatar={<Avatar 
                                size={30} 
                                gap={5} 
                                style={{ backgroundColor: '#6699CC' }} 
                                icon={<UserOutlined />} 
                            />}
                            datetime= {
                                <Tooltip title={Date(comment.time).toString()}>
                                <span>{new Date(comment.time).toString().slice(4,15).replace(/-/g,"")}</span>
                                </Tooltip>
                            }
                            content={<pre>{comment.message}</pre>}
                        />
                    ))}
                </div>
                <CommentPanel />
            </div>
        </div>
    );
}

export default Post;