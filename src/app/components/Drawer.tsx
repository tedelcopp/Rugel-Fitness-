import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DrawersProps {
  open: boolean;
  onCloseAction: () => void;
  content: { 
    name: string;
    image: string; 
    content: string; 
    details: string; 
    whatsappMessage: string;
  } | null;
}

export default function Drawers({ open, onCloseAction, content }: DrawersProps) {
  if (!content) return null;

  const { name, image, content: drawerContent, details, whatsappMessage } = content;
  const whatsappBaseURL = 'https://wa.me/5491234567890'; 

  return (
<Dialog open={open} onClose={onCloseAction} className="relative z-50">
  <DialogBackdrop
    className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300"
  />
  <div className="fixed inset-0 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <DialogPanel
          className={`pointer-events-auto relative w-screen max-w-md h-full bg-white shadow-xl transition-transform duration-1000 ease-in-out transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <TransitionChild>
            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
              <button
                type="button"
                onClick={onCloseAction}
                className="rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          <div className="flex h-full flex-col overflow-y-scroll py-6">
            <div className="px-6 sm:px-8">
              <DialogTitle className="text-2xl font-bold leading-6 text-indigo-600 border-b pb-2">
                {name}
              </DialogTitle>
            </div>

            <div className="relative mt-0 flex-1 px-6 sm:px-8">
              <p className="text-gray-800 text-lg leading-relaxed mt-0 mb-1">{drawerContent}</p>

              {image && (
                <img
                  src={image}
                  alt="Content Image"
                  className="w-full h-auto mb-6 rounded-lg shadow-md border border-gray-200"
                />
              )}

              <p className="text-base text-gray-800 leading-relaxed font-medium mt-2 mb-4">{details}</p>

              <div className="flex justify-center mt-8">
                <a
                  href={`${whatsappBaseURL}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white bg-green-500 hover:bg-green-600 rounded-lg py-3 px-6 text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <span className="mr-2">Ir a WhatsApp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8c0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.188.313 2.292.852 3.214l-1.516 3.041c-.05.1-.027.219.055.31.086.094.217.12.332.064l3.359-1.678A5.951 5.951 0 0110 14c3.314 0 6-2.686 6-6z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </div>
  </div>
</Dialog>
  );
}
