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
    const url = `https://norse-whispers-vault.lovable.app/biblioteca/${post?.slug ?? ""}`;
    return {
      meta: [
        { title: post ? `${post.title} — Biblioteca Arcana` : "Manuscrito" },
        { name: "description", content: post?.excerpt ?? "" },
        { property: "og:title", content: post ? `${post.title} — Biblioteca Arcana` : "Manuscrito" },
        { property: "og:description", content: post?.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:title", content: post ? `${post.title} — Biblioteca Arcana` : "Manuscrito" },
        { name: "twitter:description", content: post?.excerpt ?? "" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: post ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            articleSection: post.category,
            description: post.excerpt,
            inLanguage: "es",
            author: { "@type": "Organization", name: "Mystical Alchemy" },
            publisher: { "@type": "Organization", name: "Mystical Alchemy" },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://norse-whispers-vault.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Biblioteca", item: "https://norse-whispers-vault.lovable.app/biblioteca" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ] : [],
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
        <nav aria-label="breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-display tracking-widest text-muted-foreground">
            <li><Link to="/" className="hover:text-gold transition-colors">Inicio</Link></li>
            <li aria-hidden="true" className="text-muted-foreground/50">&gt;</li>
            <li><Link to="/biblioteca" className="hover:text-gold transition-colors">Biblioteca Arcana</Link></li>
            <li aria-hidden="true" className="text-muted-foreground/50">&gt;</li>
            <li><Link to="/biblioteca" className="hover:text-gold transition-colors">{post.category}</Link></li>
            <li aria-hidden="true" className="text-muted-foreground/50">&gt;</li>
            <li className="text-foreground max-w-[200px] truncate">{post.title}</li>
          </ol>
        </nav>
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
          {post.body.map((p: string, i: number) => {
            if (p.startsWith("## ")) {
              return <h2 key={i} className="font-display text-2xl md:text-3xl text-gold mt-12 mb-4 leading-tight">{p.slice(3)}</h2>;
            }
            if (p.startsWith("### ")) {
              return <h3 key={i} className="font-display text-xl md:text-2xl text-foreground mt-8 mb-3">{p.slice(4)}</h3>;
            }
            if (p.startsWith("--- ")) {
              return <div key={i} className="divider-rune my-10"><span className="font-display text-xl">{p.slice(4)}</span></div>;
            }
            if (p.startsWith("> ")) {
              return <blockquote key={i} className="border-l-2 border-gold/60 pl-6 italic text-foreground/80 my-6">{p.slice(2)}</blockquote>;
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
      </article>
      <Newsletter />
      <SiteFooter />
    </div>
  );
}
