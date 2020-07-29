CREATE DATABASE  IF NOT EXISTS `jobnow` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `jobnow`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 192.168.99.100    Database: jobnow
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `curriculum`
--

DROP TABLE IF EXISTS `curriculum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curriculum` (
  `email` varchar(150) DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `birthday` varchar(15) DEFAULT NULL,
  `children` varchar(2) DEFAULT NULL,
  `civil` varchar(8) DEFAULT NULL,
  `interest` varchar(150) DEFAULT NULL,
  `education` varchar(8) DEFAULT NULL,
  `language` varchar(150) DEFAULT NULL,
  `userid` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `curriculum_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curriculum`
--

LOCK TABLES `curriculum` WRITE;
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
INSERT INTO `curriculum` VALUES ('roberta@roberta.com','Roberta Meireles da Silva','Travessa do Miradoro n 800','10/01/1965','1','married','Full Stack','graduate','English',1,1),('hugo@hugo.com','Hugo Folly','Travessa xxxx','20/05/1985','1','married','Full Stack','graduate','English',2,9),('francisco@francisco.com','Francisco','Rua Carlos','20/05/1985','1','married','Teacher','graduate','English',4,10),('carolina@carolina.com','Carolina Maria da Graça','Rua Mariana Godoi ','10/01/1965','1','married','Baker','graduate','English',8,11),('roberto@roberto.com','Roberto Garcia da Silva','','','','','','','',10,12),('taina@taina.com','','','','','','','','',14,16),('catarina@catarina.com','Catarina Meireles Rocha','Edson Martins de Souza','19/09/1987','0','single','Teacher','basic','Ingles',15,17),('rubens@rubens.com','','','','','','','','',16,18),('adalberto@adalberto.com','Adalberto Ferreira da Silva','Rua 12','12/12/1980','2','divorced','Teacher','basic','English',17,19),('alessandra@alessandra.com','Alessandra Nogueira','Rua 207','22/05/1987','1','married','Developer','doctor','English',18,20);
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiences`
--

DROP TABLE IF EXISTS `experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiences` (
  `companyname` varchar(30) NOT NULL,
  `functioncompany` varchar(30) NOT NULL,
  `work` varchar(3) NOT NULL,
  `datestart` varchar(15) NOT NULL,
  `dateend` varchar(15) DEFAULT NULL,
  `resume` tinytext NOT NULL,
  `curriculumid` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `curriculumid` (`curriculumid`),
  CONSTRAINT `experiences_ibfk_1` FOREIGN KEY (`curriculumid`) REFERENCES `curriculum` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiences`
--

LOCK TABLES `experiences` WRITE;
/*!40000 ALTER TABLE `experiences` DISABLE KEYS */;
INSERT INTO `experiences` VALUES ('Flag','Full Stack','No','10/12/2019','11/07/2020','Full Stack Developer',1,1),('CIA','Full Stack','No','10/12/2019','11/07/2020','Full Stack Developer',9,5),('Coca-cola','Full Stack','No','10/12/2019','11/07/2020','Full Stack Developer',1,7),('Flag','Full Stack','Yes','19/12/2019','11/07/2020','Full Stack Developer',1,8),('CSS School','Teacher','No','12/05/2019','12/05/2020','teste',1,9),('Coca-Cola','Teacher','Yes','12/05/2012','','teacher',17,10),('Sider','Teacher','Yes','12/12/2019','','teacher',19,11),('CBSI','Operator','Yes','27/07/2020','','Operator',9,12);
/*!40000 ALTER TABLE `experiences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `positions` (
  `email` varchar(20) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `category` varchar(8) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `resume` tinytext,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES ('flag@flag.com','Flag','Full Stack','1','Lisboa','Desenvolvedor',5),('company@company.com','Company','Teacher','PartTime','viseu','Teacher',14),('company@company.com','Company','Developer Back End','fullTime','viana do castelo','Developer Back End',19),('flag@flag.com','Flag','Tester','fullTime','porto','Tester',21);
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userpositionrelation`
--

DROP TABLE IF EXISTS `userpositionrelation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userpositionrelation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `positionid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  KEY `positionid` (`positionid`),
  CONSTRAINT `userpositionrelation_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`),
  CONSTRAINT `userpositionrelation_ibfk_2` FOREIGN KEY (`positionid`) REFERENCES `positions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userpositionrelation`
--

LOCK TABLES `userpositionrelation` WRITE;
/*!40000 ALTER TABLE `userpositionrelation` DISABLE KEYS */;
INSERT INTO `userpositionrelation` VALUES (1,1,5),(3,2,5),(4,8,5),(7,18,21);
/*!40000 ALTER TABLE `userpositionrelation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `type` varchar(10) DEFAULT 'applicant',
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'roberta@roberta.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant','Roberta Meireles da Silva'),(2,'hugo@hugo.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant','Hugo Cabral Folly'),(3,'flag@flag.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','company','Flag'),(4,'francisco@francisco.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant','Francisco Costa'),(5,'company@company.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','company','Company'),(6,'company2@company2.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','company','Company 2'),(7,'roberta@roberta.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant','Company'),(8,'carolina@carolina.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant','Carolina Maria da Graça'),(10,'roberto@roberto.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant','Roberto Garcia da Silva'),(14,'taina@taina.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant',''),(15,'catarina@catarina.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant',''),(16,'rubens@rubens.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant',''),(17,'adalberto@adalberto.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant',''),(18,'alessandra@alessandra.com','5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5','applicant','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'jobnow'
--

--
-- Dumping routines for database 'jobnow'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-30  0:22:08
