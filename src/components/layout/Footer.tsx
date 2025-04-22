import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github as GitHub, ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent inline-block mb-6">
              Shape<span className="text-amber-500"> IT</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative technology solutions since 2024.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: '#' },
                { icon: <GitHub className="h-5 w-5" />, href: '#' }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href}
                  className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Custom Software Development',
                'Web Application Development',
                'Mobile App Development',
                'Database Management System',
                'AI & Machine Learning',
                'UI/UX',
                
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Team', href: '#team' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and insights on tech trends.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-r-lg transition-colors duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Shape IT. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <Link 
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;