# CreativeStudio - Freelance Agency Portfolio

## Group Information
- Kumari M.D.M.D.   ITBIN-2211-0214 - Role: DevOps Engineer & Full-Stack Developer

## Project Description
CreativeStudio is a portfolio website for a freelance creative agency. It showcases the agency's services, past projects, and provides a contact form for potential clients to get in touch. The site is fully responsive and built with clean, semantic HTML, CSS, and JavaScript.

## Live Deployment
🔗 **Live URL:** https://daradula.github.io/portfolio-agency-devops-assignment/

## Technologies Used
- HTML5 / CSS3 / JavaScript
- GitHub Actions (CI/CD)
- GitHub Pages (Deployment)

## Features
- **Responsive Navigation** – Sticky navbar with smooth links to all sections
- **Hero Section** – Eye-catching introduction with a call-to-action button
- **Services Section** – Grid layout showcasing 4 core service offerings
- **Projects Section** – Showcase of past project work
- **Contact Form** – Client-side validated contact form with real-time feedback
- **Fully Responsive Design** – Optimized for mobile, tablet, and desktop

## Branch Strategy
We followed a standard Git Flow branching model:
- `main` - Production branch (auto-deploys on commit via GitHub Actions)
- `develop` - Development & integration branch (prerelease testing)
- `feature/*` - Individual feature branches:
  - `feature/homepage-layout`
  - `feature/services-section`
  - `feature/contact-form`
  - `feature/footer-conflict-demo`

## Individual Contributions
- Initial repository structure and `.gitignore` setup
- Configured GitHub Actions CI/CD workflows (`ci.yml` & `deploy.yml`)
- Developed homepage layout, navbar, and hero section (`feature/homepage-layout`)
- Developed services section with responsive grid (`feature/services-section`)
- Developed contact form, projects section, and JS validation (`feature/contact-form`)
- Created and resolved an intentional merge conflict in the footer text
- Configured GitHub Pages deployment
- Wrote full project documentation

## Setup & Installation Instructions

### Prerequisites
- Git installed locally
- A modern web browser

### Installation
1. Clone the repository:
```bash
   git clone https://github.com/daradula/portfolio-agency-devops-assignment.git
```
2. Navigate into the directory:
```bash
   cd portfolio-agency-devops-assignment
```
3. Open `src/index.html` directly in your browser, or use a live server extension in VS Code.

## CI/CD Deployment Process
The project uses two GitHub Actions workflows:
- **`ci.yml`** – Runs on every push and pull request to `main`, `develop`, and `feature/**` branches. It validates that required project files (`index.html`, `style.css`) exist and checks the project structure.
- **`deploy.yml`** – Runs automatically whenever code is pushed to `main`. It packages the `src` folder and deploys it to GitHub Pages, making the site instantly live at the deployment URL above.

## Challenges & Resolutions
- **Merge Conflict:** An intentional merge conflict was created by editing the same line of the footer text on two different branches (`develop` and `feature/footer-conflict-demo`). Git flagged the conflict with `<<<<<<<`, `=======`, and `>>>>>>>` markers in `src/index.html`. The conflict was resolved manually by combining both versions into a single, coherent line, then committing and pushing the resolved file.
- **GitHub Pages Deployment Failure:** The first deployment attempt failed with a "Get Pages site failed" error because GitHub Pages was not yet configured to use "GitHub Actions" as its build source. This was resolved by updating the repository's Pages settings (Settings → Pages → Source → GitHub Actions) and re-running the workflow.
- **Missing `main` Branch:** Since the repository was initialized without a default README, no `main` branch existed initially. This was resolved by creating a `main` branch from `develop` and pushing it to origin.

## Build Status
![CI Pipeline](https://github.com/daradula/portfolio-agency-devops-assignment/actions/workflows/ci.yml/badge.svg)
![Deploy to GitHub Pages](https://github.com/daradula/portfolio-agency-devops-assignment/actions/workflows/deploy.yml/badge.svg)