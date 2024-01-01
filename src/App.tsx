import { useEffect, useState } from 'react';
import { Header, Identicon, Username } from '~/components';
import md5 from 'crypto-js/md5';
import { Sidebar } from './components/Sidebar';

function App() {
  const [username, setUsername] = useState('');
  const [blocks, setBlocks] = useState([...Array(15).map(() => 0)]);
  const [color, setColor] = useState([0, 0, 0]);
  const [vivid, setVivid] = useState(false);
  const [glow, setGlow] = useState(false);

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const toggleVivid = () => setVivid(!vivid);
  const toggleGlow = () => setGlow(!glow);

  useEffect(() => {
    if (!username) {
      setBlocks([...Array(15).map(() => 0)]);
      return;
    }

    const hash = md5(username).toString();
    setColor([
      parseInt(hash.slice(0, 16), 16) % 360,
      vivid ? 100 : (parseInt(hash.slice(16, 24), 16) % 40) + 30,
      vivid ? 50 : (parseInt(hash.slice(24, 32), 16) % 20) + 70,
    ]);
    setBlocks(
      Array.from(hash)
        .slice(0, 15)
        .map((char, idx) => char.charCodeAt(0) + hash[idx + 15].charCodeAt(0))
        .map((char) => char % 2)
    );
  }, [username, vivid]);

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
      <main className="relative  flex grow flex-col items-center justify-center gap-4">
        <Identicon blocks={blocks} glow={glow} />
        <Username username={username} onChangeUsername={onChangeUsername} />
        <Sidebar
          vivid={vivid}
          glow={glow}
          toggleVivid={toggleVivid}
          toggleGlow={toggleGlow}
        />
      </main>
      <footer className="flex items-center justify-center p-4 text-gray-500">
        made by js43o
      </footer>
    </div>
  );
}

export default App;
