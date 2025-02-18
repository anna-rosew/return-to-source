import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArticleTemplate } from "@/components/ui/blog/templates/ArticleTemplate";
import { PodcastTemplate } from "@/components/ui/blog/templates/PodcastTemplate";
import { RecipeTemplate } from "@/components/ui/blog/templates/RecipeTemplate";
import TableOfContents from "@/components/ui/blog/TableOfContents";
import ConstructionLayout from "@/components/layout/ConstructionLayout";
import type { MDXContent, Post } from "@/types";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const postContent = {
    ...post,
    children: post.content ? <MDXRemote source={post.content} /> : null,
  };

  const renderTemplate = () => {
    switch (postContent.type) {
      case "short-article":
      case "long-article":
        return (
          <>
            {postContent.type === "long-article" && postContent.sections && (
              <TableOfContents sections={postContent.sections} />
            )}
            <ArticleTemplate content={postContent} type={postContent.type} />
          </>
        );
      case "podcast":
        return (
          <PodcastTemplate
            content={
              postContent as MDXContent & { duration: number; audioUrl: string }
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

  return (
    <ConstructionLayout>
      <div className="container mx-auto px-4 py-8">{renderTemplate()}</div>
    </ConstructionLayout>
  );
}
