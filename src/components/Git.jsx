import { useQuery } from "@tanstack/react-query";

const Git = () => {
  const fetchData = async () => {
    const response = await fetch("https://api.github.com/repos/TanStack/query");
    return response.json();
  };
  const { isLoading, isError, data } = useQuery({
    queryKey: "mydata",
    queryFn: fetchData,
  });
  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <p>Something went wrong...</p>;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-44 w-56 rounded-md shadow-lg border px-2 py-2 flex justify-center flex-col items-center">
        <img
          src={data.owner.avatar_url}
          className="h-16 w-16 rounded-full border p-1 relative mx-auto"
        />
        <h1 className="text-center font-bold text-sky-500 font-mono">
          {data.name}
        </h1>
        <h5>
          <label className="font-bold">{data.full_name}</label>
        </h5>
        <label className="font-semibold">
          {data.stargazers_count} <span className="font-thin">Star</span>
        </label>
        <label className="font-semibold">
          {data.forks_count} <span className="font-thin">Forks</span>
        </label>
      </div>
    </div>
  );
};

export default Git;
