"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Componente per il contatore animato del prezzo
const AnimatedPrice = ({ price, highlight, delay = 0 }: { price: number; highlight?: boolean; delay?: number }) => {
    const [displayPrice, setDisplayPrice] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 secondi
            const startTime = performance.now() + delay;
            
            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                
                if (elapsed < 0) {
                    requestAnimationFrame(animate);
                    return;
                }
                
                if (elapsed < duration) {
                    const progress = elapsed / duration;
                    const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    setDisplayPrice(Math.floor(price * easeProgress));
                    requestAnimationFrame(animate);
                } else {
                    setDisplayPrice(price);
                }
            };
            
            requestAnimationFrame(animate);
        }
    }, [isInView, price, delay]);

    return (
        <span 
            ref={ref}
            className={cn(
                "text-5xl font-black",
                highlight ? "text-white" : "text-gradient"
            )}
        >
            €{displayPrice}
        </span>
    );
};

export interface PricingFeature {
    name: string;
    highlight?: boolean;
    included: boolean;
}

export interface PricingTier {
    name: string;
    price: number;
    pricePrefix?: string;
    interval?: string;
    description: string;
    features: PricingFeature[];
    highlight?: boolean;
    cta?: {
        text: string;
        href?: string;
        onClick?: () => void;
    };
}

export interface PricingCardsProps extends React.HTMLAttributes<HTMLDivElement> {
    tiers: PricingTier[];
    containerClassName?: string;
    cardClassName?: string;
    sectionClassName?: string;
}

export function PricingCards({
    tiers,
    className,
    containerClassName,
    cardClassName,
    sectionClassName,
    ...props
}: PricingCardsProps) {
    return (
        <section
            className={cn(
                "text-foreground",
                "py-12 sm:py-24 md:py-32 px-4",
                "fade-bottom overflow-hidden pb-0",
                sectionClassName
            )}
        >
            <div className={cn("w-full max-w-5xl mx-auto px-4", containerClassName)} {...props}>
                <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 pt-4", className)}>
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 60, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className={cn(
                                "relative group cursor-pointer",
                                "rounded-2xl transition-all duration-500",
                                tier.highlight
                                    ? "glass border-blue-400/30"
                                    : "relative bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 p-[2px] scale-105 -translate-y-4 z-20",
                                tier.highlight ? "hover:border-blue-400/50 dark:hover:border-blue-400/50" : "",
                                tier.highlight 
                                    ? "hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]"
                                    : "shadow-[0_20px_50px_-12px_rgba(59,130,246,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.5)]",
                                cardClassName
                            )}
                        >
                            {/* Badge "Più Popolare" solo per il pacchetto Base */}
                            {!tier.highlight && (
                                <motion.div 
                                    className="absolute -top-3 left-6 z-10"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: 0.4,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div 
                                        className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg relative overflow-hidden"
                                        animate={{ 
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                            animate={{ x: [-100, 200] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: 1
                                            }}
                                        />
                                        <span className="relative z-10">Più Popolare</span>
                                    </motion.div>
                                </motion.div>
                            )}
                            
                            <div className={cn(
                                "p-10 flex flex-col h-full font-sans rounded-2xl",
                                !tier.highlight ? "bg-slate-900/90 backdrop-blur-sm" : ""
                            )}>
                                <div className="space-y-4">
                                    <h3 className={cn(
                                        "text-lg uppercase tracking-wider font-black",
                                        tier.highlight
                                            ? "text-white"
                                            : "text-white"
                                    )}>
                                        {tier.name}
                                    </h3>
                                    <div className="flex items-baseline gap-2">
                                        {tier.pricePrefix && (
                                            <motion.span 
                                                className="text-2xl font-bold text-white"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                                viewport={{ once: true }}
                                            >
                                                {tier.pricePrefix}
                                            </motion.span>
                                        )}
                                        <AnimatedPrice 
                                            price={tier.price} 
                                            highlight={tier.highlight}
                                            delay={(index * 0.2 + 0.5) * 1000} // delay in ms per il contatore
                                        />
                                        <span className={cn(
                                            "text-sm",
                                            tier.highlight
                                                ? "text-gray-300"
                                                : "text-gray-300"
                                        )}>
                                            {tier.interval || "one-time"}
                                        </span>
                                    </div>
                                    <p className={cn(
                                        tier.description.includes("PART-TIME") ? "text-base md:text-lg pb-6 border-b" : "text-sm pb-6 border-b",
                                        tier.description.includes("PART-TIME") 
                                            ? "text-white border-gray-700"
                                            : tier.highlight
                                                ? "text-gray-300 border-gray-700"
                                                : "text-gray-300 border-gray-700"
                                    )}>
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4 flex-grow">
                                    {tier.features.map((feature) => (
                                        <div
                                            key={feature.name}
                                            className="flex items-center gap-3"
                                        >
                                            <div className={cn(
                                                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                                                feature.included
                                                    ? tier.highlight
                                                        ? "text-green-400"
                                                        : "text-green-400"
                                                    : "text-gray-400"
                                            )}>
                                                <CheckIcon className="w-3.5 h-3.5" />
                                            </div>
                                            <span className={cn(
                                                "text-sm",
                                                tier.highlight
                                                    ? "text-gray-300"
                                                    : "text-gray-300"
                                            )}>
                                                {feature.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {tier.cta && (
                                    <div className="mt-8">
                                        <Button
                                            className={cn(
                                                "w-full h-12 group relative font-bold rounded-xl",
                                                tier.highlight
                                                    ? "btn-primary text-white"
                                                    : "btn-primary text-white",
                                                "transition-all duration-300"
                                            )}
                                            onClick={tier.cta.onClick}
                                            asChild={Boolean(tier.cta.href)}
                                        >
                                            {tier.cta.href ? (
                                                <a href={tier.cta.href}>
                                                    <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
                                                        {tier.cta.text}
                                                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </span>
                                                </a>
                                            ) : (
                                                <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
                                                    {tier.cta.text}
                                                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </span>
                                            )}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
