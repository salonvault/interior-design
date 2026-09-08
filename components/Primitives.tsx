import Image from "next/image";
import type { ReactNode } from "react";
import hearth from "@/public/images/house27.png";
import courtyard from "@/public/images/courtyard.png";
import stair from "@/public/images/stair.png";
import margalla from "@/public/images/margalla.webp";
import house27 from "@/public/images/courtyard.png";
import pavilion from "@/public/images/pavilion.webp";
import style1 from "@/public/images/style1.jpeg";
import style2 from "@/public/images/style2.jpeg";
import style3 from "@/public/images/style3.jpeg";
import style4 from "@/public/images/style4.jpeg";
import detail from "@/public/images/detail.webp";

const photographs = {
  hearth,
  courtyard,
  stair,
  margalla,
  house27,
  pavilion,
  style1,
  style2,
  style3,
  style4,
  detail,
};

export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`label ${className}`}>{children}</span>;
}

export function Photo({
  name,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 767px) 100vw, 65vw",
}: {
  name: keyof typeof photographs;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={photographs[name]}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
        placeholder="blur"
        className="object-cover"
      />
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="text-link" href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function SectionIndex({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="section-index">
      <Label>{number} /</Label>
      <Label>{children}</Label>
    </div>
  );
}
