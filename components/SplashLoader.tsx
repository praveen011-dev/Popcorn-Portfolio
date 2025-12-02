"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PopCorn from "./PopCorn";

export default function SplashLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          className="
            fixed inset-0 
            bg-[var(--bg)]
            flex items-center justify-center 
            z-[9999]
            transition-colors duration-500
          "
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {/* Popcorn animation */}
          <div className="w-56 h-56 pointer-events-none">
            <PopCorn />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              absolute bottom-16 
              text-[var(--text)]/70 
              text-lg
            "
          >
            Loading…
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
