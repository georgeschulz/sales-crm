import Header from "../navigation/Header";

function AppLayout({ children }) {
    return (
        <div className="app-layout bg-dark w-full h-screen text-white py-12 px-16">
            <Header />
            <div className="w-full">
                {children}
            </div>
        </div>
    );
}

export default AppLayout;