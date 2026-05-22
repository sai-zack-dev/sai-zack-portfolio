/* eslint-disable @next/next/no-img-element */
import { Timeline } from "@/components/ui/timeline";

export default function Journey() {
  const data = [
    {
      title: "2016 – 2020",
      content: (
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Foundation
          </p>

          <div className="space-y-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                Information Technology High School Diploma (2016–2018)
              </h4>
              <p>
                Started my technology journey by learning C++ basics, computer
                networking fundamentals, and hardware systems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                Industrial Technology Certification (2018)
              </h4>
              <p>
                Explored electrical & electronics systems, Arduino projects,
                hydraulic systems, and pneumatic engineering concepts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                Government Technical Institute - IT Major (2018–2020)
              </h4>
              <p>
                Focused on C++ programming, network fundamentals, computer
                troubleshooting, and hardware maintenance.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "C++",
              "Networking",
              "Computer Hardware",
              "Arduino",
              "Electronics",
              "Troubleshooting",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "2020 – 2022",
      content: (
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Exploration
          </p>

          <div className="space-y-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <p>
              Transitioned into design and frontend development through
              self-study during the pandemic era.
            </p>

            <p>
              Spent countless hours exploring UI/UX design, graphic design, and
              modern web technologies while building personal projects and
              experimenting with creative interfaces.
            </p>

            <p>
              This phase shaped my passion for combining design thinking with
              software engineering.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "UI/UX",
              "Graphic Design",
              "HTML",
              "CSS",
              "JavaScript",
              "Frontend Development",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "2022 – 2024",
      content: (
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Professional Growth
          </p>

          <div className="space-y-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <p>
              Worked full-time as a software engineer while simultaneously
              completing an OTHM Diploma in Information Technology.
            </p>

            <p>
              Built real-world applications, collaborated on production systems,
              and gained hands-on experience in backend development, APIs,
              server management, and scalable architecture.
            </p>

            <p>
              This period helped me bridge academic learning with practical
              engineering experience.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Laravel",
              "PHP",
              "Linux",
              "System Architecture",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "2024 – 2026",
      content: (
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Cybersecurity Exposure
          </p>

          <div className="space-y-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <p>
              Completed a Bachelor's degree in Cybersecurity while continuing to
              grow as a software engineer.
            </p>

            <p>
              Although cybersecurity is not my primary specialization, the
              experience strengthened my understanding of secure system design,
              privacy, vulnerability analysis, and attacker mindset.
            </p>

            <p>
              I now apply security-first thinking when designing and developing
              software systems.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Cybersecurity",
              "Secure Software Design",
              "Privacy",
              "Vulnerability Analysis",
              "Network Security",
              "Risk Awareness",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "Now",
      content: (
        <div>
          <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            AI/ML Focus
          </p>

          <div className="space-y-4 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
            <p>
              Currently focused on AI/ML and intelligent systems development.
            </p>

            <p>
              My goal is to combine software engineering, system architecture,
              and cybersecurity foundations with modern AI technologies to build
              scalable, intelligent, and resilient products.
            </p>

            <p>
              Exploring areas such as AI applications, intelligent automation,
              anomaly detection systems, and human-centered software design.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Intelligent Systems",
              "Automation",
              "Natural Language Processing",
              "Full Stack Engineering",
              "System Design",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs dark:border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}