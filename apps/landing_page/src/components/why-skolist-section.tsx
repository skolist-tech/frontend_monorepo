export function WhySkolistSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
          Why Skolist?
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto mb-12">
          Skolist is only platform in the world that identifies student weak areas and delivers end-to-end implementation to address them
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="border-2 border-gray-300 rounded-lg p-8 bg-white">
            <p className="text-sm font-semibold text-gray-500 mb-3">OTHER PLATFORMS</p>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Show Scores / Give Content
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Redundant study material</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Generic test results</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No diagnostic depth</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No personalization for schools, teachers, or students</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-blue-900 rounded-lg p-8 bg-blue-50">
            <p className="text-sm font-semibold text-gray-700 mb-3">SKOLIST</p>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Shows What to Fix and How
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Specific weak concepts per student</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Root cause identification</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Personalized improvement strategies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Clear action plans for teachers & hassle-free implementation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
