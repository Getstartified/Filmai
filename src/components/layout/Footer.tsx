export default function Footer() {
    const partners = [
        'KingAI', 'MOONVALLEY', 'Veo 3', 'Runway', 'Wan', 'MINIMAX', 'Sora'
    ];

    return (
        <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Partner Logos Section */}
                <div className="mb-12">
                    <p className="text-xs text-gray-500 text-center mb-6 tracking-widest">
                        POWERED BY FILMMAKERS' FAVORITE AI MODELS
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {partners.map((partner) => (
                            <div
                                key={partner}
                                className="text-gray-400 hover:text-white transition-colors text-xl md:text-2xl font-bold uppercase tracking-wide"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pt-12 border-t border-white/10">
                    <div>
                        <h3 className="text-white font-semibold mb-4">COMPANY</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Supported Models
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">ABOUT</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">LEGAL</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">CONNECT</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/10">
                    © 2025 Filmai.
                </div>
            </div>
        </footer>
    );
}
