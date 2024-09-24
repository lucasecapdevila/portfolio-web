import imagen from "../../assets/lucas.jpg"

const Home = () => {
  return (
    <main className="h-screen">
      <div className="relative flex flex-col xl:flex-row h-full">
        <div className="w-full xl:w-3/5 h-2/5 xl:h-full bg-reactLightBlue"></div>
        <img
          src={imagen}
          className="absolute inset-0 w-60 h-60 xl:w-96 xl:h-96 rounded-full border border-8 border-[whiteBg] object-cover mx-auto my-auto transform -translate-x-0 -translate-y-1/3 md:translate-x-0 md:-translate-y-1/2"
          alt="lucasecapdevila" />
        <div className="w-3/5 bg-slate-950">
          <h1 className="text-textBlack text-4xl font-bold">Lucas E. Capdevila</h1>
        </div>
      </div>
    </main>
  )
}

export default Home