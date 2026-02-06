import Button from '../ui/Button';

interface TeamFeaturesProps {
    onOpenRequestAccess?: () => void;
}

export default function TeamFeatures({ onOpenRequestAccess }: TeamFeaturesProps) {
    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
            <div className="max-w-4xl mx-auto">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Built for Teams
                </h2>

                {/* Description */}
                <p className="text-gray-400 max-w-2xl mb-8">
                    Share prompts, edits, and feedback in real time. Explore ideas together the way you do in
                    Figma-but for generative film.
                </p>

                {/* Collaboration Interface Preview */}
                <div className="relative aspect-[21/9] bg-dark-900 rounded-xl overflow-hidden border border-white/10 mb-12 transition-transform duration-700 hover:scale-[1.02] shadow-2xl shadow-purple-900/10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/2-collab-comp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent pointer-events-none"></div>
                </div>

                {/* CTA Section */}
                <div className="bg-dark-700/30 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to get started?
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                        Join the filmmakers, studios, and agencies already using Filmai
                        to create that gets noticed.
                    </p>
                    <Button variant="primary" onClick={onOpenRequestAccess}>Request Access</Button>
                </div>
            </div>
        </section>
    );
}
