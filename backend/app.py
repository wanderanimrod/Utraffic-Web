from flask import Flask, render_template
import flask

app = Flask(__name__, static_folder='../client/static')
app.debug = True

app.db = None
app.data_server = None


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=5001)