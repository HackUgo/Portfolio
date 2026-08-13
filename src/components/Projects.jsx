const projects = [
  {
    title: 'Delivery Drone',
    category: 'Autonomous Systems',
    description:
      'Engineered a custom quadrotor from scratch including precision soldering of ESCs, flight controllers, and motors. Performed PID tuning in Betaflight for stable manual flight. Currently integrating Mission Planner for autonomous waypoint navigation.',
    stack: ['Betaflight', 'PID Tuning', 'Fusion 360', 'Soldering', 'ArduPilot'],
    media: (
      <>
        <img
          src="/drone.png"
          alt="Delivery Drone"
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/BRaJ7V4BOfg"
          frameBorder="0"
          allowFullScreen
          className="rounded-lg mb-4"
        ></iframe>
      </>
    ),
  },
  {
    title: 'Bluetooth RC Car → Custom PCB',
    category: 'PCB Design',
    description:
      'Prototyped a Bluetooth-controlled RC car on breadboard then designed a custom 2-layer PCB in KiCad, manufactured it, and hand-soldered all components.',
    stack: ['KiCad', 'Arduino', 'HC-05 Bluetooth', 'H-Bridge', 'PCB Fabrication'],
    media: (
      <div className="flex gap-2 mb-4">
        <img
          src="/rc-car-breadboard.png"
          alt="RC Car Breadboard"
          className="w-1/2 h-48 object-cover rounded-lg"
        />
        <img
          src="/rc-car-pcb.png"
          alt="RC Car PCB"
          className="w-1/2 h-48 object-cover rounded-lg"
        />
      </div>
    ),
  },
  {
    title: 'Kegatron',
    category: 'Embedded Systems',
    description:
      'Scaled-up RC platform with ultrasonic sensor-triggered servo-actuated cooler lid. Upgraded to LiPo batteries and higher-torque motors for increased payload capacity.',
    stack: ['Arduino', 'Ultrasonic Sensor', 'Servo Control', 'LiPo', 'Motor Drivers'],
    media: (
      <>
        <img
          src="/kegatron.png"
          alt="Kegatron"
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/4c65t6rE844"
          frameBorder="0"
          allowFullScreen
          className="rounded-lg mb-4"
        ></iframe>
      </>
    ),
  },
  {
    title: 'Geni — Fall Detection System',
    category: 'Computer Vision',
    description:
      'Real-time fall detection system using YOLOv8 and OpenCV. Detects when someone loses consciousness via webcam and sends emergency SMS alerts via Twilio API.',
    stack: ['YOLOv8', 'OpenCV', 'Python', 'Twilio API', 'Computer Vision'],
    media: (
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/hAxHbIGIBOU"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg mb-4"
      ></iframe>
    ),
  },
  {
    title: 'ESP32 Robot Arm',
    category: 'Robotics',
    description:
      'Developing a 5-DOF robot arm with ESP32 wireless control for real-time servo positioning. 3D-printing custom PLA frame with MG996R servo motors and PWM control.',
    stack: ['ESP32', 'PWM', 'Servo Control', 'Fusion 360', '3D Printing'],
    media: <div className="mb-4 h-48 rounded-lg bg-gray-800" />,
  },
  {
    title: 'Miller Electric — PCB Redesign',
    category: 'Hardware Engineering',
    description:
      'Led redesign of welding machine output filter board after identifying thermal failure where resistors exceeded spec by 65°C. Validated 40% temperature reduction (245°C → 150°C) through thermal testing.',
    stack: ['KiCad', 'LTSpice', 'Bode 500', 'Thermal Analysis', 'PCB Design'],
    media: (
      <img
        src="/miller.png"
        alt="Miller Electric PCB"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    ),
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
              {/* Project media — image(s) and/or embedded video */}
              {project.media}

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
