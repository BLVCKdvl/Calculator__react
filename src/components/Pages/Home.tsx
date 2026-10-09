import Clock from "../Clock";

function Home() {
  return (
    <section className="bg-slate-900 w-dvw flex flex-row justify-start items-center gap-40">
      <div className="w-3/5 pl-10 py-10 bg-teal-600 rounded-br-full hover:rounded-tr-full transition-all duration-500 ease-in-out">
        <p className="text-5xl text-white leading-25 font-light">
          This project is the embodiment of the craziest<br></br>
          ideas that ever crossed my mind.<br></br>
          User login in a calculator? Why not.<br></br>A weapon shop in a
          calculator?<br></br>
          Wait, what??
        </p>
      </div>
      <div className="px-16 py-12 flex flex-col items-center bg-teal-600 rounded-tl-full rounded-br-full">
        <h1 className="text-4xl text-white font-light">Welcome!</h1>
        <Clock />
      </div>
    </section>
  );
}

export default Home;
