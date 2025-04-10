
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-[42rem]">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col items-center scale-in">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4 mb-8">
            <p className="flex items-center justify-center gap-2">
              m.gnanendraworkmail@gmail.com
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
                <a
                  href="https://github.com/developer-in-world"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
                <a
                  href="https://www.linkedin.com/in/gnanendralinked/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:scale-110 transition-transform">
                <a
                  href="https://leetcode.com/u/developer-in-world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                >
                  <Code className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
