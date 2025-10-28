# Omarchy Hotkeys Helper

A Next.js web application to help users learn and track keyboard shortcuts in the Omarchy operating system.

https://learn.omacom.io/2/the-omarchy-manual/53/hotkeys

## Purpose

This is a learning tool that presents all Omarchy hotkeys in an organized, trackable format. Users can check off hotkeys as they learn them, with progress persisting in localStorage.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Font**: Geist Sans & Geist Mono

## Key Files

- `app/page.tsx` - Main UI component with state management and table rendering
- `app/_components/key-combo.tsx` - Reusable component for rendering color-coded keyboard keys
- `lib/hotkeys.ts` - Data structure with all 113 hotkeys using typed constants for consistency
- `components/ui/*` - shadcn/ui components (checkbox, progress, card)
- `app/globals.css` - Tailwind configuration and CSS custom properties

## Data Structure

```typescript
interface Hotkey {
  id: string; // Unique identifier (e.g., "nav-1")
  keys: string; // Key combination (e.g., "Super + Space")
  description: string; // What the hotkey does
}

interface HotkeyCategory {
  name: string; // Category name (e.g., "Navigating")
  hotkeys: Hotkey[];
}
```

## Design System

### Color-Coded Keys

Each key type has a unique color for quick visual identification:

- **Blue** - Super key
- **Orange** - Ctrl/Control
- **Green** - Shift
- **Purple** - Alt
- **Pink** - Space
- **Cyan** - Tab
- **Indigo** - Arrow keys
- **Rose** - Print Screen
- **Yellow** - Other special keys (Escape, Return, F-keys, etc.)
- **Neutral** - Regular ASCII characters

### Layout

- Semantic HTML table with clear column headers
- Three columns: Key Combination, Description, Done
- Hover states and subtle borders for better readability
- Categories grouped in cards
- Progress tracking at the top

## State Management

- Uses React `useState` with `Set<string>` to track completed hotkeys
- Automatically persists to `localStorage` under key `"completed-hotkeys"`
- Completed items show with 50% opacity and line-through styling

## Source Reference

All hotkeys are sourced from: https://learn.omacom.io/2/the-omarchy-manual/53/hotkeys

## Adding/Updating Hotkeys

To add or modify hotkeys, edit `lib/hotkeys.ts`:

- Use the `KEY` constants object for all key names (ensures consistency and prevents typos)
- Use the `k()` helper function to combine keys
- Ensure unique IDs within each category
- Special keys like "Equal" and "Minus" are automatically converted to symbols (= and -)
