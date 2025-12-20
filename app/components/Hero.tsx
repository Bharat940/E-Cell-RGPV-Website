"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect, useRef, memo } from "react";

// Grid cell component with partial border glow - MEMOIZED for performance
const GridCell = memo(({
  mousePos,
  cellX,
  cellY,
  cellWidth,
  cellHeight
}: {
  mousePos: { x: number; y: number } | null;
  cellX: number;
  cellY: number;
  cellWidth: number;
  cellHeight: number;
}) => {
  if (!mousePos) {
    return (
      <div className="relative w-full h-full border border-white/10" />
    );
  }

  // Cell center
  const cellCenterX = cellX + cellWidth / 2;
  const cellCenterY = cellY + cellHeight / 2;

  // Distance from mouse to cell center
  const distanceToCenter = Math.sqrt(
    Math.pow(mousePos.x - cellCenterX, 2) +
    Math.pow(mousePos.y - cellCenterY, 2)
  );

  const glowRadius = 60; // Smaller radius for focused effect

  if (distanceToCenter > glowRadius) {
    return (
      <div className="relative w-full h-full border border-white/10" />
    );
  }

  // Calculate intensity based on distance
  // const intensity = Math.max(0, 1 - distanceToCenter / glowRadius);

  // Calculate which parts of borders should glow
  const getBorderGlow = (borderType: 'top' | 'right' | 'bottom' | 'left') => {
    let closestX = mousePos.x;
    let closestY = mousePos.y;

    // Clamp to border line
    switch (borderType) {
      case 'top':
        closestY = cellY;
        closestX = Math.max(cellX, Math.min(cellX + cellWidth, mousePos.x));
        break;
      case 'bottom':
        closestY = cellY + cellHeight;
        closestX = Math.max(cellX, Math.min(cellX + cellWidth, mousePos.x));
        break;
      case 'left':
        closestX = cellX;
        closestY = Math.max(cellY, Math.min(cellY + cellHeight, mousePos.y));
        break;
      case 'right':
        closestX = cellX + cellWidth;
        closestY = Math.max(cellY, Math.min(cellY + cellHeight, mousePos.y));
        break;
    }

    const distToBorder = Math.sqrt(
      Math.pow(mousePos.x - closestX, 2) +
      Math.pow(mousePos.y - closestY, 2)
    );

    if (distToBorder > glowRadius) return null;

    const borderIntensity = Math.max(0, 1 - distToBorder / glowRadius);
    const glowPercentage = Math.min(100, borderIntensity * 150);

    return {
      intensity: borderIntensity,
      glowPercentage,
      closestPoint: { x: closestX, y: closestY }
    };
  };

  const topGlow = getBorderGlow('top');
  const rightGlow = getBorderGlow('right');
  const bottomGlow = getBorderGlow('bottom');
  const leftGlow = getBorderGlow('left');

  const maxIntensity = Math.max(
    topGlow?.intensity || 0,
    rightGlow?.intensity || 0,
    bottomGlow?.intensity || 0,
    leftGlow?.intensity || 0
  );

  return (
    <div className="relative w-full h-full">
      {/* Base border */}
      <div className="absolute inset-0 border border-white/10" />

      {/* Partial glowing borders */}
      {topGlow && topGlow.intensity > 0.1 && (
        <div
          className="absolute top-0 left-0 right-0 h-[0.5px] transition-all duration-150"
          style={{
            background: `radial-gradient(ellipse ${topGlow.glowPercentage}% 100% at ${((topGlow.closestPoint.x - cellX) / cellWidth) * 100}% 50%, rgba(37, 99, 235, ${topGlow.intensity * 1.2}) 0%, transparent 100%)`,
            boxShadow: topGlow.intensity > 0.6 ? `0 0 ${topGlow.intensity * 12}px rgba(37, 99, 235, ${topGlow.intensity * 1.1})` : 'none'
          }}
        />
      )}

      {bottomGlow && bottomGlow.intensity > 0.1 && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[0.5px] transition-all duration-150"
          style={{
            background: `radial-gradient(ellipse ${bottomGlow.glowPercentage}% 100% at ${((bottomGlow.closestPoint.x - cellX) / cellWidth) * 100}% 50%, rgba(37, 99, 235, ${bottomGlow.intensity * 1.2}) 0%, transparent 100%)`,
            boxShadow: bottomGlow.intensity > 0.6 ? `0 0 ${bottomGlow.intensity * 12}px rgba(37, 99, 235, ${bottomGlow.intensity * 1.1})` : 'none'
          }}
        />
      )}

      {leftGlow && leftGlow.intensity > 0.1 && (
        <div
          className="absolute top-0 bottom-0 left-0 w-[0.5px] transition-all duration-150"
          style={{
            background: `radial-gradient(ellipse 100% ${leftGlow.glowPercentage}% at 50% ${((leftGlow.closestPoint.y - cellY) / cellHeight) * 100}%, rgba(37, 99, 235, ${leftGlow.intensity * 1.2}) 0%, transparent 100%)`,
            boxShadow: leftGlow.intensity > 0.6 ? `0 0 ${leftGlow.intensity * 12}px rgba(37, 99, 235, ${leftGlow.intensity * 1.1})` : 'none'
          }}
        />
      )}

      {rightGlow && rightGlow.intensity > 0.1 && (
        <div
          className="absolute top-0 bottom-0 right-0 w-[0.5px] transition-all duration-150"
          style={{
            background: `radial-gradient(ellipse 100% ${rightGlow.glowPercentage}% at 50% ${((rightGlow.closestPoint.y - cellY) / cellHeight) * 100}%, rgba(37, 99, 235, ${rightGlow.intensity * 1.2}) 0%, transparent 100%)`,
            boxShadow: rightGlow.intensity > 0.6 ? `0 0 ${rightGlow.intensity * 12}px rgba(37, 99, 235, ${rightGlow.intensity * 1.1})` : 'none'
          }}
        />
      )}

      {/* Cell glow overlay */}
      {maxIntensity > 0.5 && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-150"
          style={{
            background: `radial-gradient(circle at ${((mousePos.x - cellX) / cellWidth) * 100}% ${((mousePos.y - cellY) / cellHeight) * 100}%, rgba(37, 99, 235, ${maxIntensity * 0.25}) 0%, transparent 70%)`,
          }}
        />
      )}
    </div>
  );
});

