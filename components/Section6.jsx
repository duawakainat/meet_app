'use client'
import { useState, useEffect } from 'react';
import style from '../app/style.module.css';
import '../app/globals.css';
import Image from 'next/image';
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
      <div className='P_120 '>
        <div className='sectionF ' style={{ marginBottom: '50px' }}>
        <div class={style.main_title + " text-center"}>
                <h2 class={style.font_36}>OUR LATEST FEATURED PROJECTS</h2>
                <p class={style.Para_16 + " p-0 m-0"}>Who are in extremely love with eco friendly system.</p>
            </div>
          <ul className='tabs nav nav-pills flex justify-center items-center mx-auto'>
            {['All', 'VECTOR', 'RASTER', 'PRINTING', 'UI/UX'].map((filter, index) => (
              <li key={index} onClick={() => handleFilterClick(filter)} className='filter_btan'>
                {filter}
              </li>
            ))}
          </ul>
        </div>
        <div className='sectionF'>
        
          <div className={`${style.row}  grid md:grid-cols-3 sm:grid-cols-1 items-center relative section_F mx-auto`}>
            {projects.map((project, index) => (
              filterItems(project.categories) && (
                <div key={index} className={`item ${style.popupTrigger}`} data-category={project.categories.join(' ')}>
                  <div className={`flex justify-around popup-trigger mx-auto ${style.border0} ${style.p0}`}>
                    <div className={style.border0}>
                      <div className='popup-trigger  md:p-4 lg:p-4 sm:p-0' >
                        <div onClick={() => handleImageClick(index)} className={style.popupTrigger}>
                          <Image src={`/project-${index + 1}.jpg.webp`} width={340} height={339} quality={100} className={`card-img-top w-100 ${style.image}`} alt={`Image ${index + 1}`} />
                          <div className={style.hoverElement}>
                            <i className={`fas fa-binoculars icon ${style.icon}`}></i>
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
            <div class="text-right grid grid-cols-1 justify-items-stretch"><button type="button"
                            class="btn Contact_btn_2 justify-self-center">Send Message</button></div>
        </div>
      </div>
      {popupVisible == true &&
        <>
          <div className='image-popup'>
            <i onClick={hidePopup} className='fas fa-times close-button'></i>
            <Image src={selectedImage} width={265} height={265} alt="Popup Image" className='popup-image' />
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
