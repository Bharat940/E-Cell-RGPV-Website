"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Initiatives", href: "#" },
        { name: "Archives", href: "#" },
        { name: "Team", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-blue-600 shadow-lg" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-2 xl:py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo - stays visible, menu drawer appears on top */}
                        <div className="flex items-center">
                            <Image
                                src="/assets/E-Cell_logo[1] 1.png"
                                alt="E-Cell Logo"
                                width={100}
                                height={33}
                                className="object-contain w-20 sm:w-24 md:w-28 lg:w-32"
                                priority
                            />
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Blogs Button with Border */}
                            <a
                                href="#"
                                className={`px-4 lg:px-6 py-2 border-2 border-white text-white font-medium rounded transition-all duration-200 text-sm lg:text-base ${scrolled
                                        ? "hover:bg-white hover:text-blue-600 hover:border-white"
                                        : "hover:bg-blue-600 hover:border-blue-600"
                                    }`}
                            >
                                Blogs
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[90] md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-black z-[95] transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col p-6 pt-20 gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Blogs Button - Same styling as desktop */}
                    <a
                        href="#"
                        className="px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-center mt-4"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Blogs
                    </a>
                </div>
            </div>
        </>
    );
}
