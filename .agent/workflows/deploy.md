# Deployment Workflow

## Azure Static Web Apps

1.  **Build**:
    ```bash
    npm run build
    ```

2.  **Deploy**:
    This project is configured to deploy via GitHub Actions.
    - Push to `main` branch triggers deployment to Production.
    - Pull Requests trigger deployment to Staging environments.

## Manual Deployment (CLI)

If you have the Azure CLI installed:

```bash
swa deploy dist --env production
```
