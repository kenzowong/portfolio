import React from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      className='projects'
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <div className='campfinder d-flex flex-row'>
        <div className='project-pictures row d-flex justify-content-center'>
          <div className='project-pictures-container col-sm-6'>
            <div className='project-pictures-title'>
              <h3 className='highlight'>Campfinder</h3>
            </div>

            <div className='carouselDiv mb-2'>
              <Carousel className='carousel' controls={false}>
                <Carousel.Item>
                  <div className='d-flex justify-content-center carousel-images-maxed'>
                    <img
                      className='d-block carousel-images-fixed'
                      src={'campfinder1.png'}
                      alt='First slide'
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='d-flex justify-content-center carousel-images-maxed'>
                    <img
                      className='d-block carousel-images-fixed'
                      src={'campfinder2.png'}
                      alt='First slide'
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='d-flex justify-content-center carousel-images-maxed'>
                    <img
                      className='d-block carousel-images-fixed'
                      src={'campfinder3.png'}
                      alt='First slide'
                    ></img>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='d-flex justify-content-center carousel-images-maxed'>
                    <img
                      className='d-block carousel-images-fixed'
                      src={'campfinder4.png'}
                      alt='First slide'
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='d-flex justify-content-center carousel-images-maxed'>
                    <img
                      className='d-block carousel-images-fixed'
                      src={'campfinder5.png'}
                      alt='First slide'
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <div className='project-description col-sm-6'>
            <div className='project-description-title'>
              <a href='https://campfinder.kenzowong.net/'>Website</a>
              <span> -- </span>
              <a href='https://github.com/kenzowong/campfinder'>Github repo</a>
            </div>
            <div className='mt-3'>
              <p>
                Campfinder is an extension of YelpCamp, the capstone project
                students finish from 'The Web Developer Bootcamp' by Colt
                Steele. It is a CRUD app where people can create new accounts,
                add campgrounds, and leave reviews. There is also basic
                authentication and authorization.
              </p>
              <p>
                Some of the challenges that I faced were when libraries get
                updated and code ends up breaking, and I had to read the
                documentation or Q&#38;A to find solutions.
              </p>
              <p>
                Future possible todos would include things like pagination of
                comments, photo upload safety checks, checking for duplicates,
                better UI, etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
