import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function CtaBanner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative dark dark:invert bg-background rounded-lg text-foreground py-20 px-10 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative z-1">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter max-w-3xl mx-auto leading-[1.1]">
          Trust HomeGuardian with Your Home's Security
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          We will protect your home in any place in the world with our smart
          assistant.
        </p>

        <Button className="mt-10" size="lg">
          Get a free quote
        </Button>
      </div>

      <div
        className="absolute inset-0 -top-4 -left-px z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, oklch(from var(--foreground) l c h / 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, oklch(from var(--foreground) l c h / 0.1) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </div>
  );
}
