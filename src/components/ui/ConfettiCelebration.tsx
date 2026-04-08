"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ConfettiParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: "flower" | "sparkle" | "ribbon";
}

const ConfettiParticles = () => {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Générer 50 particules aléatoires
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 2.5 + Math.random() * 1,
      size: 4 + Math.random() * 8,
      type: ["flower", "sparkle", "ribbon"][
        Math.floor(Math.random() * 3)
      ] as "flower" | "sparkle" | "ribbon",
    }));

    setParticles(newParticles);

    // Disparaître après l'animation
    const timer = setTimeout(() => setIsVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        let emoji = "✨";
        let colors = ["#8a6a08", "#D4AF37", "#FFF"];

        if (particle.type === "flower") {
          emoji = ["🌸", "🌹", "🌺", "🌻"][Math.floor(Math.random() * 4)];
        } else if (particle.type === "ribbon") {
          emoji = "🎀";
          colors = ["#D4AF37", "#C9A227"];
        }

        return (
          <motion.div
            key={particle.id}
            className="absolute text-center font-bold"
            style={{
              left: `${particle.left}%`,
              top: "-50px",
              fontSize: particle.size,
            }}
            initial={{
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [1, 0.8, 0],
              scale: [1, 1.2, 0.8],
              rotate: [0, 360 + Math.random() * 360],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeIn",
            }}
          >
            {emoji}
          </motion.div>
        );
      })}

      {/* Éclats de lumière */}
      {particles.slice(0, 15).map((particle, idx) => (
        <motion.div
          key={`sparkle-${idx}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: "30%",
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            backgroundColor: "#D4AF37",
            boxShadow: "0 0 10px #D4AF37",
          }}
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            y: [0, window.innerHeight],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 1,
            delay: Math.random() * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiParticles;
