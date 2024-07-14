import { Button } from "antd";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black mt-6">
      <div className="bg-white p-12 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center w-52 h-52 bg-red-100 rounded-full mx-auto mb-6">
          <i className="text-red-500 text-8xl leading-none">🥲</i>
        </div>
        <h1 className="text-red-600 font-bold text-4xl mb-2">ERROR</h1>
        <p className="text-gray-700 text-xl">
          Something went wrong; please try again!
        </p>
        <Link to="/product">
          <Button className="mt-3 bg-black text-white font-bold py-6">
            Try Again
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
