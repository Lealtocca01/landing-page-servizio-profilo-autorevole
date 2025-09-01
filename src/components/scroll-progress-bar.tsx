"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ScrollProgressBarProps {
  height?: number
  width?: number
  backgroundColor?: string
  fillColor?: string
  className?: string
}

export default function ScrollProgressBar({
  height = 206,
  width = 2,
  backgroundColor = "rgb(221, 221, 221)",
  fillColor = "rgb(119, 11, 244)",
  className = "",
}: ScrollProgressBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to scale and position
  const scale = useTransform(scrollYProgress, [0, 1], [0, 7])
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.7])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Background container */}
      <div className="absolute inset-0 z-10" style={{ backgroundColor }} />

      {/* Progress filler */}
      <motion.div
        className="absolute z-20"
        style={{
          width: `${width}px`,
          height: `${height * 0.7}px`,
          backgroundColor: fillColor,
          top: `-${height * 0.7}px`,
          left: 0,
          scale,
          y,
        }}
        initial={{ scale: 0, y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.4,
        }}
      />
    </div>
  )
}
