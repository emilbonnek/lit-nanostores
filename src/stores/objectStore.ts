import { atom } from "nanostores";

type Person = {
  name: string;
  birthday: Date;
  favouriteIceCream: "vanilla" | "chocolate" | "strawberry";
};

export const objectAtom = atom<Person>({
  name: "John",
  birthday: new Date("1990-01-01"),
  favouriteIceCream: "vanilla",
});
