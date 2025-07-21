import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/media/headshot.webp"
            alt="Brian Coombs"
            width={200}
            height={200}
            className="rounded-full border-4 border-border"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Brian Coombs
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          AI engineer (currently at <a href="https://malleable.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Malleable AI</a>) passionate about helping companies and non-profits use AI to
          automate monotony and create wow moments. Love iterating quickly with customers on tools that make life easier.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="text-sm font-semibold leading-6 hover:text-muted-foreground"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}