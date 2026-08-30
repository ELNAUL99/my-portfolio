# Luan Le — Portfolio

Personal portfolio site for **Luan Le**, a Full Stack Developer based in Helsinki.

**Live:** https://my-portfolio-three-mu-19.vercel.app

---

## What's in it

A single-page site with the following sections:

| Section | Purpose |
|---|---|
| **Hero** | Intro, socials, quick CTAs (About, Projects, View CV, Cover Letter) |
| **About** | Professional summary + education |
| **Skills** | Icon grid of technologies (theme-aware SVGs) |
| **Projects** | Featured work with autoplay video, live demo + source links |
| **Honors & Awards** | Norrin Challenge (AI for Good Hackathon) 1st-place win |
| **Resume & Cover Letter** | Two buttons that open the PDFs in an in-page viewer |
| **Contact** | Contact info + Netlify form |

---

## Tech stack

- **React 18** on **Create React App** (`react-scripts` 5)
- Vanilla CSS (per-component `.css` files, no CSS-in-JS framework)
- Inline SVG icons (theme-aware via `currentColor` / `var(--clr-primary-1)`)
- Hosted on **Vercel** with GitHub auto-deploy from `main`

CRA is still used because the site is simple, prerendered HTML is fine, and Vercel handles the static build well.

---

## Project structure

```
my-portfolio/
├── public/
│   ├── awards/norrin/       # Award photo(s)
│   ├── documents/           # CV + cover letter PDFs
│   ├── projects/            # Project demo videos (.mov)
│   ├── my-img.jpg           # Hero portrait
│   └── index.html
├── src/
│   ├── App.js               # Renders sections in order
│   ├── data.js              # Projects data (title, tags, video, links)
│   ├── index.css            # Global styles + theme tokens
│   └── components/
│       ├── Navbar/          # Nav + sidebar + social links
│       ├── Hero/            # Landing view + CTA buttons
│       ├── About/
│       ├── Skills/
│       │   └── skillsData.js  # Skill icons (SVG data)
│       ├── Container/       # Wraps the Projects list
│       │   └── ...uses Project/ for each card
│       ├── Project/         # Single project card (image or video)
│       ├── Awards/          # Honors & Awards section
│       ├── Documents/       # Resume & Cover Letter section
│       ├── DocumentModal/   # Reusable in-page PDF viewer
│       ├── Contact/         # Netlify contact form
│       ├── Footer/
│       ├── Btn/             # Shared link button
│       └── index.js         # Barrel exports
├── package.json
├── vercel.json
└── README.md
```

---

## Running locally

```bash
npm install
npm start
```

Opens at http://localhost:3000. Changes hot-reload.

Other scripts:

- `npm run build` — production build into `build/`
- `npm test` — CRA test runner (no tests written yet)

---

## Editing content

### Projects

All projects live in [`src/data.js`](src/data.js). Each entry:

```js
{
  id: 1,
  img: '',                              // gif/image path, or ''
  video: '/projects/YourVideo.mov',     // video path, or ''
  title: 'Project Name',
  description: `What it does, tech used, results.`,
  tags: ['Tag', 'Tag', 'Tag'],
  liveLink: 'https://example.com',      // shows "Live Demo" button
  ghLink: 'https://github.com/...',     // shows "Source" button; omit or '' to hide
}
```

Rules:
- If both `img` and `video` are empty, the card shows a **"Demo coming soon"** placeholder.
- `video` takes precedence when both are set. Videos autoplay muted and loop.
- Drop media into `public/projects/` and reference as `/projects/filename.ext`.

⚠️ **`.mov` warning**: Safari plays `.mov` fine, but Chrome/Firefox often show blank video. Convert to `.mp4` (H.264/AAC) for cross-browser autoplay:

```bash
ffmpeg -i input.mov -vcodec h264 -acodec aac -movflags +faststart output.mp4
```

### Awards

Currently a single hardcoded card in [`src/components/Awards/Awards.jsx`](src/components/Awards/Awards.jsx). Edit the JSX to change copy or swap the photo (stored in `public/awards/norrin/hero.jpg`).

### CV & Cover Letter

Replace the PDFs in `public/documents/` keeping the same filenames:

- `public/documents/Luan-Le-CV.pdf`
- `public/documents/Luan-Le-Cover-Letter.pdf`

The Hero and Resume & Cover Letter sections both point at these paths via [`DocumentModal`](src/components/DocumentModal/DocumentModal.jsx).

### Skills

Skills (icon + name) are inline SVGs in [`src/components/Skills/skillsData.js`](src/components/Skills/skillsData.js). To add one:

1. Grab a clean single-color SVG from [simple-icons](https://simpleicons.org/) or similar
2. Remove any hardcoded `fill="..."` on `<path>` elements so it inherits the theme color (`--clr-primary-1`)
3. Append a new entry `{ id, name, ariaLabel, svg: (...) }`

### Contact

The contact form uses **Netlify Forms** attributes but this site is deployed on **Vercel**. Currently the form POSTs to `/` and won't actually submit anywhere. If you want real submissions, either:
- Wire it to [Formspree](https://formspree.io/) / [Web3Forms](https://web3forms.com/), or
- Swap to a serverless endpoint (Vercel function)

---

## Theming

The site has **light and dark themes** driven by CSS variables in [`src/index.css`](src/index.css):

- `:root` — default (light) palette
- `.dark-theme` — overrides for dark
- `.light-theme` — explicit light overrides

Key token: `--clr-primary-1` (primary text/icon color) — dark in light theme, white in dark. All SVGs that should follow the theme must **not** have hardcoded `fill` attributes on their paths.

Theme toggle logic lives in [`src/components/Navbar/Navbar.jsx`](src/components/Navbar/Navbar.jsx).

---

## Deployment

Pushing to `main` on GitHub automatically triggers a Vercel production deploy (usually ready in ~30–60s).

- Repo: https://github.com/ELNAUL99/my-portfolio
- Project (Vercel): `prj_GMIiXJ5lnYhVJsfcEKvarNzcC3HW`
- Production aliases:
  - https://my-portfolio-three-mu-19.vercel.app
  - https://my-portfolio-elnaul99s-projects.vercel.app
  - https://my-portfolio-git-main-elnaul99s-projects.vercel.app

Manual deploy from the CLI (rarely needed):

```bash
npx vercel --prod
```

---

## Known caveats

- **`.gitignore` is thin.** Both `node_modules/` and `build/` are currently tracked. Vercel rebuilds from source, so the committed `build/` folder is redundant. Cleaning it up is worth a small chore commit.
- **`.mov` videos** don't autoplay in Chrome/Firefox — convert to `.mp4` (see the Projects section above).
- **`next` is in `package.json`** but the app is CRA. It's a leftover from an earlier iteration and can be removed on the next dep cleanup.
- The **Contact form** attributes point at Netlify but the site runs on Vercel; submissions aren't wired up.

---

## Contact

- Email: thanhluan081999@gmail.com
- LinkedIn: https://www.linkedin.com/in/le-nguyen-thanh-luan-93a89b218/
- GitHub: https://github.com/ELNAUL99
- Games: https://scooter5826.itch.io/
