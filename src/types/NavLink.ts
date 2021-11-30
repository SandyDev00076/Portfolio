export type SectionID = "aboutme" | "tools" | "projects" | "journey";

export interface NavLink {
    link: SectionID,
    name: string,
    icon: JSX.Element
}