import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: '/images/Entrenamiento1.png', alt: 'Descripción de la imagen 1' },
  { src: '/images/Entrenamiento2.png', alt: 'Descripción de la imagen 2' },
  { src: '/images/Entrenamiento3.png', alt: 'Descripción de la imagen 3' },
];

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

const ImageGallery: React.FC = () => {
  return (
    <div
      className={classNames(
        "relative isolate -mt-12 px-6 pt-4 pb-16 sm:pt-6 sm:pb-20 lg:px-8 transition-colors duration-500",
        "bg-[#4A966F] dark:bg-[#838683]"
      )}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-7 text-white dark:text-linkDark underline decoration-[#D64D0C] font-compacta"
          style={{ textUnderlineOffset: '12px' }}
        >
          Galeria
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-medium sm:text-xl mb-8 text-textLight dark:text-textDark">
          Elegí un plan accesible con las mejores características para atraer a tu audiencia y aumentar tus ventas.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer" // Agregar cursor-pointer aquí
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
