import sys
sys.path.append('../../')
from libraries.libraries import *

logout_main = Blueprint('logout_main', __name__, template_folder='templates', static_folder='static')

@logout_main.route('/', methods=['GET', 'POST'])
def logout_page():
    return jsonify({
        'status': 'success',
        'message': 'Welcome to the Logout Page!'
    })