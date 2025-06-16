from libraries.libraries import *
from views.login.views import login_main
from views.logout.views import logout_main
from views.landing.views import landing_main
from views.profile.views import profile_main
from views.register.views import register_main
from views.dashboard.views import dashboard_main


app = Flask(__name__)
app.debug = True
app.secret_key = "m3r1TpL@tF0rM"


app.register_blueprint(login_main, url_prefix='/api/login')
app.register_blueprint(logout_main, url_prefix='/api/logout')
app.register_blueprint(profile_main, url_prefix='/api/profile')
app.register_blueprint(landing_main, url_prefix='/api/landing')
app.register_blueprint(register_main, url_prefix='/api/register')
app.register_blueprint(dashboard_main, url_prefix='/api/dashboard')



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)