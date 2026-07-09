interface MetricsCardProps {
  title: string;
  metric: string;
  className: string;
}

export default function MetricsCard({
  title,
  metric,
  className,
}: MetricsCardProps) {
  return (
    <div
      className={`${className} flex w-full flex-col gap-1 rounded-lg bg-white p-8`}
    >
      <p className="text-text-muted text-xs font-semibold">{title}</p>
      <span className="text-5xl font-bold">{metric}</span>
    </div>
  );
}
