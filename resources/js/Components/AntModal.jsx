import React, { Component } from "react";
import { Modal, Form, Input as AntdInput, Row, Col, message } from "antd";

class AntModal extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    // Handle form submission
    handleOk = () => {
        const { onOk } = this.props;
        this.formRef.current
            .validateFields()
            .then((values) => {
                onOk(values);
            })
            .catch(() => {
                message.error("Please fill in all required fields");
            });
    };

    // Handle form reset
    resetForm = () => {
        this.formRef.current.resetFields();
    };

    render() {
        const { open, onCancel, confirmLoading } = this.props;

        return (
            <Modal
                title="Add Permission"
                open={open}
                onOk={this.handleOk}
                onCancel={() => {
                    onCancel();
                    this.resetForm();
                }}
                confirmLoading={confirmLoading}
            >
                <Form ref={this.formRef} layout="vertical">
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                label="Permission Name"
                                rules={[
                                    { required: true, message: "Please enter a permission name" },
                                    {
                                        pattern: /^[a-zA-Z0-9-]+$/,
                                        message: "Permission name must contain only letters, numbers, or hyphens",
                                    },
                                ]}
                            >
                                <AntdInput
                                    placeholder="Enter permission name (e.g., view-users)"
                                    aria-describedby="permission-name-help"
                                />
                            </Form.Item>

                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="guard_name"
                                label="Guard Name"
                                rules={[{ required: false, message: "Please enter a guard name" }]}
                                initialValue="web"
                            >
                                <AntdInput
                                    placeholder="Enter guard name (e.g., web)"
                                    aria-describedby="guard-name-help"
                                />
                            </Form.Item>

                        </Col>
                    </Row>
                </Form>
            </Modal>
        );
    }
}

export default AntModal;