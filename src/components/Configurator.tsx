import { useState, type FormEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Package, Ruler, Hash, Send, CheckCircle, Loader2 } from 'lucide-react'

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || ''

export function Configurator() {
  const { t } = useLanguage()
  const [productType, setProductType] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [depth, setDepth] = useState('')
  const [quantity, setQuantity] = useState('10')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const formData = {
      timestamp: new Date().toISOString(),
      productType,
      width,
      height,
      depth,
      quantity,
      name,
      email,
      company,
      message,
    }

    try {
      if (GOOGLE_SHEETS_URL) {
        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      }
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="configurator" className="py-20 sm:py-28 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle size={64} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-text mb-4">
            {t.configurator.success}
          </h2>
        </div>
      </section>
    )
  }

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            {t.configurator.title}
          </h2>
          <p className="text-lg text-text-light">
            {t.configurator.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10"
        >
          {/* Step 1: Product Type */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Package size={20} className="text-primary" />
              <h3 className="font-semibold text-text">
                {t.configurator.step1}
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.configurator.types.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProductType(type)}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                    productType === type
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-text border-gray-200 hover:border-primary/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Dimensions */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Ruler size={20} className="text-primary" />
              <h3 className="font-semibold text-text">
                {t.configurator.step2}
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: t.configurator.width, value: width, set: setWidth },
                {
                  label: t.configurator.height,
                  value: height,
                  set: setHeight,
                },
                { label: t.configurator.depth, value: depth, set: setDepth },
              ].map((dim) => (
                <div key={dim.label}>
                  <label className="block text-xs text-text-light mb-1">
                    {dim.label}
                  </label>
                  <input
                    type="number"
                    value={dim.value}
                    onChange={(e) => dim.set(e.target.value)}
                    placeholder="cm"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Quantity */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Hash size={20} className="text-primary" />
              <h3 className="font-semibold text-text">
                {t.configurator.step3}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="500"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="flex-1 accent-primary"
              />
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-20 px-3 py-2 border border-gray-200 rounded-xl text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <span className="text-sm text-text-light">
                  {t.configurator.quantity}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 my-8" />

          {/* Contact form */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs text-text-light mb-1">
                {t.configurator.name}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs text-text-light mb-1">
                {t.configurator.email}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs text-text-light mb-1">
              {t.configurator.company}
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="mb-8">
            <label className="block text-xs text-text-light mb-1">
              {t.configurator.message}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            />
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-light">{t.configurator.note}</p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-lg transition-colors shadow-lg shadow-accent/25"
            >
              {submitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              {t.configurator.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
