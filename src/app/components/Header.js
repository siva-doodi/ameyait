'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import MyImage from '../components/MyImage';
export default function Header() {
    const pathname = usePathname();

    // UI state
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // accordion inside mobile menu
    const [isServicesOpen, setIsServicesOpen] = useState(false); // desktop dropdown
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    // refs for outside-click detection
    const servicesRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Scroll / shadow behaviour (same as before)
    useEffect(() => {
        if (pathname !== '/') {
            setIsScrolledDown(true);
            return;
        }
        setIsScrolledDown(window.scrollY > 0);
        const onScroll = () => setIsScrolledDown(window.scrollY > 0);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [pathname]);

    // Close when clicking outside (desktop dropdown and mobile sublist)
    useEffect(() => {
        function handlePointerDown(e) {
            const target = e.target;
            if (servicesRef.current && !servicesRef.current.contains(target)) {
                setIsServicesOpen(false);
            }
            // If clicking outside the mobile menu, close mobile sublist (but keep mobile menu toggle behaviour as you want)
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
                setIsMobileServicesOpen(false);
            }
        }
        document.addEventListener('pointerdown', handlePointerDown);
        return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, []);

    // Close everything on ESC
    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') {
                setIsServicesOpen(false);
                setIsMobileServicesOpen(false);
                setIsMobileMenuOpen(false);
            }
        }
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    // Close open menus when route changes
    useEffect(() => {
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`header fixed top-0 z-50 bg-white md:px-4 lg:px-24 w-full transition-shadow duration-300
        ${isScrolledDown ? 'shadow-[0_10px_25px_rgba(0,0,0,0.1),0_4px_10px_rgba(183,41,96,0.2)]' : ''}`}
        >
            <div className="flex justify-between max-w-7xl mx-auto items-center py-3 px-4 md:px-0">
                {/* Logo */}
                <div className="nav_logo flex items-center">
                    <Link href="/">
                        <MyImage src="/images/ameya_logo.png" alt="Ameya Logo" width={100} height={100} />
                    </Link>
                </div>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-8 font-semibold text-primary-text text-[16px]">
                    <Link href="/" className="hover:underline">Home</Link>

                    {/* Services: clickable dropdown */}
                    <div ref={servicesRef} className="relative">
                        <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={isServicesOpen}
                            onClick={() => setIsServicesOpen((s) => !s)}
                            className="flex items-center gap-2 focus:outline-none cursor-pointer"
                        >
                            <span>Services</span>
                            {/* caret */}
                            <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.86l3.71-3.67a.75.75 0 011.06 1.06l-4.24 4.2a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
                            </svg>
                        </button>

                        {/* Dropdown panel */}
                //         <div
                //             role="menu"
                //             aria-label="Services"
                //             className={`absolute  text-sm bg-white text-secondary-text font-[500] p-2 left-0 top-full mt-2 w-56 rounded-md border border-gray-600 bg-white shadow-lg z-50 transform transition-all duration-150
                // ${isServicesOpen ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-1'}`}
                //         >
                //             <Link href="/services/web-development" role="menuitem" className="block px-4 py-2 hover:bg-pink-50">Web Development</Link>
                //             <Link href="/services/app-development" role="menuitem" className="block px-4 py-2 hover:bg-pink-50">App Development</Link>
                //             <Link href="/services/sap-services" role="menuitem" className="block px-4 py-2 hover:bg-pink-50">SAP Services</Link>
                //             <Link href="/services/ai-ml" role="menuitem" className="block px-4 py-2 hover:bg-pink-50">AI-ML</Link>
                //             <Link href="/services/cloud-services" role="menuitem" className="block px-4 py-2 hover:bg-pink-50">Cloud Services</Link>
                //         </div>
                //     </div>

                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/careers" className="hover:underline">Careers</Link>

                    {/* Contact */}
                    <Link
                        href="/contact"
                        className="text-sm ml-4 inline-block bg-primary-text  text-white px-6 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile menu button */}
                // <div className="lg:hidden">
                //     <button
                //         onClick={() => setIsMobileMenuOpen((s) => !s)}
                //         className="text-primary-text focus:outline-none"
                //         aria-expanded={isMobileMenuOpen}
                //         aria-controls="mobile-menu"
                //     >
                //         {isMobileMenuOpen ? (
                //             /* close icon */
                //             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                //             </svg>
                //         ) : (
                //             /* hamburger */
                //             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                //             </svg>
                //         )}
                //     </button>
                // </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav id="mobile-menu" ref={mobileMenuRef} className="lg:hidden bg-[#b72960]">
                    <Link href="/" className="block px-4 py-3 border-b border-pink-200 text-white hover:bg-[#a21c4b]">Home</Link>

                    {/* Mobile Services accordion */}
                    <button
                        onClick={() => setIsMobileServicesOpen((s) => !s)}
                        className="w-full text-left px-4 py-3 border-b border-pink-200 text-white flex items-center justify-between hover:bg-[#a21c4b]"
                        aria-expanded={isMobileServicesOpen}
                        aria-controls="mobile-services"
                    >
                        <span>Services</span>
                        <svg className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.86l3.71-3.67a.75.75 0 111.06 1.06l-4.24 4.2a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
                        </svg>
                    </button>

                    {isMobileServicesOpen && (
                        <div id="mobile-services" className="bg-[#fce7ef]">
                            <Link href="/animation" className="block px-6 py-2 text-[#7a1530] hover:bg-[#f6cbd7]">Animation</Link>
                            <Link href="/design" className="block px-6 py-2 text-[#7a1530] hover:bg-[#f6cbd7]">Design</Link>
                            <Link href="/marketing" className="block px-6 py-2 text-[#7a1530] hover:bg-[#f6cbd7]">Marketing</Link>
                            <Link href="/development" className="block px-6 py-2 text-[#7a1530] hover:bg-[#f6cbd7]">Development</Link>
                        </div>
                    )}
                    <Link href="/about" className="block px-4 py-3 border-b border-pink-200 text-white hover:bg-[#a21c4b]">About</Link>
                    <Link href="/careers" className="block px-4 py-3 border-b border-pink-200 text-white hover:bg-[#a21c4b]">careers</Link>
                    <Link href="/contact" className="block px-4 py-3 border-b border-pink-200 text-white hover:bg-[#a21c4b]">Contact</Link>
                </nav>
            )}
        </header>
    );
}
