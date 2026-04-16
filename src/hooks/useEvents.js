import { useQuery } from "@tanstack/react-query";
import { client } from "../lib/sanityClient"
import { eventsQuery } from "../lib/queries";


const fetchEvents = async () => {
  const events = await client.fetch(eventsQuery)

  if (!events) {
    throw new Error("Failed to fetch events")
  }

  return events
}

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 1000 * 60 * 5
  })
}