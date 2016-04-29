from flask import Flask, render_template, request, redirect, url_for, abort, session
import os

app = Flask(__name__)

env = os.environ.get('EXEMPLE_ENV', 'Dev')
app.config.from_object('testeapp.settings.%sConfig' % env)
app.config['ENV'] = env

@app.route('/')
def home():
  return render_template('index.html')

@app.errorhandler(404)
def pag_not_found(e):
  return render_template('404.html'), 404

if __name__ == '__main__':
  app.run(debug=True)
