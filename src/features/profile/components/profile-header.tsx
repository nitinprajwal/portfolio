import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* Flag of India */}
        <svg
          className="absolute top-0 -left-px h-8 sm:h-9"
          viewBox="0 0 30 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="6.67" fill="#ff9933" />
          <rect width="30" height="6.67" fill="#ffffff" y="6.67" />
          <rect width="30" height="6.67" fill="#138808" y="13.33" />
          <g transform="translate(15 10)" stroke="#008" strokeWidth="0" fill="#008">
            <circle r="2.87" strokeWidth="0.4" fillOpacity="0" />
            <circle r="0.53" />
            <g id="quarter">
              <g id="spoke">
                <circle r="0.13" cy="2.67" transform="rotate(7.5)" />
                <polygon points="0,0.27 0.09,1.07 0,2.8 -0.09,1.07" />
              </g>
              <use href="#spoke" transform="rotate(15)" />
              <use href="#spoke" transform="rotate(30)" />
              <use href="#spoke" transform="rotate(45)" />
              <use href="#spoke" transform="rotate(60)" />
              <use href="#spoke" transform="rotate(75)" />
            </g>
            <use href="#quarter" transform="rotate(90)" />
            <use href="#quarter" transform="rotate(180)" />
            <use href="#quarter" transform="rotate(270)" />
          </g>
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
            </SimpleTooltip>
            {USER.namePronunciationUrl && (
              <>
                &nbsp;
                <PronounceMyName
                  className="translate-y-px"
                  namePronunciationUrl={USER.namePronunciationUrl}
                />
              </>
            )}
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>
      </div>
    </div>
  );
}
