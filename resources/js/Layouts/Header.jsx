import { useState, useEffect } from "react";
import { Menu, Sun, Moon, LogOut, Edit, User, Settings, X, RefreshCcw} from "lucide-react";
import Dropdown from "@/Components/Dropdown";
import { router, usePage, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function Header({
  sidebarOpen,
  setSidebarOpen,
  theme,
  setTheme,
}) {
  const { auth, allRoles } = usePage().props;
  const user = auth.user;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, setData, put, processing, errors, reset } = useForm({
    name: user.name,
    email: user.email,
    password: "",
    password_confirmation: "",
  });

  const handleLogout = () => {
    router.post(route("logout"), {}, {
      onSuccess: () => {},
      onError: (errors) => {
        console.error("Logout failed:", errors);
      },
    });
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("user.update", user.id), {
      onSuccess: () => {
        setIsModalOpen(false);
      },
      onError: (errors) => {
        console.error("Update failed:", errors);
      },
    });
  };

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const [avatarModalOpen, setAvatarModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(
    localStorage.getItem("selectedAvatar") || null
  );

  const avatars = [
    "/assets/avatars/avatar1.png",
    "/assets/avatars/avatar2.png",
    "/assets/avatars/avatar3.png",
    "/assets/avatars/avatar4.png",
    "/assets/avatars/avatar5.png",
    "/assets/avatars/avatar6.png",
  ];

  return (
    <>
      <header className="shadow-lg top-0 z-50 py-4 bg-[#3465f4] flex items-center justify-between px-6 text-white h-16">
        <button
          className="text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              localStorage.clear();
              setSelectedAvatar(null);
              window.location.reload();
            }}
            className="p-2 rounded-full bg-red-100 bg-opacity-20 hover:bg-opacity-40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-white"
            aria-label="Clear LocalStorage"
            title="Clear LocalStorage"
          >
             <RefreshCcw size={20} />

          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-100 bg-opacity-20 hover:bg-opacity-40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="relative">
            <Dropdown>
              <Dropdown.Trigger>
                <button className="flex items-center space-x-2 rounded-full bg-white bg-opacity-10 pl-2 pr-3 py-1.5 hover:bg-opacity-20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                <div className="relative w-10 h-10">
                  {selectedAvatar ? (
                    <img
                      src={selectedAvatar}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full object-cover cursor-pointer"
                      onClick={() => setAvatarModalOpen(true)}
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl cursor-pointer"
                      onClick={() => setAvatarModalOpen(true)}
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span
                    className={`absolute bottom-0 right-0 block w-3 h-3 rounded-full ring-2 ring-white ${
                      isOnline ? "bg-green-500" : "bg-red-500"
                    }`}
                    title={isOnline ? "Online" : "Offline"}
                  ></span>
                </div>
                  <span className="hidden sm:inline text-sm font-medium text-white">
                    {user.name.split(" ")[0]}
                  </span>
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content className="mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 border border-gray-100 dark:border-gray-700">
                {/* <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <Edit size={20} className="mr-3" />
                  Edit Profile
                </button> */}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <LogOut size={20} className="mr-3" />
                  Logout
                </button>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md mx-4 p-6 relative animate-fade-in">
            <button
              onClick={() => {
                setIsModalOpen(false);
                reset();
              }}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              {selectedAvatar ? (
                <img
                  src={selectedAvatar}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full object-cover cursor-pointer"
                  onClick={() => setAvatarModalOpen(true)}
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl cursor-pointer"
                  onClick={() => setAvatarModalOpen(true)}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Name: {user.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email: {user.email}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Role: {user.roles && user.roles.length > 0 ? user.roles[0] : "Not assigned"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  className="mt-1 block w-full"
                  placeholder="Your name"
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div>
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  className="mt-1 block w-full"
                  placeholder="Your email"
                />
                <InputError message={errors.email} className="mt-2" />
              </div>
             
              <div>
                <InputLabel htmlFor="user_password" value="Password" />
                <TextInput
                  id="user_password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("password", e.target.value)}
                  placeholder="New password"
                />
                <InputError message={errors.password} className="mt-2" />
              </div>
              <div>
                <InputLabel htmlFor="user_password_confirmation" value="Confirm Password" />
                <TextInput
                  id="user_password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("password_confirmation", e.target.value)}
                  placeholder="Confirm new password"
                />
                <InputError message={errors.password_confirmation} className="mt-2" />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    reset();
                  }}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processing}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors duration-200"
                >
                  {processing ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {avatarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md mx-4 p-6 relative">
            <button
              onClick={() => setAvatarModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Choose Your Avatar
            </h2>

            <div className="grid grid-cols-3 gap-4">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className={`w-20 h-20 rounded-full object-cover cursor-pointer border-4 ${
                    selectedAvatar === avatar ? "border-indigo-600" : "border-transparent"
                  }`}
                  onClick={() => {
                    setSelectedAvatar(avatar);
                    localStorage.setItem("selectedAvatar", avatar);
                    setAvatarModalOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

    </>
  );
}