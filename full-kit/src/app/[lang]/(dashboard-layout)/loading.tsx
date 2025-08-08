export default function Loading() {
  return (
    <div className="container grid gap-4 p-4 md:grid-cols-2">
      {/* Skeleton cards */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-lg border p-6">
          <div className="space-y-4">
            <div className="h-4 w-1/3 animate-pulse rounded bg-muted"></div>
            <div className="h-8 w-1/2 animate-pulse rounded bg-muted"></div>
            <div className="h-24 animate-pulse rounded bg-muted"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
