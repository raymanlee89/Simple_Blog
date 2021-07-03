import { message, Button, Form, Input } from 'antd';
import Header from '../components/Header';
import { sendMessage } from '../api';

const Edit = ({ changePage, post }) => {
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const editPost = async() => {
        form.validateFields().then(async(values) => {
        const res = await sendMessage("post", "post/edit", {
            title: values.title, 
            subTitle: values.subTitle, 
            content: values.content,
            time: Date.now()
        });
        message.success(res);
    }).catch((e) => { window.alert(e); });
    }

    return(
        <div className="vertical">
            {post.postId===-1 ? <Header mode={"Add"} changePage={changePage}/> : <Header mode={"Edit"} changePage={changePage}/>}
            <div className="content">
                <Form 
                    form={form} 
                    layout="vertical"
                    initialValues={{
                        "title": post.title,
                        "subtitle": post.subTitle,
                        "content": post.content
                    }}
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ 
                            required: true, 
                            message: 'Please input your title!'
                        }]}
                        
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Subtitle"
                        name="subtitle"
                        rules={[{ 
                            required: false, 
                        }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Content"
                        name="content"
                        rules={[{ 
                            required: true, 
                            message: 'Please input your content!' 
                        }]}
                    >
                        <TextArea rows={5}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={editPost}>
                            SEND
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Edit;