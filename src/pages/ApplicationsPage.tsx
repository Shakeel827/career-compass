import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Clock, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const applications = [
  { id: 1, title: "Senior React Developer", company: "TechCorp", status: "applied", date: "2 days ago", logo: "TC" },
  { id: 2, title: "Product Designer", company: "DesignLab", status: "shortlisted", date: "1 week ago", logo: "DL" },
  { id: 3, title: "Full Stack Engineer", company: "StartupX", status: "rejected", date: "3 days ago", logo: "SX" },
  { id: 4, title: "DevOps Engineer", company: "CloudNet", status: "applied", date: "1 day ago", logo: "CN" },
];

const statusConfig = {
  applied: { label: "Applied", color: "bg-primary/10 text-primary", icon: Clock },
  shortlisted: { label: "Shortlisted", color: "bg-success/10 text-success", icon: CheckCircle },
  rejected: { label: "Rejected", color: "bg-destructive/10 text-destructive", icon: XCircle },
};

const ApplicationsPage = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const filters = ["all", "applied", "shortlisted", "rejected"];
  const filtered = filter === "all" ? applications : applications.filter((a) => a.status === filter);

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-8 lg:ml-64">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/dashboard")} className="lg:hidden w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">Applications</h1>
            <p className="text-sm text-muted-foreground">{applications.length} total applications</p>
          </div>
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize whitespace-nowrap transition-all ${
                filter === f ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-3">
        {filtered.map((app, i) => {
          const config = statusConfig[app.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;
          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4 hover-lift cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                  {app.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm truncate">{app.title}</h3>
                  <p className="text-xs text-muted-foreground">{app.company} · {app.date}</p>
                </div>
                <Badge className={`${config.color} border-0 rounded-lg text-xs gap-1`}>
                  <StatusIcon size={12} /> {config.label}
                </Badge>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationsPage;
