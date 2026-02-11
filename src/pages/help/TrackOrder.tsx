import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TrackOrder() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Track Order</h1>
        <p className="font-body text-lg text-muted-foreground mb-8">Enter your order ID to see the status.</p>
        <div className="bg-card border border-border rounded-lg p-8 max-w-md">
          <input type="text" placeholder="Order ID" className="w-full bg-background border border-border rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary/20" />
          <button className="w-full bg-primary text-primary-foreground font-body font-bold py-2 rounded-full hover:bg-primary/90 transition-colors">Track Status</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}