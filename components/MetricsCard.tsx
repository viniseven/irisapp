interface MetricsCardProps {
  title: string;
  value: number;
  children: React.ReactNode;
  iconBgColor: string;
}

export default function MetricsCard({
  title,
  value,
  children,
  iconBgColor,
}: MetricsCardProps) {
  return (
    <div className="flex w-full items-center gap-3 rounded-lg bg-white p-3">
      <div
        className={`flex items-center justify-center rounded-2xl ${iconBgColor} p-3`}
      >
        {children}
      </div>

      <div>
        <span className="text-3xl font-bold">{value}</span>
        <p className="text-text-muted text-sm">{title}</p>
      </div>
    </div>
  );
}
