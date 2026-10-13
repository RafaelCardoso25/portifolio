import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const fallbackEndpoint = 'https://formsubmit.co/ajax/rafaelabisaber@gmail.com'

export async function sendContactEmail({ name, email, message }) {
  if (serviceId && templateId && publicKey) {
    await emailjs.send(
      serviceId,
      templateId,
      { from_name: name, from_email: email, reply_to: email, message },
      { publicKey },
    )
    return
  }

  const response = await fetch(fallbackEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfólio: nova mensagem de ${name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  if (!response.ok) throw new Error('send-failed')
  const data = await response.json().catch(() => ({}))
  if (data.success === 'false' || data.success === false) throw new Error('send-failed')
}
