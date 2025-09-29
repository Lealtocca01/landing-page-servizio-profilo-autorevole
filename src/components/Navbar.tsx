'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LucideIcon, Home, Info, ThumbsUp, Quote, CreditCard, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Navbar */}
      {isMobile ? (
        <div className="fixed top-0 left-0 right-0 z-50 p-4" style={{ background: '#0B1020' }}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#D3F20F' }}>
                <div className="w-4 h-4 flex flex-col justify-between">
                  <div className="w-full h-0.5 rounded" style={{ background: '#0B1020' }}></div>
                  <div className="w-full h-0.5 rounded" style={{ background: '#0B1020' }}></div>
                  <div className="w-full h-0.5 rounded" style={{ background: '#0B1020' }}></div>
                </div>
              </div>
              <span className="text-xl font-bold" style={{ color: '#D3F20F' }}>Profilo Autorevole</span>
            </div>
            
            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors"
              style={{ color: '#D3F20F' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Separator Line */}
          <div className="w-full h-px mt-4" style={{ background: '#D3F20F' }}></div>
          
          {/* Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        onClick={() => {
                          setActiveTab(item.name);
                          setIsMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                          isActive ? "text-white" : "text-white/80 hover:text-white"
                        )}
                        style={{ 
                          background: isActive ? 'rgba(211, 242, 15, 0.1)' : 'transparent',
                          border: isActive ? '1px solid rgba(211, 242, 15, 0.3)' : '1px solid transparent'
                        }}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Desktop Navbar */
        <div
          className={cn(
            "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-2",
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
                  
                  <span className="relative z-10">{item.name}</span>
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
      )}
    </>
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