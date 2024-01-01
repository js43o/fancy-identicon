type IdenticonProps = {
  blocks: number[];
  glow: boolean;
  theme: 'light' | 'dark' | 'cube';
};

export function Identicon({ blocks, glow, theme }: IdenticonProps) {
  return (
    <div
      className={`cube-wrapper relative flex h-80 w-80 flex-col transition-transform duration-500 ${
        theme === 'cube' ? 'rotated' : ''
      }`}
    >
      <div
        className={`cube-top absolute h-full w-full bg-gray-200 transition-colors`}
      />
      <div
        className={`cube-front ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-github-default'
        } absolute z-10 grid h-full w-full grid-flow-col grid-cols-5 grid-rows-5 transition-colors`}
      >
        {[...blocks, ...blocks.slice(5, 10), ...blocks.slice(0, 5)].map(
          (block, index) => (
            <div
              key={index}
              className={`block h-full w-full border transition-colors ${
                block
                  ? `border-[var(--block-color)] bg-[var(--block-color)]`
                  : 'border-transparent'
              } ${glow ? 'drop-shadow-[0_0_0.75rem_var(--block-color)]' : ''}`}
            />
          )
        )}
      </div>
      <div
        className={`cube-side absolute h-full w-full bg-gray-400 transition-colors`}
      />
    </div>
  );
}
