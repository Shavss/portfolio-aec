const projects = [
  {
    slug: 'digital-naturalist',
    name: 'Digital Naturalist',
    subtitle: 'MSc Thesis — Massachusetts Institute of Technology',
    description:
      'Bayesian Product of Experts fusion model combining ResNet-18 vision with XGBoost habitat suitability for context-aware urban insect species classification across 8 species and 11,000+ citizen-science observations in Amsterdam. Achieved a total of +15.55 pp accuracy improvement over the initially deployed vision-only model.',
    tags: ['Python', 'PyTorch', 'Computer Vision', 'XGBoost', 'ResNet-18', 'PoE Fusion', 'Jupyter Notebook', 'REST API', ],
    url: 'https://github.com/Shavss/thesis-poe-fusion',
    parentProject: { label: 'Part of B++', url: 'https://senseable.mit.edu/b++/' },
    role: 'MSc Researcher',
    context: 'MIT Senseable City Lab',
    year: '2025 - 2026',
    challenge:
      'Urban ecosystems face significant biodiversity loss, with insect populations declining rapidly. Addressing this challenge requires scalable monitoring tools that capture ecological complexity across spatial and temporal scales. Although automated camera systems combined with deep learning have transformed ecological sensing, most pipelines remain vision-only. These systems often degrade under visual domain shifts or when species are morphologically similar and visually ambiguous.',
    approach:
      'Designed a a context-aware sensing framework that integrates visual evidence with environmental context in a Bayesian Product of Experts (PoE) late-fusion architecture. A ResNet-18 visual expert processes unstructured image data, while an XGBoost environmental expert models context-based species plausibility using real-time weather data and microscale urban habitat descriptors. To reduce sensor-induced distribution mismatch, the visual expert is additionally trained using a sensor-mimetic strategy that exposes it to synthetic degradations resembling the target camera.',
    keyFeatures: [
      {
        title: 'PoE Fusion Architecture',
        description: 'Two independent expert models produce posterior distributions multiplied to form joint predictions, naturally weighting each modality by confidence.',
      },
      {
        title: '11K Citizen Science Observations',
        description: 'Trained and validated on real-world observation data from Amsterdam\'s urban biodiversity monitoring network.',
      },
      {
        title: 'Habitat Suitability Model',
        description: 'XGBoost classifier encoding geospatial and environmental features as a complementary signal to visual identification.',
      },
      {
        title: 'Confidence Calibration',
        description: 'Bayesian fusion naturally produces calibrated uncertainty estimates, enabling reliable confidence thresholds for deployment.',
      },
    ],
    outcome:
      'After sensor-mimetic training, the domain-adjusted CNN baseline achieves an improvemet of +13.0 pp. Combining this model with the environmental expert, a fused Top-1 experienced further absolute improvement of +2.55 pp over the adjusted vision-only baseline. That is total of +15.55 pp improvement over the initially deployed model.',
      //'+2.5 percentage point average accuracy improvement over the vision-only baseline across 8 urban insect species. Demonstrated that habitat context is a viable complementary signal for automated species identification in urban environments.',
  },
  {
    slug: 'climate-active-envelopes',
    name: 'Climate Active Envelopes',
    subtitle: 'Research Assistant — Technical University of Munich',
    description:
       'Research project at the Professorship of Digital Fabrication at TU Munich, developed in collaboration with a PhD researcher, investigating climate-resilient mono-material brick wall systems where geometry actively responds to environmental conditions.',
    tags: ['Python', 'COMPAS', 'Rhino/Grasshopper', 'ABB Robotics', 'ROS', 'Docker', 'Shapely'],
    url: 'https://github.com/augmentedfabricationlab/climate_active_envelopes',
    parentProject: { label: 'Research Page', url: 'https://augmentedfabricationlab.github.io/climate_active_envelopes/' },
    vimeoId: '1177204046',
    role: 'Research Assistant',
    context: 'Technical University of Munich — Professorship of Digital Fabrication',
    year: '2023-2025',
    challenge:
      'Climate-responsive brick facades sit at the intersection of environmental simulation, structural masonry logic, and robotic fabrication constraints, three domains that typically exist in separate tools with no shared data model. The core difficulty was not any one of these individually but the translation between them. Simulation outputs are continuous scalar fields across a surface, while fabrication operates on discrete, sequenced physical objects. Mapping one onto the other without breaking structural validity or fabrication feasibility required a unified computational framework that did not exist in the existing codebase.',
    approach:
      'Joined an existing COMPAS-based open-source codebase and substantially extended the core assembly module built on COMPAS graph data structures. Each brick is represented as a node with typed attributes, with edges encoding adjacency and placement sequencing. The work involved both adding new functionality and refactoring existing logic: corner-condition handling was overhauled to improve geometric correctness, and gripping-frame generation for robotic pick-and-place was revised to handle a wider range of brick configurations. Beyond the Python module, contributed to the Grasshopper visual-programming interface that serves as the primary design-to-fabrication workflow, and carried out physical assembly tests with an ABB industrial robot, using fabrication feedback to iteratively refine placement accuracy and sequence logic in the digital model.',
    keyFeatures: [
      {
        title: 'Bond Pattern Algorithms',
        description:
          'Procedural generation of Flemish and vertical bond arrangements satisfying both structural validity and the geometric constraints of robotic placement. The algorithms are graph-aware, encoding brick adjacency and sequencing directly into the COMPAS data structure rather than treating layout and fabrication order as separate concerns.',
      },
      {
        title: 'Climatic Translation Logic',
        description:
          'Per-brick shift and rotation driven by inverse-distance-weighted interpolation from solar radiation and thermal simulation data, bridging the gap between continuous environmental scalar fields and the discrete geometry of individual placed bricks. The result is a mono-material envelope whose geometry actively responds to local environmental conditions.',
      },
      {
        title: 'Ornament and Corner Handling',
        description:
          'Configurable ornament patterns including cross and diamond variations, alongside refactored corner-condition logic that significantly improved geometric correctness at wall junctions and reduced fabrication errors during physical assembly tests.',
      },
      {
        title: 'Design-to-Fabrication Pipeline',
        description:
          'Grasshopper interface for layout visualisation in Rhino and collision-free sequencing simulation, exporting a JSON instruction set of brick positions, orientations, and placement order consumed directly by the ABB robot as its fabrication programme.',
      },
    ],
    outcome:
      'Delivered reusable, well-structured modules to the open-source research codebase. Physical assembly tests with an ABB industrial robot validated the digital model, with fabrication feedback iteratively refining placement accuracy and sequence logic. Work supported ongoing research at the Professorship of Digital Fabrication, TU Munich.',
  },
  {
    slug: 'paketpost-areal-vision',
    name: 'Paketpost Areal Vision',
    subtitle: 'Fusion Lab — Technical University of Munich',
    description:
      'Full-stack PropTech platform built for the real-world redevelopment of Munich\'s historic Paketpost depot into a mixed-use quarter. It serves prospective buyers and renters exploring available units alongside existing residents managing their flat through an in-browser BIM viewer. Built on the MERN stack and deployed on Azure.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Three.js', 'IFC.js', 'Docker', 'Azure', 'Vite', 'Nginx'],
    url: 'https://github.com/Shavss/ITBE-Fusion-Lab',
    vimeoId: '1175405454',
    role: 'Full-Stack Developer',
    context: 'TU Munich — Fusion Lab WiSe 2024/25',
    year: '2024-2025',
    challenge:
      'The redevelopment of a major urban site generates information that is practically inaccessible to the people it most affects. Prospective residents have no way to spatially explore available units in context, and existing residents have no direct channel to report issues against the specific building elements they concern. The deeper technical problem is that BIM files contain exactly this semantic detail at the element level, but sit locked inside authoring tools no tenant or buyer will open. Extracting and serving that information through a browser without destroying the spatial and semantic relationships the model encodes required careful thought about both the rendering pipeline and the data architecture connecting it to the application.',
    approach:
      'The application is structured around two authenticated user states with separate data flows. The backend is built with Node.js and Express, with routes separated into isolated modules covering authentication, contact handling, dashboard retrieval, and maintenance requests. JWT tokens generated at login gate all protected routes, with passwords hashed using bcrypt before storage in MongoDB Atlas. Sensitive configuration is loaded through environment variables to keep credentials out of the codebase. On the frontend, the React application is bundled with Vite for fast iteration, with components communicating to the backend through well-defined REST endpoints and the production build served through Nginx. The full stack is containerised using multi-stage Docker builds that produce separate optimised images for the frontend and backend, both deployed to Azure Web Apps with a CI/CD pipeline in Azure DevOps that rebuilds and redeploys on every push to GitHub.',
    keyFeatures: [
      {
        title: 'Property Discovery Flow',
        description:
          'Questionnaire-driven unit matching that filters available properties and locates them on a 3D viewer fusing the GIS masterplan with the BIM model, so prospective buyers and renters can see exactly where a shortlisted unit sits within the development.',
      },
      {
        title: 'In-Browser BIM Maintenance Viewer',
        description:
          'Built with Three.js and IFC.js, the viewer parses the IFC model in the browser and builds a mapping between mesh objects and element IDs. Residents hover to highlight individual building elements and double-click to submit maintenance requests linked to those specific elements, with no plugin or Revit licence required. This was my primary contribution to the project.',
      },
      {
        title: 'Scroll-Driven Landing Experience',
        description:
          'Five expandable design chapters covering structural innovation, cultural identity, green strategy, facade logic, and the two signature towers, with an interactive Three.js point cloud viewer of the landmark Paketposthalle on the landing screen. Spheres placed above the model surface display contextual information on hover, driven by raycasting.',
      },
      {
        title: 'Protected Resident Dashboard',
        description:
          'JWT-authenticated dashboard aggregating energy analytics, maintenance request tracking, rent management, and document storage, with backend routes isolated into modular Express controllers and data persisted in MongoDB Atlas.',
      },
    ],
    outcome:
      'Delivered a functional PropTech prototype for a live urban development brief as part of TU Munich\'s interdisciplinary Fusion Lab course, spanning three chairs across Architectural Informatics, Computational Modeling, Geoinformatics. The project demonstrated how IFC semantic data can be made practically useful to the non-architects whose daily lives the models describe.',
  },
  {
    slug: 'pdf-extraction-pipeline',
    name: 'Automated PDF Extraction Pipeline',
    subtitle: 'Data Engineer — Zilch + Müller Ingenieure',
    description:
      'Python ETL pipeline extracting structural engineering data from raw engineering documents as the first stage of the HyMoDe research pipeline, feeding a physics-informed neural network for structural design optimisation.',
    tags: ['Python', 'SQL', 'Azure', 'SQLAlchemy', 'Pandas', 'Automation'],
    url: 'https://github.com/Shavss/data-management',
    parentProject: { label: 'Part of HyMoDe', url: 'https://www.tu-braunschweig.de/isd/forschung/methodenentwicklung/physik-und-datengetriebene-modellierung-zur-berechnung-und-bemessung-von-tragwerken-in-fruehen-entwurfsphasen' },
    role: 'Data Engineer',
    context: 'Zilch + Müller Ingenieure',
    year: '2024',
    challenge:
      'Structural engineering data from real constructed buildings existed only in raw documents: structural calculation PDFs, reinforcement plans, position plans, and Excel-based project sheets, each with different layouts and formatting conventions. Physics-informed neural networks need clean, structured, relational training data, and none of the existing documents could feed that pipeline without a purpose-built extraction layer.',
    approach:
      'Built a modular Python pipeline where each document type gets its own configurable scraper, selectable at runtime via a parser variable. Parsed data is loaded into a structured relational schema covering six document source types including Bewehrungsplan, Positionplan, Statik, Decke, and Stützen, inserted into both local and Azure SQL databases via SQLAlchemy. All operations and errors are logged to a file for traceability. The structured output serves as the data backbone for the downstream surrogate model training within the HyMoDe Hybrid Modeling Method.',
    keyFeatures: [
      {
        title: 'Modular Document Scrapers',
        description:
          'Configurable extraction modules covering structural calculation PDFs, reinforcement plans, position plans, and Excel project sheets, each handling the layout and formatting conventions specific to its document type.',
      },
      {
        title: 'Relational Database Schema',
        description:
          'Data is loaded into a purpose-designed relational schema with tables grouped by document source type, ensuring the structured output is directly consumable by downstream machine learning models.',
      },
      {
        title: 'Dual-Target Persistence',
        description:
          'SQLAlchemy ORM layer targeting both a local development database and Azure SQL, with error logging to a output file for traceability across processing runs.',
      },
      {
        title: 'HyMoDe Pipeline Integration',
        description:
          'Structured output feeds the surrogate model training stage of the HyMoDe pipeline, where physics-informed neural networks constrained by structural mechanics differential equations predict optimised component designs from limited training data.',
      },
    ],
    outcome:
      'The pipeline automates extraction across multiple engineering document types and directly enables the neural network training stage of the HyMoDe structural optimisation research.',
  },
  {
    slug: 'parse-that',
    name: 'Parse That!',
    subtitle: 'AEC Hackathon — Munich Edition 2024',
    description:
      'LLM-powered data pipeline built at AEC Hackathon Munich 2024 with MOD, an open-source platform for modular construction. Converts unstructured manufacturer PDFs into structured JSON compliant with mod-dlm, an open-source DSL for prefab AEC components, using Marker for preprocessing, GPT-4 via LangChain for extraction, and Pydantic for validation.',
    tags: ['Python', 'GPT-4', 'LangChain', 'Pydantic', 'Flask', 'React', 'Marker', 'AEC'],
    url: 'https://github.com/mod-construction/AECHachathon_MOD_ParseThat',
    parentProject: { label: 'Part of MOD', url: 'https://www.mod.construction/' },
    vimeoId: '1175419101',
    role: 'Developer',
    context: 'AEC Hackathon — MOD',
    year: '2024',
    challenge:
      'Prefabricated building component data for walls, facades, floors, and volumetric modules is distributed across inconsistently structured manufacturer PDFs with mixed layouts, embedded images, and tables. Integrating this into BIM workflows or digital product libraries requires expensive manual transcription or brittle bespoke parsers, and no existing tool could reliably bridge unstructured source documents to a standardised, machine-readable schema.',
    approach:
    'Built a three-stage pipeline connecting AI-driven PDF preprocessing, LLM-based extraction, and strict schema validation against the mod-dlm standard. The backend spans four Python modules bridging the processing logic to a ReactJS frontend via Flask. A parallel proof-of-concept track explored local Llama deployment for offline, API-free operation. My contribution focused on establishing the core algorithms within the web framework, integrating the OpenAI pipeline, and leading the final presentation.',    keyFeatures: [
      {
        title: 'Marker PDF Preprocessing',
        description:
          'AI-driven document normalisation converting complex, inconsistent PDF layouts into structured markdown, with OCR support for scanned documents, before any LLM interaction.',
      },
      {
        title: 'LangChain + GPT-4 Extraction',
        description:
          'Configurable LangChain orchestration layer for model-agnostic extraction, tested against GPT-4 via API and a locally deployed Llama instance, with built-in prompt management and structured output parsing.',
      },
      {
        title: 'mod-dlm Schema Validation',
        description:
          'Pydantic models enforce strict compliance with the mod-dlm open-source DSL, ensuring every extracted output is semantically valid and ready for downstream BIM or procurement tooling.',
      },
      {
        title: 'ReactJS Web Interface',
        description:
          'Drag-and-drop PDF upload with configurable extraction flags (Multi-Products, Allow Assumption), a side-by-side PDF viewer and syntax-highlighted JSON display, bridged to the Python backend via Flask.',
      },
    ],
    outcome:
      'Delivered and demoed a working prototype in 48 hours, successfully extracting and validating structured product data from real-world manufacturer PDFs against the mod-dlm schema. The full codebase was open-sourced on GitHub. The project demonstrated a viable path to automated product data standardisation for the construction industry, with identified directions for further development including confidence scoring, expanded schema coverage, and web-augmented retrieval for missing fields.',
  },
  {
    slug: 'kitty-splitty',
    name: 'Kitty Splitty',
    subtitle: 'University Project — Technical University of Munich',
    description:
      'Group expense management prototype with full database design. Implements shared kitty creation, multi-type transaction splitting, user login tracking, and financial overviews. Built in C# with Entity Framework and SQLite for relational data persistence.',
    tags: ['C#', '.NET', 'SQL', 'Entity Framework', 'Database Design'],
    url: 'https://github.com/Shavss/kitty-split-prototype',
    role: 'Developer',
    context: 'Technical University of Munich',
    year: '2023',
    challenge:
      'Group expense management requires handling complex transaction splitting logic — equal, percentage-based, and custom splits — while maintaining financial consistency across multiple users and shared accounts.',
    approach:
      'Designed a normalised relational schema for shared expense pools, multi-type transaction splitting, and user session tracking. Implemented in C# with Entity Framework as ORM and SQLite for lightweight persistence, prioritising clean separation of data access from business logic.',
    keyFeatures: [
      {
        title: 'Relational Schema Design',
        description: 'Normalised database model handling users, kitties, transactions, and splits with referential integrity.',
      },
      {
        title: 'Multi-Type Splitting',
        description: 'Support for equal, percentage-based, and custom amount splits with automatic balance recalculation.',
      },
      {
        title: 'Entity Framework ORM',
        description: 'Type-safe data access layer with migrations, enabling schema evolution without manual SQL.',
      },
      {
        title: 'Financial Overviews',
        description: 'Real-time balance calculations showing who owes whom, with optimised debt simplification.',
      },
    ],
    outcome:
      'Functional prototype demonstrating clean separation of concerns and robust data modelling for group financial operations. Validated database design through comprehensive test scenarios.',
  },
  {
    slug: 'legacy-calculator-modernisation',
    name: 'Legacy Calculators Modernisation',
    subtitle: 'Software Developer — Siemens',
    description:
      'Modular Python pipeline that modernises legacy Excel-based calculation tools by parsing spreadsheet logic, resolving formula dependencies, and producing structured YAML definitions for API-driven software systems. Bridges business logic from Excel into a maintainable architecture.',
    tags: ['Python', 'YAML', 'REST API', 'Excel', 'Automation'],
    url: 'https://github.com/',
    role: 'Software Developer',
    context: 'Siemens',
    year: '2026',
    challenge:
      'Critical business calculations lived inside Excel spreadsheets with opaque, nested formula chains built over years. Modernising required understanding and preserving embedded logic without access to original documentation.',
    approach:
      'Built a modular Python pipeline that parses Excel workbooks cell-by-cell, maps formula dependencies into a directed acyclic graph, resolves evaluation order via topological sort, and emits structured YAML definitions directly consumable by API-driven calculation services.',
    keyFeatures: [
      {
        title: 'Excel Formula Parser',
        description: 'Cell-level parsing of Excel formulas including nested functions, cross-sheet references, and named ranges.',
      },
      {
        title: 'Dependency Graph Resolution',
        description: 'Directed acyclic graph construction with topological sorting to determine correct evaluation order.',
      },
      {
        title: 'YAML Code Generation',
        description: 'Structured, human-readable output format mapping directly to API endpoint definitions.',
      },
      {
        title: 'API-Ready Architecture',
        description: 'Generated definitions plug directly into REST API frameworks, replacing Excel with testable, versioned services.',
      },
    ],
    outcome:
      'Enabled migration of legacy Excel calculation tools into a maintainable, testable software architecture at Siemens. Pipeline handles arbitrary spreadsheet complexity without manual formula translation.',
  },
  {
    slug: 'deep-vectorisation',
    name: 'Deep Vectorisation of Technical Drawings',
    subtitle: 'University Project — Technical University of Munich',
    description:
      'Deep learning pipeline for converting raster architectural drawings into structured vector geometry. Implemented U-Net segmentation and transformer-based line detection with skeletonisation post-processing and SVG output. Explored synthetic data generation to address the scarcity of labelled real-world architectural drawing datasets.',
    tags: ['Python', 'TensorFlow', 'U-Net', 'Transformers', 'OpenCV', 'SVG', 'Computer Vision'],
    url: 'https://github.com/Shavss/Software-Lab',
    role: 'ML Engineer',
    context: 'Technical University of Munich',
    year: '2024',
    challenge:
      'There are a lot of technical drawings available in raster format, which limits their scalability and integration with modern digital design tools. Converting them to structured vector geometry for downstream CAD and BIM use requires semantic understanding of line types, not just edge detection.',
    approach:
      'Implemented a deep learning pipeline combining U-Net segmentation for wall and opening classification with transformer-based line detection for geometric primitives. Post-processing via morphological skeletonisation produces clean vector paths exported as SVG. Developed a synthetic data generation pipeline to bootstrap training without expensive manual annotation.',
    keyFeatures: [
      {
        title: 'U-Net Segmentation',
        description: 'Pixel-level classification of architectural elements — walls, openings, annotations — as semantic regions.',
      },
      {
        title: 'Transformer Line Detection',
        description: 'Attention-based architecture for detecting and classifying geometric line primitives from segmentation masks.',
      },
      {
        title: 'Skeletonisation Pipeline',
        description: 'Morphological thinning of segmentation outputs to single-pixel-width paths, enabling clean SVG vectorisation.',
      },
      {
        title: 'Synthetic Data Generation',
        description: 'Procedural drawing generator creating labelled training pairs, addressing the scarcity of annotated architectural datasets.',
      },
    ],
    outcome:
      'Demonstrated end-to-end raster-to-vector conversion for architectural drawings. Synthetic data approach showed significant promise for bootstrapping model training without expensive manual annotation.',
  },
]

export const featured = projects.slice(0, 3)
export const all = projects
