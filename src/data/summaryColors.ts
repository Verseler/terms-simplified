export const IMPORTANCE_COLORS = {
  high: "bg-red-50 border-red-200 text-red-800",
  medium: "bg-orange-50 border-orange-200 text-orange-800",
  low: "bg-blue-50 border-blue-200 text-blue-800",
} as const;

export const TYPE_COLORS = {
  obligation: "bg-red-100 text-red-800 border-red-200",
  right: "bg-green-100 text-green-800 border-green-200",
  restriction: "bg-orange-100 text-orange-800 border-orange-200",
  risk: "bg-red-100 text-red-800 border-red-200",
  benefit: "bg-blue-100 text-blue-800 border-blue-200",
} as const;