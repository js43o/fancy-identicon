type IdenticonProps = {
  blocks: number[];
  glow: boolean;
};

export function Identicon({ blocks, glow }: IdenticonProps) {
  return (
    <section className="grid h-80 w-80 grid-flow-col grid-cols-5 grid-rows-5">
      {[...blocks, ...blocks.slice(5, 10), ...blocks.slice(0, 5)].map(
        (block, index) => (
          <div
            key={index}
            className={`h-full w-full transition-all ${
              block ? `bg-[var(--block-color)]` : ''
            } ${glow ? 'drop-shadow-[0_0_1rem_var(--block-color)]' : ''}`}
          />
        )
      )}
    </section>
  );
}
