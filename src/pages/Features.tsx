
import { motion } from "framer-motion";
import { Shield, Zap, Brain, Target, Code, Search, MessageSquare, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "OWASP Top 10 Detection",
      description: "Comprehensive coverage of the most critical web application security risks including injection flaws, authentication issues, and more."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "SANS Top 25 Coverage",
      description: "Detection of the most dangerous software errors that lead to serious vulnerabilities in software."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emerging Threats Detection",
      description: "Stay ahead with detection of the latest security threats and zero-day vulnerabilities."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Business Logic Threats",
      description: "Advanced AI detection of complex business logic vulnerabilities that traditional scanners miss."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI-Powered Auto-Fix",
      description: "Automatically fix vulnerabilities using advanced LLM models including GPT-4, Claude, and Gemini."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Real-time Scanning",
      description: "Instant vulnerability detection as you type with immediate feedback in your problem tab."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Chat with AI about vulnerabilities to understand and learn security best practices."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Security Scoring",
      description: "Get comprehensive security scores and detailed recommendations for your codebase."
    }
  ];

  const llmModels = [
    "GPT-4.1", "Claude 3.5 Sonnet", "Claude 4", "Gemini 2.5 Flash"
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
              <Shield className="w-4 h-4 inline-block mr-2" />
              Advanced Security Features
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
            Comprehensive Security
            <br />
            <span className="text-gradient font-medium">Detection & Fixing</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-left">
            Discover how CodeCure.ai's advanced features protect your applications from vulnerabilities with AI-powered precision.
          </p>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:glass-hover transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LLM Models Section */}
      <section className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Powered by Leading
            <br />
            <span className="text-gradient font-medium">AI Models</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Choose from multiple state-of-the-art language models for optimal vulnerability detection and fixing
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {llmModels.map((model, index) => (
              <motion.div
                key={model}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-4 text-center"
              >
                <span className="text-sm font-medium">{model}</span>
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
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="glass rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-semibold mb-4">1. Real-time Detection</h3>
                <p className="text-muted-foreground">
                  As you code, our AI continuously scans for vulnerabilities, highlighting issues with warning underlines in your editor.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="glass rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-semibold mb-4">2. Intelligent Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes each vulnerability, providing detailed insights and security scores in the problem tab.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="glass rounded-xl p-8 flex-1">
                <h3 className="text-2xl font-semibold mb-4">3. Automated Fixing</h3>
                <p className="text-muted-foreground">
                  Use our "Fix All" button to automatically resolve all vulnerabilities in a file, or chat with AI to learn and fix manually.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
