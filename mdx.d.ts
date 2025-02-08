declare module "*.mdx" {
  import type { ReactNode } from "react";

  export const frontMatter: {
    title: string;
    excerpt: string;
    date: string;
    type: "short-article" | "long-article" | "podcast" | "recipe";
    tags: string[];
    featured: boolean;
    coverImage: string;
    duration?: number;
    cookingTime?: number;
  };

  // Create a specific interface for the MDX component props
  interface MDXProps {
    components?: Record<string, React.ComponentType>;
    children?: ReactNode;
  }

  function MDXComponent(props: MDXProps): ReactNode;
  export default MDXComponent;
}
