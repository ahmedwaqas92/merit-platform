import sys
sys.path.append('../../')
from libraries.libraries import *

profile_main = Blueprint('profile_main', __name__, template_folder='templates', static_folder='static')

@profile_main.route('/', methods=['GET', 'POST'])
def profile_page():
    return jsonify({
        'status': 'success',
        'message': 'Welcome to the Profile Page!'
    })
