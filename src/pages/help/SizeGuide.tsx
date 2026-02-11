import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SizeGuide() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Size Guide</h1>
        <p className="font-body text-lg text-muted-foreground mb-8">Find the perfect fit for your little ones.</p>
        <div className="bg-card border border-border rounded-lg p-8">
          <p className="font-body text-foreground">Standard size charts and measurement tips coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}