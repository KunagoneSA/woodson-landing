import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const STORAGE_KEY = 'woodson-cookie-consent'

type ConsentDecision = 'granted' | 'denied'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function applyConsent(decision: ConsentDecision) {
  const gtag = window.gtag
  if (typeof gtag !== 'function') return
  gtag('consent', 'update', {
    ad_storage: decision,
    ad_user_data: decision,
    ad_personalization: decision,
    analytics_storage: decision,
  })
}

export function CookieBanner() {
  const { t, lang } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (!saved) {
        setVisible(true)
        return
      }
      applyConsent(saved === 'granted' ? 'granted' : 'denied')
    } catch {
      setVisible(true)
    }
  }, [])

  const decide = (decision: ConsentDecision) => {
    try { window.localStorage.setItem(STORAGE_KEY, decision) } catch { /* ignore */ }
    applyConsent(decision)
    setVisible(false)
  }

  if (!visible) return null

  const privacyHref =
    lang === 'de' ? '/datenschutzerklaerung.html'
    : lang === 'en' ? '/privacy-policy.html'
    : '/polityka-prywatnosci.html'

  return (
    <div
      role="dialog"
      aria-label={t.cookies.title}
      className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md"
    >
      <div className="bg-darker text-white border border-white/15 shadow-2xl rounded-sm p-6 sm:p-7 font-body">
        <h3 className="text-sm font-heading font-600 tracking-[0.1em] uppercase mb-3 text-surface">
          {t.cookies.title}
        </h3>
        <p className="text-[13px] leading-[1.7] text-white/80 font-300 mb-5">
          {t.cookies.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => decide('granted')}
            className="flex-1 px-5 py-3 bg-white text-darker text-[11px] font-heading font-600 tracking-[0.15em] uppercase hover:bg-surface transition-colors"
          >
            {t.cookies.acceptAll}
          </button>
          <button
            type="button"
            onClick={() => decide('denied')}
            className="flex-1 px-5 py-3 border border-white/40 text-white text-[11px] font-heading font-600 tracking-[0.15em] uppercase hover:border-white hover:bg-white/5 transition-colors"
          >
            {t.cookies.rejectAll}
          </button>
        </div>
        <a
          href={privacyHref}
          className="block mt-4 text-[11px] text-white/60 hover:text-white underline underline-offset-4 transition-colors"
        >
          {t.cookies.learnMore} — {t.footer.privacyLink}
        </a>
      </div>
    </div>
  )
}
