import Button from '../ui/Button';

export default function TeamFeatures() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
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
                    Figma—but for generative film.
                </p>

                {/* Collaboration Interface Preview */}
                <div className="relative aspect-[21/9] bg-dark-900 rounded-xl overflow-hidden border border-white/10 mb-12">
                    <div className="absolute inset-0 p-4">
                        {/* Mock collaborative timeline with comments */}
                        <div className="space-y-2">
                            {[1, 2, 3].map((track) => (
                                <div key={track} className="h-12 bg-dark-800 rounded relative overflow-hidden">
                                    <div
                                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-green-600/50 to-blue-600/50 rounded"
                                        style={{ width: `${Math.random() * 60 + 20}%` }}
                                    />
                                    {/* Comment markers */}
                                    {track === 2 && (
                                        <>
                                            <div className="absolute top-1 left-1/4 w-3 h-3 bg-pink-500 rounded-full" />
                                            <div className="absolute top-1 left-1/2 w-3 h-3 bg-yellow-500 rounded-full" />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
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
                    <Button variant="primary">Request Access</Button>
                </div>
            </div>
        </section>
    );
}
