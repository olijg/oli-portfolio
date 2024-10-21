import { StaticImageData } from "next/image";

export default interface Project {
  id: number;
  title: string;
  imageUrl?: string | StaticImageData;
  description: string;
  imageAlt?: string;
}

export interface WorkProject extends Project {
  company: string;
}
