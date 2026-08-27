export default function FixMistakesOfPrayer() {
  const mistakes = [
    {
      number: 1,
      title: "Not Making Wudu Properly",
      description:
        "Prayer requires purification. Make sure wudu is completed correctly before beginning Salah.",
      correction:
        "Learn the required steps of wudu and make sure every required part is washed properly.",
    },
    {
      number: 2,
      title: "Rushing Through the Prayer",
      description:
        "Performing Salah too quickly can prevent proper concentration and may affect the correctness of certain actions.",
      correction:
        "Perform every position calmly and allow enough time to complete Ruku, Sajdah, and the sitting positions properly.",
    },
    {
      number: 3,
      title: "Not Standing Straight After Ruku",
      description:
        "Some people move directly from Ruku into Sajdah without properly standing upright.",
      correction:
        "Rise completely from Ruku and stand upright before going into Sajdah.",
    },
    {
      number: 4,
      title: "Incorrect Sajdah Position",
      description:
        "The positions of the body during Sajdah should be performed correctly and with calmness.",
      correction:
        "Make sure the required parts of the body are properly placed during Sajdah and avoid rushing.",
    },
    {
      number: 5,
      title: "Looking Around During Salah",
      description:
        "Frequently looking around can distract the heart and reduce concentration during prayer.",
      correction:
        "Keep your attention focused on the prayer and avoid unnecessary movements or looking around.",
    },
    {
      number: 6,
      title: "Unnecessary Movements",
      description:
        "Playing with clothing, touching the face, moving excessively, or making unnecessary gestures can distract from Salah.",
      correction:
        "Try to remain still and only make movements that are required for the prayer.",
    },
    {
      number: 7,
      title: "Forgetting the Order of Salah",
      description:
        "The actions of Salah have a specific order and should not be performed randomly.",
      correction:
        "Learn the correct sequence of standing, Ruku, standing after Ruku, Sajdah, sitting, and the remaining parts of Salah.",
    },
    {
      number: 8,
      title: "Not Maintaining Concentration",
      description:
        "Thinking about unrelated matters during prayer is a common difficulty.",
      correction:
        "Before Salah, remind yourself that you are standing before Allah and try to understand the words you recite.",
    },
    {
      number: 9,
      title: "Reciting Too Quickly",
      description:
        "Quranic recitation should be performed carefully and clearly rather than being rushed.",
      correction:
        "Recite at a measured pace and try to pronounce the Arabic letters correctly.",
    },
    {
      number: 10,
      title: "Missing the Prayer Time",
      description: "Each obligatory prayer has a designated time.",
      correction:
        "Use a reliable prayer timetable or prayer reminder to help you pray within the prescribed time.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <section className="px-4 py-10 md:py-14 text-center bg-base-200">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-semibold mb-2">
            Salah • Prayer Guide
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-base-content mb-4">
            Common Mistakes in Prayer
          </h1>

          <p className="max-w-2xl mx-auto text-base-content/70 leading-relaxed">
            Prayer is one of the most important acts of worship in Islam.
            Learning the common mistakes can help us improve the quality,
            concentration, and correctness of our Salah.
          </p>
        </div>
      </section>

      {/* Important Note */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="alert alert-info shadow-sm">
          <div>
            <h2 className="font-bold text-lg mb-1">Important Reminder</h2>

            <p className="text-sm leading-relaxed">
              Not every mistake has the same ruling. Some mistakes may affect
              the validity of prayer, while others may affect its perfection or
              concentration. For questions about a specific situation, consult a
              qualified Islamic scholar.
            </p>
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mistakes.map((mistake) => (
            <article
              key={mistake.number}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition"
            >
              <div className="card-body">
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className="flex-none">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                      {mistake.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="card-title text-lg md:text-xl">
                      {mistake.title}
                    </h2>

                    <p className="text-base-content/70 mt-2 leading-relaxed">
                      {mistake.description}
                    </p>

                    <div className="mt-4 p-4 rounded-lg bg-base-200">
                      <p className="text-sm font-semibold text-primary mb-1">
                        How to improve
                      </p>

                      <p className="text-sm text-base-content/80 leading-relaxed">
                        {mistake.correction}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Before Prayer */}
      <section className="bg-base-200">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <p className="text-primary font-semibold">Before Salah</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Prepare Yourself for Prayer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-bold mb-2">1. Purity</h3>
              <p className="text-sm text-base-content/70">
                Make sure you have the required purification before prayer.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-bold mb-2">2. Clothing</h3>
              <p className="text-sm text-base-content/70">
                Ensure your clothing meets the requirements for Salah.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-bold mb-2">3. Qibla</h3>
              <p className="text-sm text-base-content/70">
                Face the Qibla before beginning the prayer.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-bold mb-2">4. Intention</h3>
              <p className="text-sm text-base-content/70">
                Know which prayer you are performing and begin with sincere
                intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* During Prayer */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-primary font-semibold">During Salah</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Keep These Things in Mind
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4 items-start p-5 rounded-xl border border-base-300 bg-base-100">
            <span className="text-primary text-xl">✓</span>

            <div>
              <h3 className="font-semibold">Pray with calmness</h3>
              <p className="text-sm text-base-content/70 mt-1">
                Avoid rushing from one position to another.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-5 rounded-xl border border-base-300 bg-base-100">
            <span className="text-primary text-xl">✓</span>

            <div>
              <h3 className="font-semibold">Focus on your worship</h3>
              <p className="text-sm text-base-content/70 mt-1">
                Try to keep your heart and mind focused on Allah.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-5 rounded-xl border border-base-300 bg-base-100">
            <span className="text-primary text-xl">✓</span>

            <div>
              <h3 className="font-semibold">Follow the correct sequence</h3>
              <p className="text-sm text-base-content/70 mt-1">
                Perform the movements and recitations in their proper order.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-5 rounded-xl border border-base-300 bg-base-100">
            <span className="text-primary text-xl">✓</span>

            <div>
              <h3 className="font-semibold">Avoid unnecessary movement</h3>
              <p className="text-sm text-base-content/70 mt-1">
                Keep your body still unless movement is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quran Reminder */}
      <section className="px-4 pb-14">
        <div className="max-w-4xl mx-auto text-center rounded-2xl bg-primary text-primary-content p-8 md:p-10 shadow">
          <div className="text-3xl mb-4">🕌</div>

          <p className="text-lg md:text-xl font-medium leading-relaxed">
            "Indeed, prayer prohibits immorality and wrongdoing."
          </p>

          <p className="mt-3 text-sm opacity-80">Surah Al-Ankabut — 29:45</p>
        </div>
      </section>
    </div>
  );
}
