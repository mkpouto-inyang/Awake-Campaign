import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "geort75z",
    dataset: "production"
})