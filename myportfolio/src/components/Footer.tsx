import Link from "next/link";
import React from "react";
const Footer=()=>{
    return(
  
  <div className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
  
        {/* About Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-xl font-semibold mb-4 hover:underline">About Us</h5>
          <p className="text-gray-400">We are a company dedicated to providing the best services and products to our customers. Your satisfaction is our priority.</p>
        </div>
        {/* Links Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-xl font-semibold mb-4 hover:underline">Quick Links</h5>
          <ul className="text-gray-400">
            <li className="mb-2"><Link href="/" className="hover:underline">Home</Link></li>
            <li className="mb-2"><Link href="/about" className="hover:underline">About</Link></li>
            <li className="mb-2"><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li className="mb-2"><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
  
           {/* Contact Section */}
        <div className="w-full md:w-1/3">
          <h5 className="text-xl font-semibold mb-4 hover:underline">Contact Us</h5>
          <ul className="text-gray-400">
            <li className="mb-2"><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</li>
            <li className="mb-2"><i className="fas fa-phone-alt"></i> +123 456 7890</li>
            <li><i className="fas fa-envelope"></i> email@example.com</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
    </div>
    )
  };
  export default Footer;
  