const HackathonInfo = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-12 py-8">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          IBM AI Hackathon
        </h2>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700">
          Build the future of Michigan innovation. Join us for a day of coding,
          collaboration, and creating AI solutions that keep opportunities here
          at home—by Michiganders, for Michigan.
        </p>
      </div>

      <div className="rounded-2xl border-4 border-purple-500 bg-purple-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-purple-900">
          The Challenge
        </h3>
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">
            Michigan stands at a pivotal moment. Once the undisputed engine of
            American innovation, our state is ready to reclaim its position as a
            technology leader—not by abandoning our industrial heritage, but by
            reimagining it for the 21st century.
          </p>
          <p className="leading-relaxed">
            While Michigan ranks among the top states in manufacturing output,
            we lag behind in technology adoption and digital transformation
            metrics. Too often, our brightest minds leave for coastal tech hubs,
            and Michigan jobs get outsourced to other states or overseas.
          </p>
          <p className="font-semibold leading-relaxed text-purple-900">
            Our challenge is clear: how do we leverage cutting-edge AI to
            modernize Michigan&apos;s cornerstone industries while keeping
            opportunities here for Michiganders?
          </p>

          <div className="my-6 rounded-lg bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-gray-900">
              The stats tell the story:
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">•</span>
                <span>
                  Michigan graduates leave the state at higher rates than most,
                  seeking tech opportunities elsewhere
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">•</span>
                <span>
                  Many of our legacy industries still operate with outdated
                  systems and manual processes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">•</span>
                <span>
                  Small and medium-sized Michigan businesses cite technology
                  adoption as their #1 barrier to growth
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">•</span>
                <span>
                  Brain drain continues as innovators lack the infrastructure
                  and community to build cutting-edge solutions here
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">•</span>
                <span>
                  Our state has immense untapped potential in AI-driven
                  innovation across manufacturing, supply chain, and agriculture
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-gray-900">
          What We&apos;re Asking You To Build
        </h3>
        <p className="mb-6 leading-relaxed text-gray-700">
          Using <strong>IBM watsonx technology</strong> (watsonx.ai,
          watsonx.data, or IBM Granite models), build an innovative
          proof-of-concept solution that addresses one of these focus areas:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-blue-900">
              Modernizing Michigan Manufacturing
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Transform traditional manufacturing processes with AI-powered
              automation, predictive maintenance, quality control, or supply
              chain optimization that keeps production and jobs in Michigan.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-blue-900">
              Reinvigorating Main Street
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Empower Michigan&apos;s small businesses and retailers with
              accessible AI tools for customer engagement, inventory management,
              market analysis, or operations that help them compete without
              outsourcing.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-blue-900">
              Next-Gen Mobility
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Reimagine transportation and logistics for Michigan&apos;s
              automotive future through autonomous systems, smart
              infrastructure, or connected vehicle technologies developed and
              deployed here.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-2 text-lg font-bold text-blue-900">
              Agricultural Innovation
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Enhance Michigan&apos;s agricultural sector with AI-driven
              solutions for crop management, sustainability, precision farming,
              or food supply optimization.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm md:col-span-2">
            <h4 className="mb-2 text-lg font-bold text-blue-900">
              Building Michigan&apos;s Innovation Ecosystem
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Create tools, platforms, or solutions that help Michigan
              entrepreneurs, developers, and innovators collaborate, access
              resources, prototype ideas, or scale their ventures without
              leaving the state.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-4 border-sky-500 bg-sky-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-sky-900">What We Expect</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Your solution should:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-1 text-2xl">✓</span>
            <span className="leading-relaxed text-gray-700">
              Demonstrate <strong>practical application</strong> of IBM watsonx
              technology to solve a real Michigan industry challenge
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-2xl">✓</span>
            <span className="leading-relaxed text-gray-700">
              <strong>Keep value in Michigan</strong> - show how your solution
              creates or retains opportunities for Michigan workers, businesses,
              and innovators
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-2xl">✓</span>
            <span className="leading-relaxed text-gray-700">
              Show clear <strong>business value</strong> with measurable impact
              on productivity, efficiency, cost savings, or innovation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-2xl">✓</span>
            <span className="leading-relaxed text-gray-700">
              Be <strong>implementable</strong> - create a working
              proof-of-concept or prototype that could be deployed in a Michigan
              business or community
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 text-2xl">✓</span>
            <span className="leading-relaxed text-gray-700">
              <strong>Tell Michigan&apos;s story</strong> - explain how your
              solution helps position Michigan as a technology innovator while
              honoring our industrial roots and keeping our talent home
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <h3 className="mb-4 text-2xl font-bold text-purple-900">
          Deliverables
        </h3>
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-gray-900">
              1. Working Proof-of-Concept
            </h4>
            <p className="text-gray-700">
              Utilizing IBM watsonx.ai, watsonx.data, or IBM Granite models
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-bold text-gray-900">
              2. Brief Presentation (5-7 minutes)
            </h4>
            <p className="mb-3 text-gray-700">Explaining:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">→</span>
                <span>
                  The specific Michigan industry problem you&apos;re addressing
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">→</span>
                <span>
                  How your solution works and leverages IBM watsonx technology
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">→</span>
                <span>
                  The potential impact on Michigan businesses, workers, and
                  communities
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">→</span>
                <span>
                  How your solution keeps jobs and opportunities with
                  Michiganders
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-purple-600">→</span>
                <span>Your roadmap for implementation and scale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathonInfo
