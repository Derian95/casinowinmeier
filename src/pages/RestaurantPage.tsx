import  { FC, useEffect, useState } from 'react';
import { Loader } from '../common/components';
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface RestaurantePageProps {
  
}

export const RestaurantePage: FC<RestaurantePageProps> = ({}) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [height, setHeight] = useState(window.innerHeight);
  
    const updateWidth = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
  
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    };
  
    const nextPage = () => {
      if (currentPage && numPages && currentPage < numPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
    }, []);
  
    if (loading) return <Loader/>;
  
    return (
      <div>
        <div className="grid place-items-center relative">
          <div className="h-14 fixed top-0 left-0 z-50 bg-white py-4 px-1">
            <a
              href="/catalogoWM.pdf"
              download="catalogo-keops.pdf"
              className="bg-metal w-fit"
            >
              Descargar
            </a>
           
          </div>
          <div className="fixed bottom-[5px] left-0 z-50">
          <p className="ml-16 mb-5">{currentPage} de {numPages}</p>
  
          <button onClick={prevPage} disabled={currentPage === 1} className=" w-fit mx-2 bg-orange-400 p-2 text-white rounded-sm">
          {"<"} Anterior 
            </button>
            <button onClick={nextPage} disabled={currentPage === numPages} className=" w-fit bg-orange-400 p-2 text-white rounded-sm">
              Siguiente {">"}
            </button>
          </div>
          <Document
            file="/rest.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className={`mt-14`}
          >
            <Page
              key={`page_${currentPage}`}
              pageNumber={currentPage}
              width={width < 800 ? width * .9 :width * .9 }
              height={height}
  />
          </Document>
        </div>
      </div>
    );
  };
  