import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().min(4, "Username min 4 symbol"),
  surname: z.string().min(4, "Surname min 4 symbol"),
  email: z
    .string()
    .min(4, "Email min 4 symbol")
    .email("Incorrect format")
    .refine((value) => value !== "admin@gmail.com", {
      message: "Reserved Email",
    }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleForm = async (data) => {
    fetch("https://68175c8026a599ae7c3a2220.mockapi.io/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((responseData) => {
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/successfully");
        console.log(responseData);
        reset();
      })
      .catch((errors) => {
        console.log(errors);
        setError("root", {
          message: "Something went wrong",
        });
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form
        className="flex flex-col justify-center bg-white shadow-md p-6 rounded w-[554px] h-[1024px]"
        onSubmit={handleSubmit(handleForm)}
        noValidate
      >
        <div className="flex flex-col gap-10px mb-[100px] logindTitles">
          <h2 className="mb-4 font-bold text-[32px]">Create account</h2>
          <p>
            Don’t have an account? Sign Up <a href="/"> Login</a>
          </p>
        </div>
        <div className="flex justify-between nameAndSurname">
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700 text-sm"
              htmlFor="firstname"
            ></label>
            <input
              type="text"
              placeholder="your name"
              id="firstname"
              className="shadow px-3 py-2 border rounded w-full text-gray-700"
              {...register("username")}
            />
            <p className="text-red-500 text-xs italic">
              {errors.username && <pan>{errors.username.message}</pan>}
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-bold text-gray-700 text-sm"
              htmlFor="surname"
            ></label>
            <input
              type="text"
              placeholder="your surname"
              id="surname"
              className="shadow px-3 py-2 border rounded w-full text-gray-700"
              {...register("surname")}
            />
            <p className="text-red-500 text-xs italic">
              {errors.surname && <pan>{errors.surname.message}</pan>}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700 text-sm"
            htmlFor="surname"
          ></label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="shadow px-3 py-2 border rounded w-full text-gray-700"
            {...register("email")}
          />
          <p className="text-red-500 text-xs italic">
            {errors.email && <pan>{errors.email.message}</pan>}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700 text-sm"
            htmlFor="firstname"
          ></label>
          <input
            type="password"
            placeholder="Password"
            id="firstname"
            className="shadow px-3 py-2 border rounded w-full text-gray-700"
            {...register("password")}
          />
          <p className="text-red-500 text-xs italic">
            {errors.username && <pan>{errors.username.message}</pan>}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center formBottomContainer">
          <button
            disabled={isSubmitting}
            className="bg-[var(--color-black)] px-4 py-2 w-full text-[white] cursor-pointer hover:bg:blue-700"
            type="submit"
          >
            {isSubmitting ? "Sending.." : "Create Account"}
          </button>

          <div>{errors.root && <p>{errors.root.message}</p>}</div>

          <div className="bg-[var(--color-line)] m-auto mt-[30px] w-full h-[1px] line"></div>

          <div className="flex flex-col justify-center items-center gap-[20px] mt-[30px] buttonContainer">
            <button className="flex justify-center items-center gap-2 bg-transparent border border-black w-[506px] h-[49px]">
              <img src="./images/svg/Google.svg" alt="google" />
              Continue with Google
            </button>
            <button className="flex justify-center items-center gap-2 bg-transparent border border-black w-full h-[49px]">
              <img src="images/svg/appleLogo.svg" alt="apple" />
              Continue with Apple
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
