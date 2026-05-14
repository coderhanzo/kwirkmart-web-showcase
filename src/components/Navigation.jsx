import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import OrderDialog from "./OrderDialog";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Products", to: "/products", type: "route" },
  { label: "About Us", to: "/about", type: "route" },
  { label: "Branches", to: "/#branches", type: "hash" },
  { label: "Contact", to: "/#contact", type: "hash" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const linkClass = ({ isActive }) =>
    cn(
      "text-sm font-medium transition-colors",
      isActive ? "text-primary" : "text-foreground/75 hover:text-primary"
    );

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-background/0"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/kwirkmart.png"
              alt="Kwikmart logo"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) =>
              link.type === "route" ? (
                <NavLink key={link.to} to={link.to} className={linkClass} end>
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              )
            )}
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-primary/30 text-primary hover:border-primary hover:bg-primary/10"
            >
              <Link to="/products">
                <ShoppingBag className="mr-1.5 h-4 w-4" />
                Shop
              </Link>
            </Button>
            <OrderDialog>
              <Button
                size="sm"
                className="rounded-full bg-green-600 text-white hover:bg-green-700"
              >
                <Phone className="mr-1.5 h-4 w-4" />
                Order Now
              </Button>
            </OrderDialog>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="rounded-xl"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-border/40 bg-background/95 py-4 backdrop-blur-lg md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.type === "route" ? (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    end
                    className={({ isActive }) =>
                      cn(
                        "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:bg-muted hover:text-foreground"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                )
              )}
              <OrderDialog>
                <Button
                  className="mx-4 mt-3 justify-center bg-green-600 text-white hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Order Now
                </Button>
              </OrderDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
