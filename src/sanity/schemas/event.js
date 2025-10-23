export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "category",
            title: "Event Category",
            type: "reference",
            to: [{
                type: "eventCategory"
            }],
            description: "Select a category for this event"
        },
        {
            name: "date",
            title: "Date",
            type: "datetime"
        },
        {
            name: "time",
            title: "Time",
            type: "string",
            description: "Time only (e.g. 7:00 PM)"
        },
        {
            name: "venue",
            title: "Venue",
            type: "string"
        },
        {
            name: "attended",
            title: "Attended",
            type: "number"
        },
        {
            name: "overview",
            title: "Overview",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                name: "alt",
                title: "Alt Text",
                type: "string",
                description: "For accessibility and SEO"
                }
            ]
        },
        {
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        {
                            name: "caption",
                            title: "Caption",
                            type: "string",
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: {
                type: "author"
            }
        }
    ]
}