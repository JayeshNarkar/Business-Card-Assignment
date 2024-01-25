import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { UserForm } from "./components/UserForm";
import { BusinessCard } from "./components/BusinessCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { userArrayAtom } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const users = useRecoilValue(userArrayAtom);

  useEffect(() => {
    console.log("user changed");
  }, [users]);

  return (
    <>
      <div className="bg-gray-900">
        <h1 className="text-center text-3xl font-bold p-4 text-white">
          Hello User!
        </h1>
      </div>
      <hr className="border-t-2 border-black" />
      <div className="flex items-center justify-center bg-slate-500 p-4">
        <UserForm />
      </div>
      <div className="gap-4 grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-500">
        {users &&
          users.map((user) => (
            <BusinessCard
              key={user._id}
              name={user.name}
              description={user.description}
              linkedin={user.linkedin}
              github={user.github}
              twitter={user.twitter}
              interests={user.interests}
            />
          ))}
      </div>
    </>
  );
}

export default App;
