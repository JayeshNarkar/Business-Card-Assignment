import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export function BusinessCard({
  name,
  description,
  linkedin,
  github,
  twitter,
  interests,
}) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md border-2 border-black">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p>{description}</p>
      <div className="pt-4">
        {linkedin && (
          <a
            className="bg-blue-300 mr-2 rounded-md border-black border-2 p-2"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        )}
        {github && (
          <a
            className="bg-gray-500 mr-2 rounded-md border-black border-2 p-2"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        )}
        {twitter && (
          <a
            className="bg-blue-500 rounded-md border-black border-2 p-2"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        )}
      </div>
      <div className="mt-4">
        <strong>Interests:</strong> {interests?.join(", ")}
      </div>
    </div>
  );
}
