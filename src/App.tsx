import generatePDF, { Resolution, Margin, Options } from 'react-to-pdf';
import { Template01 } from './templates/template-01';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  const toPDF = async () => {
    console.log('Generating PDF...', templateRef.current);

    if (!templateRef.current) {
      console.error('Template ref is null');
      return;
    }

    // Get all page elements (they have the data-page attribute)
    const pages = templateRef.current.querySelectorAll('[data-page]');
    
    if (pages.length === 0) {
      console.error('No pages found in template');
      return;
    }

    console.log(`Found ${pages.length} pages`);

    // Create PDF with letter format
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'letter',
    });

    // Process each page
    for (let i = 0; i < pages.length; i++) {
      console.log(`Processing page ${i + 1}/${pages.length}`);
      
      const pageElement = pages[i] as HTMLElement;
      
      // Capture the page as canvas
      const canvas = await html2canvas(pageElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Add new page if not the first page
      if (i > 0) {
        pdf.addPage();
      }

      // Letter size in mm: 215.9 x 279.4
      const pdfWidth = 215.9;
      const pdfHeight = 279.4;
      
      // Add image to PDF, fitting to page size
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save('advanced-options.pdf');
    console.log('PDF generated successfully');
  };
  return (
    <div>
      <button onClick={toPDF}>Save PDF</button>
      <Template01 ref={templateRef} />
    </div>
  );
};

export default App;
