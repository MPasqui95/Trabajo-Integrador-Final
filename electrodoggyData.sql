CREATE DATABASE  IF NOT EXISTS `electrodoggy_db` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `electrodoggy_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: electrodoggy_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoriesbrands`
--

DROP TABLE IF EXISTS `categoriesbrands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriesbrands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriesbrands`
--

LOCK TABLES `categoriesbrands` WRITE;
/*!40000 ALTER TABLE `categoriesbrands` DISABLE KEYS */;
INSERT INTO `categoriesbrands` VALUES (1,'Samsung'),(2,'Apple'),(3,'LG'),(4,'Huawei'),(5,'Sony'),(6,'Acer'),(7,'Phillip'),(8,'Nintendo'),(9,'SkullCandy'),(10,'Logitech'),(11,'HP'),(12,'Lenovo'),(13,'Asus'),(14,'Xiaomi');
/*!40000 ALTER TABLE `categoriesbrands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriescolors`
--

DROP TABLE IF EXISTS `categoriescolors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriescolors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriescolors`
--

LOCK TABLES `categoriescolors` WRITE;
/*!40000 ALTER TABLE `categoriescolors` DISABLE KEYS */;
INSERT INTO `categoriescolors` VALUES (1,'Red'),(2,'Blue'),(3,'White'),(4,'Black'),(5,'Green'),(6,'Pink'),(7,'Violet'),(8,'Yellow'),(9,'Grey'),(10,'Sky blue');
/*!40000 ALTER TABLE `categoriescolors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriesproducts`
--

DROP TABLE IF EXISTS `categoriesproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriesproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriesproducts`
--

LOCK TABLES `categoriesproducts` WRITE;
/*!40000 ALTER TABLE `categoriesproducts` DISABLE KEYS */;
INSERT INTO `categoriesproducts` VALUES (1,'Celulares'),(2,'Laptops'),(3,'Tablets'),(4,'Gamer'),(5,'Audio'),(6,'Accesorios');
/*!40000 ALTER TABLE `categoriesproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriesusers`
--

DROP TABLE IF EXISTS `categoriesusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriesusers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriesusers`
--

LOCK TABLES `categoriesusers` WRITE;
/*!40000 ALTER TABLE `categoriesusers` DISABLE KEYS */;
INSERT INTO `categoriesusers` VALUES (1,'Admin'),(2,'Usuario');
/*!40000 ALTER TABLE `categoriesusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productimages`
--

DROP TABLE IF EXISTS `productimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productimages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `imageProduct` blob,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimages`
--

LOCK TABLES `productimages` WRITE;
/*!40000 ALTER TABLE `productimages` DISABLE KEYS */;
/*!40000 ALTER TABLE `productimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `regularPrice` decimal(10,0) NOT NULL,
  `offerPrice` decimal(10,0) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `specification` text NOT NULL,
  `description` varchar(100) NOT NULL,
  `stock` tinyint NOT NULL,
  `categoriesBrands_id` int NOT NULL,
  `categoriesProductos_id` int NOT NULL,
  `categoriesColors_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriesBrands_id_idx` (`categoriesBrands_id`),
  KEY `categoriesProducts_id_idx` (`categoriesProductos_id`),
  KEY `colors_id` (`categoriesColors_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'iPhone 13 Pro',1500,1200,20,'product1658286252137.png','              ','',20,2,1,2),(2,'Chromebook S330',3500,2975,15,'product1658286297399.jpg','              ','',30,12,2,9),(3,'Nintendo Switch',1800,1620,10,'product1658286314818.jpg','              ','',12,8,4,1),(5,'Redmi Note 11',720,504,30,'product1658286383547.jpg','              ','',20,14,1,4),(6,'Tablet Galaxy S6 Lite',120,1032,14,'product1658286401829.jpg','              ','',6,1,3,9),(7,'iPad Pro',6400,5632,12,'product1658286415119.png','              ','',5,2,3,9),(8,'PlayStation 5',2400,1632,32,'product1658286426689.jpg','              ','',7,5,4,3),(9,'Audífonos Sesh Evo',1990,1672,12,'product1658286455692.jpg','              ','',2,9,5,4),(10,'Parlante inalámbrico SRS-XB13',200,140,30,'product1658286467527.png','              ','',24,5,5,2),(11,'Kit Teclado Mecanico y Mouse',520,208,60,'product1658286480378.jpg','              ','',5,10,6,8),(12,'Docking Station',140,105,25,'product1658286590172.webp','              ','',2,11,6,9),(13,'Playstation 3',12000,10000,50,'product1658286630918.jpg','              ','',10,5,4,4),(14,'Wii',51000,50000,25,'product1658286645361.jpg','              ','',25,8,4,3),(42,'lkhdfaklj',155,15,10,'product1659069304648.png','ñldkjasñfldk','aljdfñjahdflkjhadflkjhadlkfjhadlkjhalsdkdjfh',21,4,1,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categoriescolors`
--

DROP TABLE IF EXISTS `products_categoriescolors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_categoriescolors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productsCategories_id` int NOT NULL,
  `categoriesColors_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_idx` (`productsCategories_id`),
  KEY `categoriesColors_id_idx` (`categoriesColors_id`),
  CONSTRAINT `categoriesColors_id` FOREIGN KEY (`categoriesColors_id`) REFERENCES `categoriescolors` (`id`),
  CONSTRAINT `productsCategories_id` FOREIGN KEY (`productsCategories_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categoriescolors`
--

LOCK TABLES `products_categoriescolors` WRITE;
/*!40000 ALTER TABLE `products_categoriescolors` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_categoriescolors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_products`
--

DROP TABLE IF EXISTS `user_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id_idx` (`users_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `productos_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_products`
--

LOCK TABLES `user_products` WRITE;
/*!40000 ALTER TABLE `user_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `direction` varchar(100) NOT NULL,
  `dateBirth` date DEFAULT NULL,
  `userImage` varchar(100) DEFAULT NULL,
  `userscol` varchar(45) DEFAULT NULL,
  `categoriesUsers_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `categoriesUsers_id_idx` (`categoriesUsers_id`),
  CONSTRAINT `categoriesUsers_id` FOREIGN KEY (`categoriesUsers_id`) REFERENCES `categoriesusers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (6,'Alexa','cc','alecc@gmail.com','$2a$10$SAkRlcH8OfUPVsmLeKikTOdfD7rTssS0Z50VoU2bypwERDV9yCmWm','ll','1986-05-21','default-image.jpg',NULL,1),(8,'Prueba','Usuario','PUsu@gmail.com','$2a$10$tg/9KX4WhPRxrzYDxci85eolaXbbKx.9guzeDoD1jNvIeornFQCDa','usu','1990-12-06','user1658286131280.png',NULL,2),(9,'Loki','Lokillo','Lokilo@gmail.com','$2a$10$4lewheJzZmHtOyAgc7yQ8OwgtAt7YkvN6/stJmBA6EtD3jV/Nopbi','ll','1998-02-14','user1658286148532.jpg',NULL,1),(10,'Hernan','Gomez','HGomez@gmail.com','$2a$10$jW6tJXMpjuT1N4pXdKyE9.prXh5uFtZx6xxK0sAX3G7nVBv8k8gXS','calle falsa 123','2011-05-23','user1658286184167.png',NULL,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'electrodoggy_db'
--

--
-- Dumping routines for database 'electrodoggy_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-09  1:57:34
