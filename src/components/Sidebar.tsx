import { Switch } from '~/components';

type SidebarProps = {
  vivid: boolean;
  glow: boolean;
  toggleVivid: () => void;
  toggleGlow: () => void;
};

export function Sidebar({
  vivid,
  glow,
  toggleVivid,
  toggleGlow,
}: SidebarProps) {
  return (
    <aside className="absolute right-2">
      <ul className="flex flex-col gap-3">
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
    </aside>
  );
}
