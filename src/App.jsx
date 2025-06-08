import Smiley from "./components/Smiley";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid items-center pt-10 xl:gap-0 gap-6 grid-cols-1 md:grid-cols-2">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
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
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="hero image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-700 rounded-lg flex flex-col md:flex-row items-center gap-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {/* KIRI: Teks & Stat */}
          <div className="w-full md:w-1/2">
            <p
              className="text-base/loose mb-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Hi, perkenalkan saya Diky Prayoga, seorang Full Stack Web
              Developer dan Designer untuk UI/UX Design maupun Product Digital.
              Saya percaya bahwa desain dan fungsionalitas harus berjalan
              beriringan, sehingga setiap proyek yang saya kembangkan tidak
              hanya terlihat menarik tetapi juga memberikan pengalaman pengguna
              yang optimal.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={DataImage.HeroImage}
                className="w-12 rounded-md sm:block hidden"
                alt="Image tentang"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    45 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Proyek Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    4 <span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: Smiley */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Smiley />
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Berikut ini tools yang saya buat untuk pembuatan website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((item) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={item.dad}
                data-aos-once="true"
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
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut ini beberapa project yang saya buat
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((item) => (
            <div
              className="p-4 bg-zinc-800 rounded-md"
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={item.dad}
              data-aos-once="true"
            >
              <img src={item.gambar} alt="project image" loading="lazy" />
              <div className="">
                <h1 className="text-2xl font-bold my-4">{item.nama}</h1>
                <p className="text-base/loose mb-4 ">{item.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((i, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 rounded-md bg-zinc-600 font-semibold"
                      key={index}
                    >
                      {i}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari terhubung dengan saya.
        </p>
        <form
          action="https://formsubmit.co/feronsadana16@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 max-w-md w-full mx-auto rounded-md"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                className="border border-zinc-500 p-2 rounded-md"
                placeholder="Masukkan Nama..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="border border-zinc-500 p-2 rounded-md"
                placeholder="Masukkan Email..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                className="border border-zinc-500 p-2 rounded-md"
                placeholder="Pesan..."
                cols="45"
                rows="7"
                required
              ></textarea>
            </div>
            <div className="text-center ">
              <button
                className="bg-violet-700 p-3 rounded-lg w-f border cursor-pointer border-zinc-600 hover:bg-violet-600"
                type="submit"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
