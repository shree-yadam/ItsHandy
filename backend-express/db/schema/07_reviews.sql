DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE reviews (
  id  SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  provider_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  review INTEGER,
  request_id INTEGER REFERENCES requests(id) ON DELETE CASCADE
);