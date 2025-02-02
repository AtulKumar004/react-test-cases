import React from 'react';

export default function Header() {
    return (
        <>
            {/* /* Top Announcement Bar */}
            <div className="bg-gray-100 text-center text-sm text-gray-800 py-2">
                B2B Ninja is now part of BigCommerce. Same team. Same support. New horizons.
            </div>
            <header className="bg-black text-white">
                <div className="container mx-auto flex items-center justify-between py-4 px-4">
                    {/* Logo */}
                    <div className="text-xl font-bold">B2B Ninja</div>
                    {/* Nav Links */}
                    <nav className="hidden md:flex space-x-4">
                        <a href="#modules" className="hover:text-gray-300">Modules</a>
                        <a href="#pricing" className="hover:text-gray-300">Pricing</a>
                        <a href="#partners" className="hover:text-gray-300">Partners</a>
                        <a href="#about" className="hover:text-gray-300">About</a>
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                        <a href="#resources" className="hover:text-gray-300">Resources</a>
                        <a href="#signin" className="hover:text-gray-300">Sign In</a>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                            Free Trial
                        </button>
                    </nav>
                    {/* Mobile Nav Toggle (if needed) */}
                </div>
            </header>
        </>
    );
}
