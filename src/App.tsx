import { useEffect, useState } from 'react';
import { Username } from '~/components';
import md5 from 'crypto-js/md5';

function App() {
  const [username, setUsername] = useState('');
  const [blocks, setBlocks] = useState([...Array(15).map(() => 0)]);

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (!username) {
      setBlocks([...Array(15).map(() => 0)]);
      return;
    }

    const hash = Array.from(md5(username).toString());
    setBlocks(
      hash
        .slice(0, 15)
        .map((char, idx) => char.charCodeAt(0) + hash[idx + 15].charCodeAt(0))
        .map((char) => char % 2)
    );
  }, [username]);

  return (
    <div className="flex h-full w-full flex-col bg-slate-800 font-pretendard text-gray-50">
      <header className="flex justify-between p-4 ">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined">deployed_code</span>
          <span className="font-neoDunggeunmo">FancyIdenticon</span>
        </div>
        <a href="https://github.com/js43o/fancy-identicon">
          <img src="/github.svg" alt="github" width="24" height="24" />
        </a>
      </header>
      <main className="flex grow flex-col items-center justify-center gap-2">
        <section className="grid h-80 w-80 grid-flow-col grid-cols-5 grid-rows-5">
          {[...blocks, ...blocks.slice(5, 10), ...blocks.slice(0, 5)].map(
            (block, index) => (
              <div
                key={index}
                className={`h-full w-full${block ? ' bg-gray-50' : ''}`}
              />
            )
          )}
          {}
        </section>
        <Username username={username} onChangeUsername={onChangeUsername} />
      </main>
      <footer className="flex items-center justify-center p-4 text-gray-500">
        made by js43o
      </footer>
    </div>
  );
}

export default App;
