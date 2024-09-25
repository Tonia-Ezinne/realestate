import AvailableHouses from "@/components/AvailableHouses";
import PopularHousesCarousel from "@/components/PopularHousesCarousel";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <AvailableHouses />
      <PopularHousesCarousel />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // If no user session exists, redirect to the login page
  if (!session) {
    return {
      redirect: {
        destination: "/signIn", // Change this to your login page
        permanent: false,
      },
    };
  }

  return {
    props: { session }, // Pass session data to your page if needed
  };
}
