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
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight text-white mb-6">
            LET&apos;S <span className="text-gymGold">CONNECT</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Have questions about memberships, coaching, or your fitness roadmap? Send us a message and our team
            will get back to you quickly.
          </p>
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
                placeholder="Your name"
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
                placeholder="Tell us what you need"
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