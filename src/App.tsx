import { useState, useEffect } from 'react';
import { hotkeyCategories } from './hotkeys';
import './App.css';

function App() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('completed-hotkeys');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('completed-hotkeys', JSON.stringify([...completed]));
  }, [completed]);

  const toggleHotkey = (id: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const parseKeys = (keyString: string): string[] => {
    return keyString.split('+').map(key => key.trim());
  };

  const getKeyType = (key: string): string => {
    // Modifiers
    if (key === 'Super') return 'key-super';
    if (key === 'Alt') return 'key-alt';
    if (key === 'Shift') return 'key-shift';
    if (key === 'Ctrl' || key === 'Control') return 'key-ctrl';

    // Special keys
    if (key === 'Tab') return 'key-tab';
    if (key === 'Escape') return 'key-escape';
    if (key === 'Space') return 'key-space';
    if (key === 'Return') return 'key-return';
    if (key === 'Backspace') return 'key-backspace';
    if (key === 'Del' || key === 'Delete') return 'key-delete';
    if (key === 'Arrow') return 'key-arrow';
    if (key === 'Print Screen') return 'key-printscreen';
    if (key === 'CapsLock') return 'key-capslock';
    if (key === 'Mute') return 'key-mute';
    if (key === ',') return 'key-comma';
    if (key === 'Equal/Minus' || key === '=' || key === '-') return 'key-plusminus';

    // Numbers
    if (/^[0-9/]+$/.test(key)) return 'key-number';

    // Placeholders like [letter]
    if (key.startsWith('[') && key.endsWith(']')) return 'key-placeholder';

    // Default for letters and other keys
    return 'key-letter';
  };

  const totalHotkeys = hotkeyCategories.reduce((sum, cat) => sum + cat.hotkeys.length, 0);
  const completedCount = completed.size;
  const progressPercent = Math.round((completedCount / totalHotkeys) * 100);

  return (
    <div className="app">
      <header className="header">
        <h1>Omarchy Hotkeys Helper</h1>
        <div className="progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="progress-text">
            {completedCount} / {totalHotkeys} ({progressPercent}%)
          </span>
        </div>
      </header>

      <main className="main">
        {hotkeyCategories.map(category => (
          <section key={category.name} className="category">
            <h2 className="category-title">{category.name}</h2>
            <ul className="hotkey-list">
              {category.hotkeys.map(hotkey => (
                <li
                  key={hotkey.id}
                  className={`hotkey-item ${completed.has(hotkey.id) ? 'completed' : ''}`}
                >
                  <label className="hotkey-label">
                    <input
                      type="checkbox"
                      checked={completed.has(hotkey.id)}
                      onChange={() => toggleHotkey(hotkey.id)}
                      className="hotkey-checkbox"
                    />
                    <span className="hotkey-content">
                      <span className="hotkey-keys">
                        {parseKeys(hotkey.keys).map((key, idx) => (
                          <kbd
                            key={idx}
                            className={`key ${getKeyType(key)}`}
                          >
                            {key}
                          </kbd>
                        ))}
                      </span>
                      <span className="hotkey-description">{hotkey.description}</span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
