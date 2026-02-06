import Button from '../ui/Button';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-dark-900 text-gray-300 font-sans">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <a href="/" className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        ← Back to Filmai
                    </a>
                </div>

                <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
                <p className="text-sm text-gray-500 mb-8">Last Updated: February 6, 2025</p>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="leading-relaxed">
                            Welcome to Filmai ("we," "our," or "us"). By accessing or using our website, application,
                            and services (collectively, the "Service"), you agree to be bound by these Terms and Conditions
                            ("Terms"). If you disagree with any part of the terms, then you may not access the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Use of Service</h2>
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
                        <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                        <p className="leading-relaxed">
                            The Service and its original content (excluding content provided by users), features, and functionality
                            are and will remain the exclusive property of Filmai and its licensors. The Service is protected by
                            copyright, trademark, and other laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. User Generated Content</h2>
                        <p className="leading-relaxed">
                            You retain all rights to the content you generate using Filmai. However, by using the Service,
                            you grant us a license to use your generated content for the limited purpose of operating,
                            developing, provision, and improving the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            In no event shall Filmai, its directors, employees, partners, agents, suppliers, or affiliates,
                            be liable for any indirect, incidental, special, consequential, or punitive damages, including
                            without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from
                            your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
                        <p className="leading-relaxed">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                            If a revision is material, we will try to provide at least 30 days' notice prior to any new terms
                            taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/10 mt-12">
                        <p>
                            If you have additional questions, please contact us at <a href="mailto:support@filmai.com" className="text-purple-400 hover:text-purple-300">support@filmai.com</a>.
                        </p>
                    </section>
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="primary" onClick={() => window.close()}>
                        Close Window
                    </Button>
                </div>
            </div>
        </div>
    );
}
