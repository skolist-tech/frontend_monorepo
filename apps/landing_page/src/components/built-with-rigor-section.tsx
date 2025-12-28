export function BuiltWithRigorSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Built with Rigor and Empathy
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Built by IIT Founders
            </h3>
            <p className="text-gray-600 text-center">
              Created by engineers and educators from IIT with deep expertise in technology and learning science
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Research-Driven Approach
            </h3>
            <p className="text-gray-600 text-center">
              Every feature is grounded in research on learning assessment and personalized education
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Built with Teachers
            </h3>
            <p className="text-gray-600 text-center">
              Developed in collaboration with educators who understand classroom realities
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Early School Pilots
            </h3>
            <p className="text-gray-600 text-center">
              Currently working with multiple schools to pilot the platform, gather feedback, and iterate continuously
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
