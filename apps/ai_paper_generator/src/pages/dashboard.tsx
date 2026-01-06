import {
  ActivityProvider,
  PaneProvider,
  ConceptProvider,
  QuestionsProvider,
} from "../context";
import { Layout } from "../components/layout";
import { ErrorBoundary } from "../components/shared";

export function DashboardPage() {
  return (
    <ErrorBoundary>
      <ActivityProvider>
        <PaneProvider>
          <ConceptProvider>
            <QuestionsProvider>
              <Layout />
            </QuestionsProvider>
          </ConceptProvider>
        </PaneProvider>
      </ActivityProvider>
    </ErrorBoundary>
  );
}
