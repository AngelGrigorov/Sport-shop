Project Specification

"Power Lab" is a web application for a food additives web shop. 
The client side is a single page app, dynamically updating with React, using JSX, React JS and Bootstrap.
The server is built on Express JS and it is using Mongo Db for storing the data. 
Redux is used as a state management library.
Redux is a predictable state container for JavaScript apps. 
It helps you write applications that behave consistently, run in different environments.
The application consists of users, food products and orders. Each user can register, login and logout. 
Users can also search for the food they are looking for, view each power details and make orders. 
Admins can add, edit and delete food additives entries and approve orders.
-----------------------------------------------------------------------------------------------

***User Functionality 

*User Login 
  - Login in current application using email and password of already registered user. 
*User Register 
  - Register a new user by providing email, password and username. 
*Home 
  - List top-six food additives by user likes 
-----------------------------------------------------------------------------------------------
  
 *** Login User Functionality 
 
*Menu
  - List all food additives. Nine per page ordered alphabetically.  
  - Search food additives by their name
  - Add food additives to the cart or view details
*Food additives Details
  - Show food additives details
  - Add food additives review
  - Each user can like/unlike the show food additives details
*Cart
  - Users add food additives to the cart
  - Users have option to remove product from the cart or refresh the quantity to one
  - Users have option to checkout or to continue shopping
*My orders
  - List user orders
  - Navigate to order details
*Order Details
  - Shows full order details
*User Logout 
  - Logouts from the application. 
-----------------------------------------------------------------------------------------------
 
***Admin Functionality  
 
*food additives add 
  - Create a new food additives entry and save it to the database
*Food additives edit 
  - Edit existing food additives entry and save it to the database
*Food additives delete
  - Remove food additives entry from the database
*Food additives 
  - View all pending orders
  - Navigate to order details
  - Approve order

