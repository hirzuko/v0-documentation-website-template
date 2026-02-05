import React from "react"
interface NoticeBlockProps {
  title: string
  children: React.ReactNode
}

export function NoticeBlock({ title, children }: NoticeBlockProps) {
  return (
    <div className="rounded-sm border border-primary/30 bg-primary/5 p-4">
      <p className="mb-1 text-sm font-bold text-primary">{title}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  )
}
