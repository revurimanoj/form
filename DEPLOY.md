# Deployment Guide (Render)

This repository is configured for Render deployment using `render.yaml`.

## What is configured

- Backend service: `backend/demo` (Spring Boot)
- Frontend static site: `frontend/frontend` (Vite)
- Frontend API URL is controlled by `VITE_API_BASE_URL`

## Deploy steps

1. Push this repository to GitHub (already done).
2. In Render, choose **New +** -> **Blueprint**.
3. Connect your GitHub repo: `revurimanoj/form`.
4. Render will detect `render.yaml` and create two services:
   - `form-backend`
   - `form-frontend`
5. After deploy finishes:
   - Open `form-backend` and copy its public URL.
   - In `form-frontend` service settings, set env var `VITE_API_BASE_URL` to the backend URL.
   - Trigger a redeploy for frontend.

## Notes

- Backend accepts requests from localhost and Render domains.
- Local development still works with default API URL `http://localhost:8080`.
