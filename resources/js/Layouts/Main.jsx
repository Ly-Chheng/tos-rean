export default function Main({ header, children }) {
    return (
      <div className="flex-1 flex flex-col">
        {header && (
          <div className="bg-white dark:bg-gray-800 shadow px-3 py-4 h-12">
            <div className="w-8xl mx-auto">{header}</div>
          </div>
        )}
        <main className="flex-1 p-4 md:p-6">
          <div className="w-8xl mx-auto">{children}</div>
        </main>
      </div>
    );
  }