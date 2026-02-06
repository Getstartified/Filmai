import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Log In', href: '#login' },
];

interface NavbarProps {
    onOpenRequestAccess?: () => void;
}

export default function Navbar({ onOpenRequestAccess }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8"
        >
            <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-7xl mx-auto shadow-xl">
                <div className="px-4 pr-2 pl-4 py-2">
                    <div className="flex items-center justify-between h-14">
                        {/* Left Section: Logo + Divider */}
                        <div className="flex items-center gap-6">
                            <a href="#" className="flex items-center gap-2">
                                {/* Logo Icon */}
                                <div className="relative w-8 h-8">
                                    <img
                                        src="/Logo.png"
                                        alt="Filmai Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-white text-xl font-bold tracking-tight">
                                    Filmai<span className="text-purple-500">.</span>
                                </span>
                            </a>
                            {/* Vertical Divider */}
                            <div className="hidden md:block h-8 w-[1px] bg-white/20"></div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center justify-center flex-1 px-8">
                            <div className="flex items-center space-x-1 lg:space-x-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setActiveLink(link.name)}
                                        className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 tracking-wide ${activeLink === link.name
                                            ? 'bg-white/20 text-white'
                                            : 'text-white/80 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Section: CTA Button */}
                        <div className="hidden md:flex items-center">
                            <button
                                onClick={onOpenRequestAccess}
                                className="bg-[#7A8B6F] hover:bg-[#687a5e] text-white px-5 py-2 rounded-xl transition-all duration-200 text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Request Access
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-white/80 transition-colors bg-white/10 p-2 rounded-lg"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-xl rounded-b-2xl overflow-hidden">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${activeLink === link.name
                                        ? 'bg-white/20 text-white'
                                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                                        }`}
                                    onClick={() => {
                                        setActiveLink(link.name);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                className="w-full text-center bg-[#7A8B6F] text-white px-6 py-3 rounded-xl transition-colors duration-200 mt-4 text-sm font-bold uppercase tracking-wider"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    if (onOpenRequestAccess) onOpenRequestAccess();
                                }}
                            >
                                Request Access
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    );
}
