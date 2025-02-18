import Image from "next/image";
import { useMemo } from "react";
import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return useMemo(
    () => ({
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold mb-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-semibold mb-2">{children}</h3>
      ),
      p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
      ul: ({ children }) => (
        <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
      ),
      li: ({ children }) => <li className="ml-4">{children}</li>,
      img: ({ src, alt }: { src?: string; alt?: string }) => {
        if (!src) return null;

        return (
          <div className="relative w-full h-64 my-4">
            <Image
              src={src}
              alt={alt || ""}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        );
      },
      ...components,
    }),
    [components]
  );
}
