import Clock from "../Clock";

function Home() {
  return (
    <section className="bg-slate-900 w-dvw flex flex-col justify-center items-center">
      <div className="px-6 py-2 flex flex-col items-center">
        <h1 className="text-4xl text-slate-100 font-light">Welcome!</h1>
        <Clock />
      </div>
    </section>
  );
}

export default Home;
