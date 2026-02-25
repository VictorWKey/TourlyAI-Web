const en = {
  nav: {
    features: 'Features',
    pipeline: 'Pipeline',
    demo: 'Demo',
    techStack: 'Tech Stack',
    download: 'Download',
  },
  hero: {
    badge: 'Open Source — MIT License',
    title: 'AI-Powered',
    titleHighlight: 'Review Analysis',
    titleEnd: 'for Tourism',
    subtitle:
      'Desktop application that uses AI and NLP to analyze reviews — extracting sentiments, topics, categories, and generating intelligent summaries. All running locally on your machine.',
    cta: 'Download for Windows',
    ctaSecondary: 'View on GitHub',
    statsReviews: 'Reviews analyzed',
    statsPhases: 'NLP phases',
    statsModels: 'AI models',
    statsLanguages: 'Languages',
  },
  features: {
    badge: 'Capabilities',
    title: 'Everything You Need to',
    titleHighlight: 'Understand Your Reviews',
    subtitle:
      'A complete 7-phase NLP pipeline that transforms raw reviews into actionable insights with state-of-the-art AI models.',
    sentiment: {
      title: 'Sentiment Analysis',
      description:
        'BERT-based multilingual sentiment classification that detects positive, negative, and neutral opinions across multiple languages.',
    },
    topics: {
      title: 'Topic Modeling',
      description:
        'Discover hidden themes in your reviews using hierarchical topic analysis with BERTopic enhanced by LLMs.',
    },
    categories: {
      title: 'Category Classification',
      description:
        'Multi-label tourism category tagging (accommodation, food, attractions, etc.) with fine-tuned BERT models.',
    },
    summaries: {
      title: 'Intelligent Summaries',
      description:
        'LangChain + LLM-generated summaries that synthesize key information from hundreds or thousands of reviews.',
    },
    visualizations: {
      title: 'Interactive Visualizations',
      description:
        'Charts, dashboards, word clouds, and exportable reports — everything you need to present your findings.',
    },
    privacy: {
      title: 'Privacy First',
      description:
        'Runs entirely on your machine with Ollama local LLM. Your data never leaves your computer unless you opt for cloud API.',
    },
    subjectivity: {
      title: 'Subjectivity Detection',
      description:
        'Classify reviews as subjective or objective using a custom fine-tuned BERT model trained specifically for tourism reviews.',
    },
    insights: {
      title: 'Strategic Insights',
      description:
        'LLM-generated strategic recommendations and actionable business insights derived from the complete analysis pipeline.',
    },
  },
  pipeline: {
    badge: 'How It Works',
    title: 'A 7-Phase',
    titleHighlight: 'NLP Pipeline',
    subtitle:
      'Each phase builds upon the previous one, progressively enriching your data with AI-powered analysis.',
    phase1: { title: 'Text Processing', description: 'Clean, deduplicate, and preprocess raw review data' },
    phase2: { title: 'Sentiment Analysis', description: 'BERT multilingual sentiment classification' },
    phase3: { title: 'Subjectivity', description: 'Classify reviews as subjective or objective' },
    phase4: { title: 'Categories', description: 'Multi-label tourism category tagging' },
    phase5: { title: 'Topic Modeling', description: 'BERTopic + LLM hierarchical topic discovery' },
    phase6: { title: 'Summarization', description: 'LangChain recursive intelligent summaries' },
    phase7: { title: 'Visualizations', description: 'Charts, dashboards, and exportable reports' },
  },
  demo: {
    badge: 'See It in Action',
    title: 'Beautiful Interface,',
    titleHighlight: 'Powerful Analysis',
    subtitle:
      'A polished desktop experience built with React, Tailwind CSS, and Radix UI — featuring dark mode, internationalization, and a 14-step setup wizard.',
    dashboard: 'Interactive Dashboard',
    pipelineView: 'Pipeline Controls',
    visualizationsView: 'Rich Visualizations',
    setupWizard: 'Setup Wizard',
    results: 'Analysis Results',
    reviews: 'Review Explorer',
  },
  video: {
    badge: 'Watch Demo',
    title: 'See TourlyAI',
    titleHighlight: 'In Action',
    subtitle: 'Watch a complete walkthrough of the analysis pipeline — from data upload to intelligent insights.',
    play: 'Play Demo Video',
  },
  techStack: {
    badge: 'Built With',
    title: 'Modern',
    titleHighlight: 'Tech Stack',
    subtitle:
      'Built with industry-leading technologies for maximum performance, reliability, and developer experience.',
    frontend: 'Frontend',
    backend: 'Backend',
    ai: 'AI & ML',
    devops: 'DevOps',
  },
  stats: {
    title: 'Built for',
    titleHighlight: 'Real-World Use',
    pages: 'React Pages',
    components: 'Components',
    pipelinePhases: 'Pipeline Phases',
    stores: 'State Stores',
    languages: 'Languages (i18n)',
    testFiles: 'Test Files',
    ciPlatforms: 'CI Platforms',
    documentation: 'Doc Files',
  },
  cta: {
    title: 'Ready to Analyze',
    titleHighlight: 'Your Reviews?',
    subtitle:
      'Download TourlyAI and start extracting actionable insights from your tourism reviews today. Free and open source.',
    download: 'Download for Windows',
    github: 'Star on GitHub',
    note: 'Free & open source · MIT License · No account required',
  },
  footer: {
    description:
      'AI-powered desktop application for analyzing tourism reviews using NLP, sentiment analysis, and LLMs.',
    product: 'Product',
    resources: 'Resources',
    legal: 'Legal',
    download: 'Download',
    github: 'GitHub',
    changelog: 'Changelog',
    contributing: 'Contributing',
    documentation: 'Documentation',
    privacy: 'Privacy Policy',
    license: 'License (MIT)',
    rights: '© 2025-2026 victorwkey. All rights reserved.',
    builtWith: 'Built with React, TypeScript & Tailwind CSS',
  },
} as const;

export default en;
export type TranslationKeys = typeof en;
