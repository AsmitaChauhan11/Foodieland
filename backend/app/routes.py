from flask import Blueprint, request, jsonify
import logging

logger = logging.getLogger(__name__)
api_bp = Blueprint('api', __name__)

# Import CRUD operations after Blueprint definition to avoid circular imports
from .db.crud import (
    get_users,
    get_user_by_id,
    create_user,
    update_user,
    delete_user,
    verify_user
)

@api_bp.route('/users', methods=['GET'])
def users():
    logger.info('GET /users called')
    users = get_users()
    result = [user.to_dict() for user in users]
    return jsonify(result)

@api_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    logger.info(f'GET /users/{user_id} called')
    user = get_user_by_id(user_id)
    if user:
        return jsonify(user)
    else:
        return jsonify({'message': 'User not found'}), 404

@api_bp.route('/users', methods=['POST'])
def add_user():
    logger.info('POST /users called')
    data = request.get_json()
    user = create_user(data)
    return jsonify(user), 201

@api_bp.route('/users/<email>', methods=['PUT'])
def update_user_route(email):
    logger.info(f'PUT /users/{email} called')
    data = request.get_json()
    user = update_user(email, data)
    if user:
        return jsonify(user)
    else:
        return jsonify({'message': 'User not found'}), 404

@api_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user_route(user_id):
    logger.info(f'DELETE /users/{user_id} called')
    user = delete_user(user_id)
    if user:
        return jsonify({'message': 'User deleted'})
    else:
        return jsonify({'message': 'User not found'}), 404

@api_bp.route('/login', methods=['POST'])
def login():
    logger.info('POST /login called')
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    user = verify_user(email, password)
    if user:
        # For simplicity, we'll just return a success message and user info
        # In a real application, you'd generate and return a JWT or session token
        return jsonify({
            'message': 'Login successful',
            'user': user.to_dict()
        }), 200
    else:
        return jsonify({'message': 'Invalid email or password'}), 401

@api_bp.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add(
        'Access-Control-Allow-Headers', 'Content-Type,Authorization'
    )
    response.headers.add(
        'Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS'
    )
    return response
