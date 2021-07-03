import { useState, useEffect } from 'react';
import { Divider, Button } from 'antd';
import PostBox from '../components/PostBox';
import Header from '../components/Header';
import { sendMessage } from '../api';
import Mock from 'mockjs';
const Home = ({ changePage }) => {
    const [ postList, setPostList] = useState([]);

    const getPostList = async() => {
        const { array } = await sendMessage("get", "post/list");
        console.log("set post list :", array[0].time, new Date(parseInt(array[0].time, 10)).toString());
        setPostList(array);
    }

    useEffect(() => {
        if(postList.length === 0){
            //use api to get data
            //console.log("get all post");
            getPostList();
        }
    }, [postList]);

    return (
        <div className="vertical">
            <Header mode={"Home"} changePage={changePage}/>
            <div className="content">
                <Button type="primary" onClick={()=>changePage("Edit")}>Add Post</Button>
                <div className="post-list">
                    {postList.map((post, i) => (
                        <div key={i}>
                            <PostBox changePage={changePage} post={post}/>
                            <Divider/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;