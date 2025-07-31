import { useEffect } from "react";

import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import logo from '../../assets/images/logo.png';
import { route } from 'ziggy-js'

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember_email: false,
    });

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setData('email', storedEmail);
            setData('remember_email', true);
        }
    }, []);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    useEffect(() => {
        // Initialize theme from localStorage or default to 'light'
        const storedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.classList.remove('dark'); // Ensure dark class is removed
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => {
                if (data.remember_email) {
                    localStorage.setItem('email', data.email);
                } else {
                    localStorage.removeItem('email');
                }
                localStorage.setItem('theme', 'light');
                document.documentElement.classList.remove('dark');
            }
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="text-center mb-6">
                <div className="mx-auto w-20 h-20 overflow-hidden mb-4 flex items-center justify-center">
                    <img
                        src={logo}
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <p className="text-md text-gray-500 dark:text-gray-400">
                    ស្វាគមន៍ការត្រលប់មកវិញ! សូមចូលគណនីរបស់អ្នក។
                </p>
            </div>

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="អ៊ីមែល" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="ពាក្យសម្ងាត់" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember_email"
                            checked={data.remember_email}
                            onChange={(e) => setData("remember_email", e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            ចងចាំអ៊ីមែលរបស់ខ្ញុំ
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        ចូលប្រព័ន្ធ
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}