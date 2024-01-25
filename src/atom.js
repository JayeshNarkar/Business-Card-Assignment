import {atom, selector} from 'recoil';
import axios from "axios";

export const nameAtom = atom({
    key: "name",
    default: ''
})

export const linkedinAtom = atom({
    key:"linkedin",
    default: ""
})

export const githubAtom = atom({
    key:"github",
    default: ""
})

export const twitterAtom = atom({
    key:"twitter",
    default: ""
})

export const descriptionAtom = atom({
    key:"description",
    default: ""
})

export const interestsAtom = atom({
    key:'interests',
    default : []
})

export const userArrayAtom = atom({
    key: "userArray",
    default: selector({
      key: "userArraySelector",
      get: async () => {
        try {
          const response = await axios.get("http://localhost:3000/users");
          return response.data;
        } catch (error) {
          console.error("Error fetching users:", error);
          return [];
        }
      },
    }),
  });