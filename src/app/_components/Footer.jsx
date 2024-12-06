import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import React from "react";
import { footerLinks } from "../../assets/data";
import footerPic from "../../assets/images/footer.webp";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-background mt-10">
      <div className=" bg-secondary p-10 ">
        <div className="grid grid-cols-5 max-lg:grid-cols-2 gap-6 max-md:grid-cols-1">
          <div className="space-y-4">
          <h1 className="text-2xl  bg-gradient-to-r from-primary to-primary-700 text-transparent bg-clip-text  font-bold">BerryCare</h1>
            <p>
              Discover the latest trends and enjoy seamless shopping with our
              exclusive collections.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} />
              <Facebook size={20} />
              <Twitter size={20} />
            </div>
          </div>
          {footerLinks.map((col, index) => (
            <div key={index} className="space-y-4">
              <h1 className="text-lg font-bold ">{col.title}</h1>
              {col.links.map((link, index) => (
                <div className="list-none group " key={index}>
                  <a href={"#"}>
                    {link.icon && <link.icon size={20} className="inline mr-2" />}
                    {link.name}
                    {!link.icon && (
                      <div className="w-0 h-[2px] group-hover:w-12 bg-primary duration-500"></div>
                    )}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-10 py-4 max-md:flex-col max-lg:gap-2 mx-auto">
        <div>2023-24 themeforest powered by pixelstrap</div>
        <div >
          <Image 
            src={footerPic} 
            alt="footer pict"
            sizes="384px"
          />
        </div>
      </div>
    </div>
  );
}
