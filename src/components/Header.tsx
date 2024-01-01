import GithubIcon from '~/assets/github.svg?react';
import CubeIcon from '~/assets/cube.svg?react';

type HeaderProps = {
  theme: 'light' | 'dark' | 'cube';
};

export function Header({ theme }: HeaderProps) {
  return (
    <header className="flex justify-between p-4 ">
      <div className="flex items-center gap-1">
        <CubeIcon
          width={24}
          height={24}
          className={theme === 'light' ? 'fill-gray-800' : 'fill-gray-50'}
        />
        <span className="font-neoDunggeunmo">FancyIdenticon</span>
      </div>
      <a href="https://github.com/js43o/fancy-identicon">
        <GithubIcon
          width={24}
          height={24}
          className={theme === 'light' ? 'fill-gray-800' : 'fill-gray-50'}
        />
      </a>
    </header>
  );
}
