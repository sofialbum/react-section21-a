import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
