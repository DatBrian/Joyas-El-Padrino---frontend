import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import "./ServiciosPage.css";

const ServiciosPage = () => {
  const carouselImages = [
    "https://acdn.mitiendanube.com/stores/002/054/772/products/20220225_11365611-d43ae7f38e4fde7b7216460793822638-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/picsart_22-02-23_11-32-06-268111-3e5ae774abb03afb3216460722071491-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/20220328_17302111-4cecdc0527a778f20416486705625398-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/20220614_1541391-4897e7f79ee4d5ea6b16553041249908-320-0.webp",
    "https://acdn.mitiendanube.com/stores/002/054/772/products/imagen-de-whatsapp-2024-06-29-a-las-20-00-26_c19fb3e9-cc2e1f57a28603980117201272112850-320-0.webp",
  ];

  return (
    <main id="services" className="px-4 sm:px-8 lg:px-16">
      <h1
        id="service-title"
        className="font-medium text-3xl sm:text-4xl lg:text-5xl text-center mb-10 sm:mb-20"
      >
        ¿Qué Ofrecemos?
      </h1>
      <div
        id="infoServices"
        className="flex flex-col w-full sm:flex-row gap-10"
      >
        <div className="flex flex-col gap-4 w-full" id="textServices">
          <p>
            En nuestra joyería, nos enorgullece ofrecer una experiencia
            personalizada que se adapta a tus deseos y necesidades. Entendemos
            que cada persona tiene una visión única para sus joyas, por eso,
            nuestro servicio comienza con una conversación contigo. Cuéntanos lo
            que estás buscando y nuestro equipo experto se encargará de
            encontrar un modelo similar o, si lo prefieres, crearemos una pieza
            totalmente personalizada según tus especificaciones.
          </p>
          <p>
            Además, para facilitarte la adquisición de la joya de tus sueños,
            ofrecemos opciones de pago a cuotas. Esto te permite disfrutar de la
            elegancia y el lujo del oro sin preocuparte por el desembolso
            inmediato. La prenda será entregada una vez que finalices los pagos,
            asegurando que cada cliente tenga la oportunidad de poseer una joya
            exquisita con facilidad y comodidad.
          </p>
          <p>
            En nuestra joyería, tu satisfacción y la realización de tus sueños
            son nuestra prioridad. Permítenos ayudarte a encontrar o crear la
            joya perfecta para ti.
          </p>
        </div>
        <div id="carousel" className="flex justify-center w-full sm:w-auto">
          <Carousel
            className="w-full max-w-xs"
            plugins={[Autoplay({ delay: 3000 })]}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {carouselImages.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img
                          src={src}
                          alt={`Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="hidden sm:flex justify-center items-center" />
            <CarouselNext className="hidden sm:flex justify-center items-center" /> */}
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default ServiciosPage;
