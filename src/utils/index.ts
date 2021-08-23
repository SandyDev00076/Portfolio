import { ProjectType } from "types/ProjectType";

export function createProject(
  title: string,
  subtitle: string,
  about: string,
  imageURL: string,
  link: string
): ProjectType {
  return {
    title,
    subtitle,
    about,
    imageURL,
    link,
  };
}
