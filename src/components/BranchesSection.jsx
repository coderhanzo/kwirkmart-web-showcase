import { MapPin, Clock, Phone, Navigation, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import ImageWithLoader from "./ImageWithLoader";
import OrderDialog from "./OrderDialog";
import dzorwuluImage from "@/assets/dzorwulu.png";
import tseaddoImage from "@/assets/tseaddo.png";

const branches = [
  {
    id: "dzorwulu",
    name: "Kwikmart Dzorwulu",
    location: "Dzorwulu, Accra",
    hours: "8:00 AM – 10:00 PM",
    // phone: "+233 24 892 6993",
    // whatsappNumber: "233248926993",
    directions: "https://maps.app.goo.gl/zZxvnReypEifnDwF6",
    rating: 4.4,
    image: dzorwuluImage,
    badge: "Flagship store",
  },
  {
    id: "tseaddo",
    name: "Kwikmart Tseaddo",
    location: "Tseaddo, Accra",
    hours: "8:00 AM – 10:00 PM",
    // phone: "+233 53 884 6558",
    // whatsappNumber: "233538846558",
    directions: "https://maps.app.goo.gl/xVda4Y7dzu2Sd5kk7",
    rating: 4.3,
    image: tseaddoImage,
    // badge: "Top rated",
  },
];

const BranchesSection = () => {
  return (
    <section
      id="branches"
      className="relative px-4 py-16 sm:py-20"
    >
      <div className="container mx-auto">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="gradient-text-primary">branches</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Two stores across Accra, both stocked daily with fresh products and
            staffed to serve you from morning to night.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-2">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="relative">
                <ImageWithLoader
                  src={branch.image}
                  alt={branch.name}
                  aspect="aspect-[16/10]"
                  imgClassName="group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <Badge className="absolute left-4 top-4 rounded-full border-0 bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                  {branch.badge}
                </Badge>
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-xs font-semibold shadow">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  {branch.rating}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="text-xl font-bold text-background drop-shadow sm:text-2xl">
                    {branch.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-background/90">
                    {branch.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <ul className="grid gap-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">{branch.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Opening hours</p>
                      <p className="text-muted-foreground">{branch.hours}</p>
                    </div>
                  </li>
                  {/* <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="break-all text-muted-foreground">{branch.phone}</p>
                    </div>
                  </li> */}
                </ul>

                <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
                  <OrderDialog
                    whatsappNumber={branch.whatsappNumber}
                    message={`Hi ${branch.name}! I'd like to place an order.`}
                    title={`Order from ${branch.name}`}
                    description="Pick your preferred way to order from this branch."
                  >
                    <Button className="flex-1 rounded-xl bg-primary text-primary-foreground shadow-primary hover:bg-primary/90">
                      <Phone className="mr-1.5 h-4 w-4" />
                      Order now
                    </Button>
                  </OrderDialog>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl border-border/60"
                    onClick={() => window.open(branch.directions, "_blank", "noopener")}
                  >
                    <Navigation className="mr-1.5 h-4 w-4" />
                    Directions
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border/60 bg-card/80 p-6 text-center shadow-sm sm:p-8">
          <h3 className="text-xl font-bold sm:text-2xl">Want Kwikmart closer to you?</h3>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            We're mapping out future communities now. Tell us where you'd love to
            see the next Kwikmart open.
          </p>
          <Button
            className="mt-5 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request a location
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
