import { Instagram } from "lucide-react";

const footerLinks = [
  { title: "Products", href: "/products" },
  { title: "About Us", href: "/about" },
  { title: "Branches", href: "/#branches" },
  { title: "Contact", href: "/#contact" },
  { title: "Help Center", href: "/under-construction" },
  { title: "Terms of Service", href: "/under-construction" },
  { title: "Careers", href: "/under-construction" },
  { title: "Privacy Policy", href: "https://kwirkmart.expertech.dev/privacy-policy/" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kwikmart_gh/",
    Icon: Instagram,
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border/60 bg-gradient-glass backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kwikmart</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Your modern shopping experience, reimagined for the digital age.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kwikmart on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Explore</h4>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block transition-colors hover:text-primary"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Kwikmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
