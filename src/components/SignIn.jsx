import { useRef, useState,useEffect } from "react";
import { auth } from "../firebase"; // Import your Firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";


function SignIn() {
  const [signin, setsignin] = useState(true);
  const [err, setErr] = useState({})
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmpassRef = useRef()
  const {user,loading} = useAuth()
    
  useEffect(() => {
    if (loading) return; // Wait until the user's auth state is resolved
    if (user) {
      navigate("/home"); // Redirect if logged in
    }
  }, [user, loading, navigate]);

  async function register(e) {
  e.preventDefault();
  setErr({})
  const email = emailRef.current.value
  const password = passwordRef.current.value
  const confirmpassword = confirmpassRef.current.value
  
    if (password.trim() === '') {
      setErr((prevErr) => ({ ...prevErr, password: "Passwords should contain characters and numbers" }))

      return
    }
    if (password.trim() !== confirmpassword.trim()) {
      setErr((prevErr)=>({...prevErr, password: "Passwords doesnt match" }))
      return
    }
  
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCred.user)
      toast.success("Sign Up sucess")
      handleSignUpPage()
    } catch (error) {
      const actualMessage = error.message.replace(/^Firebase:\s*/, ""); // Remove "Firebase: " prefix
      toast.error("eroor signing up")
      setErr((prevErr)=>({...prevErr,signup:actualMessage}))
    }
    
  }

  async function login(e) {
    e.preventDefault()
    setErr({})
    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password)
      toast.success("Login Success")
      navigate("/home")
    } catch (error) {
      const actualMessage = error.message.replace(/^Firebase:\s*/, ""); // Remove "Firebase: " prefix
      console.log(error.message)
      setErr((prevErr)=>({...prevErr,login:actualMessage}))
    }
    
  }

  function handleSignUpPage() {
    setsignin((prev) => !prev);
  }
  return (
    <>
      <div className="flex items-end justify-center bg-[url('/signin.jpg')]  h-screen w-full bg-cover bg-center">
              <div className="absolute inset-0  bg-black bg-opacity-55"></div>
              <img src="/netflix.png" className="absolute top-8 left-36 w-40" alt="" />

        {/***********  sign IN Form ***********/}
       

        {signin && (
          <form onSubmit={login}
            action=""
            className="bg-black bg-opacity-70 w-2/6 p-16 h-5/6 z-10 rounded-lg "
          >
            <h1 className="text-3xl py-6 text-white font-bold ">Sign In</h1>
            {err.login && (<p className="text-red-400">{ err.login}</p>)}
            <div className="flex flex-col">
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="Log_email"
                placeholder="Email "
                className="p-3  bg-blue-900 my-1 bg-opacity-25 rounded border text-white border-white "
              />
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="Log_pass"
                placeholder="password"
                className="p-3  bg-blue-900 my-1 bg-opacity-25 rounded border text-white border-white "
              />
              <button
                type="submit"
                className="p-2 bg-netflixRed text-white font-bold my-2  rounded-lg "
              >
                Sign In
              </button>
              <p href="" className="font-medium text-center py-5 text-white">
                Forgot Password ?
              </p>
              <p className="text-gray-400 py-3">
                New to Netflix ?{" "}
                <span onClick={handleSignUpPage} className="text-white cursor-pointer hover:underline">
                  Sign up now.
                </span>
              </p>
            </div>
          </form>
        )}

        {/***********  sign Up Form ***********/}
       
        {!signin && (
          <form onSubmit={register}
            className="bg-black bg-opacity-70 w-2/6 p-16 h-5/6 z-10 rounded-lg "
          >
            <h1 className="text-3xl py-6 text-white font-bold ">Sign Up</h1>
            {err.signup && (<p className="text-red-600">{err.signup}</p>)}
            {err.password && (<p className="text-red-600">{ err.password}</p>)}
            <div className="flex flex-col">
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="Reg_email"
                placeholder="Email "
                className="p-3  bg-blue-900 text-white my-1 bg-opacity-25 rounded border border-white "
              />
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="Reg_password"
                placeholder="password"
                className="p-3  bg-blue-900 text-white my-1 bg-opacity-25 rounded border border-white "
                          />
              <input
                ref={confirmpassRef}
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="confirm password"
                className="p-3  bg-blue-900 text-white my-1 bg-opacity-25 rounded border border-white "
                />

              <button
                type="submit"
                className="p-2 bg-netflixRed text-white font-bold my-2  rounded-lg "

              >
                Sign Up
              </button>
              <p className="text-gray-400 py-3">
                Already a member ?{" "}
                <span onClick={handleSignUpPage} className="text-white cursor-pointer hover:underline">
                  Sign in.
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
export default SignIn;
