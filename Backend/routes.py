from flask import Flask,jsonify,request
import database_connection
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/writeRecipe',methods=['POST'])
def write_recipe():
    if not request.json:
        # If the request isn't JSON then return a 400 error
        return abort(400)

    data = request.json

    database_connection.write(data['name'],data['date'],data['ingredients'],data['times'])

@app.route('/readRecipes',methods=['GET'])
def read_recipes():
    return database_connection.read()
