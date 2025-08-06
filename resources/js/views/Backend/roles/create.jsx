import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";

function CreateRole({ auth, permissions }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        permissions: [],
    });

    const handleSubmit = () => {
        console.log('Form Data:', data);
        post(route('roles.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center dark:text-gray-200">
                    <Link href={route("roles.index")}>
                        <div className="flex items-center">
                            <h6 className="text-sm text-grey-600 dark:text-gray-200 leading-tight px-1">
                                Role
                            </h6>
                            
                        </div>
                    </Link>
                    <h6 className="text-sm text-blue-600 dark:text-gray-200 leading-tight px-1">
                        / Create
                    </h6>
                </div>
            }
        >
            <Head title="Create Role" />

            <div className="bg-white shadow p-10 rounded">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Role Name"
                        validateStatus={errors.name && "error"}
                        help={errors.name}
                    >
                        <Input
                            name="name"
                            value={data.name}
                            placeholder="Enter role name"
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
                                {permissions.map((permission) => (
                                    <Col key={permission.id} span={6}>
                                        <Checkbox value={permission.id}>{permission.name}</Checkbox>
                                    </Col>
                                ))}
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
