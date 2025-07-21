import { MapPin, Building2, Briefcase, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
          About Me
        </h2>
        
        <div>
          <p className="text-lg text-muted-foreground mb-6">
            I&apos;m an AI engineer and entrepreneur with a passion for building products that make people&apos;s lives easier. I also enjoy basketball, rock climbing, <a href="https://www.goodreads.com/user/show/51064473-brian-coombs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">reading fantasy and hard sci-fi</a>, and spent the last 2 years traveling the US <a href="https://www.trustedhousesitters.com/house-and-pet-sitters/united-states/texas/austin/l/3565438/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dogsitting</a>.
          </p>
          
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Austin, TX</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Building2 className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Currently at</h3>
                <p className="text-muted-foreground">
                  <a 
                    href="https://malleable.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Malleable AI
                  </a>
                  {" "}— Building custom AI solutions that transform how businesses operate
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Briefcase className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Past Experience</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-muted-foreground font-medium">Alteryx</p>
                    <p className="text-sm text-muted-foreground">Senior Product Manager • 2022-2025</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground font-medium">Accenture</p>
                    <p className="text-sm text-muted-foreground">Tech Consulting Associate Manager • 2020-2022</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Education</h3>
                <p className="text-muted-foreground">Computer Engineering • UT Austin</p>
              </div>
            </div>
            
          </div>
          
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold text-foreground mb-4">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Web Development",
                "Product Management",
                "Natural Language Processing",
                "Prompt Engineering",
                "LLM Integrations",
                "RAG Systems",
                "AI Strategy",
                "Data Engineering"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}