const Head = () => {
    return (
        <div className="profile">
        <div className="profile_container">
          <div className="profile_profileImg">
          <img src="/src/imagenes/phot_cv.jpg" alt="shaif arfan"/>
          </div>
          <div>
            <h1 className="profile_name">
              <span className="profile_name_firstName">Jorge Mario</span>
              <span className="profile_name_lastName">Suaza Santamaria</span>
            </h1>
            <p className="profile_title">Software Developer</p>
            <p className="description profile_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam,
            </p>
            <a className="downloadBtn" href="./cv.pdf" download="Resume.pdf">Descargar pdf</a>
          </div>
        </div>
      </div>
    );
    };

    export default Head;