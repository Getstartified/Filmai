import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';

interface RequestAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequestAccessModal({ isOpen, onClose }: RequestAccessModalProps) {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 500);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setEmail('');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-dark-900 border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl shadow-purple-900/20"
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {!isSubmitted ? (
                                <>
                                    <h2 className="text-2xl font-bold mb-2 text-white">Get Early Access</h2>
                                    <p className="text-gray-400 mb-6">
                                        Join the waiting list for Filmai. We're opening up spots every week.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                placeholder="you@company.com"
                                            />
                                        </div>
                                        <Button
                                            variant="primary"
                                            className="w-full justify-center"
                                        >
                                            Submit Request
                                        </Button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                                    <p className="text-gray-400 mb-6">
                                        Our team will get back to you shortly.
                                    </p>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                        className="w-full justify-center"
                                    >
                                        Close
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
