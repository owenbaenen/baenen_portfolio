export const projectsData = [
    {
        id: 1,
        name: 'Autonomous Sailboat Swarm',
        objective: 'Lead the development of a multi‑agent autonomous sailboat fleet with robust sensing, navigation, and control in real‑world conditions.',
        contributions: [
            'Implemented an error‑state Kalman filter for LiDAR, IMU, GPS, and camera sensor fusion in C++/Python.',
            'Built modular, multithreaded embedded software on Raspberry Pi/Arduino with FreeRTOS for real‑time control and navigation.',
            'Integrated density‑based clustering for LiDAR collision avoidance and adaptive path planning.',
            'Performed CFD parameterized analysis in ANSYS Fluent to improve sail and hull hydrodynamic performance.'
        ],
        tools: ['C++', 'Python', 'FreeRTOS', 'Kalman Filter', 'OpenCV', 'Digital Filters', 'MultiThreading/Parallelism', 'ANSYS Fluent'],
        results: 'Improved navigation robustness and collision avoidance reliability across varied wind and sensing conditions.',
        details: 'Add field test notes, system diagrams, and build logs here.',
        posterUrl: '/project_material/sailboat/Final%20Poster%20Design.pdf',
        videoUrl: '',
        media: [
            { type: 'embed', src: 'https://www.youtube.com/watch?v=IPjDeEaensU' },
            { type: 'image', src: '/project_material/sailboat/side_view.jpg' },
            { type: 'image', src: '/project_material/sailboat/top_view.png' },
            { type: 'image', src: '/project_material/sailboat/sensors.jpg' },
            { type: 'image', src: '/project_material/sailboat/pool_side_pic.jpg' },
            { type: 'video', src: '/project_material/sailboat/static_movie.MOV' }
        ],
        images: [],
        videos: [],
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Cardiovascular Mesh Processing Pipeline and ML Analysis',
        objective: 'Automate MRI‑based mesh processing and apply ML analysis to quantify cardiovascular structure and flow behavior.',
        contributions: [
            'Built an automated pipeline for deformable mesh generation and registration from MRI datasets (Python).',
            'Implemented Fuzzy K‑Means segmentation with spatial regularization and outlier rejection.',
            'Streamlined preprocessing and QA for consistent downstream analysis.'
        ],
        tools: ['Python', 'NumPy', 'Pandas', 'DeepLearning', 'TensorFlow', 'Scikit-Learn', 'Unsupervised Learning', 'CFD/FSI', 'HyperMesh'],
        results: 'Reduced manual preprocessing effort and improved consistency across patient datasets.',
        details: 'Add poster summary and publication references here.',
        posterUrl: '/project_material/mesh_pipeline/cardiovascular_mesh_poster.pdf',
        videoUrl: '',
        images: [
            '/project_material/mesh_pipeline/displ_colMapping.gif',
            '/project_material/mesh_pipeline/fuzzy_segment.jpg',
            '/project_material/mesh_pipeline/Slide2.png',
            '/project_material/mesh_pipeline/side_show_view.jpg',
            '/project_material/mesh_pipeline/cover.jpg'
        ],
        videos: [],
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'DVT Fluid-Structure Interaction & Sensitivity Study',
        objective: 'Model deep vein valve FSI to study clot fracture mechanics and sensitivity to physiological parameters.',
        contributions: [
            'Built COMSOL Multiphysics models of deep vein valve FSI under physiological flow conditions.',
            'Performed parametric sensitivity analysis for flow, valve deflection, and clot fracture.',
            'Summarized key drivers influencing stress concentration and failure risk.'
        ],
        tools: ['COMSOL Multiphysics', 'FSI', 'MATLAB', 'Fracture Mechanics', 'Nonlinear Study'],
        results: 'Identified parameter ranges with the highest impact on flow behavior and clot mechanics.',
        details: 'Add poster summary, model assumptions, and validation notes here.',
        posterUrl: '/project_material/DVT_images/comsol_poster.pdf',
        videoUrl: '',
        media: [
            { type: 'image', src: '/project_material/DVT_images/dvt_slide_01-ezgif.com-crop.gif' },
            { type: 'image', src: '/project_material/DVT_images/dvt_slide_03-ezgif.com-crop.gif' },
            { type: 'image', src: '/project_material/DVT_images/dvt_slide_04-ezgif.com-crop.gif' },
            { type: 'image', src: '/project_material/DVT_images/dvt_slide_05-ezgif.com-crop.gif' },
            { type: 'image', src: '/project_material/DVT_images/dvt_slide_06-ezgif.com-crop.gif' },
            { type: 'image', src: '/project_material/DVT_images/dvt_slide_07-ezgif.com-crop.gif' },
            { type: 'image', src: '/project_material/DVT_images/dvt_slide_09-ezgif.com-crop.gif' },
            { type: 'image', src: '/project_material/DVT_images/heat_map.jpg' },
            { type: 'image', src: '/project_material/DVT_images/owne_avila_pic.jpg' }
        ],
        images: [],
        videos: [],
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'Rice Eclipse Rocket Launch Rail',
        objective: 'Design and validate a robust launch rail system for reliable and repeatable student rocket launches.',
        contributions: [
            'Designed structural components and verified load paths for launch stability and safety.',
            'Collaborated on fabrication and assembly with iterative prototyping.',
            'Performed ground tests to validate alignment and operational constraints.'
        ],
        tools: ['SolidWorks', 'FEA', 'CNC', 'Welding', 'Functional Safety', 'Root Cause Analysis'],
        results: 'Delivered a rail system that improved launch consistency and operational safety.',
        details: 'Add build photos, testing notes, and launch footage here.',
        posterUrl: '',
        videoUrl: '',
        images: [
            '/project_material/rocket_launch_rail/rain_static_image.jpg',
            '/project_material/rocket_launch_rail/rocket_cad.jpg',
            '/project_material/rocket_launch_rail/rocket_launch_picture.jpg'
        ],
        videos: ['/project_material/rocket_launch_rail/rocket_launch_movie.MOV'],
        code: '',
        demo: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     objective: '',
//     contributions: [],
//     tools: [],
//     results: '',
//     details: '',
//     posterUrl: '',
//     videoUrl: '',
//     images: [],
//     videos: [],
//     code: '',
//     demo: '',
// },
