
import { motion } from "framer-motion";
import { Chrome, Shield, Search, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CodeScope = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "GitHub Integration",
      description: "Seamlessly scan any GitHub repository code directly in your browser without leaving the page."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Detailed Vulnerability Insights",
      description: "Get comprehensive analysis of selected code with detailed vulnerability explanations and impact assessment."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Interactive Security Chat",
      description: "Chat with AI to learn about specific vulnerabilities and get personalized security recommendations."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Security Scoring",
      description: "Instant security scores for code snippets with actionable recommendations for improvement."
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
              <Chrome className="w-4 h-4 inline-block mr-2" />
              Chrome Extension
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
            Security Analysis
            <br />
            <span className="text-gradient font-medium">On GitHub</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-left">
            Analyze GitHub code for vulnerabilities without leaving your browser. CodeScope brings enterprise-grade security analysis to your fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="button-gradient">
              <Chrome className="mr-2 w-4 h-4" />
              Add to Chrome
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
            CodeScope <span className="text-gradient font-medium">Features</span>
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
            How CodeScope <span className="text-gradient font-medium">Works</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Install Extension",
                description: "Add CodeScope to Chrome and authenticate with your CodeCure.ai account."
              },
              {
                step: "2",
                title: "Browse GitHub",
                description: "Navigate to any GitHub repository and browse code files as you normally would."
              },
              {
                step: "3",
                title: "Select & Scan",
                description: "Highlight any code snippet and click the CodeScope icon to trigger vulnerability analysis."
              },
              {
                step: "4",
                title: "Review & Learn",
                description: "Get detailed insights, security scores, and chat with AI to understand vulnerabilities."
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

      {/* Benefits Section */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">
            Why Choose <span className="text-gradient font-medium">CodeScope</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No Context Switching",
                description: "Analyze code security without leaving GitHub or switching between tools."
              },
              {
                title: "Instant Analysis",
                description: "Get vulnerability insights in seconds with our powerful AI analysis engine."
              },
              {
                title: "Learning Focused",
                description: "Interactive chat helps you understand vulnerabilities and improve security knowledge."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
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
            Secure GitHub browsing starts here
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join security-conscious developers using CodeScope to analyze code vulnerabilities directly on GitHub.
          </p>
          <Button size="lg" className="button-gradient">
            <Chrome className="mr-2 w-4 h-4" />
            Add to Chrome - Free
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default CodeScope;
