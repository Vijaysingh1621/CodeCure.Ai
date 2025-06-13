
import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CardSpotlight } from "@/components/pricing/CardSpotlight";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for individual developers getting started",
      features: [
        "Basic vulnerability scans per month",
        "Basic OWASP Top 10 detection",
        "VS Code extension access",
        "Security score reporting",
        "Community support"
      ],
      isPopular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Advanced features for professional developers",
      features: [
        "Unlimited vulnerability scans",
        "Full OWASP Top 10 + SANS Top 25",
        "Emerging threats detection",
        "AI-powered auto-fix",
        "All LLM models access",
        "CodeScope Chrome extension",
        "Priority support",
        "Advanced security analytics"
      ],
      isPopular: true,
      buttonText: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Pro",
        "Custom deployment options",
        "Advanced compliance reporting",
        "Custom security rules",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
        "Team management dashboard"
      ],
      isPopular: false,
      buttonText: "Contact Sales"
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
          >
            <span className="text-sm font-medium">
              <Shield className="w-4 h-4 inline-block mr-2" />
              Transparent Pricing
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight">
            Choose Your Security
            <br />
            <span className="text-gradient font-medium">Plan</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start free and scale as your security needs grow. All plans include our core vulnerability detection features.
          </p>
        </div>
      </motion.section>

      {/* Pricing Cards */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CardSpotlight className={`h-full ${plan.isPopular ? "border-primary" : "border-white/10"} border-2`}>
                <div className="relative h-full p-6 flex flex-col">
                  {plan.isPopular && (
                    <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={plan.isPopular ? "button-gradient w-full" : "w-full"}
                    variant={plan.isPopular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-normal mb-12 text-center">
            Frequently Asked
            <br />
            <span className="text-gradient font-medium">Questions</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What happens when I exceed the free plan limits?",
                answer: "When you reach the 50 scan limit on the free plan, you'll be prompted to upgrade to Pro for unlimited scans and additional features."
              },
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance."
              },
              {
                question: "Is my code secure?",
                answer: "Yes, we use industry-standard encryption and never store your actual source code. Only metadata required for analysis is processed."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
