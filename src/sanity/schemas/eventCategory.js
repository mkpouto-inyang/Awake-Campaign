export default {
    name: "eventCategory",
    title: "Event Category",
    type: "document",
    fields: [
        {
            name: "id",
            title: "ID",
            type: "string",
            validation: (Rule) => Rule.required()
        },
        {
            name: "label",
            title: "label",
            type: "string"
        }
    ]
}