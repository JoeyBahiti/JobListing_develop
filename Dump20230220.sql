-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: job
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
-- Table structure for table `databasechangeloglock`
--

DROP TABLE IF EXISTS `databasechangeloglock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `databasechangeloglock` (
  `ID` int NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime DEFAULT NULL,
  `LOCKEDBY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `databasechangeloglock`
--

LOCK TABLES `databasechangeloglock` WRITE;
/*!40000 ALTER TABLE `databasechangeloglock` DISABLE KEYS */;
INSERT INTO `databasechangeloglock` VALUES (1,_binary '\0',NULL,NULL);
/*!40000 ALTER TABLE `databasechangeloglock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author` int NOT NULL,
  `location` varchar(45) DEFAULT NULL,
  `salary` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `job_author_idx` (`author`),
  CONSTRAINT `job_author` FOREIGN KEY (`author`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=251 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (29,'Front End Develeoper ','test',16,'test','test'),(30,'Java developer','Java application',16,'test','test'),(31,'ghjgh','fdgdfg',16,'vghjgh','fgfg'),(32,'twett','dfg',16,'gdfg','dfg'),(33,'Java1 ','dfvsdsg',16,NULL,NULL),(34,'Java11 ','dfvsdsg',16,NULL,NULL),(35,'Java21 ','dfvsdsg',16,NULL,NULL),(36,'Java212 ','dfvsdsg',16,NULL,NULL),(37,'1','dfvsdsg',16,NULL,NULL),(38,'12','dfvsdsg',16,NULL,NULL),(39,'244','dfvsdsg',16,NULL,NULL),(40,'Asistent Menaxhere','test',16,'Tirane',NULL),(41,'Kasiere','test',16,'Elbasan',NULL),(42,'Sanitare','test',16,'Fier',NULL),(43,'12','dfvsdsg',16,NULL,NULL),(44,'fdsfds','dfvsdsg',16,NULL,NULL),(45,'Agjente udhetimesh',' pozicione vakante',16,' 21 Dhjetori/Rruga e Kavajes','300$'),(46,'sdfsdf','dfvsdsg',16,NULL,NULL),(47,'sdf','dfvsdsg',16,NULL,NULL),(48,'sdfsdf','dfvsdsg',16,NULL,NULL),(49,'sdfsdf','dfvsdsg',16,NULL,NULL),(50,'454','dfvsdsg',16,NULL,NULL),(51,'bnhb','dfvsdsg',16,NULL,NULL),(52,'456346','dfvsdsg',16,NULL,NULL),(53,'gf','dfvsdsg',16,NULL,NULL),(54,'ghgfh','dfvsdsg',16,NULL,NULL),(55,'3453','dfvsdsg',16,NULL,NULL),(56,'345','dfvsdsg',16,NULL,NULL),(57,'n m','dfvsdsg',16,NULL,NULL),(58,'n 4545','dfvsdsg',16,NULL,NULL),(59,'ghnjghj','dfvsdsg',16,NULL,NULL),(60,'5655','dfvsdsg',16,NULL,NULL),(61,'45345','dfvsdsg',16,NULL,NULL),(62,'453453','dfvsdsg',16,NULL,NULL),(63,'453','dfvsdsg',16,NULL,NULL),(64,'453','453',16,NULL,NULL),(65,'453','53',16,NULL,NULL),(66,'453','53',16,NULL,NULL),(67,'453','53',16,NULL,NULL),(68,'453','53',16,NULL,NULL),(69,'453','53',16,NULL,NULL),(70,'453','53',16,NULL,NULL),(71,'453','53',16,NULL,NULL),(72,'453','53',16,NULL,NULL),(73,'453','53',16,NULL,NULL),(74,'453','53',16,NULL,NULL),(75,'453','53',16,NULL,NULL),(76,'453','53',16,NULL,NULL),(77,'453','53',16,NULL,NULL),(78,'453','53',16,NULL,NULL),(79,'453','53',16,NULL,NULL),(80,'453','53',16,NULL,NULL),(81,'453','53',16,NULL,NULL),(82,'453','53',16,NULL,NULL),(83,'453','53',16,NULL,NULL),(84,'453','53',16,NULL,NULL),(85,'453','53',16,NULL,NULL),(86,'453','53',16,NULL,NULL),(87,'453','53',16,NULL,NULL),(88,'453','53',16,NULL,NULL),(89,'453','53',16,NULL,NULL),(90,'453','53',16,NULL,NULL),(91,'453','53',16,NULL,NULL),(92,'453','53',16,NULL,NULL),(93,'453','53',16,NULL,NULL),(94,'453','53',16,NULL,NULL),(95,'453','53',16,NULL,NULL),(96,'453','53',16,NULL,NULL),(97,'453','53',16,NULL,NULL),(98,'453','53',16,NULL,NULL),(99,'453','53',16,NULL,NULL),(100,'453','53',16,NULL,NULL),(101,'453','53',16,NULL,NULL),(102,'453','53',16,NULL,NULL),(103,'453','53',16,NULL,NULL),(104,'453','53',16,NULL,NULL),(105,'453','53',16,NULL,NULL),(106,'453','53',16,NULL,NULL),(107,'453','53',16,NULL,NULL),(108,'453','53',16,NULL,NULL),(109,'453','53',16,NULL,NULL),(110,'453','53',16,NULL,NULL),(111,'453','53',16,NULL,NULL),(112,'453','53',16,NULL,NULL),(113,'453','53',16,NULL,NULL),(114,'453','53',16,NULL,NULL),(115,'453','53',16,NULL,NULL),(116,'ttttttttt','53',16,NULL,NULL),(117,'453','53',16,NULL,NULL),(119,'453','53',16,NULL,NULL),(120,'453','53',16,NULL,NULL),(121,'453','53',16,NULL,NULL),(122,'453','53',16,NULL,NULL),(123,'453','53',16,NULL,NULL),(124,'453','53',16,NULL,NULL),(125,'453','53',16,NULL,NULL),(126,'453','53',16,NULL,NULL),(127,'453','53',16,NULL,NULL),(128,'453','53',16,NULL,NULL),(129,'453','53',16,NULL,NULL),(130,'453','53',16,NULL,NULL),(131,'453','53',16,NULL,NULL),(132,'453','53',16,NULL,NULL),(133,'453','53',16,NULL,NULL),(134,'453','53',16,NULL,NULL),(135,'453','53',16,NULL,NULL),(136,'453','53',16,NULL,NULL),(137,'453','53',16,NULL,NULL),(138,'453','53',16,NULL,NULL),(139,'453','53',16,NULL,NULL),(140,'453','53',16,NULL,NULL),(141,'453','53',16,NULL,NULL),(142,'453','53',16,NULL,NULL),(143,'453','53',16,NULL,NULL),(144,'453','53',16,NULL,NULL),(145,'453','53',16,NULL,NULL),(146,'453','53',16,NULL,NULL),(147,'453','53',16,NULL,NULL),(148,'453','53',16,NULL,NULL),(149,'453','53',16,NULL,NULL),(150,'453','53',16,NULL,NULL),(151,'453','53',16,NULL,NULL),(152,'453','53',16,NULL,NULL),(153,'453','53',16,NULL,NULL),(154,'453','53',16,NULL,NULL),(155,'453','53',16,NULL,NULL),(156,'453','53',16,NULL,NULL),(157,'453','53',16,NULL,NULL),(158,'453','53',16,NULL,NULL),(159,'453','53',16,NULL,NULL),(160,'453','53',16,NULL,NULL),(161,'453','53',16,NULL,NULL),(162,'453','53',16,NULL,NULL),(163,'453','53',16,NULL,NULL),(164,'453','53',16,NULL,NULL),(165,'453','53',16,NULL,NULL),(166,'453','53',16,NULL,NULL),(167,'453','53',16,NULL,NULL),(168,'453','53',16,NULL,NULL),(169,'453','53',16,NULL,NULL),(170,'453','53',16,NULL,NULL),(171,'453','53',16,NULL,NULL),(172,'453','53',16,NULL,NULL),(173,'453','53',16,NULL,NULL),(174,'453','53',16,NULL,NULL),(175,'453','53',16,NULL,NULL),(176,'453','53',16,NULL,NULL),(177,'453','53',16,NULL,NULL),(178,'453','53',16,NULL,NULL),(179,'453','53',16,NULL,NULL),(180,'453','53',16,NULL,NULL),(181,'453','53',16,NULL,NULL),(182,'453','53',16,NULL,NULL),(183,'453','53',16,NULL,NULL),(184,'453','53',16,NULL,NULL),(185,'453','53',16,NULL,NULL),(186,'453','53',16,NULL,NULL),(187,'453','53',16,NULL,NULL),(188,'453','53',16,NULL,NULL),(189,'453','53',16,NULL,NULL),(190,'453','53',16,NULL,NULL),(191,'453','53',16,NULL,NULL),(192,'453','53',16,NULL,NULL),(193,'453','53',16,NULL,NULL),(194,'453','53',16,NULL,NULL),(195,'453','53',16,NULL,NULL),(196,'453','53',16,NULL,NULL),(197,'453','53',16,NULL,NULL),(198,'453','53',16,NULL,NULL),(199,'453','53',16,NULL,NULL),(200,'453','53',16,NULL,NULL),(201,'453','53',16,NULL,NULL),(202,'453','53',16,NULL,NULL),(203,'453','53',16,NULL,NULL),(204,'453','53',16,NULL,NULL),(205,'453','53',16,NULL,NULL),(206,'453','53',16,NULL,NULL),(207,'453','53',16,NULL,NULL),(208,'453','53',16,NULL,NULL),(209,'453','53',16,NULL,NULL),(210,'453','53',16,NULL,NULL),(211,'453','53',16,NULL,NULL),(212,'453','53',16,NULL,NULL),(213,'453','53',16,NULL,NULL),(214,'453','53',16,NULL,NULL),(215,'453','53',16,NULL,NULL),(216,'453','53',16,NULL,NULL),(217,'453','53',16,NULL,NULL),(218,'453','53',16,NULL,NULL),(219,'453','53',16,NULL,NULL),(220,'453','53',16,NULL,NULL),(221,'453','53',16,NULL,NULL),(222,'453','53',16,NULL,NULL),(223,'453','53',16,NULL,NULL),(224,'453','53',16,NULL,NULL),(225,'453','53',16,NULL,NULL),(226,'453','53',16,NULL,NULL),(227,'453','53',16,NULL,NULL),(228,'453','53',16,NULL,NULL),(229,'453','53',16,NULL,NULL),(230,'453','53',16,NULL,NULL),(231,'453','53',16,NULL,NULL),(232,'453','53',16,NULL,NULL),(233,'453','53',16,NULL,NULL),(234,'453','53',16,NULL,NULL),(235,'453','53',16,NULL,NULL),(236,'453','53',16,NULL,NULL),(237,'453','53',16,NULL,NULL),(238,'453','53',16,NULL,NULL),(239,'453','53',16,NULL,NULL),(240,'453','53',16,NULL,NULL),(241,'453','53',16,NULL,NULL),(242,'453','53',16,NULL,NULL),(243,'453','53',16,NULL,NULL),(244,'453','53',16,NULL,NULL),(245,'453','53',16,NULL,NULL),(246,'453','53',16,NULL,NULL),(247,'453','53',16,NULL,NULL),(248,'453','53',16,NULL,NULL),(249,'453','53',16,NULL,NULL),(250,'last test','rthg',16,'rtgtr','rtgrt');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'job seekers'),(2,'job offers');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `roles` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `role_id_idx` (`roles`),
  CONSTRAINT `role_id` FOREIGN KEY (`roles`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (16,'Xhoenina','xhoi@test.com','$2a$10$lWD/hYCeMM6gdeA9HRR5UefKIPuwybc0CTQNNrf/WT07juCS2lJzS',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_jobs`
--

DROP TABLE IF EXISTS `user_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `job_id` int NOT NULL,
  `favorite` bit(1) DEFAULT NULL,
  `applied` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_applicant_job_idx` (`user_id`),
  KEY `job_applied_fav_idx` (`job_id`),
  CONSTRAINT `job_applied_fav` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`),
  CONSTRAINT `user_applicant_job` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_jobs`
--

LOCK TABLES `user_jobs` WRITE;
/*!40000 ALTER TABLE `user_jobs` DISABLE KEYS */;
INSERT INTO `user_jobs` VALUES (26,16,29,_binary '',_binary '\0'),(27,16,31,_binary '',_binary '\0'),(28,16,32,_binary '',_binary '\0'),(29,16,30,_binary '\0',_binary ''),(30,16,45,_binary '\0',_binary ''),(31,16,40,_binary '\0',_binary ''),(32,16,41,_binary '\0',_binary ''),(33,16,42,_binary '\0',_binary ''),(35,16,38,_binary '',_binary '\0'),(36,16,48,_binary '',_binary '\0'),(37,16,58,_binary '',_binary '\0'),(38,16,37,_binary '',_binary '\0');
/*!40000 ALTER TABLE `user_jobs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-20 22:22:23
