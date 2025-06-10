
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "CodeCure.ai's VS Code extension has revolutionized how I write secure code. The real-time vulnerability detection catches issues before they make it to production. It's like having a security expert pair programming with me."
  },
  {
    name: "Marcus Rodriguez",
    role: "DevSecOps Manager",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The AI-powered auto-fix feature is incredible. What used to take hours of research and manual fixing now happens in seconds. Our team's security posture has improved dramatically since adopting CodeCure.ai."
  },
  {
    name: "Emily Zhang",
    role: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "The CodeScope Chrome extension makes code reviews so much more effective. I can instantly analyze any GitHub repository for vulnerabilities and learn about secure coding practices. It's an essential tool for any developer."
  },
  {
    name: "David Kim",
    role: "Security Architect",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "CodeCure.ai's coverage of OWASP Top 10 and SANS Top 25 vulnerabilities is comprehensive. The detailed explanations help our junior developers understand not just what's wrong, but why it's wrong and how to fix it."
  },
  {
    name: "Jessica Thompson",
    role: "Lead Developer",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "The interactive chat feature is brilliant. When I encounter a vulnerability I don't understand, I can ask the AI for clarification and learn about security best practices. It's like having a security mentor available 24/7."
  },
  {
    name: "Alex Johnson",
    role: "Cybersecurity Consultant",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "I recommend CodeCure.ai to all my clients. The combination of real-time detection, AI-powered fixes, and educational content makes it the perfect tool for building security-first development teams."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Developers</h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of security-conscious developers using CodeCure.ai
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 glass hover:glass-hover transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 glass hover:glass-hover transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
