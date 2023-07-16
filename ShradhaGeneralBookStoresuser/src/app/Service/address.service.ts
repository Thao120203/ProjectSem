import { Injectable } from '@angular/core';
import { Address } from '../modelapi/address.model';

@Injectable()
export class AddressService {
  list: Address[] = [
    // Hà Giang
    new Address(1,'Hà Giang',0),
    new Address(2,'Huyện Đồng Văn',1),
    new Address(3,'Huyện Mèo Vạc',1),
    new Address(4,'Huyện Yên Minh',1),
    new Address(5,'Huyện Quản Bạ',1),
    new Address(6,'Huyện Bắc Mê',1),
    new Address(7,'Huyện Hoàng Su Phì',1),
    new Address(8,'Huyện Xín Mần',1),
    new Address(9,'Huyện Bắc Quang',1),
    new Address(11,'Huyện Quang Bình',1),
    //

    // An Giang
    new Address(12,'An Giang',0),
    new Address(13,'Thành phố Long Xuyên',12),
    new Address(14,'Thành phố Châu Đốc',12),
    new Address(15,'Thị xã Tân Châu',12),
    new Address(16,'Huyện An Phú',12),
    new Address(17,'Huyện Tịnh Biên',12),
    new Address(18,'Huyện Châu Phú',12),
    new Address(19,'Huyện Tri Tôn',12),
    new Address(20,'Huyện Châu Thành',12),
    new Address(21,'Huyện Thoại Sơn',12),
    new Address(22,'Huyện Chợ Mới',12),
    new Address(23,'Huyện Phú Tân',12),
    //

    // Bà Rịa-Vũng Tàu
    new Address(24,'Bà Rịa-Vũng Tàu',0),
    new Address(25,'Thành phố Bà Rịa',24),
    new Address(26,'Thành phố Vũng Tàu',24),
    new Address(27,'Thị xã Phú Mỹ',24),
    new Address(28,'Huyện Châu Đức',24),
    new Address(29,'Huyện Côn Đảo',24),
    new Address(30,'Huyện Đất Đỏ',24),
    new Address(31,'Huyện Long Điền',24),
    new Address(32,'Huyện Sơn Mộc',24),
    //

    // Bạc Liêu
    new Address(33,'Bạc Liêu',0),
    new Address(34,'Thị xã Bạc Liêu',33),
    new Address(35,'Huyện Đồng Hải',33),
    new Address(36,'Huyện Giá Rai',33),
    new Address(37,'Huyện Hòa Bình',33),
    new Address(38,'Huyện Hồng Dân',33),
    new Address(39,'Huyện Phước Long',33),
    new Address(40,'Huyện Vĩnh Lợi',33),
    //

    // Bắc Kạn
    new Address(41,'Bắc Kạn',0),
    new Address(42,'Thành phố Bắc Kạn',41),
    new Address(43,'Huyện Ba Bể',41),
    new Address(44,'Huyện Bạch Thông',41),
    new Address(45,'Huyện Chợ Đồn',41),
    new Address(46,'Huyện Chợ Mới',41),
    new Address(47,'Huyện Na Rì',41),
    new Address(48,'Huyện Ngân Sơn',41),
    new Address(49,'Huyện Pác Nặm',41),
    //

    // Bắc Giang
    new Address(50,'Bắc Giang',0),
    new Address(51,'Thành phố Bắc Giang',50),
    new Address(52,'Huyện Việt Yên',50),
    new Address(53,'Huyện Hiệp Hòa',50),
    new Address(54,'Huyện Lạng Giang',50),
    new Address(55,'Huyện Tân Yên',50),
    new Address(56,'Huyện Yên Thế',50),
    new Address(57,'Huyện Yên Dũng',50),
    new Address(58,'Huyện Lục Nam',50),
    new Address(59,'Huyện Lục Ngạn',50),
    new Address(60,'Huyện Sơn Động',50),
    //

    // Bắc Ninh
    new Address(61,'Bắc Ninh',0),
    new Address(62,'Thành phố Bắc Ninh',61),
    new Address(63,'Thành phố Từ Sờn',61),
    new Address(64,'Huyện Tiên Du',61),
    new Address(65,'Huyện Yên Phong',61),
    new Address(66,'Huyện Quế Võ',61),
    new Address(67,'Huyện Thuận Thành',61),
    new Address(68,'Huyện Gia Bình',61),
    new Address(69,'Huyện Lương Tài',61),
    //

    // Bến Tre
    new Address(70,'Bến Tre',0),
    new Address(71,'Thị xã Bến Tre',70),
    new Address(72,'Huyện Bình Đại',70),
    new Address(73,'Huyện Châu Thành',70),
    new Address(74,'Huyện Giồng Trôm',70),
    new Address(75,'Huyện Ba Tri',70),
    new Address(76,'Huyện Chợ Lách',70),
    new Address(77,'Huyện Mỏ Cày Nam',70),
    new Address(78,'Huyện Mỏ Cày Bắc',70),
    new Address(79,'Huyện Thạnh Phú',70),
    //

    // Bình Dương
    new Address(80,'Bình Dương',0),
    new Address(81,'Thị xã Thủ Dầu Một',80),
    new Address(82,'Huyện Bến Cát',80),
    new Address(83,'Huyện Dầu Tiếng',80),
    new Address(84,'Huyện Dĩ An',80),
    new Address(85,'Huyện Phú Giáo',80),
    new Address(86,'Huyện Tân Uyên',80),
    new Address(87,'Huyện Thuận An',80),
    //

    // Bình Định
    new Address(88,'Bình Định',0),
    new Address(89,'Thành phố Quy Nhơn',88),
    new Address(90,'Thị xã An Nhơn',88),
    new Address(91,'Huyện Tuy Phước',88),
    new Address(92,'Huyện Phù Cát',88),
    new Address(93,'Huyện Phù Mỹ',88),
    new Address(94,'Huyện Hoài Nhơn',88),
    new Address(95,'Huyện Hoài Ân',88),
    new Address(96,'Huyện An Lão',88),
    new Address(97,'Huyện Tây Sơn',88),
    new Address(98,'Huyện Vân Canh',88),
    new Address(99,'Huyện Vĩnh Thạnh',88),
    //

    // Bình Phước
    new Address(100,'Bình Phước',0),
    new Address(101,'Thành phố Đồng Xoài',100),
    new Address(102,'Thị xã Phước Long',100),
    new Address(103,'Thị xã Bình Long',100),
    new Address(104,'Thị xã Chơn Thành',100),
    new Address(105,'Huyện Đồng Phú',100),
    new Address(106,'Huyện Bù Đăng',100),
    new Address(107,'Huyện Bù Đốp',100),
    new Address(108,'Huyện Bù Gia Mập',100),
    new Address(109,'Huyện Lộc Ninh',100),
    new Address(110,'Huyện Hớn Quản',100),
    new Address(111,'Huyện Phú Riềng',100),
    //

    // Bình Thuận
    new Address(112,'Bình Thuận',0),
    new Address(113,'Thành phố Phan Thiết',112),
    new Address(114,'Thị xã La Gi',112),
    new Address(115,'Huyện Bắc Bình',112),
    new Address(116,'Huyện Đức Linh',112),
    new Address(117,'Huyện Hàm Tân',112),
    new Address(118,'Huyện Hàm Thuận Bắc',112),
    new Address(119,'Huyện Hàm Thuận Nam',112),
    new Address(120,'Huyện Phú Quý',112),
    new Address(121,'Huyện Tánh Linh',112),
    new Address(122,'Huyện Tuy Phong',112),
    //

    // Cà Mau
    new Address(123,'Cà Mau',0),
    new Address(124,'Thị xã Cà Mau',123),
    new Address(125,'Huyện Cái Nước',123),
    new Address(126,'Huyện Đầm Dơi',123),
    new Address(127,'Huyện Ngọc Hiển',123),
    new Address(128,'Huyện Thới Bình',123),
    new Address(129,'Huyện Trần Văn Thời',123),
    new Address(130,'Huyện U Minh',123),
    //

    // Cao Bằng
    new Address(131,'Bình Thuận',0),
    new Address(132,'Thành phố Cao Bằng',131),
    new Address(133,'Huyện Hòa An',131),
    new Address(134,'Huyện Bảo Lạc',131),
    new Address(135,'Huyện Bảo Lâm',131),
    new Address(136,'Huyện Hạ Lang',131),
    new Address(137,'Huyện Hà Quảng',131),
    new Address(138,'Huyện Nguyên Bình',131),
    new Address(139,'Huyện Quảng Hòa',131),
    new Address(140,'Huyện Thạch An',131),
    new Address(141,'Huyện Trùng Khánh',131),
    //

    // Đà Nẵng (TP)
    new Address(142,'Đà Nẵng',0),
    new Address(143,'Huyện đảo Hoàng Sa',142),
    new Address(144,'Huyện Hòa Vang',142),
    new Address(145,'Quận Thanh Khê',142),
    new Address(146,'Quận Cẩm Lệ',142),
    new Address(147,'Quận Liên Chiểu',142),
    new Address(148,'Quận Ngũ Hành Sơn',142),
    new Address(149,'Quận Sơn Trà',142),
    new Address(150,'Quận Hải Châu',142),
    //

    // Đắk Lắk
    new Address(151,'Đắk Lắk',0),
    new Address(152,'Thành phố Buôn Ma Thuột',151),
    new Address(153,'Huyện Krông Ana',151),
    new Address(154,'Huyện Ea Kar',151),
    new Address(155,'Huyện Krông Búk',151),
    new Address(156,'Huyện M\'Dắk',151),
    new Address(157,'Huyện Ea H\'Leo',151),
    new Address(158,'Huyện Cư M\'Gar',151),
    new Address(159,'Huyện Buôn Đôn',151),
    new Address(160,'Huyện Ea Súp',151),
    new Address(161,'Huyện Krông Bông',151),
    new Address(162,'Huyện Krông Năng',151),
    new Address(163,'Huyện Lắk',151),
    new Address(164,'Huyện Krông Pắc',151),
    new Address(165,'Huyện Cư Kuin',151),
    //

    // Đắk Nông
    new Address(166,'Đắk Nông',0),
    new Address(167,'Thành phố Gia Nghĩa',166),
    new Address(168,'Huyện Đăk Glong',166),
    new Address(169,'Huyện Cư Jút',166),
    new Address(170,'Huyện Đắk Mil',166),
    new Address(171,'Huyện Krông Nô',166),
    new Address(172,'Huyện Đắk Song',166),
    new Address(173,'Huyện Đắk R\'Lấp',166),
    new Address(174,'Huyện Tuy Đức',166),
    //

    // Điện Biên
    new Address(175,'Điện Biên',0),
    new Address(176,'Thành phố Điện Biên Phủ',175),
    new Address(177,'Thị xã Mường Lay',175),
    new Address(178,'Huyện Mường Nhé',175),
    new Address(179,'Huyện Mường Chà',175),
    new Address(180,'Huyện Tủa Chùa',175),
    new Address(181,'Huyện Tuần Giáo',175),
    new Address(182,'Huyện Điện Biên',175),
    new Address(183,'Huyện Điện Biên Đông',175),
    new Address(184,'Huyện Mường Ảng',175),
    new Address(185,'Huyện Nậm Pồ',175),
    //

    // Đồng Nai
    new Address(186,'Đồng Nai',0),
    new Address(187,'Thành phố Biên Hòa',186),
    new Address(188,'Thị xã Vĩnh An',186),
    new Address(189,'Huyện Định Quán',186),
    new Address(190,'Huyện Long Khánh',186),
    new Address(191,'Huyện Long Thành',186),
    new Address(192,'Huyện Tân Phú',186),
    new Address(193,'Huyện Thống Nhất',186),
    new Address(194,'Huyện Xuân Lộc',186),
    //

    // Đồng Tháp
    new Address(195,'Đồng Tháp',0),
    new Address(196,'Thành phố Cao Lãnh',195),
    new Address(197,'Thành phố Sa Đéc',195),
    new Address(198,'Thị xã Hồng Ngự',195),
    new Address(199,'Huyện Tân Hồng',195),
    new Address(200,'Huyện Hồng Ngự',195),
    new Address(201,'Huyện Tam Nông',195),
    new Address(202,'Huyện Thanh Bình',195),
    new Address(203,'Huyện Tháp Mười',195),
    new Address(204,'Huyện Cao Lãnh',195),
    new Address(205,'Huyện Lấp Vò',195),
    new Address(206,'Huyện Lai Vung',195),
    new Address(207,'Huyện Châu Thành',195),
    //

    // Gia Lai
    new Address(208,'Gia Lai',0),
    new Address(209,'Thành phố Pieiku',208),
    new Address(210,'Thị xã An Khê',208),
    new Address(211,'Thị xã Ayun Pa',208),
    new Address(212,'Huyện Đak Pơ',208),
    new Address(213,'Huyện Đak Đoa',208),
    new Address(214,'Huyện Chư Pah',208),
    new Address(215,'Huyện Chư Prông,',208),
    new Address(216,'Huyện Chư Sê',208),
    new Address(217,'Huyện Đức Cử',208),
    new Address(218,'Huyện Ia Grai',208),
    new Address(219,'Huyện Kbang',208),
    new Address(220,'Huyện Krông Pa',208),
    new Address(221,'Huyện Krông Chro',208),
    new Address(222,'Huyện Mang Yang',208),
    new Address(223,'Huyện la Pa',208),
    new Address(224,'Huyện Phú Thiện',208),
    new Address(225,'Huyện Chư Pưh',208),
    //

    // Hà Nam
    new Address(226,'Hà Nam',0),
    new Address(227,'Thành phố Phủ Lý',226),
    new Address(228,'Thị xã Duy Tiên',226),
    new Address(229,'Huyện Kim Bảng',226),
    new Address(230,'Huyện Thanh Liêm',226),
    new Address(231,'Huyện Bình Lục',226),
    new Address(232,'Huyện Lý Nhân',226),
    //

    // Hà Nội (TP)
    new Address(233,'Hà Nội',0),
    new Address(234,'Quận Ba Đình',233),
    new Address(235,'Quận Hoàn Kiếm',233),
    new Address(236,'Quận Tây Hồ',233),
    new Address(237,'Quận Long Biên',233),
    new Address(238,'Quận Cầu Giấy',233),
    new Address(239,'Quận Hai Bà Trưng',233),
    new Address(240,'Quận Hoàng Mai',233),
    new Address(241,'Quận Thanh Xuân',233),
    new Address(242,'Huyện Sóc Sơn',233),
    new Address(243,'Huyện Đông Anh',233),
    new Address(244,'Huyện Gia Lâm',233),
    new Address(245,'Quận Nam Từ Liêm',233),
    new Address(246,'Huyện Thanh Trì',233),
    new Address(247,'Quận Bắc Từ Liêm',233),
    new Address(248,'Huyện Mê Linh',233),
    new Address(249,'Quận Hà Đông',233),
    new Address(250,'Thị xã Sơn Tây',233),
    new Address(251,'Huyện Ba Vì',233),
    new Address(252,'Huyện Phúc Thọ',233),
    new Address(253,'Huyện Đan Phượng',233),
    new Address(254,'Huyện Hoài Đức',233),
    new Address(255,'Huyện Quốc Oai',233),
    new Address(256,'Huyện Thạch Thất',233),
    new Address(257,'Huyện Chương Mỹ',233),
    new Address(258,'Huyện Thanh Oai',233),
    new Address(259,'Huyện Thường Tín',233),
    new Address(260,'Huyện Phú Xuyên',233),
    new Address(261,'Huyện Ứng Hòa',233),
    new Address(262,'Huyện Mỹ Đức',233),
    //

    // Cần Thơ (TP)
    new Address(263,'Cần Thơ',0),
    new Address(264,'Quận Ninh Kiều',263),
    new Address(265,'Quận Bình Thủy',263),
    new Address(266,'Quận Cái Răng',263),
    new Address(267,'Quận Ô Môn',263),
    new Address(268,'Huyện Phong Điền',263),
    new Address(269,'Huyện Cờ Đỏ',263),
    new Address(270,'Huyện Vĩnh Thạnh',263),
    new Address(271,'Huyện Thốt Nốt',263),
    //

    // Hà Tây
    new Address(272,'Hà Tây',0),
    new Address(273,'Thị xã Hà Đông',272),
    new Address(274,'Thị xã Sơn Tây',272),
    new Address(275,'Huyện Ba Vì',272),
    new Address(276,'Huyện Chương Mỹ',272),
    new Address(277,'Huyện Đan Phượng',272),
    new Address(278,'Huyện Hoài Đức',272),
    new Address(279,'Huyện Mỹ Đức',272),
    new Address(280,'Huyện Phú Xuyên',272),
    new Address(281,'Huyện Phúc Thọ',272),
    new Address(282,'Huyện Quốc Oai',272),
    new Address(283,'Huyện Thạch Thất',272),
    new Address(284,'Huyện Thanh Oai',272),
    new Address(285,'Huyện Thường Tín',272),
    new Address(286,'Huyện Ứng Hòa',272),
    //

    // Hà Tĩnh
    new Address(287,'Hà Tĩnh',0),
    new Address(288,'Thành phố Hà Tĩnh',287),
    new Address(289,'Thị xã Hồng Lĩnh',287),
    new Address(290,'Huyện Hương Sơn',287),
    new Address(291,'Huyện Đức Thọ',287),
    new Address(292,'Huyện Vũ Quang',287),
    new Address(293,'Huyện Nghi Xuân',287),
    new Address(294,'Huyện Can Lộc',287),
    new Address(295,'Huyện Hương Khê',287),
    new Address(296,'Huyện Thạch Hà',287),
    new Address(297,'Huyện Cẩm Xuyên',287),
    new Address(298,'Huyện Kỳ Anh',287),
    new Address(299,'Huyện Lộc Hà',287),
    new Address(300,'Thị xã Kỳ Anh',287),
    //

    // Hải Dương
    new Address(301,'Hải Dương',0),
    new Address(302,'Thành phố Hải Dương',301),
    new Address(303,'Thành phố Chí Linh',301),
    new Address(304,'Huyện Cẩm Giàng',301),
    new Address(305,'Huyện Ninh Giang',301),
    new Address(306,'Huyện Gia Lộc',301),
    new Address(307,'Huyện Kim Thành',301),
    new Address(308,'Huyện Nam Sách',301),
    new Address(309,'Huyện Thanh Hà',301),
    new Address(310,'Huyện Tứ Kỳ',301),
    new Address(311,'Huyện Bình Giang',301),
    new Address(312,'Huyện Kinh Môn',301),
    new Address(313,'Huyện Thanh Miện',301),
    //

    // Hải Phòng (TP)
    new Address(314,'Hải Phòng',0),
    new Address(315,'Khu phố Hồng Bàng',314),
    new Address(316,'Khu phố Lê Chân',314),
    new Address(317,'Khu phố Ngô Quyền',314),
    new Address(318,'Thị xã Kiến An',314),
    new Address(319,'Huyện An Dương',314),
    new Address(320,'Huyện An Lão',314),
    new Address(321,'Huyện Cát Bà',314),
    new Address(322,'Huyện Cát Hải',314),
    new Address(323,'Huyện Kiến Thụy',314),
    new Address(324,'Huyện Thủy Nguyên',314),
    new Address(325,'Huyện Tiên Lãng',314),
    new Address(326,'Huyện Vĩnh Bảo',314),
    //

    // Hòa Bình
    new Address(327,'Hòa Bình',0),
    new Address(328,'Thành phố Hòa Bình',327),
    new Address(329,'Huyện Lương Sơn',327),
    new Address(330,'Huyện Cao Phong',327),
    new Address(331,'Huyện Đà Bắc',327),
    new Address(332,'Huyện Kim Bôi',327),
    new Address(333,'Huyện Kỳ Sơn',327),
    new Address(334,'Huyện Lạc Sơn',327),
    new Address(335,'Huyện Lạc Thủy',327),
    new Address(336,'Huyện Mai Châu',327),
    new Address(337,'Huyện Tân Lạc',327),
    new Address(338,'Huyện Yên Thủy',327),
    //

    // HCM (TP)
    new Address(339,'Hồ Chí Minh',0),
    new Address(340,'Quận 1',339),
    new Address(341,'Quận 12',339),
    new Address(342,'Quận Gò Vấp',339),
    new Address(343,'Quận Bình Thạnh',339),
    new Address(344,'Quận Tân Bình',339),
    new Address(345,'Quận Tân Phú',339),
    new Address(346,'Quận Phú Nhuận',339),
    new Address(347,'Thành phố Thủ Đức',339),
    new Address(348,'Quận 3',339),
    new Address(349,'Quận 10',339),
    new Address(350,'Quận 11',339),
    new Address(351,'Quận 4',339),
    new Address(352,'Quận 5',339),
    new Address(353,'Quận 6',339),
    new Address(354,'Quận 8',339),
    new Address(355,'Quận Bình Tân',339),
    new Address(356,'Quận 7',339),
    new Address(357,'Huyện Củ Chi',339),
    new Address(358,'Huyện Hóc Môn',339),
    new Address(359,'Huyện Bình Chánh',339),
    new Address(360,'Huyện Nhà Bè',339),
    new Address(361,'Huyện Cần Giờ',339),
    //

    // Hậu Giang
    new Address(362,'Hậu Giang',0),
    new Address(363,'Thành phố Vị Thanh',362),
    new Address(364,'Thành phố Ngã Bảy',362),
    new Address(365,'Huyện Châu Thành A',362),
    new Address(366,'Huyện Châu Thành',362),
    new Address(367,'Huyện Phụng Hiệp',362),
    new Address(368,'Huyện Vị Thuỷ',362),
    new Address(369,'Huyện Long Mỹ',362),
    new Address(370,'Thị xã Long Mỹ',362),
    //

    // Hưng Yên
    new Address(371,'Hưng Yên',0),
    new Address(372,'Thành phố Hưng Yên',371),
    new Address(373,'Huyện Ân Thi',371),
    new Address(374,'Huyện Mỹ Hào',371),
    new Address(375,'Huyện Tiên Lũ',371),
    new Address(376,'Huyện Phù Cừ',371),
    new Address(377,'Huyện Yên Mỹ',371),
    new Address(378,'Huyện Văn Giang',371),
    new Address(379,'Huyện Văn Lâm',371),
    new Address(380,'Huyện Khoái Châu',371),
    //

    // Khánh Hòa
    new Address(381,'Khánh Hòa',0),
    new Address(382,'Thành phố Nha Trang',381),
    new Address(383,'Huyện Cam Ranh',381),
    new Address(384,'Huyện Diên Khánh',381),
    new Address(385,'Huyện Khánh Sơn',381),
    new Address(386,'Huyện Khánh Vĩnh',381),
    new Address(387,'Huyện Ninh Hòa',381),
    new Address(388,'Huyện Vạn Ninh',381),
    new Address(389,'Huyện đảo Trường Sa',381),
    //

    // Kiên Giang
    new Address(390,'Kiên Giang',0),
    new Address(391,'Thành phố Rạch Giá',390),
    new Address(392,'Thành phố Hà Tiên',390),
    new Address(393,'Huyện Kiên Lương',390),
    new Address(394,'Huyện Hòn Đất',390),
    new Address(395,'Huyện Tân Hiệp',390),
    new Address(396,'Huyện Châu Thành',390),
    new Address(397,'Huyện Giồng Riềng',390),
    new Address(398,'Huyện An Biên',390),
    new Address(399,'Huyện An Minh',390),
    new Address(400,'Huyện Vĩnh Thuận',390),
    new Address(401,'Thành phố Phú Quốc',390),
    new Address(402,'Huyện Kiên Hải',390),
    new Address(403,'Huyện U Minh Thượng',390),
    new Address(404,'Huyện Giang Thành',390),
    //

    // Kon Tum
    new Address(405,'Kon Tum',0),
    new Address(406,'Thành phố Kon Tum',405),
    new Address(407,'Huyện Đăk Glei',405),
    new Address(408,'Huyện Đăk Hà',405),
    new Address(409,'Huyện Đăk Tô',405),
    new Address(410,'Huyện Kon Plông',405),
    new Address(411,'Huyện Kon Rẫy',405),
    new Address(412,'Huyện Ngọc Hồi',405),
    new Address(413,'Huyện Sa Thầy',405),
    new Address(414,'Huyện Tu Mơ Rông',405),
    //

    // Lai Châu
    new Address(415,'Lai Châu',0),
    new Address(416,'Thành phố Lai Châu',415),
    new Address(417,'Huyện Mường Tè',415),
    new Address(418,'Huyện Sìn Hồ',415),
    new Address(419,'Huyện Nậm Nhùn',415),
    new Address(420,'Huyện Tam Đường',415),
    new Address(421,'Huyện Phong Thổ',415),
    new Address(422,'Huyện Tân Uyên',415),
    new Address(423,'Huyện Than Uyên',415),
    //

    // Lào Cai
    new Address(424,'Lào Cai',0),
    new Address(425,'Thành phố Lào Cai',424),
    new Address(426,'Thị xã Sa Pa',424),
    new Address(427,'Huyện Bát Xát',424),
    new Address(428,'Huyện Bảo Yên',424),
    new Address(429,'Huyện Bảo Thắng',424),
    new Address(430,'Huyện Si Ma Cai',424),
    new Address(431,'Huyện Văn Bàn',424),
    new Address(432,'Huyện Mường Khương',424),
    new Address(433,'Huyện Bắc Hà',424),
    //

    // Lạng Sơn
    new Address(434,'Lạng Sơn',0),
    new Address(435,'Thành phố Lạng Sơn',434),
    new Address(436,'Huyện Bắc Sơn',434),
    new Address(437,'Huyện Bình Gia',434),
    new Address(438,'Huyện Cao Lộc',434),
    new Address(439,'Huyện Chi Lăng',434),
    new Address(440,'Huyện Đình Lập',434),
    new Address(441,'Huyện Hữu Lũng',434),
    new Address(442,'Huyện Lộc Bình',434),
    new Address(443,'Huyện Tràng Định',434),
    new Address(444,'Huyện Văn Lãng',434),
    new Address(445,'Huyện Văn Quan',434),
    //

    // Lâm Đồng
    new Address(446,'Lâm Đồng',0),
    new Address(447,'Thành phố Đà Lạt',446),
    new Address(448,'Thành phố Bảo Lộc',446),
    new Address(449,'Huyện Đam Rông',446),
    new Address(450,'Huyện Lạc Dương',446),
    new Address(451,'Huyện Lâm Hà',446),
    new Address(452,'Huyện Đơn Dương',446),
    new Address(453,'Huyện Đức Trọng',446),
    new Address(454,'Huyện Di Linh',446),
    new Address(455,'Huyện Bảo Lâm',446),
    new Address(456,'Huyện Đạ Huoai',446),
    new Address(457,'Huyện Đạ Tẻh',446),
    new Address(458,'Huyện Cát Tiên',446),
    //

    // Long An
    new Address(459,'Long An',0),
    new Address(460,'Thành phố Tân An',459),
    new Address(461,'Thị xã Kiến Tường',459),
    new Address(462,'Huyện Đức Huệ',459),
    new Address(463,'Huyện Đức Hòa',459),
    new Address(464,'Huyện Bến Lức',459),
    new Address(465,'Huyện Cần Đước',459),
    new Address(466,'Huyện Cần Giuộc',459),
    new Address(467,'Huyện Thủ Thừa',459),
    new Address(468,'Huyện Tân Trụ',459),
    new Address(469,'Huyện Châu Thành',459),
    new Address(470,'Huyện Thạnh Hóa',459),
    new Address(471,'Huyện Tân Thạnh',459),
    new Address(472,'Huyện Mộc Hóa',459),
    new Address(473,'Huyện Vĩnh Hưng',459),
    new Address(474,'Huyện Tân Hưng',459),
    //

    // Nam Định
    new Address(475,'Nam Định',0),
    new Address(476,'Thành phố Nam Định',475),
    new Address(477,'Huyện Mỹ Lộc',475),
    new Address(478,'Huyện Vụ Bản',475),
    new Address(479,'Huyện Ý Yên',475),
    new Address(480,'Huyện Nghĩa Hưng',475),
    new Address(481,'Huyện Nam Trực',475),
    new Address(482,'Huyện Trực Ninh',475),
    new Address(483,'Huyện Xuân Trường',475),
    new Address(484,'Huyện Giao Thủy',475),
    new Address(485,'Huyện Hải Hậu',475),
    //

    // Nghệ An
    new Address(486,'Nghệ An',0),
    new Address(487,'Thành phố Vinh',486),
    new Address(488,'Thị xã Cửa Lò',486),
    new Address(489,'Thị xã Thái Hòa',486),
    new Address(490,'Huyện Quỳnh Lưu',486),
    new Address(491,'Huyện Diễn Châu',486),
    new Address(492,'Huyện Nghi Lộc',486),
    new Address(493,'Huyện Yên Thành',486),
    new Address(494,'Huyện Hưng Nguyên',486),
    new Address(495,'Huyện Nghĩa Đàn',486),
    new Address(496,'Huyện Quỳ Hợp',486),
    new Address(497,'Huyện Quỳ Châu',486),
    new Address(498,'Huyện Quế Phong',486),
    new Address(499,'Huyện Tân Kỳ',486),
    new Address(500,'Huyện Đô Lương',486),
    new Address(501,'Huyện Anh Sơn',486),
    new Address(502,'Huyện Con Cuông',486),
    new Address(503,'Huyện Tương Dương',486),
    new Address(504,'Huyện Kỳ Sơn',486),
    new Address(505,'Huyện Nam Đàn',486),
    new Address(506,'Huyện Thanh Chương',486),
    //

    // Ninh Bình
    new Address(507,'Ninh Bình',0),
    new Address(508,'Thành phố Ninh Bình',507),
    new Address(509,'Thành phố Tam Điệp',507),
    new Address(510,'Huyện Nho Quan',507),
    new Address(511,'Huyện Gia Viễn',507),
    new Address(512,'Huyện Hoa Lư',507),
    new Address(513,'Huyện Yên Mô',507),
    new Address(514,'Huyện Yên Khánh',507),
    new Address(515,'Huyện Kim Sơn',507),
    //

    // Ninh Thuận
    new Address(516,'Ninh Thuận',0),
    new Address(517,'Thành phố Phan Rang-Tháp Chàm',516),
    new Address(518,'Huyện Bác Ái',516),
    new Address(519,'Huyện Ninh Sơn',516),
    new Address(520,'Huyện Ninh Hải',516),
    new Address(521,'Huyện Ninh Phước',516),
    new Address(522,'Huyện Thuận Bắc',516),
    new Address(523,'Huyện Thuận Nam',516),
    //

    // Phú Thọ
    new Address(524,'Phú Thọ',0),
    new Address(525,'Thành phố Việt Trì',524),
    new Address(526,'Thị xã Phú Thọ',524),
    new Address(527,'Huyện Đoan Hùng',524),
    new Address(528,'Huyện Hạ Hoà',524),
    new Address(529,'Huyện Thanh Ba',524),
    new Address(530,'Huyện Phù Ninh',524),
    new Address(531,'Huyện Yên Lập',524),
    new Address(532,'Huyện Cẩm Khê',524),
    new Address(533,'Huyện Tam Nông',524),
    new Address(534,'Huyện Lâm Thao',524),
    new Address(535,'Huyện Thanh Sơn',524),
    new Address(536,'Huyện Thanh Thuỷ',524),
    new Address(537,'Huyện Tân Sơn',524),
    //

    // Phú Yên
    new Address(538,'Phú Yên',0),
    new Address(539,'Thành phố Tuy Hoà',538),
    new Address(540,'Thị xã Sông Cầu',538),
    new Address(541,'Huyện Đồng Xuân',538),
    new Address(542,'Huyện Tuy An',538),
    new Address(543,'Huyện Sơn Hòa',538),
    new Address(544,'Huyện Sông Hinh',538),
    new Address(545,'Huyện Tây Hoà',538),
    new Address(546,'Huyện Phú Hoà',538),
    new Address(547,'Thị xã Đông Hòa',538),
    //

    // Quảng Bình
    new Address(548,'Quảng Bình',0),
    new Address(549,'Thành phố Đồng Hới',548),
    new Address(550,'Thị xã Ba Đồn',548),
    new Address(551,'Huyện Minh Hóa',548),
    new Address(552,'Huyện Tuyên Hóa',548),
    new Address(553,'Huyện Quảng Trạch',548),
    new Address(554,'Huyện Bố Trạch',548),
    new Address(555,'Huyện Quảng Ninh',548),
    new Address(556,'Huyện Lệ Thủy',548),
    //

    // Quảng Nam
    new Address(557,'Quảng Nam',0),
    new Address(558,'Thành phố Tam Kỳ',557),
    new Address(559,'Thành phố Hội An',557),
    new Address(560,'Thị xã Điện Bàn',557),
      //6 huyện đồng bằng
    new Address(561,'Huyện Núi Thành',557),
    new Address(562,'Huyện Phú Ninh',557),
    new Address(563,'Huyện Thăng Bình',557),
    new Address(564,'Huyện Quế Sơn',557),
    new Address(565,'Huyện Duy Xuyên',557),
    new Address(566,'Huyện Đại Lộc',557),
      //9 huyện miền núi
    new Address(567,'Huyện Tây Giang',557),
    new Address(568,'Huyện Nam Giang',557),
    new Address(569,'Huyện Đông Giang',557),
    new Address(570,'Huyện Phước Sơn',557),
    new Address(571,'Huyện Bắc Trà My',557),
    new Address(556,'Huyện Nam Trà My',557),
    new Address(572,'Huyện Hiệp Đức',557),
    new Address(573,'Huyện Tiên Phước',557),
    new Address(574,'Huyện Nông Sơn',557),
    //

    // Quảng Ngãi
    new Address(575,'Quảng Ngãi',0),
    new Address(576,'Thành phố Quảng Ngãi',575),
    new Address(577,'Thị xã Đức Phổ',575),
    new Address(578,'Huyện Bình Sơn',575),
    new Address(579,'Huyện Trà Bồng',575),
    new Address(580,'Huyện Sơn Tịnh',575),
    new Address(581,'Huyện Tư Nghĩa',575),
    new Address(582,'Huyện Sơn Hà',575),
    new Address(583,'Huyện Sơn Tây',575),
    new Address(584,'Huyện Minh Long',575),
    new Address(585,'Huyện Nghĩa Hành',575),
    new Address(585,'Huyện Mộ Đức',575),
    new Address(587,'Huyện Ba Tơ',575),
    new Address(588,'Huyện Lý Sơn',575),
    //

    // Quảng Ninh
    new Address(589,'Quảng Ninh',0),
    new Address(590,'Thành phố Hạ Long',589),
    new Address(591,'Thành phố Móng Cái',589),
    new Address(592,'Thành phố Cẩm Phả',589),
    new Address(593,'Thành phố Uông Bí',589),
    new Address(594,'Huyện Bình Liêu',589),
    new Address(595,'Huyện Tiên Yên',589),
    new Address(596,'Huyện Đầm Hà',589),
    new Address(597,'Huyện Hải Hà',589),
    new Address(598,'Huyện Ba Chẽ',589),
    new Address(599,'Huyện Vân Đồn',589),
    new Address(600,'Thị xã Đông Triều',589),
    new Address(601,'Thị xã Quảng Yên',589),
    new Address(602,'Huyện Cô Tô',589),
    //

    // Quảng Trị
    new Address(603,'Quảng Trị',0),
    new Address(604,'Thành phố Đông Hà',603),
    new Address(605,'Thị xã Quảng Trị',603),
    new Address(606,'Huyện Vĩnh Linh',603),
    new Address(607,'Huyện Hướng Hóa',603),
    new Address(608,'Huyện Gio Linh',603),
    new Address(609,'Huyện Đa Krông',603),
    new Address(610,'Huyện Cam Lộ',603),
    new Address(611,'Huyện Triệu Phong',603),
    new Address(612,'Huyện Hải Lăng',603),
    new Address(613,'Huyện Cồn Cỏ',603),
    //

    // Sóc Trăng
    new Address(614,'Sóc Trăng',0),
    new Address(615,'Thành phố Sóc Trăng',614),
    new Address(616,'Huyện Châu Thành',614),
    new Address(617,'Huyện Kế Sách',614),
    new Address(618,'Huyện Mỹ Tú',614),
    new Address(619,'Huyện Cù Lao Dung',614),
    new Address(620,'Huyện Long Phú',614),
    new Address(621,'Huyện Mỹ Xuyên',614),
    new Address(622,'Thị xã Ngã Năm',614),
    new Address(623,'Thị xã Vĩnh Châu',614),
    new Address(624,'Huyện Trần Đề',614),
    //

    // Sơn La
    new Address(625,'Sơn La',0),
    new Address(626,'Thành phố Sơn La',625),
    new Address(627,'Huyện Quỳnh Nhai',625),
    new Address(628,'Huyện Mường La',625),
    new Address(629,'Huyện Thuận Châu',625),
    new Address(630,'Huyện Phù Yên',625),
    new Address(631,'Huyện Bắc Yên',625),
    new Address(632,'Huyện Mai Sơn',625),
    new Address(633,'Huyện Sông Mã',625),
    new Address(634,'Huyện Yên Châu',625),
    new Address(635,'Huyện Mộc Châu',625),
    new Address(636,'Huyện Sốp Cộp',625),
    new Address(637,'Huyện Vân Hồ',625),
    //

    // Tây Ninh
    new Address(638,'Tây Ninh',0),
    new Address(639,'Thành phố Tây Ninh',638),
    new Address(640,'Huyện Tân Biên',638),
    new Address(641,'Huyện Tân Châu',638),
    new Address(642,'Huyện Dương Minh Châu',638),
    new Address(643,'Huyện Châu Thành',638),
    new Address(644,'Thị xã Hòa Thành',638),
    new Address(645,'Huyện Gò Dầu',638),
    new Address(646,'Huyện Bến Cầu',638),
    new Address(647,'Thị xã Trảng Bàng',638),
    //

    // Thái Bình
    new Address(648,'Thái Bình',0),
    new Address(649,'Thành phố Thái Bình',648),
    new Address(650,'Huyện Quỳnh Phụ',648),
    new Address(651,'Huyện Hưng Hà',648),
    new Address(652,'Huyện Đông Hưng',648),
    new Address(653,'Huyện Thái Thụy',648),
    new Address(654,'Huyện Tiền Hải',648),
    new Address(655,'Huyện Kiến Xương',648),
    new Address(656,'Huyện Vũ Thư',648),
    //

    // Thái Nguyên
    new Address(657,'Thái Nguyên',0),
    new Address(658,'Thành phố Thái Nguyên',657),
    new Address(659,'Thành phố Sông Công',657),
    new Address(660,'Thành phố Phổ Yên',657),
    new Address(661,'Huyện Phú Bình',657),
    new Address(662,'Huyện Đồng Hỷ',657),
    new Address(663,'Huyện Võ Nhai',657),
    new Address(664,'Huyện Định Hóa',657),
    new Address(665,'Huyện Đại Từ',657),
    new Address(666,'Huyện Phú Lương',657),
    //

    // Thanh Hóa
    new Address(667,'Thanh Hóa',0),
    new Address(668,'Thành phố Thanh Hóa',667),
    new Address(669,'Thị xã Bỉm Sơn',667),
    new Address(670,'Thành phố Sầm Sơn',667),
    new Address(671,'Huyện Mường Lát',667),
    new Address(672,'Huyện Quan Hóa',667),
    new Address(673,'Huyện Bá Thước',667),
    new Address(674,'Huyện Quan Sơn',667),
    new Address(675,'Huyện Lang Chánh',667),
    new Address(676,'Huyện Ngọc Lặc',667),
    new Address(677,'Huyện Cẩm Thủy',667),
    new Address(678,'Huyện Thạch Thành',667),
    new Address(679,'Huyện Hà Trung',667),
    new Address(680,'Huyện Yên Định',667),
    new Address(681,'Huyện Thọ Xuân',667),
    new Address(682,'Huyện Thường Xuân',667),
    new Address(683,'Huyện Triệu Sơn',667),
    new Address(684,'Huyện Thiệu Hóa',667),
    new Address(685,'Huyện Hoằng Hóa',667),
    new Address(686,'Huyện Nga Sơn',667),
    new Address(687,'Huyện Hậu Lộc',667),
    new Address(688,'Huyện Như Xuân',667),
    new Address(689,'Huyện Như Thanh',667),
    new Address(690,'Huyện Nông Cống',667),
    new Address(691,'Huyện Đông Sơn',667),
    new Address(692,'Huyện Quảng Xương',667),
    new Address(693,'Thị xã Nghi Sơn',667),
    //

    // Thừa Thiên-Huế
    new Address(694,'Thừa Thiên - Huế',0),
    new Address(695,'Thành phố Huế',694),
    new Address(695,'Huyện Phong Điền',694),
    new Address(697,'Huyện Quảng Điền',694),
    new Address(698,'Huyện Phú Vang',694),
    new Address(699,'Thị xã Hương Thủy',694),
    new Address(700,'Thị xã Hương Trà',694),
    new Address(701,'Huyện A Lưới',694),
    new Address(702,'Huyện Phú Lộc',694),
    new Address(703,'Huyện Nam Đông',694),
    //

    // Tiền Giang
    new Address(704,'Tiền Giang',0),
    new Address(705,'Thành phố Mỹ Tho',704),
    new Address(706,'Thị xã Gò Công',704),
    new Address(707,'Thị xã Cai Lậy',704),
    new Address(708,'Huyện Cái Bè',704),
    new Address(709,'Huyện Cai Lậy',704),
    new Address(710,'Huyện Châu Thành',704),
    new Address(711,'Huyện Chợ Gạo',704),
    new Address(712,'Huyện Gò Công Tây',704),
    new Address(713,'Huyện Gò Công Đông',704),
    new Address(714,'Huyện Tân Phú Đông',704),
    //

    // Trà Vinh
    new Address(715,'Trà Vinh',0),
    new Address(716,'Thành phố Trà Vinh',715),
    new Address(717,'Thị xã Duyên Hải',715),
    new Address(718,'Huyện Càng Long',715),
    new Address(719,'Huyện Cầu Kè',715),
    new Address(720,'Huyện Châu Thành',715),
    new Address(721,'Huyện Cầu Ngang',715),
    new Address(722,'Huyện Duyên Hải',715),
    new Address(723,'Huyện Tiểu Cần',715),
    new Address(724,'Huyện Trà Cú',715),
    //

    // Tuyên Quang
    new Address(725,'Tuyên Quang',0),
    new Address(726,'Thành phố Tuyên Quang',725),
    new Address(727,'Huyện Lâm Bình',725),
    new Address(728,'Huyện Na Hang',725),
    new Address(729,'Huyện Chiêm Hóa',725),
    new Address(730,'Huyện Hàm Yên',725),
    new Address(731,'Huyện Yên Sơn',725),
    new Address(732,'Huyện Sơn Dương',725),
    //

    // Vĩnh Long
    new Address(733,'Vĩnh Long',0),
    new Address(734,'Thành phố Vĩnh Long',733),
    new Address(735,'Thị xã Bình Minh',733),
    new Address(736,'Huyện Bình Tân',733),
    new Address(737,'Huyện Long Hồ',733),
    new Address(738,'Huyện Mang Thít',733),
    new Address(739,'Huyện Tam Bình',733),
    new Address(740,'Huyện Trà Ôn',733),
    new Address(741,'Huyện Vũng Liêm',733),
    //

    // Vĩnh Phúc
    new Address(742,'Vĩnh Phúc',0),
    new Address(743,'Thành phố Vĩnh Yên',742),
    new Address(745,'Huyện Lập Thạch',742),
    new Address(746,'Huyện Tam Dương',742),
    new Address(747,'Huyện Tam Đảo',742),
    new Address(748,'Huyện Bình Xuyên',742),
    new Address(749,'Huyện Yên Lạc',742),
    new Address(750,'Huyện Vĩnh Tường',742),
    new Address(751,'Huyện Sông Lô',742),
    //

    // Yên Bái
    new Address(752,'Yên Bái',0),
    new Address(753,'Thành phố Yên Bái',752),
    new Address(754,'Thị xã Nghĩa Lộ',752),
    new Address(755,'Huyện Lục Yên',752),
    new Address(756,'Huyện Văn Yên',752),
    new Address(757,'Huyện Mù Căng Chải',752),
    new Address(758,'Huyện Trấn Yên',752),
    new Address(759,'Huyện Trạm Tấu',752),
    new Address(760,'Huyện Văn Chấn',752),
    new Address(761,'Huyện Yên Bình',752),
    //
  ];
  public listaddress(): Address[] {
    return this.list;
  }

  public parent(id:number): Address[] {
    let a: Address[] = [];
    if(id >=5)
    {
      for (let i = id - 5; i < id+25; i++){
        a.push(this.list[i]);
      }
    }else {
      for (let i = id; i < id+25; i++){
        a.push(this.list[i]);
      }
    }

    return a;
  }
}

