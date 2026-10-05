import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioCategoryPage from "./pages/PortfolioCategory";
import CaseStudyPage from "./pages/CaseStudy";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import ServicePage, { SERVICES } from "./pages/ServicePage";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/portfolio/:category/case-study" component={CaseStudyPage} />
    <Route path="/portfolio/:category" component={PortfolioCategoryPage} />
    <Route path="/kontaktai" component={Contacts} />
    <Route path="/dashboard" component={Dashboard} />
    {Object.values(SERVICES).map(service => <Route key={service.slug} path={`/paslaugos/${service.slug}`} component={() => <ServicePage service={service} />} />)}
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
