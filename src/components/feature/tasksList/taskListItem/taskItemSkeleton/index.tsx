export function TaskItemSkeleton() {
  return (
    <article className="bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-col h-52 sm:h-64 animate-pulse">
      <div className="flex flex-col flex-1 gap-2">
        {/* Title skeleton */}
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
        </div>

        {/* Date skeleton */}
        <div className="mt-auto flex items-center gap-2">
          <div className="h-4 w-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24"></div>
        </div>
      </div>

      {/* Actions skeleton */}
      <div className="flex gap-4 border-dashed border-slate-200 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4 justify-between items-center">
        <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
          <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    </article>
  );
} 