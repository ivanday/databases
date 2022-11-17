CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id int not null primary key auto_increment,
  text varchar(300),
  user_id int,
  roomname varchar(20)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  user_id int not null primary key auto_increment,
  username varchar(10)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

