import { PortableTextBlock } from "sanity";

export interface Page {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
}
