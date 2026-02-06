import Button from '../ui/Button';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-dark-900 to-dark-900"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-dark-700/50 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
                    {/* <span className="text-2xl">🎬</span> */}
                    <span className="text-sm text-gray-300">Your Stories Matter</span>
                    {/* <span className="text-gray-500">•</span> */}
                    {/* <span className="text-2xl">🎬</span> */}
                    {/* <span className="text-sm text-gray-300">Zero Waste</span> */}
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    AI Video Production
                    <br />
                    for Professionals
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                    Your Film Set for AI Videos
                </p>

                {/* Description */}
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    For creatives, studios, and agencies who create professional AI videos.
                </p>

                {/* CTA Button */}
                <Button variant="primary" className="text-lg px-8 py-3">
                    Request Access →
                </Button>

            </div>
        </section>
    );
}
