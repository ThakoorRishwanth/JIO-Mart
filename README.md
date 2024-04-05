# ZEN-MART
This repository houses the collaborative efforts to create a stunning and functional website for ZEN_MART, Our team is dedicated to bringing the elegance and style of ZEN_MART to the digital realm, focusing on user-friendly design and seamless navigation.

# Objective

This project was created to put into practice the coding and problem-solving skills learned at Masai School and to collaborate to create a fully functioning website. The project was created during Construct Week here at Masai, completed in just 5 days, and served as a collaborative tool to explore, learn, and grow.

# Project Type

Front_End The project is mainly a front-end project with added dynamic capabilities using a mock API created by json-server. It has primarily been built using HTML, CSS, JavaScript and Bootstrap 5.3 as a framework.

# Deployed App

Both the front-end and the mock server have been deployed using render.com. The deployed links can be accessed below.

*Frontend: [https://zen-mart.netlify.app/] *Backend: [https://zen-mart-3.onrender.com/]

#Director Structure

ZEN_MART/ |--Images/ | |--ZEN-MARTLogo/ | |--userTemplate/ | |--adminDashBoard/ |--backend/ |--scripts/

## Video Walkthrough of the Project

+ A YouTube video explaining the entire project and showcasing the features and functionalities can be accessed here: [https://youtu.be/eaobP-AiLLk]
+ A YouTube video answering some of the questions related to the project can be found here: [https://youtu.be/-9WOPlEqS-4]
 
## Video Walkthrough of the CodeBase

- A walkthrough of the codebase and the folder structure can be accessed here on YouTube: [https://youtu.be/C_B_O9NwaMc]

## Features

+ Dynamically added elements using a mock server
+ Responsive and dynamic website
+ Dynamic elements added using the Bootstrap 5.3 framework
+ Admin dashboard for managing the products
  
## Installation and Getting Started

+ After downloading the project, follow these steps to get the project up and running :
  + `npm install` while on the main directory to install all the dependencies(Bootstrap 5.3)
  + Move into the backend directory using `cd ./backend`
  + `npm install` while on the backend directory to install all the dependencies ( json-server, json-server-auth, cors)
    
+ A mock server has been deployed for the backend and can be found here: []
  * If you would like to deploy the server on the local system, you can use the following command while in the backend directory: `npx json-server db.json -m ./node_modules/json-server-auth/ or npm run start`

+ Admin Dashboard and related functionalities can only be accessed using the admin credentials. Currently, there is no way to access these elements without using the login credentials provided.

## Usage

+ Regular Functionalities:
  1. Get started on the landing page where you can see the Navbar with logo searchbar cart and login.
     ![image](![Screenshot 2024-04-04 215734](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/1eb543e7-7881-4886-bcf7-76a52eb8c87e)

2. hovering on the elements which are present on the navbar can see the Dropdown of elements.
    ![image](![Screenshot 2024-04-04 220125](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/2724b86e-3f34-4faf-b996-de0d1ab6dec4)

3. When Scroll Down on Landing Page there are some Cards Which are dynamically visible from the Backend.
 ![image]![Screenshot 2024-04-04 220153](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/0550165a-f39b-4fdf-a6c6-4705d58eb1e5)

4. By Clicking on the Groceries Dropdown elements it will take to the Products/Groceries page
   ![image]![Screenshot 2024-04-04 220223](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/55d99497-3b5a-45de-ac93-aa95bdb7c6a7)

5. The Cards in the Product/Groceries page were added dynamically from the Backend, Clickable add to cart button with functionality which will add to cart the product when you click on the add to cart
 ![image]![Screenshot 2024-04-04 220315](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/53276bc4-5c62-4d62-8991-c20b3f951ce5)

6. For Each and every page the footer is present
![image]![Screenshot 2024-04-04 220246](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/efdae150-47a9-43e7-989c-5f47050ea891)

7. We can go to the Cart Page by Clicking on the Cart Symbol it will take you to the Cart and there are products visible which ever added tto cart by clicking on the add to cart
   ![image]![Screenshot 2024-04-04 220315](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/039628c3-ea6f-4f58-95ba-6637a3a9e1a2)

8. Offers Page were Present in the Hamburger Section clicking on the offers will take you the offers page
   ![image]![Screenshot 2024-04-04 220331](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/66a13a02-e411-424b-ba08-755d6231397b)

9.  About us Page were Present in the Hamburger Section clicking on the About us will take you the About us page
    ![image]![Screenshot 2024-04-04 220346](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/a33d9f9f-0b79-42e4-bb73-965efdae02da)

10. Contact us Page were Present in the Hamburger Section clicking on the Contact us will take you the Contact us page
    ![image]![Screenshot 2024-04-04 220404](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/14bc4c04-0a87-47dd-ae1a-9a87e77aafd3)

11. Clicking on the login button from Navbar will take you the Login page where you can enter your credentials if are existing user else you need to register.
12. Click on the login button and enter the following credentials: `email: Thakoor@gmail.com` `password: 123456789` **You must use these credentials to access the admin dashboard.**
13. In DashBoard the Data will fetch dynamically of the users and Groceris
    ![image]![Screenshot 2024-04-04 220422](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/b488f639-82e6-4898-85df-4c9a08de13c8)
    ![image]![Screenshot 2024-04-04 220519](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/0952b595-d903-4418-9fa0-9d6ec94fb61d)

14. In Admin DashBoard you can find the products on sidebar clicking on that it will take you to the AdminProducts From where the Admin can add the Products edit the Products and Delete the Products the Products page Contain the Pagination as well
    ![image]![Screenshot 2024-04-04 220545](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/4eaa42e6-c736-466a-8e24-a29af92f37bd)
    ![image]![Screenshot 2024-04-04 220556](https://github.com/ThakoorRishwanth/ZEN-Mart/assets/154314786/314c24aa-0bb8-453e-b577-3f028539326e)

15.  You can log out of the dashboard using the logout button on the sidebar.

## Credentials

- for admin :
   `email: Thakoor@gmail.com
    password: 123456789`

	- Admin Dashboard **can only be accessed** by using the above-given credentials. Login by clicking the login button on the navbar on the home page.

 ## Technology Stack

- HTML
- CSS
- JavaScript
- Bootstrap Library (Bootstrap 5.3)






