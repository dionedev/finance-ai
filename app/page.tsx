import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="flex h-full w-screen flex-col items-center justify-center">
      <UserButton showName />
    </div>
  );
};

export default Home;
