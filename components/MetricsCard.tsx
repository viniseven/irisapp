interface MetricsCardProps {
  title: string;
  value: number | string;
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
    <div className="flex w-full items-center gap-3 rounded-lg bg-white p-3 shadow-md">
      <div
        className={`flex items-center justify-center rounded-2xl ${iconBgColor} p-3`}
      >
        {children}
      </div>

      <div>
        <span className="font-bold">{value}</span>
        <p className="text-text-muted text-xs">{title}</p>
      </div>
    </div>
  );
}
