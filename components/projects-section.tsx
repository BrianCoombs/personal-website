"use client"

import { ProjectCard } from "./project-card"
import { Project } from "@/types"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects: Project[] = [
  {
    id: "1",
    title: "Intern.House",
    description: "Built a site for matching tech interns at Google, Tesla, Amazon, AMD, Apple, SpaceX, and other companies to rent by the room houses in Austin. Also built rental automation stack for owners. 500+ interns helped across 20+ houses in Austin Texas.",
    screenshot: "/projects/intern.house.webp",
    link: "https://intern.house/",
    technologies: ["React", "Node.js", "SQL", "GCP", "Twilio", "OpenAI"]
  },
  {
    id: "2",
    title: "PickFlick",
    description: "A group movie swiping app with Clerk authentication using the TMDb API. Swipe through movies with friends and instantly find the perfect film everyone wants to watch.",
    screenshot: "/projects/pickflick.webp",
    link: "https://pickflick.vercel.app/",
    technologies: ["Next.js", "PostgreSQL", "Vercel", "Clerk Auth", "TMDb API"]
  },
  {
    id: "3",
    title: "Home for the Holidays",
    description: "Site to match ~1000+ children with $200,000 in holiday gifts from sponsors in the community every year. Previously took a team of 20+ Foundation Communities volunteers.",
    screenshot: "/projects/h4h.webp",
    link: "https://foundcom.org/home-for-the-holidays/",
    technologies: ["Next.js", "Node.js", "CosmosDB", "Azure", "B2C Auth"]
  }
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / projects.length
      carouselRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth"
      })
    }
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0
    scrollToIndex(newIndex)
  }

  // Check if we need to show controls based on viewport
  useEffect(() => {
    const checkIfControlsNeeded = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth
        const scrollWidth = carouselRef.current.scrollWidth
        // Show controls if content overflows the container
        setShowControls(scrollWidth > containerWidth)
        
        // Check if mobile (showing one at a time)
        const isMobileView = window.innerWidth < 768 // md breakpoint
        setIsMobile(isMobileView)
      }
    }

    checkIfControlsNeeded()
    window.addEventListener('resize', checkIfControlsNeeded)
    return () => window.removeEventListener('resize', checkIfControlsNeeded)
  }, [])

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Some projects I&apos;ve built to learn new technologies and solve real world problems
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4 ${
              showControls ? 'px-12 md:px-0' : ''
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="h-full">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {showControls && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 lg:-translate-x-4 bg-background border rounded-full p-2 shadow-lg hover:bg-accent transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 lg:translate-x-4 bg-background border rounded-full p-2 shadow-lg hover:bg-accent transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Dots Indicator - Only show on mobile */}
          {showControls && isMobile && (
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}