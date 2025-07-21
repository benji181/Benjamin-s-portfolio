const testimonials = [
  {
    name: "Mr Busayo",
    title: "CEO bus visuals",
    text: "Designed my website and it looks amazing!.",
    stars: 5,
  },
  {
    name: "Samson",
    title: "Front-end Developer",
    text: "Helped me with my backend auth for my productivity site",
    stars: 5,
  },
  {
    name: "Private client for ",
    title: "Front-end Developer",
    text: "Helped me with my backend auth for my productivity site",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400">{'★'.repeat(count)}{'☆'.repeat(5 - count)}</span>
  );
}

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {testimonials.map(t => (
        <div key={t.name} className="bg-card border border-border/40 rounded-xl p-8 shadow-card">
          <p className="mb-4 text-lg text-foreground">"{t.text}"</p>
          <div className="flex items-center gap-3 mt-4">
            <div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.title}</div>
            </div>
            <div className="ml-auto"><Stars count={t.stars} /></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
