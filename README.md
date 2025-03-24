
<div align="center">
  <a href="https://github.com/IwannabeRealnerD/wedding-sh">
    <img src="images/original_favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">wedding-sh</h2>
</div>

<div align="center">
    <a href="https://iwannaberealnerd.github.io/wedding-sh/">Deployed Link</a>
    ·
    <a href="https://github.com/IwannabeRealnerD/wedding-sh/issues">Report Bug</a>
    ·
    <a href="https://github.com/IwannabeRealnerD/wedding-sh/issues">Request Feature</a>
</div>

<div align="center">
  <p>Interactive wedding invitation that works like a shell but runs in web browser.</p>
  <img src="https://img.shields.io/badge/svelte-FF3200?style=for-the-badge&logo=svelte&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white">
</div>
<br/>
<div align="center">
  <img src="images/screenshot.png" alt="screenshot" >
</div>

## About this project
- This project is a wedding invitation that has a terminal-like user interface.
- Users can interact with the project by typing custom commands, such as viewing event details or location.
- Fully customizable commands and welcome messages.
- This project is forked from [khanne-sh](https://github.com/IwannabeRealnerD/khanne-sh) - khanne-sh has simillar features and design but for resume.

### Available Commands
 - Please check the [src/settings.ts](src/settings.ts) for available commands.
 - You can add your own commands by adding them to the `commands` object in the [src/settings.ts](src/settings.ts) file.

 ### Personal Information
 - Personal information is stored with env variables. Before you start project, you need to set up env variables in [.env.local](.env.local) file.
 ```env
  VITE_PARTNER1_PHONE_NUMBER=11111111111
  VITE_PARTNER2_PHONE_NUMBER=22222222222

  VITE_PARTNER1_NAME="Their name"
  VITE_PARTNER2_NAME="Their name"

  VITE_PARTNER1_EMAIL="Their email"
  VITE_PARTNER2_EMAIL="Their email"
 ```

## Deployed link
- [github pages](https://iwannaberealnerd.github.io/wedding-sh/)
- The GitHub Pages deployment is the actual wedding invitation webpage that I personally used.


## Getting started in your local environment
- To get started with this project, you need to clone the repository and install the dependency.

### Environment Setup
- nodejs - 22.14.0
- pnpm - 10.6.2
  ```sh
  corepack prepare pnpm@9.13.0 --activate
  ```

### How to Deploy Dev Server
1. Clone repository
   ```sh
   git clone https://github.com/IwannabeRealnerD/wedding-sh.git
   ```
2. Install pnpm dependency
   ```sh
   pnpm install --frozen-lockfile
   ```
3. Start Dev Server
   ```sh
   pnpm dev
   ```

## Contact
iwannaberealnerd - iwannaberealnerd@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.