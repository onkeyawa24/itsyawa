
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-theme-blue text-white bg-gray-800 dark:text-white">
      <div className="section-container bg-gray-800 dark:text-white">
        <div className="max-w-5xl mx-auto bg-gray-800 dark:text-white">
          <div className="grid md:grid-cols-2 gap-12 bg-gray-800 dark:text-white">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gray-800 dark:text-white">
                Get In Touch
              </h2>
              <p className="mb-8 text-theme-highlight bg-gray-800 dark:text-white">
                Have a question or want to work together? Feel free to contact me!
              </p>
              
              <div className="space-y-6 bg-gray-800 dark:text-white">
                <div className="flex items-center gap-4 bg-gray-800 dark:text-white">
                  <div className="bg-white/10 p-3 rounded-full bg-gray-800 dark:text-white">
                    <Mail size={20} className="text-theme-accent bg-gray-800 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium bg-gray-800 dark:text-white">Email</h3>
                    <p className="text-sm text-gray-300 bg-gray-800 dark:text-white">onkeeyawa@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-800 dark:text-white">
                  <div className="bg-white/10 p-3 rounded-full bg-gray-800 dark:text-white">
                    <MessageSquare size={20} className="text-theme-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium">Social Media</h3>
                    <div className="flex gap-4 mt-2 bg-gray-800 dark:text-white">
                      <a 
                        href="https://github.com/onkeyawa24" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-theme-accent transition-colors bg-gray-800 dark:text-white"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/onke-yawa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-theme-accent transition-colors bg-gray-800 dark:text-white"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href="https://www.x.com/onkeyawa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-theme-accent transition-colors bg-gray-800 dark:text-white"
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm bg-gray-800 dark:text-white">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm bg-gray-800 dark:text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 bg-gray-800 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm bg-gray-800 dark:text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 bg-gray-800 dark:text-white"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm bg-gray-800 dark:text-white">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32 bg-gray-800 dark:text-white"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-theme-accent hover:bg-theme-accent/90 text-theme-blue bg-gray-700 dark:text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
