from flask import Flask, render_template, request
import requests
import simplejson


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/story/count')
def count_story():
    resp = requests.get('http://192.168.1.186:8983/solr/eidos_story_collection/select?q=*%3A*&rows=0&wt=json')
    json = simplejson.dumps(resp.json())
    return json, 200

if __name__ == '__main__':
    app.run()
