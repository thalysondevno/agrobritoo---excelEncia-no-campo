# AI Rules for Agrobritoo Application

This document outlines the core technologies used in the Agrobritoo application and provides guidelines for library usage to maintain consistency and best practices.

## Tech Stack Description

*   **React**: The primary JavaScript library for building the user interface, enabling a component-based architecture.
*   **TypeScript**: A superset of JavaScript that adds static type definitions, enhancing code quality, readability, and maintainability.
*   **Tailwind CSS**: A utility-first CSS framework used for all styling, allowing for rapid UI development directly within JSX.
*   **Vite**: A fast and modern build tool that provides an excellent development experience with features like hot module replacement.
*   **Google Gemini API**: Integrated via the `@google/genai` library for powering the AI Assistant functionality, providing intelligent agro-related advice.
*   **Material Symbols Outlined**: A comprehensive icon library from Google, used for all iconography throughout the application.
*   **Custom Routing**: The application currently manages navigation between different views using a custom state-based system within `App.tsx`.
*   **Shadcn/ui & Radix UI**: Pre-installed component libraries that provide accessible and customizable UI components, available for use in new features.

## Library Usage Rules

To ensure consistency and maintainability, please adhere to the following rules when developing or modifying the application:

*   **UI Components**:
    *   Prioritize using components from **shadcn/ui** for common UI elements (e.g., buttons, forms, dialogs).
    *   If a specific component is not available in shadcn/ui, or for highly custom elements, create new, small, and focused React components using **Tailwind CSS** for styling.
    *   Do **NOT** modify the source files of shadcn/ui components directly. If customization is needed, create a new component that wraps or extends the shadcn/ui component.
*   **Styling**:
    *   All styling must be implemented using **Tailwind CSS** utility classes. Avoid writing custom CSS files or inline styles unless absolutely necessary for global overrides (e.g., in `index.html` or `index.css`).
*   **Icons**:
    *   Use **Material Symbols Outlined** for all icons. Ensure the correct class names and `!text-` sizes are applied as needed.
*   **Routing**:
    *   For any new navigation or routing requirements, use **React Router**. All route definitions should be kept within `src/App.tsx`.
*   **AI Integration**:
    *   The `@google/genai` library should be used for all interactions with the Google Gemini API, following the pattern established in `services/geminiService.ts`.
*   **State Management**:
    *   For component-local state, use React's built-in `useState` and `useEffect` hooks. For more complex, application-wide state, consider the React Context API if a simple solution is required. Avoid external state management libraries unless explicitly approved.