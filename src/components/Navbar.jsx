import { signOut } from "firebase/auth";
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

 function Navbar() {
   const navigate = useNavigate()
   const {logout}=useAuth()
  async function handleSignout() {
    try {
      await logout()
      toast.success("Logged out sucessfully")
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 bg-black fixed w-full z-50">
      {/* Left Section */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <img
          className="w-32 sm:w-40 md:w-44 h-auto"
          src="/Netflix_Logo_RGB.png"
          alt="Netflix Logo"
        />
        <div className="hidden sm:flex space-x-2 md:space-x-3 text-white">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            TV Shows
          </a>
          <a href="#" className="hover:underline">
            Movies
          </a>
        </div>
      </div>

      {/* Right Section */}
      <button
        onClick={handleSignout}
        className="bg-netflixRed px-3 sm:px-4 py-2 text-sm sm:text-base rounded-2xl text-white hover:bg-red-700">
        Sign out
      </button>
    </nav>
  );
}

export default Navbar;
