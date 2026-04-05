import { Bell, BookOpen, BriefcaseBusiness, LayoutGrid, Search, Shield, TerminalSquare, Trophy } from "lucide-react";
import { Link, NavLink } from "react-router-dom";


const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/lessons/open-source-basics", label: "Lessons", icon: BookOpen },
  { to: "/challenges", label: "Challenges", icon: Trophy },
  { to: "/community", label: "Community", icon: BriefcaseBusiness },
];


export function Navigation() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[280px] border-r border-outline bg-surface-lowest/90 backdrop-blur-xl lg:flex lg:flex-col">
        <div className="border-b border-outline px-6 py-5">
          <Link to="/" className="block font-display text-lg font-bold tracking-[-0.02em] text-text">
            The Maintainer Atelier
          </Link>
          <p className="mt-3 rounded-2xl bg-surface-low px-4 py-3 text-sm text-muted shadow-card">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Open Source Programs</span>
            <span className="mt-2 block font-semibold text-text">Admin console for contributor journeys</span>
          </p>
        </div>
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-[linear-gradient(135deg,rgba(79,70,229,0.28),rgba(195,192,255,0.16))] text-text shadow-card"
                        : "text-muted hover:bg-surface-low hover:text-text",
                    ].join(" ")
                  }
                >
                  <Icon size={16} />
                  {item.label}
                </NavLink>
              );
            })}
          </div>
          <div className="mt-8 rounded-2xl bg-[linear-gradient(135deg,rgba(79,70,229,0.9),rgba(195,192,255,0.45))] p-[1px] shadow-card">
            <div className="rounded-2xl bg-surface-low px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-tertiary">Safe sandbox</p>
              <p className="mt-2 text-sm text-muted">Run guided Git practice without exposing the real shell.</p>
              <Link
                to="/lessons/open-source-basics"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary-container px-4 py-3 text-sm font-semibold text-white shadow-card"
              >
                <TerminalSquare size={15} />
                Start sandbox
              </Link>
            </div>
          </div>
        </nav>
        <div className="border-t border-outline px-4 py-4 text-sm text-muted">
          <div className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-surface-low">
            <Shield size={16} />
            Community-safe workflows
          </div>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-10 border-b border-outline bg-surface/70 backdrop-blur-xl lg:left-[280px]">
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="hidden items-center gap-2 rounded-xl bg-surface-low px-3 py-2 text-muted sm:flex">
              <Search size={15} />
              <span className="text-sm">Search lessons, cohorts, issues...</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="hidden rounded-xl px-3 py-2 text-sm font-medium text-primary md:inline-flex">
              Dashboard
            </Link>
            <button className="rounded-xl bg-surface-low p-2 text-muted hover:text-text">
              <Bell size={16} />
            </button>
            <Link
              to="/login"
              className="rounded-xl bg-[linear-gradient(135deg,#4f46e5,#7c72ff)] px-4 py-2 text-sm font-semibold text-white shadow-card"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
