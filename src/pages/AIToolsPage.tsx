import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Brain, TrendingUp, MessageSquare, DollarSign, Sparkles, ChevronRight, BarChart3, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tools = [
  { icon: FileText, title: "Resume Score", desc: "AI analysis of your resume strength", score: "78/100", color: "from-primary to-primary/60" },
  { icon: Brain, title: "Skill Gap Analysis", desc: "Discover skills you need to learn", badge: "3 gaps", color: "from-accent to-accent/60" },
  { icon: MessageSquare, title: "Interview Practice", desc: "AI-powered mock interviews", badge: "New", color: "from-primary to-accent" },
  { icon: DollarSign, title: "Salary Insights", desc: "Market salary data for your role", badge: "₹18-25L", color: "from-warning to-warning/60" },
  { icon: TrendingUp, title: "Career Path", desc: "Personalized growth roadmap", badge: "5 steps", color: "from-success to-success/60" },
  { icon: Target, title: "Job Match Optimizer", desc: "Improve your match scores", score: "88%", color: "from-primary to-primary/60" },
];

const AIToolsPage = () => {
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
              <Sparkles size={20} className="text-primary" /> AI Tools
            </h1>
            <p className="text-sm text-muted-foreground">Boost your career with AI</p>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="gradient-hero rounded-3xl p-6 mb-6 text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
          <Sparkles size={28} className="mb-3 relative z-10" />
          <h2 className="text-xl font-display font-bold relative z-10">Your AI Career Score</h2>
          <p className="text-sm opacity-70 mt-1 relative z-10">Based on profile, resume & market data</p>
          <div className="flex items-end gap-2 mt-4 relative z-10">
            <span className="text-5xl font-display font-bold">82</span>
            <span className="text-lg opacity-60 mb-1">/100</span>
          </div>
          <Button variant="glass" size="sm" className="mt-4 relative z-10">View Full Report <ChevronRight size={14} /></Button>
        </motion.div>

        {/* Tools grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="glass-card p-5 hover-lift cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-primary-foreground shrink-0`}>
                  <tool.icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{tool.desc}</p>
                  {tool.score && <p className="text-lg font-bold text-primary mt-2">{tool.score}</p>}
                  {tool.badge && !tool.score && (
                    <span className="inline-block mt-2 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold">{tool.badge}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;
