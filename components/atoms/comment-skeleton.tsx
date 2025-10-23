const CommentCardSkeleton = () => {
  return (
    <div className="flex flex-col pl-4 relative animate-pulse">
      <div className="flex gap-2">
        {/* Avatar */}
        <div className="relative mt-1 h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-700" />

        <div className="flex-1 space-y-2">
          {/* Username */}
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />

          {/* Comment text lines */}
          <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-700 rounded" />

          {/* Media (optional) */}
          <div className="h-24 w-48 bg-gray-300 dark:bg-gray-700 rounded mt-2" />

          {/* Actions */}
          <div className="flex items-center gap-4 mt-2">
            <div className="h-3 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-3 w-8 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-3 w-5 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCardSkeleton;
