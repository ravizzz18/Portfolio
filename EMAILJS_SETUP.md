<!-- EmailJS Template Structure -->

<!-- 
Setup Instructions for EmailJS:

1. Go to https://www.emailjs.com/ and sign up
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create a new Email Template with these variables:

Subject: New message from {{from_name}} - {{subject}}

Body:
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.

4. Get your Service ID, Template ID, and Public Key
5. Update Contact.jsx with your credentials
-->

<!-- Example Template Variables -->
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Message subject
- {{message}} - Message content
