# Challenge Ana M.Lanz

## HOW TO INSTALL:

npm install

npm start

## DESCRIPTION

I have separated the application in 4 components:

- App: is the root component. It imports the product data from a json file, that simulates the access to an API that returns the list of products, and render the rest of the components.

- Products: renders a list of products, and passes information from its child Product to App.

- Product: Products´ child, renders each product with its features (image,code, price...) and contains the functions to add items for each product to the shoppping cart. It also contain a modal that can be open by clicking in the image and shows the product description. With this modal the product can be added to the cart directly.

- Order: this component is an App child, and renders the total items in the cart, the price and the discounts. 



