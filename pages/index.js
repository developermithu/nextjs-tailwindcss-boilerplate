import Head from "next/head";
import Image from "next/image";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs TailwindCSS Boilerplate</title>
        <meta
          name="keywords"
          content="nextjs tailwindcss starter kit, boilerplate, nextjs starter kit, nextjs boilerplate, starter kit, tailwindcss v3, nextjs v12"
        />
        <meta
          name="description"
          content="nextjs tailwindcss starter kit, boilerplate, nextjs starter kit, nextjs boilerplate, starter kit"
        />
      </Head>

      {/* Hero Section */}
      <section className="container flex flex-col py-10 space-y-6 lg:h-[36.8em] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-gray-800 dark:text-white capitalize">
              nextJs tailwindCSS boilerplate
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <HiOutlineCheckCircle className="w-6 h-6 text-blue-600" />
                <span className="mx-2">Easy to Use</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <HiOutlineCheckCircle className="w-6 h-6 text-blue-600" />
                <span className="mx-2">Clean and Simple Layout</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                <HiOutlineCheckCircle className="w-6 h-6 text-blue-600" />
                <span className="mx-2">
                  Nextjs 12+, TailwinCSS 3+, React Icons
                </span>
              </p>
            </div>
          </div>

          <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
            <form className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="https://miro.medium.com/max/1400/1*9Rmm8Ze3wozoe6HveIjHlg.jpeg"
            alt="glasses photo"
          />
        </div>
      </section>
    </>
  );
}
