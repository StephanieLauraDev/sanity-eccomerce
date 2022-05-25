export default {
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule) => Rule.required().min(10).max(250),
		},
		{
			name: "quantity",
			title: "Quantity In Stock",
			type: "number",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			title: "Categories",
			name: "category",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "category" }],
				},
			],
		},
		{
			name: "rating",
			title: "Rating",
			type: "number",
			validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			name: "numReviews",
			title: "Number of Reviews",
			type: "number",
		},
	],
};
