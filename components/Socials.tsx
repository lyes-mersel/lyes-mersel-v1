import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa";

const links = [
  { name: <FaGithub />, path: "https://github.com/lyes-mersel" },
  { name: <FaLinkedin />, path: "https://www.linkedin.com/in/lyes-mersel" },
  { name: <FaTwitter />, path: "https://x.com/lyes_mersel" },
  { name: <FaInstagram />, path: "https://www.instagram.com/lyes_mersel" },
  {
    name: <FaHackerrank />,
    path: "https://www.hackerrank.com/profile/lyes_mersel",
  },
];

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
