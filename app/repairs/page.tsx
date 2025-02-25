"use client";

export default function Page() {
  return (
    <main className="min-h-screen items-center max-w-[100svw] overflow-hidden bg-gray-200 flex justify-center flex-row-reverse">
      <section className="grid grid-cols-2 grid-rows-2 w-full md:max-w-[40rem] gap-4 text-gray-400">
        <article
          className="card bg-white w-full rounded-md px-4 py-6"
          onClick={() => {
            window.location.href =
              "https://mobilekangaroo.com/computer_repairs";
          }}
        >
          <h4 className="text-gray-700 font-semibold pb-4">Computers</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            velit?
          </p>
        </article>
        <article className="card bg-white w-full rounded-md px-4 py-6">
          <h4 className="text-gray-700 font-semibold pb-4">Tablets</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            velit?
          </p>
        </article>
        <article className="card bg-white w-full rounded-md px-4 py-6">
          <h4 className="text-gray-700 font-semibold pb-4">Phones</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            velit?
          </p>
        </article>
        <article className="card bg-white w-full rounded-md px-4 py-6">
          <h4 className="text-gray-700 font-semibold pb-4">Game Consoles</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            velit?
          </p>
        </article>
      </section>
    </main>
  );
}
