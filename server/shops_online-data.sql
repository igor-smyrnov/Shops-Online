-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: shops_online
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (134,'./../assets/img/lidl_001.jpg','Oshee Woda','oshee_woda_01',2,NULL,'555 ml/1 but.1 l=4.49',1,1),(135,'./../assets/img/lidl_002.jpg','Ocean Sea Krewetki indyjskie kidi lub mieszanka morska','ocean_sea_krewetki',10,NULL,'250 g/1 opak.100 g=4.00',1,1),(136,'./../assets/img/lidl_003.jpg','Fin Carre Czekolada mleczna z siekanymi migdałami','fin_carre_czekolada_01',3,NULL,'100 g/1 opak.',1,1),(137,'./../assets/img/kaufland_001.jpg','Sok pomarańczowy','sok_pomaranczowy_01',4,4,'Sok pomarańczowy 100%',2,1),(138,'./../assets/img/kaufland_002.jpg','Kiwi','kiwi_01',6,NULL,'3 sztuki opakowanie',2,1),(139,'./../assets/img/kaufland_003.jpg','Tofu naturalne','tofu_naturalne',5,6,'2 x 200 g opakowanie',2,1),(140,'./../assets/img/piotr_i_pawel_001.jpg','Błonnik gryczany bio','blonnik_gryczany',17,NULL,'Błonnik gryczany Bio - można spożywać z jogurtem musli płatkami śniadaniowymi kakao mlekiem kefirem lub sokiem . Można też stosować do zagęszczenia koktajli zup sosów deserów oraz jako dodatek do pieczenia ciast i chleba.',3,1),(141,'./../assets/img/piotr_i_pawel_002.jpg','Wafle ryżowe naturalne','wafle_ryzowe_01',2,NULL,'Wafle ryżowe naturalne - Piotr i Paweł',3,1),(142,'./../assets/img/piotr_i_pawel_003.jpg','Masło Irlandzkie Dublin Dairy','dublin_dairy',7,NULL,'Masło irlandzkie Dublin Dair. Zawartość tłuszczu 82%',3,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-12 16:43:18
