import profile from "../../data/profile.json";
import socials from "../../data/socials.json";

import { GrGithub, GrLinkedin } from "react-icons/gr";
import Occupations from "../Occupations";
import Navigation from "../commons/Navigation";

const Profile = () => {
  return (
    <section className="w-full flex flex-col text-neutral-100 py-12 px-6 sm:px-12 sm:py-16 lg:px-0 lg:py-0 lg:justify-between h-full">
      <div className="space-y-10">
        <h1 className="text-neutral-100 font-bold text-2xl sm:text-4xl tracking-tight lg:text-2xl xl:text-5xl">
          {profile.name}
        </h1>
        <div className="relative h-6 mt-4">
          <Occupations />
        </div>
      </div>
      <div>
        <Navigation />
        <div className="mt-8 flex space-x-4 sm:mt-12 xl:mt-10 xl:space-x-8">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              className="text-lime-400 w-8 aspect-square hover:opacity-75 transition-opacity xl:w-10"
            >
              {social.id === "github" ? (
                <GrGithub className="w-full h-full" />
              ) : (
                <GrLinkedin className="w-full h-full" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
