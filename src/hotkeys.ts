export interface Hotkey {
  id: string;
  keys: string;
  description: string;
}

export interface HotkeyCategory {
  name: string;
  hotkeys: Hotkey[];
}

export const hotkeyCategories: HotkeyCategory[] = [
  {
    name: "Navigation",
    hotkeys: [
      { id: "nav-1", keys: "Super + Space", description: "Application launcher" },
      { id: "nav-2", keys: "Super + Alt + Space", description: "Omarchy control menu" },
      { id: "nav-3", keys: "Super + Escape", description: "Lock/suspend/relaunch/restart/shutdown" },
      { id: "nav-4", keys: "Super + W", description: "Close window" },
      { id: "nav-5", keys: "Ctrl + Alt + Del", description: "Close all windows" },
      { id: "nav-6", keys: "Super + T", description: "Toggle window tiling/floating" },
      { id: "nav-7", keys: "Super + F", description: "Fullscreen mode" },
      { id: "nav-8", keys: "Super + Alt + F", description: "Full width window" },
      { id: "nav-9", keys: "Super + 1/2/3/4", description: "Jump to workspace" },
      { id: "nav-10", keys: "Super + Tab", description: "Next workspace" },
      { id: "nav-11", keys: "Super + Shift + Tab", description: "Previous workspace" },
      { id: "nav-12", keys: "Super + Ctrl + Tab", description: "Former workspace" },
      { id: "nav-13", keys: "Super + Arrow", description: "Move focus to adjacent window" },
      { id: "nav-14", keys: "Super + Shift + Arrow", description: "Swap windows" },
      { id: "nav-15", keys: "Super + Equal/Minus", description: "Resize windows horizontally" },
      { id: "nav-16", keys: "Super + G", description: "Toggle window grouping" },
      { id: "nav-17", keys: "Super + Alt + G", description: "Remove window from group" },
      { id: "nav-18", keys: "Super + Alt + Tab", description: "Cycle grouped windows" },
    ]
  },
  {
    name: "App Launching",
    hotkeys: [
      { id: "app-1", keys: "Super + Return", description: "Terminal" },
      { id: "app-2", keys: "Super + Shift + B", description: "Browser" },
      { id: "app-3", keys: "Super + Shift + Alt + B", description: "Private browser" },
      { id: "app-4", keys: "Super + Shift + F", description: "File manager" },
      { id: "app-5", keys: "Super + Shift + T", description: "Activity monitor (btop)" },
      { id: "app-6", keys: "Super + Shift + M", description: "Music (Spotify)" },
      { id: "app-7", keys: "Super + Shift + N", description: "Neovim editor" },
      { id: "app-8", keys: "Super + Shift + D", description: "Docker (LazyDocker)" },
      { id: "app-9", keys: "Super + Shift + O", description: "Obsidian" },
    ]
  },
  {
    name: "Clipboard",
    hotkeys: [
      { id: "clip-1", keys: "Super + C", description: "Copy" },
      { id: "clip-2", keys: "Super + X", description: "Cut" },
      { id: "clip-3", keys: "Super + V", description: "Paste" },
      { id: "clip-4", keys: "Super + Ctrl + V", description: "Clipboard manager" },
    ]
  },
  {
    name: "Capture",
    hotkeys: [
      { id: "cap-1", keys: "Print Screen", description: "Screenshot with editing" },
      { id: "cap-2", keys: "Shift + Print Screen", description: "Screenshot to clipboard" },
      { id: "cap-3", keys: "Alt + Print Screen", description: "Screen recording" },
      { id: "cap-4", keys: "Super + Print Screen", description: "Color picker" },
      { id: "cap-5", keys: "Alt + Shift + L", description: "Copy current URL" },
    ]
  },
  {
    name: "Notifications",
    hotkeys: [
      { id: "notif-1", keys: "Super + ,", description: "Dismiss latest" },
      { id: "notif-2", keys: "Shift + Super + ,", description: "Dismiss all" },
      { id: "notif-3", keys: "Ctrl + Super + ,", description: "Toggle notification silencing" },
    ]
  },
  {
    name: "Style",
    hotkeys: [
      { id: "style-1", keys: "Ctrl + Shift + Super + Space", description: "Theme picker" },
      { id: "style-2", keys: "Ctrl + Super + Space", description: "Next background" },
      { id: "style-3", keys: "Super + Backspace", description: "Toggle window transparency" },
    ]
  },
  {
    name: "Toggles",
    hotkeys: [
      { id: "toggle-1", keys: "Ctrl + Super + I", description: "Idle prevention" },
      { id: "toggle-2", keys: "Ctrl + Super + N", description: "Nightlight" },
      { id: "toggle-3", keys: "Shift + Super + Space", description: "Top bar visibility" },
      { id: "toggle-4", keys: "Super + Mute", description: "Next audio output" },
    ]
  },
  {
    name: "File Manager",
    hotkeys: [
      { id: "fm-1", keys: "Ctrl + L", description: "Navigate to path" },
      { id: "fm-2", keys: "Space", description: "Preview file" },
      { id: "fm-3", keys: "Backspace", description: "Go back" },
    ]
  },
  {
    name: "Emoji & Completions",
    hotkeys: [
      { id: "emoji-1", keys: "Super + Ctrl + E", description: "Emoji picker" },
      { id: "emoji-2", keys: "CapsLock M [letter]", description: "Quick emoji access" },
      { id: "emoji-3", keys: "CapsLock Space Space", description: "Em dash" },
      { id: "emoji-4", keys: "CapsLock Space N", description: "Your name" },
      { id: "emoji-5", keys: "CapsLock Space E", description: "Your email" },
    ]
  },
];
