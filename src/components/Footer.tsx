
import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn("border-t bg-background", className)}
      {...props}
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} developer-in-world. All rights reserved.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Built with React, Tailwind CSS, and shadcn/ui
        </p>
      </div>
    </footer>
  );
}
