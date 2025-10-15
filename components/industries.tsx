import {
  ArrowUpRightIcon,
  Cctv,
  CpuIcon,
  HeartHandshakeIcon,
  HousePlugIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { CtaBanner } from "./cta-banner";

const industries = [
  {
    icon: Cctv,
    title: "Security Cameras",
    description:
      "Keep all eyes on your home with our customized security video surveillance systems.",
  },
  {
    icon: HousePlugIcon,
    title: "Home Automation",
    description:
      "Discover the easy-to-use automation system that offers total control of your home.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Fire and Life Safety",
    description:
      "Prepare your home for the unexpected with our fire and life safety appliances.",
  },
  {
    icon: CpuIcon,
    title: "Adjustment Systems",
    description:
      "Keep all eyes on your home with our customized security video surveillance systems.",
  },
];

export function Industries() {
  return (
    <div id="industries" className="bg-primary/4">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24">
        <strong className="font-semibold text-muted-foreground">
          Best for You
        </strong>
        <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
          Industries in Which We Show the Highest Class
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          On the other hand, we denounce with righteous
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-lg border bg-muted p-1"
            >
              <div className="relative px-6 py-10 bg-card rounded-md border h-full overflow-hidden">
                <div className="relative z-1 flex flex-col items-center">
                  <industry.icon
                    className="size-12 text-primary"
                    strokeWidth={1.75}
                  />
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="mt-3">{industry.description}</p>

                  <Button className="mt-6">
                    Learn More <ArrowUpRightIcon />
                  </Button>
                </div>

                <PatternDashedTop />
              </div>
            </div>
          ))}
        </div>

        <CtaBanner className="mt-24" />
      </div>
    </div>
  );
}
const PatternDashedTop = () => {
  return (
    <div
      className="absolute inset-0 -top-px -left-px z-0"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
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
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
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
            ),
            radial-gradient(ellipse 70% 50% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
};
