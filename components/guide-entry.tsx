import Image from "next/image"

interface GuideEntryProps {
  title: string
  description: string
  details: string[]
  imageSrc: string
  imageAlt: string
  index: number
}

export function GuideEntry({
  title,
  description,
  details,
  imageSrc,
  imageAlt,
  index,
}: GuideEntryProps) {
  return (
    <article className="border-b border-border py-8 last:border-b-0">
      <div className="mb-4 flex items-baseline gap-3">
        <span className="text-sm text-primary">
          {"["}
          {String(index).padStart(2, "0")}
          {"]"}
        </span>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border md:w-80 md:flex-shrink-0">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>

        <div className="flex-1">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            {description}
          </p>
          <ul className="flex flex-col gap-2">
            {details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="mt-0.5 text-primary">{">"}</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
