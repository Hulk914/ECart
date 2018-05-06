# Neutrino
Basic E-commerce add to cart functionality in nodeJS and Angular 5<br>

# Backend
The backend is created using nodeJS and express framework. Follow the steps mentioned to get the server running.<br>
-> run mongo server on default port.<br>
-> Go to Neutrino/Backend and run command node ./app.js to start the server.<br>
-> You should see server is running message in case there are no errors. The server will run on port 3000.<br>

# APIS
-> GET /api/products will return a list of products along with the count of products added to the cart.<br>
-> POST /api/products/:id will add the product with the id passed as param and body containing the data to be added to the cart model in mongo.<br>
-> DELETE /api/products/:id will delete the product with productId as id in the carts collection.<br>

# Database
-> The name of the db is neutrino_products and name of the collections are carts and products. The ObjectId generated by the products collection records will be added to carts collection as productId.<br>

# UI
-> The UI runs on port 4200.<br>
-> go to Frontend/neutrino and give command ng serve.<br>
-> On clicking the add to cart the count of items in cart will be displayed on the top in the jumbotron. If the items are 0 then nothing will be displayed.<br>
-> The remove button will remove the entry from the carts collection and decrement the count of items in cart.<br>
-> if item is added once, it will be disabled and remove will be enabled.<br>
-> if item is removed then the removed button is disabled and add is enabled.<br>
-> random image will be obtained from lorem picsum.<br>

Note: Do npm install to get dependencies from package.json
