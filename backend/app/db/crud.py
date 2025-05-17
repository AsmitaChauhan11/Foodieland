from .models import User
from . import Session
from sqlalchemy.orm import scoped_session
from sqlalchemy.exc import SQLAlchemyError
import logging

logger = logging.getLogger(__name__)

def get_session():
    return Session()

def get_users():
    session = get_session()
    try:
        users = session.query(User).all()
        return users
    finally:
        session.close()

def get_user_by_id(user_id):
    session = get_session()
    try:
        user = session.query(User).get(user_id)
        return user.to_dict()
    finally:
        session.close()

def create_user(data):
    session = get_session()
    try:
        new_user = User(
            email=data.get('email'),
            password=data.get('password'),  # Consider hashing the password
            first_name=data.get('first_name'),
            last_name=data.get('last_name')
        )
        session.add(new_user)
        session.commit()
        return new_user.to_dict()
    except SQLAlchemyError as e:
        session.rollback()
        logger.error(f"Error creating user: {e}")
        return None
    finally:
        session.close()

def update_user(email, data):
    session = get_session()
    try:
        user = session.query(User).filter_by(email=email).first()
        if user:
            # Only update the fields that are in the data dictionary, skip password
            user.first_name = data.get('first_name', user.first_name)
            user.last_name = data.get('last_name', user.last_name)
            
            # If the email needs to be updated, make sure it's not the same as the current email
            new_email = data.get('email', user.email)
            if new_email != user.email:
                user.email = new_email

            session.commit()
            return user.to_dict()
        else:
            return None  # If the user with this email doesn't exist
    except SQLAlchemyError as e:
        session.rollback()
        logger.error(f"Error updating user: {e}")
        return None
    finally:
        session.close()

def delete_user(user_id):
    session = get_session()
    try:
        user = session.query(User).get(user_id)
        if user:
            session.delete(user)
            session.commit()
            return user.to_dict()
        else:
            return None
    except SQLAlchemyError as e:
        session.rollback()
        logger.error(f"Error deleting user: {e}")
        return None
    finally:
        session.close()

def verify_user(email, password):
    session = get_session()
    try:
        user = session.query(User).filter_by(email=email).first()
        if user and user.password == password:
            return user
        else:
            return None
    except SQLAlchemyError as e:
        logger.error(f"Error verifying user: {e}")
        return None
    finally:
        session.close()

