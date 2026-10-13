import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCircleCheck, FaCircleExclamation, FaPaperPlane } from 'react-icons/fa6'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { sendContactEmail } from '../services/email.js'

const emptyForm = { name: '', email: '', message: '', website: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'nameRequired'
  else if (name.length < 2) errors.name = 'nameShort'

  if (!email) errors.email = 'emailRequired'
  else if (!emailPattern.test(email)) errors.email = 'emailInvalid'

  if (!message) errors.message = 'messageRequired'
  else if (message.length < 10) errors.message = 'messageShort'

  return errors
}

export default function ContactForm() {
  const { t } = useLanguage()
  const form = t.contact.form
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors(validate(next))
    if (status !== 'sending') setStatus('idle')
  }

  const handleBlur = (event) => {
    setTouched((current) => ({ ...current, [event.target.name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(found).length > 0) return
    if (values.website) {
      setStatus('success')
      setValues(emptyForm)
      return
    }

    setStatus('sending')
    try {
      await sendContactEmail({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      })
      setStatus('success')
      setValues(emptyForm)
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const fieldError = (name) => touched[name] && errors[name] && form.errors[errors[name]]

  const fields = [
    { name: 'name', type: 'text', autoComplete: 'name' },
    { name: 'email', type: 'email', autoComplete: 'email' },
  ]

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <h2 className="text-lg font-semibold">{form.title}</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-2 block text-sm font-medium text-zinc-300">
              {form[field.name]}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={values[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={form[`${field.name}Placeholder`]}
              aria-invalid={Boolean(fieldError(field.name))}
              aria-describedby={`${field.name}-error`}
              className={`field ${fieldError(field.name) ? 'border-red-500/70' : ''}`}
            />
            <p id={`${field.name}-error`} className="mt-1.5 min-h-[1.25rem] text-xs text-red-400">
              {fieldError(field.name)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-1">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={form.messagePlaceholder}
          aria-invalid={Boolean(fieldError('message'))}
          aria-describedby="message-error"
          className={`field resize-none ${fieldError('message') ? 'border-red-500/70' : ''}`}
        />
        <p id="message-error" className="mt-1.5 min-h-[1.25rem] text-xs text-red-400">
          {fieldError('message')}
        </p>
      </div>

      <input
        type="text"
        name="website"
        value={values.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button type="submit" disabled={status === 'sending'} className="btn-primary mt-3 w-full disabled:opacity-60">
        <FaPaperPlane />
        {status === 'sending' ? form.sending : form.submit}
      </button>

      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className={`mt-4 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
              status === 'success'
                ? 'border-accent/40 bg-accent/10 text-accent'
                : 'border-red-500/40 bg-red-500/10 text-red-300'
            }`}
          >
            {status === 'success' ? <FaCircleCheck /> : <FaCircleExclamation />}
            {status === 'success' ? form.success : form.error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
