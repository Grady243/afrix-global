import type { Metadata } from "next"
import { PageHeader } from "../../components/page-header"
import { BlogGrid } from "../../components/blog-grid"

export const metadata: Metadata = {
  title: "Blog - Afrix Global",
  description:
    "Retrouvez nos articles, actualites et publications sur le numerique, la formation et l'innovation en Afrique.",
}

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="NOTRE"
        highlight="BLOG"
        highlightColor="text-afrix-blue"
        description="Restez informe des dernieres actualites, tendances et conseils dans le domaine du numerique et de la formation en Afrique."
      />
      <BlogGrid />
    </main>
  )
}
