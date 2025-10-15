import {
  Airbnb,
  Cursor,
  Firebase,
  Mocha,
  Roblox,
  Shopify,
  TravelPerk,
  Turso,
  Vercel,
  Webflow,
} from "./logos";

export function LogoCloud() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 bg-primary/5 rounded-lg border border-dashed p-1">
      {logos.map((Logo, index) => (
        <div
          key={index}
          className="bg-background h-24 border rounded-md border-dashed flex items-center justify-center px-6"
        >
          <Logo className="aspect-video h-18 grayscale-100 text-foreground/70" />
        </div>
      ))}
      <div className="hidden md:flex lg:hidden col-span-2 items-center justify-center">
        …and countless others who trust us every day
      </div>
    </div>
  );
}

const logos = [
  Roblox,
  Vercel,
  TravelPerk,
  Cursor,
  Mocha,
  Firebase,
  Turso,
  Shopify,
  Airbnb,
  Webflow,
];
