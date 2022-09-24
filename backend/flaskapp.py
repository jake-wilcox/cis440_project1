from flask import Flask, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)



app.config['MYSQL_HOST'] = '107.180.1.16'
app.config['MYSQL_USER'] = '440fall20225'
app.config['MYSQL_PASSWORD'] = '440fall20225'
app.config['MYSQL_DB'] = '440fall20225'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)


@app.route('/')
def home():
    return 'Home Page'



@app.route('/login', methods=['GET', 'POST'])
def test():
    # GET method(inital load of the page) returns html with sub
    if request.method == "POST":
        print('called')

        cursor = mysql.connection.cursor()
        print('cursor created')
        cursor.execute('SELECT * FROM user')
        account = cursor.fetchall()
        return f'{account}'
    else:
        return html_string

    



html_string = "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'/><title>Kool Gamez</title><link href='styles.css' rel='stylesheet'/></head><body><form action='#' method='POST'><p>Click to view user database</p><input type='submit' value='submit'></form></body></html>"








if __name__ == "__main__":
    app.run(debug=True)