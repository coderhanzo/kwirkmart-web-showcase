import { Mail, Phone, Clock, Send, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Dzorwulu Branch",
      description: "WhatsApp us for quick assistance",
      contact: "024 892 6993",
      type: "whatsapp",
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Tseaddo Branch", 
      description: "Reach our team directly on WhatsApp",
      contact: "053 884 6558",
      type: "whatsapp",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      description: "We're open daily to serve you",
      contact: "8:00 AM - 10:00 PM",
      type: "hours",
      color: "bg-primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions and feedback",
      contact: "kwikmart18@gmail.com",
      type: "email",
      color: "bg-secondary"
    }
  ];

  const faqs = [
    {
      question: "What are your delivery hours?",
      answer: "We offer delivery from 8 AM to 10 PM, 7 days a week. Same-day delivery available for orders placed before 2 PM."
    },
    {
      question: "Do you accept returns?",
      answer: "Yes! We have a 30-day return policy for non-perishable items and immediate returns for damaged products."
    },
    {
      question: "How fresh are your products?",
      answer: "We receive fresh deliveries daily and guarantee freshness. All products have clear expiration dates."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Absolutely! Contact us directly for bulk orders and special pricing for large purchases."
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or need assistance? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="glass-card hover-lift p-6 group cursor-pointer transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.color} text-white shadow-lg`}>
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="font-medium text-foreground">
                        {method.contact}
                      </p>
                    </div>
                    {method.type === 'whatsapp' && (
                      <MessageCircle className="h-5 w-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="glass-button border-glass-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="glass-button border-glass-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="glass-button border-glass-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  placeholder="How can we help you?" 
                  className="glass-button border-glass-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5} 
                  className="glass-button border-glass-border focus:border-primary resize-none transition-colors"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-primary-foreground rounded-2xl py-4 hover-lift group shadow-primary hover:shadow-xl transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-glass-border">
              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card hover-lift p-6 group cursor-pointer transition-all duration-300">
                <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                  {faq.question}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;