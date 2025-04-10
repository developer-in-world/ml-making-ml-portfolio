
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/" className="flex items-center gap-2">
            developer-in-world
          </a>
        </div>

        {isMobile ? (
          <>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 z-50 bg-background border-b">
                <div className="container py-4 flex flex-col space-y-4">
                  <a
                    href="#home"
                    className="px-4 py-2 hover:bg-muted rounded-md"
                    onClick={toggleMenu}
                  >
                    Home
                  </a>
                  <a
                    href="#projects"
                    className="px-4 py-2 hover:bg-muted rounded-md"
                    onClick={toggleMenu}
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="px-4 py-2 hover:bg-muted rounded-md"
                    onClick={toggleMenu}
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 hover:bg-muted rounded-md"
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <a
                href="#home"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
}
