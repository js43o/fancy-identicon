type IdenticonProps = {
  blocks: number[];
  glow: boolean;
  theme: 'light' | 'dark' | 'cube';
};

export function Identicon({ blocks, glow, theme }: IdenticonProps) {
  return (
    <div
      className={`cube-wrapper relative flex h-80 w-80 flex-col transition-transform ${
        theme === 'cube' ? 'rotated' : ''
      }`}
    >
      <div
        className={`cube-top absolute h-full w-full bg-blue-200 transition-all`}
      />
      <div
        className={`cube-front absolute z-10 grid h-full w-full grid-flow-col grid-cols-5 grid-rows-5 transition-all`}
      >
        {[...blocks, ...blocks.slice(5, 10), ...blocks.slice(0, 5)].map(
          (block, index) => (
            <div
              key={index}
              className={`h-full w-full transition-all ${
                block ? `bg-[var(--block-color)]` : ''
              } ${glow ? 'drop-shadow-[0_0_0.75rem_var(--block-color)]' : ''}`}
            />
          )
        )}
      </div>
      <div
        className={`cube-side absolute h-full w-full bg-red-200 transition-all`}
      />
    </div>
  );
}
