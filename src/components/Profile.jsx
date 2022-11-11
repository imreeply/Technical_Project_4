const ProfileComponents = ({name, imgUrl}) => {
  return (
    <>
      <div className="foto">
        <img className="profile" src={imgUrl} />
      </div>

      <section className="Description">
        <h2>Hello! This is {name}</h2>
        <h3>Front-End Web Development.</h3>
        <p>I made it using Visual Code, with HTML, CSS, and ReactJS programming languages.</p>
        <p>
          I'm learning Web Development by following the bootcamp <b>Tech4Impact</b> from <b>PT Impactbyte Teknologi Edukasi.</b>
        </p>
        <p>I use this website to show my progress during bootcamp.</p>
        <p>This will be my portfolio for the future, See you &#128516;</p>
      </section>
    </>
  );
};

export default ProfileComponents;
