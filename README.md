# Sameer Portfolio

A React (Vite) portfolio site with a Node/Express + MongoDB backend for
signup/login and a contact form.

## Project structure

```
sameer-portfolio/
├── src/            # React frontend (Vite)
├── server/         # Express + MongoDB backend (deploy separately)
├── vercel.json     # Fixes React Router 404s on Vercel
└── .env.example    # Copy to .env for local frontend dev
```

## What was fixed

- `server/controllers/authController.js` was missing its imports and the
  `login` / `verifyEmail` functions, and never exported anything — this
  crashed the server on startup. Rewritten with working `signup`, `login`,
  `verifyEmail`, and `getMe`.
- `server/middleware/authMiddleware.js` was an empty file. Added a working
  `protect` middleware (JWT verification) and wired it into a new
  protected `GET /api/auth/me` route.
- `src/api/axios.js` had the backend URL hardcoded to `localhost`. It now
  reads `VITE_API_URL` so it works after deployment.
- Added `vercel.json` so client-side routes (`/about`, `/login`, etc.)
  don't 404 on refresh once deployed.
- `.gitignore` now excludes `.env` files so secrets never get committed.
- Added `.env.example` files documenting required environment variables.

Email verification is optional: if `EMAIL_USER` / `EMAIL_PASS` in
`server/.env` are left as placeholders, new accounts are auto-verified so
signup/login works immediately without needing a real Gmail app password.

## Local development

**Frontend:**
```bash
npm install
cp .env.example .env      # optional for local dev, defaults to localhost:3001
npm run dev
```

**Backend:**
```bash
cd server
npm install
cp .env.example .env
# fill in MONGO_URI and JWT_SECRET at minimum
npm run dev
```

## Deployment

Vercel is built for static/frontend apps. This backend is a long-running
Express server, so deploy it in two parts:

### 1. Backend → Render (or Railway)

1. Push this repo to GitHub.
2. On Render, create a **Web Service**, root directory `server`.
   - Build command: `npm install`
   - Start command: `npm start`
3. Add environment variables from `server/.env.example`:
   - `MONGO_URI` — from MongoDB Atlas
   - `JWT_SECRET` — any long random string
   - `CLIENT_URL` — your Vercel frontend URL (set after step 2)
   - `EMAIL_USER` / `EMAIL_PASS` — optional, only needed for real
     verification emails (use a Gmail App Password, not your normal
     password)
4. Deploy and copy the resulting backend URL
   (e.g. `https://sameer-portfolio-api.onrender.com`).

### 2. Frontend → Vercel

1. Import the GitHub repo into Vercel.
2. Root directory: the repo root (leave as default).
3. Add an environment variable:
   - `VITE_API_URL` = `https://<your-backend-url>/api`
4. Deploy.
5. Go back to Render and set `CLIENT_URL` to your Vercel URL so CORS
   allows requests from it, then redeploy the backend.

That's it — signup, login, and the contact form will all talk to the
live backend.
