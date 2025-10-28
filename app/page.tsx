"use client";

import { useState, useEffect } from "react";
import { hotkeyCategories } from "@/lib/hotkeys";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyCombo } from "@/app/_components/key-combo";

export default function Home() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem("completed-hotkeys");
    if (saved) {
      setCompleted(new Set(JSON.parse(saved)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("completed-hotkeys", JSON.stringify([...completed]));
  }, [completed]);

  const toggleHotkey = (id: string, checked: boolean) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  const totalHotkeys = hotkeyCategories.reduce(
    (sum, cat) => sum + cat.hotkeys.length,
    0
  );
  const completedCount = completed.size;
  const progressPercent = Math.round((completedCount / totalHotkeys) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <header className="mb-10 space-y-8">
          <h1 className="text-5xl font-bold text-white">
            Omarchy Hotkeys Helper
          </h1>

          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-xl text-white">Key Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-blue-500/10 border-blue-500/20 text-blue-400">
                    Super
                  </kbd>
                  <span className="text-sm text-neutral-400">Super key</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-orange-500/10 border-orange-500/20 text-orange-400">
                    Ctrl
                  </kbd>
                  <span className="text-sm text-neutral-400">Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-green-500/10 border-green-500/20 text-green-400">
                    Shift
                  </kbd>
                  <span className="text-sm text-neutral-400">Shift</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-purple-500/10 border-purple-500/20 text-purple-400">
                    Alt
                  </kbd>
                  <span className="text-sm text-neutral-400">Alt</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-pink-500/10 border-pink-500/20 text-pink-400">
                    Space
                  </kbd>
                  <span className="text-sm text-neutral-400">Space</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-cyan-500/10 border-cyan-500/20 text-cyan-400">
                    Tab
                  </kbd>
                  <span className="text-sm text-neutral-400">Tab</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-indigo-500/10 border-indigo-500/20 text-indigo-400">
                    Arrow
                  </kbd>
                  <span className="text-sm text-neutral-400">Arrow keys</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-rose-500/10 border-rose-500/20 text-rose-400">
                    PrtSc
                  </kbd>
                  <span className="text-sm text-neutral-400">Print Screen</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-yellow-500/10 border-yellow-500/20 text-yellow-400">
                    Esc
                  </kbd>
                  <span className="text-sm text-neutral-400">Other special</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex items-center justify-center px-3 py-2 min-w-10 rounded border text-sm font-medium bg-neutral-500/10 border-neutral-500/20 text-neutral-300">
                    A
                  </kbd>
                  <span className="text-sm text-neutral-400">Regular keys</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <div className="flex justify-between text-base text-neutral-400">
              <span>Your Progress</span>
              <span>
                {completedCount} / {totalHotkeys} ({progressPercent}%)
              </span>
            </div>
            <Progress value={progressPercent} className="h-3" />
          </div>
        </header>

        <main className="space-y-8">
          {hotkeyCategories.map((category) => (
            <Card key={category.name} className="bg-neutral-900/50 border-neutral-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-neutral-800">
                        <th className="text-left py-4 px-3 text-base font-medium text-neutral-400">
                          Key Combination
                        </th>
                        <th className="text-left py-4 px-5 text-base font-medium text-neutral-400">
                          Description
                        </th>
                        <th className="text-right py-4 px-3 text-base font-medium text-neutral-400 w-20">
                          Done
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.hotkeys.map((hotkey) => (
                        <tr
                          key={hotkey.id}
                          onClick={() => toggleHotkey(hotkey.id, !completed.has(hotkey.id))}
                          className="border-b border-neutral-800/50 hover:bg-neutral-800/20 transition-colors cursor-pointer"
                        >
                          <td className="py-4 px-3 align-middle">
                            <div
                              className={`transition-opacity ${
                                completed.has(hotkey.id) ? "opacity-50" : ""
                              }`}
                            >
                              <KeyCombo keys={hotkey.keys} />
                            </div>
                          </td>
                          <td className="py-4 px-5 align-middle">
                            <div
                              className={`text-base text-neutral-300 transition-opacity ${
                                completed.has(hotkey.id)
                                  ? "opacity-50 line-through"
                                  : ""
                              }`}
                            >
                              {hotkey.description}
                            </div>
                          </td>
                          <td className="py-4 px-3 align-middle text-right">
                            <Checkbox
                              id={hotkey.id}
                              checked={completed.has(hotkey.id)}
                              onCheckedChange={(checked) =>
                                toggleHotkey(hotkey.id, checked as boolean)
                              }
                              className="shrink-0 cursor-pointer"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}
