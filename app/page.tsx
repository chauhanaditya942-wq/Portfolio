"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.11 } },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const projects = [
    {
      title: "CoreLane Interiors",
      desc: "Full website for a premium interior design firm. Managing their Meta & Google ad campaigns and social media presence to drive leads and brand awareness.",
      tags: ["Web Development", "Meta Ads", "Google Ads", "Social Media"],
      link: "https://corelaneinteriors.com",
      status: "live" as const,
      icon: "Building2",
    },
    {
      title: "HackMatch App",
      desc: "A platform to connect developers for hackathons — find teammates by skill, match with collaborators, and build together. Full stack with real-time features.",
      tags: ["React", "Node.js", "Express.js", "Supabase", "Vercel"],
      link: "https://hackmatch-omega.vercel.app/",
      status: "ongoing" as const,
      icon: "Code2",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4f0] dark:bg-[#080c0f] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">

      {/* Grid background */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#f5f4f0]/80 dark:bg-[#080c0f]/80 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
          <span className="font-black text-lg tracking-tighter">
            AC<span className="text-blue-500">.</span>
          </span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              {["About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
<button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="p-2 rounded-full bg-black/5 dark:bg-white/5 hover:ring-2 ring-blue-400 transition-all z-50 relative cursor-pointer"
  suppressHydrationWarning
>
  {mounted && (theme === "dark"
    ? <Icons.Sun size={16} className="text-yellow-400" />
    : <Icons.Moon size={16} className="text-slate-500" />
  )}
</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 pt-12 pb-0">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-end"
          initial="initial" animate="animate" variants={stagger}
        >
          {/* Left */}
          <div className="pb-16">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Work
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-[60px] font-black tracking-[-2px] leading-[0.9] mb-6 uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Aditya<br />
              <span className="text-black/20 dark:text-white/15">Chauhan</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                Full Stack Dev
              </span>
              <span className="text-slate-300 dark:text-slate-700 text-lg">+</span>
              <span className="px-3 py-1 border border-black/20 dark:border-white/20 text-[10px] font-black uppercase tracking-widest rounded-full">
                Digital Marketing
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-slate-500 dark:text-slate-400 leading-[1.9] mb-8 max-w-sm"
            >
              I build scalable web apps and run Meta & Google ad campaigns that actually convert. Based in India, working globally.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="mailto:chauhanaditya942@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-black uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                Hire Me <Icons.ArrowRight size={13} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 border border-black/15 dark:border-white/15 rounded-xl text-xs font-black uppercase tracking-wider hover:border-black dark:hover:border-white transition-colors"
              >
                Contact
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex gap-3 mt-8">
              <a
                href="https://github.com/chauhanaditya942-wq"
                target="_blank"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-bold"
              >
                <Icons.GitBranch size={15} /> GitHub
              </a>
              <span className="text-slate-200 dark:text-slate-800">|</span>
              <a
                href="tel:+917827872625"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-bold"
              >
                <Icons.Phone size={15} /> +91 78278 72625
              </a>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div variants={fadeUp} className="flex justify-end items-end">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[160px_160px_0_0] overflow-hidden self-end">
              <Image
                src="/photo.jpg"
                alt="Aditya Chauhan"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="bg-slate-900 dark:bg-black border-y border-slate-800 py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {["React.js", "Node.js", "Express.js", "Supabase", "Next.js", "VS Code", "Meta Ads", "Google Ads", "MongoDB", "Vercel"].map((t) => (
                <span key={t} className="inline-flex items-center gap-4 px-8 text-[11px] font-black uppercase tracking-[3px] text-white/60">
                  {t} <span className="text-white/20">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[4px] text-slate-400 mb-3">// 01 — About</p>
              <h2
                className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Code is my<br />
                <span className="text-black/20 dark:text-white/15">superpower.</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-[2] mb-6">
                Namaste! I'm Aditya Chauhan, a Full Stack Developer & Digital Marketing specialist from India.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-[2] mb-8">
                I build end-to-end web applications and manage Meta & Google ad campaigns for businesses — helping brands grow both technically and digitally.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Express.js", "Supabase", "MongoDB", "Meta Ads", "Google Ads", "VS Code", "Git"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-[11px] font-black uppercase tracking-wider border border-black/15 dark:border-white/15 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { num: "01", title: "Full Stack Development", desc: "React frontends + Node.js/Express backends, wired to Supabase or MongoDB." },
                { num: "02", title: "Meta & Google Ads", desc: "Performance campaigns with targeting, A/B testing, and ROI-focused optimization." },
                { num: "03", title: "Social Media Management", desc: "Growing brand presence with strategic content, analytics, and paid promotion." },
              ].map((s) => (
                <div
                  key={s.num}
                  className="p-5 bg-white dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] rounded-2xl hover:shadow-lg dark:hover:border-white/20 transition-all"
                >
                  <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[3px] mb-2">{s.num}</p>
                  <p className="font-black text-[15px] mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{s.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white dark:bg-white/[0.01] border-y border-black/[0.06] dark:border-white/[0.06] py-24">
        <div className="max-w-6xl mx-auto px-8">
          <SectionReveal>
            <p className="text-[10px] font-black uppercase tracking-[4px] text-slate-400 mb-3">// 02 — Projects</p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tighter mb-12"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Featured Work
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => {
                const Icon = Icons[p.icon as keyof typeof Icons] as React.ElementType;
                return (
                  <div
                    key={p.title}
                    className={`p-7 bg-[#f5f4f0] dark:bg-white/[0.03] rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl group ${
                      p.status === "live"
                        ? "border-emerald-200 dark:border-emerald-900/50"
                        : "border-black/[0.06] dark:border-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center">
                        {Icon && <Icon size={20} className="text-white dark:text-slate-900" />}
                      </div>
                      {p.status === "live" ? (
                        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                          Live
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-600 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                          Ongoing
                        </span>
                      )}
                    </div>
                    <h3 className="font-black text-xl mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>{p.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-[1.85] mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] font-black uppercase tracking-wider rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider border-b border-black/30 dark:border-white/30 pb-0.5 hover:border-black dark:hover:border-white transition-colors"
                    >
                      {p.status === "live" ? "Visit Site" : "View Project"}
                      <Icons.ExternalLink size={11} />
                    </a>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-8 py-24">
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[4px] text-slate-400 mb-3">// 03 — Contact</p>
              <h2
                className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Let's{" "}
                <span className="text-black/20 dark:text-white/15">work</span>
                <br />together.
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-[2] mb-8">
                Open to freelance projects, full-time roles, or just a good conversation. Drop a message!
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "Mail", label: "Email", val: "chauhanaditya942@gmail.com", href: "mailto:chauhanaditya942@gmail.com" },
                  { icon: "Phone", label: "Phone", val: "+91 78278 72625", href: "tel:+917827872625" },
                  { icon: "GitBranch", label: "GitHub", val: "chauhanaditya942-wq", href: "https://github.com/chauhanaditya942-wq" },
                ].map((c) => {
                  const Icon = Icons[c.icon as keyof typeof Icons] as React.ElementType;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] rounded-xl hover:border-black dark:hover:border-white/30 transition-all group"
                    >
                      <div className="w-9 h-9 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                        {Icon && <Icon size={15} />}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">{c.label}</p>
                        <p className="text-sm font-bold">{c.val}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-1.5">Your Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white dark:bg-white/[0.03] border border-black/[0.10] dark:border-white/[0.10] rounded-xl text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-700"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-1.5">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white dark:bg-white/[0.03] border border-black/[0.10] dark:border-white/[0.10] rounded-xl text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors placeholder:text-slate-300 dark:placeholder:text-slate-700"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400 mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white dark:bg-white/[0.03] border border-black/[0.10] dark:border-white/[0.10] rounded-xl text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none placeholder:text-slate-300 dark:placeholder:text-slate-700"
                />
              </div>
              <button
                type="submit"
                disabled={formState === "loading"}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-black uppercase tracking-wider hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {formState === "loading" ? (
                  <><Icons.Loader2 size={14} className="animate-spin" /> Sending...</>
                ) : formState === "success" ? (
                  <><Icons.CheckCircle size={14} /> Message Sent!</>
                ) : (
                  <><Icons.Send size={14} /> Send Message</>
                )}
              </button>
              {formState === "error" && (
                <p className="text-xs text-red-500 font-bold">Something went wrong. Try emailing directly.</p>
              )}
            </form>
          </div>
        </SectionReveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/[0.06] dark:border-white/[0.06] py-6">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <span className="font-black text-sm tracking-tighter">AC<span className="text-blue-500">.</span></span>
          <p className="text-xs text-slate-400 font-bold">Designed & Built by Aditya Chauhan · 2025</p>
        </div>
      </footer>
    </main>
  );
}

function SectionReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}