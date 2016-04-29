class Config(object):
  SECRET_KEY = 'teste12345'
 
class ProdConfig(Config):
  SQLALCHEMY_DATABASE_URI = 'mysql://localhost/testeapp'

class DevConfig(Config):
  DEBUG = True
  SQLALCHEMY_DATABASE_URI = 'sqlite:///testeapp.db'
  SQLALCHEMY_ECHO = True
