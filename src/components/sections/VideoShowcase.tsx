export default function VideoShowcase() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Section Label */}
                <p className="text-xs text-purple-400 tracking-widest mb-4 text-center">
                    WHY FILMAI
                </p>

                {/* Headline */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Built for directing,
                    <br />
                    not just prompting
                </h2>

                {/* Video Player */}
                <div className="relative aspect-video bg-dark-800 rounded-2xl overflow-hidden border border-white/10 mb-6 group cursor-pointer">
                    {/* Placeholder for video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Timer */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-sm">
                        0:05
                    </div>
                </div>

                {/* Description */}
                <p className="text-center text-gray-400 max-w-3xl mx-auto">
                    Most AI tools are built around prompts and bases—not the way filmmakers think.
                    We built Filmai to give you direct control.
                </p>
            </div>
        </section>
    );
}
