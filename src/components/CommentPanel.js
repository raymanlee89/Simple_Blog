import { message, Button, Form, Input } from 'antd';
import { sendMessage } from '../api';

const CommentPanel = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const createComment = async() => {
        form.validateFields().then(async(values) => {
        const res = await sendMessage("post", "comment", {
            name: values.name, 
            message: values.message, 
            time: Date.now()
        });
        message.success(res);
    }).catch((e) => { window.alert(e); });
    }

    return (
        <Form form={form} layout="vertical">
            <Form.Item
                label="Name"
                name="name"
                rules={[{ 
                    required: true, 
                    message: 'Please input your name!'
                }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Message"
                name="message"
                rules={[{ 
                    required: true, 
                    message: 'Please input your message!' 
                }]}
            >
                <TextArea rows={5} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={createComment}>
                    SEND
                </Button>
            </Form.Item>
        </Form>
    );
}

export default CommentPanel;