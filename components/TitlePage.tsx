interface TitlePageProps {
  title: string;
  description: string;
}

export default function TitlePage({ title, description }: TitlePageProps) {
  return (
    <div>
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="text-xl text-text-muted">{description}</p>
    </div>
  );
}
