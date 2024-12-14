
async function SignUp({handleSignUpPage}) {
  
  
  
  return (
    <>
      
          <form onSubmit={register} className="bg-black bg-opacity-70 w-2/6 p-16 h-5/6 z-10 rounded-lg">
            <h1 className="text-3xl py-6 text-white font-bold">Sign Up</h1>
            <div className="flex flex-col">
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 bg-blue-900 my-1 bg-opacity-25 rounded border border-white"
              />
              
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
                className="p-3 bg-blue-900 my-1 bg-opacity-25 rounded border border-white"
              />
              <input
                ref={confirmPasswordRef}
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="p-3 bg-blue-900 my-1 bg-opacity-25 rounded border border-white"
              />
              <button
                type="submit"
                className="p-2 bg-netflixRed text-white font-bold my-2 rounded-lg"
              >
                Sign Up
              </button>
              <p className="text-gray-400 py-3">
                Already a member?{" "}
                <span
                  onClick={handleSignUpPage}
                  className="text-white cursor-pointer hover:underline"
                >
                  Sign in.
                </span>
              </p>
            </div>
          </form>
      
    </>
  );
}

export default SignUp;
