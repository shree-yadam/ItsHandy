INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider)
VALUES ('Joe',
'Smith',
'joe@smith.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+18198560945',
'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png', false),
('Rebecca',
'Teal',
'rebecca@teal.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+12344568888',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0r4Sg3R1lAJ3sLMG8cf55ezXaV09GEWhGw&usqp=CAU', false),
('Steven',
'Finney',
'steven@finney.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+12343428888',
'https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png', false);


-- Provide accounts

INSERT INTO users(first_name, last_name, email, password, phone_number, img_url, is_provider, avg_rating)
VALUES
('Andrew',
'Betts',
'service@provider.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+18198560945',
'https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png', true, 4),

('Tomothy',
'Harrison',
'tomothy.harrison@example.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+14379992222',
'https://newstthomasacademy.com/gems/photo-1/photo_id_11532590209.png', true, 3),

('Norma',
'Mays',
'norma@mays.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+14379992222',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyHE296mXaWLH_Ghjh_KhUSGiqyWnERt5CQ&usqp=CAU', true, 3),

('Jack',
'Smiley',
'jack@smiley.com',
'$2b$10$uyamXFFxLYK1ujchK3ENVuDc8x0aKBPJk9n38gP67WT0L130yddjC',
'+14379994444',
'https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png', true, 0);