import { GigType } from "types/GigType";
import { OtherProjectType } from "types/OtherProjectType";
import { ProjectType } from "types/ProjectType";
import { DomainType, Tool, ConfidenceLevel } from "types/Tool";

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
): OtherProjectType {
  return {
    title,
    image,
    link,
  };
}

export function createGig(
  name: string,
  role: string,
  duration: string,
  contri: string
): GigType {
  return {
    name,
    role,
    duration,
    contri,
  };
}

export function createTool(
  name: string,
  confidence: number,
  confidenceLevel: ConfidenceLevel,
  domain: DomainType = "front"
): Tool {
  return {
    name,
    confidence,
    confidenceLevel,
    domain
  }
}