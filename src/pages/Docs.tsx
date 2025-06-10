
import { motion } from "framer-motion";
import { Book, Shield, Download, Settings, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Docs = () => {
  const sections = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Getting Started",
      description: "Quick setup and installation guide",
      items: [
        "Installing VS Code Extension",
        "Setting up CodeScope Chrome Extension",
        "Initial Configuration",
        "First Vulnerability Scan"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Vulnerability Detection",
      description: "Understanding our security scanning capabilities",
      items: [
        "OWASP Top 10 Coverage",
        "SANS Top 25 Detection",
        "Emerging Threats",
        "Business Logic Vulnerabilities",
        "Custom Security Rules"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Configuration",
      description: "Customize CodeCure.ai for your workflow",
      items: [
        "VS Code Extension Settings",
        "Chrome Extension Options",
        "LLM Model Selection",
        "Notification Preferences",
        "Team Settings"
      ]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Features Guide",
      description: "Learn to use all CodeCure.ai features",
      items: [
        "Auto-Fix Capabilities",
        "Security Chat Assistant",
        "Security Score Analysis",
        "Fix All Button",
        "GitHub Integration"
      ]
    }
  ];

  const quickStart = [
    {
      step: "1",
      title: "Install Extensions",
      description: "Download and install both VS Code and Chrome extensions from their respective marketplaces."
    },
    {
      step: "2",
      title: "Create Account",
      description: "Sign up for a free CodeCure.ai account to access all features and sync across devices."
    },
    {
      step: "3",
      title: "Configure Settings",
      description: "Choose your preferred LLM models and customize notification preferences."
    },
    {
      step: "4",
      title: "Start Scanning",
      description: "Open your code in VS Code or browse GitHub repositories to begin vulnerability detection."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
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
              <Book className="w-4 h-4 inline-block mr-2" />
              Documentation & Guides
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
            Complete
            <br />
            <span className="text-gradient font-medium">Documentation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-left">
            Everything you need to get started with CodeCure.ai and master advanced security features.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="button-gradient">
              Quick Start Guide
            </Button>
            <Button size="lg" variant="outline">
              API Reference
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Quick Start */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">
            Quick <span className="text-gradient font-medium">Start</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickStart.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">
            Documentation
            <br />
            <span className="text-gradient font-medium">Sections</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{section.icon}</div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <a href="#" className="hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            API <span className="text-gradient font-medium">Reference</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Integrate CodeCure.ai into your development workflow with our comprehensive API
          </p>
          
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">REST API Endpoints</h3>
            <div className="space-y-4 text-left">
              <div className="bg-muted/50 rounded-lg p-4">
                <code className="text-primary">POST /api/v1/scan</code>
                <p className="text-sm text-muted-foreground mt-2">Submit code for vulnerability analysis</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <code className="text-primary">GET /api/v1/reports/&#123;reportId&#125;</code>
                <p className="text-sm text-muted-foreground mt-2">Retrieve scan results and security scores</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <code className="text-primary">POST /api/v1/fix</code>
                <p className="text-sm text-muted-foreground mt-2">Request AI-powered vulnerability fixes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;
