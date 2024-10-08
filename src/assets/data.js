import detalleFurgo from "../../public/img/detalle_furgo.webp";
import motoPaisaje from "../../public/img/carga_moto.webp";
import furgo1 from "../../public/img/furgo1.webp";

export const navbarItems = [
  {
    id: "home",
    link: "Inicio"
  },
  {
    id: "about",
    link: "Sobre nosotros"
  },
  {
    id: "contact",
    link: "Contacta"
  }
]

export const data = [
  {
    id: 1,
    icon: "security",
    title: "Compromiso con la seguridad",
    description: `La seguridad de tu moto es nuestra máxima prioridad. 
      Empleamos rigurosos protocolos y tecnologías de vanguardia para garantizar que tu 
      moto llegue a salvo a su destino.`,
  },
  {
    id: 2,
    icon: "care",
    title: "Atención personalizada",
    description:
      `Nuestro equipo te ofrece un servicio personalizado y 
      estará contigo en cada paso del camino, asegurándose de 
      que tu moto sea manejada con el máximo cuidado y atención.`
  },
  {
    id: 3,
    icon: "experience",
    title: "Años de experiencia",
    description:
      `Llevamos más de 20 años en el mundo de las motos tanto para 
      su transporte como para su reparación. Nuestra experiencia 
      nos avala dentro del sector. Déjate asesorar por nosotros.`
  }
]

export const about = [
  {
    id: 1,
    image: detalleFurgo,
    description: `En ERMotoservice, no solo transportamos motos, sino que llevamos consigo años de experiencia y amor por el mundo de las dos ruedas. Nuestra dedicación se refleja en cada viaje que realizamos, ofreciendo una atención personalizada que va más allá de tus expectativas.`,
    alt:'detalle de furgoneta'
  },
  {
    id: 2,
    image: motoPaisaje,
    description: `Con una sólida trayectoria en el transporte de motos, 
    hemos perfeccionado cada detalle para asegurarnos de que tu moto llegue 
    a su destino en las mejores condiciones posibles. Cada miembro de nuestro
     equipo comparte la misma pasión que tú, garantizando una experiencia de 
     transporte que va más allá de lo ordinario.`,
     alt:'moto en carretera'
  },
  {
    id: 3,
    image: furgo1,
    description: `Entendemos que tu moto es más que un medio de 
    transporte; es una extensión de tu estilo de vida. Ofrecemos 
    servicios exclusivos diseñados para satisfacer tus necesidades específicas, 
    segurándonos de que tu moto reciba el trato que se merece.`,
    alt: 'detalle de furgoneta'
  },
]

export const datosEmpresa = {
  denominacionSocial: "ERMOTOSERVICE, S.L.",
  nombreComercial: "ERMOTOSERVICE",
  domicilioSocial: "Avenida Quiñones 2 PORTAL F 3ºB. 28702, San Sebastian De Los Reyes (Madrid), España.",
  Nif: "B-56609985",
  telefono: "+34 639 134 295",
  email: "info@ermotoservice.com",
  nombreDominio: "ermotoservice.com"
};
