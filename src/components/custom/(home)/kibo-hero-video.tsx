'use client';

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

const VIDEO_SRC =
  "https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4";

function VideoPlayerWithFallback() {
  return (
    <div className="w-full aspect-video rounded-lg border overflow-hidden bg-black">
      <VideoPlayer
        className="w-full h-full"
        aria-label="Hero video: Welcome to the portfolio"
        tabIndex={0}
      >
        <VideoPlayerContent
          crossOrigin=""
          muted
          preload="auto"
          slot="media"
          src={VIDEO_SRC}
          playsInline
          tabIndex={-1}
        >
          <track
            kind="captions"
            srcLang="en"
            label="English"
            default
          />
        </VideoPlayerContent>
        <VideoPlayerControlBar
          className="flex items-center px-3 py-3 bg-white/90 dark:bg-zinc-900/90"
        >
          <VideoPlayerPlayButton className="text-black dark:text-white w-10 h-10 mx-1" />
          <VideoPlayerSeekBackwardButton className="text-black dark:text-white w-10 h-10 mx-1" />
          <VideoPlayerSeekForwardButton className="text-black dark:text-white w-10 h-10 mx-1" />
          <VideoPlayerTimeRange className="mx-2 flex-1" />
          <VideoPlayerTimeDisplay className="text-black dark:text-white font-medium min-w-[70px]" showDuration />
          <VideoPlayerMuteButton className="text-black dark:text-white w-10 h-10 mx-1" />
          <VideoPlayerVolumeRange className="ml-2 w-20" />
        </VideoPlayerControlBar>
      </VideoPlayer>
    </div>
  );
}

export default function KiboHeroVideo() {
  return (
    <Suspense
      fallback={
        <div className="w-full aspect-video rounded-lg">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      }
    >
      <VideoPlayerWithFallback />
    </Suspense>
  );
}
