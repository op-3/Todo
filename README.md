# Simple TodoList with SvelteKit, Tailwind CSS, and DaisyUI

A minimalist yet functional TodoList web application built using SvelteKit, styled with Tailwind CSS, and enhanced with DaisyUI components.

## Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Responsive design
- Light/Dark mode (thanks to DaisyUI themes)

## Technologies Used

- [SvelteKit](https://kit.svelte.dev/) - The fastest way to build Svelte apps
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS component library

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-todolist.git
   cd simple-todolist
2. Install dependencies:
   ```bash
   npm install
   
Development
To start the development server:
   ```bash
   npm run dev
  ```
Or start the server and open the app in a new browser tab:
   ```bash
   npm run dev -- --open
   ```
The application will be available at http://localhost:5173 (or another port if 5173 is in use).
Building for Production
To create a production version of your app:
   ```bash
   npm run build
   ```
You can preview the production build with:
   ```bash
   npm run preview
   ```

Project Structure
   ```bash
   my-todolist/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── TodoItem.svelte
│   │   │   └── TodoList.svelte
│   │   └── stores/
│   │       └── todoStore.js
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   └── app.html
├── static/
│   └── favicon.png
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

Key Files
src/routes/+page.svelte: The main page of the application
src/lib/components/TodoList.svelte: The main TodoList component
src/lib/components/TodoItem.svelte: Individual todo item component
src/lib/stores/todoStore.js: Svelte store for managing todo items
Customization
Styling
This project uses Tailwind CSS for styling. You can customize the appearance by modifying the Tailwind classes in the Svelte components or by updating the tailwind.config.js file.

DaisyUI Themes
To change the theme, modify the data-theme attribute in src/app.html. For example:
```bash
<html lang="en" data-theme="dark">
```
Available themes can be found in the DaisyUI documentation.

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request



   


