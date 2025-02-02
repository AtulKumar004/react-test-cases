import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      <div className="container mx-auto px-4">
        {/* Top row with sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="font-semibold mb-2">Questions or Need Help?</h3>
            <ul>
              <li>
                <a href="#knowledge-base" className="text-blue-400 hover:text-white">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#chat" className="text-blue-400 hover:text-white">
                  Chat with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">B2B Ninja</h3>
            <ul>
              <li><a href="#quotes" className="hover:text-white">Quotes</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#partners" className="hover:text-white">Partners</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#installation" className="hover:text-white">Installation and Setup</a></li>
              <li><a href="#configuring" className="hover:text-white">Configuring B2B Ninja</a></li>
              <li><a href="#email-template" className="hover:text-white">Quote Follow Up Email Template</a></li>
              <li><a href="#shipping" className="hover:text-white">Using Custom Shipping</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom row with legal info */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2025 - Quote Ninja, Inc. | Marketing by Kokopelli Agency
          </p>
          <div className="mt-2 md:mt-0 text-sm space-x-4">
            <a href="#security" className="hover:text-white">Security Overview</a>
            <a href="#gdpr" className="hover:text-white">GDPR Policy</a>
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
