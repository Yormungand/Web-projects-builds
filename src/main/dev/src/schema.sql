CREATE TABLE website(
                        id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
                        name varchar(255) NOT NULL,
                        domain varchar(100) NOT NULL,
                        alias varchar(50) NOT NULL,
                        email VARCHAR(100),
                        noReplyEmail VARCHAR(100),
                        template varchar(50) NOT NULL,
                        logo_name VARCHAR(255),
                        logo_ext VARCHAR(4),
                        logo_ratio DECIMAL(4,2),
                        squareLogo_name VARCHAR(255),
                        squareLogo_ext VARCHAR(4),
                        squareLogo_ratio DECIMAL(4,2),
                        watermark_name VARCHAR(255),
                        watermark_ext VARCHAR(4),
                        watermark_ratio DECIMAL(4,2),
                        watermark_position TINYINT(1),
                        keyword varchar(500),
                        description varchar(500),
                        useSSL TINYINT UNSIGNED NOT NULL DEFAULT 0,
                        useSSLAdmin TINYINT UNSIGNED NOT NULL DEFAULT 0,
                        useCDNStatic TINYINT UNSIGNED NOT NULL DEFAULT 0,
                        useCDNResource TINYINT UNSIGNED NOT NULL DEFAULT 0,
                        pictureSizeTiny SMALLINT UNSIGNED NOT NULL DEFAULT 150,
                        pictureSizeSmall SMALLINT UNSIGNED NOT NULL DEFAULT 300,
                        pictureSizeMedium SMALLINT UNSIGNED NOT NULL DEFAULT 500,
                        pictureSizeBig SMALLINT UNSIGNED NOT NULL DEFAULT 750,
                        pictureSizeLarge SMALLINT UNSIGNED NOT NULL DEFAULT 1000,
                        pictureSize SMALLINT UNSIGNED NOT NULL DEFAULT 2048,
                        analyticsId VARCHAR(64),
                        tenantId VARCHAR(64) NOT NULL,
                        languages VARCHAR(128),
                        fbAppId VARCHAR(64),
                        fbAppSecret VARCHAR(64),
                        fbAppNamespace VARCHAR(64),
                        opened DATETIME,
                        closed DATETIME,
                        userRegistrationAllowed TINYINT NOT NULL DEFAULT 0,
                        userEmailConfirmationRequired TINYINT NOT NULL DEFAULT 0,
                        userPhoneConfirmationRequired TINYINT NOT NULL DEFAULT 0,
                        PRIMARY KEY (id),
                        UNIQUE KEY (domain),
                        UNIQUE KEY (alias),
                        UNIQUE KEY (name)
)ENGINE=InnoDB;

INSERT INTO website(id, name, domain, alias, template, tenantId) VALUES (1, 'Жишээ вэб сайт', 'example.sodonsolution.org', 'example', 'example', DATABASE());

