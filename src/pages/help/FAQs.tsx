import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="font-body text-lg text-muted-foreground mb-8">Answers to all your queries.</p>
        <div className="space-y-4">
          {[
            { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days." },
            { q: "Can I cancel my order?", a: "Orders can be cancelled within 1 hour of placement." }
          ].map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}