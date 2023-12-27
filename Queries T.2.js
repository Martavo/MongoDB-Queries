{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue0;\red255\green255\blue255;
\red42\green55\blue62;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\csgray\c0\c0;\cssrgb\c100000\c100000\c100000;
\cssrgb\c21569\c27843\c30980;}
\paperw11900\paperh16840\margl1440\margr1440\vieww18340\viewh12900\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\{\
  "consultas": [\
    \{\
      "nombre": "Consulta 1",\
      "consulta": "db.datosRestaurantes.find()"\
    \},\
    \{\
      "nombre": "Consulta 2",\
      "consulta": "db.Restaurantes.find(\{\}, \{ "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 \})"\
    \},\
    \{\
      "nombre": "Consulta 3",\
      "consulta": "db.Restaurantes.find(\{\}, \{ "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 4",\
      "consulta": "db.Restaurantes.find(\{\}, \{ "restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1, "_id": 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 5",\
      "consulta": "\cb1 \kerning1\expnd0\expndtw0 \CocoaLigature0 db.Restaurantes.find(\{ "borough": "Bronx" \})\cb3 \expnd0\expndtw0\kerning0
\CocoaLigature1 "\
    \},\
    \{\
      "nombre": "Consulta 6",\
      "consulta": "db.Restaurants.find(\{ 'borough': 'Bronx' \}).limit(5)"\
    \},\
    \{\
      "nombre": "Consulta 7",\
      "consulta": "db.Restaurants.find(\{ 'borough': 'Bronx' \}).skip(5).limit(5)"\
    \},\
    \{\
      "nombre": "Consulta 8",\
      "consulta": "db.Restaurants.find(\{ 'grades.score': \{ $gt: 90 \} \})"\
    \},\
    \{\
      "nombre": "Consulta 9",\
      "consulta": "\cb1 \outl0\strokewidth0 \strokec5 db.Restaurants.find(\{ 'grades.score': \{ $gt: 80, $lt: 100 \} \})\cb3 \outl0\strokewidth0 "\
    \},\
    \{\
      "nombre": "Consulta 10",\
      "consulta": "db.Restaurants.find(\{ 'address.coord.0': \{ $lt: -95.754168 \} \})"\
    \},\
    \{\
      "nombre": "Consulta 11",\
      "consulta": \'93db.Restaurants.find(\{ $and: [\{ cuisine: \{ $ne: 'American ' \} \},\{ 'grades.score': \{ $gt: 70 \} \},\{ 'address.coord.1': \{ $lt: -65.754168 \} \} ]\})\'94\
    \},\
    \{\
      "nombre": "Consulta 12",\
      "consulta": \cf2 \cb3 "db.Restaurants.find(\{ cuisine: \{ $ne: 'American ' \}, 'grades.score': \{ $gt: 70 \},'address.coord.1': \{ $lt: -65.754168 \}\})"\cf2 \cb3 \
    \},\
    \{\
      "nombre": "Consulta 13",\
      "consulta": "db.Restaurants.find(\{$and: [\{ cuisine: \{ $ne: 'American ' \} \},\{ 'grades.grade': 'A' \},\{ borough: \{ $ne: 'Brooklyn' \} \}]\}).sort(\{ cuisine: -1 \})"\
    \},\
    \{\
      "nombre": "Consulta 14",\
      "consulta": "db.Restaurants.find(\{ name: \{ $regex: /^Wil/i \} \}, \{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 15",\
      "consulta": "db.Restaurants.find(\{ name: \{ $regex: /ces$/i \} \}, \{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 16",\
      "consulta": "db.Restaurants.find(\{ name: \{ $regex: /Reg/i \} \}, \{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 17",\
      "consulta": "db.Restaurants.find(\{ borough: 'Bronx', cuisine: \{ $in: ['American', 'Chinese'] \} \})"\
    \},\
    \{\
      "nombre": "Consulta 18",\
      "consulta": "db.Restaurants.find(\{ borough: \{ $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] \} \}, \{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 19",\
      "consulta": "db.Restaurants.find(\{ borough: \{ $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] \} \}, \{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 20",\
      "consulta": "db.Restaurants.find(\{ 'grades.score': \{ $lt: 10 \} \}, \{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 21",\
      "consulta": "db.Restaurants.find(\{cuisine: 'Seafood',$nor: [\{ cuisine: 'American ' \},\{ cuisine: 'Chinese' \},\{ name: /^Wil/i \}]\}, \{ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 22",\
      "consulta": "db.Restaurants.find(\{ 'grades': \{$elemMatch: \{grade: 'A',score: 11, date: ISODate("2014-08-11T00:00:00Z")\}\}\}, \{ restaurant_id: 1, name: 1, grades: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 23",\
      "consulta": "db.Restaurants.find(\{'grades.1': \{grade: 'A',score: 9, date: ISODate("2014-08-11T00:00:00Z")\}\}, \{ restaurant_id: 1, name: 1, grades: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 24",\
      "consulta": "db.Restaurants.find(\{ 'address.coord.1': \{$gte: 42, $lte: 52 \}\}, \{ restaurant_id: 1, name: 1, address: 1, 'address.coord': 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 25",\
      "consulta": "db.Restaurants.find().sort(\{ name: 1 \})"\
    \},\
    \{\
      "nombre": "Consulta 26",\
      "consulta": "db.Restaurants.find().sort(\{ name: -1 \})"\
    \},\
    \{\
      "nombre": "Consulta 27",\
      "consulta": "db.Restaurants.find().sort(\{ cuisine: 1, borough: -1 \})"\
    \},\
    \{\
      "nombre": "Consulta 28",\
      "consulta": "db.Restaurants.find(\{ 'address.street': \{ $exists: true, $ne: ' ' \} \})"\
    \},\
    \{\
      "nombre": "Consulta 29",\
      "consulta": "db.Restaurants.find(\{ 'address.coord.0': \{ $type: 'double' \}, 'address.coord.1': \{ $type: 'double' \} \})"\
    \},\
    \{\
      "nombre": "Consulta 30",\
      "consulta": "db.Restaurants.find(\{ 'grades.score': \{ $mod: [7, 0] \} \}, \{ restaurant_id: 1, name: 1, grades: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 31",\
      "consulta": "db.Restaurants.find(\{ name: /mon/i \}, \{ name: 1, borough: 1, 'address.coord': 1, cuisine: 1, _id: 0 \})"\
    \},\
    \{\
      "nombre": "Consulta 32",\
      "consulta": "db.Restaurants.find(\{ name: /^Mad/i \}, \{ name: 1, borough: 1, 'address.coord': 1, cuisine: 1, _id: 0 \})"\
    \}\
  ]\
\}\
}