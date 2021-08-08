INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider)
VALUES ('Joe',
'Smith',
'joe@smith.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+12344567777',
'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png', false);

INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider, avg_rating)
VALUES
('service',
'provider',
'service@provider.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+1231234444',
'https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png', true, 3);

-- Provide account

INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider, avg_rating)
VALUES
('Tomothy',
'Harrison',
'tomothy.harrison@example.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'437999222',
'https://newstthomasacademy.com/gems/photo-1/photo_id_11532590209.png', true, 5);


-- Client account
INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider)
VALUES ('Norma',
'Mays',
'norma@mays.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'437999222',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpO9e2-NLN8LtcqqCMUsqsWh_IuTPvKPy04nh9uyTTHa4tf-CLBjSf3IDQ95YvkliiplM&usqp=CAU', false);



-- Client Account
INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider)
VALUES ('Jack',
'Smiley',
'jack@smiley.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'437999444',
'https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png', false);
