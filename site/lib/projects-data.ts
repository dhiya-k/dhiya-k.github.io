export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl?: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "vision-grid",
    title: "Vision Grid",
    description:
      "A real-time computer vision dashboard built with Next.js and TensorFlow.js. Detects and tracks multiple objects in live video feeds with WebRTC streaming and interactive visualizations.",
    image: "/projects/vision-grid.svg",
    tech: ["Next.js", "TensorFlow.js", "WebRTC", "Canvas API"],
    githubUrl: "https://github.com/yourname/vision-grid",
    liveUrl: "https://demo.example.com/vision-grid",
  },
  {
    id: "signal-lens",
    title: "Signal Lens",
    description:
      "Interactive signal processing tool combining React frontend with Python backend. Visualize FFT transforms, apply filters, and analyze time-series data with D3.js charts.",
    image: "/projects/signal-lens.svg",
    tech: ["React", "D3.js", "Python", "Flask", "NumPy"],
    githubUrl: "https://github.com/yourname/signal-lens",
    liveUrl: "https://demo.example.com/signal-lens",
  },
  {
    id: "anomaly-radar",
    title: "Anomaly Radar",
    description:
      "Anomaly detection system for time-series data using FastAPI backend and Next.js frontend. Detects outliers in real-time streams and visualizes anomaly scores with interactive charts.",
    image: "/projects/anomaly-radar.svg",
    tech: ["Next.js", "FastAPI", "OpenCV", "Scikit-learn", "WebSockets"],
    githubUrl: "https://github.com/yourname/anomaly-radar",
    liveUrl: "https://demo.example.com/anomaly-radar",
  },
  {
    id: "edge-pulse",
    title: "Edge Pulse",
    description:
      "Edge AI inference platform for running ML models directly in the browser. Supports ONNX model format and WebGL acceleration for fast, privacy-preserving predictions.",
    image: "/projects/vision-grid.svg",
    tech: ["Next.js", "ONNX.js", "WebGL", "TensorFlow.js", "TypeScript"],
    githubUrl: "https://github.com/yourname/edge-pulse",
    liveUrl: "https://demo.example.com/edge-pulse",
  },
];
