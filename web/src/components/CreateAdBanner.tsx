import * as Dialog from '@radix-ui/react-dialog';

import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-duo-gradient self-stretch rounded-lg mt-8 overflow-hidden">
            <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center footerBreakePoint:grid footerBreakePoint:justify-center footerBreakePoint:gap-5">
            <div className="footerBreakePoint:grid gap-3 ">
                <strong className="block text-2xl text-white font-black">
                Não encontrou seu duo?
                </strong>
                <span className="block text-zinc-400">
                Publique um anúncio para encotrar novos players!
                </span>
            </div>
            <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded-md flex items-center gap-3 footerBreakePoint:justify-center">
                <MagnifyingGlassPlus size={24} />
                Publicar anúncio
            </Dialog.Trigger>
            </div>
        </div>
    );
}