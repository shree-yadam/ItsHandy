DROP TABLE IF EXISTS provider_categories CASCADE;

CREATE TABLE provider_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  provider_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);
