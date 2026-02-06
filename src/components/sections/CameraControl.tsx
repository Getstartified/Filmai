export default function CameraControl() {
    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
            <div className="max-w-4xl mx-auto">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Camera Control
                </h2>

                {/* Description */}
                <p className="text-gray-400 max-w-2xl mb-8">
                    Get the exact shot you want, not whatever the model gives you. Step into video shots and
                    control shots with camera position, lenses, and movement.
                </p>

                {/* Interface Preview */}
                <div className="relative aspect-video bg-dark-900 rounded-xl overflow-hidden border border-white/10 transition-transform duration-700 hover:scale-[1.02]">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/3-3d-compmp4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent pointer-events-none"></div>
                </div>

                {/* Additional info */}
                <p className="text-xs text-gray-500 mt-4">
                    Step into any image or video to activate and explore.
                </p>
            </div>
        </section>
    );
}
