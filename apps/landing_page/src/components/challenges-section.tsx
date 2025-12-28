export function ChallengesSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
          The Real Challenges Schools Face Today
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-12">
          Students score low but don&apos;t know the why. Teachers want to help but can&apos;t personalize guidance for every student, eroding parents&apos; trust in schools
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              No Visibility into Gaps
            </h3>
            <p className="text-gray-600">
              Students fail repeatedly without understanding their weak concepts or root causes
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              One-Size-Fits-All Tests
            </h3>
            <p className="text-gray-600">
              Same tests and content for everyone, regardless of individual learning needs.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Overwhelmed Teachers
            </h3>
            <p className="text-gray-600">
              Teachers lack the tools and time to diagnose and address each student&apos;s specific struggles.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              No Actionable Insights
            </h3>
            <p className="text-gray-600">
              Schools have scores but no system that shows what to fix or how to improve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
