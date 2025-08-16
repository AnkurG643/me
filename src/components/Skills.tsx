import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript", "HTML5", "CSS3"],
      color: "primary"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "accent"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD", "Jest", "Cypress"],
      color: "secondary"
    },
    {
      title: "Design & Others",
      skills: ["Figma", "Adobe XD", "REST APIs", "Agile", "Scrum", "UI/UX", "Responsive Design"],
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

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Experience</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  period: "2022 - Present",
                  role: "Senior Full Stack Developer",
                  company: "Tech Solutions Inc.",
                  description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
                },
                {
                  period: "2020 - 2022",
                  role: "Frontend Developer",
                  company: "Digital Agency",
                  description: "Built responsive web applications and collaborated with design teams to create exceptional user experiences."
                },
                {
                  period: "2019 - 2020",
                  role: "Junior Developer",
                  company: "StartUp Co.",
                  description: "Developed features for the company's main product using modern JavaScript frameworks and best practices."
                }
              ].map((exp, index) => (
                <Card key={index} className="bg-card-gradient border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-primary">{exp.role}</h4>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;