# Luxe Horizons Africa — Contact Form & Gmail SMTP Setup Guide

This guide provides step-by-step instructions to configure **Gmail SMTP** with **EmailJS** for the Luxe Horizons Africa Contact Form (`/contact`), enabling form submissions to be sent directly to `info@luxehorizonsafrica.com` (or your chosen Gmail address).

---

## Prerequisites & Requirements

1. **Google Account / Google Workspace Email**:
   - Access to your Gmail / Google Workspace account (e.g., `info@luxehorizonsafrica.com`).
2. **Gmail App Password**:
   - Google requires an **App Password** (not your regular personal password) for 3rd-party SMTP integrations.
3. **EmailJS Account**:
   - Free account at [EmailJS.com](https://www.emailjs.com/) (200 free emails/month, easy upgrades).

---

## Step-by-Step Setup Guide

### STEP 1: Enable 2-Step Verification & Generate a Gmail App Password

1. Go to your **Google Account Security** settings:
   - Navigate to: [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Ensure **2-Step Verification** is turned **ON**.
3. Search for or navigate to **App Passwords**:
   - Direct link: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Create a new App Password:
   - **App Name**: Enter `Luxe Horizons Website`
   - Click **Create**.
5. Copy the generated **16-character passcode** (e.g., `abcd efgh ijkl mnop`). Save this passcode securely — you will use it as your SMTP password in EmailJS.

---

### STEP 2: Connect Gmail SMTP to EmailJS

1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. Navigate to **Email Services** and click **Add New Service**.
3. Select **Gmail** (or **SMTP**):
   - **Service Name**: `Gmail Luxe Horizons`
   - **Service ID**: Note down this ID (e.g., `service_luxe_gmail`) — this is your `VITE_EMAILJS_SERVICE_ID`.
4. Click **Connect Account** or enter your credentials:
   - **Email / User**: `info@luxehorizonsafrica.com` (or your Gmail address)
   - **Password**: Paste the **16-character App Password** generated in Step 1.
5. Click **Create Service**.

---

### STEP 3: Create the Email Template

1. In EmailJS Dashboard, navigate to **Email Templates** and click **Create New Template**.
2. Set the **Template Name**: `Luxe Horizons Contact Enquiry`.
3. Configure the **Template Content**:

**Subject Line**:
```text
New Safari Enquiry from {{name}} ({{country}})
```

**Email Body**:
```html
<div style="font-family: Arial, sans-serif; color: #182721; max-width: 600px; padding: 20px; border: 1px solid #c6a15b; border-radius: 8px;">
  <h2 style="color: #24382c; margin-top: 0;">New Luxury Safari Enquiry</h2>
  <hr style="border: 0; border-top: 1px solid #c6a15b;" />
  
  <p><strong>Passenger Name:</strong> {{name}}</p>
  <p><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></p>
  <p><strong>Phone:</strong> {{phone}}</p>
  <p><strong>Country:</strong> {{country}}</p>

  <h3 style="color: #24382c; margin-top: 20px;">Message / Enquiry Details:</h3>
  <blockquote style="background: #f8f6f0; padding: 15px; border-left: 4px solid #c6a15b; margin: 0;">
    {{message}}
  </blockquote>

  <br />
  <p style="font-size: 12px; color: #888;">Sent from Luxe Horizons Africa Contact Form (/contact)</p>
</div>
```

4. Configure the **To Email** and **Reply-To**:
   - **To Email**: `info@luxehorizonsafrica.com`
   - **Reply-To**: `{{email}}` (allows you to reply directly to the customer when hitting 'Reply' in your inbox).

5. Save the Template and note down the **Template ID** (e.g., `template_luxe_contact`) — this is your `VITE_EMAILJS_TEMPLATE_ID`.

---

### STEP 4: Configure Local Environment Variables

1. Copy `.env.example` to create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Fill in your credentials in `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_luxe_gmail
   VITE_EMAILJS_TEMPLATE_ID=template_luxe_contact
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```
   *(Find your **Public Key** in EmailJS Dashboard under **Account -> API Keys**).*

---

### STEP 5: Test & Production Deployment

1. Run the development server locally:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:5173/contact`.
3. Fill out the **Boarding Pass** form and click **Board Now**.
4. Check your Gmail inbox (`info@luxehorizonsafrica.com`) to confirm delivery!

#### Deployment on Hosting Provider (Netlify / Vercel / Cloudflare Pages):
Add the three environment variables in your deployment settings:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## Troubleshooting Checklist

- [ ] **Error: Invalid Password**: Ensure you are using the **16-character App Password**, not your personal Google account password.
- [ ] **Error: 400 Bad Request**: Verify that `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` match your EmailJS dashboard values.
- [ ] **Template fields blank**: Ensure form field names in `ContactPage.jsx` (`name="name"`, `name="email"`, `name="phone"`, `name="country"`, `name="message"`) match the `{{var}}` placeholders in EmailJS template.
