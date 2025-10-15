import { Separator } from "@/components/ui/separator";
import { Dribbble, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

const sections = [
  {
    title: "Company",
    links: [
      { title: "About", href: "/#about" },
      { title: "Careers", href: "/#careers" },
      { title: "Blog", href: "/#blog" },
      { title: "Press", href: "/#press" },
      { title: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { title: "Features", href: "/#features" },
      { title: "Pricing", href: "/#pricing" },
      { title: "Integrations", href: "/#integrations" },
      { title: "Demo", href: "/#demo" },
      { title: "FAQs", href: "/#faqs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Docs", href: "/#docs" },
      { title: "Help Center", href: "/#help" },
      { title: "Community", href: "/#community" },
      { title: "Tutorials", href: "/#tutorials" },
      { title: "Status", href: "/#status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/#privacy" },
      { title: "Terms of Service", href: "/#terms" },
      { title: "Cookie Policy", href: "/#cookies" },
      { title: "Security", href: "/#security" },
      { title: "Licenses", href: "/#licenses" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-card border-t px-6 py-2">
      <div className="mx-auto max-w-screen-xl">
        <div className="pt-8 pb-12">
          <div className="mt-10 grid grid-cols-2 gap-12 sm:grid-cols-4 lg:grid-cols-6">
            <div className="col-span-full lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2">
                <Logo />
              </Link>
              <p className="text-muted-foreground mt-1.5">
                Beautify your website with our free and premium blocks.
              </p>
            </div>
            {sections.map(({ title, links }) => (
              <div key={title}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-center gap-6 px-2 pt-6 pb-4 sm:flex-row sm:justify-between">
          <p className="text-muted-foreground text-sm font-medium">
            &copy; {new Date().getFullYear()} Bloxxee. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Dribbble className="text-muted-foreground h-5 w-5" />
            </Link>
            <Link href="/">
              <Twitter className="text-muted-foreground h-5 w-5" />
            </Link>
            <Link href="/">
              <Github className="text-muted-foreground h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
