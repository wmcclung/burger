CREATE DATABASE x5xce85t1cqd0unb;
USE x5xce85t1cqd0unb;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
