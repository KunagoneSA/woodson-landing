import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const localeMap = { pl: 'pl_PL', en: 'en_US', de: 'de_DE' } as const

function setMeta(selector: string, attr: 'content', value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attr, value)
}

export function SEO() {
  const { lang, t } = useLanguage()

  useEffect(() => {
    document.title = t.meta.title
    setMeta('meta[name="description"]', 'content', t.meta.description)
    setMeta('meta[property="og:title"]', 'content', t.meta.ogTitle)
    setMeta('meta[property="og:description"]', 'content', t.meta.description)
    setMeta('meta[property="og:locale"]', 'content', localeMap[lang])
    setMeta('meta[name="twitter:title"]', 'content', t.meta.ogTitle)
    setMeta('meta[name="twitter:description"]', 'content', t.meta.description)
  }, [lang, t])

  return null
}
