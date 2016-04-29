from flask_sqlalchemy import SQLAlchemy
from . import app

db = SQLAlchemy(app)

class AdminMenu(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  nome = db.Column(db.String)
  
  def __init__(self, nome):
    self.nome = nome

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String)
  message = db.Column(db.String)

  def __init__(self, username, message):
    self.username = username
    self.message = message
