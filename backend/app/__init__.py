from flask import Flask
import logging
from logging.config import dictConfig
from .config import DevelopmentConfig, ProductionConfig
import os

def create_app():
    app = Flask(__name__)

    # Select configuration based on environment
    env = os.environ.get('FLASK_ENV', 'development')
    if env == 'production':
        app.config.from_object(ProductionConfig)
    else:
        app.config.from_object(DevelopmentConfig)

    # Initialize logging
    dictConfig(app.config['LOGGING_CONFIG'])

    # Initialize database connection
    from .db import init_db
    init_db(app)

    # Register blueprints
    from .routes import api_bp
    app.register_blueprint(api_bp)

    app.logger.info('Application initialized')

    return app