import sys
sys.path.append('../../')
from libraries.libraries import *

dashboard_main = Blueprint('dashboard_main', __name__, template_folder='templates', static_folder='static')
@dashboard_main.route('/', methods=['GET', 'POST'])
def dashboard_page():
    return jsonify({
        'status': 'success',
        'message': 'Welcome to the Dashboard Page!'
    })