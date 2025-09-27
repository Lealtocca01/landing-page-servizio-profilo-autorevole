"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PricingGradientButton from "@/components/ui/PricingGradientButton";
import { useContactPopup } from "@/contexts/ContactPopupContext";

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
    originalPrice?: number; // prezzo originale per mostrare lo sconto
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
    const { openPopup } = useContactPopup();
    
    return (
        <section
            className={cn(
                "text-foreground",
                "pt-4 pb-8 sm:py-12 md:py-8 lg:py-6 px-4",
                "fade-bottom",
                sectionClassName
            )}
        >
            <div className={cn("w-full mx-auto px-0 sm:px-4", containerClassName)} {...props}>
                <div className={cn("grid gap-4 lg:gap-8 pt-2 place-items-center", "max-w-[calc(100vw-4px)] mx-auto sm:max-w-none", className)}>
                    {tiers.map((tier, index) => (
                        <div
                            key={tier.name}
                            className={cn(
                                "relative group cursor-pointer",
                                "transition-all duration-500 ease-out",
                                cardClassName,
                                // Prospettiva gerarchica per consulenza gratuita
                                tier.name === 'Consulenza Gratuita' ? 'scale-95 lg:scale-98 mt-4 lg:mt-6' : ''
                            )}
                            style={{ 
                                borderRadius: '20px',
                                // Z-index più basso per consulenza gratuita
                                zIndex: tier.name === 'Consulenza Gratuita' ? 1 : 2
                            }}
                        >
                            {/* Tag "Più Popolare" */}
                            {tier.isPopular && (
                                <div 
                                    className="absolute -top-3 -right-3 z-10 px-4 py-1 rounded-full text-sm font-bold"
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
                                    "font-sans transition-all duration-500 relative overflow-hidden"
                                )} 
                                style={{ 
                                    background: 'linear-gradient(135deg, #1A2246 0%, #2D3748 100%)',
                                    borderRadius: '20px',
                                    border: '2px solid #D3F20F',
                                    boxShadow: '0 4px 20px rgba(211,242,15,0.2)',
                                    marginBottom: tier.name === 'Consulenza Gratuita' ? '20px' : '0px'
                                }}
                            >
                                {/* Header pulito e ordinato */}
                                <div className="px-5 py-4 sm:px-8 sm:py-6">
                                    {/* Titolo */}
                                    <h3 
                                        className={cn(
                                            "font-bold mb-3 sm:mb-4 text-left",
                                            tier.name === 'Consulenza Gratuita' 
                                                ? 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl' 
                                                : 'text-3xl sm:text-3xl md:text-4xl'
                                        )}
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {tier.name}
                                    </h3>
                                    
                                    {/* Prezzo - solo se presente */}
                                    {tier.price !== null && (
                                        <div className="flex items-baseline mb-3 sm:mb-4">
                                            {/* Prezzo originale sbarrato per consulenza gratuita */}
                                            {tier.name === 'Consulenza Gratuita' && tier.originalPrice && (
                                                <span 
                                                    className="text-2xl line-through mr-3"
                                                    style={{ color: '#94A3B8' }}
                                                >
                                                    €{tier.originalPrice}
                                                </span>
                                            )}
                                            <span 
                                                className={cn(
                                                    "font-bold",
                                                    tier.name === 'Consulenza Gratuita' 
                                                        ? 'text-4xl sm:text-4xl animate-pulse' 
                                                        : 'text-4xl sm:text-5xl'
                                                )}
                                                style={{ 
                                                    color: '#D3F20F',
                                                    textShadow: tier.name === 'Consulenza Gratuita' ? '0 0 15px rgba(211, 242, 15, 0.7)' : 'none'
                                                }}
                                            >
                                                {tier.pricePrefix}{tier.price}
                                            </span>
                                            <span 
                                                className={cn(
                                                    "ml-2",
                                                    tier.name === 'Consulenza Gratuita' 
                                                        ? 'text-base' 
                                                        : 'text-lg'
                                                )}
                                                style={{ color: '#FFFFFF' }}
                                            >
                                                {tier.interval}
                                            </span>
                                        </div>
                                    )}
                                    
                                    {/* Descrizione */}
                                    <p 
                                        className={cn(
                                            "text-sm sm:text-base leading-relaxed mb-3 sm:mb-4",
                                            tier.name === 'Consulenza Gratuita' ? 'italic font-bold' : ''
                                        )}
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        {tier.description}
                                    </p>
                                    
                                    {/* Separatore */}
                                    <div 
                                        className="w-full h-px mb-3 sm:mb-4"
                                        style={{ background: '#4A5568' }}
                                    ></div>
                                </div>

                                {/* Features pulite e ordinate */}
                                {tier.features.length > 0 && (
                                    <div className="px-5 sm:px-8 pb-2">
                                        <div className="space-y-3 sm:space-y-4">
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
                                                        className="text-sm sm:text-base leading-relaxed"
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
                                    <div className="px-5 sm:px-8 pb-1">
                                        <div 
                                            className="w-full h-px mb-3 sm:mb-4"
                                            style={{ background: '#6B7280' }}
                                        ></div>
                                        <p className="text-sm sm:text-base md:text-lg font-semibold italic leading-relaxed" style={{ color: '#E2E8F0' }}>
                                            {tier.bottomNote}
                                        </p>
                                    </div>
                                )}

                                {/* CTA Button DENTRO la card - ALLINEATO A SINISTRA */}
                                {tier.cta && (
                                    <div className="px-5 sm:px-8 pt-3 sm:pt-4 pb-3 sm:pb-4">
                                        <button
                                            onClick={() => {
                                                console.log(`${tier.name} BUTTON CLICKED!`);
                                                if (tier.cta?.onClick) {
                                                    tier.cta.onClick();
                                                }
                                            }}
                                            className="inline-flex items-center gap-3 px-6 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-base md:text-lg font-semibold rounded-xl relative overflow-hidden w-full"
                                            style={{ 
                                                background: 'linear-gradient(135deg, #D3F20F 0%, #A8D83A 100%)',
                                                color: '#0B1020',
                                                boxShadow: '0 4px 14px 0 rgba(211, 242, 15, 0.2)',
                                                cursor: 'pointer',
                                                zIndex: 99999,
                                                position: 'relative'
                                            }}
                                        >
                                            <span className="relative z-10 flex items-center justify-center w-full">
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
