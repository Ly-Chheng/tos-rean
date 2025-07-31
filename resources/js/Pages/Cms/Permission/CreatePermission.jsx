import React, { useEffect } from "react";
import { Modal, Form, Row, Col, Input } from "antd";

const CreatePermission = ({ open, confirmLoading, onOk, onCancel, editingPermission }) => {
  const [form] = Form.useForm();

  // Reset or populate form fields when modal opens or editingPermission changes
  useEffect(() => {
    if (open) {
      if (editingPermission) {
        form.setFieldsValue({
          name: editingPermission.name,
          guard_name: editingPermission.guard_name || "web",
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, editingPermission, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onOk(values); // Pass form values to parent component
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title={editingPermission ? "Edit Permission" : "Create Permission"}
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      okText={editingPermission ? "Update" : "Create"}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Permission Name"
              rules={[
                { required: true, message: "Please enter a permission name" },
                {
                  pattern: /^[a-zA-Z0-9-]+$/,
                  message: "Only letters, numbers, or hyphens allowed",
                },
              ]}
            >
              <Input
                placeholder="Enter permission name"
                aria-describedby="permission-name-help"
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="guard_name"
              label="Guard Name"
              rules={[{ required: true, message: "Please enter a guard name" }]}
              initialValue="web"
            >
              <Input
                placeholder="Enter guard name (e.g., web)"
                aria-describedby="guard-name-help"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CreatePermission;