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
import type { MDXContent, Post, PodcastPost, RecipePost } from "@/types/index";

// Types
interface Props {
  params: {
    slug: string;
  };
}

// Metadata
export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist.",
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

  // Process MDX content and split into intro and main content
  let introSection;
  let mainContent = null;

  if (post.content) {
    // Split content at the first heading (##)
    const contentParts = post.content.split(/(?=##\s)/);

    if (contentParts.length > 1) {
      // Store both raw content and processed MDX for intro
      introSection = {
        content: contentParts[0].trim(),
        mdxContent: <MDXRemote source={contentParts[0].trim()} />,
      };
      // Rest is main content (including and after first ##)
      mainContent = <MDXRemote source={contentParts.slice(1).join("")} />;
    } else {
      // If no headings found, treat all as main content
      mainContent = <MDXRemote source={post.content} />;
    }
  }

  // Prepare post content with separated intro
  const postContent: MDXContent = {
    ...post,
    intro: introSection,
    children: mainContent,
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
            content={{
              ...postContent,
              duration: (post as PodcastPost).duration,
              audioUrl: (post as PodcastPost).audioUrl,
            }}
          />
        );

      case "recipe":
        return (
          <RecipeTemplate
            content={{
              ...postContent,
              cookingTime: (post as RecipePost).cookingTime,
              ingredients: (post as RecipePost).ingredients,
              instructions: (post as RecipePost).instructions,
            }}
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
