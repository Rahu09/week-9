to connect to aws ssh terminal - 
$ ssh -i todo-class.pem ubuntu@ec2-3-86-84-63.compute-1.amazonaws.com

to check the read and write permission(if there are too many aws may refues to connect) -
$ ls -ltr todo-class.pem 
-rw-r--r-- 1 RAHUL 197121 1678 Aug  6 19:25 todo-class.pem

to change the permission to just you (revoke other user permission ) -
$ chmod 600 todo-class.pem

checking again -
$ ls -ltr todo-class.pem 
-rw------- 1 RAHUL 197121 1678 Aug  6 19:25 todo-class.pem

clone your repo here -
$ git clone https://github.com/Rahu09/week-9.git

install nvm (to install node and run npm command) -
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

ran last three command from the that recommended -

then installed node -
$ nvm install node

installed modules - 
$ npm i

to continiously run the backend server we need process manager like pm2 - 
$ npm i -g pm2
$ pm2 start filename.js
$ pm2 list
$ pm2 kill

command to exit the aws machine - 
$ exit

now if change comes we need to type so many  command (from top till now so we will automate it using ci/cd)
so we will make a script to automate this process by making deploy.sh in part-2-scripts
which willtake care of every thing when we run it in ssh terminal

we will furter automate it by making it automatically ssh in aws terminal and running deploy.sh in just one command i.e. script-local.sh

and at the end we will make it fully ci/cd by github action using the ci.yaml file in .github