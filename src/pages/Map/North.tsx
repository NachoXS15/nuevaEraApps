import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowBack, LeftArrowIcon, RightArrowIcon } from "../../components/Icons";
import MapInfo from "../../config/MapInfo";
import logo from '../../assets/logo1.webp'

export default function North() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDep, setCurrentDep] = useState(0)
  const northBlock = MapInfo.filter(dep => dep.region === "Norte");

  const handlePrev = () => {
    setCurrentDep((prevIndex) => (prevIndex === 0 ? northBlock.length - 1 : prevIndex - 1));
    console.log(currentDep);

  };
  const handleNext = () => {
    setCurrentDep((prevIndex) => (prevIndex === northBlock.length - 1 ? 0 : prevIndex + 1));
    console.log(currentDep);
  };

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImgIndex((prevIndex) => {
          const currentImages = northBlock[currentDep].img;
          return prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1;
        });
      }, 500);
    }, 3500); 

    return () => clearInterval(interval);
  }, [currentDep, northBlock]);

  return (
    <div className="w-full min-h-screen flex justify-center flex-col">
      <header className="w-full h-20 bg-red-lr flex">
        <div className="flex items-center gap-2 pl-20">
          <NavLink to="/map">
            <ArrowBack />
          </NavLink>
          <h2 className="text-3xl font-medium text-white">VOLVER</h2>
        </div>
      </header>
      <section className="w-full h-fit mt-20 flex items-center justify-center px-20">
        <img src="/assets/map/mapNorth.png" onClick={openModal} className="cursor-pointer" width={500} alt="" />
        <div className="flex flex-col items-end">
          <img src="/assets/map/logos/northColor.png" width={300} alt="" />
          <h2 className="text-end text-3xl mb-10 font-semibold text-gray-500">La Rioja Capital // Sanagasta // Castro Barros <br /> // Arauco // San Blas de Los Sauces</h2>
          <p className="w-11/12">Este recorrido por los departamentos de Capital, Sanagasta, Castro Barros, Arauco y San Blas de los Sauces ofrece la oportunidad de explorar siglos de tradición, historia y cultura originaria. Además de conectar con la naturaleza y la aventura, se pueden descubrir huellas de dinosaurios en el Parque de Dinosaurios. A lo largo del camino, se encuentran pueblos pintorescos con antiguas casonas coloniales y campos frutales, en un entorno de clima agradable y paisajes únicos. La región se destaca por sus sabores auténticos en vinos, dulces y productos artesanales, así como por sus museos, capillas y senderos religiosos como el Señor de la Peña, que reflejan vivas tradiciones locales.</p>
        </div>
      </section>
      <h2 className="text-2xl pt-5 pl-40">Click en el Mapa para más información</h2>

      {isModalOpen && (
        <>
          <button className="w-20 h-20 absolute right-10 top-10 text-6xl text-white border-2 border-white rounded-full select-none cursor-pointer z-50" onClick={closeModal}>
            X
          </button>
          <div className="w-5/6 h-[600px] rounded-3xl m-auto overflow-hidden fixed inset-0 z-50 outline-none bg-white">
            <div className="sm:hidden md:absolute md:inset-0 md:flex md:items-center md:justify-between md:px-4 md:z-10">
              <button onClick={handlePrev} className="p-2 shadow cursor-pointer bg-white rounded-full hover:bg-opacity-100">
                <LeftArrowIcon />
              </button>
              <button onClick={handleNext} className="p-2 shadow cursor-pointer bg-white rounded-full hover:bg-opacity-100">
                <RightArrowIcon />
              </button>
            </div>

            {/* Contenedor de las diapositivas */}
            <div className="h-full w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentDep * 100}%)` }}>
              {northBlock.map((dep, index) => (
                <div key={index} className="w-full flex-shrink-0 flex items-center justify-around text-white gap-10 px-20 relative">
                  {/* Carrusel de imágenes con desplazamiento suave */}
                  <div className="relative w-1/2 h-96 overflow-hidden rounded-2xl">
                    <div
                      className="w-full h-full flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${currentImgIndex * 100}%)` }} // Desplazamiento de las imágenes
                    >
                      
                        <div className="w-full h-full flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${logo})` }}>
                        </div>
                      
                    </div>
                  </div>
                  <div className="w-1/2 text-black text-end">
                    <h2 className="text-5xl font-bold uppercase mb-5">{dep.nameDep}</h2>
                    <p>{dep.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      )}

    </div>
  )
}
