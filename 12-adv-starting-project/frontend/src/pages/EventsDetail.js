import { useParams, Link } from "react-router-dom";

const EventsDetailPage = () => {
    const params = useParams();

  return (
  <>
    <h1>Events Detail</h1>
    <p>Event ID: {params.eventId}</p>
    <p><Link to='..' relative='path'>Back</Link></p>
  </>
  );
};

export default EventsDetailPage;
