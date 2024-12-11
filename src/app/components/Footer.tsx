const Footer = () => {
  return (
    <footer  className="relative isolate overflow-hidden py-20 sm:py-24 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-6 text-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-white text-xxl font-semibold">Rugel Fitness</span>
          </div>
          <p className="mt-2 text-sm sm:text-xl">
            Making the world a better place through constructing elegant hierarchies.
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-10 mb-6 ">
          <a href="#about" className="hover:text-white text-sm sm:text-xl">
           Sobre Mi
          </a>
          <a href="#plans" className="hover:text-white text-sm sm:text-xl">
            Planes de Entrenamiento
          </a>
          <a href="#header" className="hover:text-white text-sm sm:text-xl">
            Entrenemos
          </a>
          <a href="#contact" className="hover:text-white text-sm sm:text-xl">
            Contacto
          </a>
        </nav>

        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-white">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-0.733 0-1.325 0.592-1.325 1.325v21.351c0 0.733 0.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.464 0.099 2.795 0.143v3.24l-1.919 0.001c-1.505 0-1.796 0.715-1.796 1.763v2.311h3.589l-0.467 3.622h-3.122v9.294h6.116c0.733 0 1.325-0.591 1.325-1.324v-21.351c0-0.733-0.592-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-white">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584 0.013 4.85 0.07 1.366 0.063 2.633 0.36 3.608 1.335 0.975 0.975 1.272 2.242 1.335 3.608 0.057 1.266 0.07 1.646 0.07 4.85s-0.013 3.584-0.07 4.85c-0.063 1.366-0.36 2.633-1.335 3.608-0.975 0.975-2.242 1.272-3.608 1.335-1.266 0.057-1.646 0.07-4.85 0.07s-3.584-0.013-4.85-0.07c-1.366-0.063-2.633-0.36-3.608-1.335-0.975-0.975-1.272-2.242-1.335-3.608-0.057-1.266-0.07-1.646-0.07-4.85s0.013-3.584 0.07-4.85c0.063-1.366 0.36-2.633 1.335-3.608 0.975-0.975 2.242-1.272 3.608-1.335 1.266-0.057 1.646-0.07 4.85-0.07zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 15.462c-1.91 0-3.462-1.552-3.462-3.462s1.552-3.462 3.462-3.462 3.462 1.552 3.462 3.462-1.552 3.462-3.462 3.462z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-white">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495.998.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.236-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.48 11.48 0 013.003-.403c1.018.004 2.044.137 3.003.403 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.61-2.803 5.623-5.475 5.92.429.371.823 1.102.823 2.222v3.293c0 .321.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <p className="text-center text-xs sm:text-xl text-white dark:text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} | Rugel Fitness. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
