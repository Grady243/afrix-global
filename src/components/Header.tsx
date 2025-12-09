import { Button } from "@/components/ui/button";
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="bg-blue-500 w-full h-[35px]  flex items-center justify-end space-x-3 px-[20px]" >
        <FaTwitter className="text-gray-300 text-2xl hover:text-white cursor-pointer transition O.5s ease" />
        <FaFacebookSquare className="text-gray-300 text-2xl hover:text-white cursor-pointer transition O.5s ease" />
        <FaLinkedin className="text-gray-300 text-2xl hover:text-white cursor-pointer transition O.5s ease" />
        <FaInstagramSquare className="text-gray-300 text-2xl hover:text-white cursor-pointer transition O.5s ease" />
        <FaYoutube className="text-gray-300 text-2xl hover:text-white cursor-pointer transition O.5s ease" />
      </div>
      <nav className="bg-black w-full h-[5Opx] flex items-center justify-between px-6">
        <img src="./../afrix.png" width="150px" className="object-contain" />
        <ul className="flex space-x-12 text-white text-lg">
          <li>
            <a href="" className="hover:text-blue-500 transition-transform duration-200 hover:scale-105 inline-block">Acceuil</a>
          </li>
          <li>
            <a href="" className="hover:text-blue-500 transition-transform duration-200 hover:scale-105 inline-block">Equipe</a>
          </li>
          <li>
            <a href="" className="hover:text-blue-500 transition-transform duration-200 hover:scale-105 inline-block">Services</a>
          </li>
          <li>
            <a href="" className="hover:text-blue-500 transition-transform duration-200 hover:scale-105 inline-block">Formations</a>
          </li>
          <li>
            <a href="" className="hover:text-blue-500 transition-transform duration-200 hover:scale-105 inline-block">Blog</a>
          </li>
          <li>
            <a href="" className="hover:text-blue-500 transition-transform duration-200 hover:scale-105 inline-block">Contact</a>
          </li>
        </ul>
        <Button size="lg" className="text-lg px-8 py-6 bg-blue-500">
          Inscris-toi
        </Button>
      </nav>
    </header>
  );
}
