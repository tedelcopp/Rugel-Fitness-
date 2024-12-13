const Footer = () => {
  return (
    <footer  className="relative isolate overflow-hidden py-10 sm:py-12 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-4 text-center space-y-6">
          <div className="flex items-center space-x-2">
          <span className="text-white text-xxl font-semibold underline decoration-[#D64D0C] decoration-4 decoration-offset-2"
            style={{ textUnderlineOffset: '12px' }} >RUGEL FITNESS</span>
          </div>
          <p className="mt-2 text-sm sm:text-xl">
            Making the world a better place through constructing elegant hierarchies.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-10 mb-4 ">
          <a href="#about" className="hover:text-[#FFFFFF] hover:bg-[#D96727] text-sm sm:text-xl px-2 py-1 rounded">
           Sobre Mi
          </a>
          <a href="#plans" className="hover:text-[#FFFFFF] hover:bg-[#D96727] text-sm sm:text-xl px-2 py-1 rounded">
  Planes de Entrenamiento
</a>
          <a href="#header" className="hover:text-[#FFFFFF] hover:bg-[#D96727] text-sm sm:text-xl px-2 py-1 rounded">
            Entrenemos
          </a>
          <a href="#contact" className="hover:text-[#FFFFFF] hover:bg-[#D96727] text-sm sm:text-xl px-2 py-1 rounded">
            Contacto
          </a>
        </nav>

        <div className="flex justify-center space-x-6">
  <a href="#" className="text-white hover:text-white transform hover:scale-110 transition duration-300 ease-in-out">
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584 0.013 4.85 0.07 1.366 0.063 2.633 0.36 3.608 1.335 0.975 0.975 1.272 2.242 1.335 3.608 0.057 1.266 0.07 1.646 0.07 4.85s-0.013 3.584-0.07 4.85c-0.063 1.366-0.36 2.633-1.335 3.608-0.975 0.975-2.242 1.272-3.608 1.335-1.266 0.057-1.646 0.07-4.85 0.07s-3.584-0.013-4.85-0.07c-1.366-0.063-2.633-0.36-3.608-1.335-0.975-0.975-1.272-2.242-1.335-3.608-0.057-1.266-0.07-1.646-0.07-4.85s0.013-3.584 0.07-4.85c0.063-1.366 0.36-2.633 1.335-3.608 0.975-0.975 2.242-1.272 3.608-1.335 1.266-0.057 1.646-0.07 4.85-0.07zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zM12 15.462c-1.91 0-3.462-1.552-3.462-3.462s1.552-3.462 3.462-3.462 3.462 1.552 3.462 3.462-1.552 3.462-3.462 3.462z" />
      <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
  </a>
  <a href="mailto:tuemail@example.com" className="text-white hover:text-white transform hover:scale-110 transition duration-300 ease-in-out">
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 13.5L0 6V4.5L12 12l12-7.5V6L12 13.5zm0 2.1L0 8.4V18h24V8.4L12 15.6z" />
    </svg>
  </a>
  <a href="https://wa.me/tuNumeroDeTelefono" className="text-white hover:text-white transform hover:scale-110 transition duration-300 ease-in-out">
    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.38 0 0 5.37 0 12a11.9 11.9 0 001.6 6.02L0 24l6.33-1.65A11.86 11.86 0 0012 24c6.63 0 12-5.37 12-12a11.88 11.88 0 00-3.48-8.52zM12 22c-1.57 0-3.1-.37-4.48-1.08l-.33-.17-3.75.98 1-3.63-.19-.34A9.92 9.92 0 012 12c0-5.5 4.5-10 10-10 5.5 0 10 4.5 10 10s-4.5 10-10 10zm5.88-7.1c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.05 1.28-.19.22-.37.24-.7.08-.33-.17-1.4-.52-2.66-1.65-.99-.88-1.65-1.97-1.85-2.3-.2-.33-.02-.5.15-.66.15-.15.33-.4.5-.6.17-.22.22-.33.33-.56.1-.22.05-.42-.03-.59-.08-.16-.74-1.78-1.02-2.43-.27-.66-.55-.57-.74-.57h-.62c-.22 0-.6.08-.91.42-.3.33-1.2 1.18-1.2 2.88s1.23 3.36 1.4 3.6c.17.22 2.42 3.64 5.88 5.1.82.35 1.47.56 1.97.72.83.27 1.6.23 2.2.14.67-.1 2.05-.83 2.34-1.63.29-.81.29-1.5.2-1.63-.1-.15-.3-.23-.62-.4z" />
    </svg>
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;
