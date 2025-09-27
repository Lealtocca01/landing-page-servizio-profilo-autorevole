"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PricingGradientButton from "@/components/ui/PricingGradientButton";

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
    price: number | null;
    pricePrefix?: string;
    interval?: string;
    description: string;
    features: PricingFeature[];
    highlight?: boolean;
    isPopular?: boolean;
    bottomNote?: string; // testo mostrato sopra al CTA
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
                "pt-4 pb-8 sm:py-12 md:py-8 lg:py-6 px-4",
                "fade-bottom",
                sectionClassName
            )}
        >
            <div className={cn("w-full mx-auto px-4", containerClassName)} {...props}>
                <div className={cn("grid grid-cols-1 gap-4 lg:gap-8 pt-2", className)}>
                    {tiers.map((tier, index) => (
                        <div
                            key={tier.name}
                            className={cn(
                                "relative group cursor-pointer",
                                "transition-all duration-500 ease-out",
                                cardClassName
                            )}
                            style={{ borderRadius: '20px' }}
                        >
                            {/* Tag "Più Popolare" */}
                            {tier.isPopular && (
                                <div 
                                    className="absolute -top-3 -left-3 z-10 px-4 py-1 rounded-full text-sm font-bold"
                                    style={{ 
                                        background: '#0B1020',
                                        color: '#FFFFFF',
                                        border: '2px solid #D3F20F'
                                    }}
                                >
                                    Molto richiesto
                                </div>
                            )}
                            
                            <div 
                                className={cn(
                                    "h-full font-sans transition-all duration-500 relative overflow-hidden"
                                )} 
                                style={{ 
                                    background: 'linear-gradient(135deg, #1A2246 0%, #2D3748 100%)',
                                    borderRadius: '20px',
                                    border: '2px solid #D3F20F',
                                    boxShadow: '0 4px 20px rgba(211,242,15,0.2)'
                                }}
                            >
                                {/* Header pulito e ordinato */}
                                <div className="p-8">
                                    {/* Titolo */}
                                    <h3 
                                        className="text-3xl md:text-4xl font-bold mb-6 text-left md:text-center"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {tier.name}
                                    </h3>
                                    
                                    {/* Prezzo - solo se presente */}
                                    {tier.price !== null && (
                                        <div className="flex items-baseline mb-6">
                                            <span 
                                                className="text-5xl font-bold"
                                                style={{ color: '#D3F20F' }}
                                            >
                                                {tier.pricePrefix}{tier.price}
                                            </span>
                                            <span 
                                                className="text-lg ml-2"
                                                style={{ color: '#FFFFFF' }}
                                            >
                                                {tier.interval}
                                            </span>
                                        </div>
                                    )}
                                    
                                    {/* Descrizione */}
                                    <p 
                                        className="text-base leading-relaxed mb-6"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {tier.description}
                                    </p>
                                    
                                    {/* Separatore */}
                                    <div 
                                        className="w-full h-px mb-6"
                                        style={{ background: '#4A5568' }}
                                    ></div>
                                </div>

                                {/* Features pulite e ordinate */}
                                {tier.features.length > 0 && (
                                    <div className="px-8 pb-8 flex-grow">
                                        <div className="space-y-4">
                                            {tier.features.map((feature, featureIndex) => (
                                                <div
                                                    key={feature.name}
                                                    className="flex items-start gap-4"
                                                >
                                                    <div 
                                                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                                        style={{ 
                                                            background: '#D3F20F',
                                                            color: '#0B1020'
                                                        }}
                                                    >
                                                        <CheckIcon className="w-3 h-3" />
                                                    </div>
                                                    <span 
                                                        className="text-base leading-relaxed"
                                                        style={{ color: '#FFFFFF' }}
                                                    >
                                                        {feature.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Nota in fondo sopra il CTA */}
                                {tier.bottomNote && (
                                    <div className="px-8 pb-4">
                                        <div 
                                            className="w-full h-px mb-4"
                                            style={{ background: '#6B7280' }}
                                        ></div>
                                        <p className="text-base md:text-lg font-semibold leading-relaxed" style={{ color: '#E2E8F0' }}>
                                            {tier.bottomNote}
                                        </p>
                                    </div>
                                )}

                                {/* CTA Button elegante */}
                                {tier.cta && (
                                    <div className="px-8 pb-8 pt-6 relative z-20">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                console.log('Package button clicked - opening package popup');
                                                e.preventDefault();
                                                e.stopPropagation();
                                                if (tier.cta?.onClick) {
                                                    tier.cta.onClick();
                                                }
                                            }}
                                            className="w-full py-6 md:py-6 text-sm md:text-lg font-bold relative px-8 md:px-8 z-50 cursor-pointer"
                                            style={{ 
                                                background: 'linear-gradient(135deg, #D3F20F 0%, #A8D83A 100%)',
                                                color: '#0B1020',
                                                borderRadius: '12px',
                                                boxShadow: '0 8px 25px rgba(211,242,15,0.3)',
                                                border: 'none',
                                                outline: 'none'
                                            }}
                                        >
                                            <span className="relative z-50 flex items-center justify-center pointer-events-none">
                                                {tier.cta.text}
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
