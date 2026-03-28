export const featured = [
  {
      name: 'Climate Active Envelopes',
      subtitle: 'Research Assistant — Professorship of Digital Fabrication',
      description:
        'Contributed to an open-source computational design and robotic fabrication research project for climate-responsive brick wall assemblies. Extended the core assembly module with bond pattern algorithms, shading logic, and ornament generation using COMPAS graph data structures.',
      tags: ['Python', 'COMPAS', 'Rhino/Grasshopper', 'ABB Robotics', 'ROS', 'Docker', 'Shapely'],
      url: 'https://shavss.github.io/climate_active_envelopes/',
  },
  {
      name: 'Paketpost Aerial Vision',
      subtitle: 'Group Project — Technical University of Munich',
      description:
        'Full-stack proptech web application built for a real Munich postal depot redevelopment brief. Combines interactive 3D site visualisation with live data overlays to support early-stage urban design decisions. Built with the MERN stack and deployed on Azure.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Azure'],
      url: 'https://shavss.github.io/ITBE-Fusion-Lab/',
  },
  {
    name: 'Digital Naturalist',
    subtitle: 'MSc Thesis — Massachusetts Institute of Technology',
    description:
      'Bayesian Product of Experts fusion model combining ResNet-18 vision with XGBoost habitat suitability for context-aware urban insect species classification across 8 species and 11,000+ citizen-science observations in Amsterdam. Achieved +2.5 pp average accuracy over the vision-only baseline.',
    tags: ['Python', 'PyTorch', 'XGBoost', 'ResNet-18', 'PoE Fusion', 'Jupyter Notebook'],
    url: 'https://github.com/Shavss/thesis-poe-fusion',
  },
  {
      name: 'Kitty Splitty',
      subtitle: 'University Project — Technical University of Munich',
      description:
        'Group expense management prototype with full database design. Implements shared kitty creation, multi-type transaction splitting, user login tracking, and financial overviews. Built in C# with Entity Framework and SQLite for relational data persistence.',
      tags: ['C#', '.NET', 'SQL', 'Entity Framework', 'Database Design'],
      url: 'https://github.com/Shavss/kitty-split-prototype',
  },
]

export const all = [
  ...featured,
  {
      name: 'Automated PDF Extraction Pipeline',
      subtitle: 'Data Engineer — ZM-I Engineers',
      description:
        'Python pipeline automating extraction of structural engineering data from PDF reports using modular scrapers. Parsed data is inserted into local and Azure SQL databases via SQLAlchemy, feeding a physics-informed neural network for structural design optimisation.',
      tags: ['Python', 'SQL', 'Azure', 'SQLAlchemy', 'Automation'],
      url: 'https://github.com/Shavss/data-managment',
  },
  {
    name: 'Parse That!',
    subtitle: 'AEC Hackathon - Munich Edition 2024',
    description:
      'LLM-powered data pipeline built at AEC Hackathon with MOD (modular construction). Uses GPT-4 and LangChain to extract structured product data from unstructured manufacturer PDFs into a typed Pydantic schema for BIM and digital product libraries.',
    tags: ['Python', 'GPT-4', 'LangChain', 'Pydantic', 'Flask', 'AEC'],
    url: 'https://shavss.github.io/AECHachathon_MOD_ParseThat/',
  },
  {
      name: 'Legacy Calculator Modernisation',
      subtitle: 'Software Developer — Siemens',
      description:
        'Modular Python pipeline that modernises legacy Excel-based calculation tools by parsing spreadsheet logic, resolving formula dependencies, and producing structured YAML definitions for API-driven software systems. Bridges business logic from Excel into a maintainable architecture.',
      tags: ['Python', 'YAML', 'REST API', 'Excel', 'Automation'],
      url: 'https://github.com/',
  },
  {
    name: 'Deep Vectorisation of Technical Drawings',
    subtitle: 'University Project — Technical University of Munich',
    description:
      'Deep learning pipeline for converting raster architectural drawings into structured vector geometry. Implemented U-Net segmentation and transformer-based line detection with skeletonisation post-processing and SVG output. Explored synthetic data generation to address the scarcity of labelled real-world architectural drawing datasets.',
    tags: ['Python', 'TensorFlow', 'U-Net', 'Transformers', 'OpenCV', 'SVG', 'Computer Vision'],
    url: 'https://github.com/Shavss/Software-Lab',
  },
]
