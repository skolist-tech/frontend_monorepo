/**
 * PDF Generator Utility
 * Converts HTML preview to downloadable PDF
 */

type Margin4 = [number, number, number, number];

export async function generatePDF(
  elementId: string,
  filename: string = "question-paper"
): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with ID "${elementId}" not found`);
  }

  const html2pdf = (await import("html2pdf.js")).default;

  const options = {
    margin: [10, 10, 10, 10] as Margin4,
    filename: `${sanitizeFilename(filename)}.pdf`,
    image: {
      type: "jpeg" as const,
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  await html2pdf().set(options).from(element).save();
}

export async function generatePDFBlob(elementId: string): Promise<Blob> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with ID "${elementId}" not found`);
  }

  const html2pdf = (await import("html2pdf.js")).default;

  const options = {
    margin: [10, 10, 10, 10] as Margin4,
    image: {
      type: "jpeg" as const,
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait" as const,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (html2pdf().set(options).from(element) as any).output("blob");
}

export function printPaper(): void {
  window.print();
}

function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[<>:"/\\|?*]/g, "")
    .replace(/\s+/g, "_")
    .substring(0, 100);
}
