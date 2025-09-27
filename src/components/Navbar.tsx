'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon, Home, Info, ThumbsUp, Quote, CreditCard } from "lucide-react";
import { cn } from "../lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-2",
        className,
      )}
    >
      <div className="flex items-center gap-3 py-1.5 px-1.5 rounded-full shadow-lg" style={{ background: '#1A2246', border: '1px solid #334155' }}>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 group",
                "hover:scale-105",
                isActive ? "text-white" : "text-white/80 hover:text-white",
              )}
            >
              
              {/* Underline effect */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full opacity-0 transition-all duration-300 group-hover:w-12 group-hover:opacity-100"
                style={{ background: '#D3F20F' }}
              />
              
              {/* Active underline */}
              {isActive && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-12 rounded-full opacity-100"
                  style={{ background: '#D3F20F' }}
                />
              )}
              
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={19} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  style={{ background: '#D3F20F', opacity: 0.2 }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Backwards-compatible wrapper to preserve existing <Navbar /> usage
export function Navbar() {
  const items: NavItem[] = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "Come funziona", url: "#come-funziona", icon: Info },
    { name: "Perché noi?", url: "#perche-noi", icon: ThumbsUp },
  ];

  return <NavBar items={items} />;
}