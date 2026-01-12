import generatePDF, { Resolution, Margin, Options } from 'react-to-pdf';
import { Template01 } from './templates/template-01';
import { useRef } from 'react';

const options: Options = {
  filename: 'advanced-options.pdf',
  // 'save' or 'open', default is 'save'
  method: 'save',
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.HIGH,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: 'letter',
    // default is 'portrait'
    orientation: 'portrait',
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: 'image/png',
    qualityRatio: 1,
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};

const App = () => {
  const templateRef = useRef<HTMLDivElement>(null);
  const toPDF = () => {
    generatePDF(templateRef, options);
  };
  return (
    <div>
      <button onClick={toPDF}>Save PDF</button>
      <Template01 ref={templateRef} />
    </div>
  );
};

export default App;
