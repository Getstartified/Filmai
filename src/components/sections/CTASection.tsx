import Button from '../ui/Button';

interface CTASectionProps {
    title: string;
    description: string;
    onOpenRequestAccess?: () => void;
}

export default function CTASection({ title, description, onOpenRequestAccess }: CTASectionProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-dark-700/30 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {title}
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        {description}
                    </p>
                    <Button variant="primary" onClick={onOpenRequestAccess}>Request Access</Button>
                </div>
            </div>
        </section>
    );
}
