from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'text': 'Hello world'}


class User(Resource):
    def get(self):
        return {'name': 'foo', 'email': 'foo@bar.org'}


api.add_resource(HelloWorld, '/hello')
api.add_resource(User, '/api/login')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
