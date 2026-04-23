import { MDXContent } from '@/types';
import Image from 'next/image';

interface RecipeTemplateProps {
  content: MDXContent & {
    cookingTime: number;
    ingredients: string[];
    instructions: string[];
  };
}

export function RecipeTemplate({ content }: RecipeTemplateProps) {
  return (
    <article className="prose prose-lg mx-auto max-w-4xl">
      <div className="mb-8">
        <h1>{content.title}</h1>
        <div className="mb-4 flex items-center gap-4 text-gray-600">
          <span>Cooking Time: {content.cookingTime} minutes</span>
        </div>
        <div className="relative mb-8 h-[400px] w-full">
          <Image
            src={content.coverImage}
            alt={content.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <section className="mb-8">
        <h2>Ingredients</h2>
        <ul>
          {content.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Instructions</h2>
        <ol>
          {content.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </section>

      <div className="mt-8">{content.children}</div>
    </article>
  );
}
