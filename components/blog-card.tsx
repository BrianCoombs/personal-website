import Link from "next/link"
import { BlogPost } from "@/types"
import { Calendar, Clock } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const dateObj = new Date(post.date + 'T00:00:00')
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  })

  return (
    <article className="group relative flex flex-col space-y-2">
      <h3 className="text-xl font-semibold">
        <Link 
          href={`/blog/${post.slug}`}
          className="hover:text-primary transition-colors"
        >
          <span className="absolute inset-0" />
          {post.title}
        </Link>
      </h3>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
        {post.readingTime && (
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readingTime}</span>
          </div>
        )}
      </div>
      <p className="text-muted-foreground">{post.excerpt}</p>
    </article>
  )
}