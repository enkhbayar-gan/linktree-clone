import { mockData } from "../data";

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

export default function Profile({ params }: { params: { username: string } }) {
  const userData: UserData = mockData[params.username]; //TODO fetch from backend using params.username
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
  return <div className="text-center mt-10 text-lg">{props.text}</div>;
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
