
all:

run:
	ionic serve

install:
	npm install

update:
	npx cap update
	npm run build

fclean: