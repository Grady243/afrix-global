
interface PageHeaderProps {
  title: string
  highlight: string
  highlightColor?: string
  description?: string
}

export function PageHeader({
  title,
  highlight,
  highlightColor = "text-afrix-blue",
  description,
}: PageHeaderProps) {
  return (
    <section
      className="relative w-full bg-afrix-dark pt-8 pb-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 0%, rgba(66, 133, 244, 0.3), transparent 25%), radial-gradient(circle at 100% 100%, rgba(219, 68, 55, 0.3), transparent 35%)",
      }}
    >
      <div className="w-[80%] mx-auto mt-16 flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
          {title} <span className={highlightColor}>{highlight}</span>
        </h1>
        {description && (
          <p className="text-white/70 text-base sm:text-lg max-w-175 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
