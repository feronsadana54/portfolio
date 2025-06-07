import DataImage from "./data";
import { listTools,listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid items-center pt-10 xl:gap-0 gap-6 grid-cols-1 md:grid-cols-2">
        <div className="">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q className="p-3">Kode yang indah, lahir dari fucking</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Feron Sadana :)</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming dan Designer,
            terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
            serta Banner, ketertarikan pada bidang ini sudah berlangsung lebih
            dari 4 Tahun untuk semua Bidang.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="hero image"
          className="w-[500px] md:ml-auto"
          loading="lazy"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-700 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Diky Prayoga, seorang Full Stack Web Developer
            dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya
            bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga
            setiap proyek yang saya kembangkan tidak hanya terlihat menarik
            tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              className="w-12 rounded-md sm:block hidden"
              alt="Image tentang"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div className="">
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div className="">
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Berikut ini tools yang saya buat untuk pembuatan website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((item) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={item.id}
              >
                <img
                  src={item.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div className="">
                  <h4 className="font-bold ">{item.nama}</h4>
                  <p className="opacity-50">{item.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* project */}
      <div className="project mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">Berikut ini beberapa project yang saya buat</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map(item => (
              <div className="p-4 bg-zinc-800 rounded-md" key={item.id}>
                <img src={item.gambar} alt="project image" loading="lazy"/>
                <div className="">
                  <h1 className="text-2xl font-bold my-4">{item.nama}</h1>
                  <p className="text-base/loose mb-4 ">{item.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((i,index) => (
                      <p className="py-1 px-3 border border-zinc-500 rounded-md bg-zinc-600 font-semibold" key={index}>{i}</p>
                    ))}
                  </div>
                  <div className="mt-8 text-center"><a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
