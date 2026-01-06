"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="relative h-20 w-20"
        >
          {/* Outer Ring Animation */}
          <motion.div
            animate={{
              rotate: 360,
              borderRadius: ["25%", "50%", "25%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 border-4 border-primary/30"
          />

          {/* Inner Logo */}
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <Image
              src="/shape.svg"
              width={48}
              height={48}
              alt="Gather Logo"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Gathering your world
          </motion.h2>

          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
            ))}
          </div>
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute -z-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
      </div>
    </div>
  );
};

export default Loading;
