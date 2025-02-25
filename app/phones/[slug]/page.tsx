export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch("http://localhost:3000/api/repairs");
  const json = await res.json();

  return (
    <section className="min-h-svh">
      <p>{params.slug}</p>
      <h5>{json.data.phones.type}</h5>
      <h6>{json.data.phones.models}</h6>
    </section>
  );
}
