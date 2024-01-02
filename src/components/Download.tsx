import DownloadIcon from '~/assets/download.svg?react';

type DownloadProps = {
  onCapture: () => void;
};

export function Download({ onCapture }: DownloadProps) {
  return (
    <button
      onClick={onCapture}
      className="flex items-center justify-center rounded-full border border-gray-400 bg-gray-600 p-1"
    >
      <DownloadIcon width={24} height={24} className="fill-gray-50" />
    </button>
  );
}
