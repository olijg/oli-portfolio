import { StaticImageData } from "next/image";

export default interface Project {
  title: string;
  imageUrl?: string | StaticImageData;
  description: string;
  imageAlt?: string;
}

export interface WorkProject extends Project {
  company: string;
}
