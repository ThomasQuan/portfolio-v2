import React from "react";
import Modal from "react-modal";
import ModalDesc from "../modal/modal-desc";
import ProjectCarousel from "../modal/moda-project-carousel";

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
      height: "80vh",
      padding: 0,
      overflowY: "scroll",
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
            style={{ backgroundImage: `url(${props.projectCover})` }}
          >
            <h3>{props.projectName}</h3>
          </div>
          <div className="modal-desc">
            <ModalDesc
              desc={props.desc}
              stack={props.stack}
              projectLink={props.projectLink}
              webLink={props.websiteLink}
              closeModal={closeModal}
            />
            <div className="modal-carousel">
              <ProjectCarousel images={props.projectImages} />
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ProjectDetail;
