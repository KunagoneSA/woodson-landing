import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || ''

export function CtaContact() {
  const { t } = useLanguage()
  const s = useScrollReveal()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      if (GOOGLE_SHEETS_URL) {
        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST', mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ timestamp: new Date().toISOString(), name, company, email, phone, message }),
        })
      }
      setSubmitted(true)
    } catch { setError('Something went wrong.') }
    finally { setSubmitting(false) }
  }

  const inp = "w-full px-5 py-4 bg-transparent border-b border-text-dark/15 text-text-dark text-sm font-body font-400 focus:outline-none focus:border-accent transition-all placeholder-text-light/50"

  return (
    <section id="contact" className="py-16 sm:py-20 bg-surface">
      <div ref={s.ref} className={`max-w-5xl mx-auto px-8 lg:px-12 reveal ${s.visible ? 'visible' : ''}`}>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20">
          {/* Left — big statement */}
          <div>
            <span className="text-[11px] font-heading font-500 uppercase tracking-[0.3em] text-accent">Kontakt</span>
            <h2 className="mt-6 text-[2rem] sm:text-[2.4rem] font-heading font-800 text-text-dark leading-[1.1] tracking-tight">
              {t.cta.title}
            </h2>
            <p className="mt-6 text-base text-text-mid font-body font-300 leading-[2]">{t.cta.text}</p>
            <div className="mt-10 space-y-3 text-sm text-text-light font-body font-300">
              <p>hello@woodson.pl</p>
              <p>+48 882-905-145</p>
              <p>Chełmek, Polska</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="text-center py-20">
                <CheckCircle size={48} className="text-accent mx-auto mb-6" />
                <p className="text-xl font-heading font-700 text-text-dark">{t.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.form.name} className={inp} />
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder={t.form.company} className={inp} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.form.email} className={inp} />
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t.form.phone} className={inp} />
                </div>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
                  placeholder={t.form.message} className={`${inp} resize-none`} />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button type="submit" disabled={submitting}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-heading font-600 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
                  {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
