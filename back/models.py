from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Roles (db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    rolename = db.Column(db.String(50), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "rolename": self.rolename
        }

class Users (db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    password = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=True)
    lastname = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(100), nullable=False)
    avatar = db.Column(db.String(100), nullable=True, default='defaultavatar.jpg')
    phone = db.Column(db.String(12), nullable=True)
    createdate = db.Column(db.DateTime, default=datetime.now())
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable=False)
    role = db.relationship(Roles)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "avatar": self.avatar,
            "phone": self.phone,
            "createdate": self.createdate,
            "role": self.role.serialize(),
        }

blocat = db.Table('blocat',
    db.Column('blog_id', db.Integer, db.ForeignKey('blog.blog_id')),
    db.Column('categoria_id', db.Integer, db.ForeignKey('categoria.categoria_id'))
)

# student_identifier = db.Table('student_identifier',
#     db.Column('class_id', db.Integer, db.ForeignKey('classes.class_id')),
#     db.Column('user_id', db.Integer, db.ForeignKey('students.user_id'))
# )
        
class Blog (db.Model):
    __tablename__ = 'blog'
    blog_id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(100), nullable=False)
    video = db.Column(db.String(1000), nullable=True)
    foto = db.Column(db.String(1000), nullable=True)
    descripcion = db.Column(db.String(100), nullable=False)
    subtitulo = db.Column(db.String(100), nullable=False)
    cuerpo = db.Column(db.String(10000), nullable=False)
    code = db.Column(db.String(10000), nullable=True)
    createdate = db.Column(db.DateTime, default=datetime.now())
    categorias = db.relationship("Categoria", 
                                secondary=blocat)

    def serialize(self):
        return {
            "blog_id": self.blog_id,
            "titulo": self.titulo,
            "url": self.url,
            "video": self.video,
            "foto": self.foto,
            "descripcion": self.descripcion,
            "subtitulo": self.subtitulo,
            "cuerpo": self.cuerpo,
            "code": self.code,
            "createdate": self.createdate,
            "categorias": categorias,
        }

class Categoria (db.Model):
    __tablename__ = 'categoria'
    categoria_id = db.Column(db.Integer, primary_key=True)
    categoria = db.Column(db.String(50), unique=True, nullable=False)

    def serialize(self):
        return {
            "categoria_id": self.categoria_id,
            "categoria": self.categoria,
        }

# class Student(db.Model):
#     __tablename__ = 'students'
#     user_id = db.Column(db.Integer, primary_key=True)
#     user_fistName = db.Column(db.String(64))
#     user_lastName = db.Column(db.String(64))
#     user_email = db.Column(db.String(128), unique=True)


# class Class(db.Model):
#     __tablename__ = 'classes'
#     class_id = db.Column(db.Integer, primary_key=True)
#     class_name = db.Column(db.String(128), unique=True)
#     students = db.relationship("Student",
#                                secondary=student_identifier)