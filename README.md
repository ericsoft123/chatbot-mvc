# chatbot-mvc
Nodejs,express-generator,jquery


# chatbot
Chatbot



Note:please make sure your docker is running



Open your Terminal


Step 1: Clone Repository

git clone https://github.com/ericsoft123/chatbot-mvc.git

Step 2:

cd chatbot 

Step 3:
then run this command  to  run your program 

docker run -p 8888:8888 chatbot-mv

Step 4:

after this command you will see "Server listening at PORT" e.g:Server listening at 8000


Then open your browser:localhost:(listen port nuber)



Note:if it does not work,it means that some program is using this port.

open chatbot project folder change Dockefile PORT to 8000 on line 12
and change bin/www port too 8000 on line 15

then run this command  to  run your program 

docker run -p 8000:8000 chatbot-mv


after this command you will see "Server listening at PORT" e.g:Server listening at 8000


Then open your browser:localhost:(listen port nuber)



if this option will not work then use this option

build your docker container of this project

docker build -t chatbot-mv .

then run this Project

docker run -p 8000:8000 chatbot-mv





Project Structure

bin/www: Contains some port number to be able to run our Program

models:contains our json files that we will be using to process data


routes:our routes and some codes
public:static files
view:templates engines




for Testing purpose use this Account number or change bank.js under models folder add your own Account on Array Account(please make sure after you change bank.js file rerun project)

1224566
144456
4566009

