import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
    const location = useLocation();
    useEffect(() => {
        console.warn("Under construction route visited:", location.pathname);
    }, [location.pathname]);
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background px-6 py-16">
      <div className="max-w-lg text-center glass-card p-10 shadow-xl">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-6">
          <span className="text-3xl font-bold text-primary-foreground">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          We’re crafting something special for this space. Check back soon or return to the homepage to keep exploring Kwikmart.
        </p>
        <a href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow">
          Go Home
        </a>
      </div>
    </div>);
};
export default NotFound;
