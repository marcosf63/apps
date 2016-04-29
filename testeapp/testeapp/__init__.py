from flask import Flask, render_template, request, redirect, url_for, abort, session
import os

app = Flask(__name__)

from models import *

env = os.environ.get('EXEMPLE_ENV', 'Dev')
app.config.from_object('testeapp.settings.%sConfig' % env)
app.config['ENV'] = env

@app.route('/')
def home():
  return render_template('index.html')

@app.route('/signup', methods = ['POST'])
def signup():
  user = User(request.form['username'], request.form['message'])
  db.session.add(user)
  db.session.commit()
  return redirect(url_for('message', username = user.username))

@app.route('/message/<username>')
def message(username):
  user = User.query.filter_by(username=username).first_or_404()
  return render_template('message.html', username=user.username, message=user.message)

@app.errorhandler(404)
def pag_not_found(e):
  return render_template('404.html'), 404

if __name__ == '__main__':
  app.run(debug=True)
