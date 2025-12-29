# Code Style Guidelines

## General
*   Use **TypeScript** for all new files.
*   Use **Functional Components** with Hooks.
*   Avoid `any` type; define proper interfaces/types.

## Naming Conventions
*   **Components**: PascalCase (e.g., `ProductCard.tsx`)
*   **Functions/Variables**: camelCase (e.g., `fetchProducts`)
*   **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)

## File Structure
*   Colocate styles and tests with components where possible, or use a dedicated folder structure.
*   Use absolute imports (configured in `tsconfig.json`) to avoid `../../`.

## State Management
*   Use local state (`useState`) for UI-only state.
*   Use **Zustand** for global application state (User, Cart, Personalization).
