import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { POSTS } from "@/data/blog";

export const Route = createFileRoute("/biblioteca/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: [
        { title: post ? `${post.title} — Biblioteca Arcana` : "Manuscrito" },
        { name: "description", content: post?.excerpt ?? "" },
        { property: "og:title", content: post?.title ?? "" },
        { property: "og:description", content: post?.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/biblioteca/${post?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/biblioteca/${post?.slug ?? ""}` }],
      scripts: post ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          articleSection: post.category,
          description: post.excerpt,
        }),
      }] : [],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-serif text-muted-foreground">Este manuscrito se ha perdido en las sombras.</p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-serif text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <article className="py-24 container mx-auto px-6 max-w-3xl">
        <Link to="/biblioteca" className="text-xs font-display tracking-widest text-muted-foreground hover:text-gold">
          ← BIBLIOTECA
        </Link>
        <p className="font-display text-xs tracking-[0.4em] text-gold mt-8 mb-4">{post.category.toUpperCase()}</p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">{post.title}</h1>
        <p className="text-xs font-display tracking-widest text-muted-foreground/60 mb-12">
          {new Date(post.date).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime}
        </p>
        <div className="divider-rune mb-12"><span className="font-display text-xl">ᛟ</span></div>
        <div className="space-y-6 font-serif text-lg text-foreground/90 leading-relaxed">
          {post.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
        </div>
      </article>
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
