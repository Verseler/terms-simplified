import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>

      <Button asChild>
        <Link to="home">Home </Link>
      </Button>
    </div>
  );
}
