const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#project">Project</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/feronsadana54">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/f_sadana/">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/feron-sadana/">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://www.facebook.com/feronsadana53/">
          <i className="ri-facebook-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
