import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  BarChart3, Briefcase, Users, Plus, FileText, MessageSquare, Star, Settings,
  TrendingUp, Eye, CheckCircle, Clock, ChevronRight, Upload, Trash2, Edit, Menu, X,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const stats = [
  { icon: Briefcase, label: "Active Jobs", value: "12", trend: "+3", color: "bg-primary/10 text-primary" },
  { icon: Users, label: "Total Applicants", value: "348", trend: "+28", color: "bg-accent/10 text-accent" },
  { icon: Eye, label: "Profile Views", value: "1.2k", trend: "+15%", color: "bg-success/10 text-success" },
  { icon: Star, label: "Rating", value: "4.7", trend: "★", color: "bg-warning/10 text-warning" },
];

const postedJobs = [
  { id: 1, title: "Senior React Developer", applicants: 48, status: "active", posted: "2 days ago" },
  { id: 2, title: "Product Manager", applicants: 32, status: "active", posted: "1 week ago" },
  { id: 3, title: "UI/UX Designer", applicants: 25, status: "paused", posted: "3 days ago" },
  { id: 4, title: "Backend Engineer", applicants: 61, status: "active", posted: "5 days ago" },
];

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard" },
  { icon: Plus, label: "Post Job" },
  { icon: Briefcase, label: "Manage Jobs" },
  { icon: Users, label: "Applicants" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Star, label: "Subscription" },
  { icon: Settings, label: "Settings" },
];

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const SidebarContent = () => (
    <nav className="space-y-1">
      {sidebarItems.map((item) => (
        <button
          key={item.label}
          onClick={() => { setActiveSection(item.label); setDrawerOpen(false); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
            activeSection === item.label
              ? "bg-sidebar-accent text-sidebar-primary"
              : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          }`}
        >
          <item.icon size={18} />
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 flex-col bg-sidebar border-r border-sidebar-border z-40">
        <div className="p-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
            <Briefcase size={20} className="text-accent-foreground" />
          </div>
          <div>
            <span className="font-display font-bold text-sidebar-foreground text-lg">JobVerse</span>
            <p className="text-[10px] text-sidebar-foreground/50 uppercase tracking-wider">Employer</p>
          </div>
        </div>
        <div className="flex-1 px-3 py-4">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile drawer */}
      {drawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setDrawerOpen(false)} />
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            className="absolute left-0 top-0 bottom-0 w-72 bg-sidebar p-5"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-display font-bold text-sidebar-foreground text-lg">JobVerse</span>
              <button onClick={() => setDrawerOpen(false)} className="text-sidebar-foreground"><X size={20} /></button>
            </div>
            <SidebarContent />
          </motion.aside>
        </motion.div>
      )}

      {/* Main */}
      <main className="lg:ml-64 pb-8">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setDrawerOpen(true)} className="lg:hidden w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Menu size={18} />
              </button>
              <div>
                <h1 className="text-xl font-display font-bold text-foreground">{activeSection}</h1>
                <p className="text-sm text-muted-foreground">Welcome back, TechCorp</p>
              </div>
            </div>
            <Button variant="hero" size="sm" onClick={() => setActiveSection("Post Job")}>
              <Plus size={16} /> Post Job
            </Button>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                  <stat.icon size={18} />
                </div>
                <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <span className="text-xs font-semibold text-success">{stat.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent jobs */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-bold text-foreground">Recent Jobs</h2>
              <button className="text-sm text-primary font-medium">View all</button>
            </div>
            <div className="space-y-3">
              {postedJobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-4 flex items-center gap-4 hover-lift"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm truncate">{job.title}</h3>
                    <p className="text-xs text-muted-foreground">{job.applicants} applicants · {job.posted}</p>
                  </div>
                  <Badge className={`border-0 rounded-lg text-xs ${job.status === "active" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>
                    {job.status}
                  </Badge>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground">
                      <Edit size={14} />
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-destructive">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bulk upload */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 border-2 border-dashed border-border/50 text-center hover-lift cursor-pointer"
          >
            <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
            <h3 className="font-display font-semibold text-foreground">Bulk Upload Jobs</h3>
            <p className="text-sm text-muted-foreground mt-1">Drag & drop an Excel file or click to browse</p>
            <Button variant="outline" size="sm" className="mt-4">Browse Files</Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default EmployerDashboard;
