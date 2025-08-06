import { useEffect } from "react";
import GuestLayout from "@/layouts/GuestLayout";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import { Head, useForm } from "@inertiajs/react";
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
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        ចូលប្រព័ន្ធ
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}