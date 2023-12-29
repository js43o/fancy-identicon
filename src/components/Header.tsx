export function Header() {
  return (
    <header className="flex justify-between p-4 ">
      <div className="flex items-center gap-1">
        <span className="material-symbols-outlined">deployed_code</span>
        <span className="font-neoDunggeunmo">FancyIdenticon</span>
      </div>
      <a href="https://github.com/js43o/fancy-identicon">
        <img src="/github.svg" alt="github" width="24" height="24" />
      </a>
    </header>
  );
}
