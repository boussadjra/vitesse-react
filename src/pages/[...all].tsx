import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-full  min-h-screen bg-slate-200 dark:bg-primary-900">

            <div className="text-center space-y-8 text-slate-600 dark:text-slate-50">

                <h1 className="flex items-center mb-4">
                    <span className="text-8xl font-bold mx-4"> 404</span> <span>| Not found</span>
                </h1>
                {/* go to home */}
                <Link to="/" className="text-sky-300 ">
                    <button className="btn m-3 text-sm">
                        Go to home
                    </button>
                </Link>
            </div>

        </div>
    )
}
