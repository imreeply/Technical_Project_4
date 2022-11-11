const PortofolioPage = () => {
  return (
    <>
      <div className="judul">
        <h2>My Portofolio</h2>
      </div>
      <section className="container-porto">
        <div className="porto">
          <p className="teks-porto">UI Design Final Project.</p>
          <div className="porto-img">
            <img src="https://i.ibb.co/kDSNh5H/porto1.jpg" alt="img1" />
          </div>
        </div>
        <div className="porto">
          <p className="teks-porto">UI Design Delivery App.</p>
          <div className="porto-img">
            <img src="https://i.ibb.co/C8VJxdn/porto2.jpg" alt="img1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortofolioPage;
