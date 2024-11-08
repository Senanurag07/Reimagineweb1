const productsData = [
	{
		id: 1,
		name: "Red Printed T-Shirt",
		price: "$50.00",
		description:
			"A stylish red printed T-shirt made from high-quality cotton. Perfect for casual wear.",
		image: "images/product-1.jpg",
	},
	{
		id: 2,
		name: "Blue Printed T-Shirt",
		price: "$40.00",
		description:
			"A comfortable blue printed T-shirt that pairs well with jeans or shorts.",
		image: "images/product-2.jpg",
	},
	{
		id: 3,
		name: "Black Running Shoes",
		price: "$80.00",
		description:
			"Lightweight and durable running shoes designed for everyday exercise.",
		image: "images/product-3.jpg",
	},
	{
		id: 4,
		name: "Gray Sports Shoes",
		price: "$90.00",
		description:
			"High-performance sports shoes with a sleek design and excellent support.",
		image: "images/product-4.jpg",
	},
	{
		id: 5,
		name: "Black Printed T-Shirt",
		price: "$50.00",
		description:
			"A trendy black printed T-shirt with a unique design, ideal for casual outings.",
		image: "images/product-5.jpg",
	},
	{
		id: 6,
		name: "White Sneakers",
		price: "$120.00",
		description:
			"Classic white sneakers that offer comfort and style for everyday wear.",
		image: "images/product-6.jpg",
	},
];

function post() {
	var clutter = "";
	productsData.forEach(function (elem, index) {
		clutter += `<div class="col-2">
        <p>Home / T-Shirt</p>
        <h1>${elem.name}</h1>
        <h4>${elem.price}</h4>
        <select>
            <option>select Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
        </select>
        <input type="number" value="1">
        <a href="" class="btn">Add To Cart</a>

        <h3>Product Details <i class="fa fa-indent"></i></h3>
        <br>
        <p>${elem.description}</p>
        
    </div>`;
	});
	document.querySelector("#postsContainer").innerHTML = clutter;
}

post();
