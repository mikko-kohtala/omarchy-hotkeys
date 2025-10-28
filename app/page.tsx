"use client";

import { useEffect, useState } from "react";
import { KeyCombo } from "@/app/_components/key-combo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { hotkeyCategories } from "@/lib/hotkeys";

const PERCENTAGE_MULTIPLIER = 100;

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
  const progressPercent = Math.round(
    (completedCount / totalHotkeys) * PERCENTAGE_MULTIPLIER
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto max-w-6xl px-6 py-10">
        <header className="mb-10 space-y-8">
          <h1 className="font-bold text-5xl text-white">
            Omarchy Hotkeys Helper
          </h1>

          <Card className="border-neutral-800 bg-neutral-900/50">
            <CardHeader>
              <CardTitle className="text-white text-xl">Key Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-blue-500/20 bg-blue-500/10 px-3 py-2 font-medium text-blue-400 text-sm">
                    Super
                  </kbd>
                  <span className="text-neutral-400 text-sm">Super key</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-orange-500/20 bg-orange-500/10 px-3 py-2 font-medium text-orange-400 text-sm">
                    Ctrl
                  </kbd>
                  <span className="text-neutral-400 text-sm">Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-green-500/20 bg-green-500/10 px-3 py-2 font-medium text-green-400 text-sm">
                    Shift
                  </kbd>
                  <span className="text-neutral-400 text-sm">Shift</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-purple-500/20 bg-purple-500/10 px-3 py-2 font-medium text-purple-400 text-sm">
                    Alt
                  </kbd>
                  <span className="text-neutral-400 text-sm">Alt</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-pink-500/20 bg-pink-500/10 px-3 py-2 font-medium text-pink-400 text-sm">
                    Space
                  </kbd>
                  <span className="text-neutral-400 text-sm">Space</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 font-medium text-cyan-400 text-sm">
                    Tab
                  </kbd>
                  <span className="text-neutral-400 text-sm">Tab</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 font-medium text-indigo-400 text-sm">
                    Arrow
                  </kbd>
                  <span className="text-neutral-400 text-sm">Arrow keys</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-rose-500/20 bg-rose-500/10 px-3 py-2 font-medium text-rose-400 text-sm">
                    PrtSc
                  </kbd>
                  <span className="text-neutral-400 text-sm">Print Screen</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 font-medium text-sm text-yellow-400">
                    Esc
                  </kbd>
                  <span className="text-neutral-400 text-sm">
                    Other special
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex min-w-10 items-center justify-center rounded border border-neutral-500/20 bg-neutral-500/10 px-3 py-2 font-medium text-neutral-300 text-sm">
                    A
                  </kbd>
                  <span className="text-neutral-400 text-sm">Regular keys</span>
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
            <Progress className="h-3" value={progressPercent} />
          </div>
        </header>

        <main className="space-y-8">
          {hotkeyCategories.map((category) => (
            <Card
              className="border-neutral-800 bg-neutral-900/50"
              key={category.name}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-neutral-800 border-b-2">
                        <th className="px-3 py-4 text-left font-medium text-base text-neutral-400">
                          Key Combination
                        </th>
                        <th className="px-5 py-4 text-left font-medium text-base text-neutral-400">
                          Description
                        </th>
                        <th className="w-20 px-3 py-4 text-right font-medium text-base text-neutral-400">
                          Done
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.hotkeys.map((hotkey) => (
                        <tr
                          className="cursor-pointer border-neutral-800/50 border-b transition-colors hover:bg-neutral-800/20"
                          key={hotkey.id}
                          onClick={() =>
                            toggleHotkey(hotkey.id, !completed.has(hotkey.id))
                          }
                        >
                          <td className="px-3 py-4 align-middle">
                            <div
                              className={`transition-opacity ${
                                completed.has(hotkey.id) ? "opacity-50" : ""
                              }`}
                            >
                              <KeyCombo keys={hotkey.keys} />
                            </div>
                          </td>
                          <td className="px-5 py-4 align-middle">
                            <div
                              className={`text-base text-neutral-300 transition-opacity ${
                                completed.has(hotkey.id)
                                  ? "line-through opacity-50"
                                  : ""
                              }`}
                            >
                              {hotkey.description}
                            </div>
                          </td>
                          <td className="px-3 py-4 text-right align-middle">
                            <Checkbox
                              checked={completed.has(hotkey.id)}
                              className="shrink-0 cursor-pointer"
                              id={hotkey.id}
                              onCheckedChange={(checked) =>
                                toggleHotkey(hotkey.id, checked as boolean)
                              }
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
