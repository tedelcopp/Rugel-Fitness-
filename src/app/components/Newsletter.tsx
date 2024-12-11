import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'







export default function Newsletter() {

  function classNames(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div  className={classNames(
    "relative isolate -mt-10 px-6 py-16 sm:py-20 lg:px-8 transition-colors duration-500",
    "bg-[#4A966F] dark:bg-[#838683]"
  )}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white ">
              Subscribite a nuestro NewsLetter
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Mantenete al día con las últimas novedades, consejos y artículos exclusivos de nuestro equipo. Nuestra misión es brindarte contenido de valor para que sigas avanzando y descubriendo todo lo que tenemos para ofrecerte.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only ">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Ingresa tu correo electrónico.."
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-gray-100 dark:bg-gray-700 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6  "
                />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 dark:hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-xl"
                >
                Subscribite
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
            <div className="rounded-md bg-[#6366F1] dark:bg-gray-700 p-2">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white dark:text-white" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900 dark:text-white text-xl">Artículos Mensuales</dt>
              <dd className="mt-2 leading-7 text-gray-700 dark:text-gray-400">
              Recibi cada mes contenido exclusivo y detallado que cubre temas de actualidad, tendencias y consejos prácticos. Nos enfocamos en brindarte información de calidad que puedas aplicar en tu vida.
              </dd>
            </div>
            <div className="flex flex-col items-start">
            <div className="rounded-md bg-[#6366F1] dark:bg-gray-700 p-2">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white dark:text-white" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900 dark:text-white text-xl">Sin Spam</dt>
              <dd className="mt-2 leading-7 text-gray-700 dark:text-gray-400">
              Nos comprometemos a enviarte solo lo esencial, sin correos innecesarios, para que te mantengas informado sin spam.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
