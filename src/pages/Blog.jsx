import './Blog.css'

const posts = [
  {
    date: 'Coming soon',
    title: 'From MERN to Machine Learning: Notes on My FYP',
    excerpt: 'What it\'s been like building an AI-powered ops copilot for SMEs — the good, the broken builds, and the lessons in between.',
  },
  {
    date: 'Coming soon',
    title: 'Making Sense of Formal Methods',
    excerpt: 'Z notation, CTL/LTL, Petri nets — a rundown of the formal side of software engineering, explained the way I wish someone had explained it to me.',
  },
  {
    date: 'Coming soon',
    title: 'Adding an AI Chatbot to a React Native App',
    excerpt: 'How Botatouille came together inside Tasty, and what I learned about wiring conversational AI into a mobile app.',
  },
]

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <p className="blog__badge">Writing</p>
        <h1 className="blog__title">Thoughts, notes, and things I'm learning</h1>
        <p className="blog__desc">
          I'm just getting this section started — here's what's on deck. Check back soon for full posts.
        </p>

        <div className="blog__list">
          {posts.map((post) => (
            <article key={post.title} className="blog__card">
              <span className="blog__card-date">{post.date}</span>
              <h3 className="blog__card-title">{post.title}</h3>
              <p className="blog__card-excerpt">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}