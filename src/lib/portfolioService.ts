import { supabase } from '@/lib/supabase'

export const defaultProjects = [
  {
    id: '1',
    title: 'FinAgent – Financial Risk & Compliance Platform',
    description: 'Explainable financial intelligence platform for bankruptcy risk assessment, transaction fraud detection, and payment fraud simulation using XGBoost, SHAP, and FastAPI.',
    technologies: ['Python', 'XGBoost', 'FastAPI', 'React', 'SHAP'],
    key_features: ['Bankruptcy risk assessment', 'Transaction fraud detection', 'SHAP explainability engine', 'PDF report generation'],
    image_url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/FinAgent---Explainable-Financial-Risk-Fraud-Intelligence-Platform',
    live_url: '',
  },
  {
    id: '2',
    title: 'Orcan Vision Trace – Reverse Image Search',
    description: 'High-speed reverse image search achieving 90–95% retrieval accuracy with local GPU-based FAISS indexing across 50,000+ facial images, cutting cost per query by 60%.',
    technologies: ['Python', 'FAISS', 'AWS Rekognition', 'PyTorch', 'GPU Indexing'],
    key_features: ['50,000+ facial image indexing', '20-min GPU FAISS build', '60% cost reduction per query', 'Zero cloud dependency option'],
    image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/Orcan-VisionTrace',
    live_url: '',
  },
  {
    id: '3',
    title: 'Videobot – Video Interactive Chat Assistant',
    description: 'Multimodal RAG pipeline combining audio extraction, subtitle generation, ChromaDB vector chunking, and LLM responses to provide exact 5-second video segment playback.',
    technologies: ['Python', 'RAG', 'ChromaDB', 'LLMs', 'FastAPI', 'React'],
    key_features: ['Exact timestamp retrieval in 5s', 'Audio extraction & subtitle gen', 'Synchronized chat + video UI', 'Zero hallucination drift'],
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/VideoBOT',
    live_url: '',
  },
  {
    id: '4',
    title: 'DocuProcess – Intelligent Document Processing Pipeline',
    description: 'Automated document extraction, OCR parsing, table structure analysis, and LLM text summarization pipeline built for high-throughput document workflows.',
    technologies: ['Python', 'FastAPI', 'OCR', 'LLMs', 'PyPDF', 'React'],
    key_features: ['OCR text & table extraction', 'LLM document summarization', 'Batch PDF processing', 'REST API integration'],
    image_url: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/DocuProcess',
    live_url: '',
  },
  {
    id: '5',
    title: 'AI-Driven Smart Inventory Monitoring Agent (n8n + LLM)',
    description: 'Autonomous inventory tracking & anomaly detection agent powered by n8n workflow automation, LLM reasoning logic, and automated stock reorder alert dispatching.',
    technologies: ['n8n', 'Python', 'LLMs', 'Automation', 'PostgreSQL', 'REST API'],
    key_features: ['Real-time stock anomaly detection', 'Automated n8n alert workflows', 'LLM supply reorder reasoning', 'Multi-channel notifications'],
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/AI-Driven-Smart-Inventory-Monitoring-Agent-n8n-LLM-Automation',
    live_url: '',
  },
  {
    id: '6',
    title: 'Executive Financial Performance AI Insights',
    description: 'Executive-level financial analytics dashboard powered by LLM narrative generation, automated KPI extraction, and predictive cashflow balance metrics.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'LLMs', 'Power BI', 'Financial Analytics'],
    key_features: ['Automated C-suite financial summary', 'Predictive cashflow trends', 'Multi-dimensional KPI analytics', 'Natural language Q&A over finance data'],
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/Executive-Financial-Performance-AI-Insights',
    live_url: '',
  },
  {
    id: '7',
    title: 'AudioTest – Voice AI & Audio Processing Suite',
    description: 'High-performance audio stream processing and Voice AI experimentation suite utilizing Whisper transcription, ElevenLabs speech synthesis, and real-time buffer analysis.',
    technologies: ['Python', 'ElevenLabs', 'Whisper', 'Audio Processing', 'FastAPI'],
    key_features: ['Low-latency speech synthesis', 'Whisper STT transcription', 'Real-time audio stream buffering', 'Multi-voice testing harness'],
    image_url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/AudioTest',
    live_url: '',
  },
  {
    id: '8',
    title: 'Havenmind – Mental Health & Conversational AI Agent',
    description: 'Empathetic conversational AI assistant providing mental wellness support, emotion sentiment tracking, and guided cognitive exercises with privacy-first data handling.',
    technologies: ['Python', 'Conversational AI', 'LLMs', 'Sentiment Analysis', 'Streamlit', 'FastAPI'],
    key_features: ['Real-time sentiment & emotion detection', 'Guided cognitive wellness exercises', 'Empathetic LLM prompt safety guardrails', 'Encrypted session logs'],
    image_url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80',
    github_url: 'https://github.com/Nithinah/Havenmind',
    live_url: '',
  },
]

export const defaultCertificates = [
  { id: '1', title: 'AI and ML for Geodata Analytics — ISRO & IIRS Dehradun', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
  { id: '2', title: 'Learning Analytical Tools — NPTEL', image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80' },
  { id: '3', title: 'LifeTrx HealthTech Hackathon — Top 50 of 800+', image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
  { id: '4', title: 'GDG Hackathon — Top 25 of 111+ (Ear Health Analytics)', image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80' },
  { id: '5', title: 'AIWO Influence 2025 — Event Organizer', image_url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80' },
  { id: '6', title: "Student Coordinator — Institution's Innovation Council (IIC), CIT", image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80' },
]

export const defaultTechStacks = [
  { id: '1', name: 'Python', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { id: '2', name: 'TensorFlow', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { id: '3', name: 'PyTorch', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { id: '4', name: 'FastAPI', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { id: '5', name: 'RAG & LLMs', logo_url: '' },
  { id: '6', name: 'Docker', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { id: '7', name: 'PostgreSQL', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { id: '8', name: 'React JS', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { id: '9', name: 'Streamlit', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
  { id: '10', name: 'AWS & Vertex AI', logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
]

export const fetchProjects = async () => {
  try {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: true })

    return data && data.length > 0 ? data : defaultProjects
  } catch {
    return defaultProjects
  }
}

export const fetchCertificates = async () => {
  try {
    const { data } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', { ascending: true })

    return data && data.length > 0 ? data : defaultCertificates
  } catch {
    return defaultCertificates
  }
}

export const fetchTechStacks = async () => {
  try {
    const { data } = await supabase
      .from('tech_stack')
      .select('*')
      .order('created_at', { ascending: true })

    return data && data.length > 0 ? data : defaultTechStacks
  } catch {
    return defaultTechStacks
  }
}