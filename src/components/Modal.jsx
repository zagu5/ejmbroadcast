import  PropTypes from "react-bootstrap/esm/Image";
import '../styles/modal.css'

const Modal = ({
    clickedImg,
    setClickedImg,

  }) => {
    const handleClick = (e) => {
      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
      }
    };

  
    return (
      <>
        <div className="overlay dismiss" onClick={handleClick}>
          <img src={clickedImg} alt="bigger pic" />
          <span className="dismiss" onClick={handleClick}>
            X
          </span>
        </div>
      </>
    );
  };


Modal.propTypes = {
    images: PropTypes.array,
    clickedImg: PropTypes.string,
    setClickedImg: PropTypes.func,
  };

export default Modal;