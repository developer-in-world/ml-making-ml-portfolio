import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

type Skill = {
  name: string;
  level: number;
  category: "Languages" | "Machine Learning" | "Tools" | "Frameworks";
};

const skills: Skill[] = [
  { name: "Python", level: 95, category: "Languages" },
  { name: "R", level: 80, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "TensorFlow", level: 90, category: "Frameworks" },
  { name: "Scikit-learn", level: 90, category: "Frameworks" },
  { name: "Computer Vision", level: 85, category: "Machine Learning" },
  { name: "Natural Language Processing", level: 80, category: "Machine Learning" },
  { name: "Deep Learning", level: 90, category: "Machine Learning" },
  { name: "Time Series Analysis", level: 75, category: "Machine Learning" },
  { name: "Docker", level: 80, category: "Tools" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "AWS", level: 75, category: "Tools" },
  { name: "Kubernetes", level: 65, category: "Tools" },
];

const categories = ["Languages", "Machine Learning", "Frameworks", "Tools"];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  return (
    <section id="skills" className="py-16">
      <div className="container px-4">
        <div className="flex flex-col items-center text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-[42rem]">
            Technical skills and areas of expertise in machine learning,
            programming languages, and related technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.map((category) => (
            <div key={category} className="space-y-6 slide-in opacity-0">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress 
                        value={isVisible ? skill.level : 0} 
                        className="h-2 transition-all duration-1000 ease-out"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
