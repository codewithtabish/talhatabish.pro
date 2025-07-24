// app/[locale]/loading.tsx or app/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";


export default function Loading() {
;  // Optional: use theme for background if you want

  return (
    <main className="w-full min-h-screen flex justify-center bg-background">
      <div
        className="
          w-full
          max-w-screen-sm
          sm:max-w-screen-md
          md:max-w-screen-lg
          lg:max-w-screen-xl
          xl:max-w-screen-2xl
          2xl:max-w-[1600px]
          px-2
          sm:px-4
          md:px-8
          flex flex-col
          space-y-10
          sm:space-y-14
          md:space-y-16
          lg:space-y-24
        "
      >
        {/* Confetti/Particles */}
        <Skeleton className="w-full h-10 rounded-xl bg-muted/60" />

        {/* Hero Section */}
        <div className="min-h-[80vh] w-full max-w-screen-xl lg:px-10 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Block */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <Skeleton className="h-12 w-3/4 mx-auto lg:mx-0 rounded" />
            <Skeleton className="h-6 w-2/3 mx-auto lg:mx-0 rounded" />
          </div>
          {/* 3D Card */}
          <div className="w-full lg:w-auto flex justify-center">
            <Skeleton className="md:w-[240px] w-full h-[300px] rounded-xl" />
          </div>
        </div>

        {/* About Section */}
        <section className="w-full max-w-screen-xl mx-auto px-4 lg:px-10">
          <Skeleton className="h-8 w-1/3 mb-6 rounded" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>
        </section>

        {/* Hero Video */}
        <div className="overflow-hidden rounded-lg border md:max-w-4xl 2xl:max-w-7xl mx-auto">
          <Skeleton className="w-full h-[320px] md:h-[420px] rounded-lg" />
        </div>

        {/* Education Section */}
        <section className="w-full">
          <div className="min-h-[80vh] w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-10">
            {/* Info Section */}
            <div className="flex-1 flex flex-col justify-center w-full space-y-4">
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-8 w-1/2 mb-4" />
              <Skeleton className="h-4 w-2/3 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-32 rounded-md" />
                <Skeleton className="h-10 w-32 rounded-md" />
              </div>
            </div>
            {/* Timeline Section */}
            <div className="flex-1 relative w-full space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto text-center">
          <Skeleton className="h-4 w-1/4 mx-auto mb-2" />
          <Skeleton className="h-8 w-1/2 mx-auto mb-6" />
          <div className="mb-10 space-y-2 max-w-2xl mx-auto">
            <Skeleton className="h-4 w-2/3 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-2xl" />
            ))}
          </div>
          <Skeleton className="h-16 w-full mt-8 rounded-xl" />
        </section>

        {/* Trusted By Companies */}
        <div className="w-full max-w-2xl mx-auto text-center">
          <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
          <div className="grid grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded" />
            ))}
          </div>
          <Skeleton className="h-32 w-full mt-8 rounded-xl" />
        </div>

        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto text-center">
          <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/3 mx-auto mb-2" />
          <Skeleton className="h-4 w-2/3 mx-auto mb-10" />
        </section>

        {/* Card Carousel */}
        <section className="w-full max-w-4xl mx-auto">
          <Skeleton className="h-80 w-full rounded-3xl" />
        </section>

        {/* Home Project Section */}
        <section>
          <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-2" />
          <Skeleton className="h-4 w-2/3 mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-72 w-full rounded-lg" />
            ))}
          </div>
        </section>

        {/* Home Blog Section */}
        <section>
          <Skeleton className="h-10 w-1/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto mb-2" />
          <Skeleton className="h-4 w-2/3 mx-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-72 w-full rounded-lg" />
            ))}
          </div>
        </section>

        {/* Blog Page List */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-72 w-full rounded-lg" />
            ))}
          </div>
        </section>

        {/* Feedbacks */}
        <section className="w-full px-4 sm:px-6 lg:px-10 py-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <Skeleton className="h-8 w-1/3 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-6" />
            <Skeleton className="h-10 w-3/4 mb-8" />
            <div className="flex flex-col items-center mb-6">
              <Skeleton className="w-16 h-16 rounded-full mb-2" />
              <Skeleton className="h-4 w-1/4 mb-1" />
              <Skeleton className="h-4 w-1/6" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 w-full rounded-t-xl bg-secondary dark:bg-secondary/20">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-12 sm:px-6 lg:px-8 lg:pt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <Skeleton className="h-10 w-10 rounded-full mx-auto" />
                  <Skeleton className="h-6 w-1/2 mx-auto" />
                  <Skeleton className="h-4 w-2/3 mx-auto" />
                  <Skeleton className="h-4 w-1/2 mx-auto" />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            <div className="mt-10 border-t pt-6">
              <div className="text-center flex flex-col items-center gap-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
