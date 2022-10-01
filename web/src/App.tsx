import { FormEvent, useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { FormModal } from './components/FormModal';

import LogoImg from './assets/images/Logo.svg';

import axios from 'axios';

import './styles/main.css';
import './styles/AliceCarouselStyles.css'

export interface GamesTypes {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    Ads: number;
  }
}

const staticItems = [
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29307_IGDB-188x250.jpg",
    title: "Path of Exile",
    adsCount: 2,
  },
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg",
    title: "GTA",
    adsCount: 0,
  },
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg",
    title: "Dota 2",
    adsCount: 4,
  },
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg",
    title: "Counter Strike",
    adsCount: 2,
  },
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-188x250.jpg",
    title: "Call of Duty: Modern WarFare II",
    adsCount: 1,
  },
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg",
    title: "Fortnite",
    adsCount: 3,
  },
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    title: "League of Legends",
    adsCount: 5,
  },
  {
    bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    title: "Valorant",
    adsCount: 5,
  },
];

function App() {
  const [games, setGames] = useState<GamesTypes[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then(resp => setGames(resp.data));
  }, []);

  const responsive = {
    0: { items: 3 / 2 },
    360: { items: 2 },
    475: { items: 3 },
    675: { items: 4 },
    800: { items: 6 },
  };

  const items = staticItems.map((game, index) => {
    return (
      <GameBanner key={index} bannerUrl={game.bannerUrl} title={game.title} adsCount={game.adsCount} />
    );
  });

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-3">
      <img src={LogoImg} alt="" />

      <h1 className="text-mainTitleResponsive text-white font-black mt-20">Seu&nbsp;
        <span className="bg-duo-gradient bg-clip-text text-transparent">
          duo
        </span> 
        &nbsp;está aqui.
      </h1>

      <AliceCarousel mouseTracking items={items} responsive={responsive} />

      <Dialog.Root>
        <CreateAdBanner />
        <FormModal games={games} />
      </Dialog.Root>
    </div>
  )
}

export default App
