import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Returns() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Returns & Exchanges</h1>
        <p className="font-body text-lg text-muted-foreground mb-8">Learn about our hassle-free return policy.</p>
        <div className="prose prose-sm max-w-none font-body text-muted-foreground bg-card border border-border rounded-lg p-8">
          <h3 className="text-foreground font-bold">Return Policy</h3>
          <p>We offer a 15-day return policy for all unused items with original tags.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}