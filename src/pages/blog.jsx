import BlogComponents from "../components/blogComponents";

const BlogPage = () => {
  return (
    <>
      <div className="site-container">
        <div className="article-container">
          <BlogComponents
            judul={"HTML5"}
            tag={"Reza"}
            imgUrl={"https://i.ibb.co/GpwqhcW/html5.jpg"}
            desc={"HTML5 adalah sebuah bahasa markah untuk menstrukturkan dan menampilkan isi dari World Wide Web, sebuah teknologi inti dari Internet."}
          />

          <BlogComponents
            judul={"CSS3"}
            tag={"Reza"}
            imgUrl={"https://i.ibb.co/Tm1KMTH/css3.jpg"}
            desc={"CSS biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs."}
          />

          <BlogComponents
            judul={"JAVASCRIPT"}
            tag={"Reza"}
            imgUrl={"https://i.ibb.co/pfGCtMB/js.jpg"}
            desc={"Javascript biasanya digunakan untuk melakukan perubahan tampilan website, seperti ketika mengklik tombol, menentukan layout, ngasih efek dinamik atau animasi yang lucu-lucu dan menarik."}
          />

          <BlogComponents
            judul={"GITHUB"}
            tag={"Reza"}
            imgUrl={"https://i.ibb.co/dbwD36S/github.jpg"}
            desc={"GitHub adalah layanan hos web bersama untuk proyek pengembangan perangkat lunak yang menggunakan sistem kendali versi Git dan layanan hosting internet."}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
