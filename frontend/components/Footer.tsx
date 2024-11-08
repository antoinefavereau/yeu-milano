import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      <Image
        className="absolute top-0 left-0 w-full h-full object-contain object-center select-none"
        src="/background/élément 3.png"
        width={1920}
        height={1080}
        alt=""
      />
      <Image
        className="relative w-4/5 sm:w-1/2 h-auto ms-[10%] py-8"
        src="/name2.png"
        width={1000}
        height={1000}
        alt="name"
      />
      <div className="relative flex justify-between ps-[12%] pb-16 gap-8">
        <div className="w-fit flex flex-col pt-8">
          <Link
            className="flex items-center h-[60px]"
            href="https://www.instagram.com/dyeuh_uuju"
            target="_blank"
          >
            <Image
              className="object-contain object-center"
              src="/socials/contact-1.png"
              width={80}
              height={80}
              alt="Instagram"
            />
            <span className="underlinedLink hidden sm:inline md:4 sm:ms-8">Instagram</span>
          </Link>
          <Link
            className="flex items-center h-[60px]"
            href="https://www.instagram.com/dyeuh_uuju"
            target="_blank"
          >
            <Image
              className="object-contain object-center"
              src="/socials/contact-2.png"
              width={80}
              height={80}
              alt="Twitter"
            />
            <span className="underlinedLink hidden sm:inline md:4 sm:ms-8">Twitter</span>
          </Link>
          <Link
            className="flex items-center h-[60px]"
            href="https://www.instagram.com/dyeuh_uuju"
            target="_blank"
          >
            <Image
              className="object-contain object-center"
              src="/socials/contact-3.png"
              width={80}
              height={80}
              alt="Youtube"
            />
            <span className="underlinedLink hidden sm:inline md:4 sm:ms-8">Youtube</span>
          </Link>
        </div>
        <div className="relative flex flex-col me-[5vw] md:me-[10vw] lg:me-[15vw] w-[calc(250px+10vw)]">
          <div className="relative w-[calc(100%-10vw]">
            <h3 className="uppercase mt-0">émotions</h3>
            <p className="my-2">
              &quot;L&apos;émotion nous égare c&apos;est son principal
              mérite.&quot;
            </p>
            <p>Oscar Wilde</p>
          </div>
          <div className="relative w-[calc(100%-10vw] ms-[10vw] mt-4">
            <h3 className="uppercase mt-0">extase</h3>
            <p className="my-2">
              C&apos;est incontrôlable, compliqué de savoir qui tu es
              réellement, ce n&apos;est plus très important
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-between items-center gap-4 md:gap-8 text-sm ps-[8%] pe-[5%] pt-2 pb-8 border-y-2 border-light">
        <p>
          © 2023 DESIGN BY DYEUH-UUJU, CODED BY{" "}
          <Link
            className="underlinedLink"
            href="https://antoinefavereau.fr"
            target="_blank"
          >
            ANTOINE FAVEREAU
          </Link>
        </p>
        <div className="flex gap-4 md:gap-8 lg:gap-12 shrink-1">
          <Link
            className="underlinedLink"
            href="https://www.behance.net"
            target="_blank"
          >
            Behance
          </Link>
          <Link className="underlinedLink" href="mailto:" target="_blank">
            Email
          </Link>
        </div>
        <button
          type="button"
          className="group flex items-center gap-4 lg:gap-8"
          onClick={scrollTop}
        >
          <span className="opacity-80 group-hover:opacity-100 transition-opacity hidden sm:inline">
            Retour en haut
          </span>
          <svg
            className="group-hover:translate-y-[-5px] transition-transform"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            strokeWidth="1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21V3m0 0l8.5 8.5M12 3l-8.5 8.5"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
