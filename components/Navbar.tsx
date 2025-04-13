import { socials } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="wrapper py-8 xl:py-12 flex flex-col md:flex-row items-center justify-between gap-2">
      <Link href="/">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-3xl md:text-4xl font-extrabold text-gradient">
            Blog<span className="text-accent">.</span>
          </p>
          <p className="text-white/60 font-semibold text-sm">
            by Muhammad Putra Age
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-3 md:gap-5">
        {socials.map(({ name, link, Icon }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            {
              <Icon className="size-5 md:size-7 hover:text-accent transition-colors duration-300" />
            }
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
