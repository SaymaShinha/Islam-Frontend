import {
  BookOpen,
  Languages,
  Heart,
  Search,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";

import Divider from "../Components/Divider.jsx";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Read Quran Surah by Surah",
      description:
        "Access the complete Quran organized beautifully for continuous reading, understanding, and reflection.",
    },
    {
      icon: Languages,
      title: "Quran Translations",
      description:
        "Explore Quranic meanings through accessible translations in multiple languages.",
    },
    {
      icon: Heart,
      title: "Save Your Favorites",
      description:
        "Keep your favorite verses and content close for easy access and personal reflection.",
    },
    {
      icon: Sparkles,
      title: "Daily Reflection",
      description:
        "Discover meaningful Quranic content to support your daily spiritual journey.",
    },
    {
      icon: Search,
      title: "Quran Search",
      description:
        "Quickly find Surahs and verses with a simple and intuitive search experience.",
    },
    {
      icon: BookOpen,
      title: "Simple & Clean",
      description:
        "Enjoy a peaceful, distraction-free interface designed for focused Quran reading.",
    },
  ];

  return (
    <>
      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative overflow-hidden bg-base-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text */}

            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles size={16} />A peaceful place for Quranic reflection
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-base-content">
                Discover the <span className="text-primary">Quran</span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-base-content/60 leading-8 max-w-xl">
                Furqan Life is a Quran reading platform that helps you read
                Surahs, explore verses, discover translations, and reflect on
                the words of Allah in a simple and peaceful environment.
              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href="/quran" className="btn btn-primary rounded-xl px-6">
                  <BookOpen size={19} />
                  Read Quran
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/asma-ul-husna"
                  className="btn btn-outline rounded-xl px-6"
                >
                  Explore Asma ul Husna
                </a>
              </div>
            </div>

            {/* Image */}

            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Decorative background */}

                <div className="absolute -inset-5 bg-primary/10 rounded-[2rem] rotate-3" />

                <img
                  src="/quran-2.jpg"
                  alt="Open Quran"
                  className="relative w-64 md:w-80 lg:w-[420px] rounded-[2rem] shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* =====================================
          INTRODUCTION
      ===================================== */}

      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <div className="flex justify-center mb-5">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Quote size={24} />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          A Space for Reading & Reflection
        </h2>

        <p className="mt-4 text-base-content/60 leading-8 max-w-3xl mx-auto">
          Take a moment away from the distractions of everyday life. Read the
          Quran, explore its meanings, and make your journey of reflection
          simple and accessible with Furqan Life.
        </p>
      </section>

      <Divider />

      {/* =====================================
          FEATURES
      ===================================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}

        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">
            Everything you need
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Explore Furqan Life
          </h2>

          <p className="text-base-content/60 mt-4 max-w-2xl mx-auto leading-7">
            A thoughtful platform designed to make Quran reading, exploration,
            and reflection easier.
          </p>
        </div>

        {/* Feature cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
                onClick={() => navigate("/quran")}
              >
                {/* Icon */}

                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-content transition">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>

                <p className="text-base-content/60 leading-7 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================
          CTA
      ===================================== */}

      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto rounded-3xl bg-primary text-primary-content px-6 py-12 md:py-16 text-center shadow-lg">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl bg-primary-content/10 flex items-center justify-center">
              <BookOpen size={28} />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold">
            Begin Your Quran Journey
          </h2>

          <p className="mt-4 opacity-80 max-w-xl mx-auto leading-7">
            Read, explore, and reflect at your own pace.
          </p>

          <a
            href="/quran"
            className="btn bg-white text-primary hover:bg-white/90 border-none rounded-xl mt-7 px-7"
          >
            Start Reading
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
