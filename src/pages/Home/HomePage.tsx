import { Button } from "@/components/ui/button";
import "./HomePage.css";
import { HomeCarousel } from "@/components/HomeCarousel/HomeCarousel";

const HomePage = () => {
  const handleClick = () => {
    window.open("https://wa.me/message/ZQ6K6BTQIEXLG1", "_blank");
  };

  const collaresImages: string[] = [
    "https://acdn.mitiendanube.com/stores/002/054/772/products/20220711_160259_00001-9defb99368686cb62716575770908026-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/picsart_22-02-24_10-10-24-30811-94c9405fd0b2653f8d17087232637486-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/20220711_161513_00001-c2d1ab5cbeb8030bf516575769999889-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/picsart_22-02-24_10-16-07-28411-640-0-5cb38ac429b2eeaa8016770101429706-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/20220711_164128_00001-4cd17534c60b87494816575773139391-320-0.webp",
  ];

  const aretesImages: string[] = [
    "https://acdn.mitiendanube.com/stores/002/054/772/products/20220225_10343111-c8068e820a79d03db616460752790500-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/dsc07495-21-d8bd11a618d711748316904750843100-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/podubswy-1a7e174a27e0e92ea117170193060854-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/ls2ykuoe-70eb039f614a3bfe1217170108857498-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/dsc077591-f5899c78584448913e16917000938114-320-0.webp",
  ];

  const anillosImages: string[] = [
    "https://acdn.mitiendanube.com/stores/002/054/772/products/ref-an75-87c6a66eaef6688dd617201372207573-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/ref-an196-d3d984e5e0abe7ef8a17196172998129-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/an192-anillo-solitario-esmeralda-tallado-bj-eacf75228531d1cd5517196150700977-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/ref-an206-82be7f38a3c688bf7817196142486774-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/ref-an164-7490c2768b4d067c7817201312561717-320-0.webp",
  ];

  return (
    <>
      <div id="homePageC" className="pb
      -20">
        <section className="mt-20 h-max homeSection flex overflow-hidden flex-col">
          <div
            id="banner"
            className="relative h-max w-screen bg-cover bg-no-repeat bg-center"
          >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="relative z-20 flex flex-col justify-center text-center items-center h-full gap-5">
              <h1 className="text-5xl text-white">Joyas El Padrino</h1>
              <h1 className="text-xl text-white">
                Elegancia y Calidad en cada Detalle
              </h1>
              <h3 className="text-xl text-white">
                Creaciones personalizadas que reflejan tu estilo y esencia.
                Encuentra la joya perfecta, hecha a la medida para ti.
              </h3>
              <Button id="buttonHome" onClick={handleClick}>
                Consigue la Tuya
              </Button>
            </div>
          </div>
        </section>
        <section className="homeSection text-white">
          <h1 className="text-center text-4xl my-20">
            Encuentra lo que estás buscando
          </h1>
          <div className="m-14 flex justify-between ">
            <img
              src="https://d2r9epyceweg5n.cloudfront.net/stores/002/054/772/rte/20240223_124936.jpg"
              alt="rosario"
              width={300}
              className="homeImage rounded-md"
            />
            <img
              src="https://acdn.mitiendanube.com/stores/002/054/772/products/20220328_1725461-c076b748700663bfcf16486712634388-320-0.webp"
              alt="pulsera balin"
              width={300}
              className="homeImage rounded-md"
            />
            <img
              src="https://acdn.mitiendanube.com/stores/002/054/772/products/videocapture_20240604-1108211-228b25b4bd9d8530a817175175951932-320-0.webp"
              alt="tobillera"
              width={300}
              className="homeImage rounded-md"
            />
          </div>
          <h1 className="text-center text-4xl my-20">Collares</h1>
          <div className="flex justify-center">
            <HomeCarousel images={collaresImages} />
          </div>
          <h1 className="text-center text-4xl my-20">Aretes</h1>
          <div className="flex justify-center">
            <HomeCarousel images={aretesImages} />
          </div>
          <h1 className="text-center text-4xl my-20">anillos</h1>
          <div className="flex justify-center">
            <HomeCarousel images={anillosImages} />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
