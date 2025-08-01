import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from "@inertiajs/react";
import { Row, Col, Form, Switch, Button } from "antd";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";

function UpdateUser({ auth, roles = [], user }) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name || "",
        email: user.email || "",
        password: "",
        password_confirmation: "",
        roles: user.role?.id || "",
        active: user.status === 1,
    });

    const handleSubmit = () => {
        // console.log("Form Data:", data);
        put(route("users.update", user.id), {
            onSuccess: () => console.log("User updated successfully!"),
            onError: (errors) => console.log("Error updating user:", errors),
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
        // Log input changes
        console.log(`Input Changed - ${name}: ${value}`);
    };

    const handleSwitchChange = (checked) => {
        setData("active", checked);
        // Log switch change
        console.log(`Active status changed to: ${checked ? "Active" : "Inactive"}`);
    };

    return (
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
                        / Update User
                    </h6>
                </div>
            }
        >
            <Head title="Update User" />
            <Form
                onFinish={handleSubmit}
                className="mt-4 space-y-4 bg-white dark:bg-gray-800 p-6 rounded shadow-md"
            >
                {/* General error message */}
                {Object.keys(errors).length > 0 && !Object.keys(data).some((key) => errors[key]) && (
                    <div className="text-red-500 text-sm">An error occurred. Please try again.</div>
                )}

                <Row gutter={16}>
                    <Col span={12}>
                        <InputLabel value="Name" htmlFor="name" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="mt-1 block w-full"
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                        )}
                    </Col>
                    <Col span={12}>
                        <InputLabel value="Role" htmlFor="roles" />
                        <SelectInput
                            id="roles"
                            name="roles"
                            value={data.roles}
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
                        {errors.roles && (
                            <div className="text-red-500 text-sm mt-1">{errors.roles}</div>
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
                            placeholder=""
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
                            placeholder=""
                        />
                        {errors.password_confirmation && (
                            <div className="text-red-500 text-sm mt-1">{errors.password_confirmation}</div>
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
                        {errors.active && (
                            <div className="text-red-500 text-sm mt-1">{errors.active}</div>
                        )}
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
                            {processing ? "Updating..." : "Update User"}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </AuthenticatedLayout>
    );
}

export default UpdateUser;