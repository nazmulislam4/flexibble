import Image from "next/image";
import React from "react";
import FooterColumn from "./FooterColumn";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src={"/logo-purple.svg"}
            width={115}
            height={38}
            alt="Flexibble"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble in the world's leading community for creatives to share,
            grow and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
