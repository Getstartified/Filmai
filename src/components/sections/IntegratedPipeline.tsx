export default function IntegratedPipeline() {
    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Integrated Pipeline
                </h2>

                {/* Description */}
                <p className="text-gray-400 max-w-2xl mb-8">
                    No more juggling disconnected tools. Image generation, video generation, and world models-
                    all in one place, with a built-in timeline.
                </p>



                {/* Timeline Interface */}
                <div className="relative aspect-[21/9] bg-dark-900 rounded-xl overflow-hidden border border-white/10 transition-transform duration-700 hover:scale-[1.02] shadow-2xl shadow-purple-900/10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/1-integrated-comp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Additional info */}
                <p className="text-xs text-gray-500 mt-4">
                    Export image sequences as .MLX, Premiere or Timeline.
                </p>
            </div>
        </section>
    );
}
