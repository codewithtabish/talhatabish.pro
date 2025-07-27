"use client";

import React, { Suspense } from "react";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from "@/components/ui/kibo-ui/video-player";
import { Skeleton } from "@/components/ui/skeleton";

// Optional: Add a poster image for better UX/SEO
// const VIDEO_POSTER = "/images/video-poster.jpg"; // Replace with your poster image path

const VIDEO_SRC =
  "https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4";

// Optional: Add captions for accessibility/SEO
// const CAPTIONS_SRC = "/videos/hero-captions.vtt"; // Replace with your captions file if available

function VideoPlayerWithFallback() {
  return (
    <VideoPlayer
      className="
        w-full
        rounded-lg
        border
        overflow-hidden
        mx-auto
        aspect-video
        min-h-[180px]
        sm:min-h-[240px]
        md:min-h-[320px]
        lg:min-h-[400px]
        2xl:min-h-[480px]
        max-w-full
      "
      aria-label="Hero video: Welcome to the portfolio"
      tabIndex={0}
    >
      <VideoPlayerContent
        crossOrigin=""
        muted
        preload="auto"
        slot="media"
        src={VIDEO_SRC}
        // poster={VIDEO_POSTER}
        playsInline
        tabIndex={-1}
      >
        {/* Captions for accessibility */}
        <track
          kind="captions"
          // src={CAPTIONS_SRC}
          srcLang="en"
          label="English"
          default
        />
      </VideoPlayerContent>
      <VideoPlayerControlBar>
        <VideoPlayerPlayButton />
        <VideoPlayerSeekBackwardButton />
        <VideoPlayerSeekForwardButton />
        <VideoPlayerTimeRange />
        <VideoPlayerTimeDisplay showDuration />
        <VideoPlayerMuteButton />
        <VideoPlayerVolumeRange />
      </VideoPlayerControlBar>
    </VideoPlayer>
  );
}

export default function KiboHeroVideo() {
  return (
    <Suspense
      fallback={
        <Skeleton className="w-full aspect-video min-h-[180px] sm:min-h-[240px] md:min-h-[320px] lg:min-h-[400px] 2xl:min-h-[480px] rounded-lg" />
      }
    >
      <VideoPlayerWithFallback />
    </Suspense>
  );
}
