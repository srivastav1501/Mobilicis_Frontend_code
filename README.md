# Mobilicis_Frontend

# ASSIGNMENT

TO CREATE A TABLE DATA ACCORDING TO CONDITIONS PROVIDED IN ASSIGNMENT


## FOLDER STRUCTURE

created a react app inside client FOLDER
```bash
  npm create-react-app .
```
created package.json inside server FOLDER
```bash
  npm init -y
```

## INSTALLATION

installed packages axios antd inside react app
```bash
  npm i axios antd
```
installed packages cors,dotenv,express,mongoose antd inside react app
```bash
  npm i cors dotenv express mongoose
```


## About server 
- created app.js folder
 inside app.js created server and used middlewares

- created constant folder
inside this stored data provided in the assignment

- inside db folder
connection with mongoose

- inside modals folder
created userschema to store data in mongoose database

- inside routes folder
created five different routes and filtered data from mongoose database according to the instructions provided in assignment


## About client
- INSIDE SRC IN THE DATATABLE 
  created a folder index.js
  created five variables to store data from five apis  created in server

- created baseUrl in AXIOS and saved it in client variable

- created five functions to call apis created in server and get the data in the variables defined above

- calling all the functions using useEffect

- now we need to create array of objects to show all the data inside antd TABLE component ==>
created length function to get length of largest data from five data defined above===========
after getting largest array from five data

- created a function finalDataSetting to get array of objects which can be used in antd Table component

- NOW created five columns in columns variable and provided it into the antd Table component and also provided finaldata in dataSource which i got from the function finalDataSetting.
