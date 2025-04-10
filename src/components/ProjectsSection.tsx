
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Image Recognition System",
    description:
      "A deep learning model that can identify objects in images with high accuracy using convolutional neural networks.",
    tags: ["Computer Vision", "TensorFlow", "CNN", "Python"],
    githubUrl: "#",
  },
  {
    title: "Natural Language Processing API",
    description:
      "A REST API that provides sentiment analysis, entity recognition, and text classification services.",
    tags: ["NLP", "BERT", "FastAPI", "Python"],
    githubUrl: "#",
  },
  {
    title: "Predictive Maintenance System",
    description:
      "Machine learning models that predict equipment failures before they happen, reducing downtime and maintenance costs.",
    tags: ["Time Series", "Scikit-learn", "IoT", "Python"],
    githubUrl: "#",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "A model that predicts which customers are likely to cancel a subscription service, enabling proactive retention efforts.",
    tags: ["Classification", "XGBoost", "Random Forest", "Python"],
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-[42rem]">
            A collection of machine learning projects showcasing various techniques
            and applications in different domains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="h-full flex flex-col stagger-item fade-in opacity-0 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild className="hover:scale-105 transition-transform">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
