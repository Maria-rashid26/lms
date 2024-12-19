import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have a Skeleton component

export function SkeletonCard() {
  return (
    <div className="border rounded-lg shadow-sm p-3 bg-white dark:bg-gray-900 hover:shadow-md transition duration-200">
      {/* Skeleton for Course Image */}
      <Skeleton className="h-28 w-full rounded-md" />

      {/* Skeleton for Course Title */}
      <Skeleton className="h-4 w-[200px] mt-3" />

      {/* Skeleton for Course Instructor */}
      <Skeleton className="h-3 w-[150px] mt-2" />

      {/* Skeleton for Icons and Text */}
      <div className="flex items-center justify-between text-gray-400 mt-2 text-xs dark:text-gray-500">
        <Skeleton className="h-3 w-[60px]" />
        <Skeleton className="h-3 w-[60px]" />
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-200 my-3 dark:border-gray-600"></div>

      {/* Skeleton for Price and Rating */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-4 w-[50px]" />
      </div>
    </div>
  );
}
