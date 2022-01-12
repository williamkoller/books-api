SHELL=/bin/bash

up:
	docker-compose -f docker-compose.postgres.yaml up --remove-orphans

down: 
	docker-compose -f docker-compose.postgres.yaml down

keycloak-up:
	docker-compose -f docker-compose.keycloak.yaml up

keycloak-down:
	docker-compose -f docker-compose.keycloak.yaml down