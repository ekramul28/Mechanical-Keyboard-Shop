import { SubmitHandler, useForm } from "react-hook-form";
type TRegister = {
  username: string;
  email: string;
  password: string;
  conformPassword: string;
};
const Register = () => {
  const { register, handleSubmit } = useForm<TRegister>();
  const onSubmit: SubmitHandler<TRegister> = (data) => {
    console.log(data);
  };
  return (
    <div className=" min-h-screen py-12 w-full  flex justify-center items-center ">
      <div className="absolute w-[200px] h-[200px] hidden md:block mb-96 ml-96 lg:ml-[460px] lg:mb-[460px] bg-gradient-to-r from-[#1845ad] to-[#23a2f6] rounded-full "></div>
      <div className="absolute w-[200px] h-[200px] hidden md:block -mb-96 lg:-mb-[460px] mt-40 -ml-96 lg:-ml-[460px] bg-gradient-to-r from-[#ff512f] to-[#f09819] rounded-full "></div>
      <div className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-[360px] md:w-[500px] mt-20 h-full  rounded-2xl backdrop-filter backdrop-blur-md border-2 border-opacity-10 shadow-lg p-8 "
        >
          <h3 className="text-4xl  text-center font-extrabold">
            Register Here
          </h3>

          <label htmlFor="username" className="block mt-8 text-sm font-medium ">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            placeholder="Email or Phone"
            id="username"
            className="block w-full h-12 mt-2 text-sm font-light   bg-opacity-10 rounded-md px-3 focus:outline-none placeholder:text-gray-300"
          />
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

          <label htmlFor="password" className="block mt-8 text-sm font-medium ">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            id="password"
            className="block w-full h-12 mt-2 text-sm font-light   bg-opacity-10 rounded-md px-3 focus:outline-none placeholder:text-gray-300"
          />
          <label
            htmlFor="conform-password"
            className="block mt-8 text-sm font-medium "
          >
            Conform Password
          </label>
          <input
            {...register("conformPassword")}
            type="conform-password"
            placeholder="conform password"
            id="conform-password"
            className="block w-full h-12 mt-2 text-sm font-light   bg-opacity-10 rounded-md px-3 focus:outline-none placeholder:text-gray-300"
          />

          <button
            type="submit"
            className="w-full mt-12 py-3 text-lg font-semibold text-white bg-black rounded-md cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
