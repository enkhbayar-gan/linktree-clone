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
  uuid: "1234",
  username: "enku",
  firstname: "Enkhbayar",
  lastname: "Ganbaatar",
  bio: "This is bio",
  links: links_1,
};
let user_2 = {
  uuid: "1234",
  username: "enku",
  firstname: "Enkhbayar",
  lastname: "Ganbaatar",
  bio: "This is bio",
  links: links_2,
};

let user = {
  uuid: "1",
  username: "enku",
  firstname: "Enkhbayar",
  lastname: "Ganbaatar",
  bio: "This is bio",
  links: [
    {
      title: "Google",
      url: "https://www.google.com/",
    }
  ]
}

type Link = {
  title: string;
  url: string;
};

type UserData = {
  uuid: number;
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  links: Link[];
};

let users: any = { enku: user_1, other: user_2 };

export default function Profile({ params }: { params: { username: string } }) {
  const userData: UserData = users[params.username]; //TODO fetch from backend using params.username
  return (
      <main className="flex min-h-screen flex-col items-center px-4 py-8">
        <Avatar firstname={userData.firstname} lastname={userData.lastname} />
        <Bio text={userData.bio} />
        <Links links={userData.links} />
      </main>
  );
}

function Avatar(props: { firstname: string; lastname: string }) {
  const initials = getInitials(props.firstname, props.lastname);
  return (
    <div className="items-center flex justify-center  rounded-full h-14 w-14 bg-slate-500 text-white">
      {initials}
    </div>
  );
}

function Bio(props: { text: string }) {
  return (
      <div className="text-center mt-10 text-lg">{props.text}</div>
  );
}
const Links = ({ links }: Props) => {
  return (
    <>
      {links.map((link, index) => {
        return <Link key={index} title={link.title} url={link.url} />;
      })}
    </>
  );
};

function Link(props: { url: string; title: string }) {
  return (
    <div className="border-black border-solid border-2 mt-10 w-full text-center text-white bg-slate-700 rounded-lg py-2">
      <a href={props.url} target="_blank" rel="noopener">
        <p>{props.title}</p>
      </a>
    </div>
  );
}

type Props = {
  links: Link[];
};



function getInitials(fname: string, lname: string) {
  return fname.charAt(0) + lname.charAt(0);
}
