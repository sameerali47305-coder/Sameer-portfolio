import { useState } from "react";
import "./Contact.css";
import api from "../api/axios";

const contactInfo = [
  {
    label: "Email",
    value: "sameerali47305@gmail.com",
    href: "mailto:sameerali47305@gmail.com",
  },
  {
    label: "GitHub",
    value: "sameerali47305-coder",
    href: "https://github.com/sameerali47305-coder",
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await api.post("/contact", form);

      setSuccess(res.data.message);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <p className="contact__badge">Get In Touch</p>

          <h1 className="contact__title">Let's work together</h1>

          <p className="contact__desc">
            Got a project, an idea, or just want to say hi? Send a message and
            I'll get back to you.
          </p>

          <div className="contact__info">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact__info-item">
                <span className="contact__info-label">{item.label}</span>

                {item.href ? (
                  <a
                    href={item.href}
                    className="contact__info-value"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact__info-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__label" htmlFor="name">
            Name
          </label>

          <input
            className="contact__input"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label className="contact__label" htmlFor="email">
            Email
          </label>

          <input
            className="contact__input"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label className="contact__label" htmlFor="subject">
            Subject
          </label>

          <input
            className="contact__input"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <label className="contact__label" htmlFor="message">
            Message
          </label>

          <textarea
            className="contact__textarea"
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me a bit about what you need..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p
              className="contact__success"
              style={{ marginTop: "15px", color: "green" }}
            >
              {success}
            </p>
          )}

          {error && (
            <p
              style={{
                marginTop: "15px",
                color: "red",
              }}
            >
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}