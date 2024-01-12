import Gradient from '@bedard/gradient';

const canvas = document.querySelector('.js-gradient')

document.addEventListener('DOMContentLoaded', () => {
  const allSplineViewer = document.querySelectorAll('.js-spline');
  allSplineViewer.forEach((splineViewer) => {
    if (splineViewer) {
      const logo = splineViewer.shadowRoot.querySelector('#logo');
      // remove logo
      logo.parentNode.removeChild(logo);
    }
  });
});

const colorPrimary = '#E0295D';
const colorSecondary = '#470FF4';
const colorYellow = '#FFD046';
const colorPurple = '#71168D';

// init
const init = () => {
    new Gradient(canvas, {
        colors: [colorPrimary, colorSecondary, colorYellow, colorPurple],
        seed: Math.random(),
      });

};

// exports
export { init };
