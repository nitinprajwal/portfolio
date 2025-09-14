import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "oracle",
    companyName: "Oracle Academy",
    companyLogo: "https://cdn.brandfetch.io/idnq7H7qT0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668081507500",
    positions: [
      {
        id: "oracle-capstone",
        title: "Capstone Project Student Lead",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Student Trainee",
        icon: "code",
        description: `- Contributed to the architecture of a multi-tenant Cloud Security Posture Management (CSPM) platform on OCI, tasked with monitoring millions of cloud assets for compliance drift.
- Engineered a core module for the platform's policy-as-code (PaC) engine in Go, enabling security teams to programmatically define and enforce custom compliance rules.
- Optimized a distributed data ingestion pipeline using Kafka and gRPC, successfully reducing the 99th percentile processing latency for configuration data streams to under 250ms.`,
        skills: [
          "Go",
          "Oracle Cloud Infrastructure (OCI)",
          "Kafka",
          "gRPC",
          "Cloud Security",
          "Policy-as-Code",
          "Distributed Systems",
          "System Architecture",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "gdg",
    companyName: "Google Developer Group (GDG) on Campus",
    companyLogo: "https://cdn.brandfetch.io/idOjErDhB-/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1749928246782",
    positions: [
      {
        id: "gdg-founder",
        title: "Founder, President & Software Lead",
        employmentPeriod: {
          start: "09.2024",
          end: "06.2025",
        },
        employmentType: "Leadership",
        icon: "idea",
        description: `- Developed and led a 3-part technical workshop series on "Building RAG Systems," covering vectorization, indexing strategies, and LLM orchestration, attended by over 150 students.
- Directed the chapter's Google Solution Challenge project, creating an AI tool that fine-tuned a BERT model for extractive summarization of dense municipal policy documents, increasing accessibility for local journalists and advocates (SDG 16).
- Collaborated with industry professionals on projects utilizing natural language processing and search technologies, building expertise in core Google technical areas.`,
        skills: [
          "Leadership",
          "RAG Systems",
          "BERT",
          "Natural Language Processing",
          "LLM Orchestration",
          "Workshop Development",
          "Community Building",
          "Google Technologies",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "carboncrunch",
    companyName: "Carbon Crunch",
    companyLogo: "https://www.startinup.up.gov.in/crm/assets/user/images/Documents/Startup/A_STARTUP_UP_UPLC_000038527/startup_logo/174653250168295.png",
    positions: [
      {
        id: "carboncrunch-intern",
        title: "AI Automation Intern",
        employmentPeriod: {
          start: "04.2025",
          end: "06.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed a surrogate AI model using a Message Passing Neural Network (MPNN) to approximate computationally expensive Density Functional Theory (DFT) simulations.
- This model reduced the simulation runtime for new carbon-capture material candidates from weeks to hours, achieving a 92% predictive accuracy (R²) and significantly accelerating the R&D feedback loop.
- Implemented distributed computing solutions to handle large datasets, demonstrating ability to research and develop systems for information retrieval at scale.`,
        skills: [
          "Message Passing Neural Networks",
          "Density Functional Theory",
          "Machine Learning",
          "Distributed Computing",
          "Python",
          "Research & Development",
          "Data Science",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "dhruvaspace",
    companyName: "Dhruva Space Pvt. Ltd.",
    positions: [
      {
        id: "dhruvaspace-intern",
        title: "Data Engineering Intern",
        employmentPeriod: {
          start: "05.2024",
          end: "08.2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Designed and implemented an LSTM-based autoencoder to detect anomalies in satellite telemetry data, providing a 72-hour advance warning for component degradation with a 99.5% F1-score.
- Built the supporting serverless ETL pipeline on AWS (Lambda, Glue) that processed, cleaned, and vectorized terabytes of time-series data, improving the reliability of a critical satellite subsystem.`,
        skills: [
          "LSTM",
          "Anomaly Detection",
          "AWS Lambda",
          "AWS Glue",
          "ETL Pipelines",
          "Time-series Data",
          "Satellite Systems",
          "Data Engineering",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "nikkibuild",
    companyName: "Nikkibuild Edtech Private Limited",
    positions: [
      {
        id: "nikkibuild-intern",
        title: "IoT Solutions Intern",
        employmentPeriod: {
          start: "06.2023",
        },
        employmentType: "Part-Time",
        icon: "code",
        description: `Implemented full landing Page for the client with RazorPay integration and N8N backend to servers`,
        skills: [
          "Figma",
          "vite",
          "API",
          "Data Base",
          "AI automation n8n"
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "Freelancing",
    companyName: "Upwork, Fiverr",
    positions: [
      {
        id: "freelancing",
        title: "Software Developer, Website Designer",
        employmentPeriod: {
          start: "08.2023",
          end: "10.2023",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Implemented the FreeRTOS kernel on a custom ESP32 board, using task prioritization and memory protection to resolve 99% of race conditions and device hangs from the previous bare-metal firmware.
- Enhanced device security by integrating an ATECC608A crypto-element for secure key storage, preventing firmware cloning across a fleet of 1,000+ deployed educational kits.`,
        skills: [
          "FreeRTOS",
          "ESP32",
          "IoT",
          "Embedded Systems",
          "Hardware Security",
          "ATECC608A",
          "Firmware Development",
          "C/C++",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",

    positions: [
      {
        id: "dsu",
        title: "Dayananda Sagar University",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: "education",
        description: `- Currently pursuing Bachelor's degree in Computer Science and Engineering.
- Located in Bengaluru, Karnataka.
- Active in technical communities and leadership roles.
- Focus on distributed systems, machine learning, and cloud technologies.`,
        skills: [
          "Computer Science",
          "Software Engineering",
          "Distributed Systems",
          "Machine Learning",
          "Cloud Computing",
          "Data Structures",
          "Algorithms",
          "System Design",
          "Leadership",
          "Research",
        ],
      },
    ],
  },
];
