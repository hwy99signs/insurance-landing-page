import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  ExternalLink, 
  ShieldCheck, 
  Menu,
  X,
  ArrowRight,
  Info
} from 'lucide-react';
import WaitlistForm from './components/WaitlistForm';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const books = [
    {
      title: "Homeowners Dwelling Claims",
      shortTitle: "Homeowners",
      desc: "A practical guide to understanding coverage basics, documentation, estimates, settlement issues, and the steps homeowners should take after property damage.",
      hook: "Avoid costly claim mistakes in the first 72 hours.",
      link: "https://www.amazon.com/dp/B0GL4X5LGR",
      status: "live",
      image: "/images/homeowners_book.jpg",
    },
    {
      title: "Renters Dwelling Claims",
      shortTitle: "Renters",
      desc: "Clear guidance for renters handling personal property damage, temporary living issues, claim documentation, communication, and common claim pitfalls.",
      hook: "Prepare, Document, and Get Paid What You Deserve",
      link: "https://www.amazon.com/dp/B0GR98BZQD",
      status: "live",
      image: "/images/renters_book.png",
    },
    {
      title: "Roof Damage Claims",
      shortTitle: "Roof",
      desc: "Focused help for storm damage, wear-and-tear disputes, inspections, depreciation, supplements, and roof-related coverage issues.",
      hook: "Learn what is storm damage and what is not.",
      link: "https://www.amazon.com/dp/B0GY8SBXGC/ref=tmm_pap_swatch_0",
      status: "live",
      image: "/images/roof_damage_claims.png",
    },
    {
      title: "Water Damage Claims",
      shortTitle: "Water",
      desc: "Detailed explanations of sudden and accidental water losses, mitigation, dry-out, mold concerns, exclusions, and scope review.",
      hook: "Understand mitigation, dry-out, and payment issues.",
      status: "coming",
      image: "/images/water_damage.png",
    },
    {
      title: "Additional Living Expenses",
      shortTitle: "ALE",
      desc: "Understand loss-of-use coverage, temporary housing, meal reimbursement, receipts, deadlines, and documentation requirements.",
      hook: "Know what housing and extra living costs may be covered.",
      status: "coming",
      image: "/images/recovery.png",
    },
    {
      title: "Contents & Personal Property",
      shortTitle: "Contents",
      desc: "How to inventory, value, document, and recover your personal belongings after a fire, water loss, theft, or other covered event.",
      hook: "Build a stronger inventory and avoid underpayment.",
      status: "coming",
      image: "/images/hero_bg.png",
    },
  ];

  const benefits = [
    "Plain-English explanations of claim terms",
    "Step-by-step guidance readers can follow",
    "Practical help on documentation and inspections",
    "Focused books for specific claim situations",
    "Useful for families and advocates",
    "Designed to reduce confusion and stress",
  ];

  return (
    <div className="landing-page bg-slate-950 min-h-screen text-slate-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 border-b border-white/10">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-amber-400" size={28} />
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight">The Insurance Claims Guide</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#books" className="hover:text-amber-400 transition">The Books</a>
            <a href="#about" className="hover:text-amber-400 transition">The Series</a>
            <a href="#author" className="hover:text-amber-400 transition">Author</a>
            <a href="#waitlist" className="btn btn-primary py-2 px-5 text-sm">Join Waitlist</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-200 p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Side Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Side Drawer Content */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-slate-900 z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-8 border-l border-white/5`}>
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400 hover:text-white">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-6 text-lg font-medium">
          <a href="#books" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition">The Books</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition">The Series</a>
          <a href="#author" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-400 transition">Author</a>
          <div className="pt-6 border-t border-white/5">
            <a href="#waitlist" onClick={() => setIsMenuOpen(false)} className="btn btn-primary w-full">Join Waitlist</a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="hero relative overflow-hidden flex items-center min-h-[90vh] py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_bg.png" 
            alt="Storm background" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
        </div>
        
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <div className="glass-pill inline-block mb-6">
              Practical guides for homeowners & policyholders
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 font-extrabold tracking-tight leading-tight">
              Most Homeowners Get <br className="hidden sm:block"/>
              <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-8">Underpaid on Insurance Claims.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Learn how to document damage, understand your policy, and avoid costly mistakes that lead to denied, delayed, or underpaid claims.
            </p>
            <p className="text-amber-400/90 font-medium mb-10 text-sm sm:text-base italic">
              Written by an experienced insurance adjuster to help policyholders understand how claims really work.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <a href="#books" className="btn btn-primary px-8 py-4 text-center">
                View the Books on Amazon
              </a>
              <a href="#waitlist" className="btn btn-secondary px-8 py-4 text-center">
                Get Claim Tips & Updates
              </a>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              One mistake in a claim can cost thousands. This guide helps you avoid it.
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span>Plain English terms</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span>Step-by-step help</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-amber-400 shrink-0" />
                <span>Stress reduction</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-400/20 blur-3xl opacity-30 rounded-full animate-pulse" />
              <img 
                src="/images/homeowners_book.jpg" 
                alt="Main Book Cover" 
                className="relative rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500 max-w-[440px] mx-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Author Credibility */}
      <section id="author" className="section relative">
        <div className="container">
          <div className="grid lg:grid-cols-[450px_1fr] gap-12 lg:gap-20 items-center">
            <div className="relative group mx-auto w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <img 
                src="/images/author.png" 
                alt="The Insurance Claims Guide Team" 
                className="relative rounded-3xl w-full aspect-square object-cover shadow-2xl" 
              />
            </div>
            <div className="text-center lg:text-left">
              <div className="text-amber-400 font-bold tracking-[0.2em] text-sm uppercase mb-4">Expert Insight</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">About the Author</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Written by an experienced insurance adjuster with years of hands-on claims experience, <strong>The Insurance Claims Guide</strong> was created to help homeowners and renters understand what really happens during the claims process—and how to protect themselves financially.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto lg:mx-0">
                {[
                  "Decades of collective experience",
                  "Expertise in residential & commercial claims",
                  "Focused on policyholder advocacy",
                  "Deep understanding of insurance law"
                ].map(point => (
                  <div key={point} className="flex gap-3 items-start text-left">
                    <CheckCircle2 className="text-amber-500 mt-1 shrink-0" size={20} />
                    <span className="text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 glass rounded-2xl border-l-4 border-l-amber-400 text-left">
                <p className="text-slate-300 italic text-lg leading-relaxed">
                  "My mission is to empower homeowners and renters with the same knowledge the industry experts have, making the claims process fair and transparent for everyone."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Books Matter */}
      <section id="about" className="section relative overflow-hidden bg-slate-900/30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-400/5 blur-[120px] -z-10" />
        <div className="container">
          <div className="max-w-3xl mb-16 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">The First 72 Hours of a Claim Can Determine Your Entire Outcome.</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Insurance language, documentation requirements, and deadlines can overwhelm people fast. This series is built to bring clarity when you need it most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Info size={28}/>, title: "Immediate Clarity", desc: "Know exactly what to document from day one so your claim is taken seriously." },
              { icon: <HelpCircle size={28}/>, title: "Avoid Pitfalls", desc: "Understand what’s covered vs. what gets denied before you make costly mistakes." },
              { icon: <Clock size={28}/>, title: "Clear Communication", desc: "Learn how to speak with adjusters and contractors so nothing gets overlooked." }
            ].map((feature, i) => (
              <div key={i} className="glass p-10 rounded-3xl hover:bg-slate-900/80 transition-all duration-300 group hover:-translate-y-2 border border-white/5">
                <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center mb-8 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300 shadow-xl shadow-amber-400/5">
                  {feature.icon}
                </div>
                <h3 className="text-2xl mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Collection */}
      <section id="books" className="section bg-slate-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-amber-400 font-bold tracking-[0.25em] text-sm uppercase mb-4">The series library</div>
            <h2 className="text-4xl sm:text-5xl mb-6 tracking-tight font-extrabold text-white">Guides & Upcoming Releases</h2>
            <p className="text-slate-400 text-lg sm:text-xl">Choose the guide that matches your situation and start protecting your claim today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map((book, idx) => (
              <div key={idx} className="glass rounded-[2.5rem] overflow-hidden flex flex-col group hover:ring-2 hover:ring-amber-400/30 transition-all duration-500">
                <div className="relative h-80 overflow-hidden bg-slate-900 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  {book.image ? (
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      className="h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 transition duration-700" 
                    />
                  ) : (
                    <div className="text-slate-500 text-center text-sm font-medium">Cover Coming Soon</div>
                  )}
                  <div className="absolute top-6 right-6 z-20">
                    <span className={`badge ${book.status === 'live' ? 'badge-live' : 'badge-soon'}`}>
                      {book.status === 'live' ? 'Available' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col bg-slate-900/40">
                  <h3 className="text-2xl mb-3 text-white font-bold leading-tight">{book.title}</h3>
                  <p className="text-amber-400 font-semibold mb-4 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {book.hook}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {book.desc}
                  </p>
                  {book.status === 'coming' && (
                    <p className="text-amber-400/80 text-[13px] font-medium mb-6 italic">
                      Join the waitlist to get early access and launch discounts.
                    </p>
                  )}
                  
                  <div className="mt-auto pt-6 border-t border-white/5">
                    {book.status === 'live' ? (
                      <a 
                        href={book.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-primary w-full gap-2 shadow-lg shadow-amber-400/10"
                      >
                        Buy on Amazon <ExternalLink size={18} />
                      </a>
                    ) : (
                      <a 
                        href="#waitlist" 
                        className="btn btn-secondary w-full gap-2"
                      >
                        Join the Waitlist <Clock size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Cover / Spotlight */}
      <section className="section bg-slate-900 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-amber-400/5 blur-[150px] rounded-full" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="text-amber-400 font-bold tracking-[0.2em] text-sm uppercase mb-4">Series Spotlight</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 font-extrabold leading-tight">Educational, reader-friendly claim resources</h2>
              <ul className="space-y-6 text-left inline-block lg:block">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 border border-emerald-500/20 shadow-sm shadow-emerald-500/10">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-300 text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative max-w-xl mx-auto w-full">
              <div className="absolute -inset-10 bg-amber-400/10 blur-[100px] rounded-full" />
              <div className="glass p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
                <img 
                   src="/images/recovery.png" 
                   alt="Recovery theme" 
                   className="rounded-2xl w-full mb-8 shadow-inner grayscale opacity-40 group-hover:opacity-60 transition duration-700"
                />
                <div className="text-center relative z-20">
                  <h3 className="text-2xl sm:text-3xl mb-4 font-bold text-white">These aren’t just books.</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                    Each guide includes real-world worksheets, documentation checklists, and communication templates used by professionals to keep claims on track and prevent underpayment.
                  </p>
                  <a href="#books" className="text-amber-400 font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all text-lg group">
                    See what's inside <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 p-8 sm:p-16 lg:p-24 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] -z-10" />
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-amber-400 font-bold tracking-[0.25em] text-sm uppercase mb-6">Stay Informed</div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-extrabold tracking-tight">Get Claim Tips Before You Need Them</h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed">
                Be the first to access new guides, claim strategies, and updates that can help you avoid costly mistakes.
              </p>
              
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Future Services Placeholder */}
      <section id="services" className="section mb-20">
        <div className="container">
          <div className="glass p-8 sm:p-16 rounded-[2.5rem] border border-white/5 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-amber-400/[0.02] -z-10" />
            <h2 className="text-3xl sm:text-4xl mb-6 font-bold text-white">Need help with a current claim?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
              We are preparing to offer personalized claim guidance and consulting services. Join the waitlist to be notified when this becomes available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="badge badge-soon p-4 px-8 rounded-2xl italic text-sm border border-amber-400/20 bg-amber-400/5">
                Claims Consulting Section - Coming Later
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-slate-950">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="text-amber-400" size={32} />
                <span className="font-heading font-bold text-xl tracking-tight">The Insurance <br/> Claims Guide</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Empowering policyholders with professional knowledge, practical guidance, and the confidence to navigate property damage claims.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-slate-200 uppercase tracking-widest text-xs">The Collection</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                {books.slice(0, 4).map(b => (
                  <li key={b.shortTitle} className="hover:text-amber-400 transition cursor-pointer flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-amber-400"></span>
                    {b.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-slate-200 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="hover:text-amber-400 transition cursor-pointer">Privacy Policy</li>
                <li className="hover:text-amber-400 transition cursor-pointer">Terms of Service</li>
                <li className="hover:text-amber-400 transition cursor-pointer">Disclaimer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-slate-200 uppercase tracking-widest text-xs">Mission</h4>
              <p className="text-[11px] text-slate-600 uppercase tracking-[0.15em] leading-loose">
                Educational Resources only. No legal or claims advice provided. All information is for general use.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:text-amber-400 transition cursor-pointer border border-white/5">
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600">
            <p>© 2026 The Insurance Claims Guide. All rights reserved.</p>
            <div className="flex gap-8 items-center">
              <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-amber-400/50"/> Built by Digital Experts</span>
              <span className="opacity-50">Amazon Associate Member</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

