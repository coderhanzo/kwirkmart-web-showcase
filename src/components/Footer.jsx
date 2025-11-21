const footerLinks = [
  {
    title: "Help Center",
    href: "/under-construction"
  },
  {
    title: "Terms of Service", 
    href: "/under-construction"
  },
  {
    title: "Connect",
    href: "/under-construction"
  },
  {
    title: "Newsletter",
    href: "/under-construction" 
  },
  {
    title: "Social Media",
    href: "/under-construction"
  },
  {
    title: "Careers",
    href: "/under-construction"
  },
  {
    title: "Privacy Policy",
    href: "https://kwirkmart.expertech.dev/privacy-policy/"
  }
];

const Footer = () => {
  return (
    <footer className="bg-gradient-glass backdrop-blur-lg border-t border-glass-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kwikmart</h3>
            <p className="text-muted-foreground text-sm">
              Your modern shopping experience, reimagined for the digital age.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Explore</h4>
            <div className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block hover:text-primary transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-glass-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Kwikmart. All rights reserved. Built with modern technology for a better shopping experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
