/** biome-ignore-all lint/style/useBlockStatements: 🐟 */
type KeyComboProps = {
  keys: string;
};

const FUNCTION_KEY_REGEX = /^F\d+$/;

function parseKeys(keyString: string): string[] {
  return keyString.split("+").map((key) => {
    const trimmedKey = key.trim();
    // Display symbols instead of words for specific keys
    if (trimmedKey === "Equal") return "=";
    if (trimmedKey === "Minus") return "-";
    return trimmedKey;
  });
}

function getKeyClasses(key: string): string {
  const baseClasses =
    "inline-flex items-center justify-center px-3 py-1.5 min-w-10 rounded border text-sm font-medium";

  // Modifier keys with unique colors
  if (key === "Super")
    return `${baseClasses} bg-blue-500/10 border-blue-500/20 text-blue-400`;
  if (key === "Alt")
    return `${baseClasses} bg-purple-500/10 border-purple-500/20 text-purple-400`;
  if (key === "Shift")
    return `${baseClasses} bg-green-500/10 border-green-500/20 text-green-400`;
  if (key === "Ctrl" || key === "Control")
    return `${baseClasses} bg-orange-500/10 border-orange-500/20 text-orange-400`;
  if (key === "Space")
    return `${baseClasses} bg-pink-500/10 border-pink-500/20 text-pink-400`;
  if (key === "Tab")
    return `${baseClasses} bg-cyan-500/10 border-cyan-500/20 text-cyan-400`;
  if (key === "Arrow")
    return `${baseClasses} bg-indigo-500/10 border-indigo-500/20 text-indigo-400`;
  if (key === "Print Screen")
    return `${baseClasses} bg-rose-500/10 border-rose-500/20 text-rose-400`;

  // Other special keys (yellow)
  if (
    key === "Escape" ||
    key === "Return" ||
    key === "Backspace" ||
    key === "Del" ||
    key === "Delete" ||
    key === "CapsLock" ||
    key === "Mute" ||
    FUNCTION_KEY_REGEX.test(key) // Function keys: F1, F2, F3, etc.
  )
    return `${baseClasses} bg-yellow-500/10 border-yellow-500/20 text-yellow-400`;

  // Regular ASCII characters (neutral)
  return `${baseClasses} bg-neutral-500/10 border-neutral-500/20 text-neutral-300`;
}

export function KeyCombo({ keys }: KeyComboProps) {
  const parsedKeys = parseKeys(keys);
  return (
    <div className="flex flex-wrap items-center gap-2">
      {parsedKeys.map((key, idx) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Keys can be duplicated in combinations like "Space + Space"
        <kbd className={getKeyClasses(key)} key={`${key}-${idx}`}>
          {key}
        </kbd>
      ))}
    </div>
  );
}
