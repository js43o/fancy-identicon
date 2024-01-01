import { Switch } from '~/components';
import { ThemeSelector } from './ThemeSelector';

type SidebarProps = {
  vivid: boolean;
  glow: boolean;
  theme: 'light' | 'dark' | 'cube';
  toggleVivid: () => void;
  toggleGlow: () => void;
  onSelectTheme: (newTheme: 'light' | 'dark' | 'cube') => void;
};

export function Sidebar({
  vivid,
  glow,
  theme,
  toggleVivid,
  toggleGlow,
  onSelectTheme,
}: SidebarProps) {
  return (
    <aside className="absolute right-2 flex flex-col items-end gap-4">
      <ul className="flex flex-col gap-2">
        <li>
          <label className="flex gap-2">
            vivid
            <Switch enabled={vivid} toggleEnabled={toggleVivid} />
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            glow
            <Switch enabled={glow} toggleEnabled={toggleGlow} />
          </label>
        </li>
      </ul>
      <ThemeSelector theme={theme} onSelectTheme={onSelectTheme} />
    </aside>
  );
}
