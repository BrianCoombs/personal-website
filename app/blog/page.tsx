import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Thoughts on AI, automation, and building intelligent systems.
        </p>
        
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}