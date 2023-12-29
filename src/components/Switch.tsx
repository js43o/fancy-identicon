type SwitchProps = {
  enabled: boolean;
  toggleEnabled: () => void;
};

export function Switch({ enabled, toggleEnabled }: SwitchProps) {
  return (
    <button
      type="button"
      onClick={toggleEnabled}
      className={`switch-outer relative flex w-10 rounded-full border border-gray-400 p-1 transition-colors ${
        enabled ? 'border-blue-300 bg-blue-600' : ''
      }`}
    >
      <div
        className={`switch-inner flex h-4 w-4 rounded-full bg-gray-50 transition-transform ${
          enabled ? 'translate-x-3.5' : ''
        }`}
      />
    </button>
  );
}
