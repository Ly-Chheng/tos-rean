import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiEye, FiDownload, FiMaximize2 } from "react-icons/fi";
import Layout from "../layout";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ReadMore = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
  const [containerWidth, setContainerWidth] = useState(400);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);
  const [pageDimensions, setPageDimensions] = useState(null);
  const [views] = useState(68);
  const [downloads] = useState(23);
  const pdfFile = "/assets/book_store.pdf";

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const minW = 250,
        maxW = 600;
      setContainerWidth(Math.min(Math.max(vw * 0.8, minW), maxW));

      const vh = window.innerHeight;
      const minH = 350,
        maxH = 800;
      setContainerHeight(Math.min(Math.max(vh * 0.8, minH), maxH));
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null);
  };

  const onPageLoadSuccess = (page) => {
    // Store the page dimensions when the page loads
    setPageDimensions({
      width: page._pageInfo.view[2],
      height: page._pageInfo.view[3],
    });
  };

  const handlePreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 13));
  };

  const progress = numPages
    ? (pageNumber / numPages) * 100
    : (pageNumber / 13) * 100;

  const getDynamicScale = () => {
    if (!pageDimensions) return 1.0; 

    const { width: pageWidth, height: pageHeight } = pageDimensions;
    const widthScale = containerWidth / pageWidth;
    const heightScale = containerHeight / pageHeight;
    return Math.min(widthScale, heightScale) * 0.95;
  };

  const book = {
    title: "How's It Going?",
    author: "John Doe",
    published: "January 15, 2025",
    year: "2025",
    des: "ការនិយាយការពណ៌នាពីមិត្តល្អ បង្រៀនដោយ អ្នកគ្រូ ឌី សោភ័ណ សាលាបឋមសិក្សាគំរូក្រុង ខេត្តកំពង់ឆ្នាំង #ភាសាខ្មែរ #ថ្នាក់ទី៤ លក្ខខណ្ឌ ប្រើប្រាស់៖ អ្នកត្រូវបានអនុញ្ញាតឱ្យថតចម្លងនិងចែកចាយឯកសារនេះដោយគ្មានការកំណត់ណាមួយ។",
  };
  
  const stemBooks = [
    { title: "The Hunger Games", genre: "Dystopian Fiction", image: "https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg" },
    { title: "Catching Fire", genre: "ប្រាជ្ញាជីវិត", image: "https://mindbooks.com.kh/storage/nbQvZrNki9gL2pNR5rX1OBmmbRS5FEtbH65Q9ttf.jpeg" },
    { title: "Mockingjay", genre: "Kid Story Zone", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALD-u3CtIHfRsZ0tIhbHVgWAPLcdt3cRitw&s" },
    { title: "The Maze Runner", genre: "Dystopian Fiction", image: "https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg" },
    { title: "The Maze Runner", genre: "Dystopian Fiction", image: "https://m.media-amazon.com/images/I/817BQY9AkfL._SY522_.jpg" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          {/* LEFT: PDF Viewer */}
          <div className="lg:col-span-2 flex flex-col items-center bg-white shadow-lg rounded-lg">
            {/* Top Controls */}
            <div className="w-full flex items-center justify-between px-4 py-3 bg-white sticky top-0 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative bg-gray-100 rounded-full p-2">
                  <FiEye className="text-gray-700 text-lg" />
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-2 rounded-full">
                    {views}
                  </span>
                </div>
                <a
                  href={pdfFile}
                  download
                  className="relative bg-gray-100 rounded-full p-2"
                >
                  <FiDownload className="text-gray-700 text-lg" />
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold px-2 rounded-full">
                    {downloads}
                  </span>
                </a>
              </div>
              <div className="bg-gray-100 rounded-full px-4 py-1 text-sm font-medium">
                ទំព័រ {pageNumber} ក្នុង {numPages || 13}
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 px-4 py-1 rounded-full">
                  {pageNumber}
                </span>
                <button className="bg-gray-100 p-2 rounded-full">
                  <FiMaximize2 className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* PDF Display */}
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <>
                <div
                  className="flex flex-col items-center w-full overflow-auto"
                  style={{ height: `${containerHeight}px`, position: "relative" }}
                >
                  <div className="flex items-center w-full justify-between px-4">
                    <button
                      onClick={handlePreviousPage}
                      disabled={pageNumber <= 1}
                      className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed p-2 bg-gray-100 rounded-full"
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      ◀
                    </button>
                    <Document
                      file={pdfFile}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={(error) => {
                        console.error("PDF Load Error:", error.message);
                        setError(error.message);
                      }}
                      loading={<p>Loading PDF...</p>}
                    >
                      <Page
                        key={pageNumber}
                        pageNumber={pageNumber}
                        scale={getDynamicScale()}
                        onLoadSuccess={onPageLoadSuccess}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-lg"
                      />
                    </Document>
                    <button
                      onClick={handleNextPage}
                      disabled={pageNumber >= (numPages || 13)}
                      className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed p-2 bg-gray-100 rounded-full"
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      ▶
                    </button>
                  </div>
                  <div className="w-[200px] mt-2">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{
                          width: `${progress}%`,
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                    <p className="mt-1 text-black text-center text-xs">
                      {pageNumber}/{numPages || 13}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* RIGHT: Related Books */}
          <div className="bg-gray-50 shadow rounded-lg p-4 overflow-y-auto ">
            <h2 className="text-xl font-semibold mb-4">Book Detail</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">នាមៈ៖</p>
                <p className="text-gray-700 ml-4">{book.title}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">ផ្នែក៖</p>
                <p className="text-gray-700 ml-4">{book.author}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">បោះពុម្ព៖</p>
                <p className="text-gray-700 ml-4">{book.published}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">ឆ្នាំ៖</p>
                <p className="text-gray-700 ml-4">{book.year}</p>
              </div>
              <div className="">
                <p className="font-bold text-lg">ការពិពណ៌នា៖</p>
                <p className="text-gray-700 ml-4">{book.des}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        {/* <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-customBlue100  mx-2">
          <Ficap className="text-xl" />
        </div> */}
        {/* <SectionHeader title="សៀវភៅពាក់ព័ន្ធ" linkText="" /> */}
      </div>
      
      <div className="mt-6">
        
        <div className="items-center justify-center gap-2 sm:gap-4 mt-4 md:mt-4 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {stemBooks.map((book, index) => (
    <div key={index} className="flex flex-col items-center gap-4">
      <a href="read_more" className="hover:opacity-90 transition-opacity duration-300">
        <img
          src={book.image}
          alt={`${book.title} book cover`}
          className="shadow-md rounded-lg min-w-[120px] min-h-[180px] w-[160px] h-[220px] lg:w-[200px] lg:h-[300px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </a>
      <p className="text-center text-gray-700 text-sm sm:text-base">{book.genre}</p>
    </div>
  ))}
</div>

      </div>
    </Layout>
  );
};

export default ReadMore;