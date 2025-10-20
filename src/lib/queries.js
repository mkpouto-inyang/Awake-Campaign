export const eventsQuery = `*[_type == "event"] | order(date desc) {
  _id,
  title,
  date,
  time,
  venue,
  attended,
  "thumbnailUrl": thumbnail.asset->url,
  "gallery": gallery[].asset->url,
  overview,
  category->{
    title,
    description
  },
  author->{
    name,
    image
  }
}`


export const singleEventQuery = `*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  date,
  time,
  venue,
  attended,
  "thumbnailUrl": thumbnail.asset->url,
  "gallery": gallery[].asset->url,
  overview,
  author->{
    firstName,
    lastName,
    avatar
  }
}`