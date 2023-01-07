import Header from "../navigation/Header";

function AppLayout({ children, headline = "" }) {
    return (
        <div className="app-layout bg-dark w-full min-h-screen text-white py-12 px-16">
            <Header />
            <h1 className="text-2xl font-semibold mb-3">{headline}</h1>
            <div className="w-full">
                {children}
            </div>
            <footer className="h-48"></footer>
        </div>
    );
}

export default AppLayout;