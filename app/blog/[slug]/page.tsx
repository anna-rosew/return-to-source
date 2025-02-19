// app/[slug]/page.tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

// Components
import { ArticleTemplate } from "@/components/ui/blog/templates/ArticleTemplate";
import { PodcastTemplate } from "@/components/ui/blog/templates/PodcastTemplate";
import { RecipeTemplate } from "@/components/ui/blog/templates/RecipeTemplate";
import ConstructionLayout from "@/components/layout/ConstructionLayout";

// Utils & Types
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { MDXContent, Post } from "@/types";

// Metadata
export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "The page youre looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Types
interface Props {
  params: {
    slug: string;
  };
}

// Static Params
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

// Main Component
export default async function BlogPost({ params }: Props) {
  // Fetch post data
  const post = await getPostBySlug(params.slug);

  // Handle 404
  if (!post) {
    return notFound();
  }

  // Process MDX content
  const postContent = {
    ...post,
    children: post.content ? <MDXRemote source={post.content} /> : null,
  };

  // Template renderer
  const renderTemplate = () => {
    switch (postContent.type) {
      case "short-article":
      case "long-article":
        return (
          <ArticleTemplate content={postContent} type={postContent.type} />
        );

      case "podcast":
        return (
          <PodcastTemplate
            content={
              postContent as MDXContent & {
                duration: number;
                audioUrl: string;
              }
            }
          />
        );

      case "recipe":
        return (
          <RecipeTemplate
            content={
              postContent as MDXContent & {
                cookingTime: number;
                ingredients: string[];
                instructions: string[];
              }
            }
          />
        );

      default:
        return notFound();
    }
  };

  // Layout wrapper
  return (
    <ConstructionLayout>
      <main className="container mx-auto px-4 py-8">{renderTemplate()}</main>
    </ConstructionLayout>
  );
}
