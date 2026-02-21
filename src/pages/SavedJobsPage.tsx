import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, MapPin, DollarSign, Clock, Building2, Sparkles, ArrowLeft, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const savedJobs = [
  { id: 1, title: "Senior React Developer", company: "TechCorp", location: "Bangalore", salary: "₹18-25 LPA", match: 95, type: "Full-time", logo: "TC" },
  { id: 2, title: "Product Designer", company: "DesignLab", location: "Mumbai", salary: "₹12-18 LPA", match: 88, type: "Remote", logo: "DL" },
  { id: 3, title: "DevOps Engineer", company: "CloudNet", location: "Pune", salary: "₹16-24 LPA", match: 91, type: "Remote", logo: "CN" },
];

const SavedJobsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-8 lg:ml-64">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/dashboard")} className="lg:hidden w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground flex items-center gap-2">
              <Bookmark size={18} className="text-primary" /> Saved Jobs
            </h1>
            <p className="text-sm text-muted-foreground">{savedJobs.length} jobs saved</p>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {savedJobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card p-5 hover-lift cursor-pointer"
            onClick={() => navigate(`/job/${job.id}`)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {job.logo}
              </div>
              <button className="text-destructive/60 hover:text-destructive transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
            <h3 className="font-display font-semibold text-foreground text-sm">{job.title}</h3>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
              <Building2 size={12} /> {job.company}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin size={11} /> {job.location}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><DollarSign size={11} /> {job.salary}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge variant="secondary" className="text-xs rounded-lg">{job.type}</Badge>
              <span className="flex items-center gap-1 text-xs font-semibold text-success"><Sparkles size={12} />{job.match}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobsPage;
