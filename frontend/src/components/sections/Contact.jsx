import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("All fields are required.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
    setSuccessMessage("Message sent successfully! We will get back to you soon.");
  };

  return (
    <section className="bg-[#0b0b0b] py-24 px-8" data-purpose="contact-section" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-gymGold font-bold uppercase text-sm tracking-widest mb-4 block">GET IN TOUCH</span>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight text-white mb-6 uppercase">
            READY TO FORGE YOUR
            <br />
            LEGACY?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Drop us a message to ask about memberships, personal training, or facilities. Our team will get back to you within 24 hours.
          </p>
          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-gymGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="text-white text-lg">info@fitnesscenter.com</span>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-gymGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span className="text-white text-lg">+1 (111) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6 text-gymGold" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span className="text-white text-lg">123 Iron Street, Fitness City</span>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-[#111111] p-8 shadow-2xl" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="contact-name">
                Full Name
              </label>
              <input
                className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-white outline-none focus:border-gymGold"
                id="contact-name"
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
                type="text"
                value={name}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="contact-email">
                Email Address
              </label>
              <input
                className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-white outline-none focus:border-gymGold"
                id="contact-email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                type="email"
                value={email}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-white outline-none focus:border-gymGold"
                id="contact-message"
                onChange={(event) => setMessage(event.target.value)}
                placeholder="How can we help?"
                rows={5}
                value={message}
              />
            </div>
          </div>

          {errorMessage ? <p className="mt-4 text-sm text-red-400">{errorMessage}</p> : null}
          {successMessage ? <p className="mt-4 text-sm text-emerald-400">{successMessage}</p> : null}

          <button
            className="mt-6 w-full rounded-full bg-gymGold px-8 py-4 text-sm font-extrabold tracking-wider text-black transition hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </section>
  );
}