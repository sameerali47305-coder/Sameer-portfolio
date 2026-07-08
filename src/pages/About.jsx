import './About.css'

const skills = [
  'React', 'React Native', 'JavaScript', 'Node.js',
  'Java', 'Python', 'MongoDB', 'Git & GitHub',
]

const education = [
  {
    year: '2023 — Present',
    title: 'BS Software Engineering',
    place: 'University of Central Punjab (UCP), Lahore',
    desc: 'Coursework in Web Programming, Software Construction & Design, Computer Networks, Applied Machine Learning, and Formal Methods.',
  },
]

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <p className="about__badge">About Me</p>
        <h1 className="about__title">A little more about who I am</h1>
        <p className="about__bio">
          A developer who builds and creates full-stack web and mobile applications. I enjoy taking an idea from a rough sketch to something people can actually click through and use. I'm always picking up new tools along the way, from React and Node.js to applied machine learning.
        </p>

        <h2 className="about__subheading">Skills</h2>
        <div className="about__skills">
          {skills.map((skill) => (
            <span key={skill} className="about__skill-pill">{skill}</span>
          ))}
        </div>

        <h2 className="about__subheading">Education</h2>
        <div className="about__timeline">
          {education.map((item) => (
            <div key={item.title} className="about__timeline-item">
              <p className="about__timeline-year">{item.year}</p>
              <h3 className="about__timeline-title">{item.title}</h3>
              <p className="about__timeline-place">{item.place}</p>
              <p className="about__timeline-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}