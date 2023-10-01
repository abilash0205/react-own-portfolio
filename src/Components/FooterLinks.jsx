import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const FooterLinks = () => {

    const links = [
        {
          id: 1,
          child: <FaLinkedin size={40} />,
          href: "https://linkedin.com/in/abilash-raman",
        },
        {
          id: 2,
          child: <FaGithub size={40} />,
          href: "https://github.com/abilash0205/",
        },
        {
          id: 3,
          child: <HiOutlineMail size={40} />,
          href: "mailto:abilashraman2@gmail.com",
        },
        {
          id: 4,
          child: <BsFillPersonLinesFill size={40} />,
          href: "/Abilash Raman Resume.pdf",
          download: true,
        },
      ];

  return (
    <footer className="flex justify-center w-full bg-gradient-to-b from-gray-800 to-gray-800 p-4 text-white">
          {links.map(({ id, child, href, download }) => (
            <a
              href={href}
              className="px-5 lg:hidden"
              download={download}
              target="_blank"
              rel="noreferrer"
              key={id}
            >
              {child}
            </a>
          ))}
        </footer>
  )
}

export default FooterLinks