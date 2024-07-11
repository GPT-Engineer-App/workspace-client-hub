import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, FileText, HelpCircle, List } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Changed to sidebar layout
import Index from "./pages/Index.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Library from "./pages/Library.jsx";
import SupportAndBilling from "./pages/SupportAndBilling.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Onboarding",
    to: "/onboarding",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Library",
    to: "/library",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Support and Billing",
    to: "/support-and-billing",
    icon: <HelpCircle className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="onboarding" element={<Onboarding />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="library" element={<Library />} />
              <Route path="support-and-billing" element={<SupportAndBilling />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;