from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __abstract__=True
    email = db.Column(db.String(120), unique=True, nullable=False)
    hashed_password = db.Column(db.String(480), unique=False, nullable=False)
    nombre= db.Column (db.String(250), nullable=False)
    apellido = db.Column (db.String(250), nullable=False)
    salt = db.Column(db.String(250), nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def user_serialize(self):
        return {
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            # do not serialize the password, its a security breach
        }