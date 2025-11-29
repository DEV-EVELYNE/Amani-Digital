#link to the project
https://e5395cc7.mydala.app/
#pitchdeck
https://gamma.app/docs/Amani-Digital-Supporting-Protecting-Survivors-of-Digital-Violence-hvqlxzhbc0gdv9c?mode=doc

# Amani Digital

Amani Digital is a web platform dedicated to creating a safer online environment for women and girls by providing resources, support, and tools to combat digital violence.

## Key Features

-   **Empathetic Homepage:** A welcoming landing page with a clear call-to-action.
-   **Survivor Support Hub:** A dedicated section offering guidance on digital safety, identity security, and finding help, complete with an interactive chat for immediate assistance.
-   **Resource Centers:** Curated pages for Prevention Resources and Safety Tools with external links to expert organizations.
-   **Community Chat:** A secure, real-time chat space for authenticated users to connect and share experiences.
-   **User Authentication:** A complete, frontend-only mock of user sign-up, login, and logout functionality.
-   **Dynamic UI:** The navigation header intelligently adapts, showing different links based on the user's authentication status.
-   **Responsive Design:** The entire platform is built to be accessible and user-friendly on both desktop and mobile devices.

## Technologies Used

-   **Frontend:** React 19.1.1, Vite, Tailwind CSS
-   **Routing:** `react-router-dom`
-   **UI Components:** `lucide-react` for icons, `sonner` for notifications.

## Running the Project Locally

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd amani-digital
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```
**##project structure**
Here is a list of all the files and their locations:

.
|-- public
|   |-- favicon.ico
|   `-- gebeya.webp
|-- src
|   |-- components
|   |   |-- ui
|   |   |   |-- accordion.tsx
|   |   |   |-- alert-dialog.tsx
|   |   |   |-- alert.tsx
|   |   |   |-- aspect-ratio.tsx
|   |   |   |-- avatar.tsx
|   |   |   |-- badge.tsx
|   |   |   |-- breadcrumb.tsx
|   |   |   |-- button-group.tsx
|   |   |   |-- button.tsx
|   |   |   |-- calendar.tsx
|   |   |   |-- card.tsx
|   |   |   |-- carousel.tsx
|   |   |   |-- chart.tsx
|   |   |   |-- checkbox.tsx
|   |   |   |-- collapsible.tsx
|   |   |   |-- command.tsx
|   |   |   |-- context-menu.tsx
|   |   |   |-- dialog.tsx
|   |   |   |-- drawer.tsx
|   |   |   |-- dropdown-menu.tsx
|   |   |   |-- empty.tsx
|   |   |   |-- field.tsx
|   |   |   |-- form.tsx
|   |   |   |-- hover-card.tsx
|   |   |   |-- input-group.tsx
|   |   |   |-- input-otp.tsx
|   |   |   |-- input.tsx
|   |   |   |-- item.tsx
|   |   |   |-- kbd.tsx
|   |   |   |-- label.tsx
|   |   |   |-- menubar.tsx
|   |   |   |-- navigation-menu.tsx
|   |   |   |-- pagination.tsx
|   |   |   |-- popover.tsx
|   |   |   |-- progress.tsx
|   |   |   |-- radio-group.tsx
|   |   |   |-- resizable.tsx
|   |   |   |-- scroll-area.tsx
|   |   |   |-- select.tsx
|   |   |   |-- separator.tsx
|   |   |   |-- sheet.tsx
|   |   |   |-- sidebar.tsx
|   |   |   |-- skeleton.tsx
|   |   |   |-- slider.tsx
|   |   |   |-- sonner.tsx
|   |   |   |-- spinner.tsx
|   |   |   |-- switch.tsx
|   |   |   |-- table.tsx
|   |   |   |-- tabs.tsx
|   |   |   |-- teleprompter.tsx
|   |   |   |-- textarea.tsx
|   |   |   |-- toggle-group.tsx
|   |   |   |-- toggle.tsx
|   |   |   `-- tooltip.tsx
|   |   |-- Footer.tsx
|   |   |-- Header.tsx
|   |   |-- ProtectedRoute.tsx
|   |   `-- SurvivorSupportChat.tsx
|   |-- contexts
|   |   `-- AuthContext.tsx
|   |-- hooks
|   |   `-- useAuth.tsx
|   |-- lib
|   |   `-- utils.ts
|   |-- pages
|   |   |-- AboutUs.tsx
|   |   |-- Chat.tsx
|   |   |-- Home.tsx
|   |   |-- Login.tsx
|   |   |-- PreventionResources.tsx
|   |   |-- SafetyTools.tsx
|   |   |-- SignUp.tsx
|   |   `-- SurvivorSupport.tsx
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|-- README.md
|-- vercel.json
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json

5.  Open your browser and visit `http://localhost:5173` to see the application in action.
