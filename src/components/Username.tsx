type UsernameProps = {
  username: string;
  onChangeUsername: React.ChangeEventHandler<HTMLInputElement>;
};

export function Username({ username, onChangeUsername }: UsernameProps) {
  return (
    <label className="z-20 flex flex-col items-center gap-1 font-pretendard">
      Enter your name
      <input
        value={username}
        onChange={onChangeUsername}
        className="rounded border border-gray-400 p-1"
      />
    </label>
  );
}
