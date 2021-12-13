from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/food')
def food():
    return render_template('food.html')

@app.route('/vehical')
def vehical():
    return render_template('vehical.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)