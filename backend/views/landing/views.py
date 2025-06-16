import sys
sys.path.append('../../')
from libraries.libraries import *


landing_main = Blueprint('landing_main', __name__, template_folder='templates', static_folder='static')

@landing_main.route('/', methods=['GET', 'POST'])
def landing_page():
    
    return jsonify({
        'status': 'success',
        'message': 'Welcome to the Landing Page!'
    })