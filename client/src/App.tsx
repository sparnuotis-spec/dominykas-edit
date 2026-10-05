import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CaseStudyPage from "./pages/CaseStudy";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import ServicePage, { SERVICES } from "./pages/ServicePage";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/portfolio/:category" component={CaseStudyPage} />
    <Route path="/kontaktai" component={Contacts} />
    <Route path="/dashboard" component={Dashboard} />
    {Object.values(SERVICES).map(service => <Route key={service.slug} path={`/paslaugos/${service.slug}`} component={() => <ServicePage service={service} />} />)}
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

function HashScroll() {
  const [location] = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      window.requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash));
        if (!target) return;

        const top = target.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [location]);

  return null;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><HashScroll /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
