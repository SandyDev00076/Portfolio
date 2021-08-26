import { OtherProject } from "types/OtherProjectType";
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

export function createOtherProject(
  title: string,
  image: string,
  link: string
): OtherProject {
  return {
    title,
    image,
    link,
  };
}
