DROP TABLE IF EXISTS requests CASCADE;

CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50),
  city VARCHAR(15),
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  date_needed date,
  img_url VARCHAR,
  description TEXT,
  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  provider_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date_completed date,
  price VARCHAR(15)
);