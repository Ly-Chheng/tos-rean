import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-2 py-8">
        {children}
      </main>
    </>
  );
}

export default Layout;
