import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ShoppingBag, TrendingDown, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Quality Products.<br />Affordable Prices.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Shop from our curated collection of high-quality items at prices that won't break the bank.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8">
                Start Shopping
              </Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Browse Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-border py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-4">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Best Prices</h3>
                <p className="text-sm text-muted-foreground">
                  Competitive pricing on all products
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">
                  All products verified for quality
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick shipping across India
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-muted rounded-full mb-4">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">12+ Products</h3>
                <p className="text-sm text-muted-foreground">
                  Curated selection for your needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Create your account today and discover quality products at affordable prices.
          </p>
          <Link to="/auth">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 Affordable Price. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
