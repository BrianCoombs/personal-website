import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import readingTime from 'reading-time'
import { BlogPost } from '@/types'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(content)
    const contentHtml = processedContent.toString()

    const post: BlogPost = {
      slug: realSlug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content: contentHtml,
      readingTime: readingTime(content).text
    }

    console.info('[Blog] Loaded post:', realSlug)
    return post
  } catch (error) {
    console.error('[Blog] Failed to load post:', slug, error)
    return null
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn('[Blog] Posts directory does not exist:', postsDirectory)
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async fileName => {
          const slug = fileName.replace(/\.md$/, '')
          return getPostBySlug(slug)
        })
    )

    const posts = allPostsData
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1))

    console.info(`[Blog] Loading ${posts.length} posts from /content/blog`)
    return posts
  } catch (error) {
    console.error('[Blog] Failed to load posts:', error)
    return []
  }
}