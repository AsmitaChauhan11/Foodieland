from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from .models import Base
import logging

logger = logging.getLogger(__name__)

# Initialize the database engine and session globally
engine = None
Session = None

def init_db(app):
    global engine, Session
    database_uri = app.config['SQLALCHEMY_DATABASE_URI']
    engine = create_engine(database_uri, echo=True)
    Session = scoped_session(sessionmaker(bind=engine))
    Base.metadata.create_all(engine)
    logger.info('Database initialized')