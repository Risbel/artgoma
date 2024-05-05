import { Facebook, InstagramIcon, Mail, YoutubeIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 py-16">
      <div className="flex items-center justify-center space-x-4">
        <a target="_blank" rel="noopener noreferrer" href="mailto:info@artgoma.com">
          <Mail className="text-white h-6 w-6" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/theartgomagallery">
          <Facebook className="text-white h-6 w-6" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/theartgomagallery">
          <InstagramIcon className="text-white h-6 w-6" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@ArtGoMA">
          <YoutubeIcon className="text-white h-6 w-6" />
        </a>
      </div>
      <div className="text-center text-sm mt-4">© 2023 GOMA ALL RIGHTS RESERVED</div>
      <div className="text-center font-bold mt-2">WWW.ARTGOMA.COM</div>
    </footer>
  );
};

export default Footer;
