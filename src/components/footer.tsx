export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* LOGO */}
          <div className="flex flex-col items-start">
            <img
              src="/afrix.png"
              alt="Afrix Global"
              className="w-28 mb-4"
            />
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Afrix Global. Tous droits réservés.
            </p>
          </div>

          {/* MENU */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3">Menu</h3>
            <nav className="flex flex-col space-y-2 text-gray-300">
              <a href="#" className="hover:text-white">Accueil</a>
              <a href="#" className="hover:text-white">Équipe</a>
              <a href="#" className="hover:text-white">Services</a>
              <a href="#" className="hover:text-white">Formations</a>
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Contact</a>
            </nav>
          </div>

          {/* ADRESSE */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-3">Adresse</h3>
            <address className="not-italic space-y-1 text-gray-300">
              <p>N°140, Av. La Frontière</p>
              <p>Katindo, Goma</p>
              <p>RDC</p>
            </address>

            <div className="flex items-center mt-4 space-x-4 text-gray-400">
              <a href="#"><i className="ri-facebook-fill text-xl"></i></a>
              <a href="#"><i className="ri-instagram-fill text-xl"></i></a>
              <a href="#"><i className="ri-twitter-x-fill text-xl"></i></a>
              <a href="#"><i className="ri-mail-line text-xl"></i></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
