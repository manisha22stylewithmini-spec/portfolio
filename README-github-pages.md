# Deploying to GitHub Pages

Since your project is built with Next.js, it does not have an `index.html` file in the source code. Instead, Next.js generates the `index.html` during the build process when `output: "export"` is configured in `next.config.mjs` (which is already set up!).

To make your website live on GitHub Pages, **you don't need to manually create an `index.html`**. You just need to change one setting in your GitHub repository to use the provided GitHub Actions workflow (`.github/workflows/deploy.yml`).

### Step-by-Step Instructions:
1. Commit and push all your code to the `main` or `master` branch on GitHub.
2. Go to your repository on GitHub.
3. Click on the **Settings** tab.
4. On the left sidebar, click on **Pages**.
5. Under **Build and deployment > Source**, change the dropdown from **"Deploy from a branch"** to **"GitHub Actions"**.
6. GitHub will now automatically run the workflow in `.github/workflows/deploy.yml`, which will securely build your Next.js site, generate the `index.html` in the background, and publish it live!

Once the build finishes (you can watch it in the **Actions** tab), your site will be live.
