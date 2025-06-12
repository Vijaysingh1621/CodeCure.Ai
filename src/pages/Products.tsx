
import { motion } from "framer-motion";
import { Shield, Zap, Download, Chrome, Code, Bug, Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import chrome from "../../public/chromeExt.jpg"
import vscode from "../../public/vscode.png";

const Products = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Real-time Scanning",
      description: "Instant vulnerability detection as you write code"
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "OWASP Top 10",
      description: "Complete coverage of critical security risks"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Fixes",
      description: "Automated vulnerability resolution"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Security Scoring",
      description: "Comprehensive code security assessment"
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
              <Shield className="w-4 h-4 inline-block mr-2" />
              CodeCure.ai Products
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
            Powerful Security Tools
            <br />
            <span className="text-gradient font-medium">For Every Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-left">
            Comprehensive security solutions that integrate seamlessly into your development workflow. From IDE extensions to browser tools, CodeCure.ai has you covered.
          </p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* VS Code Extension */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-10 h-10 text-primary" />
              <div>
                <h2 className="text-3xl font-semibold">VS Code Extension</h2>
                <p className="text-muted-foreground">Transform your IDE into a security powerhouse</p>
              </div>
            </div>
            
            <div className="mb-6">
              <img
                src={vscode}
                alt="VS Code Extension Screenshot"
                className="w-full rounded-lg"
              />
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Real-time Vulnerability Detection</span>
                      <p className="text-sm text-muted-foreground">Get instant warnings as you type with underlined vulnerable code sections</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">AI-Powered Auto-Fix</span>
                      <p className="text-sm text-muted-foreground">One-click fixes using GPT-4, Claude, and Gemini models</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Comprehensive Security Scoring</span>
                      <p className="text-sm text-muted-foreground">Detailed security assessments and recommendations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Interactive Learning</span>
                      <p className="text-sm text-muted-foreground">Chat with AI to understand vulnerabilities and learn best practices</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Security Coverage</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-lg p-3">
                    <span className="text-sm font-medium">OWASP Top 10</span>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <span className="text-sm font-medium">SANS Top 25</span>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <span className="text-sm font-medium">Emerging Threats</span>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <span className="text-sm font-medium">Business Logic</span>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full button-gradient" size="lg">
              <Download className="mr-2 w-5 h-5" />
              Install VS Code Extension
            </Button>
          </motion.div>

          {/* Chrome Extension */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-primary" />
              <div>
                <h2 className="text-3xl font-semibold">CodeScope Chrome Extension</h2>
                <p className="text-muted-foreground">GitHub security analysis in your browser</p>
              </div>
            </div>
            
            <div className="mb-6">
              <img
                src={chrome}
                alt="Chrome Extension Screenshot"
                className="w-full rounded-lg"
              />
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Seamless GitHub Integration</span>
                      <p className="text-sm text-muted-foreground">Analyze any public repository with a single click</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Instant Security Insights</span>
                      <p className="text-sm text-muted-foreground">Get detailed vulnerability reports without leaving GitHub</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Educational Experience</span>
                      <p className="text-sm text-muted-foreground">Learn about security vulnerabilities with detailed explanations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Repository Scoring</span>
                      <p className="text-sm text-muted-foreground">Comprehensive security scoring for entire repositories</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Perfect For</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Open source contributors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Security researchers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Code reviewers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Development teams</span>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              <Chrome className="mr-2 w-5 h-5" />
              Add to Chrome
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Why Choose
            <br />
            <span className="text-gradient font-medium">CodeCure.ai</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our products are designed with developers in mind, providing powerful security features without disrupting your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-primary mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to secure your development workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers using CodeCure.ai to build more secure applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-gradient">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
