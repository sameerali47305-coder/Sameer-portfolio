import './Service.css'

const services = [
  {
    title: 'Web Development',
    desc: 'Responsive, fast, full-stack web apps built with React, Node.js, and MongoDB — from landing pages to complete platforms.',
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps with React Native and Expo, focused on smooth UI and real device performance.',
  },
  {
    title: 'Applied ML & AI Integration',
    desc: 'Baking machine learning, deep learning, and generative AI features — chatbots, predictions, recommendations — into real products.',
  },
  {
    title: 'API & Backend Development',
    desc: 'Clean REST APIs with Node.js, Express, and Python/Flask, wired up to databases and ready to scale.',
  },
]

const process = [
  { step: '01', title: 'Understand', desc: 'Get clear on the problem, the users, and what "done" looks like.' },
  { step: '02', title: 'Design', desc: 'Sketch the flow and structure before writing a single line of code.' },
  { step: '03', title: 'Build', desc: 'Ship in small, working pieces — frontend, backend, and everything in between.' },
  { step: '04', title: 'Refine', desc: 'Test, fix, polish, and hand over something that actually works.' },
]

export default function Service() {
  return (
    <section className="service">
      <div className="container">
        <p className="service__badge">What I Do</p>
        <h1 className="service__title">Services I can help you with</h1>
        <p className="service__desc">
          A mix of full-stack development and applied machine learning — I like building things
          that are equal parts functional and well put together.
        </p>

        <div className="service__grid">
          {services.map((s) => (
            <div key={s.title} className="service__card">
              <h3 className="service__card-title">{s.title}</h3>
              <p className="service__card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="service__subheading">How I work</h2>
        <div className="service__process">
          {process.map((p) => (
            <div key={p.step} className="service__process-item">
              <span className="service__process-step">{p.step}</span>
              <h3 className="service__process-title">{p.title}</h3>
              <p className="service__process-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}