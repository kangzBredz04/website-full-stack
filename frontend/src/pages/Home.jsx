export default function Home() {
  return (
    <div className="md:h-full bg-[#0e0b16]  text-white mb-10" id="home">
      <div className="m-10 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="bg-[#0e0b16] text-white">
          <h1 className="font-semibold text-3xl md:text-5xl my-4 text-primary">
            SportyThreads
          </h1>
          <p className="md:w-96 leading-7 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            ea sequi illum, aut atque porro maiores, mollitia tempore officiis
            quis, vero ratione veritatis laudantium adipisci illo veniam impedit
            fugit error? Dolore, tenetur accusamus veniam sequi eum dolores
            error hic sunt, aperiam soluta assumenda sapiente et adipisci
            praesentium repellat atque vel! Consequuntur asperiores ad nihil
            repellat alias odio autem minima nostrum!
          </p>
        </div>
        {/* Image SportyThreads*/}
        <div className="order-first md:order-last relative">
          <img src="/player-football.png" alt="" />
        </div>
      </div>
    </div>
  );
}
