import sys
sys.path.append('../../')
from libraries.libraries import *

login_main = Blueprint('login_main', __name__, template_folder='templates', static_folder='static')


@login_main.route('/', methods=['GET', 'POST'])
def login_page():
    
    return jsonify({
        'status': 'success',
        'message': 'Welcome to the Login Page!'
    })