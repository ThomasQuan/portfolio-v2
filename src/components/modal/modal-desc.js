import React from "react";
const ModalDesc = (props) => {
  const closeModal = () => {
    props.closeModal();
  };
  return (
    <React.Fragment>
     
        <div className="modal-desc-title">
          <h4>What is the project ?</h4>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            X
          </button>
        </div>
        <p>{props.desc}</p>
        <div className="tech-info-container">
          <div className="stack">
            <h4> Tech Stacks</h4>
            <ul>
              {props.stack.map((key) => (
                <li key={key}>{key}</li>
              ))}
            </ul>
          </div>
          <div className="link-container">
            <div>
              <h4> Github</h4>
              <a href={props.projectLink}>
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div>
              <h4> Project product</h4>
              <a href={props.websiteLink}>
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default ModalDesc;
