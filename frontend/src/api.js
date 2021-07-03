// import axios from 'axios'

// const instance = axios.create({ baseURL: 'http://localhost:5000' });

import Mock from 'mockjs';

const sendMessage = async (type, url, message) => {
    console.log("use api:", type, url, message);
    let res;
    switch(type){
        case "post":
            try{
                if(url === "post/edit")
                    res = "succeed to edit";
                else if(url === "post/delete")
                    res = "succeed to delete";
                else if(url === "comment")
                    res = "succeed to add comment"
                return res;
            }catch(e){
                console.log(e);
            }
            break;
        case "get":
            try{
                // res = await instance.get(url, message);
                if(url === "post/list")
                {
                    res = Mock.mock({
                        "array|5-10": [
                            {
                                postId: Mock.mock({
                                    "number|1-100": 100
                                }).number,
                                title: Mock.mock({"string|10-30": "★"}).string,
                                subTitle: Mock.mock({"string|5-10": "★"}).string,
                                poster: Mock.mock({"string|5-10": "★"}).string,
                                time: parseInt(Mock.mock('@datetime("T")')),
                            },
                        ]
                    })
                }
                else if(url === "post/detail")
                {
                    res = {
                        postId: message.postId,
                        title: Mock.mock({"string|10-30": "★"}).string,
                        subTitle: Mock.mock({"string|5-10": "★"}).string,
                        content: Mock.mock({"string|100-500": "★"}).string,
                        poster:  Mock.mock({"string|5-10": "★"}).string,
                        time: parseInt(Mock.mock('@datetime("T")')),
                        comments: Mock.mock({
                            "array|1-5": [
                                {
                                    name: Mock.mock({"string|5-10": "★"}).string,
                                    message: Mock.mock({"string|10-30": "★"}).string,
                                    time: parseInt(Mock.mock('@datetime("T")'))
                                }
                            ]
                        }).array
                    }
                }
                return res;
            }
            catch(e){
                console.log(e);
            }
            break;
        default:
            return [];
    };
}

export { sendMessage } 