type SwitchProps = {
  enabled: boolean;
  ariaLabel?: string;
  toggleEnabled: () => void;
};

export function Switch({
  enabled,
  ariaLabel = '',
  toggleEnabled,
}: SwitchProps) {
  return (
    <button
      type="button"
      onClick={toggleEnabled}
      aria-label={ariaLabel}
      className={`switch-outer relative flex w-10 rounded-full border p-1 transition-colors ${
        enabled ? 'border-blue-400 bg-blue-600' : 'border-gray-400 bg-gray-600'
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
