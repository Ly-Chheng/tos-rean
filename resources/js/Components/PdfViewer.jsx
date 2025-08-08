import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaArrowLeft, FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const prevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="flex flex-wrap justify-between items-center bg-gray-100 p-4 rounded-md mb-4 gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={pageNumber <= 1}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>
          <span className="text-gray-700 font-medium">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(scale + 0.1)}
            className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
          >
            <FaPlus />
          </button>
          <button
            onClick={() => setScale(Math.max(scale - 0.1, 0.5))}
            className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
          >
            <FaMinus />
          </button>
        </div>
      </div>

      <div className="flex justify-center overflow-x-auto border rounded-md">
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
