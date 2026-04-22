import React, { useState } from 'react';

/**
 * WaitlistForm Component
 * 
 * Pre-configured for ConvertKit or a custom backend via environment variables.
 * Handles loading, success, and error states with premium styling.
 */
export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const apiUrl = import.meta.env.VITE_CONVERTKIT_API_URL;
      
      if (apiUrl && apiUrl !== 'https://api.convertkit.com/v3/forms/[FORM_ID]/subscribe') {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email_address: email,
            api_key: import.meta.env.VITE_CONVERTKIT_PUBLIC_KEY 
          }),
        });
        
        if (response.ok) {
          setStatus('success');
          setMessage('You’ve been added to the waitlist. We’ll notify you of new releases!');
        } else {
          throw new Error('Subscription failed');
        }
      } else {
        // Mock success for development
        setTimeout(() => {
          setStatus('success');
          setMessage('Welcome! You’ll be the first to know about new guides.');
        }, 1500);
      }
    } catch (err) {
      console.error('Waitlist error:', err);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="animate-fade-in text-center p-10 glass rounded-3xl border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-extrabold text-white mb-4">You’re on the list!</h3>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-sm mx-auto">{message}</p>
        <button 
          onClick={() => { setStatus('idle'); setEmail(''); }}
          className="text-amber-400 font-bold hover:text-amber-300 transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          Add another email <span aria-hidden="true">→</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto group">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 p-2 rounded-[2rem] bg-white/5 border border-white/10 focus-within:border-amber-400/30 transition-all duration-300">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className="flex-1 px-6 py-4 rounded-2xl bg-transparent border-none outline-none text-white text-lg placeholder:text-slate-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn btn-primary px-10 py-4 h-full rounded-2xl font-bold text-lg whitespace-nowrap disabled:opacity-50 shadow-xl shadow-amber-400/10 active:scale-95"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-3">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Joining...
            </span>
          ) : 'Join Waitlist'}
        </button>
      </form>
      
      {status === 'error' && (
        <p className="mt-4 text-sm text-red-400 animate-fade-in bg-red-400/10 py-2 px-4 rounded-lg inline-block">{message}</p>
      )}
      
      <p className="mt-6 text-xs text-slate-500 text-center tracking-normal">
        🔒 We respect your privacy. No spam, just guide updates.
      </p>
    </div>
  );
}

