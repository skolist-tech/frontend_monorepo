import { Button } from "@skolist/ui";
import { Download, Printer } from "lucide-react";
import { useDraftContext } from "../../context/DraftContext";
import { useQuestionsContext } from "../../context/QuestionsContext";
import { generatePDF, printPaper } from "../../utils/pdfGenerator";

export function HtmlPreview() {
  const { draft, sections } = useDraftContext();
  const { questions } = useQuestionsContext();

  if (!draft) return null;

  const handleDownload = async () => {
    try {
      // We'll target the preview inner content
      await generatePDF("paper-preview-content", draft.paper_title || "paper");
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <div className="flex h-full flex-col bg-muted/30">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b bg-background p-4 shadow-sm">
        <h2 className="font-semibold">Live Preview</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={printPaper}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button size="sm" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex flex-1 justify-center overflow-auto p-8">
        {/* A4 Paper Container */}
        <div
          id="paper-preview-content"
          className="min-h-[297mm] w-[210mm] bg-white p-[15mm] text-black shadow-lg"
          style={{ fontFamily: "Times New Roman, serif" }} // Classic paper font
        >
          {/* Header */}
          <div className="mb-6 border-b-2 border-black pb-4 text-center">
            {draft.institute_name && (
              <h1 className="mb-2 text-2xl font-bold uppercase tracking-wide">
                {draft.institute_name}
              </h1>
            )}
            <h2 className="mb-1 text-xl font-semibold">
              {draft.paper_title || "Examination Paper"}
            </h2>
            {draft.paper_subtitle && (
              <h3 className="mb-2 text-lg italic">{draft.paper_subtitle}</h3>
            )}

            <div className="mt-4 flex justify-between text-sm font-semibold">
              <span>Time: {draft.paper_duration || "N/A"}</span>
              <span>Max Marks: {draft.maximum_marks || "N/A"}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {sections.map((section) => {
              const sectionQuestions = questions
                .filter(
                  (q) => q.is_in_draft && q.qgen_draft_section_id === section.id
                )
                .sort(
                  (a, b) =>
                    (a.position_in_section || 0) - (b.position_in_section || 0)
                );

              if (sectionQuestions.length === 0) return null;

              return (
                <div key={section.id} className="section">
                  <div className="mb-3 text-lg font-bold uppercase underline decoration-1 underline-offset-4">
                    {section.section_name}
                  </div>
                  <div className="space-y-4">
                    {sectionQuestions.map((q, qIdx) => (
                      <div
                        key={q.id}
                        className="question-block break-inside-avoid"
                      >
                        <div className="flex gap-2">
                          <span className="min-w-[20px] font-bold">
                            {qIdx + 1}.
                          </span>
                          <div className="flex-1">
                            <div className="mb-2">{q.question_text}</div>

                            {/* MCQ Options */}
                            {["mcq4", "msq4"].includes(q.question_type) && (
                              <div className="ml-4 grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                                {q.option1 && <div>(a) {q.option1}</div>}
                                {q.option2 && <div>(b) {q.option2}</div>}
                                {q.option3 && <div>(c) {q.option3}</div>}
                                {q.option4 && <div>(d) {q.option4}</div>}
                              </div>
                            )}
                          </div>
                          <div className="whitespace-nowrap text-sm font-semibold">
                            [{q.marks}]
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer / End of Paper */}
          <div className="mt-12 border-t pt-4 text-center text-sm">
            *** End of Paper ***
          </div>
        </div>
      </div>
    </div>
  );
}
