export default function Header() {
    return (
        <header className="h-14 px-4 flex items-center justify-between border-b">
            <h1 className="text-lg font-semibold">Atomic Habits Dashboard</h1>
            <button className="px-3 py-2 rounded-md border hover:bg-gray-50">
                Settings
            </button>
        </header>
    );
}