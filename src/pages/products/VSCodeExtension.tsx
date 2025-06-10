
import { motion } from "framer-motion";
import { Download, Shield, Zap, Code, MessageSquare, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const VSCodeExtension = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Real-time Detection",
      description: "Instant vulnerability detection as you type with immediate feedback in your problem tab."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Auto-Fix Capabilities",
      description: "One-click fixes for vulnerabilities using advanced AI models including GPT-4, Claude, and Gemini."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Comprehensive Coverage",
      description: "Detects OWASP Top 10, SANS Top 25, emerging threats, and business logic vulnerabilities."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Chat with AI about vulnerabilities to understand security concepts and best practices."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium">
              <Code className="w-4 h-4 inline-block mr-2" />
              VS Code Extension
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
            Secure Coding
            <br />
            <span className="text-gradient font-medium">In Your IDE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-left">
            Transform your VS Code into a powerful security scanner. Detect and fix vulnerabilities instantly without leaving your development environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="button-gradient">
              <Download className="mr-2 w-4 h-4" />
              Install Extension
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">
            Extension <span className="text-gradient font-medium">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">
            How It <span className="text-gradient font-medium">Works</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Install & Setup",
                description: "Download from VS Code Marketplace and authenticate with your CodeCure.ai account."
              },
              {
                step: "2",
                title: "Code Analysis",
                description: "Our AI scans your code in real-time, highlighting vulnerabilities with warning underlines."
              },
              {
                step: "3",
                title: "Review Problems",
                description: "Check the Problems tab to see detailed vulnerability information and security scores."
              },
              {
                step: "4",
                title: "Fix & Learn",
                description: "Use AI-powered fixes or chat to learn about vulnerabilities and security best practices."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div className="glass rounded-xl p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to secure your VS Code?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers using CodeCure.ai VS Code extension to write more secure code.
          </p>
          <Button size="lg" className="button-gradient">
            <Download className="mr-2 w-4 h-4" />
            Install Now - Free
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default VSCodeExtension;
