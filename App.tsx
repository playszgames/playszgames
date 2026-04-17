/**
 * CONSOLIDATED APP ROUTER
 * All routes in one file
 * Imports from consolidated components and pages
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  HomePage,
  GamesListingPage,
  GameDetailPage,
  CategoryPage,
  BlogPage,
  BlogArticlePage,
  AboutPage,
  ContactPage,
  FAQPage,
  PrivacyPage,
  TermsPage,
  NotFoundPage,
} from "./pages/Pages";

/**
 * CONSOLIDATED ROUTING CONFIGURATION
 * All 10 pages + 404 in one router
 */
function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={HomePage} />
      <Route path="/games" component={GamesListingPage} />
      <Route path="/game/:id" component={GameDetailPage} />
      <Route path="/category/:category" component={CategoryPage} />

      {/* Blog */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:id" component={BlogArticlePage} />

      {/* Info Pages */}
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />

      {/* 404 */}
      <Route path="/404" component={NotFoundPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

/**
 * MAIN APP COMPONENT
 * Theme provider + Router + UI providers
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
