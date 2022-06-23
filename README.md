<!-- <h1 align="center">
<img
		width="250"
		alt="To Do Application - Simple"
		src="https://github.com/API-AutoFlow/To-Do-Basic/blob/master/preview/logo.gif">
</h1> -->
<h2 align="center">
  SNS-Facebook
</h2>


<!-- https://github.com/Ileriayo/markdown-badges -->
<!-- use https://shields.io/ to create the image -->
<p align="center">

<img alt="Last Commit" src="https://img.shields.io/badge/react-v17.0.37-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img alt="Last Commit" src="https://img.shields.io/badge/API%20AutoFlow-v2.2.6-2cb706.svg?style=for-the-badge">
<img alt="Last Commit" src="https://img.shields.io/badge/mysql-v8.0.29-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white">

</p>

<p align="center">
	<img src="https://github.com/API-AutoFlow/To-Do-Basic/blob/master/preview/preview.gif">
</p>

## Live demo

Check the live demo here 👉️ [https://www.interactor.com/demos/](https://www.interactor.com/demos/to-do-simple)

## Overview
🚀 **This is a production ready and complete solution.  It can be modified for your needs and deployed in the environment of your choice.** 

🎓 **Perfect for learning the fundamentals of API AutoFlow.** 

Single page application with basic read and write to database.

More features will be added to the project in the future.

The UI of this project was inspired by this [saifulshihab's facebook-clone](https://github.com/saifulshihab/facebook-clone).


## Screenshots

<img
		width="210"
		alt="Capture 1"
		src="https://github.com/haootk7293/facebook-app/preview/capture-1.png">
<img
		width="210"
		alt="Capture 2"
		src="https://github.com/haootk7293/facebook-app/preview/capture-2.png">


## Installation and usage

The easiest way is to clone the entire application from the cloud marketplace. But, feel free to customize the application by running it on your local computer.


<!-- Authors and contributors. Once you complete the application, please contact us. We will help upload the solution in our cloud. -->


### Running on the Cloud
Follow the instructions on the cloud marketplace listing to clone the application (instance) to your account.


<!-- #### Amazon AWS
Not yet listed

#### Google cloud
Not yet listed-->

#### Oracle
[https://cloudmarketplace.oracle.com/marketplace/en_US/listing/95466332](https://cloudmarketplace.oracle.com/marketplace/en_US/listing/95466332)

<!-- #### Docker
Not yet listed 

#### Kubernetes
Not yet listed -->


### Running on the Local Computer
To run it locally to customize the application, please follow below instructions.

#### Download 
Clone this repository :

```
git clone https://github.com/API-AutoFlow/SNS-Facebook.git

```

#### Frontend
Install & Run ReactJS Package:

```
cd frontend
yarn install   
yarn build:tailwindcss
yarn start 
```

#### Backend
Install & Run API AutoFlow packages :

<details>
  <summary>► MAC: (press to expand)</summary>
  
  ```
  cd backend/macos/api_interactor/bin
  ./api_interactor start 
  ```
  
  Open up the browser and go to below URL
  
  ```
  http://localhost:4000
  ```
  
  🚨 IMPORTANT: Run the servers by pressing the ▶️ button
  
  Reference:
  http://www.interactor.com/product/autoflow/installation/macos
</details>

<details>
  <summary>► Windows: (press to expand)</summary>
  
  🚨 IMPORTANT: Open the terminal (cmd) using **Run as Administrator**
  ```
  cd /backend/windows/api_interactor/bin
  ./api_interactor install 
  ./api_interactor start 
  ```
 
  Open up the browser and go to below URL
  
  ```
  http://localhost:4000
  ```
  
  🚨 IMPORTANT 🚨 Run the servers by pressing the ▶️ button
	
	
  Reference:
  http://www.interactor.com/product/autoflow/installation/windows
  
</details>



<details>
  <summary>► Linux: (press to expand)</summary>
  
  Step 1: Download the linux version
  www.interactor.com/product/autoflow/download
  
  Step 2: Open the terminal after downloading the software and Untar the file. For example: 
  
  ```
  tar -xzf autoflow_ubuntu20.tar
  ```

  Step 3: Run API AutoFlow command
  
  
  ```
  cd home/api_interactor/bin
  ./api_interactor start 
  ```
  
  Step 4: Open up the browser and go to below URL
  
  ```
  http://localhost:4000
  ```
  
  Step 4: Run the servers by pressing the ▶️ button
  
  Reference:
  http://www.interactor.com/product/autoflow/installation/linux
</details>

#### Database
Unfortunately, there's no easy way to just clone the entire database. 

You first need to install the database in your computer and follow the instructions below to dump the data to your newly installed database.


Install MySQL:<br/>
https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/

Install Workbench:<br/>
https://dev.mysql.com/downloads/workbench/

Import data to data:<br/>
https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-management.html


🚨 IMPORTANT: Use the file **_dump.sql_** to import into your database


## Props

### API Endpoints

| No. | Name           | Type     | Endpoint  | Description|
| --- | -------------- | -------- | --------- | ---------- |
| 1 | `User Register`       | POST     | /api/sessions         | Create a user |
| 2 | `User Login`         | POST      | /api/sessions/login         | Login with user account |
| 3 | `User Update`       | PATCH    | /api/sessions/users         | Edit user information|
| 4 | `User Delete`       | DELETE   | /api/sessions/users         | Delete user information |
| 5 | `Board Create`       | POST     | /api/board         | Create a board |
| 6 | `Board List`         | GET      | /api/board/list         | Get list of board data |
| 7 | `Board Info`         | GET      | /api/board         | Get single board data |
| 8 | `Board Update`       | PATCH    | /api/board         | Edit board data |
| 9 | `Board Delete`       | DELETE   | /api/board         | Delete board data |
| 10 | `Comment Create`       | POST     | /api/comment         | Comment on board |
| 11 | `Comment List`         | GET      | /api/comment         | Get a list of comments for a board |
| 12 | `Comment Delete`         | DELETE      | /api/comment         | Delete board comment |
| 13 | `Reaction Create`       | POST     | /api/reaction         | Add reaction to board |
| 14 | `Reaction List`         | GET      | /api/reaction         | Get the reaction information of the board |
| 15 | `Reaction Delete`         | DELETE      | /api/reaction         | Cancel the board's reaction |

### Database Tables

`user`
| Column | Datatype | Defualt | NULL | KEY |
| --- | -------------- | -------- | --------- | --------- |
| id | BIGINT |   | NO | PK |
| username | VARCHAR |   | NO | |
| email | VARCHAR |   | NO | |
| first_name | VARCHAR |   | NO | |
| last_name | VARCHAR |   | NO | |
| password | VARCHAR |   | NO | |
| profile_image | VARCHAR | NULL | YES | |
| level | INT | NULL | YES | |
| status | INT | 0 | YES | |
| created_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| created_by | BIGINT | 0 | YES | |
| updated_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| updated_by | BIGINT | 0 | YES | |
| cover_image | VARCHAR | NULL | YES | |
| description | TEXT | NULL | YES | |
| current_city | VARCHAR | NULL |  YES| |
| workplace | VARCHAR | NULL | YES | |
| school | VARCHAR | NULL | YES | |

`board`
| Column | Datatype | Defualt | NULL | KEY |
| --- | -------------- | -------- | --------- | --------- |
| id | BIGINT |   | NO | PK |
| content | VARCHAR | NULL | YES | |
| writer | INT |  | NO | |
| image | VARCHAR | NULL | YES | |
| security | VARCHAR | NULL | YES | |
| created_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| created_by | BIGINT | 0 | YES | |
| updated_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| updated_by | BIGINT | 0 | YES | |

`comment`
| Column | Datatype | Defualt | NULL | KEY |
| --- | -------------- | -------- | --------- | --------- |
| id | BIGINT |   | NO | PK |
| content | VARCHAR |  | NO | |
| writer | INT |  | NO | |
| board_id | INT |  | NO | |
| created_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| created_by | BIGINT | 0 | YES | |
| updated_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| updated_by | BIGINT | 0 | YES | |

`reaction`
| Column | Datatype | Defualt | NULL | KEY |
| --- | -------------- | -------- | --------- | --------- |
| id | BIGINT |   | NO | PK |
| user_id | INT |  | NO | |
| type | INT | NULL | YES | |
| board_id | INT |  | NO | |
| created_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| created_by | BIGINT | 0 | YES | |
| updated_at | TIMESTAMP | CURRENT_TIMESTAMP | YES | |
| updated_by | BIGINT | 0 | YES | |


## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!


<!-- ## Contributors
 -->


<!-- ALL-CONTRIBUTORS-LIST:END -->
