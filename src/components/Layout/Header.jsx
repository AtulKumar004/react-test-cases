import React from 'react';
import Section from '../styled/Main';
import Logo from '../../assest/Logo.png';
import SignInIcon from "../../assest/signIn.svg"
import NavbarContainer, { NavItems } from '../styled/NavbarContainer';


export default function Header() {
    return (
        <>
            {/* /* Top Announcement Bar */}
            <div className="bg-gray-100 text-center text-sm text-gray-800 py-2 ">
                B2B Ninja is now part of BigCommerce. Same team. Same support. New horizons.
            </div>
            <Section data-testid="navbar-container">

                {/* <header className="bg-black text-white container mx-auto px-4"> */}
                <NavbarContainer className='flex  py-4 '>


                    {/* Logo */}
                    <div >
                        <a href="#home" className="text-2xl font-bold">   <img className='' src={Logo} alt="Logo" /></a>
                    </div>

                    <nav className="hidden md:flex space-x-4">
                        <NavItems to="/modules" className="">Modules</NavItems>
                        <NavItems to="/pricing" className="">Pricing</NavItems>
                        <NavItems to="/partners" className="">Partners</NavItems>
                        <NavItems to="/about" className="">About</NavItems>
                        <NavItems to="/contact" className="">Contact</NavItems>
                        <NavItems to="/resources" className="">Resources</NavItems>
                        <NavItems to="/signin" className="">Sign In</NavItems>
                    </nav>



                    <div className='flex items-center space-x-4'>

                        <div className='flex items-center space-x-2'>
                            <img src={SignInIcon} alt="sing-in-icon" />
                            <span >Sign In</span>
                        </div>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                            Free Trial
                        </button>
                    </div>

                    {/* Mobile Nav Toggle (if needed) */}

                </NavbarContainer>
                {/* </header> */}
            </Section>
        </>
    );
}
