import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Connection {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}

export const NeuralNetwork = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // Generate random nodes
    const generatedNodes: Node[] = [];
    for (let i = 0; i < 20; i++) {
      generatedNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 2,
      });
    }
    setNodes(generatedNodes);

    // Generate connections between nearby nodes
    const generatedConnections: Connection[] = [];
    let connId = 0;
    for (let i = 0; i < generatedNodes.length; i++) {
      for (let j = i + 1; j < generatedNodes.length; j++) {
        const dx = generatedNodes[i].x - generatedNodes[j].x;
        const dy = generatedNodes[i].y - generatedNodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 30 && generatedConnections.length < 25) {
          generatedConnections.push({
            id: connId++,
            x1: generatedNodes[i].x,
            y1: generatedNodes[i].y,
            x2: generatedNodes[j].x,
            y2: generatedNodes[j].y,
            delay: Math.random() * 3,
          });
        }
      }
    }
    setConnections(generatedConnections);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      {/* Central brain orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyber-cyan) / 0.3) 0%, transparent 70%)",
          boxShadow: "0 0 80px hsl(var(--cyber-cyan) / 0.3)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyber-cyan) / 0.6) 0%, transparent 60%)",
          boxShadow: "0 0 40px hsl(var(--cyber-cyan) / 0.5)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="hsl(var(--cyber-cyan))"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              delay: conn.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            background: "hsl(var(--cyber-cyan))",
            boxShadow: "0 0 10px hsl(var(--cyber-cyan) / 0.8), 0 0 20px hsl(var(--cyber-cyan) / 0.4)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbiting particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
          style={{
            background: "hsl(var(--cyber-cyan))",
            boxShadow: "0 0 10px hsl(var(--cyber-cyan))",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${80 + i * 30}px`,
              background: "hsl(var(--cyber-cyan))",
              boxShadow: "0 0 10px hsl(var(--cyber-cyan))",
            }}
          />
        </motion.div>
      ))}

      {/* Data streams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute h-px"
          style={{
            left: "10%",
            top: `${30 + i * 20}%`,
            width: "80%",
            background: `linear-gradient(90deg, transparent 0%, hsl(var(--cyber-cyan) / 0.6) 50%, transparent 100%)`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + i * 0.5,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
