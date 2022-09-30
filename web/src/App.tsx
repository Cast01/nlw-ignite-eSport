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

function App() {
  const [games, setGames] = useState<GamesTypes[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games")
      .then(resp => setGames(resp.data));
  }, []);

  const responsive = {
      800: { items: 6 },
  };

  const items = games.map(game => {
    return (
      <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.Ads} />
    );
  });

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-3">
      <img src={LogoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu&nbsp;
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
