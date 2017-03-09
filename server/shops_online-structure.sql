SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


CREATE TABLE IF NOT EXISTS `categories` (
`id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL,
  `client_name` varchar(50) NOT NULL,
  `client_surname` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) NOT NULL,
  `meta-title` varchar(50) NOT NULL,
  `meta-description` varchar(500) NOT NULL,
  `meta-keywords` varchar(500) NOT NULL,
  `page-content` varchar(500) NOT NULL,
  `page-title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `products` (
`id` int(11) NOT NULL,
  `img_src` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(11) NOT NULL,
  `price` int(11) NOT NULL,
  `old_price` int(11) DEFAULT NULL,
  `default_quantity` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `shop_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `shops` (
`id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `img_src` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

ALTER TABLE `categories`
 ADD PRIMARY KEY (`id`);

ALTER TABLE `orders`
 ADD PRIMARY KEY (`id`), ADD KEY `Order_fk0` (`product_id`);

ALTER TABLE `pages`
 ADD PRIMARY KEY (`id`);

ALTER TABLE `products`
 ADD PRIMARY KEY (`id`), ADD KEY `Product_fk0` (`shop_id`), ADD KEY `Product_fk1` (`category_id`);

ALTER TABLE `shops`
 ADD PRIMARY KEY (`id`);


ALTER TABLE `categories`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
ALTER TABLE `products`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
ALTER TABLE `shops`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;

ALTER TABLE `orders`
ADD CONSTRAINT `Order_fk0` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `products`
ADD CONSTRAINT `Product_fk0` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`),
ADD CONSTRAINT `Product_fk1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
