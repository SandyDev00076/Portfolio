export type DomainType = "front" | "back" | "design";

export interface Tool {
    name: string;
    confidence: number;
    domain: DomainType;
}
