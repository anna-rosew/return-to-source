import { getAllPosts } from '@/lib/blog';
import { INTRO_PARAGRAPH } from '@/content/copy';
import { FeaturedPosts } from '@/components/ui/blog/FeaturedPosts';
import { PostGrid } from '@/components/ui/blog/PostGrid';

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Blog</h1>
      <p className="font-bold md:text-center">{INTRO_PARAGRAPH}</p>

      <section className="page-section">
        <FeaturedPosts posts={posts} />
      </section>
      <section className="page-section">
        <PostGrid posts={posts} />
      </section>
    </div>
  );
}
