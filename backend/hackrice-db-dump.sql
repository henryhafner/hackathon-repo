CREATE DATABASE  IF NOT EXISTS `hackrice-db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hackrice-db`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hackrice-db
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resources` (
  `idresources` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `category` varchar(45) NOT NULL,
  `description` text,
  `website` varchar(75) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idresources`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
INSERT INTO `resources` VALUES (1,'National Domestic Violence Hotline (NDVH)','Safety','Offers confidential, 24/7 support for those affected by domestic violence.','thehotline.org','1-800-799-SAFE (7233)'),(2,'Rape, Abuse & Incest National Network RAINN','Safety','Provides support for survivors of sexual violence.','online.rainn.org','1-800-656-HOPE (4673)'),(3,'National Human Trafficking Hotline','Safety','Assists individuals affected by human trafficking.','humantraffickinghotline.org','1-888-373-7888'),(4,'National Elder Abuse Hotline','Safety','Provides support for older adults experiencing abuse.','ncea.acl.gov','1-800-677-1116'),(5,'Supplemental Nutrition Assistance Program (SNAP)','Food','Provides nutrition benefits to supplement the food budget of needy families so they can purchase healthy food and move towards self-sufficiency.','fns.usda.gov/snap',''),(6,'National School Lunch Program (NSLP)','Food','Provides nutritionally balanced, low-cost or free lunches to children in public and nonprofit private schools.','fns.usda.gov/nslp',''),(7,'Women, Infants, and Children (WIC)','Food','Offers nutrition assistance to low-income pregnant women, breastfeeding mothers, and children under five.','fns.usda.gov/wic',''),(8,'The Emergency Food Assistance Program (TEFAP)','Food','Provides USDA commodities to families in need of short-term hunger relief through emergency food providers like food banks.','fns.usda.gov/tefap',''),(9,'Commodity Supplemental Food Program (CSFP)','Food','Delivers USDA food packages to low-income seniors.','fns.usda.gov/csfp',''),(10,'Summer Food Service Program (SFSP)','Food','Provides free meals to children during the summer months when school is not in session.','fns.usda.gov/sfsp',''),(11,'U.S. Department of Housing and Urban Development (HUD)','Shelter','Provides housing choice vouchers to local Public Housing Authorities to assist individuals and families who are homeless, at risk of homelessness, fleeing or attempting to flee domestic violence, dating violence, sexual assault, stalking, or human trafficking, or were recently homeless or have a high risk of housing instability','hud.gov/helping-americans/housing-choice-vouchers-emergency',''),(12,'Homeless and Housing Resource Center (HHRC)','Shelter','Provides training on housing and treatment models focused on adults, children, and families who are experiencing or at risk of homelessness and have serious mental illness and/or serious emotional disturbance, substance use disorders, and/or co-occurring disorders.','samhsa.gov/communities/homelessness-programs-resources',''),(13,'988 Suicide & Crisis Lifeline','Mental Health','A free, confidential 24/7 helpline offering immediate support for individuals facing mental health or substance use crises.','988lifeline.org','988'),(14,'National Mental Health Hotline','Mental Health','Service which offers 24/7 confidential support for mental health concerns, information on treatment centers and mental health issues, and guidance for individuals and families','mentalhealthhotline.org','1-866-903-3787'),(15,'National Alliance on Mental Illness (NAMI) HelpLine','Mental Health','Offers Free, confidential support and information, resource referrals for mental health services, and support for individuals and families','nami.org/help','1-800-950-NAMI (6264)'),(16,'Substance Abuse and Mental Health Services Administration (SAMHSA)','Mental Health','Offers 24/7 free, confidential treatment referral and information, support for mental and substance use disorders along with locating treatment services','samhsa.gov','1-877-SAMHSA-7 (1-877-726-4727)'),(17,'National Institute of Mental Health (NIMH)','Mental Health','Information on mental health disorders and treatments, resources for individuals and families, clinical trials and research opportunities','nimh.nih.gov',''),(18,'American Psychological Association (APA) Crisis Resources','Mental Health','Information on various crisis hotlines and resources, Guidance on seeking professional help','apa.org/topics/crisis-hotlines',''),(19,'Khan Academy','Education','Offers free lessons in subjects ranging from math and science to history and economics.','khanacademy.org',''),(20,'MIT OpenCourseWare','Education','Provides free access to lecture notes, exams, and videos from a wide range of MIT\'s courses.','ocw.mit.edu',''),(21,'Learn To Be','Education','A nonprofit organization offering free online tutoring to students in underserved communities.','learntobe.org',''),(22,'Sophia Learning','Education','Provides free educational tutorials and low-cost online college credit courses.','sophia.org',''),(23,'PBS LearningMedia','Education','Provides free teaching resources including videos, lesson plans, and games aligned to state and national standards.','pbslearningmedia.org',''),(24,'Discovery Education','Education','Offers digital learning resources for K-12 students, including curriculum content and interactive tools.','discoveryeducation.com','');
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-20 18:43:59
