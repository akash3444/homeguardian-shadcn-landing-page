import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="min-h-[calc(100svh-4rem)] py-16 max-w-(--breakpoint-xl) mx-auto text-center px-6">
      <strong className="font-semibold text-muted-foreground/90">
        Make Better Decisions, Faster
      </strong>
      <h1 className="mt-5 max-w-3xl mx-auto text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Find Safety in Your Home with a Tech Smart Assistant
      </h1>
      <div className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground text-balance">
        <p>
          Our smart assistant uses AI to help you find safety in your home. Find
          peace of mind with a system that adapts to your needs.
        </p>
      </div>
      <div className="mt-12 flex gap-4 justify-center">
        <Button size="lg">Make a Request</Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>

      <div className="mt-20 aspect-video border rounded-lg bg-muted p-2">
        <div className="bg-background h-full w-full rounded-md border"></div>
      </div>
    </div>
  );
}
