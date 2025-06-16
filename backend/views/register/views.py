import sys
sys.path.append('../../')
from libraries.libraries import *

register_main = Blueprint('register_main', __name__, template_folder='templates', static_folder='static')

@register_main.route('/', methods=['GET', 'POST'])
def register_page():
    return jsonify({
        'status': 'success',
        'message': 'Welcome to the Register Page!'
    })
