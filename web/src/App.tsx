import { useEffect, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { FormModal } from './components/FormModal';

import LogoImg from './assets/images/Logo.svg';

import axios from 'axios';

import './styles/main.css';

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

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 px-3">
      <img src={LogoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu&nbsp;
        <span className="bg-duo-gradient bg-clip-text text-transparent">
          duo
        </span> 
        &nbsp;está aqui.
      </h1>

      <Swiper
        className="w-full mt-16"
        modules={[Navigation, A11y]}
        slidesPerView={6}
        navigation
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          games.map(game => {
            return (
              <SwiperSlide className="flex justify-center">
                <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.Ads} />
              </SwiperSlide>
            );
          })
        }
      </Swiper>

      <Dialog.Root>
        <CreateAdBanner />
        <FormModal games={games} />
      </Dialog.Root>
    </div>
  )
}

export default App
