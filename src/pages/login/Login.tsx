import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/Auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/Auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

type TInputs = {
  email: string;
  password: string;
};
const Login = () => {
  const { register, handleSubmit, reset } = useForm<TInputs>();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitLogin: SubmitHandler<TInputs> = async (data) => {
    try {
      const result = await loginUser(data).unwrap();
      if (result.success) {
        reset();
        const user = verifyToken(result.data.accessToken) as TUser;
        console.log({ user });
        dispatch(setUser({ user: user, token: result.data.accessToken }));
        toast.success("Login successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className=" min-h-screen py-6 w-full  flex justify-center items-center ">
        <div className="absolute w-[200px] hidden md:block h-[200px] mb-96 ml-96 bg-gradient-to-r from-[#1845ad] to-[#23a2f6] rounded-full "></div>
        <div className="absolute w-[200px] hidden md:block h-[200px] -mb-96 mt-40 -ml-96 bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full "></div>
        <div className="flex justify-center items-center ">
          <form
            onSubmit={handleSubmit(onSubmitLogin)}
            className="relative w-[400px] mt-20 h-full  rounded-2xl backdrop-filter backdrop-blur-md border-2 border-opacity-10 shadow-lg p-8 "
          >
            <h3 className="text-4xl  text-center font-extrabold">Login Here</h3>

            <label htmlFor="email" className="block mt-8 text-sm font-medium ">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email or Phone"
              id="email"
              className="block w-full h-12 mt-2 text-sm font-light   bg-opacity-10 rounded-md px-3 focus:outline-none placeholder:text-gray-300"
            />

            <label
              htmlFor="password"
              className="block mt-8 text-sm font-medium "
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              id="password"
              className="block w-full h-12 mt-2 text-sm font-light   bg-opacity-10 rounded-md px-3 focus:outline-none placeholder:text-gray-300"
            />

            <button
              type="submit"
              className="w-full mt-12 py-3 text-lg font-semibold text-white bg-black rounded-md cursor-pointer"
            >
              Log In
            </button>

            <div className="flex justify-center mt-8">
              <div className="flex items-center justify-center w-32 px-4 py-2 text-sm font-medium text-center text-white bg-black bg-opacity-25 rounded-md cursor-pointer hover:bg-opacity-50">
                <i className="fab fa-google mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </i>{" "}
                Google
              </div>
              <div className="flex items-center justify-center w-32 px-4 py-2 ml-4 text-sm font-medium text-center text-white bg-black bg-opacity-25 rounded-md cursor-pointer hover:bg-opacity-50">
                <i className="fab fa-facebook mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3F51B5"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                  </svg>
                </i>{" "}
                Facebook
              </div>
            </div>
            <h3 className="text-lg text-center mt-4">
              Don't Have an Account{" "}
              <Link to="/register">
                <span className="text-green-500 font-bold cursor-pointer">
                  Register
                </span>
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
