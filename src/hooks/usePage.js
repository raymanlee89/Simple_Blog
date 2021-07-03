import { useState } from "react";

const usePage = () => {
    const [mode, setMode] = useState("Home");
    const [post, setPost] = useState({
        postId: -1,
        title: "",
        subTitle: "",
        poster: "",
        content: "",
        time: Date(2014, 1, 1),
        comments: [{name: "", message: ""}]
    });

    const changePage = (newPage, newPost) => {
        console.log("Change mode :", newPage);
        setMode(newPage);
        if(newPost !== undefined)
        {
            //console.log("Change post :", newPost);
            setPost(newPost);
        }
        else
        {
            setPost({
                postId: -1,
                title: "",
                subTitle: "",
                poster: "",
                content: "",
                time: Date(2014, 1, 1),
                comments: [{name: "", message: ""}]
            });
        }
    }

    return { mode, post, changePage };
};

export default usePage;