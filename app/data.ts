const links_1 = [
  {
    title: "Beet Dyed Deviled Eggs",
    url: "https://www.lovebeets.com/recipes/beet-dyed-deviled-eggs/",
  },
  {
    title: "Beet Poke Bowl",
    url: "https://lovebeets.com/recipes/beet-poke-bowl-2/",
  },
];

const links_2 = [
  {
    title: "Google",
    url: "https://www.google.com/",
  },
  {
    title: "Wikipedia",
    url: "https://www.wikipedia.org/",
  },
];
let user_1 = {
  uuid: "11",
  username: "enku",
  password: "1",
  firstname: "Enkhbayar",
  lastname: "Ganbaatar",
  bio: "This is bio",
  links: links_1,
};
let user_2 = {
  uuid: "12",
  username: "other",
  password: "1",
  firstname: "John",
  lastname: "Doe",
  bio: "This is bio",
  links: links_2,
};

export const mockData:any = {enku: user_1, other: user_2};
