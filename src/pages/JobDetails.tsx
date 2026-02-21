import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bookmark, MapPin, DollarSign, Clock, Building2, Users, Star, Share2, CheckCircle } from "lucide-react";
import { useState } from "react";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-background pb-28">
      {/* Header */}
      <div className="gradient-hero px-4 sm:px-6 pt-4 pb-8 safe-top">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground">
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground">
                <Share2 size={18} />
              </button>
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => setSaved(!saved)}
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground"
              >
                <Bookmark size={18} className={saved ? "fill-current" : ""} />
              </motion.button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary-foreground flex items-center justify-center text-primary font-bold text-xl shrink-0">
              TC
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-display font-bold text-primary-foreground">Senior React Developer</h1>
              <div className="flex items-center gap-2 mt-1.5 text-primary-foreground/70 text-sm">
                <Building2 size={14} /> TechCorp
                <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
                <MapPin size={14} /> Bangalore
              </div>
              <div className="flex gap-2 mt-3">
                <Badge className="bg-primary-foreground/15 text-primary-foreground border-0 rounded-lg text-xs">Full-time</Badge>
                <Badge className="bg-success/20 text-success border-0 rounded-lg text-xs">95% Match</Badge>
              </div>
            </div>
          </motion.div>

          {/* Quick info */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { icon: DollarSign, label: "Salary", value: "₹18-25 LPA" },
              { icon: Clock, label: "Posted", value: "2 hours ago" },
              { icon: Users, label: "Applicants", value: "48" },
            ].map((info) => (
              <div key={info.label} className="bg-primary-foreground/10 rounded-xl p-3 text-center">
                <info.icon size={16} className="text-primary-foreground/70 mx-auto mb-1" />
                <p className="text-[10px] text-primary-foreground/50 uppercase tracking-wide">{info.label}</p>
                <p className="text-sm font-semibold text-primary-foreground">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-4">
        <div className="glass-card-elevated p-1 flex gap-1 rounded-2xl">
          {["description", "requirements", "company"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium capitalize transition-all ${
                activeTab === tab ? "gradient-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 space-y-4"
        >
          {activeTab === "description" && (
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>We are looking for a Senior React Developer to join our growing engineering team. You will be responsible for building and maintaining high-quality web applications using modern React patterns.</p>
              <h3 className="font-display font-semibold text-foreground text-base">Responsibilities</h3>
              <ul className="space-y-2">
                {["Develop and maintain React applications", "Collaborate with design and backend teams", "Write clean, maintainable TypeScript code", "Conduct code reviews and mentor junior developers", "Optimize performance and ensure scalability"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-success mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "requirements" && (
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h3 className="font-display font-semibold text-foreground text-base">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "GraphQL", "AWS", "CI/CD", "Testing"].map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-lg px-3 py-1.5">{s}</Badge>
                ))}
              </div>
              <h3 className="font-display font-semibold text-foreground text-base mt-4">Experience</h3>
              <p>5+ years of professional experience with React and modern JavaScript frameworks.</p>
            </div>
          )}
          {activeTab === "company" && (
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold">TC</div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">TechCorp</h3>
                  <div className="flex items-center gap-1 text-xs"><Star size={12} className="text-warning fill-warning" /> 4.5 · 230 reviews</div>
                </div>
              </div>
              <p>TechCorp is a leading technology company building enterprise SaaS solutions for the healthcare industry. Founded in 2015, we have grown to 500+ employees across 3 continents.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Fixed apply bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border p-4 safe-bottom lg:ml-64">
        <div className="max-w-3xl mx-auto flex gap-3">
          <Button variant="outline" size="lg" className="flex-1">Message</Button>
          <Button variant="hero" size="lg" className="flex-[2]">Apply Now</Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
