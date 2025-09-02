import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "neobrowser",
    title: "NeoBrowser: OSS AI Browser",
    period: {
      start: "2025",
    },
    link: "https://github.com/nitinprajwal/NeoBrowser",
    skills: [
      "Electron",
      "Vercel AI SDK",
      "gRPC",
      "MCP",
      "Chrome Extensions",
      "Manifest V3",
      "Micro-VMs",
      "GPT-4o",
      "RAG",
      "Open Source",
    ],
    description: `- Electron+MCP AI browser that embeds the Vercel AI SDK for on-device GPT-4o RAG, while reverse-engineering Chrome Manifest V3 to hot-load .CRX extensions and keep tab switches < 50 ms across 20+ sandboxed micro-VMs.`,
    isExpanded: true,
    // logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  },
  {
    id: "spottune",
    title: "SpotTune: OpenSource Shazam",
    period: {
      start: "2025",
    },
    link: "https://github.com/nitinprajwal/SpotTune",
    skills: [
      "Go",
      "FFmpeg",
      "SQLite",
      "MongoDB",
      "Audio Fingerprinting",
      "FFT",
      "Microservices",
      "Spotify API",
      "YouTube API",
      "Open Source",
    ],
    description: `- Go microservice that FFT-fingerprints audio, caches 3M+ hashes in SQLite/MongoDB, and delivers sub-900ms Shazam-style song ID via FFmpeg preprocessing and Spotify-YouTube metadata fusion.`,
    isExpanded: true,
  },
  {
    id: "argus",
    title: "ARGUS: Multimodal AI Assistive System",
    period: {
      start: "2024",
    },
    link: "https://github.com/nitinprajwal/Argus-synopsis",
    skills: [
      "Python",
      "TensorFlow Lite",
      "C++",
      "gRPC",
      "Computer Vision",
      "YOLO",
      "LSTM",
      "Kalman Filter",
      "Raspberry Pi",
      "Patent Published",
    ],
    description: `Patent Published: Indian Patent Application No. 202541041352 (2024)
- Engineered a real-time sensor fusion pipeline using a Kalman filter to synergize data streams from a 6-axis IMU and a ZED 2K stereo camera, providing robust 3D spatial awareness and ego-motion tracking for navigation.
- Deployed a pruned YOLOv7 model, quantized to INT8 precision for edge acceleration on the Raspberry Pi, achieving a 99.8% classification accuracy for critical objects while a custom-trained Bi-LSTM with an attention mechanism handled sign language recognition—directly supporting SDG 10 (Reduced Inequalities).`,
    isExpanded: true,
  },
  {
    id: "autosint",
    title: "AutOSINT: Automated Intelligence Analysis Platform",
    period: {
      start: "2023",
    },
    link: "https://github.com/nitinprajwal/AutOSINT",
    skills: [
      "FastAPI",
      "RoBERTa",
      "Transformers",
      "Neo4j",
      "PostgreSQL",
      "Graph Database",
      "NLP",
      "Cybersecurity",
    ],
    description: `- Architected a polyglot persistence intelligence platform using PostgreSQL for structured entity data and a graph database (Neo4j) to map and analyze relationships between extracted cyber threat indicators.
- Fine-tuned a RoBERTa-based model for multi-label classification of disinformation tactics and threat actor TTPs from unstructured text, providing a critical tool for bolstering digital safety and institutional integrity, in alignment with SDG 16 (Peace, Justice, and Strong Institutions).`,
    isExpanded: true,
  },
  {
    id: "tokentrail",
    title: "TokenTrail: Decentralized Physical Asset Verification (DePIN)",
    period: {
      start: "2023",
    },
    link: "https://github.com/nitinprajwal/TokerTrail",
    skills: [
      "Solidity",
      "Ethers.js",
      "zk-SNARKs",
      "Blockchain",
      "DePIN",
      "Smart Contracts",
      "Zero-Knowledge Proofs",
      "Supply Chain",
    ],
    description: `- Designed a DePIN system for supply chain verification, implementing a novel consensus mechanism that combines Delegated Proof-of-Stake (DPoS) with a permissioned node layer for enhanced security and scalability.
- Leveraged zk-SNARKs (Zero-Knowledge Proofs) within ERC-1155 smart contracts to enable private yet cryptographically verifiable attestations of asset provenance, creating a trustless framework for tracking ethically sourced materials and promoting SDG 12 (Responsible Consumption and Production).`,
    isExpanded: true,
  },
  {
    id: "sonicstegnovault",
    title: "SonicStegnoVault: Adversarially-Resistant Steganography Tool",
    period: {
      start: "2023",
    },
    link: "https://github.com/nitinprajwal/SonicStegnoVault",
    skills: [
      "PyTorch",
      "GANs",
      "Streamlit",
      "Cryptography",
      "Steganography",
      "AES-256",
      "RSA",
      "Audio Processing",
    ],
    description: `- Developed a novel steganographic technique that uses a Generative Adversarial Network (GAN) to embed an AES-256 encrypted payload within the imperceptible noise artifacts of audio files, rendering the embedded data statistically indistinguishable from clean audio to standard steganalysis tools.
- Engineered a PGP-inspired hybrid encryption protocol where the symmetric AES key is encapsulated using a 4096-bit RSA key, ensuring secure key exchange for sensitive data—a vital tool for protecting journalistic sources or whistleblower information (SDG 16).`,
    isExpanded: true,
  },
  {
    id: "ecosave",
    title: "EcoSave: Geospatial Environmental Action Platform",
    period: {
      start: "2023",
    },
    link: "https://github.com/nitinprajwal/Ecosave",
    skills: [
      "Node.js",
      "Express",
      "React",
      "TypeScript",
      "PostGIS",
      "Geospatial Analysis",
      "Environmental APIs",
      "Sustainability",
    ],
    description: `- Engineered a geospatial backend that ingested and correlated user-generated event data (e.g., waste cleanups) with third-party environmental APIs, providing spatio-temporal analysis of the community's impact on local ecological indicators like water quality (SDG 14: Life Below Water).
- Designed a closed-loop economic model where "EcoCoins," earned through verified pro-environmental actions (SDG 15: Life on Land), could be redeemed in a marketplace, creating a direct incentive structure that connects community engagement with sustainable consumption (SDG 12).`,
    isExpanded: true,
  },
  {
    id: "knowbase",
    title: "KnowBase: Retrieval-Augmented Generation (RAG) System",
    period: {
      start: "2023",
    },
    link: "https://github.com/nitinprajwal/knowbase",
    skills: [
      "Vite",
      "TypeScript",
      "Supabase",
      "Groq",
      "RAG",
      "Sentence-BERT",
      "Faiss",
      "T5",
      "Scientific Literature",
    ],
    description: `- Built an end-to-end RAG pipeline for scientific literature, fine-tuning a Sentence-BERT model on a corpus of 10M+ academic abstracts to create highly contextual embeddings.
- The system uses a Faiss index with Inverted File and Product Quantization (IVF-PQ) for sub-50ms retrieval of the top k relevant text chunks, which are then fed as context to a T5-base model to generate concise, cited answers, directly accelerating scientific research and SDG 9 (Industry, Innovation, and Infrastructure).`,
    isExpanded: true,
  },
  {
    id: "portfolio-v2",
    title: "Portfolio: Version 2",
    period: {
      start: "2024",
    },
    link: "https://v2.nitinr.live/",
    skills: [
      "Vite",
      "TypeScript",
    ],
    description: `Portfolio website 2`,
    isExpanded: true,
  },
  {
    id: "portfolio-v1",
    title: "Portfolio: Version 1",
    period: {
      start: "2022",
    },
    link: "https://v1.nitinr.live/",
    skills: [
      "Vite",
      "TypeScript",
    ],
    description: `Portfolio website 1`,
    isExpanded: true,
  },
];
