import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import md5 from 'crypto-js/md5';
import { Header, Identicon, Username, Sidebar } from '~/components';
import { Theme } from '~/utils';

function App() {
  const [username, setUsername] = useState('');
  const [blocks, setBlocks] = useState([...Array(15).map(() => 0)]);
  const [color, setColor] = useState([0, 0, 0]);
  const [vivid, setVivid] = useState(false);
  const [glow, setGlow] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');
  const identiconRef = useRef<HTMLDivElement | null>(null);

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const onSelectTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const toggleVivid = () => setVivid(!vivid);
  const toggleGlow = () => setGlow(!glow);

  const onCapture = () => {
    console.log(identiconRef);
    if (!identiconRef?.current) {
      console.log('return');
      return;
    }

    html2canvas(identiconRef.current).then((canvas) => {
      console.log(canvas);
    });
  };

  useEffect(() => {
    if (!username) {
      setBlocks([...Array(15).map(() => 0)]);
      return;
    }

    const hash = md5(username).toString();
    setColor([
      parseInt(hash.slice(0, 16), 16) % 360,
      vivid ? 100 : (parseInt(hash.slice(16, 24), 16) % 40) + 30,
      vivid ? 50 : (parseInt(hash.slice(24, 32), 16) % 20) + 60,
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
    <div
      className={`flex h-full w-full flex-col font-pretendard transition-colors ${
        theme === 'light'
          ? 'bg-github-default text-gray-800'
          : 'bg-gray-800 text-gray-50'
      }`}
    >
      <Header theme={theme} />
      <main className="relative flex grow flex-col items-center justify-center gap-4">
        <div ref={identiconRef}>
          <Identicon blocks={blocks} glow={glow} theme={theme} />
        </div>
        <Username username={username} onChangeUsername={onChangeUsername} />
        <Sidebar
          vivid={vivid}
          glow={glow}
          theme={theme}
          toggleVivid={toggleVivid}
          toggleGlow={toggleGlow}
          onSelectTheme={onSelectTheme}
          onCapture={onCapture}
        />
      </main>
      <footer className="flex items-center justify-center p-4 text-gray-400">
        <a href="https://github.com/js43o" aria-label="github profile">
          made by js43o
        </a>
      </footer>
    </div>
  );
}

export default App;
