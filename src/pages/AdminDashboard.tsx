import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BarChart3, Briefcase, Users, FileText, Brain, Shield, TrendingUp,
  Search, AlertTriangle, Ban, CheckCircle, XCircle, Eye, Download, Settings, ChevronRight
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { icon: BarChart3, label: "Overview" },
  { icon: Briefcase, label: "Jobs" },
  { icon: Users, label: "Users" },
  { icon: Shield, label: "Employers" },
  { icon: Brain, label: "AI Monitoring" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const overviewStats = [
  { label: "Active Users", value: "24.5k", trend: "+12%", icon: Users, color: "bg-primary/10 text-primary" },
  { label: "Active Jobs", value: "3,847", trend: "+8%", icon: Briefcase, color: "bg-accent/10 text-accent" },
  { label: "Revenue", value: "₹12.4L", trend: "+22%", icon: TrendingUp, color: "bg-success/10 text-success" },
  { label: "Reports", value: "18", trend: "-3", icon: AlertTriangle, color: "bg-warning/10 text-warning" },
];

const alerts = [
  { id: 1, type: "fake_job", title: "Suspicious job posting detected", desc: "\"Work from home - $5000/day\" by user xyz_corp", severity: "high" },
  { id: 2, type: "spam", title: "Spam account cluster", desc: "12 accounts created from same IP in 5 minutes", severity: "medium" },
  { id: 3, type: "employer", title: "Unverified employer flagged", desc: "QuickHire Inc. - multiple user complaints", severity: "high" },
];

const recentUsers = [
  { id: 1, name: "Ravi Kumar", email: "ravi@example.com", role: "seeker", status: "active", verified: true },
  { id: 2, name: "Priya Singh", email: "priya@corp.com", role: "employer", status: "active", verified: true },
  { id: 3, name: "John Doe", email: "john@fake.com", role: "seeker", status: "suspended", verified: false },
  { id: 4, name: "Anita Desai", email: "anita@startup.io", role: "employer", status: "active", verified: false },
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Overview");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 flex-col bg-sidebar border-r border-sidebar-border z-40 hidden md:flex">
        <div className="p-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-destructive/80 flex items-center justify-center">
            <Shield size={20} className="text-destructive-foreground" />
          </div>
          <div>
            <span className="font-display font-bold text-sidebar-foreground text-lg">JobVerse</span>
            <p className="text-[10px] text-sidebar-foreground/50 uppercase tracking-wider">Admin</p>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveSection(item.label)}
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
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-display font-bold text-foreground">{activeSection}</h1>
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search..." className="h-10 rounded-xl pl-9 w-64 bg-card" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive font-bold text-sm">A</div>
            </div>
          </div>
        </header>

        <div className="px-6 lg:px-8 py-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {overviewStats.map((stat, i) => (
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

          {/* AI Alerts */}
          <div>
            <h2 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <Brain size={18} className="text-primary" /> AI Monitoring Alerts
            </h2>
            <div className="space-y-3">
              {alerts.map((alert, i) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`glass-card p-4 border-l-4 ${alert.severity === "high" ? "border-l-destructive" : "border-l-warning"}`}
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className={alert.severity === "high" ? "text-destructive" : "text-warning"} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm">{alert.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{alert.desc}</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">Review</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Users table */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-bold text-foreground">Recent Users</h2>
              <Button variant="outline" size="sm"><Download size={14} /> Export</Button>
            </div>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">User</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Role</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase">Verified</th>
                      <th className="text-right p-4 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                              {user.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{user.name}</p>
                              <p className="text-xs text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="secondary" className="capitalize rounded-lg text-xs">{user.role}</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className={`border-0 rounded-lg text-xs ${user.status === "active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          {user.verified ? <CheckCircle size={16} className="text-success" /> : <XCircle size={16} className="text-muted-foreground" />}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground"><Eye size={14} /></button>
                            <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-destructive"><Ban size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
