const Login = () => {
  return (
    <div className="">
      <div className=" h-screen w-full  flex justify-center items-center ">
        <div className="absolute w-[200px] h-[200px] mb-96 ml-96 bg-gradient-to-r from-[#1845ad] to-[#23a2f6] rounded-full "></div>
        <div className="absolute w-[200px] h-[200px] -mb-96 mt-40 -ml-96 bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full "></div>
        <div className="flex justify-center items-center ">
          <form className="relative w-[400px] mt-20 h-full  rounded-2xl backdrop-filter backdrop-blur-md border-2 border-opacity-10 shadow-lg p-8 ">
            <h3 className="text-4xl  text-center font-extrabold">Login Here</h3>

            <label
              htmlFor="username"
              className="block mt-8 text-sm font-medium "
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Email or Phone"
              id="username"
              className="block w-full h-12 mt-2 text-sm font-light   bg-opacity-10 rounded-md px-3 focus:outline-none placeholder:text-gray-300"
            />

            <label
              htmlFor="password"
              className="block mt-8 text-sm font-medium "
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="block w-full h-12 mt-2 text-sm font-light   bg-opacity-10 rounded-md px-3 focus:outline-none placeholder:text-gray-300"
            />

            <button className="w-full mt-12 py-3 text-lg font-semibold text-white bg-black rounded-md cursor-pointer">
              Log In
            </button>

            <div className="flex justify-center mt-8">
              <div className="flex items-center justify-center w-32 px-4 py-2 text-sm font-medium text-center text-white bg-black bg-opacity-25 rounded-md cursor-pointer hover:bg-opacity-50">
                <i className="fab fa-google mr-2"></i> Google
              </div>
              <div className="flex items-center justify-center w-32 px-4 py-2 ml-4 text-sm font-medium text-center text-white bg-black bg-opacity-25 rounded-md cursor-pointer hover:bg-opacity-50">
                <i className="fab fa-facebook mr-2"></i> Facebook
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
