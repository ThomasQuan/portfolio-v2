import React from "react";
import Modal from "react-modal";

const ProjectDetail = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "70vw",
      height: "90vh",
      padding: 0,
      overflow: "hidden",
    },
  };
  Modal.setAppElement("#root");
  const [modalState, setModal] = React.useState(props.modalState);

  //this need to be in the parent compoentn
  // const openModal = () => {
  //   setModal(true);
  // };

  function openModal() {
    setModal(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setModal(false);
  }
  return (
    <React.Fragment>
      <button onClick={openModal}>LEARN MORE</button>

      <Modal
        isOpen={modalState}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="project-modal" style={{ padding: 0, margin: 0 }}>
          <div
            className="modal-title"
            style={{ backgroundImage: `url(${props.img})` }}
          >
            <h2>{props.projectName}</h2>
          </div>
          <div className="modal-desc">
            <h3>What is the project ?</h3>
            <p>{props.desc}</p>
            <div className="stack">
              <h3> Software used in the making</h3>
              <ul>
                {props.stack.map((key) => (
                  <li key={key}>{key}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3> View Project folder</h3>
              <a href={props.projectLink}>
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div>
              <h3> View Project website</h3>
              <a href={props.websiteLink}>
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
          {/* <button className="btn btn-lg" onClick={closeModal}>
            RETURN
          </button> */}
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ProjectDetail;
