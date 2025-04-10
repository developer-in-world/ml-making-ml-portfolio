
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center"
    >
      <div className="container px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Machine Learning Engineer & Data Scientist
          </h1>
          <p className="text-xl text-muted-foreground max-w-[42rem]">
            Building intelligent systems that learn from data and make
            meaningful predictions. Specializing in computer vision, natural
            language processing, and predictive analytics.
          </p>
          <div className="flex gap-4 mt-4">
            <Button asChild className="hover:scale-105 transition-transform">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full"
          >
            <a href="#projects">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
