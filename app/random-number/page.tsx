export default async function RandomNumber() {
  const data = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new"
  );
  const number = await data.json();

  console.log("revalidating...");

  return <div className="p-4 text-white">{number}</div>;
}

export const revalidate = 20;
