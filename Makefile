SHELL=/bin/bash

up:
	docker-compose -f docker-compose.postgres.yaml up -d && yarn start:dev

down: 
	docker-compose -f docker-compose.postgres.yaml down

keycloak-up:
	docker-compose -f docker-compose.keycloak.yaml up

keycloak-down:
	docker-compose -f docker-compose.keycloak.yaml down