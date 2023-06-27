import { PortableTextBlock, Image } from "sanity";

export interface Project {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: Image;
  url: string;
  content: PortableTextBlock[];
}
