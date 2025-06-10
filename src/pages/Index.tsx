
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Download, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        id="top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Shield className="w-4 h-4 inline-block mr-2" />
            AI-Powered Code Security & Vulnerability Detection
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-foreground">
              <TextGenerateEffect words="Secure your code with" />
            </span>
            <br />
            <span className="text-foreground font-medium">
              <TextGenerateEffect words="AI-powered precision" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-left"
          >
            Transform your development workflow with CodeCure.ai's advanced security products. Detect and fix vulnerabilities instantly with OWASP Top 10, SANS Top 25 coverage, and emerging threat protection.{" "}
            <span className="text-foreground">Powered by cutting-edge AI models.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Start Free Trial
            </Button>
            <Button size="lg" variant="link" className="text-foreground">
              Explore Products <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="CodeCure.ai Security Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Products Overview */}
      <section className="container px-4 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight text-left">
            Our
            <br />
            <span className="text-gradient font-medium">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground text-left">
            Two powerful security tools designed to seamlessly integrate into your development workflow and protect your applications from vulnerabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">VS Code Extension</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Transform your development environment into a powerful security scanner. Get real-time vulnerability detection, AI-powered fixes, and comprehensive security insights without leaving your IDE.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Real-time vulnerability detection as you type
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                One-click AI-powered auto-fix capabilities
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Comprehensive security score & recommendations
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                OWASP Top 10 & SANS Top 25 coverage
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Interactive security learning with AI chat
              </li>
            </ul>
            <Button className="w-full button-gradient">
              <Download className="mr-2 w-4 h-4" />
              Install VS Code Extension
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">CodeScope Chrome Extension</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Enhance your GitHub browsing experience with instant code security analysis. Scan any repository, get detailed vulnerability insights, and learn about secure coding practices directly in your browser.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Seamless GitHub integration for instant scanning
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Detailed vulnerability insights & explanations
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Interactive security learning with AI assistance
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Code security scoring & recommendations
              </li>
              <li className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                No context switching required
              </li>
            </ul>
            <Button variant="outline" className="w-full">
              <Chrome className="mr-2 w-4 h-4" />
              Add to Chrome
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Testimonials Section */}
      <div className="bg-background">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-background">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to secure your codebase?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust CodeCure.ai to protect their applications with advanced AI-powered security analysis and vulnerability detection.
          </p>
          <Button size="lg" className="button-gradient">
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
