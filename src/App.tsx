
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ListingDetails from "./pages/ListingDetails";
import Payment from "./pages/Payment";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";
import HelpCenter from "./pages/HelpCenter";
import Host from "./pages/Host";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/host" element={<Host />} />
          <Route path="/aircover" element={<NotFound />} />
          <Route path="/safety" element={<NotFound />} />
          <Route path="/accessibility" element={<NotFound />} />
          <Route path="/disaster-relief" element={<NotFound />} />
          <Route path="/anti-discrimination" element={<NotFound />} />
          <Route path="/host-protection" element={<NotFound />} />
          <Route path="/hosting-resources" element={<NotFound />} />
          <Route path="/community-forum" element={<NotFound />} />
          <Route path="/newsroom" element={<NotFound />} />
          <Route path="/features" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/investors" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
