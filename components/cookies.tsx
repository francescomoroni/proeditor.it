import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Cookies({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-white bg-opacity-60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto animate-fade-in">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="fixed bottom-0 w-full transition transform shadow-2xl bg-gray-300 ">
                <div className="justify-center px-4 py-6 mx-auto space-y-4 text-left sm:w-3/4 ">
                  <p className="font-bold">PRIVACY / COOKIES POLICY</p>
                  <p className="text-xs text-justify sm:text-sm">
                    Questo sito web e gli strumenti di terze parti su questo
                    sito utilizzano cookies necessari al corretto funzionamento
                    dell&apos;esperienza di navigazione. Per ulteriori
                    informazioni dettagliate sulla privacy policy, ti invitiamo
                    a visitare la nostra pagina al link sottostante. Chiudendo
                    questo banner, scorrendo la pagina web, cliccando su un link
                    o navigando il sito in qualsiasi altro modo, dai il tuo
                    consenso alla nostra politica sui cookie.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <Link href="/privacy-policy">
                      <p className="px-2 font-semibold hover:underline">
                        Dettagli
                      </p>
                    </Link>
                    <div className="flex space-x-2 justify-end">
                      <p
                        onClick={() => {
                          setOpen(false);
                        }}
                        className="px-4 py-1 mt-4 text-center text-white bg-black rounded-md cursor-pointer sm:mt-0 hover:underline"
                      >
                        Rifiuta
                      </p>
                      <p
                        onClick={() => {
                          setOpen(false);
                          localStorage.setItem("cookies", "true");
                        }}
                        className="px-4 py-1 mt-4 text-center text-white bg-black rounded-md cursor-pointer sm:mt-0 hover:underline"
                      >
                        Accetta
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
