import { UpArea } from "./up-area";
import { DownArea } from "./down-area";

export function GenerationPane() {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <UpArea />
      <DownArea />
    </div>
  );
}
