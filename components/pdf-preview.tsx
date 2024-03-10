import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

interface PDFPreviewData {
  url: string;
  downloadable: boolean;
  downloadText: string;
}

export default function PDFPreview(data: PDFPreviewData) {
  return (
    <div className="pdf-preview">
      <Document file={data.url} options={options}>
        <Page pageNumber={1} />
      </Document>
      {data.downloadable && (
        <Link className="btn" href={data.url} download>
          {data.downloadText}
        </Link>
      )}
    </div>
  );
}
