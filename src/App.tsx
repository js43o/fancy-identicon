import { useEffect, useState } from 'react';
import { Header, Identicon, Username } from '~/components';
import md5 from 'crypto-js/md5';

function App() {
  const [username, setUsername] = useState('');
  const [blocks, setBlocks] = useState([...Array(15).map(() => 0)]);
  const [color, setColor] = useState([0, 0, 0]);

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (!username) {
      setBlocks([...Array(15).map(() => 0)]);
      return;
    }

    const hash = md5(username).toString();
    setColor([
      parseInt(hash.slice(0, 16), 16) % 360,
      (parseInt(hash.slice(16, 24), 16) % 40) + 30,
      (parseInt(hash.slice(24, 32), 16) % 20) + 70,
    ]);
    setBlocks(
      Array.from(hash)
        .slice(0, 15)
        .map((char, idx) => char.charCodeAt(0) + hash[idx + 15].charCodeAt(0))
        .map((char) => char % 2)
    );
  }, [username]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--block-color',
      `hsl(${color[0]},
      ${color[1]}%,
      ${color[2]}%)`
    );
  }, [color]);

  return (
    <div className="flex h-full w-full flex-col bg-slate-800 font-pretendard text-gray-50">
      <Header />
      <main className="flex grow flex-col items-center justify-center gap-2">
        <Identicon blocks={blocks} />
        <Username username={username} onChangeUsername={onChangeUsername} />
      </main>
      <footer className="flex items-center justify-center p-4 text-gray-500">
        made by js43o
      </footer>
    </div>
  );
}

export default App;
