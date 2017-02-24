CREATE TABLE `Shop` (
	`id` int NOT NULL,
	`name` varchar(50) NOT NULL,
	`description` varchar(500),
	`img-src` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Product` (
	`id` int NOT NULL,
	`name` varchar(50) NOT NULL,
	`description` varchar(500),
	`img-src` varchar(50) NOT NULL,
	`price` int NOT NULL,
	`shop_id` int NOT NULL,
	`category_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Category` (
	`id` int NOT NULL,
	`name` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Order` (
	`id` int NOT NULL,
	`client_name` varchar(50) NOT NULL,
	`client_surname` varchar(50) NOT NULL,
	`quantity` int NOT NULL,
	`product_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Page` (
	`id` int NOT NULL,
	`meta-title` varchar(50) NOT NULL,
	`meta-description` varchar(500) NOT NULL,
	`meta-keywords` varchar(500) NOT NULL,
	`page-content` varchar(500) NOT NULL,
	`page-title` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Product` ADD CONSTRAINT `Product_fk0` FOREIGN KEY (`shop_id`) REFERENCES `Shop`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `Product_fk1` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`);

ALTER TABLE `Order` ADD CONSTRAINT `Order_fk0` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`);

