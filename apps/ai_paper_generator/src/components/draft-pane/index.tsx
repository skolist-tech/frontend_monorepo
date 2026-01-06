import { DraftProvider } from "../../context/DraftContext";
import { DraftPane as DraftPaneComponent } from "./DraftPane";

export function DraftPane() {
  return (
    <DraftProvider>
      <DraftPaneComponent />
    </DraftProvider>
  );
}
