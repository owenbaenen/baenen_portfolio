export const projectsData = [
    {
    id: 1,
    name: 'Autonomous Sailboat Fleet (FleetCode)',
    objective: 'Lead the design and deployment of a multi-agent autonomous sailboat system with real-time perception, navigation, and control in maritime environments.',
    contributions: [
        'Architected and implemented a modular autonomy stack (C++/Python) spanning perception, state estimation, navigation, and control on embedded systems.',
        'Developed a multi-sensor fusion pipeline (LiDAR, IMU, GPS, camera) using an error-state Kalman filter for robust state estimation in real-world conditions.',
        'Designed and deployed real-time perception and collision avoidance using LiDAR clustering and computer vision for object detection and localization.',
        'Built a dynamic path planning and repathing system (modified A*) incorporating wind constraints, COLREGs compliance, and real-time obstacle updates.',
        'Implemented multithreaded, distributed control architecture (Raspberry Pi + Arduino, FreeRTOS) for real-time actuation, sensing, and navigation loops.',
        'Developed low-level control systems (PI controllers) for rudder and sail actuation using cross-track and heading error feedback.',
        'Led full system integration including embedded software, sensor interfacing, electrical wiring, and hardware-software coordination.',
        'Performed CFD-driven design optimization (ANSYS Fluent) for sail aerodynamics and hull hydrodynamics to improve stability and efficiency.'
    ],
    tools: ['C++', 'Python', 'FreeRTOS', 'Kalman Filter', 'OpenCV', 'Multithreading', 'Embedded Systems', 'ANSYS Fluent', 'Sensor Fusion', 'Path Planning'],
    results: 'Demonstrated robust autonomous navigation with real-time obstacle avoidance and adaptive repathing, achieving reliable waypoint tracking in variable wind and sensing conditions.',
    details: 'End-to-end autonomous system integrating perception, planning, and control on embedded hardware, with real-world testing and multi-agent fleet extensibility.',
    posterUrl: '/project_material/sailboat/Final%20Poster%20Design.pdf',
        videoUrl: '',
        media: [
            { type: 'embed', src: 'https://www.youtube.com/watch?v=IPjDeEaensU' },
            { type: 'image', src: '/project_material/sailboat/side_view.jpg' },
            { type: 'image', src: '/project_material/sailboat/top_view.png' },
            { type: 'image', src: '/project_material/sailboat/another_side.jpg' },
            { type: 'image', src: '/project_material/sailboat/rudder_assembly.jpg' },
            { type: 'image', src: '/project_material/sailboat/pool_side_pic.jpg' },
            { type: 'video', src: '/project_material/sailboat/static_movie.MOV' },
            { type: 'image', src: '/project_material/sailboat/CFD_analysis.jpg' },
            { type: 'image', src: '/project_material/sailboat/perception.jpg' },
            { type: 'image', src: '/project_material/sailboat/optim_angle_graph.jpg' },
            { type: 'image', src: '/project_material/sailboat/sensors.jpg' },
            { type: 'image', src: '/project_material/sailboat/ANSYS_two_phase_flow.jpg' }
        ],
        images: [],
        videos: [],
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Cardiovascular Mesh Processing Pipeline and ML Analysis',
        objective: 'Develop an automated, scalable pipeline for patient-specific cardiovascular reconstruction and simulation from MRI data.',
        contributions: [
            'Designed an end-to-end Python pipeline converting DICOM MRI data into time-resolved, simulation-ready 4D meshes.',
            'Developed hybrid ML segmentation (deep learning + Fuzzy K-Means) with spatial/temporal constraints and robust outlier rejection for contour extraction.',
            'Implemented a custom mesh registration algorithm using vertex normal projection and ray-surface intersection for consistent time-evolving geometry.',
            'Optimized performance through vectorization and parallelization to efficiently process large-scale medical imaging datasets and high quality meshes.',
            'Integrated automated mesh conditioning and exported workflows for CFD/FSI simulation (ADINA) of patient-specific flow dynamics.'
        ],
        tools: ['Python', 'TensorFlow', 'Scikit-Learn', 'Bash', 'MeshLab API', 'Parallel Computing', 'CFD/FSI'],
        results: 'Reduced manual preprocessing and enabled consistent, scalable generation of patient-specific meshes for CFD-based cardiac flow analysis. Work was published in the American College of Cardiology and the front cover of the Journal of Cardiovascular Disease and Development (shown right).',
        details: 'Pipeline combines ML segmentation, geometry processing, and simulation integration for real-world medical datasets. ',
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
        objective: 'Develop a fully coupled multiphysics model to analyze deep vein thrombosis (DVT) mechanics, capturing interactions between blood flow, hyperelastic vein structures, and clot formation.',
        contributions: [
            'Developed a fully coupled Fluid-Structure Interaction (FSI) model in COMSOL to simulate pulsatile blood flow through hyperelastic deep vein valves.',
            'Modeled nonlinear hyperelastic vein walls and valve leaflets using Mooney-Rivlin material models to capture large deformation behavior.',
            'Integrated clot geometry into the flow domain to analyze its impact on hemodynamics, stress distribution, and recirculation zones.',
            'Performed extensive parametric sensitivity studies on valve angle, clot size, and clot location to identify key drivers of clot formation and detachment risk.',
            'Analyzed vorticity, recirculation zones, and stress/strain fields to evaluate conditions leading to clot propagation and fracture.',
            'Validated model assumptions against literature and experimental data, refining boundary conditions and material properties for physiological accuracy.'
        ],
        tools: ['COMSOL Multiphysics', 'FSI', 'MATLAB', 'Nonlinear FEA', 'Hyperelastic Modeling', 'Parametric Analysis'],
        results: 'Identified critical parameters influencing DVT progression, including strong sensitivity to clot size and valve geometry, and demonstrated the importance of wall deformation on stress prediction and flow behavior.',
        details: 'Includes full multiphysics model development, hyperelastic material modeling, clot-flow interaction analysis, and sensitivity studies across physiological parameter ranges.',
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
        objective: 'Design and deploy a 40 ft modular rocket launch rail capable of rapid assembly, structural reliability, and safe automated operation for student rocket launches.',
        contributions: [
            'Led the end-to-end design and fabrication of a 40 ft launch rail integrated onto a repurposed trailer platform.',
            'Designed a modular architecture enabling fast assembly and disassembly for transport and field deployment.',
            'Developed an automated winch-based raising system to safely transition the rail from transport to vertical launch configuration.',
            'Performed structural analysis and load case evaluation (MATLAB + FEA) to ensure stability under rocket weight and launch conditions.',
            'Executed hands-on fabrication including welding, metal cutting, and mechanical assembly of structural components.'

        ],
        tools: ['SolidWorks', 'MATLAB', 'FEA', 'Welding', 'Metal Fabrication', 'Root Cause Analysis', 'Test & Validation'],
        results: 'Delivered a field-ready, modular launch rail system with ~30 min setup time with safe automated deployment for repeatable launches. Design employed at Spaceport America Cup 2024/2025 to launch a 30k ft hybrid/liquid engine rocket.',
        details: 'Includes fabrication process, structural analysis, winch system design, and launch validation testing with real flight conditions.',
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
