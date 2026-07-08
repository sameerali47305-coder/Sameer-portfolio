import './Project.css'

const projects = [
  {
    title: 'AI-Powered Operations & Decision Copilot',
    tag: 'Final Year Project',
    desc: 'A MERN + React Native + Python/Flask platform that gives Pakistani SMEs an AI copilot for daily operations — with XGBoost lead scoring and RFV-based churn detection built in.',
    stack: ['MERN', 'React Native', 'Flask', 'XGBoost'],
  },
  {
    title: 'Tasty — Recipe App with Botatouille AI',
    tag: 'AWP Group Project',
    desc: 'A React Native / Expo recipe app with Botatouille, a built-in AI chatbot that helps users find and cook recipes conversationally.',
    stack: ['React Native', 'Expo', 'AI Chatbot'],
  },
  {
    title: 'ML/DL/GenAI Portal',
    tag: 'Applied Machine Learning',
    desc: 'A Flask-based portal built with groupmates that brings together classic ML, deep learning, generative AI, and Apriori-based rule mining in one dashboard.',
    stack: ['Flask', 'ML', 'Deep Learning', 'GenAI'],
  },
  {
    title: 'This Portfolio',
    tag: 'Personal Project',
    desc: 'The site you\'re looking at right now — built with React and Vite, and auto-deployed to Vercel on every push to GitHub.',
    stack: ['React', 'Vite', 'Vercel'],
  },
]

export default function Project() {
  return (
    <section className="project">
      <div className="container">
        <p className="project__badge">My Work</p>
        <h1 className="project__title">Projects I've built</h1>
        <p className="project__desc">
          A few things I've worked on — solo and with my groupmates — spanning full-stack apps,
          mobile development, and applied machine learning.
        </p>

        <div className="project__grid">
          {projects.map((p) => (
            <div key={p.title} className="project__card">
              <span className="project__card-tag">{p.tag}</span>
              <h3 className="project__card-title">{p.title}</h3>
              <p className="project__card-desc">{p.desc}</p>
              <div className="project__card-stack">
                {p.stack.map((s) => (
                  <span key={s} className="project__card-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}