type IdenticonProps = {
  blocks: number[];
};

export function Identicon({ blocks }: IdenticonProps) {
  return (
    <section className="grid h-80 w-80 grid-flow-col grid-cols-5 grid-rows-5">
      {[...blocks, ...blocks.slice(5, 10), ...blocks.slice(0, 5)].map(
        (block, index) => (
          <div
            key={index}
            className={`h-full w-full transition-colors ${
              block ? `bg-[var(--block-color)]` : ''
            }`}
          />
        )
      )}
    </section>
  );
}
