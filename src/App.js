//! 1
// import { Component, useState, useEffect, useCallback, useMemo } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// // class Slider extends Component {
// //    constructor(props) {
// //       super(props);
// //       this.state = {
// //          autoplay: false,
// //          slide: 0,
// //       };
// //    }

// //    componentDidMount() {
// //       document.title = `Slide: ${this.state.slide}`;
// //    }

// //    componentDidUpdate() {
// //       document.title = `Slide: ${this.state.slide}`;
// //    }

// //    changeSlide = (i) => {
// //       this.setState(({ slide }) => ({
// //          slide: slide + i,
// //       }));
// //    };

// //    toggleAutoplay = () => {
// //       this.setState(({ autoplay }) => ({
// //          autoplay: !autoplay,
// //       }));
// //    };

// //    render() {
// //       return (
// //          <Container>
// //             <div className="slider w-50 m-auto">
// //                <img
// //                   className="d-block w-100"
// //                   src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
// //                   alt="slide"
// //                />
// //                <div className="text-center mt-5">
// //                   Active slide {this.state.slide} <br />{' '}
// //                   {this.state.autoplay ? 'auto' : null}
// //                </div>
// //                <div className="buttons mt-3">
// //                   <button
// //                      className="btn btn-primary me-2"
// //                      onClick={() => this.changeSlide(-1)}
// //                   >
// //                      -1
// //                   </button>
// //                   <button
// //                      className="btn btn-primary me-2"
// //                      onClick={() => this.changeSlide(1)}
// //                   >
// //                      +1
// //                   </button>
// //                   <button
// //                      className="btn btn-primary me-2"
// //                      onClick={this.toggleAutoplay}
// //                   >
// //                      toggle autoplay
// //                   </button>
// //                </div>
// //             </div>
// //          </Container>
// //       );
// //    }
// // }

// //! const calcValue = () => {
// //!    console.log('randum');

// //!    return Math.random() * (50 - 1) + 1;
// //! };

// const countTotal = (num) => {
//    console.log('counting...');
//    return num + 10;
// };

// const Slider = () => {
//    const [slide, setSlide] = useState(0);
//    const [autoplay, setAvtoplay] = useState(false);

//    const getSomeImages = useCallback(() => {
//       console.log('fetching');

//       return [
//          'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
//          'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
//       ];
//    }, []);

//    function logging() {
//       console.log('Log!');
//    }

//    // useEffect(() => {
//    //    console.log('effect');
//    //    document.title = `Slide: ${slide}`;

//    //    window.addEventListener('click', logging);

//    //    return () => {
//    //       window.removeEventListener('click', logging);
//    //    };
//    // }, [slide]);

//    // useEffect(() => {
//    //    console.log('effect update');
//    //    document.title = `Slide: ${slide}`;
//    // }, [slide]);

//    // useEffect(() => {
//    //    console.log('autoplay');
//    // }, [autoplay]);

//    function changeSlide(i) {
//       setSlide((slide) => slide + i);
//    }

//    function toggleAutoplay() {
//       setAvtoplay((autoplay) => !autoplay);
//    }

//    const total = useMemo(() => {
//       return countTotal(slide);
//    }, [slide]);

//    const style = useMemo(
//       () => ({
//          color: slide > 4 ? 'red' : 'black',
//       }),
//       [slide]
//    );

//    useEffect(() => {
//       console.log('styles!');
//    }, [style]);

//    //    const [state, setState] = useState({ slide: 0, autoplay: false });

//    //    function changeSlide(i) {
//    //       setState((state) => ({ ...state, slide: state.slide + i }));
//    //    }

//    //    function toggleAutoplay() {
//    //       setState((state) => ({ ...state, autoplay: !state.autoplay }));
//    //    }

//    return (
//       <Container>
//          <div className="slider w-50 m-auto">
//             <Slide getSomeImages={getSomeImages} />

