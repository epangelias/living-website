import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="container mx-auto p-4 pt-2 pb-6 sm:p-6 md:p-6 lg:p-6 xl:p-6 2xl:p-6 max-w-7xl">
      <div class="bg-white dark:bg-gray-800 border-gray-200 border-t border-b border-x-0 border-solid lg:flex lg:flex-wrap-reverse xl:flex-wrap-reverse 2xl:flex-wrap-reverse mb-10 sm:mb-20">
        <div class="lg:w-4/5 sm:w-full xl:w-4/5 2xl:w-4/5 py-4 sm:py-4 xl:py-4 2xl:py-4 px-4 sm:px-4 xl:px-4 2xl:px-4 bg-white dark:bg-gray-800 dark:text-white  dark:border-gray-700 border-gray-200 border-solid">
          <h2 class="font-bold text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl leading-none text-white dark:text-gray-200">
            <span class="bg-amber-400 dark:bg-secondary dark:text-gray-100">
              AI
            </span>-Generated{" "}
            <span class="bg-cyan-400 dark:bg-cyan-400">Wiki</span> Knowledge
            {" "}
            <span class="bg-orange-400 dark:bg-orange-400">Portal</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg sm:text-lg xl:text-lg 2xl:text-lg max-w-max lg:pr-4 xl:pr-4 2xl:pr-4 leading-loose">
            Welcome to the AI-generated Wiki Knowledge Portal! This page is
            designed to explore the infinite potential of artificial
            intelligence-generated content. With a vast array of topics and
            infinite pages, we invite you to explore the vast expanse of human
            knowledge and wisdom.
          </p>
          <ul class="flex flex-wrap justify-center sm:justify-start xl:justify-start 2xl:justify-start mb-6 sm:mb-12">
            <li class="mx-4 sm:mx-2 xl:mx-2 2xl:mx-2 mb-2 sm:mb-4">
              <a
                href="/page-of-20th-century-history"
                class="bg-orange-400 dark:bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-600 text-orange-600 dark:text-orange-600 font-bold text-lg sm:text-lg xl:text-lg 2xl:text-lg  py-2 sm:py-2 xl:py-2 2xl:py-2 px-4 sm:px-4 xl:px-4 2xl:px-4 rounded border border-orange-300 border-solid"
              >
                Explore 20th Century History
              </a>
            </li>
            <li class="mx-4 sm:mx-2 xl:mx-2 2xl:mx-2 mb-2 sm:mb-4">
              <a
                href="/page-of-space-exploration"
                class="bg-cyan-400 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-600 text-cyan-600 dark:text-cyan-600 font-bold text-lg sm:text-lg xl:text-lg 2xl:text-lg  py-2 sm:py-2 xl:py-2 2xl:py-2 px-4 sm:px-4 xl:px-4 2xl:px-4 rounded border border-cyan-300 border-solid"
              >
                Discover Space Exploration
              </a>
            </li>
            <li class="mx-4 sm:mx-2 xl:mx-2 2xl:mx-2 mb-2 sm:mb-4">
              <a
                href="/page-of-artificial-intelligence"
                class="bg-amber-400 dark:bg-amber-400 hover:bg-amber-500 dark:hover:bg-amber-600 text-amber-600 dark:text-amber-600 font-bold text-lg sm:text-lg xl:text-lg 2xl:text-lg  py-2 sm:py-2 xl:py-2 2xl:py-2 px-4 sm:px-4 xl:px-4 2xl:px-4 rounded border border-amber-300 border-solid"
              >
                Explore Artificial Intelligence
              </a>
            </li>
          </ul>
          <div class="lg:w-1/2 xl:w-1/2 2xl:w-1/2 mb-4 sm:mb-4 xl:mb-4 2xl:mb-4">
            <h2 class="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl leading-none text-orange-600 dark:text-gray-400">
              Featured Article
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg sm:text-lg xl:text-lg 2xl:text-lg max-w-max lg:pr-4 xl:pr-4 2xl:pr-4 leading-loose">
              Explore the fascinating world of quantum physics, from the basics
              of wave-particle duality to the implications of Schrödinger's cat.
            </p>
            <a
              href="/page-of-quantum-physics"
              class="bg-orange-400 dark:bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-600 text-orange-600 dark:text-orange-600 font-bold text-lg sm:text-lg xl:text-lg 2xl:text-lg  py-2 sm:py-2 xl:py-2 2xl:py-2 px-4 sm:px-4 xl:px-4 2xl:px-4 rounded border border-orange-300 border-solid"
            >
              Read Now!
            </a>
          </div>
          <div class="lg:w-1/2 xl:w-1/2 2xl:w-1/2 mb-4 sm:mb-4 xl:mb-4 2xl:mb-4">
            <h2 class="font-bold text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl leading-none text-cyan-600 dark:text-gray-400">
              Trending Now
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg sm:text-lg xl:text-lg 2xl:text-lg max-w-max lg:pr-4 xl:pr-4 2xl:pr-4 leading-loose">
              Explore the latest advancements in machine learning, from natural
              language processing to computer vision.
            </p>
            <a
              href="/page-of-machine-learning"
              class="bg-cyan-400 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-600 text-cyan-600 dark:text-cyan-600 font-bold text-lg sm:text-lg xl:text-lg 2xl:text-lg  py-2 sm:py-2 xl:py-2 2xl:py-2 px-4 sm:px-4 xl:px-4 2xl:px-4 rounded border border-cyan-300 border-solid"
            >
              Read Now!
            </a>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-lg sm:text-lg xl:text-lg 2xl:text-lg max-w-max lg:pr-4 xl:pr-4 2xl:pr-4 leading-loose">
            Stay tuned for more exciting developments in the realm of artificial
            intelligence, machine learning, and quantum physics. Follow us for
            the latest updates and insights!
          </p>
          <div class="lg:w-10/12 xl:w-10/12 2xl:w-10/12 mb-6 sm:mb-12">
            <h2 class="font-bold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl leading-none text-gray-600 dark:text-gray-400">
              Get Involved
            </h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg sm:text-lg xl:text-lg 2xl:text-lg max-w-max lg:pr-4 xl:pr-4 2xl:pr-4 leading-loose">
              Contribute to our open-source projects, participate in hackathons,
              or attend our conferences and meetups.
            </p>
            <button class="bg-orange-400 dark:bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-600 text-orange-600 dark:text-orange-600 font-bold text-lg sm:text-lg xl:text-lg 2xl:text-lg  py-2 sm:py-2 xl:py-2 2xl:py-2 px-4 sm:px-4 xl:px-4 2xl:px-4 rounded border border-orange-300 border-solid">
              <a
                href="/page-of-open-source"
                class="text-orange-600 dark:text-gray-400 hover:text-orange-700 dark:hover:text-gray-500"
              >
                Contribute Now!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
