export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-800 shadow p-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} BELTEI-Learning. All rights reserved.
        </div>
      </footer>
    );
  }