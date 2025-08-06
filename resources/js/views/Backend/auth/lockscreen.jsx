import { useEffect, useState, useRef } from "react";
import GuestLayout from "@/layouts/GuestLayout";
import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import { Head, useForm, router } from "@inertiajs/react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function LockScreen({ user }) {
    const { data, setData, post, processing, errors } = useForm({
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const passwordRef = useRef(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
        return () => {
            const currentTheme = localStorage.getItem("theme") || "light";
            document.documentElement.classList.toggle("dark", currentTheme === "dark");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("lock-screen.unlock"), {
            onSuccess: () => {
                const intendedUrl = sessionStorage.getItem("intendedUrl") || route("dashboard");
                sessionStorage.removeItem("intendedUrl");
                router.visit(intendedUrl);
            },
            onError: (errors) => {
                console.error("Unlock failed:", errors);
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Session Locked" />

            <div className="text-center mb-6">
                <div className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-4 flex items-center justify-center">
                    {/* <img
                        src={logo}
                        alt=""
                        className="w-full h-full"
                    /> */}
                </div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {user.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    វគ្គត្រូវបានចាក់សោ។ បញ្ចូលពាក្យសម្ងាត់របស់អ្នកដើម្បីបន្ត។
                </p>
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="ពាក្យសម្ងាត់" />
                    <div className="relative">
                        <TextInput
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full pr-10"
                            autoComplete="current-password"
                            autoFocus
                            ref={passwordRef}
                            onChange={(e) => setData("password", e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="w-full justify-center" disabled={processing}>
                        ដោះសោរ
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}