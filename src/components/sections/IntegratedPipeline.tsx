export default function IntegratedPipeline() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                    No more juggling disconnected tools. Image generation, video generation, and world models—
                    all in one place, with a built-in timeline.
                </p>

                {/* Thumbnails */}
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-24 h-16 bg-dark-800 rounded border border-white/10"
                        />
                    ))}
                </div>

                {/* Timeline Interface */}
                <div className="relative aspect-[21/9] bg-dark-900 rounded-xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 p-4">
                        {/* Timeline tracks */}
                        <div className="space-y-2">
                            {[1, 2, 3].map((track) => (
                                <div key={track} className="h-12 bg-dark-800 rounded relative overflow-hidden">
                                    <div
                                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded"
                                        style={{ width: `${Math.random() * 60 + 20}%` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional info */}
                <p className="text-xs text-gray-500 mt-4">
                    Export image sequences as .MLX, Premiere or Timeline.
                </p>
            </div>
        </section>
    );
}
