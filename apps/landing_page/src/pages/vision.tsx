import { FoundersSection } from "../components/founders-section";

export function VisionPage() {
  return (
    <div className="flex flex-col">
      {/* Why We Built Skolist */}
      <section className="container py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Why We Built Skolist</h1>
        <p className="text-lg text-gray-600 mb-12">
          We started Skolist because we saw a fundamental gap in how schools approach learning improvement
        </p>

        <h2 className="text-2xl font-bold mb-4">The Problem with Current Assessment</h2>
        <p className="text-gray-700 mb-4">
          Schools conduct tests. Students get scores. Teachers move on to the next topic.
        </p>
        <p className="text-gray-700 mb-4">
          But what happens when a student scores 40%? Or 60%? What specific concepts did they struggle with? Was it weak fundamentals from a previous grade? A misunderstanding of a core principle? Or gaps in prerequisite knowledge?
        </p>
        <p className="text-gray-700 mb-8">
          Traditional assessment systems show <span className="font-bold">what went wrong</span>, but not <span className="font-bold">why</span> it went wrong or <span className="font-bold">how to fix it</span>.
        </p>

        <h2 className="text-2xl font-bold mb-4">The Personalization Challenge</h2>
        <p className="text-gray-700 mb-4">
          Teachers want to help every student. But with 30-40 students per class, multiple subjects, and time constraints, personalized diagnosis is nearly impossible at scale.
        </p>
        <p className="text-gray-700 mb-8">
          Existing edtech platforms offer generic content libraries or live doubt-solving sessions, but they don&apos;t solve the core problem: <span className="font-bold">identifying and addressing individual learning gaps systematically</span>.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Belief: Strategy Over Content Overload</h2>
        <p className="text-gray-700 mb-6">
          We believe that more content is not the answer. What students need is:
        </p>
        <ul className="space-y-3 mb-8 ml-6">
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Clear visibility into their specific weak concepts</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Targeted practice on root causes, not surface-level symptoms</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Iterative feedback that adapts to their progress</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Actionable insights for teachers to guide interventions</span>
          </li>
        </ul>
        <p className="text-gray-700 mb-12">
          Skolist focuses on <span className="font-bold">diagnosis and strategy</span>, not overwhelming students with endless practice sets or gamified distractions.
        </p>

        <h2 className="text-2xl font-bold mb-4">Long-Term Vision for AI in Schools</h2>
        <p className="text-gray-700 mb-6">
          We envision a future where AI is not just a tool for automation, but a partner in personalized learning. A system that:
        </p>
        <ul className="space-y-3 mb-8 ml-6">
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Continuously assesses and adapts to each student&apos;s learning journey</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Empowers teachers with precise, actionable insights</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Scales personalized education without losing the human touch</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">•</span>
            <span className="text-gray-700">Ensures no student falls through the cracks due to unnoticed gaps</span>
          </li>
        </ul>
        <p className="text-gray-700 mb-12">
          Skolist is the first step toward this vision, making learning gaps visible, measurable, and addressable at scale.
        </p>

        <div className="bg-gray-100 border-l-4 border-blue-900 p-8 mb-12">
          <p className="text-lg text-gray-800 mb-2">
            &quot;We&apos;re not building another content platform or gamified app. We&apos;re building intelligence for schools, intelligence that helps every student learn better&quot;
          </p>
          <p className="text-sm text-gray-600">- The Skolist Team</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Join Us on This Journey</h2>
        <p className="text-gray-700 mb-8 text-center">
          We&apos;re working with forward-thinking schools to refine and scale this vision
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Click to Build a Free Personalized Pilot
          </a>
        </div>
      </section>

      {/* Meet Our Founders */}
      <FoundersSection />
    </div>
  );
}