GridCell.displayName = 'GridCell';

export default function Hero() {
  const [gridDimensions, setGridDimensions] = useState({ rows: 36, cols: 64 });
  const { rows, cols } = gridDimensions;
  const totalCells = rows * cols;

  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [gridReady, setGridReady] = useState(false);

  // Store desktop grid cell dimensions in state
  const [desktopCellDimensions, setDesktopCellDimensions] = useState({
    cellWidth: 0,
    cellHeight: 0
  });

  // Calculate grid dimensions to maintain square cells
  useEffect(() => {
    const calculateGrid = () => {
      if (!gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Target cell size (in pixels) - controls grid density
      const targetCellSize = 30;  // Approximate current cell size
      const maxCellSize = 40;      // Prevents too few cells on large screens
      const minCellSize = 20;      // Prevents too many cells on small screens

      // Calculate ideal cell size within bounds
      const cellSize = Math.max(minCellSize, Math.min(maxCellSize, targetCellSize));

      // Calculate cols and rows to maintain perfectly square cells
      const newCols = Math.floor(width / cellSize);
      const newRows = Math.floor(height / cellSize);

      setGridDimensions(prev => {
        if (prev.cols !== newCols || prev.rows !== newRows) {
          return { rows: newRows, cols: newCols };
        }
        return prev;
      });

      // Store cell dimensions
      const cellWidth = rect.width / newCols;
      const cellHeight = rect.height / newRows;
      setDesktopCellDimensions({ cellWidth, cellHeight });

      setGridReady(true);
    };

    calculateGrid();

    // Recalculate on window resize
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (gridRef.current) {
          const rect = gridRef.current.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      });
    };

    const handleMouseLeave = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      setMousePos(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const getCellDimensions = (i: number) => {
    const { cellWidth, cellHeight } = desktopCellDimensions;

    const row = Math.floor(i / cols);
    const col = i % cols;

    return {
      cellX: col * cellWidth,
      cellY: row * cellHeight,
      cellWidth,
      cellHeight
    };
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#040115' }}
    >
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0]">
        <Image
          src="/assets/hero-bg.png"
          alt="E-Cell Background"
          width={700}
          height={700}
          className="object-contain"
          priority
        />
      </div>

      {/* Background Glow */}
      <div className="
        absolute w-[400px] h-[300px]
        md:w-[800px] md:h-[600px]
        bg-[#407EDD] rounded-full
        blur-[200px] opacity-30
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none z-[30]
      "></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-[6]"></div>

      {/* Subtle white underlay behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[25]">
        <div
          className="w-[900px] h-[600px] rounded-full blur-[100px] opacity-[0.15]"
          style={{
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.8) 0%, rgba(147, 197, 253, 0.5) 30%, rgba(59, 130, 246, 0.2) 60%, transparent 80%)'
          }}
        />
      </div>

      {/* --- MOBILE STATIC GRID (no glow effect for performance) --- */}
      <div
        className="absolute inset-0 grid sm:hidden pointer-events-none z-[10] transition-opacity duration-800"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(24, 1fr)",
          opacity: gridReady ? 1 : 0,
        }}
      >
        {Array.from({ length: 12 * 24 }).map((_, i) => (
          <div key={i} className="relative w-full h-full border border-white/10" />
        ))}
      </div>

      {/* --- DESKTOP INTERACTIVE GLOW GRID --- */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid pointer-events-none z-[20] hidden sm:grid transition-opacity duration-800"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          opacity: gridReady ? 1 : 0,
        }}
      >
        {Array.from({ length: totalCells }).map((_, i) => {
          const { cellX, cellY, cellWidth, cellHeight } = getCellDimensions(i);

          return (
            <GridCell
              key={i}
              mousePos={mousePos}
              cellX={cellX}
              cellY={cellY}
              cellWidth={cellWidth}
              cellHeight={cellHeight}
            />
          );
        })}
      </div>

      {/* TEXT + BUTTON ABOVE EVERYTHING (z-[60]) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-[60] font-[var(--font-clash-display)] pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl"
        >
          Entrepreneurship Cell
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-2 text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg"
        >
          An RGPV Initiative
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-500 max-w-xl px-4"
        >
          working to bring Exposure.
        </motion.p>

        {/* BUTTON GROUP */}
        <div className="group mt-6 sm:mt-8 pointer-events-auto">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="
              px-6 sm:px-8 py-2.5 sm:py-3 font-semibold relative overflow-hidden
              bg-blue-600 text-white text-sm sm:text-base
              transition-colors duration-150
              font-[var(--font-clash-display)]
            "
          >
            {/* BUTTON TEXT */}
            <span className="relative z-30 transition-colors duration-300 group-hover:text-blue-600">
              Evolve
            </span>

            {/* ORANGE FLASH (instant, disappears fast) */}
            <span
              className="
                absolute inset-0 bg-orange-500
                opacity-0 group-hover:opacity-80 
                transition-opacity duration-75
                group-hover:delay-[0ms]
                z-10
              "
              style={{ transitionDelay: "0ms" }}
            ></span>

            {/* WHITE WIPE (covers orange immediately) */}
            <span
              className="
                absolute inset-0 bg-white
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform duration-500 ease-out
                z-20
              "
            ></span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}