//             <div className="text-center mt-5">
//                Active slide {slide} <br /> {autoplay ? 'auto' : false}
//             </div>
//             <div style={style} className="text-center mt-5">
//                Total slides: {total}
//             </div>
//             {/* <div className="text-center mt-5">
//                Active slide {state.slide} <br />{' '}
//                {state.autoplay ? 'auto' : false}
//             </div> */}
//             <div className="buttons mt-3">
//                <button
//                   className="btn btn-primary me-2"
//                   onClick={() => changeSlide(-1)}
//                >
//                   -1
//                </button>
//                <button
//                   className="btn btn-primary me-2"
//                   onClick={() => changeSlide(1)}
//                >
//                   +1
//                </button>
//                <button
//                   className="btn btn-primary me-2"
//                   onClick={toggleAutoplay}
//                >
//                   toggle autoplay
//                </button>
//             </div>
//          </div>
//       </Container>
//    );
// };

// const Slide = ({ getSomeImages }) => {
//    const [images, setImages] = useState([]);

//    useEffect(() => {
//       setImages(getSomeImages());
//    }, [getSomeImages]);

//    return (
//       <>
//          {images.map((url, i) => (
//             <img key={i} className="d-block w-100" src={url} alt="slide" />
//          ))}
//       </>
//    );
// };

// function App() {
//    const [slider, setSlider] = useState(true);
//    return (
//       <>
//          <button onClick={() => setSlider(false)}>Click</button>
//          {slider ? <Slider /> : null}
//       </>
//    );
// }

// export default App;

//! 2

// import { useState } from 'react';
// import { Container } from 'react-bootstrap';
// // import { Transition } from 'react-transition-group';
// import { CSSTransition } from 'react-transition-group';
// import './App.css';

// const Modal = (props) => {
//    const duration = 300;

//    // const defaultStyle = {
//    //    transition: `all ${duration}ms ease-in-out`,
//    //    opacity: 0,
//    //    visibility: 'hiddden',
//    // };

//    // const transitionStyles = {
//    //    entering: { opacity: 1, visibility: 'visible' },
//    //    entered: { opacity: 1, visibility: 'visible' },
//    //    exiting: { opacity: 0, visibility: 'hidden' },
//    //    exited: { opacity: 0, visibility: 'hidden' },
//    // };

//    return (
//       <CSSTransition
//          in={props.show}
//          timeout={duration}
//          onEnter={() => props.setShowTrigger(false)}
//          onExited={() => props.setShowTrigger(true)}
//          classNames={'modal'}
//       >
//          {/* {(state) => ( */}
//          <div
//             className="modal mt-5 d-block"
//             // style={{
//             //    ...defaultStyle,
//             //    ...transitionStyles[state],
//             // }}
//          >
//             <div className="modal-dialog">
//                <div className="modal-content">
//                   <div className="modal-header">
//                      <h5 className="modal-title">Typical modal window</h5>
//                      <button
//                         onClick={() => props.onClose(false)}
//                         type="button"
//                         className="btn-close"
//                         aria-label="Close"
//                      ></button>
//                   </div>
//                   <div className="modal-body">
//                      <p>Modal body content</p>
//                   </div>
//                   <div className="modal-footer">
//                      <button
//                         onClick={() => props.onClose(false)}
//                         type="button"
//                         className="btn btn-secondary"
//                      >
//                         Close
//                      </button>
//                      <button
//                         onClick={() => props.onClose(false)}
//                         type="button"
//                         className="btn btn-primary"
//                      >
//                         Save changes
//                      </button>
//                   </div>
//                </div>
//             </div>
//          </div>
//          {/* )} */}
//       </CSSTransition>
//    );
// };

// function App() {
//    const [showModal, setShowModal] = useState(false);
//    const [showTrigger, setShowTrigger] = useState(true);

//    return (
//       <Container>
//          {
//             <Modal
//                show={showModal}
//                onClose={setShowModal}
//                setShowTrigger={setShowTrigger}
//             />
//          }
//          {showTrigger ? (
//             <button
//                type="button"
//                className="btn btn-warning mt-5"
//                onClick={() => setShowModal(true)}
//             >
//                Open Modal
//             </button>
//          ) : null}
//       </Container>
//    );
// }

// export default App;

//! 3

//

import './app.scss';
import Form from './Form';

function App() {
   return (
      <div className="app">
         <Form />
         {/* {asfasfasfasf} */}
      </div>
   );
}

export default App;
