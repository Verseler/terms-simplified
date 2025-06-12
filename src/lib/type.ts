export type ParsedSection = {
  title: string
  content: string[]
}

export type SummaryData = {
   summary: {
    overview: string
    sections: Section[]
    disclaimer: string
  }
}

export type Section = {
  id: string
  title: string
  importance: "high" | "medium" | "low"
  keyPoints: KeyPoint[]
  description?: string
}

export type KeyPoint = {
  text: string
  type: "obligation" | "right" | "restriction" | "risk" | "benefit"
  critical: boolean
}
