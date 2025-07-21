import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by Brian Coombs. The source code is available on{" "}
          <Link
            href="https://github.com/briancoombs"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link
            href="https://www.linkedin.com/in/brianc/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/briancoombs"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="mailto:brian@malleable.ai"
            className="hover:text-foreground transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}