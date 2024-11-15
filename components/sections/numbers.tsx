interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export function Numbers() {
  const stats: StatItem[] = [
    {
      icon: "📚",
      value: "+100.000",
      label: "Libri venduti",
    },
    {
      icon: "✍️",
      value: "+20",
      label: "Autori internazionali",
    },
    {
      icon: "👥",
      value: "+100",
      label: "Clienti Soddisfatti",
    },
    // {
    //   icon: "👨‍💻",
    //   value: "+50",
    //   label: "Autori",
    // },
    {
      icon: "🏆",
      value: "+10",
      label: "Best Seller su Amazon",
    },
    {
      icon: "🌐",
      value: "+50",
      label: "Paesi Raggiunti",
    },
    {
      icon: "💬",
      value: "+100",
      label: "Consulenze",
    },
  ];

  return (
    <section className="py-16  px-2">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            Raggiungi milioni di persone con il potere delle tue parole.
          </h2>
          <p className="text-2xl text-primary font-medium">
            Hai una storia da raccontare? Pro Editors ti guiderà nella
            pubblicazione del tuo libro passo dopo passo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-primary text-3xl">{stat.icon}</div>
              <div className="font-bold text-xl">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
