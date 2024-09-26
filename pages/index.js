import Link from "next/link"; // Import Link from Next.js
import AvailableHouses from "@/components/AvailableHouses";
import Footer from "@/components/Footer";
import PopularHousesCarousel from "@/components/PopularHousesCarousel";
import PropertySearch from "@/components/PropertySearch";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  return (
    <div>
      <PropertySearch />
      <PopularHousesCarousel />
      
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session }, // Pass session data to your page
  };
}
