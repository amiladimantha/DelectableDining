import React, { useState } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { Modal, Button } from "antd"; // Import Ant Design's Modal and Button
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    console.log("Opening modal");
    setModalIsOpen(true);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  const modalImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery05,
    images.gallery06,
    images.gallery07,
    images.gallery08,
  ];

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= modalImages.length ? 0 : newIndex;
    });
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? modalImages.length - 1 : newIndex;
    });
  };

  return (
    <>
      <div className="app__gallery flex__center">
        <div className="app__gallery-content">
          <SubHeading title="Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p
            className="p__opensans"
            style={{ color: "#AAAAAA", marginTop: "2rem" }}
          >
            Indulge Your Senses: A Visual Feast of Culinary Delights
          </p>
          <button
            type="button"
            className="custom__button"
            onClick={() => {
              console.log("View More clicked");
              openModal(0); // Open the modal with the first image when "View More" is clicked
            }}
          >
            View More
          </button>
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[
              images.gallery01,
              images.gallery02,
              images.gallery03,
              images.gallery04,
            ].map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
                onClick={() => openModal(index)}
              >
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
      <Modal
        visible={modalIsOpen}
        onCancel={closeModal}
        footer={[
          // <Button key="close" onClick={closeModal}>
          //   Close
          // </Button>,
          ]}
          className="custom-modal"
      >
        <br />
        <div className="modal__image-container">
          <img
            src={modalImages[selectedImageIndex]}
            style={{
              width: "100%",  // Set a width of 100% to make sure the image fills the container horizontally
              height: "600px", // Set a height of 100% to make sure the image fills the container vertically
              objectFit: "cover", // Use 'cover' to maintain aspect ratio and cover the container
            }}
            alt="gallery_image"
            className="modal__image"
          />
        </div>
        <div className="modal__image-navigation">
          <button className="modal__image-nav-button" onClick={prevImage}>
            Previous
          </button>
          <button className="modal__image-nav-button" onClick={nextImage}>
            Next
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Gallery;
