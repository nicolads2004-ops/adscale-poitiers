import { createTransport } from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name?.trim() || !body.email?.trim()) {
    throw createError({ statusCode: 400, message: 'Champs requis manquants.' })
  }

  const htmlBody = `
    <h2 style="color:#4285f4;">Nouveau lead ADSCALE</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Nom</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.name}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Téléphone</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.phone || '-'}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Entreprise</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.company || '-'}</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.message || '-'}</td></tr>
    </table>
    <p style="margin-top:20px;color:#666;font-size:12px;">Envoyé depuis adscale.poitiers.digital</p>
  `

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })

  await transporter.sendMail({
    from: `"ADSCALE" <${process.env.GMAIL_USER}>`,
    to: 'contact@poitiers.digital',
    cc: 'matthieu@shark-graphik.fr',
    subject: `[ADSCALE] Nouveau lead — ${body.company || body.name}`,
    html: htmlBody
  })

  return { success: true }
})
