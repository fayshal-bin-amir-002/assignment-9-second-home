import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
            <div className="max-w-lg mx-auto space-y-3 text-center">
                <h3 className="text-indigo-600 font-semibold">
                    404 Error
                </h3>
                <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                    Page not found
                </p>
                <p className="text-gray-600">
                    Sorry, the page you are looking for could not be found or has been removed.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link to="/" className="block py-2 px-4 text-white font-medium bg-[#2D9596] duration-150 hover:bg-[#2D9596] active:bg-[#2D9596] rounded-lg">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;