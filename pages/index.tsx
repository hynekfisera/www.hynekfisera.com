import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-4 2xl:px-0">
        <h1 className="mt-16 text-5xl max-w-[90%] font-bold leading-snug">
          Full-stack web <span className="text-indigo-600">developer</span> and YouTube <span className="text-indigo-600">content creator</span> also interested in UI/UX design and digital art
        </h1>
        <h2 className="mt-4 text-lg font-medium text-indigo-600">
          Check out my projects <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </h2>
      </main>
    </>
  );
};

export default Home;
