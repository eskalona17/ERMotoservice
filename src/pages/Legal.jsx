import React from "react"
import { datosEmpresa } from "../assets/data"

const formatearClave = (clave) => {
  // Separar las palabras por mayúsculas y añadir espacios
  return clave
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
}

const Legal = () => {
  return (
    <section className="custom-screen">
      <div className="space-y-5">
        <h1 className="text-primary-700 text-2xl font-semibold text-center mb-10">
          Aviso legal
        </h1>
        <p className="text-secondary-800">
          En cumplimiento con el deber de información recogido en artículo 10 de
          la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y del Comercio Electrónico, a continuación se reflejan los
          siguientes datos:
        </p>
        <ul className="space-y-3">
          {Object.entries(datosEmpresa).map(([clave, valor]) => (
            <li key={clave}>
              <span className="text-primary-800 font-semibold">
                {formatearClave(clave)}:
              </span>{" "}
              <span className="text-secondary-800">{valor}</span>
            </li>
          ))}
        </ul>
        <p className="text-secondary-800">
          ERMotoservice no se hace responsable del contenido de los sitios web a
          los que pueda accederse a través de los enlaces establecidos en su
          página web y declara que en ningún caso procederá a examinar o
          ejercitar ningún tipo de control sobre el contenido de otros sitios de
          la red.
        </p>
        <p className="text-secondary-800">
          Con los límites establecidos en la ley, ERMotoservice no asume ninguna
          responsabilidad derivada de la falta de veracidad, integridad,
          actualización y precisión de los datos o informaciones que se
          contienen en sus páginas de Internet. Los contenidos e información no
          vinculan a ERMotoservice ni constituyen opiniones, consejos o
          asesoramiento legal de ningún tipo pues se trata meramente de un
          servicio ofrecido con carácter informativo y divulgativo.
        </p>
        <p className="text-secondary-800">
          La página de Internet de www.ermotoservice.com puede contener enlaces
          (links) a otras páginas de terceras partes que www.ermotoservice.com
          no puede controlar. Por lo tanto, ERMotoservice no puede asumir
          responsabilidades por el contenido que pueda aparecer en páginas de
          terceros. Los textos, imágenes, sonidos, animaciones, software y el
          resto de contenidos incluidos en este website son propiedad exclusiva
          de ERMotoservice. Cualquier acto de transmisión, distribución, cesión,
          reproducción, almacenamiento o comunicación pública total o parcial,
          debe contar con el consentimiento expreso de ERMotoservice.
        </p>
        <p className="text-secondary-800">
          Asimismo, para acceder a algunos de los servicios que
          ERMotoservice ofrece a través del website deberá proporcionar
          algunos datos de carácter personal. En cumplimiento de lo establecido
          en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo,
          de 27 de abril de 2016, relativo a la protección de las personas
          físicas en lo que respecta al tratamiento de datos personales y a la
          libre circulación de estos datos le informamos que, mediante la
          cumplimentación de los presentes formularios, sus datos personales
          quedarán incorporados y serán tratados en los ficheros de seguridad
          con el fin de poderle prestar y ofrecer nuestros servicios así como
          para informarle de las mejoras del sitio Web.
        </p>
        <p className="text-secondary-800">
          Igualmente, le informamos de la posibilidad de que ejerza los derechos
          de acceso, rectificación, cancelación y oposición de sus datos de
          carácter personal, manera gratuita mediante email a info@ERMotoservice
          o en la dirección Avenida Quiñones 2 PORTAL F 3ºB. 28702, San
          Sebastian De Los Reyes (Madrid), España.
        </p>
      </div>
    </section>
  )
}

export default Legal
