import Header from "./Header";

function AppLayout({ children, headline = "" }) {
    return (
        <div>
            <Header />
            <div className="app-layout bg-dark w-full min-h-screen text-white pl-16">
                <h1 className="text-2xl font-semibold">{headline}</h1>
                <div className="w-full">
                    {children}
                </div>
                <footer className="h-48"></footer>
            </div>
        </div>
    );
}

export default AppLayout;