import Image from "next/image";
import Book from "./ui/Book";

const BookSection = () => {
    const images = ["/book/page1.jpg", "/book/page2.jpg", "/book/page3.jpg", "/book/page4.jpg", "/book/page5.jpg", "/book/page6.jpg", "/book/page7.jpg", "/book/page8.jpg"];

    return (
        <section className="relative overflow-hidden">
            <Image className="absolute w-8/12 h-auto start-1/2 -translate-x-1/2 pt-16 select-none" src="/background/élément 1.png" width="1000" height="1000" alt="" />
            <svg className="absolute w-full h-auto mt-[calc(4rem+16vw)]" width="2000" height="1932" viewBox="0 0 2000 1932" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1553.45C0 1353.51 42.3942 1155.83 124.386 973.465V973.465C288.133 609.263 551.34 298.668 883.744 77.3903L1000 0L1116.26 77.3902C1448.66 298.667 1711.87 609.263 1875.61 973.465V973.465C1957.61 1155.83 2000 1353.51 2000 1553.46V1931.47H0V1553.45Z" fill="white" />
            </svg>
            <div className="relative flex flex-col items-center mt-[calc(10rem+16vw)] pb-56">
                <Image src="/logo.png" width="250" height="250" alt="logo" />
                <Image className="absolute top-56 opacity-50 w-96 h-auto" src="/background/fenetre.png" width="500" height="500" alt="fenêtre" />
                <Book images={images} />
            </div>
        </section>
    );
};

export default BookSection;
