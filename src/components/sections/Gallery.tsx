export default function Gallery() {
    const projects = [
        { title: 'Someone Misses Your Call', creator: 'by Bird Studio' },
        { title: 'Empty Vessels', creator: 'by Sam Outsource' },
        { title: 'Nike (Spec Ad)', creator: 'by Andy Goula' },
        { title: 'Morella Sailors', creator: 'by CreateMe' },
        { title: 'HULK HORK TRIBUTE', creator: 'by Kab Voile' },
        { title: 'Fires of Atlantis (Fan Fiction)', creator: 'by Chris le Petit' },
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    See what filmmakers are
                    <br />
                    creating with Filmai
                </h2>

                {/* Subheading */}
                <p className="text-center text-gray-400 mb-12">
                    Over 200 films Made with Filmai — aired as TV commercials, displayed as artwork,
                    <br className="hidden md:block" />
                    and have gone viral on social media.
                </p>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                        >
                            {/* Video Thumbnail */}
                            <div className="relative aspect-video bg-dark-800 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:border-white/30 transition-all">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-75 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-500">{project.creator}</p>
                        </div>
                    ))}
                </div>

                {/* See More Link */}
                <div className="text-center">
                    <a
                        href="#"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                        See more at filmaiversemade.ai
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
