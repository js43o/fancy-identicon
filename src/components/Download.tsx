import DownloadIcon from '~/assets/download.svg?react';

export function Download() {
  return (
    <button className="flex items-center justify-center rounded-full border border-gray-400 bg-gray-600 p-1">
      <DownloadIcon width={24} height={24} className="fill-gray-50" />
    </button>
  );
}
