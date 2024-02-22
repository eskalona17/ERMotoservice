import { MdMailOutline } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import ContactForm from "./ContactForm"

const Contact = () => {

  return (
      <section id="contact" className="custom-screen flex flex-col items-start md:flex-row-reverse justify-evenly py-4 w-full gap-10">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="mb-16 text-center">
            <h3 className="text-primary-700 mb-3 text-3xl font-semibold">
              Contacta con nosotros
            </h3>
            <small className="text-primary-500">
              Te contestaremos lo antes posible
            </small>
          </div>

          <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-center gap-10 w-full lg:items-start">
            <div className="flex flex-col justify-center items-center py-5 lg:py-0">
              <div className="flex gap-x-5 w-64 items-center cursor-pointer mb-5">
                <span>
                  <MdMailOutline size={24} style={{ color: "#378dc0" }}/>
                </span>
                <p className="text-primary-500 font-semibold">info@ermotoservice.com</p>
              </div>
              <div className="flex gap-x-5 w-64 items-center cursor-pointer">
                <span>
                  <FaPhone size={22} style={{ color: "#378dc0" }}/>
                </span>
                <p className="text-primary-500 font-semibold">+34 639 134 295</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
  )
}

export default Contact
