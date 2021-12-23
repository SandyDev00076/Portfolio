export type DomainType = "front" | "back" | "design";

export type ConfidenceLevel = "proficient" | "intermediate" | "beginner";

export interface Tool {
    name: string;
    confidence: number;
    confidenceLevel: ConfidenceLevel;
    domain: DomainType;
}
