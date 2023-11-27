'use client'
import { useState, useEffect } from 'react';
import style from '../app/style.module.css';
import '../app/globals.css';

const ProjectGallery = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { name: '3D Helmet Design', categories: ['all', 'animals'] },
    { name: '3D Disposable Bottle', categories: ['all', 'nature', 'city', 'VECTOR', 'UI/UX'] },
    { name: '3D Disposable Bottle', categories: ['nature', 'city', 'VECTOR', 'UI/UX'] },
    { name: '3D Disposable Bottle', categories: ['all', 'RASTER', 'PRINTING', 'UI/UX'] },
    { name: '3D Disposable Bottle', categories: ['nature', 'VECTOR', 'RASTER', 'PRINTING'] },
    { name: '3D Disposable Bottle', categories: ['all', 'nature', 'city', 'UI/UX'] },
  ];

  const filterItems = (categories) => {
    if (activeFilter === 'all') {
      return true;
    }
    return categories.includes(activeFilter);
  };

  const showPopup = (index) => {
    setSelectedImage(`/project-${index + 1}.jpg.webp`);
    setCurrentIndex(index);
    setPopupVisible(true);
    console.log(selectedImage);
  };

  const hidePopup = () => {
    setSelectedImage('');
    setPopupVisible(false);
  };

  const handleImageClick = (index) => {
    console.log(index);
    if (!popupVisible) {
      showPopup(index);
    } else {
      hidePopup();
    }
  };

  const handleKeyDown = (e) => {
    if (popupVisible) {
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPreviousImage();
      }
    }
  };
  const showNextImage = () => {
    const nextIndex = (currentIndex + 1)
    hidePopup();
    setTimeout(() => showPopup(nextIndex), 0);
  };

  const showPreviousImage = () => {
    const previousIndex = (currentIndex - 1)
    hidePopup();
    setTimeout(() => showPopup(previousIndex), 0);
  };


  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [popupVisible, currentIndex]);

  return (
    <>
      <div className={style.container}>
        <div className='sectionF' style={{ marginBottom: '50px' }}>
          <ul className='tabs nav nav-pills d-flex justify-content-center align-items-center mx-auto'>
            {['all', 'animals', 'nature', 'VECTOR', 'RASTER', 'PRINTING', 'UI/UX'].map((filter, index) => (
              <li key={index} onClick={() => handleFilterClick(filter)} className={`${activeFilter === filter ? style.active : '  filter_btan'}`}>
                {filter}
              </li>
            ))}
          </ul>
        </div>
        <div className='sectionF'>
          <div className={`${style.row}  grid lg:grid-cols-3 md:grid-cols-3 items-center relative section_F mx-auto`}>
            {projects.map((project, index) => (
              filterItems(project.categories) && (
                <div key={index} className={`item ${style.popupTrigger}`} data-category={project.categories.join(' ')}>
                  <div className={`flex justify-around mx-auto ${style.border0} ${style.p0}`}>
                    <div className={style.border0}>
                      <div className='popup-trigger p-4 ' >
                        <div onClick={() => handleImageClick(index)} className={style.popupTrigger}>
                          <img src={`/project-${index + 1}.jpg.webp`} className={`card-img-top ${style.image} w-100`} alt={`Image ${index + 1}`} />
                          <div className='hover-element'>
                            <i className={`fas fa-binoculars ${style.icon}`}></i>
                          </div>
                        </div>
                      </div>
                      <div className='text-center mt-9' style={{ marginBottom: '35px' }}>
                        <h4 className='Head_4'>{project.name}</h4>
                        <p className={`Para_16 ${style.para}`}>Client Project</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))
            }
          </div>
        </div>
      </div>
      {popupVisible == true &&
        <>
          <div className='image-popup'>
            <i onClick={hidePopup} className='fas fa-times close-button'></i>
            <img src={selectedImage} alt="Popup Image" className='popup-image' />
            <div className='image-navigation'>
            <i onClick={showPreviousImage} className={`fas fa-arrow-left ${style.arrowIcon}`}></i>
            <i onClick={showNextImage} className={`fas fa-arrow-right ${style.arrowIcon}`}></i>
          </div></div>
        </>
      }
    </>
  );
}
export default ProjectGallery;
