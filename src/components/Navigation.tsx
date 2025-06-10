
import { useState, useEffect } from "react";
import { Shield, Menu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      scrollToElement(sectionId);
    }
  };

  const scrollToElement = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const products = [
    {
      title: "VS Code Extension",
      description: "Real-time vulnerability detection in your IDE",
      href: "/products/vscode-extension",
    },
    {
      title: "CodeScope Chrome Extension", 
      description: "GitHub code scanning in your browser",
      href: "/products/codescope",
    },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-14 bg-background/80 backdrop-blur-xl border border-border scale-95 w-[90%] max-w-3xl" 
          : "h-14 bg-background/90 backdrop-blur-lg w-[95%] max-w-4xl border border-border/50"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" onClick={() => handleNavClick('/', 'top')} className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-bold text-base">CodeCure.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <Link
                        to="/products"
                        onClick={() => handleNavClick('/products')}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border-b border-border"
                      >
                        <div className="text-sm font-medium leading-none">All Products</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comprehensive overview of CodeCure.ai security tools
                        </p>
                      </Link>
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          to={product.href}
                          onClick={() => handleNavClick(product.href)}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{product.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {product.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/features"
              onClick={() => handleNavClick('/features')}
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              onClick={() => handleNavClick('/pricing')}
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/docs"
              onClick={() => handleNavClick('/docs')}
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
            >
              Docs
            </Link>
            <ThemeToggle />
            <Button size="sm" className="button-gradient">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground">Products</h4>
                    <Link
                      to="/products"
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors pl-4"
                      onClick={() => handleNavClick('/products')}
                    >
                      All Products
                    </Link>
                    {products.map((product) => (
                      <Link
                        key={product.title}
                        to={product.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors pl-4"
                        onClick={() => handleNavClick(product.href)}
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/features"
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => handleNavClick('/features')}
                  >
                    Features
                  </Link>
                  <Link
                    to="/pricing"
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => handleNavClick('/pricing')}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/docs"
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => handleNavClick('/docs')}
                  >
                    Docs
                  </Link>
                  <Button 
                    onClick={() => handleNavClick('/')}
                    className="button-gradient mt-4"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
