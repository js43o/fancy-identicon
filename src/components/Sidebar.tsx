import { Switch } from '~/components';
import { Theme } from '~/utils';
import { ThemeSelector } from './ThemeSelector';
import { Download } from './Download';

type SidebarProps = {
  vivid: boolean;
  glow: boolean;
  theme: Theme;
  toggleVivid: () => void;
  toggleGlow: () => void;
  onSelectTheme: (newTheme: Theme) => void;
  onCapture: () => void;
};

export function Sidebar({
  vivid,
  glow,
  theme,
  toggleVivid,
  toggleGlow,
  onSelectTheme,
  onCapture,
}: SidebarProps) {
  return (
    <aside className="absolute right-2 flex flex-col items-end gap-4">
      <ul className="flex flex-col gap-2">
        <li>
          <label className="flex gap-2">
            vivid
            <Switch
              enabled={vivid}
              ariaLabel="vivid"
              toggleEnabled={toggleVivid}
            />
          </label>
        </li>
        <li>
          <label className="flex gap-2">
            glow
            <Switch
              enabled={glow}
              ariaLabel="glow"
              toggleEnabled={toggleGlow}
            />
          </label>
        </li>
      </ul>
      <ThemeSelector theme={theme} onSelectTheme={onSelectTheme} />
      <Download onCapture={onCapture} />
    </aside>
  );
}
