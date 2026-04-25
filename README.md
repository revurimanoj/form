# Form App (Spring Boot + React)

A simple full-stack form submission app:
- Backend: Spring Boot (`backend/demo`)
- Frontend: React + Vite (`frontend/frontend`)

## Project Structure

- `backend/demo`: Java API service
- `frontend/frontend`: React web app
- `run-backend.bat`: starts backend locally
- `run-frontend.bat`: starts frontend locally
- `render.yaml`: Render Blueprint deployment config
- `DEPLOY.md`: deployment notes

## Run Locally

### 1) Start backend

```bat
run-backend.bat
```

Backend runs on:
- `http://localhost:8080`

### 2) Start frontend

```bat
run-frontend.bat
```

Frontend runs on:
- `http://localhost:5173`

## API Endpoints

- `GET /` -> health/info message
- `POST /submit` -> accepts JSON body:

```json
{
  "name": "Your Name",
  "email": "you@example.com"
}
```

## Deploy (Render)

This repo includes `render.yaml` for one-click Blueprint deploy.

1. Push code to GitHub.
2. In Render: New + -> Blueprint.
3. Select this repository.
4. Render creates:
   - `form-backend` (Spring Boot)
   - `form-frontend` (Static site)
5. Set frontend env var:
   - `VITE_API_BASE_URL=<your-backend-render-url>`
6. Redeploy frontend.

See `DEPLOY.md` for details.
