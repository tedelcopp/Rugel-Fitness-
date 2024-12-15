import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DrawersProps {
  open: boolean;
  onCloseAction: () => void;
  content: { image: string; content: string; details: string } | null;
}

export default function Drawers({ open, onCloseAction, content }: DrawersProps) {
  return (
    <Dialog open={open} onClose={onCloseAction} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto relative w-screen max-w-md transform transition">
              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                <button
                  type="button"
                  onClick={onCloseAction}
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                {content && (
                  <>
                    <div className="px-4 sm:px-6">
                      <DialogTitle className="text-lg font-medium text-gray-900">{content.content}</DialogTitle>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 space-y-4">
                      <img src={content.image} alt={content.content} className="rounded-lg w-full h-auto" />
                      <p className="text-gray-700 text-base">{content.details}</p>
                    </div>
                  </>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
