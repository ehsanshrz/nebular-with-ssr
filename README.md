```markdown
<div align="center">

# 🚀 Nebular with SSR (Server-Side Rendering)

**A modern, production-ready starter template integrating Nebular UI components with Angular Server-Side Rendering.**

[![Angular Version](https://img.shields.io/badge/Angular-SSR-red?logo=angular)](https://angular.io/)
[![Nebular UI](https://img.shields.io/badge/UI-Nebular-blue?logo=akveo)](https://akveo.github.io/nebular/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

*Seamlessly combine Nebular's powerful theming engine, stunning visual themes, and 35+ UI components with the performance and SEO benefits of Angular SSR.*

</div>

---

## ✨ What's Inside?

* **⚡ Angular SSR Ready:** Pre-configured setup for Server-Side Rendering to maximize initial load performance, Core Web Vitals, and SEO indexing.
* **🌙 Nebular Theming Engine:** Full support for Nebular's multi-theme capability (including Cosmic, Corporate, Dark, and Default themes) with runtime theme switching.
* **🧩 35+ Angular UI Components:** Cleanly integrated Nebular components (Layout, Sidebar, Menu, Card, Tabs, etc.) operating smoothly across both server and client execution contexts.
* **🛡️ Eva Icons Integration:** Out-of-the-box support for SVG Eva Icons for a crisp, modern aesthetic.

---

## 📦 Quick Start

Follow these steps to get your development environment running locally:

### 1. Clone the repository
```bash
git clone [https://github.com/ehsanshrz/nebular-with-ssr.git](https://github.com/ehsanshrz/nebular-with-ssr.git)
cd nebular-with-ssr

```

### 2. Install dependencies

```bash
npm install

```

### 3. Run the development server (with SSR)

```bash
npm run dev:ssr

```

*Open your browser and navigate to `http://localhost:4200`.*

---

## 🏗️ Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the standard client-side development server. |
| `npm run build` | Builds the application for production (client + server bundles). |
| `npm run serve:ssr` | Runs the production-built SSR server locally. |
| `npm run dev:ssr` | Runs the SSR development server with live reload. |

---

## 🛠️ Project Structure Highlights

```text
nebular-with-ssr/
├── src/
│   ├── app/               # Core application modules, components, and routing
│   ├── assets/            # Static files, images, and localized configuration
│   ├── index.html         # Application root HTML template
│   ├── main.ts            # Client bootstrap entry point
│   ├── main.server.ts     # Server-side bootstrap entry point
│   └── styles.scss        # Global styles and Nebular theme variable overrides
├── angular.json           # Angular CLI configuration including SSR builder targets
└── package.json           # Project dependencies and custom scripts

```

---

## 💡 Why Nebular with SSR?

Standard Angular UI component libraries that manipulate the DOM directly during initialization can sometimes introduce hydration mismatches or layout shifts under Server-Side Rendering. This repository provides a cleanly wired boilerplate that mitigates SSR hydration hurdles, letting you leverage Nebular's full styling power without sacrificing server-side performance.

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are always welcome! Feel free to open an issue or submit a pull request.

1. Fork the Project (`https://github.com/ehsanshrz/nebular-with-ssr/fork`)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.
