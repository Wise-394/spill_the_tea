<div align="center">

# ☕ Spill the Tea

**A members-only anonymous gossip board where guests can read the tea but only members know who spilled it. Built with a classic MVC backend stack.**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)
[![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white)](https://www.passportjs.org/)
[![express-validator](https://img.shields.io/badge/express--validator-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://express-validator.github.io/)

</div>

---

## ✨ Features

- **Anonymous Gossip Feed** — All visitors can browse the gossip board, but authors are hidden from guests. Only members can see who posted what, creating a layer of intrigue and exclusivity
- **Membership System** — Users can unlock membership by entering a secret passcode, granting them access to author identities and the ability to post
- **Authentication** — Secure signup and login powered by Passport.js using the local strategy, with persistent sessions so users stay logged in across requests
- **Password Hashing** — All passwords are hashed with bcrypt before being stored in the database, ensuring user credentials are never stored in plain text
- **Post Gossip** — Members can create gossip posts with a title and content, which are immediately visible to all visitors on the board
- **Delete Your Own Posts** — Members can delete posts they authored, with server-side ownership verification to prevent unauthorized deletions
- **Input Validation & Sanitization** — All form inputs are validated and sanitized server-side using `express-validator` to enforce required fields, correct data types, and protection against XSS attacks
- **Database Seeding** — Tables and initial gossip data are auto-created and seeded on first run via JS scripts, so the board is never empty on a fresh install
- **MVC Architecture** — Clean separation of concerns across Models, Views, and Controllers for maintainable and scalable code
- **Error Handling** — Dedicated error page for graceful handling of unexpected server errors

---

## 🖼️ Preview

<div align="center">

<p><strong>Homepage</strong></p>
<img width="800" alt="Homepage" src="https://github.com/user-attachments/assets/5f43ffe7-5455-43d2-8f05-7f184e133db4" />

<p><strong>Becoming a Member</strong></p>
<img width="800" alt="Becoming a member" src="https://github.com/user-attachments/assets/97da704a-9e8f-40a8-99b8-3789de573712" />

<p><strong>Adding Gossip</strong></p>
<img width="800" alt="Adding gossip" src="https://github.com/user-attachments/assets/cd8021ae-00b2-40db-b9cc-6680cc332e2e" />

<p><strong>Login / Signup</strong></p>
<img width="800" alt="Login and signup" src="https://github.com/user-attachments/assets/9df28601-959a-467c-842c-28d33a27a96a" />


</div>

---

## 🛠️ Built With

- [Node.js](https://nodejs.org/) — JavaScript runtime environment
- [Express.js](https://expressjs.com/) — Web framework for routing and middleware
- [EJS](https://ejs.co/) — Server-side templating engine for rendering views
- [PostgreSQL](https://www.postgresql.org/) — Relational database for storing users and gossip posts
- [Passport.js](https://www.passportjs.org/) — Authentication middleware using local strategy and session-based persistence
- [bcrypt](https://www.npmjs.com/package/bcrypt) — Password hashing library for secure credential storage
- [express-validator](https://express-validator.github.io/) — Server-side input validation and sanitization
- [express-session](https://www.npmjs.com/package/express-session) — Session management middleware
- [dotenv](https://www.npmjs.com/package/dotenv) — Environment variable management

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

```bash
# Clone the repository
git clone https://github.com/wise-394/spill-the-tea.git
cd spill-the-tea

# Install dependencies
npm install

# Set up your .env file
DB_URL=your_postgresql_connection_string
SECRET=your_session_secret
MEMBER_PASSWORD=your_member_passcode

# Start the development server
npm run dev
```

The app will automatically create the database tables and seed initial gossip posts on first run.

---

## 🔐 How the Membership Works

Spill the Tea has a two-tier access system:

| Feature | Guest | Member |
|---|---|---|
| View gossip posts | ✅ | ✅ |
| See who posted | ❌ | ✅ |
| Post gossip | ❌ | ✅ |
| Delete own posts | ❌ | ✅ |

To become a member, a logged-in user enters a secret passcode in the membership dialog. If correct, their account is upgraded and they immediately gain full access.

---

## ⚠️ Disclaimer

This is a personal learning project built as part of [The Odin Project](https://www.theodinproject.com/) curriculum, focused on practicing backend development concepts including authentication, session management, database design, server-side validation, and MVC architecture.
It is intended for educational and portfolio purposes only.

---

<div align="center">
Made by <a href="https://github.com/wise-394">wise-394</a>
</div>
