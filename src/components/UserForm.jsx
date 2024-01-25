import {
  nameAtom,
  descriptionAtom,
  linkedinAtom,
  githubAtom,
  twitterAtom,
  interestsAtom,
  userArrayAtom,
} from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";

export function UserForm() {
  const [twitter, setTwitter] = useRecoilState(twitterAtom);
  const [github, setGithub] = useRecoilState(githubAtom);
  const [linkedin, setLinkedin] = useRecoilState(linkedinAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [description, setDescription] = useRecoilState(descriptionAtom);
  const [interests, setInterests] = useRecoilState(interestsAtom);
  const setUsers = useSetRecoilState(userArrayAtom);

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      // Make a POST request to the backend
      const response = await axios.post("http://localhost:3000/user", {
        name,
        linkedin,
        github,
        twitter,
        description,
        interests,
      });
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          name,
          linkedin,
          github,
          twitter,
          description,
          interests,
        },
      ]);
      setName("");
      setLinkedin("");
      setGithub("");
      setTwitter("");
      setDescription("");
      setInterests([]);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white p-8 rounded-md shadow-md w-full max-w-md border-2 border-black"
    >
      <div className="mb-4">
        <label className="block mb-2 md:text-2xl font-bold">Name:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"John, Michael, Richard, etc..."}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 md:text-2xl font-bold">Description:</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={"Describe yourself in brief."}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 md:text-2xl font-bold">LinkedIn:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder={"https://www.linkedin.com/in/..."}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 md:text-2xl font-bold">GitHub:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder={"https://github.com/..."}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 md:text-2xl font-bold">Twitter:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
          placeholder={"https://twitter.com/..."}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 md:text-2xl font-bold">Interests:</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          value={interests?.join(", ")}
          onChange={(e) =>
            setInterests(e.target.value.replace(" ", "").split(","))
          }
          placeholder={"Technology, Artificial Intelligence, ..."}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 py-2 mt-2 px-4 text-2xl text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
