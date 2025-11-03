import React from "react";
import '../styles/App.css';
import FaqItems from '../components/FaqItems';

const listFaq = [
    {
      id: "01",
      title: "¿Cómo realizo una compra en la tienda?",
      content: "Para comprar en nuestra tienda: 1) Regístrate o inicia sesión en tu cuenta, 2) Navega por nuestras categorías o usa la barra de búsqueda, 3) Haz clic en 'Agregar al carrito' en los libros que te interesen, 4) Ve a tu carrito de compras y selecciona 'Proceder al pago', 5) Elige tu método de pago y completa la información requerida. Recibirás un email de confirmación con los detalles de tu compra y los links de descarga inmediatamente después del pago."
    },
    {
      id: "02", 
      title: "¿Qué formatos de libro digital ofrecen?",
      content: "Ofrecemos libros en los siguientes formatos: EPUB (compatible con la mayoría de lectores), PDF (ideal para libros con diseño complejo), MOBI (compatible con Kindle) y AZW3 (para dispositivos Amazon más recientes). Al comprar un libro, puedes descargarlo en todos los formatos disponibles. Recomendamos EPUB para una experiencia de lectura óptima en dispositivos móviles y tablets."
    },
    {
      id: "03",
      title: "¿Puedo leer los libros en cualquier dispositivo?",
      content: "¡Sí! Nuestros libros son multiplataforma. Puedes leerlos en: - Teléfonos y tablets (iOS y Android) usando apps como Google Play Books, Apple Books o Kindle - Computadoras con software como Adobe Digital Editions o Calibre - Lectores de ebooks dedicados (Kindle, Kobo, etc.) - Navegadores web a través de nuestro lector online. Tu cuenta sincroniza tu biblioteca y progreso de lectura entre todos tus dispositivos."
    },
    {
      id: "04",
      title: "¿Qué métodos de pago aceptan?",
      content: "Aceptamos: Tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal, transferencias bancarias, Google Pay, Apple Pay y criptomonedas seleccionadas (Bitcoin, Ethereum). Todos los pagos son procesados a través de gateways seguros con encriptación SSL. No almacenamos información de tu tarjeta de crédito en nuestros servidores."
    },
    {
      id: "05",
      title: "¿Ofrecen reembolsos?",
      content: "Sí, ofrecemos reembolsos dentro de los 14 días posteriores a la compra en los siguientes casos: - Error en la descarga o archivo corrupto - Compra accidental duplicada - El libro no coincide con la descripción - Problemas técnicos que impiden la lectura. Para solicitar un reembolso, contacta a nuestro equipo de soporte con tu número de orden y el motivo de la solicitud. Los reembolsos se procesan en un plazo de 3-5 días hábiles."
    },
    {
      id: "06",
      title: "¿Cómo funciona el programa de membresía premium?",
      content: "Nuestra membresía premium ofrece: - Acceso ilimitado a más de 50,000 títulos en nuestro catálogo - Descargas mensuales de 10 libros para mantener permanentemente - Descuento del 20% en compras individuales - Acceso anticipado a nuevos lanzamientos - Biblioteca personal de préstamos con hasta 5 libros simultáneos - Sincronización multicloud. El costo es de $9.99 mensuales o $99 anuales (ahorra 2 meses). Puedes cancelar en cualquier momento."
    },
    {
      id: "07",
      title: "¿Puedo compartir los libros que compro?",
      content: "Los libros digitales están protegidos por derechos de autor y DRM (Gestión de Derechos Digitales). Puedes: - Leerlos en hasta 6 dispositivos asociados a tu cuenta - Hacer copias de seguridad personales - Imprimir hasta el 10% del contenido para uso personal. No puedes: - Distribir copias a otras personas - Vender o alquilar los archivos - Publicar el contenido en internet. El préstamo entre usuarios está disponible para títulos seleccionados por 14 días."
    },
    {
      id: "08",
      title: "¿Qué hago si tengo problemas para descargar un libro?",
      content: "Si experimentas problemas de descarga: 1) Verifica tu conexión a internet, 2) Asegúrate de tener espacio suficiente en tu dispositivo, 3) Intenta con un navegador diferente, 4) Revisa que no tengas extensiones de bloqueo de descargas. Si el problema persiste: - Ve a 'Mi Biblioteca' en tu cuenta - Haz clic en 'Reenviar enlaces de descarga' - Contacta a soporte técnico incluyendo tu número de orden y capturas de pantalla del error. Respondemos en menos de 24 horas."
    },
    {
      id: "09",
      title: "¿Agregan nuevos títulos regularmente?",
      content: "¡Absolutamente! Actualizamos nuestro catálogo semanalmente con: - Lanzamientos nuevos cada martes - Clásicos reeditados digitalmente - Obras independientes y de autores emergentes - Contenido exclusivo y ediciones especiales. Puedes suscribirte a nuestro newsletter para recibir notificaciones de nuevos lanzamientos en tus géneros favoritos. También tenemos un programa de solicitudes donde los usuarios pueden votar por libros que les gustaría ver en la tienda."
    },
    {
      id: "10",
      title: "¿Ofrecen descuentos para compras al por mayor?",
      content: "Sí, tenemos programas especiales para: - Instituciones educativas (escuelas, universidades) - Bibliotecas públicas y digitales - Empresas para programas de desarrollo profesional - Clubes de lectura y grupos organizados. Los descuentos varían según el volumen y pueden llegar hasta el 40% para pedidos grandes. Contacta a nuestro equipo corporativo en ventas@tiendalibros.com para recibir una cotización personalizada y acceso a nuestro catálogo institucional."
    }

]

const Faq = (props) => (
    <>
        <section className="py-5">
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="text-center mb-3 mb-lg-5">
                        <h3 className="green-color bold"><strong>{props.nombre}</strong></h3>
                    </div>
                    {listFaq.map((items) => (
                        <FaqItems
                            key={items.id}
                            id={items.id}
                            title={items.title}
                            content={items.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    </>
)

export default Faq;