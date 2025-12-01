# Starter Static Site

This directory contains a minimal static site scaffold you can customize.

Files:
- `index.html`  main page
- `styles.css`  styles
- `script.js`  small JS helper (contact form simulation)

Preview locally

PowerShell (recommended):
```powershell
cd "C:\projecto uno\site"
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

If you have VS Code, install the Live Server extension and open the folder, then click "Go Live".

Deploy

- GitHub Pages: push this repo to GitHub and enable Pages from the `site/` branch or `gh-pages`.
- Netlify: drag-and-drop the `site` folder, or connect the repo and set the publish directory to `site`.

Next steps (suggestions):
- Replace content and branding
- Add images in an `assets/` folder
- Add contact backend (Formspree, Netlify Forms, or custom API)
- Migrate to a generator (Vite + React or Hugo) for larger projects
