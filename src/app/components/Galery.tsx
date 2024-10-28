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

const ImageGallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Galería de Imágenes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.src} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill // Esta propiedad permite que la imagen ocupe todo el contenedor
              style={{ objectFit: 'cover' }} // Ajusta la imagen al contenedor
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
