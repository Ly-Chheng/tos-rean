import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";

function CreateRole({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        permissions: [],
    });

    const handleSubmit = () => {
        post(route('roles.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center dark:text-gray-200">
                    <Link href={route("roles.index")}>
                        <div className="flex items-center">
                            <h6 className="text-sm text-gray-600 dark:text-gray-200 leading-tight px-1">
                                Create Role
                            </h6>
                        </div>
                    </Link>
                </div>
            }
        >
            <Head title="Create Role" />

            <div className="bg-white shadow p-10 rounded">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        rounded-lg
                        label="Role Name"
                        validateStatus={errors.name && "error"}
                        help={errors.name}
                    >
                        <Input
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item label="Permissions">
                        <Checkbox.Group
                            value={data.permissions}
                            onChange={(checked) => setData('permissions', checked)}
                            style={{ width: '100%' }}
                        >
                            <Row>
                                <Col span={6}>
                                    <Checkbox value="views-role">View-role</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox disabled value="B">
                                        No-permsision
                                    </Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="M">Create-role</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="D">Update-role</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="E">Delete-role</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="C">View-user</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="D">Update-user</Checkbox>
                                </Col>
                                <Col span={6}>
                                    <Checkbox value="E">Delete-user</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={processing}
                            className="bg-blue-600"
                        >
                            {processing ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </AuthenticatedLayout>
    );
}

export default CreateRole;
