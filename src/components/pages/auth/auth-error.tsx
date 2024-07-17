import {useSearchParams} from "next/navigation";

const AuthError = () => {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-red-500">Помилка авторизації</h1>
                <p className="text-gray-500">{error}</p>
            </div>
        </div>
    )
}

export default AuthError