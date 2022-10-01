import '../styles/ComplexHovers.css';

interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner({bannerUrl, title, adsCount}: GameBannerProps) {
    return (
        <a href="#" className="relative overflow-hidden">
          <img src={bannerUrl} alt="" className="rounded-lg" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0 rounded-lg">
            <strong className="font-bold text-white block">{title}</strong>
            <span className="text-sm text-zinc-500 block">{adsCount} anúncio(s)</span>
          </div>
        </a>
    );
}