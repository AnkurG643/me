import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      color: "primary"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Flask", "PostgreSQL", "MongoDB"],
      color: "accent"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "AWS", "Vercel", "Linux" , "Render"],
      color: "secondary"
    },
    {
  title: "Machine Learning",
  skills: ["Streamlit", "Scikit-learn", "Pandas", "NumPy"],
  color: "accent"
},

    {
      title: "Design & Others",
      skills: ["Figma",  "UI/UX", "Responsive Design"],
      color: "muted"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 transition-smooth hover:card-glow hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-xl text-center text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;