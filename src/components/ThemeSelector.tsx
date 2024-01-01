import SunIcon from '~/assets/sun.svg?react';
import MoonIcon from '~/assets/moon.svg?react';
import CubeIcon from '~/assets/cube.svg?react';

type ThemeSelectorProps = {
  theme: 'light' | 'dark' | 'cube';
  onSelectTheme: (newTheme: 'light' | 'dark' | 'cube') => void;
};

export function ThemeSelector({ theme, onSelectTheme }: ThemeSelectorProps) {
  return (
    <ul className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-400 bg-gray-600">
      <li
        onClick={() => onSelectTheme('light')}
        className={`p-1.5 transition-colors ${
          theme === 'light' ? 'bg-gray-50' : ''
        }`}
      >
        <SunIcon
          width={24}
          height={24}
          className={`transition-colors ${
            theme === 'light' ? 'fill-gray-800' : 'fill-gray-50'
          }`}
        />
      </li>
      <li
        onClick={() => onSelectTheme('dark')}
        className={`p-1.5 transition-colors ${
          theme === 'dark' ? 'bg-gray-50' : ''
        }`}
      >
        <MoonIcon
          width={24}
          height={24}
          className={`transition-colors ${
            theme === 'dark' ? 'fill-gray-800' : 'fill-gray-50'
          }`}
        />
      </li>
      <li
        onClick={() => onSelectTheme('cube')}
        className={`p-1.5 transition-colors ${
          theme === 'cube' ? 'bg-gray-50' : ''
        }`}
      >
        <CubeIcon
          width={24}
          height={24}
          className={`transition-colors ${
            theme === 'cube' ? 'fill-gray-800' : 'fill-gray-50'
          }`}
        />
      </li>
    </ul>
  );
}