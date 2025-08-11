'use client';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-600 text-white py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid gap-10 md:grid-cols-4">

                        {/* Logo & About */}
                        <div>
                            <Link href="/">
                                <Image
                                    src="/images/ameya_logo.png"
                                    alt="Ameya Logo"
                                    width={120}
                                    height={50}
                                    className="mb-4"
                                />
                            </Link>
                            <p className=" text-sm leading-relaxed">
                                Ameya delivers innovative software solutions that empower businesses
                                to grow, transform, and thrive in a digital world.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-2 ">
                                <li><Link href="/" className="hover:underline">Home</Link></li>
                                <li><Link href="/about" className="hover:underline">About</Link></li>
                                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                               <li><Link href="/contact" className="hover:underline">Contact</Link></li>   
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Services</h3>
                            <ul className="space-y-2 text-[13px]">
                                <li><Link href="/services/web-development" className="hover:underline">Web Development</Link></li>
                                <li><Link href="/services/app-development" className="hover:underline">App Development</Link></li>
                                <li><Link href="/services/web-development" className="hover:underline">Web Development</Link></li>
                                <li><Link href="/services/sap-services" className="hover:underline">SAP Services</Link></li>
                                <li><Link href="/services/ai-ml" className="hover:underline">AI-ML</Link></li>
                                <li><Link href="/services/sap-services" className="hover:underline">SAP Services</Link></li>
                                <li><Link href="/services/cloud-services" role="menuitem" className="hover:underline">Cloud Services</Link></li>                                 
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                            <p className=" text-sm">📍 123 Software Street, Tech City</p>
                            <p className=" text-sm">📞 +1 234 567 890</p>
                            <p className="text-sm">✉️ contact@ameya.com</p>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className=" hover:text-white transition">🌐</a>
                                <a href="#" className="text-pink-100 hover:text-white transition">🐦</a>
                                <a href="#" className="text-pink-100 hover:text-white transition">📘</a>
                                <a href="#" className="text-pink-100 hover:text-white transition">📸</a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-primary-bg mt-10 pt-6 text-center  text-sm">
                        © {new Date().getFullYear()} Ameya Software. All Rights Reserved.
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer