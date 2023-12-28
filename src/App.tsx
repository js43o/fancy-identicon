import { useState } from 'react';
import { Username } from '~/components';

function App() {
  const [username, setUsername] = useState('');

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

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
        <section className="flex h-1/2 w-1/2 items-center justify-center">
          [image]
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
