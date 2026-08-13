const projects = [
  {
    title: 'Delivery Drone',
    category: 'Autonomous Systems',
    description:
      'Engineered a custom quadrotor from scratch including precision soldering of ESCs, flight controllers, and motors. Performed PID tuning in Betaflight for stable manual flight. Currently integrating Mission Planner for autonomous waypoint navigation.',
    stack: ['Betaflight', 'PID Tuning', 'Fusion 360', 'Soldering', 'ArduPilot'],
  },
  {
    title: 'Bluetooth RC Car → Custom PCB',
    category: 'PCB Design',
    description:
      'Prototyped a Bluetooth-controlled RC car on breadboard then designed a custom 2-layer PCB in KiCad, manufactured it, and hand-soldered all components.',
    stack: ['KiCad', 'Arduino', 'HC-05 Bluetooth', 'H-Bridge', 'PCB Fabrication'],
  },
  {
    title: 'Kegatron',
    category: 'Embedded Systems',
    description:
      'Scaled-up RC platform with ultrasonic sensor-triggered servo-actuated cooler lid. Upgraded to LiPo batteries and higher-torque motors for increased payload capacity.',
    stack: ['Arduino', 'Ultrasonic Sensor', 'Servo Control', 'LiPo', 'Motor Drivers'],
  },
  {
    title: 'Geni — Fall Detection System',
    category: 'Computer Vision',
    description:
      'Real-time fall detection system using YOLOv8 and OpenCV. Detects when someone loses consciousness via webcam and sends emergency SMS alerts via Twilio API.',
    stack: ['YOLOv8', 'OpenCV', 'Python', 'Twilio API', 'Computer Vision'],
  },
  {
    title: 'ESP32 Robot Arm',
    category: 'Robotics',
    description:
      'Developing a 5-DOF robot arm with ESP32 wireless control for real-time servo positioning. 3D-printing custom PLA frame with MG996R servo motors and PWM control.',
    stack: ['ESP32', 'PWM', 'Servo Control', 'Fusion 360', '3D Printing'],
  },
  {
    title: 'Miller Electric — PCB Redesign',
    category: 'Hardware Engineering',
    description:
      'Led redesign of welding machine output filter board after identifying thermal failure where resistors exceeded spec by 65°C. Validated 40% temperature reduction (245°C → 150°C) through thermal testing.',
    stack: ['KiCad', 'LTSpice', 'Bode 500', 'Thermal Analysis', 'PCB Design'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <p className="section-label">01 — Projects</p>
        <h2 className="section-heading">Selected Work</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/50"
            >
              {/* Image placeholder — swap in a real image later */}
              <div className="mb-4 h-48 rounded-lg bg-gray-800" />

              <p className="font-mono text-xs tracking-widest text-accent">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-white/10 px-2.5 py-1 font-mono text-xs text-white/50"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
