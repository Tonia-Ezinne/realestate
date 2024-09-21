import { getSession } from "next-auth/react";
import AvailableHouses from "@/components/AvailableHouses";
import PopularHousesCarousel from "@/components/PopularHousesCarousel";

export default function Home() {
  return (
    <>
      <div>
        <AvailableHouses />

        <PopularHousesCarousel />
      </div>
    </>
  );
}

// Use getServerSideProps to check the session and redirect if not logged in
export async function getServerSideProps(context) {
  const session = await getSession(context);

  // If there's no session, redirect to the login page
  if (!session) {
    return {
      redirect: {
        destination: '/signIn', // Redirect to your login page
        permanent: false,
      },
    };
  }

  // Pass the session data to the page as a prop
  return {
    props: { session },
  };
}
