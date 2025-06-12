type OverviewCardProps = {
  title: string;
  description: string;
};

export default function OverviewCard({
  title,
  description,
}: OverviewCardProps) {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
      <h3 className="font-semibold text-orange-900 mb-2">{title}</h3>
      <p className="text-orange-800 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
