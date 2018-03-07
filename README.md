# tutorial-nodejs-mongo

- Neste tutorial foi possivel realizar o CRUD no bd (mongo)

- Link do tutorial: http://www.luiztools.com.br/post/como-criar-uma-api-com-nodejs/

Rotas

(GET) http://localhost:3000/customers
(GET) http://localhost:3000/customer/5aa01849604075da550cddb2
(POST) curl -X POST -H "Content-Type: application/json" -d '{"name": "customer4", "email": "cust4@email.com"}' http://localhost:3000/customers
(PUT) curl -X PUT -H "Content-Type: application/json" -d '{"name": "customer5", "email": "cust5@email.com"}' http://localhost:3000/customer/5aa0271cb0940e106a639404
(DELETE) curl -X DELETE http://localhost:3000/customer/5aa0271cb0940e106a639404
