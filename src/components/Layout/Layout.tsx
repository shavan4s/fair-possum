import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="layout-body">
                <Sidebar />
                <main className="content">
                </main>
            </div>
        </div>
    );
}