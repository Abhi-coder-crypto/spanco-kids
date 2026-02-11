import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="font-body text-lg text-muted-foreground mb-8">We are here to help you.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-bold text-foreground mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-2">Email: support@spanco.com</p>
            <p className="text-muted-foreground">Phone: +91 98765 43210</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-bold text-foreground mb-4">Send a Message</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-background border border-border rounded-full px-4 py-2" />
              <textarea placeholder="Message" className="w-full bg-background border border-border rounded-lg px-4 py-2 h-32"></textarea>
              <button className="w-full bg-primary text-primary-foreground font-body font-bold py-2 rounded-full hover:bg-primary/90 transition-colors">Send</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}