import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark-900 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl shadow-purple-900/20 relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2 bg-dark-800/50 rounded-full"
                            >
                                <X size={24} />
                            </button>

                            {/* Header - Fixed */}
                            <div className="p-8 border-b border-white/10 shrink-0">
                                <h2 className="text-3xl font-bold text-white mb-2">Terms and Conditions</h2>
                                <p className="text-sm text-gray-500">Last Updated: February 6, 2025</p>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
                                <div className="space-y-8 text-gray-300">
                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">1. Introduction</h3>
                                        <p className="leading-relaxed">
                                            Welcome to Filmai ("we," "our," or "us"). By accessing or using our website, application,
                                            and services (collectively, the "Service"), you agree to be bound by these Terms and Conditions
                                            ("Terms"). If you disagree with any part of the terms, then you may not access the Service.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">2. Use of Service</h3>
                                        <p className="leading-relaxed mb-4">
                                            Filmai provides an AI-powered video production platform. You may use the Service only for lawful
                                            purposes and in accordance with these Terms. You agree not to use the Service:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>In any way that violates any applicable national or international law or regulation.</li>
                                            <li>To generate content that is illegal, harmful, threatening, abusive, harassment, defamatory, obscene, or otherwise objectionable.</li>
                                            <li>To impersonate or attempt to impersonate Filmai, a Filmai employee, another user, or any other person or entity.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h3>
                                        <p className="leading-relaxed">
                                            The Service and its original content (excluding content provided by users), features, and functionality
                                            are and will remain the exclusive property of Filmai and its licensors. The Service is protected by
                                            copyright, trademark, and other laws.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">4. User Generated Content</h3>
                                        <p className="leading-relaxed">
                                            You retain all rights to the content you generate using Filmai. However, by using the Service,
                                            you grant us a license to use your generated content for the limited purpose of operating,
                                            developing, provision, and improving the Service.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h3>
                                        <p className="leading-relaxed">
                                            In no event shall Filmai, its directors, employees, partners, agents, suppliers, or affiliates,
                                            be liable for any indirect, incidental, special, consequential, or punitive damages, including
                                            without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from
                                            your access to or use of or inability to access or use the Service.
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-3">6. Changes to Terms</h3>
                                        <p className="leading-relaxed">
                                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                                            If a revision is material, we will try to provide at least 30 days' notice prior to any new terms
                                            taking effect. What constitutes a material change will be determined at our sole discretion.
                                        </p>
                                    </section>

                                    <section className="pt-8 border-t border-white/10 mt-4">
                                        <p>
                                            If you have additional questions, please contact us at <a href="mailto:support@filmai.com" className="text-purple-400 hover:text-purple-300">support@filmai.com</a>.
                                        </p>
                                    </section>
                                </div>
                            </div>

                            {/* Footer - Fixed */}
                            <div className="p-6 border-t border-white/10 shrink-0 bg-dark-900/50 backdrop-blur-sm rounded-b-2xl flex justify-end">
                                <Button variant="secondary" onClick={onClose}>
                                    Close
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
