export type Hotkey = {
  id: string;
  keys: string;
  description: string;
};

export type HotkeyCategory = {
  name: string;
  hotkeys: Hotkey[];
};

// Key constants for consistency
export const KEY = {
  // Modifier keys
  SUPER: "Super",
  CTRL: "Ctrl",
  SHIFT: "Shift",
  ALT: "Alt",

  // Special keys
  SPACE: "Space",
  TAB: "Tab",
  ARROW: "Arrow",
  PRINT_SCREEN: "Print Screen",
  ESCAPE: "Escape",
  RETURN: "Return",
  BACKSPACE: "Backspace",
  DELETE: "Del",
  CAPSLOCK: "CapsLock",
  MUTE: "Mute",

  // Symbols
  EQUAL: "Equal",
  MINUS: "Minus",
  COMMA: ",",
  SLASH: "/",

  // Function keys
  F1: "F1",
  F2: "F2",

  // Letters (commonly used)
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  R: "R",
  S: "S",
  T: "T",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",

  // Numbers
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
} as const;

// Helper to join keys
const k = (...keys: string[]) => keys.join(" + ");

export const hotkeyCategories: HotkeyCategory[] = [
  {
    name: "Navigating",
    hotkeys: [
      {
        id: "nav-1",
        keys: k(KEY.SUPER, KEY.SPACE),
        description: "Application launcher",
      },
      {
        id: "nav-2",
        keys: k(KEY.SUPER, KEY.ALT, KEY.SPACE),
        description: "Omarchy control menu",
      },
      {
        id: "nav-3",
        keys: k(KEY.SUPER, KEY.ESCAPE),
        description: "Lock/suspend/relaunch/restart/shutdown computer",
      },
      { id: "nav-4", keys: k(KEY.SUPER, KEY.W), description: "Close window" },
      {
        id: "nav-5",
        keys: k(KEY.CTRL, KEY.ALT, KEY.DELETE),
        description: "Close all windows",
      },
      {
        id: "nav-6",
        keys: k(KEY.SUPER, KEY.T),
        description: "Toggle window between tiling/floating",
      },
      { id: "nav-7", keys: k(KEY.SUPER, KEY.F), description: "Go full screen" },
      {
        id: "nav-8",
        keys: k(KEY.SUPER, KEY.ALT, KEY.F),
        description: "Go full width for the window",
      },
      {
        id: "nav-9",
        keys: k(KEY.SUPER, "1/2/3/4"),
        description: "Jump to specific workspace",
      },
      {
        id: "nav-10",
        keys: k(KEY.SUPER, KEY.TAB),
        description: "Jump to next workspace",
      },
      {
        id: "nav-11",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.TAB),
        description: "Jump to previous workspace",
      },
      {
        id: "nav-12",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.TAB),
        description: "Jump to former workspace",
      },
      {
        id: "nav-13",
        keys: k(KEY.SUPER, KEY.SHIFT, "1/2/3/4"),
        description: "Move window to workspace",
      },
      {
        id: "nav-14",
        keys: k(KEY.CTRL, "1/2/3/..."),
        description: "Jump to browser tab",
      },
      {
        id: "nav-15",
        keys: k(KEY.SUPER, KEY.ARROW),
        description: "Move focus to window in direction of arrow",
      },
      {
        id: "nav-16",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.ARROW),
        description: "Swap window with another in direction of arrow",
      },
      {
        id: "nav-17",
        keys: k(KEY.SUPER, KEY.EQUAL),
        description: "Grow windows to the left",
      },
      {
        id: "nav-18",
        keys: k(KEY.SUPER, KEY.MINUS),
        description: "Grow windows to the right",
      },
      {
        id: "nav-19",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.EQUAL),
        description: "Grow windows to the bottom",
      },
      {
        id: "nav-20",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.MINUS),
        description: "Grow windows to the top",
      },
      {
        id: "nav-21",
        keys: k(KEY.SUPER, KEY.G),
        description: "Toggle window grouping",
      },
      {
        id: "nav-22",
        keys: k(KEY.SUPER, KEY.ALT, KEY.G),
        description: "Move window out of grouping",
      },
      {
        id: "nav-23",
        keys: k(KEY.SUPER, KEY.ALT, KEY.TAB),
        description: "Cycle between windows in grouping",
      },
      {
        id: "nav-24",
        keys: k(KEY.SUPER, KEY.ALT, "1/2/3/4"),
        description: "Jump to specific window in grouping",
      },
      {
        id: "nav-25",
        keys: k(KEY.SUPER, KEY.ALT, KEY.ARROW),
        description: "Move window into grouping in direction of arrow",
      },
    ],
  },
  {
    name: "Launching apps",
    hotkeys: [
      { id: "app-1", keys: k(KEY.SUPER, KEY.RETURN), description: "Terminal" },
      {
        id: "app-2",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.B),
        description: "Browser",
      },
      {
        id: "app-3",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.ALT, KEY.B),
        description: "Browser (private/incognito)",
      },
      {
        id: "app-4",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.F),
        description: "File manager",
      },
      {
        id: "app-5",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.T),
        description: "Activity (btop)",
      },
      {
        id: "app-6",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.M),
        description: "Music (Spotify)",
      },
      {
        id: "app-7",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.SLASH),
        description: "Password manager (1password)",
      },
      {
        id: "app-8",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.N),
        description: "Neovim",
      },
      {
        id: "app-9",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.C),
        description: "Calendar (HEY)",
      },
      {
        id: "app-10",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.E),
        description: "Email (HEY)",
      },
      {
        id: "app-11",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.A),
        description: "AI (ChatGPT)",
      },
      {
        id: "app-12",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.G),
        description: "Messenger (Signal)",
      },
      {
        id: "app-13",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.CTRL, KEY.G),
        description: "Messenger (WhatsApp)",
      },
      {
        id: "app-14",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.ALT, KEY.G),
        description: "Messenger (Google)",
      },
      {
        id: "app-15",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.D),
        description: "Docker (LazyDocker)",
      },
      {
        id: "app-16",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.O),
        description: "Obsidian",
      },
      { id: "app-17", keys: k(KEY.SUPER, KEY.SHIFT, KEY.X), description: "X" },
      {
        id: "app-18",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.S),
        description: "Share menu (via LocalSend)",
      },
    ],
  },
  {
    name: "Universal clipboard",
    hotkeys: [
      { id: "clip-1", keys: k(KEY.SUPER, KEY.C), description: "Copy" },
      {
        id: "clip-2",
        keys: k(KEY.SUPER, KEY.X),
        description: "Cut (not in terminal)",
      },
      { id: "clip-3", keys: k(KEY.SUPER, KEY.V), description: "Paste" },
      {
        id: "clip-4",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.V),
        description: "Clipboard manager",
      },
    ],
  },
  {
    name: "Capture",
    hotkeys: [
      {
        id: "cap-1",
        keys: KEY.PRINT_SCREEN,
        description: "Screenshot with editing",
      },
      {
        id: "cap-2",
        keys: k(KEY.SHIFT, KEY.PRINT_SCREEN),
        description: "Screenshot straight to clipboard",
      },
      {
        id: "cap-3",
        keys: k(KEY.ALT, KEY.PRINT_SCREEN),
        description: "Screenrecord",
      },
      {
        id: "cap-4",
        keys: k(KEY.SUPER, KEY.PRINT_SCREEN),
        description: "Color picker",
      },
      {
        id: "cap-5",
        keys: k(KEY.SHIFT, KEY.ALT, KEY.L),
        description: "Copy current URL from webapp or Chromium",
      },
    ],
  },
  {
    name: "Notifications",
    hotkeys: [
      {
        id: "notif-1",
        keys: k(KEY.SUPER, KEY.COMMA),
        description: "Dismiss latest notification",
      },
      {
        id: "notif-2",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.COMMA),
        description: "Dismiss all notifications",
      },
      {
        id: "notif-3",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.COMMA),
        description: "Toggle silencing notifications",
      },
    ],
  },
  {
    name: "Style",
    hotkeys: [
      {
        id: "style-1",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.CTRL, KEY.SPACE),
        description: "Pick a new theme",
      },
      {
        id: "style-2",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.SPACE),
        description: "Next background image for theme",
      },
      {
        id: "style-3",
        keys: k(KEY.SUPER, KEY.BACKSPACE),
        description: "Toggle transparency on a window",
      },
    ],
  },
  {
    name: "Toggles",
    hotkeys: [
      {
        id: "toggle-1",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.I),
        description: "Toggle idle/sleep prevention",
      },
      {
        id: "toggle-2",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.N),
        description: "Toggle nightlight display temperature",
      },
      {
        id: "toggle-3",
        keys: k(KEY.SUPER, KEY.SHIFT, KEY.SPACE),
        description: "Toggle the top bar",
      },
      {
        id: "toggle-4",
        keys: k(KEY.SUPER, KEY.MUTE),
        description: "Switch to next audio output",
      },
    ],
  },
  {
    name: "File Manager",
    hotkeys: [
      { id: "fm-1", keys: k(KEY.CTRL, KEY.L), description: "Go to path" },
      {
        id: "fm-2",
        keys: KEY.SPACE,
        description: "Preview file (arrows navigate)",
      },
      { id: "fm-3", keys: KEY.BACKSPACE, description: "Go back one folder" },
    ],
  },
  {
    name: "Apple Display Brightness Control",
    hotkeys: [
      {
        id: "apple-1",
        keys: k(KEY.CTRL, KEY.F1),
        description: "Turn down brightness",
      },
      {
        id: "apple-2",
        keys: k(KEY.CTRL, KEY.F2),
        description: "Turn up brightness",
      },
      {
        id: "apple-3",
        keys: k(KEY.CTRL, KEY.SHIFT, KEY.F2),
        description: "Turn up brightness to maximum",
      },
    ],
  },
  {
    name: "Neovim (w/ lazyvim) - Navigation",
    hotkeys: [
      { id: "vim-1", keys: KEY.SPACE, description: "Show command options" },
      {
        id: "vim-2",
        keys: k(KEY.SPACE, KEY.SPACE),
        description: "Open file via fuzzy search",
      },
      { id: "vim-3", keys: k(KEY.SPACE, KEY.E), description: "Toggle sidebar" },
      {
        id: "vim-4",
        keys: k(KEY.SPACE, KEY.G, KEY.G),
        description: "Show git controls",
      },
      {
        id: "vim-5",
        keys: k(KEY.SPACE, KEY.S, KEY.G),
        description: "Search file content",
      },
      {
        id: "vim-6",
        keys: k(KEY.CTRL, "W", "W"),
        description: "Jump between sidebar and editor",
      },
      {
        id: "vim-7",
        keys: k(KEY.CTRL, KEY.ARROW),
        description: "Change size of sidebar",
      },
      {
        id: "vim-8",
        keys: k(KEY.SHIFT, KEY.H),
        description: "Go to left file tab",
      },
      {
        id: "vim-9",
        keys: k(KEY.SHIFT, KEY.L),
        description: "Go to right file tab",
      },
      {
        id: "vim-10",
        keys: k(KEY.SPACE, KEY.B, KEY.D),
        description: "Close file tab",
      },
    ],
  },
  {
    name: "Neovim - While in sidebar",
    hotkeys: [
      {
        id: "vim-sb-1",
        keys: KEY.A,
        description: "Add new file in parent dir",
      },
      {
        id: "vim-sb-2",
        keys: k(KEY.SHIFT, KEY.A),
        description: "Add new subdir in parent dir",
      },
      {
        id: "vim-sb-3",
        keys: KEY.D,
        description: "Delete highlighted file/dir",
      },
      { id: "vim-sb-4", keys: KEY.M, description: "Move highlighted file/dir" },
      {
        id: "vim-sb-5",
        keys: KEY.R,
        description: "Rename highlighted file/dir",
      },
      { id: "vim-sb-6", keys: "?", description: "Show help for all commands" },
    ],
  },
  {
    name: "Quick Emojis",
    hotkeys: [
      {
        id: "emoji-0",
        keys: k(KEY.SUPER, KEY.CTRL, KEY.E),
        description: "Complete emoji picker",
      },
      {
        id: "emoji-1",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.S),
        description: "😄 smile",
      },
      {
        id: "emoji-2",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.C),
        description: "😂 cry",
      },
      {
        id: "emoji-3",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.L),
        description: "😍 love",
      },
      {
        id: "emoji-4",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.V),
        description: "✌️ victory",
      },
      {
        id: "emoji-5",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.H),
        description: "❤️ heart",
      },
      {
        id: "emoji-6",
        keys: k(KEY.CAPSLOCK, KEY.M, "Y"),
        description: "👍 yes",
      },
      {
        id: "emoji-7",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.N),
        description: "👎 no",
      },
      {
        id: "emoji-8",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.F),
        description: "🖕 fuck",
      },
      {
        id: "emoji-9",
        keys: k(KEY.CAPSLOCK, KEY.M, "W"),
        description: "🤞 wish",
      },
      {
        id: "emoji-10",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.R),
        description: "🤘 rock",
      },
      {
        id: "emoji-11",
        keys: k(KEY.CAPSLOCK, KEY.M, "K"),
        description: "😘 kiss",
      },
      {
        id: "emoji-12",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.E),
        description: "🙄 eyeroll",
      },
      {
        id: "emoji-13",
        keys: k(KEY.CAPSLOCK, KEY.M, "P"),
        description: "🙏 pray",
      },
      {
        id: "emoji-14",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.D),
        description: "🤤 drool",
      },
      {
        id: "emoji-15",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.M),
        description: "💰 money",
      },
      {
        id: "emoji-16",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.X),
        description: "🎉 xellebrate",
      },
      {
        id: "emoji-17",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.ONE),
        description: "💯 100%",
      },
      {
        id: "emoji-18",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.T),
        description: "🥂 toast",
      },
      {
        id: "emoji-19",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.O),
        description: "👌 ok",
      },
      {
        id: "emoji-20",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.G),
        description: "👋 greeting",
      },
      {
        id: "emoji-21",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.A),
        description: "💪 arm",
      },
      {
        id: "emoji-22",
        keys: k(KEY.CAPSLOCK, KEY.M, KEY.B),
        description: "🤯 blowing",
      },
    ],
  },
  {
    name: "Quick Completions",
    hotkeys: [
      {
        id: "comp-1",
        keys: k(KEY.CAPSLOCK, KEY.SPACE, KEY.SPACE),
        description: "— (mdash)",
      },
      {
        id: "comp-2",
        keys: k(KEY.CAPSLOCK, KEY.SPACE, KEY.N),
        description: "Your name (as entered on setup)",
      },
      {
        id: "comp-3",
        keys: k(KEY.CAPSLOCK, KEY.SPACE, KEY.E),
        description: "Your email (as entered on setup)",
      },
    ],
  },
];
