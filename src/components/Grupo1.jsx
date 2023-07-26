const Grupo1 = () => {
    return (
        <div className="group-1">
            <div className="skills">
              <h3 className="title">Lenguajes</h3>
              <ul className="skills_list description">
                <li>JavaScript</li>
                <li>HTML CSS</li>
                <li>Java</li>
                <li>Spring boot</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="ref">
              <h3 className="title">Referencias</h3>
              <div className="ref_item">
                <h4 className="ref_name">Lorem ipsum</h4>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, neque?</p>
              </div>
              <div className="ref_item">
                <h4 className="ref_name">Lorem ipsum</h4>
                <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
              </div>
            </div>
      
            <div className="edu">
              <h3 className="title">Educación</h3>
              <div className="edu_item">
                <p className="item_preTitle">2020-2021</p>
                <h4 className="item_title">Lorem ipsum</h4>
                <p className="item_subtitle">
                   Universidad
                </p>
              </div>
              <div className="edu_item">
                <p className="item_preTitle">2022-2023</p>
                <h4 className="item_title">Lorem ipsum</h4>
                <p className="item_subtitle">
                  Universidad
                </p>
              </div>
            </div>
      
            <div className="certification">
              <h3 className="title">certificación</h3>
              <div className="certification_item">
                <p className="item_preTitle">2023</p>
                <h4 className="item_title">Backend Developer</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                  magna aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>
          </div>
    );
    };

    export default Grupo1;