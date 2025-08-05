
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from "@inertiajs/react";
import { Row, Col, Form, Switch, Button } from "antd";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import ToastNotification from "@/Components/ToastNotification";
import { useState } from "react";

function CreateUser({ auth, roles = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        roles_id: "",
        active: true,
    });

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = () => {
        post(route("users.store"), {
            onSuccess: () => {
                console.log("Setting success message");
                setSuccessMessage("User created successfully!");
                // Delay redirect to allow toast to show
                setTimeout(() => {
                    router.visit(route("users.index"), { preserveState: false });
                }, 3500); // Wait 3.5s (toast duration + buffer)
            },
            onError: (errors) => {
                console.log("Error creating user:", errors);
                setErrorMessage("Failed to create user");
            },
            preserveState: true, // Keep form state on error
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSwitchChange = (checked) => {
        setData("active", checked);
    };

    return (
        <>
           
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="flex items-center dark:text-gray-200">
                        <Link href={route("users.index")}>
                            <div className="flex items-center">
                                <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
                                    User
                                </h6>
                            </div>
                        </Link>
                        <h6 className="text-sm text-gray-800 dark:text-gray-200 leading-tight px-1">
                            / Create User
                        </h6>
                    </div>
                }
            >
                <Head title="Create User" />
                <Form
                    onFinish={handleSubmit}
                    className="mt-4 space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow-md"
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <InputLabel value="Name" htmlFor="name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                className="mt-1 block w-full"
                                placeholder="Enter user name"
                            />
                            {errors.name && (
                                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                            )}
                        </Col>
                        <Col span={12}>
                            <InputLabel value="Role" htmlFor="roles_id" />
                            <SelectInput
                                id="roles_id"
                                name="roles_id"
                                value={data.roles_id}
                                onChange={handleChange}
                                className="mt-1 block w-full"
                            >
                                <option value="">Select</option>
                                {roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </SelectInput>
                            {errors.roles_id && (
                                <div className="text-red-500 text-sm mt-1">{errors.roles_id}</div>
                            )}
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <InputLabel value="Email" htmlFor="email" />
                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={handleChange}
                                className="mt-1 block w-full"
                                placeholder="Enter email"
                            />
                            {errors.email && (
                                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                            )}
                        </Col>
                        <Col span={12}>
                            <InputLabel value="Password" htmlFor="password" />
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                onChange={handleChange}
                                className="mt-1 block w-full"
                                placeholder="Enter password"
                            />
                            {errors.password && (
                                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                            )}
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <InputLabel value="Password Confirmation" htmlFor="password_confirmation" />
                            <TextInput
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={handleChange}
                                className="mt-1 block w-full"
                                placeholder="Confirm password"
                            />
                            {errors.password_confirmation && (
                                <div className="text-red-500 text-sm mt-1">
                                    {errors.password_confirmation}
                                </div>
                            )}
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Active" valuePropName="checked">
                                <Switch
                                    checked={data.active}
                                    onChange={handleSwitchChange}
                                    className="text-green-600"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="mt-6 justify-end flex">
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={processing}
                                className="bg-blue-600"
                            >
                                {processing ? 'Creating...' : 'Create User'}
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </AuthenticatedLayout>
        </>
    );
}

export default CreateUser;
