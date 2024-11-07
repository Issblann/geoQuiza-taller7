import whatsapp from '../../assets/icons/whatsapp.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';

function Footer() {
  return (
    <footer className="w-full justify-center">
      <div className="col-12 text-center p-6 w-full">
        <p className="mb-4">Nuestras redes sociales</p>
        <ul className="flex items-center w-full justify-center mb-4">
          <li className="mx-4 p-2 text-center footer_icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="instagram"
                className="img-fluid"
                style={{ width: '24px', height: '24px', color: 'black' }}
              />
            </a>
          </li>
          <li className="mx-4 p-2 text-center footer_icons">
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                alt="whatsapp"
                className="img-fluid"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
          </li>
          <li className="mx-4 p-2 text-center footer_icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="facebook"
                className="img-fluid"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
          </li>
        </ul>
        <ul className="flex justify-center list-unstyled mb-4 flex-col md:flex-row">
          <li className="mx-5">
            <a href="" className="text-decoration-none text-dark">
              Trivia
            </a>
          </li>
          <li className="mx-5">
            <a href="" className="text-decoration-none text-dark">
              Mapa
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 text-center py-3">
        <p className="mb-0">© 2024 Geo Quizza. Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
