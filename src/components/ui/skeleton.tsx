import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-gray-700", className)} {...props} />;
}

// Dish Card Skeleton
function DishCardSkeleton() {
  return (
    <div className="bg-ocean-surface rounded-2xl overflow-hidden">
      <Skeleton className="aspect-[4/3] rounded-t-2xl" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 mt-4">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full mt-4 rounded-lg" />
      </div>
    </div>
  );
}

// Testimonial Card Skeleton
function TestimonialCardSkeleton() {
  return (
    <div className="bg-ocean-surface rounded-2xl p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="w-4 h-4 rounded-full" />
        ))}
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-3">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}

// Gallery Image Skeleton
function GalleryImageSkeleton() {
  return <Skeleton className="aspect-square rounded-xl" />;
}

// Space Card Skeleton
function SpaceCardSkeleton() {
  return (
    <div className="bg-ocean-surface rounded-2xl overflow-hidden">
      <Skeleton className="aspect-[4/3]" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <div className="flex gap-2 mt-4">
          <Skeleton className="h-8 w-24 rounded-lg" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
        <Skeleton className="h-10 w-full mt-4 rounded-lg" />
      </div>
    </div>
  );
}

export { 
  Skeleton, 
  DishCardSkeleton, 
  TestimonialCardSkeleton, 
  GalleryImageSkeleton,
  SpaceCardSkeleton 
};