CREATE TABLE websiteDomain(
                              domain VARCHAR(128) NOT NULL,
                              lang CHAR(2),
                              type VARCHAR(20) NOT NULL,
                              targetDomain VARCHAR(255),
                              site_id TINYINT UNSIGNED NULL,
                              PRIMARY KEY (domain),
                              FOREIGN KEY (site_id) REFERENCES website(id) ON DELETE CASCADE ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE websiteModule(
                              id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
                              parent_id TINYINT UNSIGNED,
                              name VARCHAR(40) NOT NULL,
                              label VARCHAR(40) NOT NULL,
                              icon VARCHAR(32),
                              ordering TINYINT NOT NULL DEFAULT 0,
                              PRIMARY KEY(id),
                              FOREIGN KEY (parent_id) REFERENCES websiteModule(id) ON DELETE RESTRICT ON UPDATE CASCADE
)Engine=InnoDB;

INSERT INTO websiteModule(id, parent_id, name, label, ordering)
VALUES
    (1, null, 'article', 'Мэдээ', 1),
    (2, 1, 'article/section', 'Мэдээний бүлэг', 1),
    (3, 1, 'article/category', 'Мэдээний ангилал', 2),
    (4, 1, 'article/comment', 'Мэдээний сэтгэгдэл', 4),
    (5, 1, 'article/feature', 'Мэдээний онцлох', 3),
    (6, 1, 'article/topic', 'Мэдээний сэдэв', 5),
    (7, null, 'banner', 'Баннер', 4),
    (9, null, 'feature', 'Онцлох', 1),
    (10, null, 'feedback', 'Санал хүсэлт', 1),
    (11, null, 'menu', 'Цэс', 6),
    (12, null, 'photo', 'Зургийн сан', 5),
    (13, null, 'organisation', 'Байгууллага', 6),
    (8, 13, 'department', 'Байгууллагын салбар', 1),
    (14, null, 'staticPage', 'Хуудас', 2),
    (15, null, 'staticText', 'Текст', 3),
    (16, null, 'transaction', 'Гүйлгээ', 1),
    (17, null, 'user', 'Хэрэглэгч', 4),
    (18, null, 'poll', 'Санал асуулга', 5),
    (19, null, 'subscription', 'Subscription', 7),
    (20, null, 'file', 'Файл', 10)
;

CREATE TABLE websiteChosenModule(
                                    site_id TINYINT UNSIGNED NOT NULL,
                                    module_id TINYINT UNSIGNED NOT NULL,
                                    PRIMARY KEY (site_id, module_id),
                                    FOREIGN KEY (site_id) REFERENCES website(id) ON DELETE CASCADE ON UPDATE CASCADE,
                                    FOREIGN KEY (module_id) REFERENCES websiteModule(id) ON DELETE CASCADE ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE websiteConfigKey(
                                 tkey VARCHAR(50) NOT NULL,
                                 label VARCHAR(255) NOT NULL,
                                 groupType TINYINT(1) NOT NULL,
                                 formType TINYINT(1) NOT NULL,
                                 ordering TINYINT(3) NOT NULL  DEFAULT 0,
                                 PRIMARY KEY (tkey),
                                 KEY (groupType, ordering)
)Engine=InnoDB;

CREATE TABLE websiteConfig(
                              tkey VARCHAR(64) NOT NULL,
                              value VARCHAR(300) NOT NULL,
                              site_id TINYINT UNSIGNED NOT NULL,
                              PRIMARY KEY (tkey, site_id),
                              FOREIGN KEY (site_id) REFERENCES website(id) ON DELETE CASCADE ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE country(
                        id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
                        name VARCHAR(65) NOT NULL,
                        code varchar(3),
                        ordering TINYINT NOT NULL DEFAULT 0,
                        PRIMARY KEY (id),
                        UNIQUE KEY (name),
                        KEY (ordering)
)Engine=InnoDB;

CREATE TABLE city(
                     id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
                     name VARCHAR(64) NOT NULL,
                     code varchar(3),
                     country_id TINYINT UNSIGNED NOT NULL,
                     city TINYINT NOT NULL DEFAULT 0,
                     centerLatitude DECIMAL(11,8),
                     centerLongitude DECIMAL(11,8),
                     radius SMALLINT UNSIGNED,
                     ordering TINYINT NOT NULL DEFAULT 0,
                     PRIMARY KEY (id),
                     FOREIGN KEY (country_id) REFERENCES country(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                     KEY(ordering)
)Engine=InnoDB;

CREATE TABLE district(
                         id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
                         name VARCHAR(64) NOT NULL,
                         capital VARCHAR(255),
                         city_id SMALLINT UNSIGNED NOT NULL,
                         microDistrictCount SMALLINT UNSIGNED NOT NULL DEFAULT 0,
                         centerLatitude DECIMAL(11,8),
                         centerLongitude DECIMAL(11,8),
                         radius SMALLINT UNSIGNED,
                         ordering TINYINT NOT NULL DEFAULT 0,
                         PRIMARY KEY (id),
                         FOREIGN KEY (city_id) REFERENCES city(id) ON DELETE CASCADE ON UPDATE CASCADE,
                         KEY(ordering)
)Engine=InnoDB;

CREATE TABLE microDistrict(
                              id INTEGER UNSIGNED NOT NULL,
                              name VARCHAR(255) NOT NULL,
                              district_id MEDIUMINT UNSIGNED NOT NULL,
                              PRIMARY KEY (id),
                              KEY(name),
                              FOREIGN KEY (district_id) REFERENCES district(id) ON DELETE RESTRICT ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE organisationCategory (
                                      id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                                      parent_id INTEGER UNSIGNED,
                                      name VARCHAR(100),
                                      alias VARCHAR(100) DEFAULT NULL,
                                      template VARCHAR(50),
                                      ordering TINYINT UNSIGNED NOT NULL DEFAULT 1,
                                      image_name VARCHAR(255),
                                      image_ext VARCHAR(4),
                                      image_ratio DECIMAL(4,2),
                                      keyword VARCHAR(255),
                                      description TEXT,
                                      organisationCount INTEGER UNSIGNED NOT NULL DEFAULT 0,
                                      status TINYINT NOT NULL DEFAULT 0,
                                      created DATETIME NULL,
                                      createdby INTEGER UNSIGNED,
                                      updated DATETIME NULL,
                                      updatedby INTEGER UNSIGNED,
                                      lang CHAR(2) NOT NULL DEFAULT 'mn',
                                      site_id TINYINT UNSIGNED NULL,
                                      tags varchar(2000) CHARACTER SET latin1 DEFAULT NULL,
                                      PRIMARY KEY(id),
                                      KEY (ordering, name),
                                      FOREIGN KEY (parent_id) REFERENCES organisationCategory(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                                      KEY (created),
                                      KEY (site_id),
                                      KEY (lang)
)ENGINE=InnoDB;

CREATE TABLE organisation(
                             id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                             name VARCHAR(128) NOT NULL,
                             abbr VARCHAR(32),
                             internationalName VARCHAR(128),
                             internationalAbbr VARCHAR(32),
                             type TINYINT NOT NULL DEFAULT 1,
                             tagline VARCHAR(255),
                             alias VARCHAR(64),
                             template VARCHAR(50),
                             domain VARCHAR(64),
                             description VARCHAR(255),
                             categoryIds VARCHAR(500),
                             country_id TINYINT UNSIGNED,
                             city_id SMALLINT UNSIGNED,
                             district_id MEDIUMINT UNSIGNED,
                             microDistrict_id INTEGER UNSIGNED,
                             logo_name VARCHAR(255),
                             logo_ext VARCHAR(4),
                             logo_ratio DECIMAL(4,2),
                             cover_name VARCHAR(255),
                             cover_ext VARCHAR(4),
                             cover_ratio DECIMAL(4,2),
                             introduction MEDIUMTEXT,
                             service MEDIUMTEXT,
                             timetable MEDIUMTEXT,
                             videoId VARCHAR(32),
                             address TEXT,
                             phone VARCHAR(32),
                             email VARCHAR(255),
                             websiteAddress VARCHAR(255),
                             twitterAddress VARCHAR(255),
                             facebookAddress VARCHAR(255),
                             linkedinAddress VARCHAR(255),
                             youtubeAddress VARCHAR(255),
                             admin_id INTEGER UNSIGNED,
                             ordering TINYINT UNSIGNED NOT NULL DEFAULT 1,
                             readCount INTEGER UNSIGNED NOT NULL DEFAULT 0,
                             photoCount TINYINT NOT NULL DEFAULT 0,
                             status TINYINT NOT NULL DEFAULT 0,
                             register VARCHAR(20),
                             startedDate DATE NULL,
                             numberOfEmployment MEDIUMINT DEFAULT 0,
                             vatPayer BOOLEAN NOT NULL DEFAULT 0,
                             financePhone VARCHAR(20),
                             financeEmail VARCHAR(100),
                             bankName VARCHAR(100),
                             bankAccount VARCHAR(100),
                             bankAccountName VARCHAR(100),
                             longitude DOUBLE,
                             latitude DOUBLE,
                             created DATETIME NOT NULL,
                             createdby INTEGER UNSIGNED,
                             updated DATETIME,
                             updatedby INTEGER UNSIGNED,
                             lang CHAR(2) NOT NULL DEFAULT 'mn',
                             site_id TINYINT UNSIGNED NULL,
                             PRIMARY KEY (id),
                             UNIQUE KEY (register),
                             KEY(alias),
                             KEY(domain),
                             KEY(status),
                             KEY(ordering, name),
                             KEY(startedDate),
                             KEY(lang),
                             KEY(site_id),
                             KEY(created),
                             FOREIGN KEY (country_id) REFERENCES country(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                             FOREIGN KEY (city_id) REFERENCES city(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                             FOREIGN KEY (district_id) REFERENCES district(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                             FOREIGN KEY (microDistrict_id) REFERENCES microDistrict(id) ON DELETE RESTRICT ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE organisationChosenCategory(
                                           organisation_id INTEGER UNSIGNED NOT NULL,
                                           category_id INTEGER UNSIGNED NOT NULL,
                                           PRIMARY KEY (organisation_id, category_id),
                                           FOREIGN KEY (organisation_id) REFERENCES organisation(id) ON DELETE CASCADE ON UPDATE CASCADE,
                                           FOREIGN KEY (category_id) REFERENCES organisationCategory(id) ON DELETE CASCADE ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE organisationPhoto(
                                  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                                  organisation_id INTEGER UNSIGNED NOT NULL,
                                  photo_name VARCHAR(255),
                                  photo_ext VARCHAR(4),
                                  photo_ratio DECIMAL(4,2),
                                  description TEXT,
                                  ordering SMALLINT UNSIGNED NOT NULL DEFAULT 0,
                                  created DATETIME NULL,
                                  createdby INTEGER UNSIGNED,
                                  updated DATETIME NULL,
                                  updatedby INTEGER UNSIGNED,
                                  lang CHAR(2) NOT NULL DEFAULT 'mn',
                                  site_id TINYINT UNSIGNED NULL,
                                  PRIMARY KEY (id),
                                  FOREIGN KEY (organisation_id) REFERENCES organisation(id) ON DELETE CASCADE ON UPDATE CASCADE,
                                  KEY (lang),
                                  KEY (site_id)
)Engine=InnoDB;

CREATE TABLE department (
                            id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                            organisation_id INTEGER UNSIGNED NOT NULL,
                            name VARCHAR(255) NOT NULL,
                            description VARCHAR(1000),
                            ordering INTEGER UNSIGNED NOT NULL DEFAULT 1,
                            status TINYINT(1) NOT NULL DEFAULT 0,
                            longitude DOUBLE,
                            latitude DOUBLE,
                            timetable VARCHAR(2000),
                            created DATETIME NULL,
                            createdby INTEGER UNSIGNED,
                            updated DATETIME NULL,
                            updatedby INTEGER UNSIGNED,
                            lang CHAR(2) NOT NULL DEFAULT 'mn',
                            site_id TINYINT UNSIGNED NULL,
                            PRIMARY KEY (id),
                            KEY (lang),
                            KEY(site_id),
                            FOREIGN KEY (organisation_id) REFERENCES organisation(id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE = InnoDB;

CREATE TABLE userRole(
                         role VARCHAR(32) NOT NULL,
                         description VARCHAR(255) NOT NULL,
                         reachableRoles VARCHAR(2048),
                         site_id TINYINT UNSIGNED NULL,
                         PRIMARY KEY (role),
                         KEY(site_id)
)Engine=InnoDB;

INSERT INTO userRole(role, description, reachableRoles, site_id) VALUES
                                                                     ('ROLE_ADMIN', 'Админ', '', 1),
                                                                     ('ROLE_SUPER', 'Супер Админ', '', 1),
                                                                     ('ROLE_HOSTMASTER', 'Хостмастер', '', 1);

CREATE TABLE user (
                      id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                      loginname VARCHAR(60),
                      balance DECIMAL(13,2) default 0,
                      password VARCHAR(128),
                      passwordRecoveryToken VARCHAR(32),
                      givenname VARCHAR(60),
                      surname VARCHAR(60),
                      profilePublic TINYINT NOT NULL DEFAULT 0,
                      email VARCHAR(100),
                      emailConfirmCode VARCHAR(32),
                      emailConfirmed TINYINT NOT NULL DEFAULT 0,
                      phone VARCHAR(100),
                      phoneConfirmCode VARCHAR(32),
                      phoneConfirmed TINYINT NOT NULL DEFAULT 0,
                      phone2 VARCHAR(32),
                      photo VARCHAR(255),
                      photo_name VARCHAR(255),
                      photo_ext VARCHAR(4),
                      photo_ratio DECIMAL(4,2),
                      birthDate DATE,
                      civilRegistrationNumber CHAR(10),
                      gender CHAR(1),
                      bio TEXT,
                      educationalLevel TINYINT,
                      status TINYINT NOT NULL DEFAULT 0,
                      role VARCHAR(255),
                      description VARCHAR(255),
                      created DATETIME NOT NULL,
                      createdby INTEGER UNSIGNED,
                      updated DATETIME,
                      updatedby INTEGER UNSIGNED,
                      address VARCHAR (255),
                      expired DATETIME,
                      lastLogin DATETIME,
                      rank VARCHAR (500),
                      questionAnswerCount INTEGER UNSIGNED DEFAULT 0,
                      questionRightAnswerCount INTEGER UNSIGNED DEFAULT 0,
                      organisation_id INTEGER UNSIGNED,
                      site_id TINYINT UNSIGNED NULL,
                      UNIQUE KEY (loginname),
                      UNIQUE KEY (email),
                      UNIQUE KEY (phone),
                      UNIQUE KEY (civilRegistrationNumber),
                      KEY (status),
                      KEY (created),
                      PRIMARY KEY(id),
                      FOREIGN KEY(organisation_id) REFERENCES organisation(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                      KEY(site_id),
                      FOREIGN KEY(createdby) REFERENCES user(id) ON UPDATE CASCADE,
                      FOREIGN KEY(updatedby) REFERENCES user(id) ON UPDATE CASCADE,
                      FOREIGN KEY (role) REFERENCES userRole(role) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB AUTO_INCREMENT=20;

ALTER TABLE organisationCategory ADD FOREIGN KEY (createdby) REFERENCES user(id) ON UPDATE CASCADE;
ALTER TABLE organisationCategory ADD FOREIGN KEY (updatedby) REFERENCES user(id) ON UPDATE CASCADE;
ALTER TABLE organisation ADD FOREIGN KEY(createdby) REFERENCES user(id) ON UPDATE CASCADE;
ALTER TABLE organisation ADD FOREIGN KEY(updatedby) REFERENCES user(id) ON UPDATE CASCADE;
ALTER TABLE department ADD FOREIGN KEY (createdby) REFERENCES user(id) ON UPDATE CASCADE;
ALTER TABLE department ADD FOREIGN KEY (updatedby) REFERENCES user(id) ON UPDATE CASCADE;
ALTER TABLE organisationPhoto ADD FOREIGN KEY (createdby) REFERENCES user(id) ON UPDATE CASCADE;
ALTER TABLE organisationPhoto ADD FOREIGN KEY (updatedby) REFERENCES user(id) ON UPDATE CASCADE;


INSERT INTO user (id,loginname,givenname,email,emailConfirmed,password,status,role,created,createdby,balance,site_id)
VALUES
(1, 'myagmar','Мягмар','myagmar@sodonsolution.com', 1, '$2a$10$T17spBCK0tIaUKyGTG83.ueZ0nzXswcMLdUXP/KofBVqwAsJypt.S', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(2, 'hurelhuyag','Хүрэлхуяг','hurelhuyag@sodonsolution.com', 1, '$2a$10$3U4doz8U6dlXOHXsq5TQlecu8Q5ko3./8971QDDvFsHGnA2CpxBEW', 1, 'ROLE_SUPER', NOW(), 2, 0, 1)
     ,(3, 'namiruun','Намируун','namiruun@sodonsolution.com', 1, '$2a$10$W1fW6ceAXxtbmv2kjNwqvO25y8sW17Ilcv.sLfIxsAEg.diIrZ8CK', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(4, 'zoloo','Золсайхан','zolsaihan@sodonsolution.com', 1, '$2a$10$.k87u/rNPHKUc0xrm.xTiuf44FBimkZbxFVChqdvAamLvuzy4iPwK', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(8, 'enkhtur','Энхтөр','enkhtur@sodonsolution.com', 1, '$2a$10$2TIKLab.0TTnEMGeDIksT.6TG46ymZxhU4ih3YwJLK6nCEq04WE2e', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(11, 'tsoogii','Цогзолмаа','tsoogii@sodonsolution.com', 1, '$2a$10$iVr0oEnxZp7KR4Dadz96POFao9IKnK/Y4pA.0JymI.yquQEndF8AC', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(12, 'temka','Тэмүүлэн','temka@sodonsolution.com', 1, '$2a$10$YQ9obDtE6cSXFMatrzDpRuaw92D1nw5SEoUUZlLHr1SM/uKMWVMD2', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(13, 'eku','Эрдэнэбаяр','eku@sodonsolution.com', 1, '$2a$10$LysbHMry/aEZCRdVY/yl8.ZRuorWJ3kMA0uD59X6JTeHGsM2OfrBe', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(15, 'turbold','Төрболд','turbold@sodonsolution.com', 1, '$2a$10$jtNv0yAS5Dviq/OeeMHQGun.EbO.5gyLIB4S0Pv6jKhN9UPZRhojm', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(17, 'tileubek','Тилеубек','tileubek@sodonsolution.com', 1, '$2a$10$wzZSikDNUjDMthE7AMhdm.I/nFPVDCPNPLw9j78YoTkLcqJw4RjT6', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
     ,(18, 'hostmaster','Хостмастер','info@sodonsolution.com', 1, '$2a$10$l.8mrkKEoDVCIl6JY7J7LOEMZlENrb2JUs6dQoGr1lCGP0kEd2Yvm', 1, 'ROLE_HOSTMASTER', NOW(), 1, 0, 1)
     ,(19, 'enhbolor','Энхболор','enhbolor@sodonsolution.com', 1, '$2a$10$wesdvnOoZJGmIxl06Ppbs.jqb7SaqTs.ospXOsIETUF27so5XV9IC', 1, 'ROLE_SUPER', NOW(), 1, 0, 1)
;


CREATE TABLE userCurrentRole(
                                user_id INTEGER UNSIGNED NOT NULL,
                                role VARCHAR(255) NOT NULL,
                                PRIMARY KEY (user_id, role),
                                FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
                                FOREIGN KEY (role) REFERENCES userRole(role) ON DELETE CASCADE ON UPDATE CASCADE
)Engine=InnoDB;

CREATE TABLE UserConnection (
                                userId int(11) NOT NULL,
                                providerId varchar(255) NOT NULL,
                                providerUserId varchar(255) NOT NULL DEFAULT '',
                                rank int(11) NOT NULL,
                                displayName varchar(255) DEFAULT NULL,
                                profileUrl varchar(512) DEFAULT NULL,
                                imageUrl varchar(512) DEFAULT NULL,
                                accessToken varchar(500) NOT NULL,
                                secret varchar(255) DEFAULT NULL,
                                refreshToken varchar(500) DEFAULT NULL,
                                expireTime bigint(20) DEFAULT NULL,
                                site_id TINYINT UNSIGNED NULL,
                                PRIMARY KEY (userId, providerId, providerUserId),
                                key(site_id)
)ENGINE=InnoDB;

CREATE TABLE userLog(
                        id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                        user_id INTEGER UNSIGNED,
                        object VARCHAR(32) NOT NULL,
                        objectId VARCHAR(64) NOT NULL,
                        action TEXT NOT NULL,
                        ip VARCHAR(15) NOT NULL,
                        occurred DATETIME NOT NULL,
    /*occurredDay DATE GENERATED ALWAYS AS (DATE(occurred)),*/
                        userAgent VARCHAR(512),
                        PRIMARY KEY(id),
                        FOREIGN KEY(user_id) REFERENCES user(id) ON UPDATE CASCADE,
                        KEY (object),
                        KEY (objectId),
                        KEY (ip),
                        KEY (occurred),
    /*KEY (occurredDay),*/
                        KEY (userAgent)
)ENGINE=InnoDB;

create table persistent_logins (
                                   username varchar(64) not null,
                                   series varchar(64),
                                   token varchar(128) not null,
                                   last_used timestamp not null,
                                   PRIMARY KEY (series)
)ENGINE=InnoDB;

CREATE TABLE photoCategory (
                               id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                               parent_id INTEGER UNSIGNED,
                               name VARCHAR(100),
                               alias VARCHAR(100) DEFAULT NULL,
                               ordering TINYINT UNSIGNED NOT NULL DEFAULT 1,
                               keyword VARCHAR(255),
                               description TEXT,
                               status TINYINT NOT NULL DEFAULT 0,
                               created DATETIME NULL,
                               createdby INTEGER UNSIGNED,
                               updated DATETIME NULL,
                               updatedby INTEGER UNSIGNED,
                               site_id TINYINT UNSIGNED NULL,
                               PRIMARY KEY(id),
                               KEY (ordering, name),
                               FOREIGN KEY (parent_id) REFERENCES photoCategory(id) ON DELETE RESTRICT ON UPDATE CASCADE,
                               KEY (created),
                               FOREIGN KEY (createdby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                               FOREIGN KEY (updatedby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                               KEY (site_id)
)ENGINE=InnoDB;

CREATE TABLE photo (
                       id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                       category_id INTEGER UNSIGNED,
                       name VARCHAR(255),
                       width INTEGER UNSIGNED,
                       height INTEGER UNSIGNED,
                       path VARCHAR(255),
                       size INTEGER UNSIGNED,
                       status TINYINT NOT NULL DEFAULT 0,
                       created DATETIME NULL,
                       createdby INTEGER UNSIGNED,
                       updated DATETIME NULL,
                       updatedby INTEGER UNSIGNED,
                       site_id TINYINT UNSIGNED NULL,
                       PRIMARY KEY(id),
                       KEY (category_id),
                       KEY (name),
                       KEY (status),
                       KEY (created),
                       KEY (path),
                       FOREIGN KEY (createdby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                       FOREIGN KEY (updatedby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                       FOREIGN KEY(category_id) REFERENCES photoCategory(id) ON DELETE SET NULL ON UPDATE CASCADE,
                       KEY (site_id)
)ENGINE=InnoDB;

create table geo_ip_country(
                               code CHAR(2) NOT NULL,
                               PRIMARY KEY (code)
)ENGINE=InnoDB;

INSERT INTO geo_ip_country VALUES('MN');

create table geo_ipv4_blocks(
                                countryCode char(2) not null,
                                fromIP integer UNSIGNED not null,
                                toIP integer UNSIGNED not null,
                                ipPoly POLYGON NOT NULL,
                                source VARCHAR(10),
                                PRIMARY KEY (countryCode, fromIP, toIP),
                                SPATIAL KEY (ipPoly),
                                KEY (source)
)Engine=InnoDB;

CREATE TABLE userSession (
                             id VARCHAR(128) NOT NULL,
                             uri VARCHAR(256) NOT NULL,
                             remoteAddress VARCHAR(15) NOT NULL,
                             protocol VARCHAR(128),
                             user_id INTEGER UNSIGNED,
                             lastPacketReceived DATETIME NOT NULL,
                             retriedCount INTEGER UNSIGNED NOT NULL DEFAULT 0,
                             PRIMARY KEY (id),
                             FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
                             KEY(lastPacketReceived)
)ENGINE=InnoDB;

CREATE TABLE mailCategory (
                              id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                              name VARCHAR(100),
                              alias VARCHAR(30),
                              ordering TINYINT UNSIGNED NOT NULL DEFAULT 1,
                              status TINYINT NOT NULL DEFAULT 0,
                              created DATETIME NULL,
                              createdby INTEGER UNSIGNED,
                              updated DATETIME NULL,
                              updatedby INTEGER UNSIGNED,
                              site_id TINYINT UNSIGNED NULL,
                              PRIMARY KEY(id),
                              UNIQUE KEY (alias, site_id),
                              KEY (ordering),
                              KEY (status),
                              FOREIGN KEY (createdby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                              FOREIGN KEY (updatedby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE
)ENGINE=InnoDB;

CREATE TABLE mail (
                      id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                      category_id INTEGER UNSIGNED,
                      sender INTEGER UNSIGNED,
                      receiver INTEGER UNSIGNED,
                      subject varchar(255) NOT NULL,
                      content TEXT,
                      seen TINYINT(1) UNSIGNED NOT NULL,
                      created DATETIME NULL,
                      createdby INTEGER UNSIGNED,
                      updated DATETIME NULL,
                      updatedby INTEGER UNSIGNED,
                      site_id TINYINT UNSIGNED NULL,
                      PRIMARY KEY (id),
                      FOREIGN KEY(category_id) REFERENCES mailCategory(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      FOREIGN KEY (sender) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      FOREIGN KEY (receiver) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      FOREIGN KEY (createdby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      FOREIGN KEY (updatedby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      KEY (site_id)
) ENGINE=InnoDB;

CREATE TABLE tag(
                    alias VARCHAR(30) CHAR SET 'latin1' COLLATE 'latin1_bin' NOT NULL,
                    PRIMARY KEY (alias),
                    KEY(alias)
)ENGINE=InnoDB;

CREATE TABLE `attribute` (
                             `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                             `icon_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
                             `icon_ext` varchar(4) CHARACTER SET latin1 DEFAULT NULL,
                             `icon_ratio` decimal(4,2) DEFAULT NULL,
                             `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
                             `description` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL,
                             `path` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
                             `showType` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
                             `type` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
                             `unit` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
                             `min` double DEFAULT NULL,
                             `max` double DEFAULT NULL,
                             `step` smallint(5) unsigned DEFAULT NULL,
                             `hasSearch` tinyint(1) NOT NULL DEFAULT 1,
                             `tags` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
                             `ordering` smallint(5) NOT NULL DEFAULT 0,
                             `created` datetime DEFAULT NULL,
                             `createdby` int(10) unsigned DEFAULT NULL,
                             `updated` datetime DEFAULT NULL,
                             `updatedby` int(10) unsigned DEFAULT NULL,
                             PRIMARY KEY (`id`),
                             UNIQUE KEY `path` (`path`),
                             KEY `showType` (`showType`),
                             KEY `type` (`type`),
                             KEY `createdby` (`createdby`),
                             KEY `updatedby` (`updatedby`),
                             FULLTEXT KEY `tags` (`tags`),
                             KEY `ordering` (`ordering`),
                             CONSTRAINT `attribute_ibfk_1` FOREIGN KEY (`createdby`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                             CONSTRAINT `attribute_ibfk_2` FOREIGN KEY (`updatedby`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `attributeValue` (
                                  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                                  `attribute_id` int(10) unsigned NOT NULL,
                                  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
                                  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
                                  `ordering` smallint(5) unsigned DEFAULT NULL,
                                  `created` datetime DEFAULT NULL,
                                  `createdby` int(10) unsigned DEFAULT NULL,
                                  `updated` datetime DEFAULT NULL,
                                  `updatedby` int(10) unsigned DEFAULT NULL,
                                  PRIMARY KEY (`id`),
                                  KEY `value` (`value`),
                                  KEY `ordering` (`ordering`),
                                  KEY `attribute_id` (`attribute_id`),
                                  KEY `createdby` (`createdby`),
                                  KEY `updatedby` (`updatedby`),
                                  CONSTRAINT `attributeValue_ibfk_1` FOREIGN KEY (`attribute_id`) REFERENCES `attribute` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                                  CONSTRAINT `attributeValue_ibfk_2` FOREIGN KEY (`createdby`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
                                  CONSTRAINT `attributeValue_ibfk_3` FOREIGN KEY (`updatedby`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE organisationAttribute (
                                       content_id int(10) unsigned NOT NULL,
                                       attribute_id int(10) unsigned NOT NULL,
                                       value_id int(10) unsigned DEFAULT NULL,
                                       value varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
                                       hasSearch tinyint(1) NOT NULL DEFAULT 1,
                                       PRIMARY KEY (content_id,attribute_id)
) ENGINE=InnoDB;

CREATE TABLE fileCategory (
                              id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                              name VARCHAR(100),
                              alias VARCHAR(30),
                              ordering TINYINT UNSIGNED NOT NULL DEFAULT 1,
                              status TINYINT NOT NULL DEFAULT 0,
                              lang CHAR(2) NOT NULL DEFAULT 'mn',
                              created DATETIME NULL,
                              createdby INTEGER UNSIGNED,
                              updated DATETIME NULL,
                              updatedby INTEGER UNSIGNED,
                              site_id TINYINT UNSIGNED NULL,
                              PRIMARY KEY(id),
                              UNIQUE KEY (alias, site_id),
                              KEY (ordering),
                              KEY (status),
                              KEY(lang),
                              FOREIGN KEY (createdby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                              FOREIGN KEY (updatedby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE
)ENGINE=InnoDB;

CREATE TABLE file (
                      id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
                      category_id INTEGER UNSIGNED,
                      name VARCHAR(100),
                      description TEXT,
                      image_name VARCHAR(255),
                      image_ext VARCHAR(4),
                      image_ratio DECIMAL(4,2),
                      file_path VARCHAR(255) NOT NULL,
                      file_size INTEGER UNSIGNED NOT NULL,
                      file_type VARCHAR(100),
                      file_subType VARCHAR(100),
                      file_width SMALLINT UNSIGNED,
                      file_height SMALLINT UNSIGNED,
                      status TINYINT NOT NULL DEFAULT 0,
                      lang CHAR(2) NOT NULL DEFAULT 'mn',
                      created DATETIME NULL,
                      createdby INTEGER UNSIGNED,
                      updated DATETIME NULL,
                      updatedby INTEGER UNSIGNED,
                      site_id TINYINT UNSIGNED NULL,
                      PRIMARY KEY(id),
                      KEY (category_id),
                      KEY (name),
                      KEY (status),
                      KEY (lang),
                      KEY (created),
                      FOREIGN KEY (createdby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      FOREIGN KEY (updatedby) REFERENCES user(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      FOREIGN KEY(category_id) REFERENCES fileCategory(id) ON DELETE SET NULL ON UPDATE CASCADE,
                      KEY (site_id)
)ENGINE=InnoDB;

CREATE TABLE expoPushNotification (
                                      id int(10) unsigned NOT NULL AUTO_INCREMENT,
                                      subscription text NOT NULL,
                                      user_id int(10) unsigned DEFAULT NULL,
                                      created datetime NOT NULL,
                                      site_id int(10) unsigned NOT NULL,
                                      PRIMARY KEY (id),
                                      FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
