import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      // style={{
      //   backgroundImage: "url('https://img.freepik.com/premium-photo/abstract-102-background-wallpaper-gradient_792836-191921.jpg?semt=ais_hybrid&w=740&q=80')"
      // }}
    >
      <Navbar />
      <main className="">
        {children}
      </main>
    </div>
  );
}

export default Layout;

