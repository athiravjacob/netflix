function Footer() {
    return (
      <footer className="bg-black text-gray-400 px-6 sm:px-12 lg:px-36 py-10">
        <div className="container mx-auto">
          {/* Description */}
          <p className="text-center text-sm mb-6">
            Questions? Call{" "}
            <a
              href="tel:+1-800-123-4567"
              className="text-gray-200 hover:underline"
            >
              1-800-123-4567
            </a>
          </p>
  
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-center md:text-left">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Help Center
            </a>
            <a href="#" className="hover:underline">
              Account
            </a>
            <a href="#" className="hover:underline">
              Media Center
            </a>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <a href="#" className="hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
  
          {/* Language Selector */}
          <div className="text-center mt-8">
            <select
              className="bg-black text-gray-400 border border-gray-600 px-4 py-2 rounded-md"
              name="language"
              id="language"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
  
          {/* Footer Note */}
          <p className="text-center text-sm mt-6">Netflix © 2024</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  