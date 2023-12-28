function App() {
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
      <main className="grow"></main>
      <footer className="flex items-center justify-center p-4 text-gray-500">
        made by js43o
      </footer>
    </div>
  );
}

export default App;
