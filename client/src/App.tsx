import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ServicePage, { SERVICES } from "./pages/ServicePage";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    {Object.values(SERVICES).map(service => <Route key={service.slug} path={`/paslaugos/${service.slug}`} component={() => <ServicePage service={service} />} />)}
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
