"use client";

import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#about" },
        { name: "Contact Us", href: "#contact" },
        { name: "Gallery", href: "#gallery" },
        { name: "Post Events", href: "#events" },
        { name: "CAP", href: "#cap" },
    ];

    const spotlightLinks = [
        { name: "SIP", href: "#sip" },
        { name: "Startup Incubation", href: "#incubation" },
        { name: "E-Monitoring", href: "#monitoring" },
        { name: "Skill Development", href: "#skills" },
        { name: "Alumni E-Cell RGPV", href: "#alumni" },
    ];

    return (
        <footer className="bg-gradient-to-b from-[#040115] to-[#0a0320] text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1 space-y-4">
                        <div className="flex items-center">
                            <Image
                                src="/assets/E-Cell_logo[1] 1.png"
                                alt="E-Cell Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#58595D' }}>
                            e-Entrepreneurship Cell is a non-profit organisation solely with the
                            purpose of creating awareness towards the developing entrepreneurial
                            culture in our surrounding and encourage students to embrace the idea
                            of starting their own venture and also to inspire and guide young
                            entrepreneurs and their start-ups.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase border-b border-blue-500/30 pb-2 inline-block" style={{ color: '#0B40FF' }}>
                            Quick Links
                        </h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-blue-400 transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Spotlight */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase border-b border-blue-500/30 pb-2 inline-block" style={{ color: '#0B40FF' }}>
                            Spotlight
                        </h3>
                        <ul className="space-y-2.5">
                            {spotlightLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-blue-400 transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold uppercase border-b border-blue-500/30 pb-2 inline-block" style={{ color: '#0B40FF' }}>
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 group">
                                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <a
                                    href="mailto:support@ecellrgpv.com"
                                    className="text-white/70 hover:text-blue-400 transition-colors duration-200 text-sm break-all"
                                >
                                    support@ecellrgpv.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-sm" style={{ color: '#58595D' }}>
                                    E-Cell Rgpv, Gandhi Nagar, Bhopal
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
